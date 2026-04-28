# 배포 안내 — Vercel · Cloudflare Pages

이 프로젝트는 Next.js **`output: 'export'`** 로 **정적 HTML**을 `out/` 에 생성합니다.  
빌드는 **`npm run build`** 하나이며, 결과물 디렉터리는 **`out`** 입니다.

공통 확인:

- 저장소에 `package-lock.json` 이 있음 (CI·Pages 캐시에 유리)
- 루트에 `.nvmrc` → Node **20**
- 필요 시 플랫폼 환경 변수에 **`NODE_VERSION=20`** (Pages에서 권장)

---

### Cloudflare·도메인 — 이렇게 이해하면 됩니다

| 질문 | 답 |
|------|-----|
| **Cloudflare에서 도메인을 새로 사야 하나?** | **아니오.** 배포에는 **Workers & Pages → Pages** 만 있으면 됩니다. **도메인 등록(구매·이전)은 필수 아님.** |
| **DNS를 타사(가비아, 후이즈, Route53 등)에서 쓰는데 괜찮나?** | **임시로 사이트만 볼 때**는 DNS와 **무관**합니다. Git만 연결해 배포하면 **`https://○○○.pages.dev`** 로 바로 열 수 있습니다. |
| **임시로만 보려면?** | 아래 **「2. Cloudflare Pages」** 만 진행하세요. 완료 후 주소는 **`프로젝트이름.pages.dev`** (배포 화면·프로젝트 **Domains** 에 표시). |
| **나중에 `dmns.co.kr`을 이 사이트로 쓰려면?** | 그때 **Pages 프로젝트 → Custom domains** 에 `dmns.co.kr` 추가 → Cloudflare가 **타사 DNS에 넣을 CNAME/TXT** 를 안내합니다. **네임서버를 Cloudflare로 옮기지 않아도** “CNAME만 타사에 추가”하는 방식이 가능한 경우가 많습니다(화면 안내 따름). |

---

## 1. Vercel — 임시 도메인 `*.vercel.app`

1. [Vercel](https://vercel.com) 로그인 → **Add New…** → **Project**
2. **Import** 에서 GitHub 저장소 **`studios77/dmnsolution`** 선택 (또는 본인 포크).
3. **Framework Preset**: `Other` 또는 `Next.js` 중 하나 (자동 감지돼도 됨).
4. 빌드는 저장소의 **`vercel.json`** 기준으로 잡히는 경우가 많습니다:
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build`
   - **Output Directory**: **`out`**  ← 매우 중요 (기본값 `.next` 아님)
5. **Deploy** 로 첫 배포.
6. 완료 후 **Domains** 또는 프로젝트 상단에서 **`프로젝트명-xxxx.vercel.app`** 형태의 임시 URL로 접속.

**주의:** Output이 `out`이 아니면 404거나 빈 화면이 납니다. 설정에서 **`out`** 인지 확인하세요.

프로덕션 도메인(`dmns.co.kr`)은 나중에 같은 프로젝트 **Settings → Domains** 에 추가하면 됩니다.

---

## 2. Cloudflare Pages — 임시 도메인 `*.pages.dev`

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** 탭 → **Connect to Git**
2. GitHub 연동 후 저장소 **`studios77/dmnsolution`** 을 선택합니다 (실제 계정/repo 경로에 맞게 수정).
3. **Branch**: `main` (또는 배포 브랜치).
4. **Build configuration** 을 다음처럼 맞춤:

   | 항목 | 값 |
   |------|-----|
   | Framework preset | `None` (또는 Next.js 선택 시 출력만 꼭 확인) |
   | Build command | `npm run build` |
   | Build output directory | **`out`** |
   | Root directory | **`/`** (저장소 루트) |

5. **Environment variables** (Variables and Secrets):

   | Name | Value |
   |------|--------|
   | `NODE_VERSION` | `20` |

   `.nvmrc` 만으로도 종종 잡히지만, Pages에서는 **`NODE_VERSION=20`** 을 명시하는 편이 안전합니다.

6. **Save and Deploy**.
7. 완료 후 프로젝트 **Overview** 또는 **Custom domains** 에 **`https://프로젝트명.pages.dev`** 가 보입니다. **이것만으로 임시 데모 완료** — 별도 도메인 구매·DNS 설정 없음.

**나중에 본인 도메인 연결:** **Custom domains** 에 `dmns.co.kr` 입력 → 표시되는 **CNAME/TXT** 를 **지금 쓰는 타사 DNS 관리 화면**에 추가(또는 Cloudflare가 네임서버 이전을 권유할 수 있음). **임시 데모 단계에서는 아무 것도 넣지 않아도 됨.**

---

## 3. 배포 확인

빌드 로그에서 `next build` 가 끝난 뒤 `out/` 이 생성되어야 하고, 접속 시:

- `/` — 메인
- `/services/server-rental/` — 서비스 상세 (프로젝트에 **`trailingSlash: true`** 있음)

이 경로들이 동작하면 설정이 맞습니다.

---

## 참고 — 로컬에서 정적 결과만 확인

```bash
npm ci
npm run build
npx --yes serve out
```

표시되는 `http://localhost:…` 과 동일 파일이 플랫폼에도 올라갑니다.
