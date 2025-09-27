
export async function GET() {
  const baseUrl = 'https://classquery.com';
  const lastModified = new Date().toISOString();

  const staticPages = [
    '/',
    '#features',
    '#who-its-for',
    '#pricing',
    '#faq',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((url) => {
      return `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${url === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
