import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: '서버 장애 복구 및 이전 | LunarFlux AI',
  description: '외부 고객이 운영 중인 서버·온프레·클라우드 VM에 대해 원격·현장 기술지원.',
  alternates: { canonical: 'https://lunarfluxai.com/services/system-recovery-migration/' },
}

export default function Page() {
  const s = findServiceBySlug('system-recovery-migration')!
  return <ServiceDetailPage s={s} />
}
