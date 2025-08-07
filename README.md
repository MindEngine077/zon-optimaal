# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

# Zon Optimaal - Verdienen met je eigen energie

Een hoogwaardige Nuxt 4 applicatie voor Zon Optimaal, gefocust op SEO-optimalisatie en lead-generatie voor zonne-energie oplossingen.

## Overzicht

Zon Optimaal is een platform dat gebruikers helpt met het optimaliseren van hun zonne-energie en het verdienen met eigen energie. Deze applicatie is gebouwd met Nuxt 4 en bevat:

- SEO-geoptimaliseerde pagina's voor betere vindbaarheid
- Lead-generatie formulieren voor offerte-aanvragen
- Supabase database-integratie voor gegevensopslag
- Responsief ontwerp voor alle apparaten
- Schema.org gestructureerde data voor betere zoekresultaten
- UTM-parameter tracking voor marketingattributie

## Technische Stack

- Nuxt 4 met TypeScript
- Nuxt UI voor componenten en styling (gebaseerd op Tailwind CSS)
- Supabase voor database en authenticatie
- Content module voor CMS-functionaliteit
- Image module voor geoptimaliseerde afbeeldingen
- Sitemap en Robots modules voor SEO

## Installatie

Voordat je begint, zorg ervoor dat je een `.env` bestand hebt met de volgende variabelen:

```bash
SUPABASE_URL=https://jouw-supabase-project.supabase.co
SUPABASE_KEY=jouw-supabase-api-key
```

Installeer vervolgens de dependencies:

```bash
npm install
```

## Ontwikkelingsserver

Start de ontwikkelingsserver op `http://localhost:3000`:

```bash
npm run dev
# OF gebruik het script
./start-dev.sh
```

Je kunt ook de VS Code taak "Run Zon Optimaal" gebruiken om de ontwikkelingsserver te starten.

## Productie

Bouw de applicatie voor productie:

```bash
npm run build
```

Preview de productiebuild lokaal:

```bash
npm run preview
```

## Belangrijke Functionaliteiten

- **Lead Formulieren**: Verschillende formulieren voor offerte-aanvragen en contactverzoeken
- **SEO Optimalisatie**: Meta tags, sitemap, robots.txt en schema.org data
- **Authenticatie**: Login-pagina voor gebruikers met Supabase authenticatie
- **UTM Tracking**: Middleware voor het bijhouden van UTM-parameters voor marketingattributie

## Project Structuur

- `app/`: Hoofdmap met alle applicatiecode
  - `layouts/`: Pagina-layouts, inclusief default.vue
  - `pages/`: Alle pagina's (index, contact, offerte, etc.)
  - `components/`: Herbruikbare componenten
  - `composables/`: Herbruikbare logica (formulierverwerking, etc.)
  - `middleware/`: Nuxt middleware (UTM tracking, etc.)
  - `server/`: Server API-endpoints en database-integratie

Voor meer informatie over Nuxt, zie de [Nuxt documentatie](https://nuxt.com/docs/getting-started/introduction).

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
