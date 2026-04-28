'use client'
const whyItems = [
  { num: '01', title: '한 군데서 끝나는 창구', desc: '네트워크·서버·스트림·장애 연락이 제각각이면 문제 생길 때마다 공만 돕니다. 설계·운영·장애를 같은 라인으로 잡습니다.' },
  { num: '02', title: '로그·트래픽이 먼저', desc: '가짜 시나리오가 아니라 실제 트래픽·로그에 맞춰 룰과 모델을 붙입니다. 환경마다 튜닝합니다.' },
  { num: '03', title: '화면(송출)에 맞춘 설계', desc: 'LL-HLS, VOD, 멀티 플랫폼 동시 송출까지 — 방송·커머스 일정에 맞춰 구성합니다.' },
  { num: '04', title: '끊기지 않게 미리 잡는 HA', desc: '이중화·DB 클러스터·백업·DR은 나중이 아니라 처음 설계부터 같이 봅니다.' },
]

const summaryRows = [
  { label: '서비스 헬스', value: '모니터링·알람 정상', tone: 'ok' as const },
  { label: '이중화', value: 'Active 구성 대기', tone: 'ok' as const },
  { label: 'DB', value: '클러스터 동기 유지', tone: 'ok' as const },
  { label: '백업', value: '스냅샷 완료', tone: 'ok' as const },
  { label: '보안 분석', value: '룰·AI 엔진 동작', tone: 'ok' as const },
  { label: 'SLA(참고)', value: '목표 99.99% 협의', tone: 'muted' as const },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '92px 5%' }}>
        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
            회사 · 접근 방식
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.85rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 14 }}>
            도입부터 운영까지 한 줄로
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', maxWidth: 580, lineHeight: 1.78, marginBottom: 0 }}>
            인프라 업체·보안 업체·스트리밍 업체로 쪼개지면 장애 시 책임만 늘어납니다. 진단·운영 루틴을 같이 잡고, 위에서 고른 구성이 실제로 굴러가게 맞춥니다.
          </p>
        </div>

        <div className="reveal two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginTop: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {whyItems.map(w => (
              <div key={w.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 18, border: '2px solid var(--border)', borderRadius: 2, background: 'var(--surface)', boxShadow: '4px 4px 0 rgba(20,18,17,0.04)', transition: 'border-color 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
              >
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: 2, padding: '4px 8px', flexShrink: 0 }}>{w.num}</div>
                <div>
                  <h4 style={{ fontFamily: 'var(--display)', fontSize: '1rem', fontWeight: 800, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>{w.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <aside style={{ border: '2px solid var(--text)', borderRadius: 2, overflow: 'hidden', background: 'var(--surface)', boxShadow: '12px 12px 0 rgba(194,65,12,0.08)' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text3)' }}>
              운영 요약 (예시 · 참고)
            </div>
            <div style={{ padding: '16px 18px 18px' }}>
              {summaryRows.map(row => (
                <div key={row.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border)',
                  fontSize: '0.8rem',
                }}>
                  <span style={{ color: 'var(--text3)', fontWeight: 500 }}>{row.label}</span>
                  <span style={{ fontWeight: 600, fontFamily: 'var(--mono)', fontSize: '0.72rem', color: row.tone === 'muted' ? 'var(--text3)' : 'var(--accent2)' }}>{row.value}</span>
                </div>
              ))}
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: '0.66rem', color: 'var(--text3)', lineHeight: 1.55 }}>
                표시는 이해를 돕기 위한 예시이며, 계약 SLA·헬스체크는 개별 검토 결과를 따릅니다.
              </p>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ #about .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  )
}
