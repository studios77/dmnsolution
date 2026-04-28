'use client'
const whyItems = [
  { num: '01', title: '단일 창구 SLA', desc: '인프라 변경과 보안 이슈가 겹칠 때 업체를 왔다 갔다 하지 않도록, 설계·운영·장애까지 동일한 담당 라인으로 안내합니다.' },
  { num: '02', title: '운영 데이터 기반 보안', desc: '실제 트래픽과 로그에 붙는 규칙·모델 중심으로 이상 징후를 잡습니다. 자율 관제·송출 이상 탐지 등은 환경별로 튜닝해 드립니다.' },
  { num: '03', title: '미디어 특화 솔루션', desc: '송출 엔진(LL-HLS)·VOD·동시 멀티 플랫폼 구성을 업계 요구에 맞춰 제안합니다.' },
  { num: '04', title: '연속성·복구 설계', desc: 'HA, DB 클러스터, 재해대비 백업 라인을 초기 설계 단계에서 함께 검토합니다.' },
]

const summaryRows = [
  { label: '서비스 헬스', value: '모니터링·알람 정상', tone: 'ok' as const },
  { label: '이중화', value: 'Active 구성, 페일오버 대기', tone: 'ok' as const },
  { label: 'DB', value: '클러스터 동기화 유지', tone: 'ok' as const },
  { label: '백업·검증', value: '일정 스냅샷 완료', tone: 'ok' as const },
  { label: '보안 분석', value: '실시간 규칙·AI 스캔 동작', tone: 'ok' as const },
  { label: 'SLA(참고)', value: '목표 99.99% (협의별)', tone: 'muted' as const },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '92px 5%' }}>
        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: '#b45309', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
            Company · Approach
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 12 }}>
            도입부터 운영까지 한 줄로</h2>
          <p style={{ fontSize: '0.94rem', color: 'var(--text2)', maxWidth: 540, lineHeight: 1.78, marginBottom: 0 }}>
            업무 시스템·보안·송출을 각각 다른 업체로 쪼개지 않고, 초기 진단부터 운영 절차를 함께 정리하는 방식을 지향합니다.
          </p>
        </div>

        <div className="reveal two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginTop: 60 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {whyItems.map(w => (
              <div key={w.num} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: 18, border: '1px solid rgba(37,99,235,0.14)', borderRadius: 8, background: '#fff', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', background: 'rgba(15,23,42,0.06)', border: '1px solid var(--border)', borderRadius: 3, padding: '4px 8px', flexShrink: 0, marginTop: 2 }}>{w.num}</div>
                <div>
                  <h4 style={{ fontFamily: 'var(--display)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 5 }}>{w.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <aside style={{ border: '1px solid rgba(37,99,235,0.18)', borderRadius: 12, overflow: 'hidden', background: '#fff', boxShadow: '0 12px 32px rgba(15,23,42,0.06)' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(15,23,42,0.08)', fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>
              운영 요약 패널
            </div>
            <div style={{ padding: '14px 18px 18px' }}>
              {summaryRows.map(row => (
                <div key={row.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(15,23,42,0.06)',
                  fontSize: '0.8rem',
                }}>
                  <span style={{ color: 'var(--text3)', fontWeight: 500 }}>{row.label}</span>
                  <span style={{ fontWeight: 600, color: row.tone === 'muted' ? 'var(--text3)' : '#15803d' }}>{row.value}</span>
                </div>
              ))}
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: '0.7rem', color: 'var(--text3)', lineHeight: 1.55 }}>
                ※ 표시 형식은 참고용이며, 계약 SLA·헬스체크는 개별 검토 결과를 따릅니다.
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
