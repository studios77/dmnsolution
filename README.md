# DMN솔루션 웹사이트

Next.js 기반 회사 소개·서비스 랜딩 사이트입니다. IDC·AIDC 인프라, AI 보안, 라이브 스트리밍 세 축의 서비스 18종을 다룹니다.

**[프로젝트 가이드 · 아키텍처 · 컨벤션](./CLAUDE.md)**

**[개발 내역 · 폴더 구조 · 기술 스택](./DEVELOPMENT.md)**

**[서비스 도메인별 기술 명세](./TECHNICAL_SPEC.md)**

**[Vercel / Cloudflare Pages 배포 설정](./DEPLOY.md)** — 빌드(`out/`), 임시 도메인(`*.vercel.app`, `*.pages.dev`)

## 스크립트

- `npm run dev` — 로컬 개발 서버
- `npm run build` — 프로덕션 빌드 (정적 내보내기, `out/`)
- `npm run start` — 빌드 결과 실행

## 문의 폼 로컬 확인

문의 폼은 Cloudflare Pages Function(`functions/api/contact.ts`)으로 전달됩니다.
`npm run dev` 는 Next 개발 서버라 `/api/contact` 를 서빙하지 않으므로, 폼까지 확인하려면:

```bash
npm run build && npx wrangler pages dev out
```

전달 채널 환경변수는 [`.env.example`](./.env.example) 참고. 로컬은 `.dev.vars`, 운영은 Cloudflare Secret 에 둡니다.
