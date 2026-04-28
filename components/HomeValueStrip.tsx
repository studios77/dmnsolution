const pillars = [
  { title: 'HOST', titleKr: '인프라', desc: 'Racks through failover — boring on purpose.', icon: '🏗️' },
  { title: 'GUARD', titleKr: '보안', desc: 'Models that read context, not only rules.', icon: '🔒' },
  { title: 'BEAM', titleKr: '미디어', desc: 'LL-HLS paths your audience actually feels.', icon: '📺' },
]

export default function HomeValueStrip() {
  return (
    <section
      aria-label="Practice areas"
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(90deg, var(--bg2) 0%, var(--bg) 50%, var(--bg2) 100%)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '32px 5%',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}
        className="home-value-grid"
      >
        {pillars.map(p => (
          <div
            key={p.title}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              padding: '18px 20px',
              borderRadius: 2,
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              boxShadow: '4px 4px 0 rgba(20,18,17,0.05)',
            }}
          >
            <span style={{ fontSize: '1.25rem', lineHeight: 1 }} aria-hidden>{p.icon}</span>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--accent)', letterSpacing: '0.16em', marginBottom: 4 }}>{p.title}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>{p.titleKr}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text3)', lineHeight: 1.55 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 720px) {
          .home-value-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
