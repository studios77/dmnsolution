import Link from 'next/link'
import { NON_SECURITY, servicesByPrefix } from '@/lib/securityAxes'

/**
 * 보안 외 사업 축 — IDC 인프라와 스트리밍.
 *
 * 보안을 앞세우더라도 이 둘은 실제 매출이 나오는 별도 상품이라 홈에서 빼지
 * 않습니다. 다만 세 축을 대등하게 늘어놓으면 "무슨 회사인지" 가 흐려지므로,
 * 보안 뒤에 한 띠로 묶어 둡니다. 계약은 축별로 나뉜다는 점을 함께 밝힙니다.
 */
export default function InfraBand() {
  return (
    <section className="dark-band border-y border-line py-20 lg:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-label font-bold tracking-[0.14em] text-accent-2">
              INFRASTRUCTURE · STREAMING
            </p>
            <h2 className="mt-4 text-[1.85rem] font-extrabold leading-[1.32] tracking-[-0.03em] text-fg sm:text-[2.15rem]">
              인프라와 송출까지, 같은 팀이 운영합니다
            </h2>
          </div>
          <p className="max-w-[30rem] text-body text-fg-muted">
            서버 운영을 위탁하신 경우 보안까지 동일한 팀이 이어받습니다. 각 영역은
            별도 상품으로 구성되어 있어, 필요한 부분만 선택해 계약하실 수 있습니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {NON_SECURITY.map(line => {
            const items = servicesByPrefix(line.catPrefix)
            return (
              <div key={line.id} className="rounded-2xl border border-line-strong bg-elev p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-fg">
                    {line.label}
                  </h3>
                  <span className="shrink-0 font-mono text-label text-fg-subtle">
                    {items.length}종
                  </span>
                </div>

                <p className="mt-3.5 text-body text-fg-muted">{line.desc}</p>

                <ul className="mt-5 flex list-none flex-wrap gap-2">
                  {line.metrics.map(m => (
                    <li
                      key={m}
                      className="rounded-full border border-line-strong px-3 py-1 font-mono text-label text-fg-muted"
                    >
                      {m}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex list-none flex-wrap gap-x-2 gap-y-2 border-t border-line pt-5">
                  {items.map(s => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="inline-block rounded-lg border border-line px-3 py-1.5 text-meta text-fg-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
