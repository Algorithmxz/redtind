export const dynamic = 'force-dynamic'

export async function GET() {
  // Basic obfuscation using combined environment variables
  const part1 = process.env.REDIRECT_PART1 || 'https://tinder';
  const part2 = process.env.REDIRECT_PART2 || 'boosts.com/tdx';
  
  return new Response(JSON.stringify({ url: part1 + part2 }), {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Content-Type': 'application/json',
    },
  });
}

