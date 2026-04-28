import type { MetadataRoute } from 'next'
import { SITE_ORIGIN } from '@/lib/site'

export const dynamic = 'force-static'
export const revalidate = false

const BASE = SITE_ORIGIN

const SERVICE_SLUGS = [
  'server-rental',
  'managed-service',
  'ha',
  'db-cluster',
  'system-recovery-migration',
  'ai-security',
  'ai-agent',
  'ai-stream-security',
  'deepfake-detection',
  'network-security',
  'zero-trust',
  'llm-security-audit',
  'ultrastream',
  'vod-multistream',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${BASE}/services/${slug}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: slug === 'ai-security' || slug === 'ultrastream' ? 0.95 : 0.85,
    })),
  ]
  return entries
}
