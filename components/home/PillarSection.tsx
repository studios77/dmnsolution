import Link from 'next/link'
import ServiceIcon from '@/components/ServiceIcon'
import { PILLARS, featuredOfPillar, servicesOfPillar, type Pillar } from '@/lib/homePillars'

/** Tailwind 가 정적으로 수집하도록 완성된 클래스명으로 보관합니다.
    `hover:${변수}` 처럼 조립하면 빌드 시 클래스가 생성되지 않습니다. */
const TONE = {
  emerald: {
    text: 'text-accent',
    bar: 'bg-accent',
    soft: 'bg-accent/8',
    hoverRing: 'hover:border-accent/40',
  },
  cyan: {
    text: 'text-accent-2',
    bar: 'bg-accent-2',
    soft: 'bg-accent-2/8',
    hoverRing: 'hover:border-accent-2/40',
  },
  indigo: {
    text: 'text-indigo-600',
    bar: 'bg-indigo-500',
    soft: 'bg-indigo-500/8',
    hoverRing: 'hover:border-indigo-500/40',
  },
} as const

function PillarBlock({ p }: { p: Pillar }) {
  const tone = TONE[p.tone]
  const all = servicesOfPillar(p)
  const featured = featuredOfPillar(p)
  const rest = all.length - featured.length

  return (
    <section id={p.id} className="scroll-mt-24 border-b border-line py-16 last:border-b-0 lg:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          {/* 축 소개 */}
          <div>
            <div className="flex items-center gap-3">
              <span className={`h-px w-8 ${tone.bar}`} />
              <span className={`font-mono text-label font-bold tracking-[0.14em] ${tone.text}`}>
                {p.index}
              </span>
            </div>

            <h3 className="mt-5 text-[1.65rem] font-extrabold leading-[1.35] tracking-[-0.025em] text-fg sm:text-[1.9rem]">
              {p.label}
            </h3>
            <p className={`mt-2 text-lead font-semibold ${tone.text}`}>{p.tagline}</p>
            <p className="mt-5 text-body text-fg-muted">{p.desc}</p>

            {/* dl 안에서는 dt 가 dd 보다 먼저 와야 하는데 화면에서는 값이
                위, 라벨이 아래입니다. flex-col-reverse 로 순서만 뒤집어
                마크업과 시각 순서를 따로 맞춥니다. 라벨을 sr-only dt 로
                한 번 더 넣으면 보조기술이 같은 말을 두 번 읽습니다. */}
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {p.metrics.map(m => (
                <div
                  key={m.label}
                  className={`flex flex-col-reverse rounded-xl border border-line ${tone.soft} px-3 py-3.5`}
                >
                  <dt className="mt-1 text-label leading-snug text-fg-subtle">{m.label}</dt>
                  <dd className="font-mono text-[1.05rem] font-bold leading-tight tracking-[-0.02em] text-fg">
                    {m.value}
                    {m.unit && <span className="ml-0.5 text-label font-semibold text-fg-muted">{m.unit}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 대표 서비스 */}
          <div>
            <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className={`group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 ${tone.hoverRing} hover:shadow-[0_12px_32px_rgba(15,23,42,0.07)]`}
                  >
                    <span className={`mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-line ${tone.soft} ${tone.text}`}>
                      <ServiceIcon slug={s.slug} className="size-[19px]" />
                    </span>
                    <span className="text-body font-bold leading-snug tracking-[-0.01em] text-fg">
                      {s.name}
                    </span>
                    <span className="mt-2 text-meta text-fg-muted">{s.summary}</span>
                    <span className={`mt-4 font-mono text-label font-semibold tracking-[0.06em] ${tone.text} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}>
                      자세히 →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {rest > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 rounded-xl border border-dashed border-line-strong px-4 py-3.5">
                <span className="font-mono text-label font-semibold tracking-[0.06em] text-fg-subtle">
                  + {rest}종 더
                </span>
                {all
                  .filter(s => !p.featured.includes(s.slug))
                  .map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className="text-meta text-fg-muted underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
                    >
                      {s.name}
                    </Link>
                  ))
                  /* 링크 사이 구분점. 마지막 항목 뒤에는 찍지 않습니다. */
                  .flatMap((node, i, arr) =>
                    i < arr.length - 1
                      ? [node, <span key={`sep-${i}`} className="text-fg-subtle">·</span>]
                      : [node],
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PillarSection() {
  return (
    <div id="pillars" className="scroll-mt-20">
      <div className="container-page pt-20 lg:pt-24">
        <p className="font-mono text-label font-bold tracking-[0.14em] text-fg-subtle">
          SERVICES
        </p>
        <h2 className="mt-4 max-w-[30rem] text-[1.9rem] font-extrabold leading-[1.35] tracking-[-0.03em] text-fg sm:text-[2.25rem]">
          세 개의 축, 각각 독립된 계약
        </h2>
        <p className="mt-5 max-w-[38rem] text-lead text-fg-muted">
          한 축만 도입하셔도 되고, 세 축을 함께 쓰셔도 됩니다. 함께 쓰더라도 견적과
          계약은 축별로 나눕니다 — 쓰지 않는 영역의 비용이 섞이지 않게 하기 위해서입니다.
        </p>
      </div>

      {PILLARS.map(p => (
        <PillarBlock key={p.id} p={p} />
      ))}
    </div>
  )
}
