import { SITE_ORIGIN } from './site'

/** Default title (layout); page-specific routes can override. */
export const SEO_DEFAULT_TITLE =
  'DMN솔루션 | IDC·서버·AI 보안·라이브 스트리밍 | 코로케이션 Ultrastream LL-HLS'

export const SEO_DEFAULT_DESCRIPTION =
  'DMN솔루션 — IDC·코로케이션·서버 위탁운영·HA, AI 보안 관제·딥페이크·이상탐지, Ultrastream(LL-HLS) 초저지연 라이브·VOD·멀티스트림. 서울·전국 B2B, 견적·도입 문의.'

export const SEO_OG_IMAGE = `${SITE_ORIGIN}/logo-dmn.png`

/**
 * Meta keywords (보조 신호; 핵심은 title·description·본문·구조화 데이터).
 * 국문·영문·서비스·기술어 혼합.
 */
export const SEO_KEYWORDS: string[] = [
  'DMN솔루션',
  'DMN Solution',
  '디엠엔솔루션',
  'dmns.co.kr',
  // IDC / 서버
  'IDC',
  'IDC 서버 임대',
  'IDC 코로케이션',
  'IDC 위탁운영',
  '코로케이션',
  '서버 임대',
  '서버 호스팅',
  '전용 서버',
  '베어메탈',
  '데이터센터',
  'MSP',
  '위탁운영',
  '서버 이중화',
  'HA 구성',
  'Galera',
  'DB 이중화',
  '장애 복구',
  '시스템 이전',
  '온프레미스',
  // 보안
  'AI 보안',
  'AI 보안 관제',
  'SOC',
  'SIEM',
  'SOAR',
  '딥페이크 탐지',
  '딥페이크 검출',
  '스트림 이상탐지',
  '네트워크 보안',
  'IDS',
  'IPS',
  '제로트러스트',
  'LLM 보안',
  '사이버 보안',
  'DDoS',
  // 스트리밍
  '라이브 스트리밍',
  '영상 스트리밍',
  '스트리밍 솔루션',
  'Ultrastream',
  'LL-HLS',
  '초저지연 스트리밍',
  'RTMP',
  'HLS',
  'WebRTC',
  'SRT',
  'VOD',
  '멀티스트림',
  '동시 송출',
  '라이브커머스',
  'OTT',
  '방송 송출',
  // 지역·업종
  '서울 IDC',
  '한국 IDC',
  'B2B 인프라',
  '엔터프라이즈',
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
