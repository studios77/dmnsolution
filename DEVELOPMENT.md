# DMN솔루션 — 개발 내역 및 프로젝트 구조

Next.js(App Router) 기반의 DMN솔루션 랜딩·서비스 소개 사이트입니다.  
배포·도메인은 `lib/site.ts`의 `SITE_ORIGIN`(https://www.dmns.co.kr) 및 `layout.tsx`의 `metadataBase`와 일치합니다.

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
│   ├── layout.tsx           # 루트 레이아웃, 메타데이터·metadataBase(www.dmns.co.kr)
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

### 2026-08-11 (화) — 검색 노출 수정 (네이버 · 구글)

검색에 잡히지 않던 원인은 SEO 설정이 아니라 **주소**였다.

- **모든 URL 이 열리지 않는 호스트를 가리키고 있었다.** `SITE_ORIGIN` 이 apex(`https://dmns.co.kr`)였는데 그 호스트는 Cloudflare Pages 커스텀 도메인에 등록돼 있지 않아 인증서가 없고 TLS 핸드셰이크에서 끊긴다. 그 상태로 sitemap.xml 의 21개 URL, 모든 canonical, robots 의 `Host`·`Sitemap` 이 전부 apex 를 가리켰다. 검색엔진이 사이트맵을 받아도 안의 주소가 하나도 열리지 않으니 색인될 수 없었다. **실제로 서비스되는 `https://www.dmns.co.kr` 로 바꿨다.**
  - **apex 는 쓰지 않기로 했다(2026-08-11 결정).** 자체 네임서버(`ns.dmns.co.kr`)를 유지하는데, apex 를 Cloudflare Pages 에 붙이려면 존을 Cloudflare 네임서버로 옮겨야 한다 — apex 는 DNS 규격상 CNAME 을 쓸 수 없어 Cloudflare 가 존을 직접 관리하며 CNAME 플래트닝을 해줘야 하기 때문이다. 자체 DNS 를 유지하는 쪽을 택했으므로 www 가 정본이다.
  - 나중에 apex 를 살린다면 순서를 지킨다: 네임서버 이전(또는 자사 서버에서 apex 를 직접 서빙하고 www 로 301) → `https://dmns.co.kr/` 이 200 인지 확인 → 그다음 `SITE_ORIGIN` 변경. 확인 없이 값만 되돌리면 색인이 다시 끊긴다.
  - 참고: apex 에 아직 Cloudflare IP(`172.66.45.11`, `172.66.46.245`)가 A 레코드로 박혀 있다. 열리지 않는 주소를 만들 뿐이고 Cloudflare 가 그 IP 를 보장하지도 않으므로 자체 DNS 에서 정리하는 편이 낫다.
- **제목에 검색어가 없었다.** 메인 재설계 때 h1·h2 를 전부 슬로건으로 바꿔, 검색엔진이 가장 무겁게 보는 자리에 정작 사람들이 검색하는 말이 하나도 없었다. 슬로건은 부제로 내리고 제목에 주제어를 넣었다.
  - h1: "방화벽부터 관제까지" → "**차세대 방화벽**부터 **AI 보안 관제**까지"
  - h2: 제품명·슬로건만 있던 자리에 `차세대 방화벽 NGFW·WAF`, `네트워크·클라우드·AI 데이터 보안`, `AI 보안 관제 · 24시간 무인 SOC`, `클라우드 보안 진단 · CSPM/CWPP`, `IDC 서버 임대 · 코로케이션 · 라이브 스트리밍` 을 넣었다.
- **`CONTENT_LAST_MODIFIED`** 를 2026-08-11 로 올렸다. 콘텐츠가 크게 바뀌었는데 8일자로 남아 있었다.

**네이버 소유확인 — HTML 파일 방식으로 적용했다.**

받은 파일이 `searchadvisor/` 에 있었는데 그 위치는 배포되지 않는다. 정적 내보내기는 `public/` 안의 파일만 루트로 복사한다.

```
public/naverca6bca8171f8548a5beb02755b723cad.html
→ https://www.dmns.co.kr/naverca6bca8171f8548a5beb02755b723cad.html
```

여기에 함정이 하나 더 있었다. **Pages 는 기본적으로 `.html` 확장자를 떼고 308 로 보낸다.** 내용은 결국 나오지만 검증 요청이 리다이렉트를 따라가지 않으면 미인증으로 떨어지므로, `public/_redirects` 에 200 재작성 규칙을 넣어 확장자가 붙은 경로에서 바로 200 이 나오게 했다.

`SITE_VERIFICATION.naver` 는 계속 비워 둔다 — 파일 방식과 메타태그 방식은 코드 값이 달라, 파일명의 코드를 메타태그에 옮겨 적으면 검증되지 않는 태그가 나간다.

**아직 사람이 해야 하는 일:**

1. **네이버 서치어드바이저에 `www.dmns.co.kr` 등록.** 기존 등록이 apex(`dmns.co.kr`)로 되어 있는데 그 주소로는 인증 파일도 사이트맵도 열리지 않는다. www 로 새로 등록 → 소유확인 → **요청 탭에서 `https://www.dmns.co.kr/sitemap.xml` 제출**. 네이버는 사이트맵을 직접 제출하지 않으면 사실상 수집하지 않는다.
2. **구글 서치콘솔** — <https://search.google.com/search-console> 에서 `www.dmns.co.kr` 등록 → 소유확인(HTML 태그면 `SITE_VERIFICATION.google`, DNS TXT 면 비워 둠) → 사이트맵 제출.

### 2026-08-10 (월) — AI 보안 전문기업 구성으로 메인 재편, 로고 가시성 수정

- **로고가 안 보이던 문제**: 워드마크가 흰색이라 라이트 전환 이후 헤더·푸터에서 초록 사각형만 남고 글자가 사라졌다. 헤더·히어로·관제·인프라 띠·푸터를 어두운 구역으로 되돌렸다.
- **`.dark-band`**: 구역 안에서 토큰을 다시 선언하는 방식. Tailwind v4 유틸리티가 `var(--color-*)` 를 읽으므로 하위의 `bg-surface`·`text-fg` 가 자동으로 어두운 값을 쓴다. 어두운 구역에서는 강조색을 다시 밝게 올린다(`#047857` 은 어두운 배경에서 2.3:1). 이 규칙은 **`@layer base` 안에 둔다** — 레이어 밖에 두면 Tailwind 의 `@layer utilities` 를 이겨서 유틸리티로 배경을 덮을 수 없다.
- **헤더 배경만 리터럴로**: Tailwind 는 알파가 붙은 색 유틸리티에 정적 폴백과 `color-mix` 버전을 함께 내보내는데, **폴백에는 토큰의 기본값(밝은 `#f7f9fc`)이 구워진다.** `color-mix` 미지원 브라우저에서 어두운 헤더에 밝은 배경이 깔려 흰 로고가 다시 사라지는 경로였다. `bg-[#0a1020]/90` 으로 바꿔 폴백도 어두운 값이 되게 했다. (나머지 알파 유틸은 옅은 틴트·테두리라 색조만 달라지고 가독성에는 영향이 없다.)
- **Nav 톤 재조정**: `indigo` 는 Tailwind 고정색이라 구역에 따라 뒤집히지 않는다. 헤더가 다시 어두워졌으므로 `indigo-300` 으로 되돌렸다(`indigo-600` 은 어두운 바탕에서 3.3:1).
- **메인 구성**: 히어로 → NGFW → 보안 4축 → 보안 관제 → 클라우드 보안 → 인프라·스트리밍 → 문의. 세 사업 축을 대등하게 늘어놓으니 무슨 회사인지 흐려져, 직접 만든 방화벽과 관제를 앞세웠다.
- **산업군·도입절차 제거**: 어느 보안 업체에나 붙는 일반적인 내용이라 이 회사가 무엇을 하는지 설명하지 못했다. 자리를 관제 운영 방식(수집→탐지→분석→대응→보고)과 클라우드 보안(CSPM/CWPP)으로 채웠다. 수치와 점검 항목은 전부 `servicesData` 본문에 이미 있는 값이다.
- **분류 불변**: `servicesData.cat` 과 18개 상세 페이지는 손대지 않았다. 홈의 보안 4축은 `lib/securityAxes.ts` 가 `cat` 으로 묶으므로 서비스를 추가하면 홈이 따라온다.

### 2026-08-10 (월) — 라이트 테마 전환 및 메인페이지 재설계

이관 직후의 홈은 lunarflux.ai 와 화면이 같았다. 서비스 분류와 상세 페이지는
그대로 두고 테마와 홈 화면만 새로 짰다.

- **라이트 테마**: `globals.css` 의 `@theme` 토큰을 밝은 배경 기준으로 다시 잡았다. 배경 계층을 뒤집고(`canvas #f7f9fc` → `surface #ffffff`), **강조색을 어둡게 내렸다** — 기존 에메랄드 `#34d399` 는 흰 배경 위 대비가 1.8:1 이라 글자로 쓸 수 없다. 지금은 `#047857`(5.9:1)·`#0e7490`(5.06:1) 이다. 상태색과 `indigo-400`(2.9:1 → `indigo-600`)도 함께 내렸다.
- **전경색 반전**: 강조색을 채움으로 쓰는 곳은 전경이 전부 반대로 간다. 다크에서는 "밝은 강조색 + 어두운 글자"였고 지금은 "어두운 강조색 + 흰 글자"다. `bg-accent`+`text-canvas` 조합은 토큰이 뒤집히며 자동으로 맞았지만, ChatBot 의 아이콘처럼 색을 직접 적어 둔 곳은 손으로 뒤집었다.
- **밝은 배경에서 사라지던 것들**: 격자 오버레이(`.grid-bg`)와 서비스 비교표 줄무늬가 흰색이라 흰 배경에서 보이지 않았다. 둘 다 어두운 색으로 뒤집었다. 앰비언트 글로우는 같은 알파로 두면 회색 얼룩처럼 번져 알파를 절반 이하로 낮췄다.
- **ServerRack 은 다크 유지**: 어두운 통로에서 LED 가 빛나는 착시라 밝은 배경에서는 글로우가 전부 사라진다. 컨테이너에서 토큰을 재정의해 그 하위만 다크 팔레트를 쓰게 했다 — Tailwind v4 유틸리티가 `var(--color-*)` 를 읽는 성질을 이용한 것이라 클래스를 하나씩 고칠 필요가 없다. (이후 홈 재설계로 미사용이 되어 제거)
- **메인페이지 재설계**: `components/home/` 에 새로 짰다. 구성은 3축 소개 → 축별 서비스 → 자체 제품 → 도입 절차 → 문의. lunarflux 는 주력 제품 하나를 앞세우는 구성이었지만, DMN솔루션은 세 영역을 **각각 따로 계약해 파는** 구조라 세 축을 나란히 두는 편이 실제 판매 방식과 맞는다.
- **분류는 그대로**: `servicesData` 의 `cat` 과 18개 상세 페이지는 손대지 않았다. 홈의 3축은 `lib/homePillars.ts` 에서 `cat` 접두사로 걸러내므로, 서비스를 추가해도 홈이 자동으로 따라간다 — 예전처럼 홈에 서비스 이름을 다시 적어 두지 않는다.
- **끊어진 앵커 수리**: 홈 구조가 바뀌며 `#services` 가 사라져 Nav·Footer·상세페이지 이동경로의 링크가 아무 데도 닿지 않았다. `#pillars` 로 바꾸고, `trailingSlash: true` 에 맞춰 `/contact` 도 `/contact/` 로 통일했다.
- **정리**: 홈 재설계로 미사용이 된 `Hero` `Flagship` `ClosingCta` `Services` `ServerRack` `ConsolePreview` 를 제거했다.
- **검증**: `npm run build` 성공, 26개 페이지 정적 생성.

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
