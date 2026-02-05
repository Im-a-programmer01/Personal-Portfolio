/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `name` (text) - Name of the person booking
      - `email` (text) - Email address of the person
      - `meeting_type` (text) - Type of meeting (Discovery Call, Project Discussion, etc.)
      - `preferred_date` (date) - Preferred date for the meeting
      - `preferred_time` (text) - Preferred time slot
      - `duration` (integer) - Duration in minutes (30 or 60)
      - `message` (text) - Additional message or notes
      - `status` (text) - Status of booking (pending, confirmed, cancelled) - defaults to pending
      - `created_at` (timestamptz) - Timestamp when the booking was created
      - `confirmed_at` (timestamptz) - Timestamp when booking was confirmed
      - `confirmed` (boolean) - Whether the booking has been confirmed - defaults to false

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public to insert bookings (anyone can submit)
    - No public read access (only admin should read bookings)

  3. Important Notes
    - This table allows anonymous users to submit booking requests
    - Bookings are proposals that need confirmation within 24h
    - Status field tracks the booking lifecycle
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  meeting_type text NOT NULL DEFAULT 'Discovery Call',
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  duration integer NOT NULL DEFAULT 30,
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  confirmed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  confirmed_at timestamptz
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit booking requests"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);