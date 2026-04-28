const pillars = [
  { v: '1~2s', label: 'LL-HLS 지연(목표)', sub: 'Ultrastream' },
  { v: '99.99%', label: '가용성 SLA', sub: '협의·환경별' },
  { v: '24/7', label: '보안·모니터링', sub: 'AI 관제 옵션' },
  { v: '14+', label: '서비스 모듈', sub: '조합·견적' },
]

export default function HomeValueStrip() {
  return (
    <section
      aria-label="핵심 수치"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(90deg, #0f172a 0%, #111827 50%, #0f172a 100%)',
        borderTop: '1px solid rgba(34, 197, 94, 0.2)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.8)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '24px 5%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}
        className="home-stat-grid"
      >
        {pillars.map(p => (
          <div
            key={p.label}
            style={{
              textAlign: 'center',
              padding: '12px 8px',
              borderRadius: 8,
              border: '1px solid rgba(51, 65, 85, 0.7)',
              background: 'rgba(3, 7, 18, 0.45)',
            }}
          >
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.55rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{p.v}</div>
            <div style={{ fontSize: '0.78rem', color: '#e2e8f0', fontWeight: 600, marginTop: 4 }}>{p.label}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: '#64748b', marginTop: 2 }}>{p.sub}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .home-stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .home-stat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
