import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceMetadata } from '@/lib/seo'

const s = findServiceBySlug('aidc')!

export const metadata: Metadata = serviceMetadata({
  slug: 'aidc',
  title: 'AI 코로케이션 · GPU 서버 고전력 IDC (AIDC) | 디엠엔솔루션',
  description: '보유한 GPU 서버를 랙당 최대 40kW 초고전력 AI 전용 데이터센터에 입주시키세요. GPU 전용 냉각, 이중화 전력, 10G/40G 네트워크, 24시간 관제를 제공합니다.',
  keywords: ['AI 코로케이션', 'GPU 코로케이션', 'GPU 서버 코로케이션', '고전력 코로케이션', 'AIDC', 'AI 데이터센터'],
})

export default function Page() {
  return <ServiceDetailPage s={s} />
}
