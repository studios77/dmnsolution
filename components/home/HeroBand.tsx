import Link from 'next/link'
import { findServiceBySlug } from '@/lib/servicesData'

/**
 * 홈 히어로 — 어두운 띠.
 *
 * 첫 화면은 AI 코로케이션(aidc)을 앞세웁니다. 2026-10-05 ~ 10-13 에는 같은 자리에
 * RTX 5090 GPU 전용 호스팅(월 임대)을, 그 전에는 차세대 방화벽·보안 관제를
 * 두었습니다(git 기록 참고).
 *
 * 오른쪽 카드의 사양은 `servicesData` 의 aidc 값을 그대로 씁니다. 상세 페이지와
 * 숫자가 어긋나지 않도록 여기에 따로 적지 않습니다. 요금은 전력 용량·장비 수량에
 * 따라 견적이라 가격 대신 문의로 보냅니다.
 */
export default function HeroBand() {
  const aidc = findServiceBySlug('aidc')
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
            AIDC · AI 코로케이션
          </p>

          {/* h1 에 사람들이 검색하는 말("AI 코로케이션")을 담습니다. break-keep 으로
              한국어 낱말이 중간에서 끊기지 않게 합니다. */}
          <h1 className="mt-7 break-keep text-[2rem] font-extrabold leading-[1.26] tracking-[-0.035em] text-fg sm:text-[2.6rem] lg:text-[3rem]">
            <span className="text-accent">AI 코로케이션</span>으로
            <br />
            GPU 서버를 고전력 랙에 입주시키세요
          </h1>

          <p className="mt-7 max-w-[35rem] text-lead text-fg-muted">
            보유한 GPU 서버를 랙당 최대 40kW 초고전력 AI 전용 데이터센터에 입주시킬 수
            있습니다. GPU 전용 공조로 발열을 제어하고, 이중화 전력과 10G/40G 네트워크,
            24시간 관제까지 함께 운영합니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/services/aidc/"
              className="on-accent rounded-full bg-accent px-8 py-3.5 text-center text-body font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              AI 코로케이션 살펴보기
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-line-strong px-8 py-3.5 text-center text-body font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              코로케이션 상담
            </Link>
          </div>
        </div>

        {/* 대표 상품 사양 카드 */}
        <div className="rounded-2xl border border-line-strong bg-elev shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
            <span className="font-mono text-label font-bold tracking-[0.12em] text-fg-subtle">
              AI COLOCATION
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-label font-bold tracking-[0.1em] text-accent">
              <span className="inline-block size-1.5 animate-[pulseDot_1.6s_ease-in-out_infinite] rounded-full bg-accent" />
              입주 상담 중
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

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-5 py-4">
            <p className="text-label text-fg-subtle">전력 용량 · 장비 수량별 맞춤 견적</p>
            <Link
              href="/contact/"
              className="font-mono text-body font-bold tracking-[-0.01em] text-accent transition-colors hover:text-accent-2"
            >
              견적 문의 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
