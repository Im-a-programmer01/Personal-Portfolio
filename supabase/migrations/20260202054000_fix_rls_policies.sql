/*
  # Fix RLS Policies with Proper Validation

  1. Security Updates for `contact_messages`
    - Replace INSERT policy with validation for required fields
    - Keep authenticated user policies for SELECT only (read-only for updates/deletes)
    
  2. Security Updates for `bookings`
    - Replace INSERT policy with validation for required fields
    - Restrict status and confirmed fields on anonymous inserts
    - Keep authenticated user policies for SELECT only (read-only for updates/deletes)

  3. Important Notes
    - Anonymous users can only insert with valid required data
    - Authenticated users (admin) can view but not modify or delete
    - This prevents unauthorized data manipulation
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated users can view all messages" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated users can update messages" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated users can delete messages" ON contact_messages;

DROP POLICY IF EXISTS "Anyone can submit bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users can view all bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users can update bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users can delete bookings" ON bookings;

-- Contact Messages Policies
CREATE POLICY "Public can submit valid contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    length(trim(message)) > 0 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

CREATE POLICY "Authenticated users can view all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Bookings Policies  
CREATE POLICY "Public can submit valid booking requests"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    length(trim(meeting_type)) > 0 AND
    preferred_date IS NOT NULL AND
    length(trim(preferred_time)) > 0 AND
    duration IN (30, 60) AND
    status = 'pending' AND
    confirmed = false
  );

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);