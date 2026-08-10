import Link from 'next/link'
import { PILLARS, servicesOfPillar } from '@/lib/homePillars'

const TONE_DOT = {
  emerald: 'bg-accent',
  cyan: 'bg-accent-2',
  indigo: 'bg-indigo-500',
} as const

/**
 * 홈 히어로.
 *
 * 큰 3D 비주얼 대신 "무엇을 몇 개 파는지" 를 그대로 보여 주는 색인 패널을
 * 오른쪽에 둡니다. DMN솔루션은 묶음 상품이 아니라 세 영역을 따로 계약하는
 * 구조라, 첫 화면이 답해야 하는 질문이 "어떤 회사인가" 보다
 * "내가 필요한 게 여기 있나" 이기 때문입니다.
 */
export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-elev">
      {/* 왼쪽 위에서 옅게 번지는 배경. 밝은 배경이라 알파를 낮게 둡니다. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_820px_420px_at_12%_0%,rgba(4,120,87,0.06),transparent_62%),radial-gradient(ellipse_680px_380px_at_92%_18%,rgba(14,116,144,0.05),transparent_58%)]"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 font-mono text-label font-semibold tracking-[0.1em] text-fg-muted">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            IDC · AI 보안 · 스트리밍
          </p>

          <h1 className="text-[2.1rem] font-extrabold leading-[1.3] tracking-[-0.03em] text-fg sm:text-[2.6rem] lg:text-[3rem]">
            필요한 분야만,
            <br />
            그 분야를 맡은 팀에게
          </h1>

          <p className="mt-7 max-w-[36rem] text-lead text-fg-muted">
            DMN솔루션은 서버 인프라와 AI 보안, 라이브 스트리밍을 각각 독립된 서비스로
            제공합니다. 세 영역은 따로 견적하고 따로 계약합니다. 한 곳을 쓰기 위해
            나머지를 함께 살 필요가 없습니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#pillars"
              className="rounded-full bg-accent px-8 py-3.5 text-center text-body font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5"
            >
              서비스 살펴보기
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-line-strong bg-surface px-8 py-3.5 text-center text-body font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              견적 문의
            </Link>
          </div>
        </div>

        {/* 서비스 색인 패널 */}
        <div className="rounded-2xl border border-line-strong bg-surface p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between px-4 pb-3 pt-3">
            <span className="font-mono text-label font-semibold tracking-[0.12em] text-fg-subtle">
              서비스 구성
            </span>
            <span className="font-mono text-label text-fg-subtle">
              총 {PILLARS.reduce((n, p) => n + servicesOfPillar(p).length, 0)}종
            </span>
          </div>

          <ul className="list-none space-y-1.5">
            {PILLARS.map(p => {
              const count = servicesOfPillar(p).length
              return (
                <li key={p.id}>
                  <Link
                    href={`#${p.id}`}
                    className="group flex items-start gap-4 rounded-xl border border-line bg-elev px-4 py-4 transition-colors duration-200 hover:border-accent/50"
                  >
                    <span className="mt-1 font-mono text-label font-bold tracking-[0.08em] text-fg-subtle">
                      {p.index}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className={`inline-block size-1.5 shrink-0 rounded-full ${TONE_DOT[p.tone]}`} />
                        <span className="text-lead font-bold tracking-[-0.01em] text-fg">
                          {p.label}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-meta text-fg-muted">{p.tagline}</span>
                    </span>
                    <span className="shrink-0 self-center font-mono text-label text-fg-subtle transition-colors duration-200 group-hover:text-accent">
                      {count}종
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <p className="px-4 pb-3 pt-4 text-meta text-fg-subtle">
            세 축은 별도 상품입니다. 한 축만 계약하셔도 됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}
