import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: '딥페이크 탐지 서비스 | LunarFlux AI',
  description: '라이브 스트림 내 AI 합성 영상·음성 실시간 검출. 방송사·기업 미디어 대상.',
  alternates: { canonical: 'https://lunarfluxai.com/services/deepfake-detection/' },
}

export default function Page() {
  const s = findServiceBySlug('deepfake-detection')!
  return <ServiceDetailPage s={s} />
}
