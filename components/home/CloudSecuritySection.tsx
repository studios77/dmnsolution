import Link from 'next/link'
import ServiceIcon from '@/components/ServiceIcon'

/**
 * 클라우드 보안.
 *
 * 두 서비스가 각각 다른 시점을 봅니다 — 형상 진단은 "지금 어떻게 설정돼
 * 있는가", 워크로드 보호는 "돌아가는 동안 무슨 일이 벌어지는가". 나란히 두어
 * 둘의 차이가 드러나게 합니다. 점검 항목은 서비스 본문의 specs 와 같습니다.
 */
const TRACKS = [
  {
    slug: 'cloud-posture',
    kicker: 'CSPM',
    title: '클라우드 보안 형상 진단',
    lead: '노출된 지점을 식별합니다',
    desc: 'AWS·Azure·GCP 계정 전반을 점검해 외부에서 접근 가능한 자원과 과도하게 부여된 권한을 식별합니다. 전부 조치하라는 목록이 아니라, 위험도와 소요를 함께 고려한 우선순위를 제시합니다.',
    checks: [
      '공개 버킷 · 열린 보안그룹 · 미암호화 볼륨',
      '미사용 권한 및 과도하게 부여된 역할',
      '감사 로깅 누락 구간',
      '내부 규정 · 인증 기준 매핑',
    ],
    out: '위험도별 항목표 · 조치 절차 · 경영진 요약본',
  },
  {
    slug: 'cloud-workload',
    kicker: 'CWPP',
    title: '클라우드 워크로드 보호',
    lead: '가동 중인 워크로드를 감시합니다',
    desc: '배포 전에는 이미지 취약점을 선별하고, 운영 중에는 예기치 않은 프로세스 실행과 외부 통신을 탐지합니다. 점검을 배포 파이프라인에 통합해 문제가 운영에 반영되기 전에 차단합니다.',
    checks: [
      '컨테이너 이미지 취약점 · 위험 설정',
      '특권 컨테이너 · 권한 과다 서비스 계정',
      '네트워크 정책 공백',
      '런타임 프로세스 · 아웃바운드 통신 이상',
    ],
    out: '취약점 목록 · 조치 가이드 · 재점검 비교',
  },
]

export default function CloudSecuritySection() {
  return (
    <section className="bg-elev py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-label font-bold tracking-[0.14em] text-accent-2">
              CLOUD SECURITY
            </p>
            <h2 className="mt-4 max-w-[26rem] text-[1.95rem] font-extrabold leading-[1.3] tracking-[-0.032em] text-fg sm:text-[2.4rem]">
              클라우드 보안 진단 · CSPM / CWPP
              <span className="mt-2.5 block text-[1.1rem] font-semibold leading-snug tracking-[-0.01em] text-fg-muted sm:text-lead">
                설정에서 비롯되는 위험과, 운영 중 발생하는 위험
              </span>
            </h2>
          </div>
          <p className="max-w-[30rem] text-body text-fg-muted">
            클라우드 사고는 침입보다 설정에서 비롯되는 경우가 많습니다. 잘못 부여된
            권한을 정비하는 일과 이미 가동 중인 워크로드를 감시하는 일은 성격이 다른
            작업이므로, 구분해 다룹니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TRACKS.map(t => (
            <article
              key={t.slug}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-accent-2/8 text-accent-2">
                  <ServiceIcon slug={t.slug} className="size-5" />
                </span>
                <span className="rounded-full border border-accent-2/35 bg-accent-2/8 px-2.5 py-1 font-mono text-label font-bold tracking-[0.1em] text-accent-2">
                  {t.kicker}
                </span>
              </div>

              <h3 className="mt-5 text-[1.3rem] font-extrabold tracking-[-0.02em] text-fg">
                {t.title}
              </h3>
              <p className="mt-1.5 text-lead font-semibold text-accent-2">{t.lead}</p>
              <p className="mt-4 text-body text-fg-muted">{t.desc}</p>

              <ul className="mt-6 list-none space-y-2.5 border-t border-line pt-6">
                {t.checks.map(c => (
                  <li key={c} className="flex items-start gap-2.5 text-meta text-fg-muted">
                    <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-accent-2/70" />
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-lg border border-line bg-elev px-4 py-3 text-meta text-fg-subtle">
                <span className="font-mono text-label tracking-[0.06em] text-fg-subtle">산출물</span>
                <span className="mt-1 block text-fg-muted">{t.out}</span>
              </p>

              <Link
                href={`/services/${t.slug}/`}
                className="mt-6 inline-block font-mono text-meta font-semibold tracking-[0.04em] text-accent-2 underline-offset-4 transition-colors duration-200 hover:underline"
              >
                자세히 보기 →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
