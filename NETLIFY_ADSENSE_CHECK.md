# NEXA AI — Netlify + AdSense

## Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Frontend variables:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

## Supabase
Configure these secrets in the Edge Function:
- `NVIDIA_API_KEY`
- `NVIDIA_BASE_URL`
- `NEXA_PRIMARY_MODEL`
- `NEXA_ADVANCED_MODEL`
- `NEXA_PREMIUM_MODEL`
- `NEXA_ALLOWED_ORIGIN` = your production Netlify domain

## Google AdSense
Publisher ID configured: `pub-5328027623101751`.

The project includes:
- AdSense script in `index.html`
- `google-adsense-account` meta tag
- `public/ads.txt`

Important: a Publisher ID does not make a site appear in Google Search. Search indexing is handled by Google Search Console/SEO. AdSense approval and ad serving are subject to Google's review and policies.


Producción: `https://nexaasistenteia.netlify.app`

AdSense publisher: `ca-pub-5328027623101751`

Sitemap: `https://nexaasistenteia.netlify.app/sitemap.xml`
