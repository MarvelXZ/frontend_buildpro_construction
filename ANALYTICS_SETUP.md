# Analytics Setup Guide

Ovaj dokument objašnjava kako da konfiguriše Google Analytics, Google Ads i Facebook Pixel za vaš sajt.

## 📊 Google Analytics 4 (GA4)

### Kako dobiti Measurement ID:

1. Idite na [Google Analytics](https://analytics.google.com/)
2. Kreirajte novi nalog ili odaberite postojeći
3. Kliknite na **Admin** (donje levo)
4. U koloni **Property**, kliknite na **Data Streams**
5. Odaberite **Web** stream
6. Kopirajte **Measurement ID** (format: `G-XXXXXXXXXX`)

### Konfiguracija:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Testiranje:

- Otvorite sajt u browseru
- Otvorite browser DevTools (F12)
- U Console-u proverite da nema grešaka
- Idite na Google Analytics > Reports > Realtime da potvrdite tracking

---

## 🎯 Google Ads Conversion Tracking

### Kako dobiti Conversion ID:

1. Idite na [Google Ads](https://ads.google.com/)
2. Kliknite na **Tools & Settings** (⚙️)
3. U **Measurement** sekciji, izaberite **Conversions**
4. Kliknite **+ New Conversion Action**
5. Odaberite **Website**
6. Kreirajte conversion actions za:
   - Quote Request (Zahtev za ponudu)
   - Contact Form Submit (Slanje kontakt forme)
   - Phone Click (Klik na telefon)
7. Kopirajte **Conversion ID** (format: `AW-XXXXXXXXXX`)
8. Kopirajte **Conversion Label** za svaki action

### Konfiguracija:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_QUOTE_CONVERSION_LABEL=AbC-dEfGhIjK
NEXT_PUBLIC_CONTACT_CONVERSION_LABEL=XyZ-123456789
NEXT_PUBLIC_PHONE_CONVERSION_LABEL=QwE-987654321
```

### Testiranje:

- Testirajte svaku conversion akciju na sajtu
- Idite na Google Ads > Tools > Conversions
- Kliknite na svaku conversion action i proverite **Tag status**
- Koristite [Google Tag Assistant](https://tagassistant.google.com/) za debugging

---

## 📘 Facebook Pixel

### Kako dobiti Pixel ID:

1. Idite na [Facebook Business Manager](https://business.facebook.com/)
2. U meniju, idite na **Events Manager**
3. Kliknite na **Connect Data Sources**
4. Odaberite **Web**
5. Odaberite **Facebook Pixel** i kliknite **Connect**
6. Unesite ime za Pixel i kliknite **Create Pixel**
7. Kopirajte **Pixel ID** (numerički ID, npr. `1234567890123456`)

### Konfiguracija:

```env
NEXT_PUBLIC_FB_PIXEL_ID=1234567890123456
```

### Testiranje:

- Instalirajte [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/) Chrome ekstenziju
- Otvorite sajt
- Kliknite na ikonu ekstenzije da vidite tracking events
- Idite na Facebook Events Manager > Test Events da potvrdite tracking

---

## 🚀 Event Tracking

### Automatski Tracking:

Sledeći eventi se automatski prate:

- **Page Views** - Svaka stranica
- **Language Change** - Promena jezika

### Manual Tracking u Komponentama:

#### Quote Request Button:

```tsx
import * as ga from '@/lib/analytics/google-analytics';
import * as gads from '@/lib/analytics/google-ads';
import * as fbq from '@/lib/analytics/facebook-pixel';

const handleQuoteClick = () => {
  // Google Analytics
  ga.trackQuoteRequest();

  // Google Ads Conversion
  gads.trackQuoteConversion();

  // Facebook Pixel
  fbq.trackQuoteRequest();
};
```

#### Contact Form Submit:

```tsx
const handleContactSubmit = () => {
  ga.trackContactFormSubmit();
  gads.trackContactConversion();
  fbq.trackContact();
};
```

#### Phone Click:

```tsx
const handlePhoneClick = () => {
  ga.trackPhoneClick();
  gads.trackPhoneConversion();
  fbq.trackPhoneClick();
};
```

---

## 📝 Napomene

- **Development**: Analytics će biti disabled u development modu ako `.env` varijable nisu postavljene
- **Privacy**: Pazite da dodate Privacy Policy stranicu koja objašnjava upotrebu cookies i tracking-a
- **GDPR**: Razmislite o dodavanju Cookie Consent bannera za EU korisnike
- **Testing**: Uvek testirajte tracking u incognito/private browseru da izbegnete cache probleme

---

## 🔍 Debugging

### Provera da li je tracking aktivan:

```javascript
// U browser konzoli:
console.log('GA ID:', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
console.log('Google Ads ID:', process.env.NEXT_PUBLIC_GOOGLE_ADS_ID);
console.log('FB Pixel ID:', process.env.NEXT_PUBLIC_FB_PIXEL_ID);

// Provera da li su scripte učitane:
console.log('gtag:', typeof window.gtag);
console.log('fbq:', typeof window.fbq);
```

### Uobičajeni problemi:

1. **Tracking ne radi**: Proverite da li su environment varijable ispravno postavljene
2. **Dupli eventi**: Proverite da niste dva puta pozvali tracking funkciju
3. **Nedostaju eventi**: Proverite browser console za greške

---

## 📚 Dodatni Resursi

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Ads Conversion Tracking](https://support.google.com/google-ads/answer/1722022)
- [Facebook Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Next.js Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)

---

**Autor:** MarvelXZ
**Poslednje ažuriranje:** 2025
