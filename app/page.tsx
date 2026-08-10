import Nav from '@/components/Nav'
import { SITE_NAME, SITE_ORIGIN } from '@/lib/site'
import { SEO_DEFAULT_DESCRIPTION } from '@/lib/seo'
import HomeHero from '@/components/home/HomeHero'
import PillarSection from '@/components/home/PillarSection'
import GuardBand from '@/components/home/GuardBand'
import ProcessSection from '@/components/home/ProcessSection'
import HomeCta from '@/components/home/HomeCta'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export default function Home() {
  const site = SITE_ORIGIN
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: site,
        name: SITE_NAME,
        inLanguage: 'ko-KR',
        description: SEO_DEFAULT_DESCRIPTION,
        publisher: { '@id': `${site}/#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
        name: SITE_NAME,
        // 사업자등록상 법인명. 브랜드명과 달라 함께 싣습니다.
        legalName: '(주)디엠엔솔루션',
        url: site,
        description: SEO_DEFAULT_DESCRIPTION,
        logo: {
          '@type': 'ImageObject',
          url: `${site}/logo-dmn.png`,
        },
        image: `${site}/opengraph-image.png`,
        // 주소·전화·이메일은 검색엔진이 사업체 신뢰도를 판단할 때 보는 항목입니다.
        // Footer 에 이미 표기된 값과 같은 값을 씁니다.
        address: {
          '@type': 'PostalAddress',
          streetAddress: '영중로 140 5F',
          addressLocality: '영등포구',
          addressRegion: '서울특별시',
          addressCountry: 'KR',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+82-505-299-7623',
            email: 'studios77@gmail.com',
            areaServed: 'KR',
            availableLanguage: ['ko', 'en'],
          },
        ],
        sameAs: [site],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${SITE_NAME} 서비스`,
          // 서비스 목록 순서를 실제 주력에 맞춥니다 — 보안 4축 → 인프라 → 스트리밍.
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '네트워크 보안 / 차세대 방화벽',
                description:
                  '자체 개발 NGFW DMN Guard(NGFW·WAF·로컬 AI 융합 어플라이언스), IDS/IPS 침입탐지, 제로트러스트 설계, 스트림 이상탐지.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '클라우드 보안',
                description:
                  '클라우드 보안 형상 진단(CSPM), 컨테이너·쿠버네티스 워크로드 보호(CWPP), 권한 정리 및 컴플라이언스 매핑.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI · 데이터 보안',
                description: '생성형 AI 유출·프롬프트 인젝션 점검(LLM 보안 감사), 실시간 딥페이크 탐지.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '보안 운영 / 24시간 관제',
                description: 'AI 자율 보안 관제(SOC), LLM 기반 관제 에이전트로 탐지→분석→대응 자동화.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'IDC 인프라',
                description:
                  'IDC 서버 임대·코로케이션, GPU 전용 호스팅(AIDC), 위탁운영, HA·DB 이중화, 장애 복구 및 이전.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '라이브 스트리밍',
                description:
                  'UltraStreamingEngine 기반 LL-HLS 초저지연 라이브 스트리밍, VOD·멀티 플랫폼 동시 송출.',
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/*
          홈 구성: 3축 소개 → 축별 서비스 → 자체 제품 → 도입 절차 → 문의.

          서비스 분류(`servicesData.cat`)와 상세 페이지는 그대로 두고 홈 화면만
          새로 짰습니다. 자체 제품 하나를 앞세우는 구성이 아니라 세 축을 나란히
          두는 구성인데, DMN솔루션이 세 영역을 각각 따로 계약해 팔기 때문입니다.

          `grid-bg` 는 뺐습니다 — 밝은 배경에서는 격자가 콘텐츠를 흐리게만 하고
          섹션 경계는 이제 배경색 교차(bg-elev)로 구분됩니다.
        */}
        <HomeHero />
        <PillarSection />
        <GuardBand />
        <ProcessSection />
        <HomeCta />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
