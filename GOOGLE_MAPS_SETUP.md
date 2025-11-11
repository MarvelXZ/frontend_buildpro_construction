# Google Maps Setup Guide

This guide explains how to configure Google Maps for your construction website.

## 📍 Getting Started

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API** (required for displaying maps)
   - **Geocoding API** (optional, for address lookup)
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API Key (format: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
6. **Important**: Restrict your API key:
   - Click on the API key you created
   - Under "Application restrictions", select "HTTP referrers"
   - Add your website domain (e.g., `buildpro.rs/*`)

### 2. Configure Environment Variable

Add your API key to `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Note**: Never commit your `.env.local` file to GitHub!

---

## 🗺️ Usage

### Contact Page

The contact page automatically displays a map with your company location. The map is already integrated and uses translations for the marker information.

### Customizing the Location

To change the company location, update the coordinates in [contact/page.tsx](src/app/[locale]/contact/page.tsx#L23-L27):

```tsx
const companyLocation: MapLocation = {
  lat: 44.7866,  // Your latitude
  lng: 20.4489,  // Your longitude
  title: t("map.markerTitle"),
  address: t("map.address"),
};
```

**How to find coordinates:**
1. Go to [Google Maps](https://maps.google.com/)
2. Right-click on your location
3. Click on the coordinates to copy them
4. Update the `lat` and `lng` values

### Updating Address Translations

Update the address in all language files (`messages/*.json`):

```json
"contact": {
  "map": {
    "markerTitle": "Your Company Name",
    "address": "Your Full Address"
  }
}
```

---

## 🔧 Advanced Usage

### Using GoogleMap Component in Other Pages

You can use the `GoogleMap` component anywhere in your application:

```tsx
import GoogleMap from "@/components/maps/GoogleMap";
import { type MapLocation } from "@/lib/maps/google-maps";

// Single location
const location: MapLocation = {
  lat: 44.7866,
  lng: 20.4489,
  title: "Project Name",
  address: "Project Address",
};

<GoogleMap
  center={location}
  zoom={15}
  markers={[location]}
  className="h-[400px] w-full"
/>
```

### Multiple Markers

For project locations or multiple offices:

```tsx
const locations: MapLocation[] = [
  {
    lat: 44.7866,
    lng: 20.4489,
    title: "Main Office",
    address: "Belgrade, Serbia",
  },
  {
    lat: 44.8125,
    lng: 20.4612,
    title: "Project Site",
    address: "New Belgrade, Serbia",
  },
];

<GoogleMap
  center={locations[0]}
  zoom={12}
  markers={locations}
  className="h-[500px] w-full"
/>
```

---

## 🎨 Customization

### Map Options

Edit [src/lib/maps/google-maps.ts](src/lib/maps/google-maps.ts#L15-L23) to customize map behavior:

```ts
export const MAP_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: false,      // Show/hide all UI controls
  clickableIcons: false,         // Disable clicking on map POIs
  scrollwheel: true,             // Enable/disable scroll zoom
  zoomControl: true,             // Show/hide zoom buttons
  streetViewControl: false,      // Show/hide street view
  fullscreenControl: true,       // Show/hide fullscreen button
  mapTypeControl: false,         // Show/hide map type selector
};
```

### Map Styling

Apply custom map styles for a branded look:

```ts
export const MAP_OPTIONS: google.maps.MapOptions = {
  // ... existing options
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    // Add more styling rules...
  ],
};
```

Check [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/) for creating custom styles.

---

## 🧪 Testing

### Development Testing

1. Start the development server: `npm run dev`
2. Navigate to the Contact page
3. Verify the map loads correctly
4. Click on the marker to see the info window
5. Test map interactions (zoom, pan, etc.)

### Production Testing

1. Build the project: `npm run build`
2. Test in production mode: `npm start`
3. Verify map performance and loading speed

### Browser DevTools

Check the browser console for any Google Maps errors:
- Open DevTools (F12)
- Go to Console tab
- Look for any red errors related to Google Maps

---

## 📊 Common Issues

### Map Not Displaying

**Issue**: Gray box instead of map
**Solutions**:
- Check that `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set in `.env.local`
- Verify the API key is correct
- Ensure Maps JavaScript API is enabled in Google Cloud Console
- Check browser console for error messages

### API Key Restrictions

**Issue**: "This page can't load Google Maps correctly"
**Solutions**:
- Remove HTTP referrer restrictions temporarily to test
- Add your development URL: `localhost:3000/*` or `127.0.0.1:3000/*`
- Add your production domain: `yourdomain.com/*`

### Billing Not Enabled

**Issue**: "This API project is not authorized to use this API"
**Solutions**:
- Go to Google Cloud Console
- Enable billing for your project
- Google Maps offers $200 free credit per month

---

## 💰 Pricing

Google Maps offers:
- **$200 free credit per month** (covers ~28,000 map loads)
- After free credit, pricing is based on usage
- Most small/medium websites stay within free tier

**Cost estimation**:
- Dynamic Maps: $7 per 1,000 loads
- Static Maps: $2 per 1,000 loads
- Geocoding: $5 per 1,000 requests

Learn more: [Google Maps Pricing](https://mapsplatform.google.com/pricing/)

---

## 🔒 Security Best Practices

1. **API Key Restrictions**:
   - Always restrict by HTTP referrer
   - Restrict by API (only enable Maps JavaScript API)
   - Monitor usage in Cloud Console

2. **Environment Variables**:
   - Never commit `.env.local` to version control
   - Use different API keys for development and production
   - Regenerate keys if accidentally exposed

3. **Usage Monitoring**:
   - Set up budget alerts in Google Cloud Console
   - Monitor API usage regularly
   - Set daily quotas to prevent unexpected charges

---

## 📚 Additional Resources

- [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript)
- [React Google Maps API Library](https://react-google-maps-api-docs.netlify.app/)
- [Google Maps Platform Support](https://developers.google.com/maps/support)
- [Stack Overflow - Google Maps Tag](https://stackoverflow.com/questions/tagged/google-maps)

---

**Author:** MarvelXZ
**Last Updated:** 2025
