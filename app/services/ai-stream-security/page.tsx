import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: 'AI 스트림 이상탐지 | DMN솔루션',
  description: 'RTMP/HLS 트래픽 머신러닝 분석. DDoS·세션 하이재킹 실시간 자동차단.',
  alternates: { canonical: 'https://dmnsolution.co.kr/services/ai-stream-security/' },
}

export default function Page() {
  const s = findServiceBySlug('ai-stream-security')!
  return <ServiceDetailPage s={s} />
}
