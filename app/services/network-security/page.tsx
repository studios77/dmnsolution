import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: '네트워크 보안 · IDS/IPS | LunarFlux AI',
  description: '지능형 침입탐지·방지. 이상 트래픽 ML 분석과 룰 기반 하이브리드 운영.',
  alternates: { canonical: 'https://lunarfluxai.com/services/network-security/' },
}

export default function Page() {
  const s = findServiceBySlug('network-security')!
  return <ServiceDetailPage s={s} />
}
