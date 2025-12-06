import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    // Check if env vars exist
    if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
      console.error("❌ Missing environment variables");
      return res.status(200).json({
        count: 0,
        error: "Environment variables not configured",
        timestamp: new Date().toISOString(),
      });
    }

    // Fetch current visitor count from Supabase
    const { data, error } = await supabase
      .from("visitors")
      .select("count")
      .eq("id", 1)
      .single();

    if (error) {
      console.error("❌ Supabase Error:", error);
      return res.status(200).json({
        count: 0,
        error: error.message,
        timestamp: new Date().toISOString(),
      });
    }

    const visitorCount = data?.count || 0;

    // Return JSON response
    res.status(200).json({
      count: visitorCount,
      timestamp: new Date().toISOString(),
      formatted: visitorCount.toLocaleString(),
    });
  } catch (error) {
    console.error("❌ API Error:", error.message);
    res.status(200).json({
      count: 0,
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
}
