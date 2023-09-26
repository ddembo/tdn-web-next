import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = { runtime: 'edge', region: 'syd1' };
// NOTE: scheduled with cron to run every days (see /vercel.json)
// TODO: increase this to every 59 days once verified working
// No need to add caching to fetch as this will only be called on schedule or manually on-demand; both cases we don't want cached responses

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
