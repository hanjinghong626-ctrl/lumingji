// app/sitemap.js - Next.js App Router dynamic sitemap
export default function sitemap() {
  const baseUrl = 'https://lumingji.vercel.app';
  const locales = ['zh', 'ru', 'en'];

  const staticPages = [
    { path: '', priority: 1.0 },
    { path: '/life', priority: 0.9 },
    { path: '/life/phrasebook', priority: 0.8 },
    { path: '/life/exchange-rate', priority: 0.7 },
    { path: '/life/apps', priority: 0.7 },
    { path: '/life/ai-chat', priority: 0.6 },
    { path: '/universities', priority: 0.8 },
    { path: '/community', priority: 0.5 },
    { path: '/about', priority: 0.4 },
  ];

  // Life guide categories
  const categories = [
    'first-landing', 'payment', 'communication', 'transport', 'food',
    'housing', 'visa-legal', 'medical', 'academic', 'language',
    'social', 'shopping', 'entertainment', 'travel', 'career', 'emergency', 'culture'
  ];

  const staticEntries = [];
  for (const locale of locales) {
    for (const page of staticPages) {
      staticEntries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}${page.path}`])
          ),
        },
      });
    }

    // Category pages
    for (const cat of categories) {
      staticEntries.push({
        url: `${baseUrl}/${locale}/life/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return staticEntries;
}
