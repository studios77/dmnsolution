import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: 'Ultrastream 엔진 호스팅 | LunarFlux AI',
  description: 'MediaMTX 기반 RTMP/HLS/WebRTC. LL-HLS 1~2초 레이턴시, ABR 4단계.',
  alternates: { canonical: 'https://lunarfluxai.com/services/ultrastream/' },
}

export default function Page() {
  const s = findServiceBySlug('ultrastream')!
  return <ServiceDetailPage s={s} />
}
