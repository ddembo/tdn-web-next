import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge'
export const preferredRegion = 'syd1';
export const dynamic = 'force-dynamic'; // no caching

// NOTE: scheduled with cron to run every day (see /vercel.json)
// TODO: increase this to every 59 days once verified working

export async function GET(request: NextRequest) {
  const tokenUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.INSTAGRAM_TOKEN}`;

  try {
    const response = await (await fetch(tokenUrl)).json();
    return NextResponse.json({
      body: `Token refreshed. Expires in: ${response.expires_in}`,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
