# Event Platform – README

Eine modulare, Headless-basierte Webplattform zur Verwaltung von Events, Teilnehmerregistrierung, Preisoptionen und Zahlungsabwicklung.

---

## Projektüberblick

Diese Plattform wurde entwickelt, um Veranstaltungen effizient zu organisieren, Anmeldungen zu verwalten und verschiedene Preislogiken abzubilden. Im Fokus steht eine flexible, inhaltsgetriebene Architektur, die sich an unterschiedliche Event-Formate und Zielgruppen anpassen lässt.

---

## Tech Stack

- **Next.js** (App Router, SSR, Client Components)
- **Payload CMS** (Headless CMS mit MongoDB)
- **Stripe API** (Zahlung per Checkout Sessions, Webhooks)
- **Brevo** (Double-Opt-in, Transaktionsmails, Newsletter)
- **Material UI** (komponentenbasierte UI-Library)
- **Zod** (Validierung für Formulare & Serverrouten)

---

## Features

### Teilnehmerregistrierung

- Dynamisches Formular mit beliebig vielen Teilnehmern
- Validierung (inkl. Duplicate-Check via API)
- Speicherung in Payload CMS (Status: pending / payed)
- Stripe Checkout mit Redirect + Session Tracking

### Flexible Preisoptionen

- Mehrere Preisstufen pro Event (z. B. Early Bird, Standard)
- Mengenrabatte konfigurierbar via CMS (ab X Teilnehmer)
- Anbindung via Stripe Price-IDs (saubere Rechnungsstellung)

### Newsletter & E-Mails

- DOI-Flow via Brevo (inkl. Token-Handling)
- Versand von Bestätigungen & Follow-up-Mails
- Personalisierte Inhalte in Transaktionsmails

---

## Struktur

```bash
/app
  ├── (frontend)/[slug]/(custom)
  ├── shop, success
  └── api/event-registration/
/components
  ├── ui/, forms/, event/
/lib
  ├── stripe/, validation/, payload/
```

---

## Setup

```bash
npm install
npm run dev
```

`.env` Beispiel:

```env
NEXT_PUBLIC_SITE_URL=https://example.com
PAYLOAD_SECRET=...
MONGODB_URI=...
STRIPE_SECRET_KEY=...
BREVO_API_KEY=...
```

---

## Deployment

- Vercel / SSR-konform
- Payload CMS als integriert gehostete API

---

## Hinweise

- Stripe erwartet absolute `success_url` und `cancel_url`.
- Die Formularvalidierung basiert auf `ZodError`-Handling (inkl. spezifischer Fehlerpfade).
- Die Preislogik kann CMS-seitig angepasst werden (inkl. Rabattregel ab Teilnehmer X).

---

## 🙏 Feedback / Weiterentwicklung

Diese Plattform ist modular ausgelegt und leicht erweiterbar für weitere Eventtypen, Benutzerrollen, interne Freigabeprozesse oder Mehrsprachigkeit.



