# DMN솔루션 — 개발 내역 및 프로젝트 구조

Next.js(App Router) 기반의 DMN솔루션 랜딩·서비스 소개 사이트입니다.  
배포·도메인은 `lib/site.ts`의 `SITE_ORIGIN`(https://dmns.co.kr) 및 `layout.tsx`의 `metadataBase`와 일치합니다.

---

## 기술 스택

| 구분 | 내용 |
|------|------|
| 프레임워크 | Next.js 16 · React 18 |
| 스타일 | Tailwind CSS 4 · PostCSS |
| SEO | Next 네이티브 Metadata API (`lib/seo.ts` + 각 페이지 `metadata`) |
| 언어 | TypeScript |
| 문의 백엔드 | Cloudflare Pages Function (`functions/api/contact.ts`) |
| 호스팅 설정 | `vercel.json` · `DEPLOY.md`(Cloudflare Pages 등) |

> `next-seo` 가 의존성에 남아 있지만 어디서도 import 하지 않습니다. 메타데이터는 전부 Next 네이티브 Metadata API 로 처리합니다.

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
│   ├── not-found.tsx        # 404
│   ├── icon 계열            # opengraph-image.png (파일 컨벤션)
│   ├── contact/             # 문의 페이지
│   ├── sitemap-page/        # 사람이 읽는 사이트맵
│   └── services/            # 서비스별 상세 라우트 (18개)
│       ├── aidc/  cloud-posture/  cloud-workload/
│       ├── dmn-guard/       # 주력 제품 NGFW
│       ├── ai-agent/  ai-security/  ai-stream-security/
│       ├── db-cluster/  deepfake-detection/  ha/
│       ├── llm-security-audit/  managed-service/
│       ├── network-security/  server-rental/
│       ├── system-recovery-migration/
│       └── ultrastream/  vod-multistream/  zero-trust/
├── components/              # UI 컴포넌트 (홈·공통)
│   ├── Nav.tsx  Footer.tsx  Hero.tsx
│   ├── Flagship.tsx         # 주력 제품(DMN Guard) 블록
│   ├── ConsolePreview.tsx   # 관리 콘솔 재현 (스크린샷 아님)
│   ├── ServerRack.tsx       # 순수 CSS 3D IDC 통로 비주얼
│   ├── Services.tsx  ClosingCta.tsx
│   ├── ContactForm.tsx      # /api/contact 로 POST
│   ├── ChatBot.tsx          # 규칙기반 상담 위젯
│   ├── SalesIq.tsx  SalesIqOpenButton.tsx   # 위젯코드 비면 미렌더
│   ├── ScrollTop.tsx  ServiceIcon.tsx
│   └── ServiceDetailPage.tsx   # 서비스 상세 공통 패턴
├── lib/
│   ├── app-types.ts         # servicesData 재노출 배럴
│   ├── seo.ts               # 기본 타이틀·설명·키워드·OG
│   ├── servicesData.ts      # 서비스 메타·본문 데이터(단일 진실 공급원)
│   └── site.ts              # SITE_ORIGIN·canonical·소유확인·SalesIQ 설정
├── functions/api/contact.ts # Cloudflare Pages Function (POST /api/contact)
├── scripts/                 # 커밋·푸시 헬퍼, git hook 설치
├── .githooks/pre-push       # 푸시 전 빌드 검증
├── .cursor/rules/           # Cursor 프로젝트 규칙(예: 작업 후 git 푸시)
├── next.config.js
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── README.md
├── CLAUDE.md                # 프로젝트 가이드·컨벤션
├── TECHNICAL_SPEC.md        # 도메인별 기술 명세
├── DEPLOY.md                # Vercel / Cloudflare Pages 배포
└── DEVELOPMENT.md           # 본 문서
```

---

## 구현된 기능 요약

- **홈**: Hero(관제 보드 + ServerRack) → Flagship(DMN Guard + 콘솔 미리보기) → Services(보안 4축) → ClosingCta → Footer. 챗봇·상단 스크롤은 전역.
- **서비스 상세 18종**: `ServiceDetailPage` + `lib/servicesData.ts`의 `slug`와 `app/services/<slug>/page.tsx`가 1:1 대응.
- **문의**: `/contact/` 페이지의 `ContactForm` → `POST /api/contact`(Cloudflare Function) → Web3Forms·ZeptoMail·Resend·웹훅으로 팬아웃. 채널이 하나도 설정되지 않으면 503 을 돌려주고 "이메일로 보내달라"고 안내합니다 — 전달되지 않은 문의를 접수된 것처럼 보이지 않게 하려는 의도된 동작입니다.
- **브랜딩**: DMN솔루션으로 브랜드 통일(레이아웃·컴포넌트·서비스 페이지 메타데이터 등).
- **SEO**: `lib/seo.ts` 중앙화, `robots`, `sitemap.xml`, 사람이 읽는 `/sitemap-page/`, JSON-LD(WebSite·Organization·Service·BreadcrumbList), OG 이미지.

---

## Git 기준 개발 이력 (요약)

아래는 저장소 커밋 메시지를 시간순으로 요약한 것입니다.

1. **Initial commit** — 저장소 초기화  
2. **init** — 설정 파일, `app/`, `lib/` 초기 구성  
3. **feat** — 전체 공통 컴포넌트 추가(Nav, Hero, Services, About, Contact, Footer, Pricing, EdgeSection, ScrollTop, ChatBot, ServiceDetailPage)  
4. **feat** — 나머지 컴포넌트 보강(About, Contact, Pricing, EdgeSection, ChatBot)  
5. **feat** — 14개 서비스 페이지를 `ServiceDetailPage` 패턴으로 추가  
6. **rebrand** — DMN솔루션으로 리브랜딩(`app/`, `lib/` 등)  
7. **rebrand** — Nav, Footer, About  
8. **rebrand** — Contact, Pricing  
9. **rebrand** — ChatBot, EdgeSection  
10. **rebrand** — 서비스 페이지 일부(1–7) 메타데이터 DMN솔루션 반영  

자세한 diff는 `git log` / `git show`로 확인하면 됩니다.

---

## 일일 작업 기록

### 2026-08-10 (월) — lunarflux-site 소스 이관 및 DMN 리브랜딩

형제 프로젝트 `lunarflux-site` 의 소스 전체를 가져와 DMN솔루션으로 리브랜딩했다.
직전 상태는 `backup/pre-lunarflux-migration` 브랜치(`3bbcf49`)에 남겨 두었다.

- **소스 교체**: `app/` `components/` `lib/` 를 lunarflux 판으로 교체하고 `functions/` `scripts/` `.githooks/` 를 새로 들여왔다. 서비스가 14종 → 18종으로 늘었다(`aidc`, `cloud-posture`, `cloud-workload`, `dmn-guard` 추가). `/contact/` 와 `/sitemap-page/` 도 새로 생겼다.
- **브랜드 치환**: 상호·도메인·이메일·전화·사업자등록번호·주소를 DMN 값으로 바꿨다. 주력 제품 `Lunarflux Guard` 는 `DMN Guard` 로, 라우트는 `/services/lunarflux-guard/` → `/services/dmn-guard/` 로 재명명했다.
- **남의 계정 자격증명 제거**: 네이버 사이트 소유확인 코드와 Zoho SalesIQ 위젯 코드를 비웠다. 둘 다 lunarflux.ai 계정 소유 값이라, 그대로 두면 소유확인은 실패하고 **상담은 남의 계정 상담원에게 접수된다.** dmns.co.kr 명의로 재발급받아 채워야 한다.
- **챗봇 존치·이식**: SalesIQ 를 비운 자리에 기존 `ChatBot.tsx` 를 전역으로 붙였다. 이 컴포넌트가 쓰던 구 CSS 변수(`--accent`, `--bg`, `--border` 등)는 새 `globals.css` 의 `@theme` 에 존재하지 않아 **그대로 두면 배경이 투명해지고 글자가 사라진다.** 새 토큰(`--color-*`, `--font-*`)으로 전부 매핑했다. 구 팔레트의 주황 계열도 에메랄드/시안으로 맞췄고, 밝은 강조색 위 아이콘은 대비를 위해 어둡게 바꿨다. 문의 링크는 홈에 `#contact` 섹션이 없어 먹통이었던 것을 `/contact/` 이동으로 고쳤다.
- **정리**: lunarflux 에서 이미 미사용이던 `About.tsx` `EdgeSection.tsx` `Pricing.tsx`, 문의 경로 변경으로 고아가 된 `lib/web3formsKey.ts` `lib/adminNotify.ts`, 구 CSS 변수에 묶여 있던 `HomeValueStrip.tsx`, 대체된 `scripts/ensure-git-hooks.cjs` 를 제거했다.
- **환경변수 이전**: 문의 폼이 브라우저에서 Web3Forms 를 직접 호출하지 않고 `/api/contact` 를 거치게 되어, `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` 를 서버 전용 `WEB3FORMS_ACCESS_KEY` 로 옮겼다. **`NEXT_PUBLIC_` 접두사를 다시 붙이지 말 것** — 키가 번들에 노출되면 누구나 그 주소로 메일을 보낼 수 있다.
- **검증**: `npm run build` 성공, 26개 페이지 정적 생성. 산출물에 lunarflux·이전 법인 정보 잔재 없음을 확인했다.

### 2026-05-13 (수)

- **`dmnsolution.code-workspace` 추가**: Cursor/VS Code에서 프로젝트를 단일 폴더(`dmnsolution`) 워크스페이스로 열 때 쓸 수 있는 설정 파일을 추가했다.
- **통합 터미널 경로 고정 (`.vscode/settings.json`)**: Windows에서 기본 터미널 프로필을 PowerShell로 두고, `terminal.integrated.cwd`를 `${workspaceFolder}`로 지정해 새 터미널이 항상 저장소 루트에서 열리도록 했다.
- **문서**: 본 파일에 `일일 작업 기록` 섹션을 추가하고 위 내용을 정리했다. (참고 커밋: `27ab2ea`)

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
