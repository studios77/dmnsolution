'use client'
const whyItems = [
  { num: '01', title: '분야별로 다른 목표', desc: 'IDC는 가용·복구, AI 보안은 탐지·관제, 스트리밍은 지연·동시 시청이 핵심입니다. 한 문장으로 뭉뚱그리지 않고 라인마다 요구사항을 나눕니다.' },
  { num: '02', title: '로그·트래픽이 먼저', desc: '각 서비스에서 실제 트래픽·로그를 기준으로 룰과 모델·인프라 스펙을 잡습니다. 환경마다 튜닝합니다.' },
  { num: '03', title: '상품 단위로 명확히', desc: '송출(HLS·VOD)과 보안(SIEM·딥페이크)은 계약 범위·SLA가 다릅니다. 혼합 도입 시에도 항목을 분리해 제안합니다.' },
  { num: '04', title: '담당 창구는 하나, 범위는 구분', desc: '문의·장애 접점은 한곳으로 모을 수 있으나, 견적과 운영 책임은 IDC / 보안 / 스트리밍으로 나누어 정합니다.' },
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
            세 라인, 각각 다른 기준으로
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', maxWidth: 580, lineHeight: 1.78, marginBottom: 0 }}>
            IDC·AI 보안·스트리밍은 통합 패키지가 아니라 <strong style={{ color: 'var(--text)', fontWeight: 600 }}>별도 상품</strong>입니다. 도입 검토 시 분야를 나누어 스펙과 SLA를 맞추고, 필요하면 동시에 제안하되 견적은 구분합니다.
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
                  <span className="stat-num" style={{ fontWeight: 600, fontSize: '0.8rem', color: row.tone === 'muted' ? 'var(--text3)' : 'var(--accent2)' }}>{row.value}</span>
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
