const lines = [
  {
    id: 'idc',
    label: 'IDC · 서버',
    border: 'rgba(56, 189, 248, 0.35)',
    glow: 'rgba(56, 189, 248, 0.12)',
    rows: [
      { v: '99.99%', sub: '가용 SLA(목표)' },
      { v: '<30s', sub: 'HA 페일오버' },
    ],
  },
  {
    id: 'security',
    label: 'AI 보안',
    border: 'rgba(34, 197, 94, 0.35)',
    glow: 'rgba(34, 197, 94, 0.1)',
    rows: [
      { v: '24/7', sub: '관제·자동 대응' },
      { v: '95%+', sub: '딥페이크·ML(목표)' },
    ],
  },
  {
    id: 'stream',
    label: '스트리밍',
    border: 'rgba(167, 139, 250, 0.35)',
    glow: 'rgba(167, 139, 250, 0.1)',
    rows: [
      { v: '1~2s', sub: 'LL-HLS 지연' },
      { v: '∞', sub: '동시 시청(엔진별)' },
    ],
  },
]

export default function HomeValueStrip() {
  return (
    <section
      aria-label="분야별 참고 지표"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(90deg, #0f172a 0%, #111827 50%, #0f172a 100%)',
        borderTop: '1px solid rgba(34, 197, 94, 0.2)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.8)',
      }}
    >
      <p
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '16px 5% 0',
          fontSize: '0.88rem',
          color: '#94a3b8',
          fontFamily: 'var(--sans)',
          letterSpacing: '0.02em',
        }}
      >
        수치는 서비스·환경마다 다르며, 아래 세 줄은 각각 다른 상품 영역입니다.
      </p>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '20px 5% 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
        className="home-stat-grid"
      >
        {lines.map(line => (
          <div
            key={line.id}
            style={{
              textAlign: 'center',
              padding: '16px 12px',
              borderRadius: 10,
              border: `1px solid ${line.border}`,
              background: `linear-gradient(165deg, rgba(3,7,18,0.6) 0%, ${line.glow} 100%)`,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#e2e8f0',
                marginBottom: 14,
              }}
            >
              {line.label}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
              {line.rows.map(r => (
                <div key={r.sub}>
                  <div className="stat-num" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.02em' }}>{r.v}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: '#cbd5e1', marginTop: 4, lineHeight: 1.35 }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .home-stat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
