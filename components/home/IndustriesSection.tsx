/**
 * 적용 산업군.
 *
 * 도입 사례를 공개할 수 없는 단계라 로고 벽 대신 산업군과 그 분야에서 실제로
 * 요구받는 조건을 적습니다. 고객사 이름을 지어내지 않으면서 "우리 업종을 아는
 * 곳인가" 에 답하기 위한 자리입니다.
 */
const INDUSTRIES = [
  { name: '공공 · 지자체', need: '망분리 · 국정원 검증 요건' },
  { name: '금융 · 핀테크', need: '전자금융감독규정 · 로그 보존' },
  { name: '방송 · OTT', need: '송출 무중단 · 저지연' },
  { name: '이커머스 · 라이브커머스', need: '트래픽 급증 · 봇 차단' },
  { name: '게임 · 미디어', need: 'DDoS · 어뷰징 대응' },
  { name: '의료 · 헬스', need: '민감정보 · 접근통제' },
  { name: '교육 · 에듀', need: '동시접속 · 콘텐츠 보호' },
  { name: '중견 · 중소기업', need: '전담 인력 없이 운영' },
]

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-page">
        <p className="font-mono text-label font-bold tracking-[0.14em] text-fg-subtle">INDUSTRIES</p>
        <h2 className="mt-4 max-w-[30rem] text-[1.85rem] font-extrabold leading-[1.32] tracking-[-0.03em] text-fg sm:text-[2.15rem]">
          업종마다 요구받는 조건이 다릅니다
        </h2>

        <ul className="mt-12 grid list-none grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(i => (
            <li key={i.name} className="bg-surface px-6 py-6">
              <p className="text-body font-bold leading-snug tracking-[-0.01em] text-fg">{i.name}</p>
              <p className="mt-2 text-meta text-fg-muted">{i.need}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
