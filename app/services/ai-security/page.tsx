import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: 'AI 보안 관제 | DMN솔루션',
  description: '365일 24시간 무인 관제. 위협 자동 탐지·분류·대응과 비용 절감을 동시에. 공공·금융·중견기업 특화.',
  alternates: { canonical: 'https://dmnsolution.co.kr/services/ai-security/' },
}

export default function Page() {
  const s = findServiceBySlug('ai-security')!
  return <ServiceDetailPage s={s} />
}
