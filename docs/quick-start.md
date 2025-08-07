# Zon Optimaal - Snel aan de slag

Deze snelstartgids helpt je om snel aan de slag te gaan met het Zon Optimaal project.

## 1. Vereisten

Zorg ervoor dat je het volgende geïnstalleerd hebt:

- Node.js (v18 of hoger)
- npm (v8 of hoger)
- Git

## 2. Project installeren

1. Clone de repository:
   ```bash
   git clone <repository-url>
   cd zon-optimaal
   ```

2. Installeer de dependencies:
   ```bash
   npm install
   ```

3. Maak een .env bestand:
   ```bash
   cp .env.example .env
   ```

4. Vul de juiste waarden in het .env bestand in:
   ```
   SUPABASE_URL=https://jouw-supabase-project.supabase.co
   SUPABASE_KEY=jouw-supabase-api-key
   ```

## 3. Ontwikkelingsserver starten

Start de ontwikkelingsserver:

```bash
npm run dev
# OF
./start-dev.sh
```

De applicatie is nu beschikbaar op `http://localhost:3000`.

## 4. Supabase setup

Om Supabase te configureren:

```bash
./setup-supabase.sh
```

Volg de instructies op het scherm om je Supabase project te koppelen.

## 5. Belangrijke scripts

- `npm run dev` - Start de ontwikkelingsserver
- `npm run build` - Bouwt de applicatie voor productie
- `npm run generate` - Genereert statische bestanden
- `npm run lint` - Voert linting uit
- `npm run lint:fix` - Voert linting uit en lost problemen op
- `./health-check.sh` - Controleert de gezondheid van het project
- `./deploy.sh` - Voert een deploymentproces uit

## 6. Projectstructuur

- `app/` - Hoofdmap met alle applicatiecode
  - `pages/` - Alle pagina's van de applicatie
  - `components/` - Herbruikbare componenten
  - `layouts/` - Pagina-layouts
  - `composables/` - Herbruikbare logica
  - `middleware/` - Nuxt middleware
  - `server/` - Server API-endpoints

## 7. Hulpbronnen

- [Technische Documentatie](./docs/technical-documentation.md)
- [Gebruikershandleiding](./docs/gebruikershandleiding.md)
- [Nuxt Documentatie](https://nuxt.com/docs)
- [Supabase Documentatie](https://supabase.com/docs)

## 8. Problemen oplossen

Als je problemen ondervindt:

1. Controleer of je alle vereisten hebt geïnstalleerd
2. Controleer of je .env bestand correct is ingesteld
3. Probeer `npm install` opnieuw uit te voeren
4. Voer `./health-check.sh` uit om de projectgezondheid te controleren

Voor verdere hulp, neem contact op met het ontwikkelingsteam.
