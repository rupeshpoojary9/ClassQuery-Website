
import {NextRequest, NextResponse} from 'next/server';

export function GET(request: NextRequest) {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://classquery.com/sitemap.xml
  `.trim();

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
