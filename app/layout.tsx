import type { Metadata, Viewport } from 'next'
import { SITE_ORIGIN } from '@/lib/site'
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_TITLE,
  SEO_KEYWORDS,
  SEO_OG_IMAGE,
} from '@/lib/seo'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export const metadataBase = new URL(SITE_ORIGIN)

export const metadata: Metadata = {
  applicationName: 'DMN솔루션',
  title: SEO_DEFAULT_TITLE,
  description: SEO_DEFAULT_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: 'DMN솔루션', url: SITE_ORIGIN }],
  creator: 'DMN솔루션',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: 'DMN솔루션 — IDC · AI 보안 · 라이브 스트리밍',
    description: SEO_DEFAULT_DESCRIPTION,
    url: SITE_ORIGIN,
    siteName: 'DMN솔루션',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: SEO_OG_IMAGE,
        width: 1200,
        height: 438,
        alt: 'DMN솔루션 로고',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMN솔루션 — IDC · AI 보안 · 라이브 스트리밍',
    description: SEO_DEFAULT_DESCRIPTION,
    images: [SEO_OG_IMAGE],
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
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
