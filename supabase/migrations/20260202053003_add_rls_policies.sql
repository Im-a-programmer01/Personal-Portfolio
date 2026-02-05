/*
  # Add RLS Policies for Contact Messages and Bookings

  1. Security Policies for `contact_messages`
    - Allow public users to insert contact messages
    - Allow authenticated users (admin) to read all messages
    - Allow authenticated users (admin) to update messages (mark as read)
    - Allow authenticated users (admin) to delete messages

  2. Security Policies for `bookings`
    - Allow public users to insert bookings
    - Allow authenticated users (admin) to read all bookings
    - Allow authenticated users (admin) to update bookings (confirm, change status)
    - Allow authenticated users (admin) to delete bookings
*/

-- Policies for contact_messages table
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete messages"
  ON contact_messages
  FOR DELETE
  TO authenticated
  USING (true);

-- Policies for bookings table
CREATE POLICY "Anyone can submit bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete bookings"
  ON bookings
  FOR DELETE
  TO authenticated
  USING (true);