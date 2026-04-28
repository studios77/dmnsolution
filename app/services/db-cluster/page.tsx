import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: 'DB 이중화 매니지먼트 | DMN솔루션',
  description: 'Galera Cluster·Master-Slave 구성·모니터링·자동복구 위탁관리.',
  alternates: { canonical: 'https://dmnsolution.co.kr/services/db-cluster/' },
}

export default function Page() {
  const s = findServiceBySlug('db-cluster')!
  return <ServiceDetailPage s={s} />
}
