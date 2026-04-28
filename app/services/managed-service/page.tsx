import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceCanonicalUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: '위탁운영 매니지먼트 | DMN솔루션',
  description: 'OS 패치·장애대응·성능튜닝 전담. 실시간 모니터링 + 월 SLA 리포트.',
  alternates: { canonical: serviceCanonicalUrl('managed-service') },
}

export default function Page() {
  const s = findServiceBySlug('managed-service')!
  return <ServiceDetailPage s={s} />
}
