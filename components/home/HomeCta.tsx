import Link from 'next/link'

/**
 * 마무리 CTA.
 *
 * `id="about"` 을 여기에 둡니다 — 헤더의 "소개" 앵커가 가리키던 자리이고,
 * 옮기면 기존 링크가 아무 데도 닿지 않습니다.
 */
export default function HomeCta() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-20 lg:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <h2 className="max-w-[26rem] text-[1.9rem] font-extrabold leading-[1.35] tracking-[-0.03em] text-fg sm:text-[2.25rem]">
              현재 노출된 지점부터 진단해 드립니다
            </h2>
            <p className="mt-5 max-w-[36rem] text-lead text-fg-muted">
              운영 중인 구성만 알려 주시면 됩니다. 장비 교체가 필요한 사안인지, 어느
              지점부터 조치해야 하는지 먼저 정리해 드립니다. 불필요한 영역을 묶어
              제안하지 않으며, 견적은 영역별로 구분해 산정 근거가 그대로 드러나도록
              제시합니다.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="font-mono text-label tracking-[0.08em] text-fg-subtle">전화</dt>
                <dd className="mt-1 text-body font-semibold text-fg">0505-299-7623</dd>
              </div>
              <div>
                <dt className="font-mono text-label tracking-[0.08em] text-fg-subtle">이메일</dt>
                <dd className="mt-1 text-body font-semibold text-fg">studios77@gmail.com</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-3 lg:w-56">
            <Link
              href="/contact/"
              className="rounded-full bg-accent px-8 py-4 text-center text-body font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5"
            >
              견적 문의
            </Link>
            <Link
              href="/sitemap-page/"
              className="rounded-full border border-line-strong bg-surface px-8 py-4 text-center text-body font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              전체 서비스 목록
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
