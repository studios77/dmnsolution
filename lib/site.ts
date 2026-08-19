export const SITE_NAME = 'DMN솔루션'

/**
 * Production site origin (trailing slash 없음).
 *
 * **www 를 씁니다. 바꾸기 전에 아래를 읽으세요.**
 *
 * 예전에는 apex(`https://dmns.co.kr`)였는데, 그 호스트가 Cloudflare Pages 의
 * 커스텀 도메인으로 등록돼 있지 않아 인증서가 없었습니다. DNS 는 Cloudflare 를
 * 가리키지만 TLS 핸드셰이크에서 끊겨, 브라우저로도 크롤러로도 열리지 않았습니다.
 *
 * 그 상태로 sitemap.xml 의 21개 URL 과 모든 canonical, robots 의 Host·Sitemap 이
 * 전부 apex 를 가리키고 있었습니다. 검색엔진이 사이트맵을 받아도 그 안의 주소가
 * 하나도 열리지 않으니 색인될 수가 없었습니다. 이것이 검색에 잡히지 않던
 * 직접적인 원인입니다.
 *
 * apex 를 쓰고 싶다면 순서가 있습니다:
 *   1. Cloudflare Pages → dmnsolution → Custom domains 에 `dmns.co.kr` 추가
 *   2. `https://dmns.co.kr/` 이 200 으로 열리는지 확인
 *   3. 그 뒤에 이 값을 바꾸고, www → apex 301 리다이렉트를 걸어 한쪽으로 모음
 * 확인 없이 값만 되돌리면 색인이 다시 통째로 끊깁니다.
 */
export const SITE_ORIGIN = 'https://www.dmns.co.kr'

export function serviceCanonicalUrl(slug: string): string {
  return `${SITE_ORIGIN}/services/${slug}/`
}

/**
 * 검색엔진 사이트 소유확인 코드.
 *
 * 각 서비스에 사이트를 등록하면 발급되는 값입니다. 빈 문자열이면 해당 meta
 * 태그를 출력하지 않으므로, 받은 것만 채워 넣으면 됩니다.
 *
 *   네이버  https://searchadvisor.naver.com  → 사이트 등록 → HTML 태그 확인
 *   구글    https://search.google.com/search-console → 소유권 확인 → HTML 태그
 *
 * 등록 자체가 중요합니다 — 특히 네이버는 서치어드바이저에 사이트와 사이트맵을
 * 제출하지 않으면 색인이 거의 되지 않습니다.
 */
export const SITE_VERIFICATION = {
  /**
   * **비워 두는 것이 맞습니다. 네이버는 HTML 파일 방식으로 인증했습니다.**
   *
   *   public/naverca6bca8171f8548a5beb02755b723cad.html
   *
   * 이 파일이 사이트 루트에서 그대로 열려야 인증이 유지됩니다. `public/` 안의
   * 파일만 정적 내보내기 루트로 복사되므로 다른 폴더로 옮기지 마세요.
   * 내용이 한 줄뿐이고 확장자가 .html 이라 얼핏 쓰레기 파일로 보이지만,
   * 지우면 네이버 재검증에서 미인증으로 떨어져 수집이 멈춥니다.
   *
   * 파일 방식과 메타태그 방식은 코드 값이 서로 다릅니다. 파일명의 코드를
   * 여기에 옮겨 적지 마세요 — 검증되지 않는 엉뚱한 태그가 나갑니다.
   */
  naver: '',
  /**
   * dmns.co.kr 로 발급받은 코드를 넣으세요. DNS TXT 로 인증했다면 비워 둡니다.
   * 메타태그와 DNS 를 함께 쓰면 중복이고 관리 지점만 늘어납니다.
   */
  google: '',
} as const

export type SalesIqConfig = {
  /** 스크립트 URL 의 `?wc=` 값. 비면 위젯과 contact 카드가 렌더되지 않습니다. */
  widgetCode: string
  /** 쿼리스트링을 뺀 위젯 스크립트 URL. 데이터센터에 따라 도메인이 다릅니다. */
  scriptSrc: string
}

/**
 * Zoho SalesIQ 라이브 채팅 설정.
 *
 * 값을 받는 곳: SalesIQ 관리자 → Settings → Brands → Installation → Website.
 * 거기 표시되는 스니펫의 스크립트 `src` 에 두 값이 다 들어 있습니다.
 *
 * ```
 * src="https://salesiq.zohopublic.com/widget?wc=siq1730fe..."
 *      └────────── scriptSrc ──────────┘     └── widgetCode ──┘
 * ```
 *
 * **`scriptSrc` 는 대시보드에 적힌 값을 그대로 옮기세요.** Zoho 는 계정이
 * 속한 데이터센터마다 도메인이 다릅니다(`.com` / `.eu` / `.in` / `.com.au`
 * / `.jp` 등). 아래 값과 다르면 위젯이 조용히 뜨지 않고, 콘솔에도
 * 뚜렷한 오류가 남지 않아 원인 찾기가 번거롭습니다.
 *
 * 위젯 코드는 비밀이 아닙니다 — 브라우저에서 채팅을 띄우는 데 쓰이므로
 * 어차피 공개됩니다. 그래서 Cloudflare Secret 이 아니라 저장소에 둡니다.
 * 정적 내보내기라 빌드 시점에 값이 필요하기도 합니다.
 *
 * **비면 위젯도 contact 카드도 렌더되지 않습니다.** 붙지 않을 채팅을
 * 안내하지 않기 위한 의도적인 동작입니다.
 *
 * `as const` 를 쓰지 않는 이유는 STATIC_PAGES 와 같습니다 — 빈 문자열이
 * 리터럴 타입이 되면 `if (!widgetCode)` 이후가 도달 불가로 좁혀집니다.
 */
export const SALESIQ: SalesIqConfig = {
  /**
   * 비워 둡니다 — 이전 값은 lunarflux.ai 의 SalesIQ 계정 위젯이라, 그대로 두면
   * 이 사이트의 상담이 남의 계정 상담원에게 접수됩니다. DMN솔루션 명의로
   * SalesIQ 를 개설한 뒤 발급된 코드를 넣으세요.
   *
   * 비어 있는 동안에는 아래 ChatBot 이 상담 창구 역할을 합니다.
   */
  widgetCode: '',
  scriptSrc: 'https://salesiq.zohopublic.com/widget',
}

/**
 * 콘텐츠 최종 수정일 (`YYYY-MM-DD`). `sitemap.xml` 의 `lastmod` 기본값입니다.
 *
 * 예전에는 `app/sitemap.ts` 가 `new Date()` 를 써서, 배포할 때마다 21개 URL 이
 * 전부 "방금 수정됨" 으로 나갔습니다. 인계 노트만 고친 배포에도 그랬습니다.
 * 매번 바뀌는 `lastmod` 는 검색엔진이 아예 무시하게 되는 신호입니다.
 *
 * **문구나 서비스 내용을 고칠 때 함께 올리세요.** 리팩터링·설정 변경처럼
 * 방문자가 보는 내용이 그대로인 배포에서는 건드리지 않습니다.
 * 특정 페이지만 갱신됐다면 아래 `STATIC_PAGES.lastModified` 나
 * `ServiceData.updated` 로 그 페이지만 덮어쓰면 됩니다.
 */
export const CONTENT_LAST_MODIFIED = '2026-08-11'

export type StaticPage = {
  path: string
  priority: number
  /** 비우면 CONTENT_LAST_MODIFIED 를 씁니다. */
  lastModified?: string
}

/** 서비스 외 정적 페이지. 사이트맵과 canonical 이 같은 목록을 보게 둡니다. */
export const STATIC_PAGES: StaticPage[] = [
  { path: '/contact/', priority: 0.9 },
  // 사용자용 사이트맵. 전환 페이지가 아니라 우선순위는 낮게 둡니다.
  { path: '/sitemap-page/', priority: 0.4 },
]

export function pageCanonicalUrl(path: string): string {
  return `${SITE_ORIGIN}${path}`
}

