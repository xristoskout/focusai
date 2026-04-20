import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://focusai.gr'
  const locales = ['en', 'el']

  // Static pages (each available in both languages)
  const staticPaths = [
    '',
    '/services/website-development',
    '/services/ai-assistants',
    '/services/digital-marketing',
    '/industries/hotels',
    '/industries/restaurants',
    '/industries/tourism',
    '/about',
    '/contact',
    '/blog',
    '/case-studies',
  ]

  // Blog slugs per language
  const blogSlugs: Record<string, string[]> = {
    el: [
      'kataskevi-istoselidon-timi',
      'ai-assistant-epixeiriseis',
      'xenodoxeio-istoselidon-ti-perilamvanei',
      'local-seo-topikes-epixeiriseis',
      'mobile-first-sxediasmos',
      'digital-marketing-stratigi',
    ],
    en: [
      'cost-of-website',
      'ai-assistant-benefits',
      'hotel-website-features',
      'local-seo-guide',
      'mobile-first-design',
      'digital-marketing-strategy',
    ],
  }

  const entries: MetadataRoute.Sitemap = []

  // Add static paths for both locales
  staticPaths.forEach((path) => {
    locales.forEach((lang) => {
      entries.push({
        url: `${baseUrl}/${lang}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : path.startsWith('/services') || path.startsWith('/industries') ? 0.8 : 0.7,
      })
    })
  })

  // Add blog article pages per language
  locales.forEach((lang) => {
    blogSlugs[lang].forEach((slug) => {
      entries.push({
        url: `${baseUrl}/${lang}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  })

  // Add root with hreflang alternates
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        el: `${baseUrl}/el`,
      },
    },
  })

  return entries
}
