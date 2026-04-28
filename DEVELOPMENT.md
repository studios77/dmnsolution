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
| 호스팅 설정 | `vercel.json` · `DEPLOY.md`(Cloudflare Pages 등) |

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
│   ├── adminNotify.ts       # 관리자 알림(Slack/Discord 웹훅)
│   ├── app-types.ts         # 앱 전역 타입
│   ├── servicesData.ts      # 서비스 메타·본문 데이터(servicesData 배열)
│   └── site.ts              # SITE_ORIGIN·서비스 canonical URL
├── .cursor/rules/           # Cursor 프로젝트 규칙(예: 작업 후 git 푸시)
├── app/not-found.tsx        # 404
├── next.config.js
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── README.md
├── DEPLOY.md                # Vercel / Cloudflare Pages 배포
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
- 도메인·canonical 일괄: `lib/site.ts`의 `SITE_ORIGIN`, `serviceCanonicalUrl()`.

---

## Cursor 에이전트 모델 (GPT-5.5)

저장소만으로 IDE 기본 모델이 바뀌지는 않습니다. **에이전트 / Composer**에 **GPT-5.5**를 쓰려면 Cursor 앱에서 지정합니다.

1. **Ctrl + ,** 로 설정 열기 (또는 좌하단 톱니바퀴 → **Cursor Settings**).
2. **Models** 또는 **Agent** / **Composer** 관련 항목에서 **Default model**·**Agent model** 드롭다운을 연다.
3. 목록에서 **GPT-5.5** 계열(표기는 Cursor 버전에 따라 `GPT-5.5`, `GPT-5.5 Medium` 등)을 선택한다.

채팅/에이전트 입력창 **상단의 모델 이름**을 눌러 같은 목록에서 바꿀 수도 있습니다.

---

*문서 생성일 기준 트리·기능은 저장소 상태와 일치하도록 유지하는 것을 권장합니다.*
