import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { findServiceBySlug } from '@/lib/servicesData'
import { serviceMetadata } from '@/lib/seo'

const s = findServiceBySlug('dmn-guard')!

/**
 * 판매를 내린 서비스입니다(lib/servicesData 의 UNLISTED_SLUGS). 페이지는 남겨
 * 두되 검색엔진이 색인하지 않도록 noindex 를 겁니다. robots.txt 로 막지 않는
 * 이유: 크롤러가 페이지를 읽지 못하면 noindex 도 보지 못해, 이미 색인된 주소가
 * 검색 결과에서 빠지지 않습니다.
 */
export const metadata: Metadata = {
  ...serviceMetadata({
    slug: 'dmn-guard',
    title: '차세대 방화벽 NGFW · WAF · AI 통합 어플라이언스 | 디엠엔솔루션',
    description:
      'NGFW와 WAF, 로컬 AI 분석을 한 대에 융합한 온프레미스 보안 어플라이언스. L2 투명 인라인으로 IP 변경 없이 삽입되며 보호 대상 서버에는 무설치입니다.',
  }),
  robots: { index: false, follow: false },
}

export default function Page() {
  return <ServiceDetailPage s={s} />
}
