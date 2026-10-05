import Link from 'next/link'
import { findServiceBySlug } from '@/lib/servicesData'

/**
 * AIDC GPU 호스팅 소개 띠. 히어로 바로 아래, 예전 DMN Guard 띠 자리입니다.
 *
 * 그림은 실제 랙 사진이 아니라 사이트 색으로 그린 일러스트(`/images/aidc-gpu-rack.svg`)
 * 입니다. 수치는 서비스 상세 페이지(`servicesData` 의 aidc)와 같은 값을 씁니다.
 */
const POINTS = [
  { k: 'GPU', v: 'RTX 5090 32GB' },
  { k: '랙당 전력', v: '최대 40kW' },
  { k: '네트워크', v: '1G 기본 · 10G/40G' },
  { k: '운영', v: '24/7 관제 · IPMI' },
]

export default function AidcBand() {
  const aidc = findServiceBySlug('aidc')
  if (!aidc) return null
  const plan = aidc.coloPricing?.[0]

  return (
    <section className="border-y border-line bg-elev py-20 lg:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/8 px-3 py-1.5 font-mono text-label font-bold tracking-[0.1em] text-accent">
              AI 전용 데이터센터
            </p>
            <h2 className="mt-6 text-[1.9rem] font-extrabold leading-[1.32] tracking-[-0.03em] text-fg sm:text-[2.2rem]">
              {aidc.name}
              <span className="mt-2 block text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-fg-muted sm:text-lead">
                {aidc.seoH2}
              </span>
            </h2>
            <p className="mt-6 text-body text-fg-muted">{aidc.desc}</p>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {POINTS.map(p => (
                <div key={p.k} className="flex flex-col-reverse bg-surface px-4 py-3.5">
                  <dt className="mt-0.5 font-mono text-label text-fg-subtle">{p.k}</dt>
                  <dd className="text-body font-bold tracking-[-0.01em] text-fg">{p.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/services/aidc/"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-body font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5"
              >
                GPU 호스팅 상세 보기
              </Link>
              {plan && (
                <p className="text-meta text-fg-muted">
                  {plan.name} <strong className="text-body font-bold text-accent">월 {plan.price}~</strong>
                  <span className="ml-1 text-fg-subtle">(부가세 별도)</span>
                </p>
              )}
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-line-strong shadow-[0_24px_60px_rgba(10,16,32,0.18)]">
            {/* 정적 내보내기라 next/image 최적화를 쓸 수 없습니다. SVG 라 원본 그대로 둡니다. */}
            <img
              src="/images/aidc-gpu-rack.svg"
              alt="AIDC GPU 랙 일러스트 — RTX 5090 서버 5대가 장착된 랙과 랙 전력·GPU 사용률·업링크 지표"
              width={800}
              height={560}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
