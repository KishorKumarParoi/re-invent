import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  // Verify authorization
  const authHeader = req.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (authHeader !== expected) {
    return res.status(401).json({
      error: "Unauthorized",
      timestamp: new Date().toISOString(),
    });
  }

  try {
    // Get current count
    const { data: currentData, error: fetchError } = await supabase
      .from("visitors")
      .select("count")
      .eq("id", 1)
      .single();

    if (fetchError) throw fetchError;

    const currentCount = currentData?.count || 0;

    // Log the reset
    console.log(`[CRON] Resetting visitor count from ${currentCount} to 0`);

    // Reset count to 0 for new day
    const { error: updateError } = await supabase
      .from("visitors")
      .update({
        count: 0,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);

    if (updateError) throw updateError;

    return res.status(200).json({
      success: true,
      message: "Visitor count reset successfully",
      previousCount: currentCount,
      newCount: 0,
      timestamp: new Date().toISOString(),
      nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });
  } catch (err) {
    console.error("[CRON] Error:", err);
    return res.status(500).json({
      error: err.message,
      timestamp: new Date().toISOString(),
    });
  }
}
