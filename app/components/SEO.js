// SEO component for per-page metadata in client components
export default function SEO({ title, description, ogType = 'website', noindex = false }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="鹿鸣集 LuMingJi" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {/* hreflang tags for multi-language SEO */}
      <link rel="alternate" hrefLang="zh" href={`https://lumingji.vercel.app/zh`} />
      <link rel="alternate" hrefLang="ru" href={`https://lumingji.vercel.app/ru`} />
      <link rel="alternate" hrefLang="en" href={`https://lumingji.vercel.app/en`} />
      <link rel="alternate" hrefLang="x-default" href={`https://lumingji.vercel.app/en`} />
    </>
  );
}
