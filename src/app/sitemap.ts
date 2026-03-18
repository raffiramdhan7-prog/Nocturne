import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nocturneindonesia.com'
  
  const routes = [
    '',
    '/about',
    '/ai-tools',
    '/app-engineering',
    '/portfolio',
    '/start-project',
    '/web-development',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
