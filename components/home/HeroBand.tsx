import Link from 'next/link'

/**
 * 홈 히어로 — 어두운 띠.
 *
 * 보안 회사의 첫 화면이 답해야 하는 것은 "무엇을 막아 주는가" 입니다. 그래서
 * 세 사업 축을 나란히 늘어놓는 대신 보안을 앞세우고, 오른쪽에는 관제 화면을
 * 본뜬 패널을 둡니다. 실제 콘솔 캡처가 아니라 코드로 그린 재현입니다 —
 * 캡처는 고객사 IP·호스트명이 섞여 들어갈 위험이 있습니다.
 */
const SIGNALS = [
  { t: '02:14:07', label: '차단', detail: 'SQLi 시도 · JA4+ 지문 불일치', tone: 'danger' },
  { t: '02:13:52', label: '격리', detail: '자동화 봇 트래픽 · UA 위조 탐지', tone: 'warn' },
  { t: '02:11:30', label: '허용', detail: '정상 세션 복원 · 오탐 자동 해제', tone: 'ok' },
]

const TONE_CHIP = {
  danger: 'border-danger/40 bg-danger/10 text-danger',
  warn: 'border-warn/40 bg-warn/10 text-warn',
  ok: 'border-accent/40 bg-accent/10 text-accent',
} as const

export default function HeroBand() {
  return (
    <section className="dark-band relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_900px_500px_at_15%_0%,rgba(52,211,153,0.16),transparent_60%),radial-gradient(ellipse_700px_420px_at_88%_25%,rgba(34,211,238,0.12),transparent_58%)]"
      />
      {/* 격자. 어두운 띠 안이라 흰 선으로 둡니다. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:44px_44px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-28 lg:pt-40">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-label font-bold tracking-[0.1em] text-accent">
            <span className="inline-block size-1.5 animate-[pulseDot_1.8s_ease-in-out_infinite] rounded-full bg-accent" />
            자체 개발 NGFW · DMN Guard
          </p>

          <h1 className="mt-7 text-[2.2rem] font-extrabold leading-[1.24] tracking-[-0.035em] text-fg sm:text-[2.9rem] lg:text-[3.35rem]">
            방화벽을 직접 만들고,
            <br />
            <span className="text-accent">AI 관제</span>까지 맡습니다
          </h1>

          <p className="mt-7 max-w-[35rem] text-lead text-fg-muted">
            네트워크·클라우드·AI 데이터 보안을 한 팀이 봅니다. 탐지에서 그치지 않고
            차단까지 저희 장비가 직접 수행하며, 분석은 온프레미스에서 끝나 데이터가
            밖으로 나가지 않습니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/services/dmn-guard/"
              className="on-accent rounded-full bg-accent px-8 py-3.5 text-center text-body font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              DMN Guard 알아보기
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-line-strong px-8 py-3.5 text-center text-body font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              보안 진단 문의
            </Link>
          </div>
        </div>

        {/* 관제 보드 재현 */}
        <div className="rounded-2xl border border-line-strong bg-elev shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <span className="font-mono text-label font-bold tracking-[0.12em] text-fg-subtle">
              실시간 관제
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-label font-bold tracking-[0.1em] text-accent">
              <span className="inline-block size-1.5 animate-[pulseDot_1.6s_ease-in-out_infinite] rounded-full bg-accent" />
              LIVE
            </span>
          </div>

          <ul className="list-none divide-y divide-line">
            {SIGNALS.map(s => (
              <li key={s.t} className="flex items-start gap-3 px-5 py-3.5">
                <span className="mt-0.5 shrink-0 font-mono text-label text-fg-subtle">{s.t}</span>
                <span
                  className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-label font-bold ${
                    TONE_CHIP[s.tone as keyof typeof TONE_CHIP]
                  }`}
                >
                  {s.label}
                </span>
                <span className="min-w-0 flex-1 text-meta text-fg-muted">{s.detail}</span>
              </li>
            ))}
          </ul>

          <dl className="grid grid-cols-3 gap-px border-t border-line bg-line">
            {[
              { v: '51,977', l: 'IDS 시그니처' },
              { v: '105', l: '자체 WAF 규칙' },
              { v: '0', l: '외부 전송' },
            ].map(m => (
              <div key={m.l} className="flex flex-col-reverse bg-elev px-4 py-4">
                <dt className="mt-1 text-label leading-snug text-fg-subtle">{m.l}</dt>
                <dd className="font-mono text-[1.15rem] font-bold leading-tight tracking-[-0.02em] text-accent">
                  {m.v}
                </dd>
              </div>
            ))}
          </dl>

          <p className="border-t border-line px-5 py-3 text-label text-fg-subtle">
            표시된 항목은 동작 방식을 보여 주기 위한 예시입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
