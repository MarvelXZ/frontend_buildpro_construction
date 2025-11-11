export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export interface MapLocation {
  lat: number;
  lng: number;
  title?: string;
  address?: string;
}

// Default center for Belgrade, Serbia (can be customized)
export const DEFAULT_CENTER: MapLocation = {
  lat: 44.7866,
  lng: 20.4489,
};

// Map configuration options
export const MAP_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: false,
  clickableIcons: false,
  scrollwheel: true,
  zoomControl: true,
  streetViewControl: false,
  fullscreenControl: true,
  mapTypeControl: false,
};

// Map container styles
export const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '100%',
  minHeight: '400px',
};
