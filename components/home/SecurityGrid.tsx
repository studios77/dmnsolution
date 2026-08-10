import Link from 'next/link'
import ServiceIcon from '@/components/ServiceIcon'
import { SECURITY_AXES, servicesOfAxis } from '@/lib/securityAxes'

/**
 * 보안 4축.
 *
 * 축마다 서비스 목록을 `servicesData.cat` 에서 그대로 끌어옵니다. 홈에 이름을
 * 복사해 두면 서비스가 늘어도 홈은 그대로라, 예전에 실제로 어긋난 적이 있습니다.
 */
export default function SecurityGrid() {
  const total = SECURITY_AXES.reduce((n, a) => n + servicesOfAxis(a).length, 0)

  return (
    <section id="security" className="scroll-mt-20 py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-label font-bold tracking-[0.14em] text-accent">
              SECURITY SERVICES
            </p>
            <h2 className="mt-4 max-w-[26rem] text-[1.95rem] font-extrabold leading-[1.3] tracking-[-0.032em] text-fg sm:text-[2.4rem]">
              네 개의 축으로 방어 체계를 구성합니다
            </h2>
          </div>
          <p className="max-w-[30rem] text-body text-fg-muted">
            경계에서 차단하고, 클라우드 설정을 정비하며, 생성형 AI가 새로 만들어 내는
            위험을 점검합니다. 그리고 이 전부를 24시간 관제합니다. 보안 서비스{' '}
            {total}종을 한 팀이 운영합니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SECURITY_AXES.map(axis => {
            const items = servicesOfAxis(axis)
            return (
              <article
                key={axis.cat}
                className="flex flex-col rounded-2xl border border-line bg-surface p-7 transition-shadow duration-200 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-label font-bold tracking-[0.12em] text-accent">
                    {axis.n}
                  </span>
                  <h3 className="text-[1.35rem] font-extrabold tracking-[-0.02em] text-fg">
                    {axis.title}
                  </h3>
                </div>

                <p className="mt-4 text-body text-fg-muted">{axis.desc}</p>

                <p className="mt-5 rounded-lg border border-accent/25 bg-accent/6 px-4 py-2.5 font-mono text-meta font-semibold tracking-[0.02em] text-accent">
                  {axis.proof}
                </p>

                <ul className="mt-6 list-none space-y-px overflow-hidden rounded-xl border border-line bg-line">
                  {items.map(s => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="group flex items-center gap-3 bg-surface px-4 py-3.5 transition-colors duration-200 hover:bg-accent/6"
                      >
                        <span className="shrink-0 text-fg-subtle transition-colors duration-200 group-hover:text-accent">
                          <ServiceIcon slug={s.slug} className="size-[18px]" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-body font-semibold leading-snug tracking-[-0.01em] text-fg">
                            {s.name}
                          </span>
                          <span className="mt-0.5 block truncate text-meta text-fg-subtle">
                            {s.summary}
                          </span>
                        </span>
                        <span className="shrink-0 font-mono text-label text-fg-subtle transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
