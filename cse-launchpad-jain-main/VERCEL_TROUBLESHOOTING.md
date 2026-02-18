# Vercel Deployment Troubleshooting

The `404: NOT_FOUND` error on Vercel means your deployed app is trying to connect to Supabase but is using **wrong or missing keys**.

## Step 1: Verify Environment Variables
1.  Go to your **Vercel Project Dashboard**.
2.  Click **Settings** -> **Environment Variables**.
3.  Ensure you see these two **EXACTLY**:
    *   `VITE_SUPABASE_URL`: `https://wornjdernrjemusegndb.supabase.co`
    *   `VITE_SUPABASE_ANON_KEY`: (Starts with `eyJhbGciOiJIUzI...`)
4.  **Crucial:** Make sure they are checked for **Production**.

## Step 2: Force a Redeploy (REQUIRED)
Adding variables **does not** update the live site. You MUST rebuild.
1.  Go to **Deployments**.
2.  Find your latest deployment (it might say "Ready").
3.  Click the **three dots** (⋮) -> **Redeploy**.
4.  **Wait** for it to finish building.
5.  Visit the **new** URL it gives you.

## Step 3: Check Browser Console
If it still fails on the new URL:
1.  Right-click the page -> **Inspect**.
2.  Go to the **Console** tab.
3.  Reload the page.
4.  Look for red errors. Do you see "Missing Supabase environment variables"?

If you see that error, Vercel still doesn't have your keys!
