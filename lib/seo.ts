import type { Metadata } from 'next'
import { SITE_NAME, SITE_ORIGIN, serviceCanonicalUrl } from './site'

/**
 * 브라우저 탭과 검색 결과에 뜨는 기본 제목·설명.
 *
 * 예전 값은 "최고의 스트리밍솔루션·AI 보안·인프라" 였습니다. 두 가지를 고쳤습니다.
 *  - 스트리밍이 앞에 있어 보안 전문사로 읽히지 않았습니다. 주력이 자체 개발한
 *    차세대 방화벽이므로 순서를 뒤집었습니다.
 *  - "최고의" 같은 최상급 표현은 근거를 대기 어렵고 표시광고 측면에서도
 *    불리합니다. 무엇을 하는지로 대체했습니다.
 *
 * **길이 주의.** 검색 결과에 보이는 것은 한글 기준 33자 안팎이고 그 뒤는
 * "..." 로 잘립니다. 다만 잘리는 것은 화면 표시일 뿐 색인에는 제목 전체가
 * 들어가므로, 뒤쪽 낱말도 검색어 매칭에는 쓰입니다. 그래서 앞자리에는 클릭을
 * 결정짓는 말을, 뒤에는 검색어를 둡니다. 무한정 늘리면 스팸으로 보이니
 * 45자는 넘기지 마세요.
 *
 * 홈 제목에 다 담을 수는 없습니다. DB 이중화·장애 복구 같은 검색어는 각 서비스
 * 상세 페이지의 제목이 이미 정확히 담고 있고, 그 검색으로 들어오는 사람에게는
 * 홈보다 그 페이지가 맞는 도착지입니다:
 *   /services/ha/                        운영서버 이중화 (HA) 설계 및 구축
 *   /services/db-cluster/                무중단 DB 이중화 및 매니지먼트 서비스
 *   /services/system-recovery-migration/ 서버 장애 복구 및 시스템 클라우드 이전
 *   /services/aidc/                      최신 GPU 호스팅 및 AI 전용 IDC (AIDC)
 */
export const SEO_DEFAULT_TITLE = `${SITE_NAME} | AI 보안 관제 · 차세대 방화벽 · AIDC · 서버 이중화`

/**
 * 검색 결과에 그대로 표시되는 설명문입니다.
 *
 * 실제로 많이 검색되는 서비스명을 담습니다 — AIDC, 서버 임대·코로케이션,
 * 서버·DB 이중화, 장애 복구, AI 보안 관제. 이 문장은 홈의 스니펫이자 JSON-LD
 * 의 회사 소개로도 쓰이므로 낱말 나열이 아니라 문장으로 둡니다.
 *
 * 한글 기준 100자 안쪽으로 유지하세요. 넘으면 검색 결과에서 잘립니다.
 */
export const SEO_DEFAULT_DESCRIPTION =
  'AIDC GPU 호스팅, 서버 임대·코로케이션, 서버·DB 이중화, 서버 장애 복구, 24시간 AI 보안 관제까지 한 팀이 운영합니다.'

/**
 * 검색어. 실제 제공 서비스 순서대로 둡니다 — 보안 → 인프라 → 스트리밍.
 * 스트리밍은 여전히 제공하므로 빼지 않고 뒤로 내렸습니다.
 */
export const SEO_KEYWORDS: string[] = [
  // 주력 제품
  'DMN Guard',
  'NGFW',
  '차세대 방화벽',
  'WAF',
  '웹방화벽',
  '통합 보안 어플라이언스',
  'JA4',
  '봇 차단',

  // 네트워크 보안
  '네트워크 보안',
  'IDS',
  'IPS',
  '침입탐지',
  '제로트러스트',
  '스트림 이상탐지',

  // 클라우드 보안
  '클라우드 보안',
  'CSPM',
  '클라우드 보안 진단',
  'CWPP',
  '컨테이너 보안',
  '쿠버네티스 보안',

  // AI · 데이터 보안
  'AI 보안',
  'LLM 보안',
  '딥페이크 탐지',
  '프롬프트 인젝션',

  // 보안 운영
  'AI 보안 관제',
  'AI보안관제',
  '보안 관제',
  '보안관제',
  '관제 서비스',
  '무인 관제',
  'SOC',
  'SIEM',
  'SOAR',

  // 인프라
  //
  // 띄어쓰기를 다르게 쓴 같은 말을 함께 둡니다("서버이중화"/"서버 이중화").
  // 검색창에는 붙여 치는 사람이 많은데, 형태소 분석이 늘 이 둘을 같은 말로
  // 묶어 주지는 않습니다.
  'IDC',
  '서버 임대',
  '서버임대',
  '코로케이션',
  'GPU 호스팅',
  'AIDC',
  'AI 데이터센터',
  'GPU 전용 호스팅',
  '위탁운영',
  'HA',
  '서버 이중화',
  '서버이중화',
  '운영서버 이중화',
  'DB 이중화',
  '디비 이중화',
  '디비이중화',
  '데이터베이스 이중화',
  '서버 장애 복구',
  '서버장애 복구',
  '장애 복구',
  '시스템 이전',
  '서버 이전',

  // 스트리밍
  '스트리밍솔루션',
  '라이브 스트리밍',
  'UltraStreamingEngine',
  'LL-HLS',
  'VOD',

  // 브랜드
  'DMN솔루션',
  'dmns.co.kr',
]

/**
 * 공유 카드 이미지.
 *
 * app/opengraph-image.png 파일 규약이 만드는 /opengraph-image.png 를 그대로
 * 가리킵니다. metadataBase 가 절대 URL 로 확장해 주므로 경로만 적으면 됩니다.
 *
 * 아래 두 함수가 openGraph 를 정의하는 순간 루트 레이아웃의 openGraph 는
 * 통째로 대체됩니다 — 필드 단위로 합쳐지지 않습니다. images 를 빼면
 * 상속되는 것이 아니라 그냥 사라져서, 홈을 뺀 전 페이지가 og:image 없이
 * 나갔습니다(카톡·슬랙에 썸네일 자체가 안 뜸). 여기서 항상 붙입니다.
 */
const OG_IMAGE = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — 차세대 방화벽 · AI 보안 관제`,
}

/**
 * 서비스 상세 페이지 메타데이터.
 *
 * 예전에는 18개 페이지가 title·description·canonical 만 갖고 openGraph 는
 * 루트 레이아웃 것을 상속했습니다. 그래서 어느 서비스 페이지를 공유하든
 * 카카오톡·슬랙에 홈 카드가 떴습니다.
 *
 * 여기서 한 번에 만들어 주면 제목을 고칠 때 OG 가 따라오지 않는 일이 없습니다.
 */
export function serviceMetadata(opts: {
  slug: string
  title: string
  description: string
  keywords?: string[]
}): Metadata {
  const url = serviceCanonicalUrl(opts.slug)
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE.url],
    },
  }
}

/** 서비스 외 정적 페이지(문의 등) 메타데이터 */
export function pageMetadata(opts: {
  path: string
  title: string
  description: string
  keywords?: string[]
}): Metadata {
  const url = `${SITE_ORIGIN}${opts.path}`
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE.url],
    },
  }
}
