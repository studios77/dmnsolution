import Link from 'next/link'
import { findServiceBySlug } from '@/lib/servicesData'

/**
 * 홈 히어로 — 어두운 띠.
 *
 * 2026-10 부터 첫 화면은 AIDC GPU 전용 호스팅을 앞세웁니다. 이전에는 차세대
 * 방화벽·보안 관제를 앞세우고 오른쪽에 관제 화면 재현 패널을 두었습니다(git 기록 참고).
 *
 * 오른쪽 카드의 사양·가격은 `servicesData` 의 aidc 값을 그대로 씁니다. 상세 페이지와
 * 숫자가 어긋나지 않도록 여기에 따로 적지 않습니다.
 */
export default function HeroBand() {
  const aidc = findServiceBySlug('aidc')
  const plan = aidc?.coloPricing?.[0]
  const specs = aidc?.comparison?.items ?? []

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
            AIDC GPU 전용 호스팅
          </p>

          {/* h1 에 사람들이 검색하는 말("GPU 호스팅")을 담습니다. break-keep 으로
              한국어 낱말이 중간에서 끊기지 않게 합니다. */}
          <h1 className="mt-7 break-keep text-[2rem] font-extrabold leading-[1.26] tracking-[-0.035em] text-fg sm:text-[2.6rem] lg:text-[3rem]">
            <span className="text-accent">GPU 전용 호스팅</span>으로
            <br />
            AI 학습·추론을 바로 시작합니다
          </h1>

          <p className="mt-7 max-w-[35rem] text-lead text-fg-muted">
            RTX 5090 베어메탈 단독 서버를 월 임대로 즉시 사용할 수 있습니다. 랙당 최대
            40kW 초고전력과 GPU 전용 공조로 발열을 제어하고, 고객 장비 코로케이션과
            10G/40G 네트워크 확장까지 AI 워크로드에 맞춰 구성합니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/services/aidc/"
              className="on-accent rounded-full bg-accent px-8 py-3.5 text-center text-body font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              AIDC GPU 호스팅 살펴보기
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-line-strong px-8 py-3.5 text-center text-body font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              GPU 호스팅 상담
            </Link>
          </div>
        </div>

        {/* 대표 상품 사양 카드 */}
        <div className="rounded-2xl border border-line-strong bg-elev shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
            <span className="font-mono text-label font-bold tracking-[0.12em] text-fg-subtle">
              {plan?.name ?? 'GPU 서버'}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-label font-bold tracking-[0.1em] text-accent">
              <span className="inline-block size-1.5 animate-[pulseDot_1.6s_ease-in-out_infinite] rounded-full bg-accent" />
              즉시 사용
            </span>
          </div>

          <dl className="divide-y divide-line">
            {specs.map(s => (
              <div key={s.label} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 px-5 py-3">
                <dt className="font-mono text-label font-bold tracking-[0.06em] text-fg-subtle">{s.label}</dt>
                <dd className="text-meta text-fg-muted">{s.ours}</dd>
              </div>
            ))}
          </dl>

          {plan && (
            <div className="flex flex-wrap items-end justify-between gap-2 border-t border-line px-5 py-4">
              <p className="text-label text-fg-subtle">{plan.size} · 월 임대{plan.term ? ` · ${plan.term}` : ''}</p>
              <p className="font-mono text-[1.35rem] font-bold leading-tight tracking-[-0.02em] text-accent">
                월 {plan.price}
                <span className="ml-1.5 font-sans text-label font-normal text-fg-subtle">부가세 별도</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
