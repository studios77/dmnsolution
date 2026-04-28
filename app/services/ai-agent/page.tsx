import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: 'AI 자율 관제 에이전트 | LunarFlux AI',
  description: 'LLM 기반 SOC 에이전트. 위협탐지→분석→대응 자동화로 24/7 무인 관제.',
  alternates: { canonical: 'https://lunarfluxai.com/services/ai-agent/' },
}

export default function Page() {
  const s = findServiceBySlug('ai-agent')!
  return <ServiceDetailPage s={s} />
}
