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
    lead: '지금 열려 있는 곳을 찾습니다',
    desc: 'AWS·Azure·GCP 계정을 훑어 밖에서 닿을 수 있는 자원과 지나치게 넓은 권한을 찾아냅니다. 전부 고치라는 목록 대신, 위험도와 작업량을 함께 본 순서를 드립니다.',
    checks: [
      '공개 버킷 · 열린 보안그룹 · 미암호화 볼륨',
      '쓰이지 않는 권한과 과도한 역할',
      '감사 로깅 누락 구간',
      '내부 규정 · 인증 기준 매핑',
    ],
    out: '위험도별 항목표 · 조치 절차 · 경영진 요약본',
  },
  {
    slug: 'cloud-workload',
    kicker: 'CWPP',
    title: '클라우드 워크로드 보호',
    lead: '돌아가는 동안을 지켜봅니다',
    desc: '배포 전에는 이미지 취약점을 걸러내고, 운영 중에는 예상 밖의 프로세스 실행이나 외부 통신을 탐지합니다. 점검을 배포 과정에 붙여 문제가 운영에 올라가기 전에 잡습니다.',
    checks: [
      '컨테이너 이미지 취약점 · 위험 설정',
      '특권 컨테이너 · 권한 과다 서비스 계정',
      '네트워크 정책 공백',
      '런타임 프로세스 · 아웃바운드 이상',
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
              설정에서 새는 것과, 돌면서 새는 것
            </h2>
          </div>
          <p className="max-w-[30rem] text-body text-fg-muted">
            클라우드 사고는 침입보다 설정에서 시작되는 경우가 많습니다. 잘못 열린
            권한을 정리하는 일과, 이미 돌아가는 워크로드를 지켜보는 일은 서로 다른
            작업이라 따로 봅니다.
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
