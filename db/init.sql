CREATE TABLE IF NOT EXISTS visitors (
  id INT PRIMARY KEY,
  count INT DEFAULT 0,
  daily_peak INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_reset_at TIMESTAMP DEFAULT NOW()
);

-- Insert initial record
INSERT INTO visitors (id, count) VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_visitors_id ON visitors(id);