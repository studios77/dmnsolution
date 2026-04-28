import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceCanonicalUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: '딥페이크 탐지 서비스 | DMN솔루션',
  description: '라이브 스트림 내 AI 합성 영상·음성 실시간 검출. 방송사·기업 미디어 대상.',
  alternates: { canonical: serviceCanonicalUrl('deepfake-detection') },
}

export default function Page() {
  const s = findServiceBySlug('deepfake-detection')!
  return <ServiceDetailPage s={s} />
}
