'use client'
import Link from 'next/link'

const edges = [
  {
    badge: '01 · Signal integrity',
    icon: '🔍',
    title: 'Deepfake defense on live rails',
    subtitle: 'Stream-native, not batch review',
    desc: 'CNN + LSTM across frames and audio to catch synthetic talent before it airs. Automate blocking when confidence clears policy — tuned for broadcast clocks, not slide decks.',
    stats: [
      { val: '95%+', label: 'Model accuracy' },
      { val: '<1s', label: 'Detect → gate' },
      { val: '24/7', label: 'Unattended' },
    ],
    highlight: 'Election cycles, financial streams, corporate town-halls — anywhere trust is the product.',
    color: '#c2410c',
  },
  {
    badge: '02 · Autonomous SOC',
    icon: '🤖',
    title: 'LLM-backed security brain',
    subtitle: 'Context beats regex',
    desc: 'Rules still matter, but they miss novel chains. We pair SIEM/SOAR with models that read analyst notes, not just signatures — fewer pages, faster containment.',
    stats: [
      { val: '50+', label: 'Playbooks' },
      { val: '90%', label: 'Ops savings vs.' },
      { val: '<5m', label: 'Threat isolate' },
    ],
    highlight: 'Mid-market teams that cannot staff a 24/7 bench still get enterprise discipline.',
    color: '#0f766e',
    link: '/services/ai-security/',
  },
  {
    badge: '03 · Glass-to-glass',
    icon: '📡',
    title: 'LL-HLS in single digits',
    subtitle: 'Latency budget for commerce',
    desc: 'Domestic CDNs often land 5–15s behind glass. Ultrastream targets 1–2s LL-HLS so auctions, sports ticks, and drops feel instant — conversion follows physics.',
    stats: [
      { val: '1–2s', label: 'Target latency' },
      { val: '80%', label: 'Cost story' },
      { val: '∞', label: 'Concurrent eyeballs' },
    ],
    highlight: 'Where a second equals margin — arenas, live shopping, drop culture.',
    color: '#a16207',
    link: '/services/ultrastream/',
  },
]

const trustStats = [
  { val: '99.99%', label: 'Availability SLA' },
  { val: '24/7', label: 'AI SOC coverage' },
  { val: '<30s', label: 'HA failover' },
  { val: '95%+', label: 'Deepfake accuracy' },
]

const sectors = [
  { icon: '🏛️', label: 'Public sector' },
  { icon: '🏦', label: 'Finance' },
  { icon: '📺', label: 'Broadcast / OTT' },
  { icon: '🛒', label: 'Live commerce' },
  { icon: '🎮', label: 'Games & media' },
  { icon: '🏥', label: 'Health' },
  { icon: '🎓', label: 'EdTech' },
  { icon: '🏢', label: 'Mid-market' },
]

export default function EdgeSection() {
  return (
    <section style={{ background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 5%' }}>

        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            Signal · Sec · Stream
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.95rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 16 }}>
            Three vectors we refuse<br />
            <span style={{ color: 'var(--accent)' }}>to sell separately.</span>
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', lineHeight: 1.78, maxWidth: 620 }}>
            Detect forgery, understand incidents, compress latency — most vendors pick one poster child.
            We ship the bundle because Korean live stacks actually break at the seams between them.
            <span style={{ display: 'block', marginTop: 10, fontSize: '0.84rem', color: 'var(--text3)' }}>
              검·관제·송출을 한 화면에서 설계 — 유튜브·방송·커머스 공통의 ‘지금 이거 진짜냐’를 잡습니다.
            </span>
          </p>
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 56 }}>
          {edges.map((e, i) => (
            <div key={i} className="edge-card" style={{
              background: 'var(--surface)',
              border: '2px solid var(--border)',
              borderRadius: 2,
              padding: '32px 32px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 40,
              alignItems: 'center',
              transition: 'border-color 0.25s, box-shadow 0.25s',
              boxShadow: '6px 6px 0 rgba(20,18,17,0.04)',
            }}
              onMouseEnter={e2 => {
                (e2.currentTarget as HTMLDivElement).style.borderColor = e.color
                ;(e2.currentTarget as HTMLDivElement).style.boxShadow = `8px 8px 0 ${e.color}22`
              }}
              onMouseLeave={e2 => {
                (e2.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                ;(e2.currentTarget as HTMLDivElement).style.boxShadow = '6px 6px 0 rgba(20,18,17,0.04)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: e.color, letterSpacing: '0.12em', textTransform: 'uppercase', border: `1px solid ${e.color}`, borderRadius: 2, padding: '4px 12px' }}>
                    {e.badge}
                  </span>
                </div>
                <div style={{ fontSize: '1.75rem', marginBottom: 8 }}>{e.icon}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.42rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 6 }}>
                  {e.title}
                </h3>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: e.color, marginBottom: 14, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {e.subtitle}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.75 }}>
                  {e.desc}
                </p>
                <div style={{ marginTop: 16, padding: '12px 14px', background: 'var(--accent-soft)', borderLeft: `3px solid ${e.color}`, borderRadius: '0 2px 2px 0', fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.6 }}>
                  {e.highlight}
                </div>
                {e.link && (
                  <Link href={e.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontFamily: 'var(--mono)', fontSize: '0.7rem', color: e.color, textDecoration: 'none', letterSpacing: '0.06em', borderBottom: `1px solid ${e.color}88`, paddingBottom: 2 }}>
                    Read service brief →
                  </Link>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {e.stats.map((s, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 20px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 2 }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 800, color: e.color, letterSpacing: '-0.03em', lineHeight: 1, flexShrink: 0 }}>
                      {s.val}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text2)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.45 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 72 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent2)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 28, height: 1, background: 'var(--accent2)', display: 'inline-block' }} />
            Proof points
          </div>
          <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 2, overflow: 'hidden' }}>
            {trustStats.map((t, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 8 }}>
                  {t.val}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.45 }}>
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 56 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent2)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 28, height: 1, background: 'var(--accent2)', display: 'inline-block' }} />
            Where teams deploy
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {sectors.map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 2,
                fontSize: '0.8rem',
                color: 'var(--text2)',
                fontFamily: 'var(--sans)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'
                  ;(e.currentTarget as HTMLDivElement).style.color = 'var(--text)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.color = 'var(--text2)'
                }}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:768px){
          .edge-card { grid-template-columns: 1fr !important; gap: 28px !important; }
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
