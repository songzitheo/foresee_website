# Supabase Database Setup

## Table Structure

You need to create a `waitlist` table in your Supabase database with the following structure:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add an index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (anyone can join the waitlist)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Create a policy for reading (optional - only if you need to display the list)
CREATE POLICY "Allow authenticated reads" ON waitlist
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

## Setup Instructions

1. Go to your Supabase project: https://ssflbgewaecdpqqltglm.supabase.co
2. Navigate to the SQL Editor
3. Run the SQL commands above to create the `waitlist` table
4. The table will automatically store:
   - `id`: Unique identifier for each entry
   - `name`: User's name
   - `email`: User's email (unique constraint to prevent duplicates)
   - `created_at`: Timestamp of when they joined

## Testing

After creating the table, test the waitlist form on your website:
1. Click "Join the Waitlist" button
2. Fill in name and email
3. Submit the form
4. Check your Supabase database to verify the entry was created

## Configuration

The Supabase configuration is located in:
- **Client config**: `/lib/supabase.ts`
- **API route**: `/app/api/waitlist/route.ts`

Current configuration:
- Project URL: https://ssflbgewaecdpqqltglm.supabase.co
- Using anon public key for client-side operations
