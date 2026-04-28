'use client'
const whyItems = [
  { num: '01', title: 'One throat to choke', desc: 'Architects who own network, workloads, streams, and the incident bridges between them — no ping-pong.', titleKr: '단일 책임 라인' },
  { num: '02', title: 'Telemetry-led defense', desc: 'Playbooks seeded from actual packet shapes and studio feeds, tuned per tenant — not slideware SOC.', titleKr: '실측 트래픽 기반' },
  { num: '03', title: 'Picture-first pipelines', desc: 'LL-HLS, VOD choreography, simultaneous syndication — creatives meet SRE realism.', titleKr: '미디어 파이프' },
  { num: '04', title: 'Continuity baked in', desc: 'HA, clustered data planes, rehearsal-ready DR — not a surprise phase-two upsell.', titleKr: '연속성 설계' },
]

const summaryRows = [
  { label: 'Service health', value: 'Monitoring OK', tone: 'ok' as const },
  { label: 'Redundancy', value: 'Active paths', tone: 'ok' as const },
  { label: 'Databases', value: 'Cluster sync good', tone: 'ok' as const },
  { label: 'Backups', value: 'Snapshot window met', tone: 'ok' as const },
  { label: 'Sec analytics', value: 'AI + rule engines live', tone: 'ok' as const },
  { label: 'SLA (target)', value: '99.99% discuss', tone: 'muted' as const },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '92px 5%' }}>
        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            Practice
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.85rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 14 }}>
            Operational honesty, editorial layout.
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', maxWidth: 580, lineHeight: 1.78, marginBottom: 0 }}>
            We are intentionally not another faux-terminal martech landing. Same capabilities class as other Korean hosts — radically different typography, pacing, voice.
            <span style={{ display: 'block', marginTop: 10, fontSize: '0.82rem', color: 'var(--text3)' }}>도입 진단부터 운영 롤 같은 팀 라인으로 잡습니다.</span>
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
                  <h4 style={{ fontFamily: 'var(--display)', fontSize: '1rem', fontWeight: 800, color: 'var(--text)', marginBottom: 4, letterSpacing: '-0.02em' }}>{w.title}</h4>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text3)', marginBottom: 6, fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>{w.titleKr}</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <aside style={{ border: '2px solid var(--text)', borderRadius: 2, overflow: 'hidden', background: 'var(--surface)', boxShadow: '12px 12px 0 rgba(194,65,12,0.08)' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', fontFamily: 'var(--mono)', fontSize: '0.62rem', fontWeight: 600, color: 'var(--text3)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Status vignette · illustrative
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
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: '0.66rem', color: 'var(--text3)', lineHeight: 1.55, fontFamily: 'var(--mono)' }}>
                Illustrative only — contractual SLA gated by discovery.
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
