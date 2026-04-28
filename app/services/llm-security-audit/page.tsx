import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceCanonicalUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'LLM 보안 감사 | DMN솔루션',
  description: '내부·대외 LLM 사용의 유출·프롬프트 인젝션·거버넌스 점검.',
  alternates: { canonical: serviceCanonicalUrl('llm-security-audit') },
}

export default function Page() {
  const s = findServiceBySlug('llm-security-audit')!
  return <ServiceDetailPage s={s} />
}
