'use client';

import { useCallback, useState } from 'react';
import { GoogleMap as GoogleMapComponent, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, MAP_CONTAINER_STYLE, MAP_OPTIONS, type MapLocation } from '@/lib/maps/google-maps';

interface GoogleMapProps {
  center: MapLocation;
  zoom?: number;
  markers?: MapLocation[];
  className?: string;
}

export default function GoogleMap({ center, zoom = 15, markers = [center], className = '' }: GoogleMapProps) {
  const [selectedMarker, setSelectedMarker] = useState<MapLocation | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    language: 'sr',
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <p className="text-red-500">Error loading maps</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500">Map not configured</p>
      </div>
    );
  }

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <GoogleMapComponent
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={{ lat: center.lat, lng: center.lng }}
        zoom={zoom}
        options={MAP_OPTIONS}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => setSelectedMarker(marker)}
            title={marker.title}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="p-2">
              {selectedMarker.title && (
                <h3 className="font-bold text-gray-900 mb-1">{selectedMarker.title}</h3>
              )}
              {selectedMarker.address && (
                <p className="text-sm text-gray-600">{selectedMarker.address}</p>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMapComponent>
    </div>
  );
}
