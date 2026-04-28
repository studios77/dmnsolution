# DMN솔루션 — 개발 내역 및 프로젝트 구조

Next.js(App Router) 기반의 DMN솔루션 랜딩·서비스 소개 사이트입니다.  
배포·도메인은 `lib/site.ts`의 `SITE_ORIGIN`(https://dmns.co.kr) 및 `layout.tsx`의 `metadataBase`와 일치합니다.

---

## 기술 스택

| 구분 | 내용 |
|------|------|
| 프레임워크 | Next.js 16 · React 18 |
| 스타일 | Tailwind CSS 4 · PostCSS |
| SEO | `next-seo` (메타데이터는 `layout`·각 페이지와 연동) |
| 언어 | TypeScript |
| 호스팅 설정 | `vercel.json` |

`package.json`의 `name`은 레거시(`lunarfluxai`)일 수 있으므로 브랜딩 표기와 혼동 시 메타데이터·UI 문구 기준으로 확인합니다.

---

## 폴더 구조

```
dmnsolution/
├── app/
│   ├── globals.css          # 글로벌 스타일
│   ├── layout.tsx           # 루트 레이아웃, 메타데이터·metadataBase(dmns.co.kr)
│   ├── page.tsx             # 메인(홈)
│   ├── robots.ts            # 크롤러 규칙
│   ├── sitemap.ts           # 사이트맵
│   └── services/            # 서비스별 상세 라우트 (14개)
│       ├── ai-agent/
│       ├── ai-security/
│       ├── ai-stream-security/
│       ├── db-cluster/
│       ├── deepfake-detection/
│       ├── ha/
│       ├── llm-security-audit/
│       ├── managed-service/
│       ├── network-security/
│       ├── server-rental/
│       ├── system-recovery-migration/
│       ├── ultrastream/
│       ├── vod-multistream/
│       └── zero-trust/
├── components/              # UI 컴포넌트 (홈·공통)
│   ├── About.tsx
│   ├── ChatBot.tsx
│   ├── Contact.tsx
│   ├── EdgeSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Pricing.tsx
│   ├── ScrollTop.tsx
│   ├── ServiceDetailPage.tsx   # 서비스 상세 공통 패턴
│   └── Services.tsx
├── lib/
│   ├── adminNotify.ts       # 관리자 알림 관련
│   ├── app-types.ts         # 앱 전역 타입
│   └── servicesData.ts      # 서비스 메타·본문 데이터(servicesData 배열)
├── next.config.js
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── README.md
└── DEVELOPMENT.md           # 본 문서
```

---

## 구현된 기능 요약

- **홈**: Hero, 서비스 요약, About, Edge, Pricing, Contact, Footer, 상단 스크롤, 챗봇 UI 등.
- **서비스 상세 14종**: `ServiceDetailPage` + `lib/servicesData.ts`의 `slug`와 `app/services/<slug>/page.tsx`가 1:1 대응.
- **브랜딩**: 과거 LunarFlux AI 표기에서 **DMN솔루션**으로 통일(레이아웃·컴포넌트·서비스 페이지 메타데이터 등).
- **SEO**: 메인 `metadata`, `robots`, `sitemap`, Open Graph 키워드 등.

---

## Git 기준 개발 이력 (요약)

아래는 저장소 커밋 메시지를 시간순으로 요약한 것입니다.

1. **Initial commit** — 저장소 초기화  
2. **init** — 설정 파일, `app/`, `lib/` 초기 구성  
3. **feat** — 전체 공통 컴포넌트 추가(Nav, Hero, Services, About, Contact, Footer, Pricing, EdgeSection, ScrollTop, ChatBot, ServiceDetailPage)  
4. **feat** — 나머지 컴포넌트 보강(About, Contact, Pricing, EdgeSection, ChatBot)  
5. **feat** — 14개 서비스 페이지를 `ServiceDetailPage` 패턴으로 추가  
6. **rebrand** — LunarFlux AI → DMN솔루션(`app/`, `lib/` 등)  
7. **rebrand** — Nav, Footer, About  
8. **rebrand** — Contact, Pricing  
9. **rebrand** — ChatBot, EdgeSection  
10. **rebrand** — 서비스 페이지 일부(1–7) 메타데이터 DMN솔루션 반영  

자세한 diff는 `git log` / `git show`로 확인하면 됩니다.

---

## 유지보수 시 참고

- 새 서비스 페이지: `lib/servicesData.ts`에 항목 추가 후 `app/services/<slug>/page.tsx`에서 `ServiceDetailPage`에 연결.
- 사이트 전역 제목·URL: `app/layout.tsx`의 `metadata`, `metadataBase`.

---

*문서 생성일 기준 트리·기능은 저장소 상태와 일치하도록 유지하는 것을 권장합니다.*
