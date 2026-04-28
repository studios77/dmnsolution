import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceCanonicalUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AI 자율 관제 에이전트 | DMN솔루션',
  description: 'LLM 기반 SOC 에이전트. 위협탐지→분석→대응 자동화로 24/7 무인 관제.',
  alternates: { canonical: serviceCanonicalUrl('ai-agent') },
}

export default function Page() {
  const s = findServiceBySlug('ai-agent')!
  return <ServiceDetailPage s={s} />
}
