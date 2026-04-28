import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: '서버 임대 · 코로케이션 | DMN솔루션',
  description: '전용서버·VPS·고객 장비 입주. 전력·냉각·네트워크 포함.',
  alternates: { canonical: 'https://dmnsolution.co.kr/services/server-rental/' },
}

export default function Page() {
  const s = findServiceBySlug('server-rental')!
  return <ServiceDetailPage s={s} />
}
