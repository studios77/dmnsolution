import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: '운영서버 이중화 (HA) | LunarFlux AI',
  description: 'Active-Active/Standby 구성. 자동 페일오버 30초 이내, 99.99% SLA.',
  alternates: { canonical: 'https://lunarfluxai.com/services/ha/' },
}

export default function Page() {
  const s = findServiceBySlug('ha')!
  return <ServiceDetailPage s={s} />
}
