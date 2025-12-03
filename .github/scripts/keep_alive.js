const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("FATAL: Environment variables are missing.");
    process.exit(1);
}

async function pingSupabase() {
    try {
        const response = await fetch(SUPABASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY, 
            },
        });

        if (response.ok) {
            console.log(`✅ Supabase instance successfully pinged at ${new Date().toISOString()}`);
        } else {
            console.error(`⚠️ Supabase ping failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error("❌ An error occurred during fetch:", error.message);
        process.exit(1);
    }
}

pingSupabase();