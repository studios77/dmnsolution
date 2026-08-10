import Link from 'next/link'
import { findServiceBySlug } from '@/lib/servicesData'

/**
 * 자체 개발 방화벽 소개 띠.
 *
 * 카드 옆에 콘솔 화면을 붙이는 대신 사양표로 보여 줍니다. 이 제품을 검토하는
 * 쪽은 대개 이미 다른 방화벽을 쓰고 있어서, 분위기보다 "무엇이 다른가" 가
 * 먼저 필요합니다. 수치는 서비스 상세 페이지와 같은 값을 씁니다.
 */
const SPECS = [
  { k: '설치 방식', v: '에이전트리스', note: '보호 대상 서버·VM에 에이전트 미설치' },
  { k: '삽입 위치', v: 'L2 투명 인라인', note: 'IP 변경 및 네트워크 재설계 불필요' },
  { k: 'IDS 시그니처', v: '51,977', note: '침입탐지 룰셋' },
  { k: '자체 WAF 규칙', v: '105개', note: '21개 카테고리 · POST 본문 검사' },
  { k: '봇 식별', v: 'JA4+ 4지문', note: 'TLS·HTTP·TCP·핸드셰이크' },
  { k: 'AI 분석 위치', v: '온프레미스', note: '분석 데이터 외부 반출 없음' },
]

export default function GuardBand() {
  const guard = findServiceBySlug('dmn-guard')
  if (!guard) return null

  return (
    <section className="border-y border-line bg-elev py-20 lg:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/8 px-3 py-1.5 font-mono text-label font-bold tracking-[0.1em] text-accent">
              자사 개발 제품
            </p>
            <h2 className="mt-6 text-[1.9rem] font-extrabold leading-[1.32] tracking-[-0.03em] text-fg sm:text-[2.2rem]">
              DMN Guard
            </h2>
            <p className="mt-2 font-mono text-meta font-semibold tracking-[0.06em] text-fg-subtle">
              NGFW · WAF · 로컬 AI 융합 어플라이언스
            </p>
            <p className="mt-6 text-body text-fg-muted">{guard.desc}</p>

            <Link
              href="/services/dmn-guard/"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-body font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5"
            >
              제품 상세 보기
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface">
            <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
              <span className="font-mono text-label font-bold tracking-[0.12em] text-fg-subtle">
                주요 사양
              </span>
              <span className="font-mono text-label text-fg-subtle">V1.2</span>
            </div>
            <dl className="list-none">
              {SPECS.map((s, i) => (
                <div
                  key={s.k}
                  className={`grid grid-cols-[8.5rem_1fr] items-baseline gap-x-4 gap-y-1 px-5 py-4 sm:grid-cols-[10rem_9rem_1fr] ${
                    i > 0 ? 'border-t border-line' : ''
                  }`}
                >
                  <dt className="font-mono text-meta tracking-[0.03em] text-fg-subtle">{s.k}</dt>
                  <dd className="text-body font-bold tracking-[-0.01em] text-accent">{s.v}</dd>
                  <dd className="col-span-2 text-meta text-fg-muted sm:col-span-1">{s.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
