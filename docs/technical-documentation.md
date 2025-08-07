# Zon Optimaal Project Documentation

## Overview

This document provides technical documentation for the Zon Optimaal application - a Nuxt 4 project focused on SEO optimization and lead generation for solar energy solutions.

## Architecture

The application follows the standard Nuxt 4 architecture with the following key components:

- **Frontend**: Vue 3 with Nuxt 4
- **Styling**: Tailwind CSS via Nuxt UI
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Content Management**: Nuxt Content

## Key Features

### Lead Generation

The application includes multiple lead generation forms:

1. **Home Page Form**: Quick quote request form on the homepage
2. **Contact Form**: Detailed contact form with various fields
3. **Quote Form**: Advanced multi-step form for detailed quotes

All forms submit to the Supabase database via the API endpoint at `app/server/api/leads.post.ts`.

### SEO Optimization

SEO features include:

1. **Meta Tags**: Dynamic meta tags for all pages
2. **Structured Data**: Schema.org markup for better search results
3. **Sitemap**: Automatic sitemap generation
4. **Robots.txt**: Custom robots.txt configuration
5. **Performance**: Optimized loading with Nuxt Image and lazy loading

### UTM Tracking

Marketing attribution is handled via:

1. **UTM Parameter Tracking**: Middleware that captures UTM parameters
2. **Lead Attribution**: Storing UTM data with each lead
3. **Session Storage**: Persisting UTM data across the session

## Database Schema

### Leads Table

```sql
create table public.leads (
  id uuid not null default uuid_generate_v4(),
  created_at timestamp with time zone not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  ip_address text,
  status text default 'new',
  primary key (id)
);
```

## API Endpoints

### POST /api/leads

Endpoint for submitting lead forms.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "utmParams": {
    "utm_source": "string",
    "utm_medium": "string",
    "utm_campaign": "string",
    "utm_term": "string",
    "utm_content": "string"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead successfully submitted",
  "data": {
    "id": "uuid"
  }
}
```

## Deployment

The application can be deployed using the following methods:

1. **Node.js Server**: Run the application as a Node.js server
   ```bash
   npm run build
   npm run start
   ```

2. **Static Generation**: Generate static files and deploy to any static hosting
   ```bash
   npm run generate
   # Output in .output/public/
   ```

3. **Vercel/Netlify**: Connect the repository to Vercel or Netlify for automatic deployment

## Development Workflow

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables: Copy `.env.example` to `.env` and fill in values
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## Performance Considerations

- Use Nuxt Image for optimized images
- Implement lazy loading for components below the fold
- Use Suspense for async components
- Keep bundle size minimal with tree-shaking

## Security Considerations

- Implement Supabase RLS (Row Level Security) for data access
- Validate all form inputs on both client and server
- Use environment variables for sensitive configuration
- Implement rate limiting for form submissions

## Future Enhancements

- Multi-site capability with dynamic configuration
- A/B testing for lead forms
- Advanced analytics dashboard
- CRM integration with webhooks
