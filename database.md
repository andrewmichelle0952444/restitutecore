
# Restitutecore Forensic Database Schema

This document outlines the database structure, table permissions, and Row Level Security (RLS) policies required for the Restitutecore Digital Asset Recovery platform.

## SQL Setup (Run this in Supabase SQL Editor)

To ensure the application and live real-time sync function properly, copy and execute the following SQL in your **Supabase Project -> SQL Editor**:

```sql
-- 1. Create the cases table (For intake)
CREATE TABLE IF NOT EXISTS cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id text UNIQUE,
  case_type text,
  user_name text,
  user_email text,
  user_phone text,
  user_country text,
  risk_level text DEFAULT 'Initial Intake',
  evidence_integrity text DEFAULT 'Pending Review',
  status text DEFAULT 'Review Pending',
  description text,
  result_data jsonb,
  form_values jsonb,
  evidence_files jsonb DEFAULT '[]',
  is_blocked boolean DEFAULT false,
  has_access boolean DEFAULT true,
  best_contact_time text,
  preferred_method text,
  created_at timestamptz DEFAULT now()
);

-- 2. Create the success_stories table (Case Insights)
CREATE TABLE IF NOT EXISTS success_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id text,
  case_type text,
  amount text,
  status text DEFAULT 'Resolved',
  challenge text,
  focus text,
  outcome text,
  narrative text,
  icon_name text DEFAULT 'TrendingUp',
  created_at timestamptz DEFAULT now()
);

-- 3. Enable Row Level Security
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

-- 4. Table Privileges for Roles
GRANT ALL ON TABLE cases TO anon, authenticated, service_role;
GRANT ALL ON TABLE success_stories TO anon, authenticated, service_role;

-- 5. Policy: Allow Public & Authenticated Submissions (Insert)
DROP POLICY IF EXISTS "Allow public insert" ON cases;
CREATE POLICY "Allow public insert" ON cases 
FOR INSERT TO anon, authenticated
WITH CHECK (true);

-- 6. Policy: Allow Public & Authenticated Updates (For AI Result Attachment)
DROP POLICY IF EXISTS "Allow public update" ON cases;
DROP POLICY IF EXISTS "Allow authenticated update" ON cases;
CREATE POLICY "Allow public update" ON cases 
FOR UPDATE TO anon, authenticated
USING (true)
WITH CHECK (true);

-- 7. Policy: Allow Admins & Authorized Roles to View Cases (Select)
DROP POLICY IF EXISTS "Allow authenticated select" ON cases;
DROP POLICY IF EXISTS "Allow select cases" ON cases;
CREATE POLICY "Allow select cases" ON cases 
FOR SELECT TO authenticated, anon
USING (true);

-- 8. Policy: Allow Authenticated Deletion (Delete)
DROP POLICY IF EXISTS "Allow authenticated delete" ON cases;
CREATE POLICY "Allow authenticated delete" ON cases 
FOR DELETE TO authenticated
USING (true);

-- 9. Policy: Public Read & Admin Manage for Success Stories
DROP POLICY IF EXISTS "Allow public select stories" ON success_stories;
CREATE POLICY "Allow public select stories" ON success_stories 
FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow authenticated all stories" ON success_stories;
CREATE POLICY "Allow authenticated all stories" ON success_stories 
FOR ALL TO authenticated USING (true);

-- 10. Enable Supabase Realtime Live Synchronization for Cases
ALTER PUBLICATION supabase_realtime ADD TABLE cases;
```

## Storage Buckets

### `assets` (Public)
1. Go to **Storage** in Supabase.
2. Create a bucket named `assets`.
3. Set the bucket to **Public**.
4. This stores `logo.png`, `hero-bg.png`, `seal.png`, `og-image.png`, and team assets.

### `evidence` (Private)
1. Go to **Storage** in Supabase.
2. Create a bucket named `evidence`.
3. Keep this bucket **Private** for investigative security.
4. This stores victim-submitted evidence (transaction hashes, chat logs, etc.).
