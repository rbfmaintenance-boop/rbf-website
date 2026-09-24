# RBF Maintenance

Website for RBF Maintenance, built with Next.js 14 (App Router) and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Pages

- `/`: home (hero, about, services, industries, service area, why us, contact)
- `/careers`
- `/request-service`

## Brand

- Colours are defined as CSS variables at the top of `app/globals.css`.
- Logo files are in `public/brand`; the site uses `components/Logo.tsx`.

## Before going live

- Contact details in `components/Contact.tsx` (marked `TODO`).
- The contact, careers, and request forms are UI-only. Connect them to an
  email service or API route.
