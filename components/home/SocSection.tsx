import Link from 'next/link'

/**
 * 보안 관제 운영.
 *
 * "24시간 관제" 라는 말만으로는 다른 업체와 구분되지 않습니다. 실제로 무엇이
 * 어떤 순서로 도는지, 사람이 붙지 않는 시간에 무엇이 대신 판단하는지를 적습니다.
 * 수치와 구성요소는 ai-security · ai-agent 서비스 본문과 같은 값입니다.
 */
const PIPELINE = [
  {
    n: '01',
    title: '수집',
    desc: 'Wazuh SIEM으로 서버·네트워크·애플리케이션·클라우드 로그를 단일 지점에 집약합니다.',
  },
  {
    n: '02',
    title: '탐지',
    desc: '시그니처 기반과 AI 행위 기반을 병행합니다. 알려진 공격과 미지의 패턴을 서로 다른 방식으로 포착합니다.',
  },
  {
    n: '03',
    title: '분석',
    desc: 'LLM이 이벤트를 맥락과 함께 해석해 심각도를 판정합니다. 오탐을 배제하고 유효한 사안만 남깁니다.',
  },
  {
    n: '04',
    title: '대응',
    desc: 'IP 차단과 계정 격리, 통보를 플레이북에 따라 자동 실행합니다. 50개 이상의 시나리오가 사전 정의되어 있습니다.',
  },
  {
    n: '05',
    title: '보고',
    desc: '일간·주간·월간 리포트를 자동 생성합니다. 감사 대응에 필요한 증적이 그대로 축적됩니다.',
  },
]

const FACTS = [
  { k: '탐지·대응 SLA', v: '심각 위협 5분 이내' },
  { k: 'AI 엔진', v: 'LLM + 자체 파인튜닝 모델' },
  { k: 'SIEM', v: 'Wazuh 기반 통합 수집' },
  { k: 'SOAR 플레이북', v: '50+ 시나리오' },
  { k: '로그 보관', v: '90일 이상 (연장 가능)' },
  { k: '에스컬레이션', v: '임계 위협 발생 시 즉시 통보' },
]

export default function SocSection() {
  return (
    <section className="dark-band relative overflow-hidden border-y border-line py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_760px_420px_at_78%_10%,rgba(52,211,153,0.13),transparent_62%)]"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-label font-bold tracking-[0.14em] text-accent">
              SECURITY OPERATIONS
            </p>
            <h2 className="mt-4 max-w-[24rem] text-[1.95rem] font-extrabold leading-[1.3] tracking-[-0.032em] text-fg sm:text-[2.4rem]">
              담당자가 없는 시간에도, 기준은 동일하게
            </h2>
          </div>
          <p className="max-w-[30rem] text-body text-fg-muted">
            심야에 발생한 경보를 누가 판단할 것인가. 관제를 위탁하시는 이유는 대개 이
            한 가지로 수렴합니다. 수집부터 보고까지 다섯 단계를 자동으로 수행하고,
            담당자는 선별된 사안만 확인합니다.
          </p>
        </div>

        {/* 파이프라인 */}
        <ol className="mt-14 grid list-none grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-strong bg-line sm:grid-cols-2 lg:grid-cols-5">
          {PIPELINE.map(s => (
            <li key={s.n} className="relative bg-elev px-6 py-7">
              <span className="font-mono text-label font-bold tracking-[0.12em] text-accent">
                {s.n}
              </span>
              <h3 className="mt-3.5 text-lead font-bold tracking-[-0.01em] text-fg">{s.title}</h3>
              <p className="mt-2.5 text-meta text-fg-muted">{s.desc}</p>
            </li>
          ))}
        </ol>

        {/* 운영 기준 */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 sm:gap-x-0 lg:grid-cols-3">
            {FACTS.map(f => (
              <div key={f.k} className="bg-elev px-5 py-4">
                <dt className="font-mono text-label tracking-[0.06em] text-fg-subtle">{f.k}</dt>
                <dd className="mt-1.5 text-body font-semibold tracking-[-0.01em] text-fg">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 lg:w-52">
            <Link
              href="/services/ai-security/"
              className="on-accent rounded-full bg-accent px-7 py-3.5 text-center text-body font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              관제 서비스 살펴보기
            </Link>
            <Link
              href="/services/ai-agent/"
              className="rounded-full border border-line-strong px-7 py-3.5 text-center text-body font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              AI 관제 에이전트
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
