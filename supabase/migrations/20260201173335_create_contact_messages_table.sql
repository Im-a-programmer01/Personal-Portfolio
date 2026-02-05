/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person submitting the message
      - `email` (text) - Email address of the sender
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when the message was submitted
      - `read` (boolean) - Whether the message has been read (defaults to false)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public to insert messages (anyone can submit)
    - No public read access (only admin should read messages)

  3. Important Notes
    - This table allows anonymous users to submit contact form messages
    - Messages are stored securely with RLS enabled
    - Only insertion is allowed publicly, not reading or updating
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);