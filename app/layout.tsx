import type { Metadata, Viewport } from 'next'
import { SITE_ORIGIN } from '@/lib/site'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#eef4fb',
}

export const metadataBase = new URL(SITE_ORIGIN)

export const metadata: Metadata = {
  title: 'DMN솔루션 — IDC 서버 임대·AI 보안·스트리밍 통합 플랫폼',
  description: 'IDC 서버 임대·위탁운영부터 AI 보안 관제, Ultrastream 엔진 기반 라이브 스트리밍까지. 스트리밍 솔루션, 영상 스트리밍 플랫폼, 클라우드 인프라, AI 보안, 네트워크 보안, 백업/DR 솔루션을 하나의 플랫폼으로.',
  keywords: [
    'IDC', 'IDC 서버 임대', 'IDC 위탁운영', 'IDC 코로케이션', '서버 임대', '서버 위탁관리',
    '코로케이션', '1U 서버', '2U 서버', '풀랙', '하프랙', '데이터센터 임대',
    '클라우드 인프라', '베어메탈 서버', '전용서버 임대', 'VPS', '서버 호스팅',
    '스트리밍 솔루션', '영상 스트리밍', '영상 스트리밍 플랫폼', '라이브 스트리밍 플랫폼',
    '라이브 방송 솔루션', 'Ultrastream', '초저지연 스트리밍', 'LL-HLS', 'WebRTC 스트리밍',
    'VOD 플랫폼', '멀티스트림', '동시 송출', '유튜브 동시 방송',
    '인공지능 보안', 'AI 보안', 'AI 보안 관제', '네트워크 보안', 'AI 사이버보안',
    '딥페이크 탐지', '딥페이크 검출', 'AI 이상탐지', 'SOC 자동화', '사이버 보안',
    'DDoS 차단', '보안 관제', 'SIEM', '제로트러스트',
    '백업 솔루션', 'DR 솔루션', '재해복구', '데이터 백업', '서버 이중화', 'HA 구성',
    '서버 복구', '서버 장애 복구', '시스템 이전', '트러블슈팅', '온프레미스 기술지원',
    'DMN솔루션', 'DMN Solution',
  ],
  authors: [{ name: 'DMN솔루션', url: SITE_ORIGIN }],
  creator: 'DMN솔루션',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: 'DMN솔루션 — IDC 서버 임대·AI 보안·스트리밍 통합 플랫폼',
    description: 'IDC 인프라와 AI 보안, 초저지연 스트리밍을 함께 제공합니다.',
    url: SITE_ORIGIN,
    siteName: 'DMN솔루션',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMN솔루션 — IDC · AI 보안 · 스트리밍',
    description: 'IDC·AI 보안·라이브 스트리밍을 한 팀이 맡습니다.',
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  )
}
