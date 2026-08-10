/**
 * 도입 절차.
 *
 * "문의하면 그다음 무슨 일이 일어나는가" 를 먼저 밝혀 둡니다. B2B 인프라는
 * 계약까지 걸리는 시간이 길어, 문의 버튼을 누르기 전에 이 과정을 가늠할 수
 * 있어야 문의 문턱이 낮아집니다.
 */
const STEPS = [
  {
    n: '01',
    title: '문의 · 요구사항 정리',
    desc: '현재 구성과 겪고 있는 문제를 듣습니다. 장비 사양서나 구성도가 없어도 됩니다.',
  },
  {
    n: '02',
    title: '진단 · 설계',
    desc: '필요한 축만 골라 구성을 제안하고, 축별로 나눈 견적을 드립니다.',
  },
  {
    n: '03',
    title: '구축 · 이관',
    desc: '서비스 중단을 최소화하는 시점을 잡아 이관합니다. 원격이 기본이고 필요하면 방문합니다.',
  },
  {
    n: '04',
    title: '운영 · 관제',
    desc: '인계 후에도 계약한 범위 안에서 계속 봅니다. 장애는 24시간 대응합니다.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-page">
        <p className="font-mono text-label font-bold tracking-[0.14em] text-fg-subtle">PROCESS</p>
        <h2 className="mt-4 text-[1.9rem] font-extrabold leading-[1.35] tracking-[-0.03em] text-fg sm:text-[2.25rem]">
          문의 이후의 순서
        </h2>

        <ol className="mt-12 grid list-none grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(s => (
            <li key={s.n} className="bg-surface p-6">
              <span className="font-mono text-label font-bold tracking-[0.12em] text-accent">
                {s.n}
              </span>
              <h3 className="mt-4 text-body font-bold leading-snug tracking-[-0.01em] text-fg">
                {s.title}
              </h3>
              <p className="mt-2.5 text-meta text-fg-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
