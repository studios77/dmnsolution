import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceCanonicalUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: '제로트러스트 아키텍처 | DMN솔루션',
  description: '신뢰 경계 재설계. ID·디바이스·맥락 기반 최소권한과 지속 검증.',
  alternates: { canonical: serviceCanonicalUrl('zero-trust') },
}

export default function Page() {
  const s = findServiceBySlug('zero-trust')!
  return <ServiceDetailPage s={s} />
}
