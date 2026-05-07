import { SITE_ORIGIN } from './site'

/** Default title (layout); page-specific routes can override. */
export const SEO_DEFAULT_TITLE = 'DMN솔루션 | IDC · AI 보안 · 라이브 스트리밍'

export const SEO_DEFAULT_DESCRIPTION =
  'DMN솔루션은 IDC 코로케이션, 서버 위탁운영부터 AI 보안 관제, 딥페이크 탐지, 초저지연 라이브 스트리밍(Ultrastream)까지 기업 맞춤형 IT 인프라를 제공합니다.'

export const SEO_OG_IMAGE = `${SITE_ORIGIN}/logo-dmn.png`

/**
 * Meta keywords (보조 신호; 핵심은 title·description·본문·구조화 데이터).
 * 국문·영문·서비스·기술어 혼합.
 */
export const SEO_KEYWORDS: string[] = [
  'DMN솔루션',
  '디엠엔솔루션',
  'dmns.co.kr',
  // IDC / 서버
  'IDC',
  '코로케이션',
  '서버 임대',
  '서버 위탁운영',
  '베어메탈',
  '데이터센터',
  'MSP',
  '서버 이중화',
  'HA 구성',
  'DB 이중화',
  '장애 복구',
  '시스템 이전',
  '온프레미스',
  // 보안
  'AI 보안 관제',
  '딥페이크 탐지',
  '스트림 이상탐지',
  '네트워크 보안',
  '제로트러스트',
  'LLM 보안',
  // 스트리밍
  '라이브 스트리밍',
  'Ultrastream',
  'LL-HLS',
  '초저지연 스트리밍',
  'VOD',
  '멀티스트림',
  'B2B 인프라',
]

/** Organization 스키마 knowsAbout / 검색 맥락용 주제 */
export const SEO_KNOWS_ABOUT: string[] = [
  'IDC 코로케이션',
  '서버 위탁운영',
  '고가용성 HA',
  'AI 보안 관제',
  '딥페이크 탐지',
  '라이브 스트리밍',
  'LL-HLS',
  'Ultrastream',
]
