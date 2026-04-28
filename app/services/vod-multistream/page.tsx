import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceCanonicalUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'VOD 관리 + 멀티 리스트림 | DMN솔루션',
  description: 'VOD 저장·썸네일 자동생성. 유튜브·트위치·네이버 동시 송출 자동화.',
  alternates: { canonical: serviceCanonicalUrl('vod-multistream') },
}

export default function Page() {
  const s = findServiceBySlug('vod-multistream')!
  return <ServiceDetailPage s={s} />
}
