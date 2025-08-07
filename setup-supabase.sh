#!/bin/bash

# Setup script for Supabase integration

echo "Setting up Supabase integration for Zon Optimaal..."

# Check if .env file exists
if [ ! -f ".env" ]; then
  echo "Creating .env file from template..."
  cp .env.example .env
  echo "Please edit the .env file with your Supabase credentials."
  echo "You can get these from your Supabase dashboard."
else
  echo ".env file already exists."
fi

# Install Supabase CLI (if needed)
if ! command -v supabase &> /dev/null; then
  echo "Installing Supabase CLI..."
  npm install -g supabase
fi

# Initialize Supabase if not already done
if [ ! -d "supabase" ]; then
  echo "Initializing Supabase project structure..."
  supabase init
  
  # Create basic schema for leads table
  mkdir -p supabase/migrations
  
  cat > supabase/migrations/20230101000000_create_leads_table.sql << EOF
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

-- Set up RLS (Row Level Security)
alter table public.leads enable row level security;

-- Create policy for authenticated users to see all leads
create policy "Authenticated users can see all leads" 
  on public.leads
  for select
  to authenticated
  using (true);

-- Create policy for authenticated users to insert leads
create policy "Authenticated users can insert leads" 
  on public.leads
  for insert
  to authenticated
  with check (true);

-- Create policy for unauthenticated users to insert leads
create policy "Anyone can insert leads" 
  on public.leads
  for insert
  to anon
  with check (true);
EOF

  echo "Schema migration created. You can apply this to your Supabase project."
fi

echo ""
echo "Supabase setup completed!"
echo ""
echo "Next steps:"
echo "1. Edit the .env file with your Supabase credentials"
echo "2. Run 'supabase link --project-ref YOUR_PROJECT_ID' to link to your Supabase project"
echo "3. Run 'supabase db push' to apply the migrations to your Supabase database"
echo ""
echo "For more information, visit: https://supabase.com/docs/guides/cli"
