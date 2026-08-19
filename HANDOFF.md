# 인계 노트 — DMN솔루션 웹사이트

작업 이력은 `DEVELOPMENT.md` 의 일일 기록에, 코드 규칙은 `CLAUDE.md` 에 있습니다.
이 문서는 **지금 사이트가 어떤 상태이고, 다음에 무엇을 해야 하는가** 만 다룹니다.

최종 갱신: 2026-08-11

---

## 1. 지금 상태

| 항목 | 값 |
|---|---|
| 서비스 주소 | **https://www.dmns.co.kr** |
| 미리보기 | https://dmnsolution.pages.dev |
| 저장소 | `studios77/dmnsolution` (main 푸시 → Cloudflare 자동 빌드) |
| 호스팅 | Cloudflare Pages 프로젝트 `dmnsolution` |
| 마지막 커밋 | `9560d00` |
| 페이지 수 | 26 (홈 · 문의 · 사이트맵 · 서비스 18 · 기타) |
| 빌드 | `npm run build` 성공, 정적 내보내기(`out/`) |

작업 트리는 깨끗하고, 모든 변경은 푸시·배포된 상태입니다.

---

## 2. 2026-08-10 ~ 08-11 에 한 일

`lunarflux-site` 소스를 가져와 DMN솔루션 사이트로 바꾸고, 테마와 메인페이지를 새로 짠 뒤 검색 노출 문제를 고쳤습니다. 커밋 6개입니다.

```
9560d00  검색 주소 수정 + 제목에 검색어 반영
b492027  메인 문구 문어체로 정리
c462bb8  중간 섹션 교체(보안 관제·클라우드 보안) + 헤더 배경 폴백 수정
74b8806  메인을 AI 보안 전문기업 구성으로 재편 + 로고 가시성 수정
7edca55  라이트 테마 전환 + 메인 1차 재설계
7f3566a  lunarflux-site 이관 및 DMN솔루션 리브랜딩
```

**이관** — 서비스가 14종에서 18종으로 늘었고(`aidc`, `cloud-posture`, `cloud-workload`, `dmn-guard`), `/contact/` 와 `/sitemap-page/` 가 생겼습니다. 문의는 브라우저에서 Web3Forms 를 직접 부르던 방식에서 Cloudflare Pages Function(`/api/contact`) 경유로 바뀌었습니다.

**리브랜딩** — 상호·도메인·연락처·사업자번호를 DMN 값으로 바꾸고, 주력 제품 `Lunarflux Guard` 를 `DMN Guard` 로(라우트도 `/services/dmn-guard/`) 재명명했습니다.

**테마** — 본문은 밝게, 헤더·히어로·관제·인프라 띠·푸터는 어둡게 갑니다. 로고 워드마크가 흰색이라 그 구역들은 어두워야 합니다.

**메인페이지** — 히어로 → NGFW → 보안 4축 → 보안 관제 → 클라우드 보안 → 인프라·스트리밍 → 문의. 세 사업 축을 대등하게 늘어놓으니 무슨 회사인지 흐려져, 직접 만든 방화벽과 관제를 앞세웠습니다.

**서비스 분류와 18개 상세 페이지는 손대지 않았습니다.**

---

## 3. 다음에 해야 할 일 (사람이 대시보드에서)

우선순위 순입니다. 1~2번을 하지 않으면 **검색에 계속 안 잡힙니다.**

### 3-1. 네이버 서치어드바이저 등록 — 가장 급함

1. <https://searchadvisor.naver.com> → 사이트 등록에 `https://www.dmns.co.kr` 입력
2. 소유확인 방식에서 **HTML 태그** 선택 → 표시되는 코드 복사
3. 그 코드를 `lib/site.ts` 의 `SITE_VERIFICATION.naver` 에 넣고 배포
4. 서치어드바이저로 돌아와 소유확인
5. **요청 → 사이트맵 제출 → `https://www.dmns.co.kr/sitemap.xml`**

5번을 빠뜨리지 마세요. 네이버는 사이트맵을 직접 제출하지 않으면 사실상 수집하지 않습니다.

### 3-2. 구글 서치콘솔 등록

<https://search.google.com/search-console> 에서 `www.dmns.co.kr` 등록 → 소유확인 → 사이트맵 제출. DNS TXT 로 인증하면 `SITE_VERIFICATION.google` 은 비워 둡니다(메타태그와 DNS 를 함께 쓰면 중복입니다).

### 3-3. apex 도메인 `dmns.co.kr` 살리기

지금 이 주소는 **열리지 않습니다.** DNS 는 Cloudflare 를 가리키지만 Pages 커스텀 도메인에 등록돼 있지 않아 인증서가 없고 TLS 에서 끊깁니다. 검색 문제 이전에, 명함·메일에 적힌 짧은 주소를 사람이 못 여는 문제입니다.

Cloudflare Pages → dmnsolution → **Custom domains** 에서 `dmns.co.kr` 추가.

추가한 뒤 apex 를 정본 주소로 삼고 싶다면 **순서를 지켜야 합니다**:

1. `https://dmns.co.kr/` 이 200 으로 열리는지 확인
2. 그다음 `lib/site.ts` 의 `SITE_ORIGIN` 을 apex 로 변경
3. www → apex 301 리다이렉트로 한쪽에 모음

확인 없이 값만 되돌리면 사이트맵 21개 URL 과 모든 canonical 이 다시 열리지 않는 주소를 가리켜, 색인이 통째로 끊깁니다. 실제로 그 상태였습니다.

### 3-4. 노출된 Web3Forms 키 정리

Cloudflare 환경변수에 `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` 가 남아 있습니다. `NEXT_PUBLIC_` 접두사 때문에 이 키가 브라우저 번들에 그대로 노출돼 있었습니다. 서버 전용 `WEB3FORMS_ACCESS_KEY` 시크릿으로 이미 옮겼으니,

- 옛 변수를 삭제하고
- Web3Forms 에서 키를 **재발급**해 새 시크릿에 넣으세요.

키를 아는 누구나 그 주소로 메일을 보낼 수 있어 스팸 표적이 됩니다.

### 3-5. 채팅 상담 (선택)

`lib/site.ts` 의 `SALESIQ.widgetCode` 가 비어 있습니다. 이전 값은 lunarflux.ai 계정 위젯이라 그대로 두면 **이 사이트의 상담이 남의 계정 상담원에게 접수됩니다.** 그래서 지웠습니다. DMN솔루션 명의로 Zoho SalesIQ 를 개설한 뒤 코드를 넣으면 됩니다.

비어 있는 동안에는 `components/ChatBot.tsx`(규칙 기반)가 상담 창구 역할을 합니다. SalesIQ 를 붙이면 둘이 겹치니 그때 ChatBot 을 내리세요 — `app/layout.tsx` 에 주석으로 적어 두었습니다.

---

## 4. 손댈 때 주의할 것

이번 작업에서 실제로 부딪힌 함정들입니다.

**로고는 흰색 워드마크입니다.** 밝은 배경에 두면 초록 사각형만 남고 글자가 사라집니다. 헤더·푸터를 밝게 바꾸려면 로고의 어두운 버전을 먼저 만들어야 합니다.

**알파가 붙은 색 유틸리티는 다크 구역에서 조심하세요.** Tailwind 는 `bg-canvas/90` 같은 클래스에 대해 `color-mix` 버전과 **정적 폴백**을 함께 내보내는데, 폴백에는 토큰의 기본값(밝은 색)이 구워집니다. 어두운 구역에서 쓰면 구형 브라우저에서 배경이 밝게 떨어집니다. 헤더는 그래서 리터럴 `bg-[#0a1020]/90` 을 씁니다.

**`.dark-band` 는 `@layer base` 안에 있어야 합니다.** 레이어 밖에 두면 Tailwind 의 `@layer utilities` 를 이겨서, 유틸리티로 배경을 덮어쓸 수 없습니다.

**홈에 서비스 이름을 복사해 두지 마세요.** 보안 4축은 `lib/securityAxes.ts` 가 `servicesData` 의 `cat` 으로 묶습니다. 서비스를 추가하면 홈이 자동으로 따라옵니다.

**문의 폼은 `npm run dev` 로 확인되지 않습니다.** Next 개발 서버는 `/api/contact` 를 서빙하지 않습니다. `npm run build && npx wrangler pages dev out` 을 쓰세요.

**`CONTENT_LAST_MODIFIED` 를 문구 수정과 함께 올리세요.** 사이트맵 `lastmod` 의 기본값입니다. 리팩터링처럼 방문자가 보는 내용이 그대로인 배포에서는 건드리지 않습니다.

---

## 5. 되돌리기

이관 직전 상태가 브랜치에 남아 있습니다.

```bash
git checkout backup/pre-lunarflux-migration   # 커밋 3bbcf49
```

여기에는 이전 DMN 사이트의 `Pricing.tsx`(628줄, 요금제 4종 + 모달 신청폼)와 `Hero.tsx`(366줄)가 그대로 있습니다. 이관하며 lunarflux 판으로 교체했으므로, 그 디자인을 되살리고 싶다면 이 브랜치에서 가져오면 됩니다.
