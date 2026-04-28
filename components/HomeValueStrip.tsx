/** 메인 상단 하단의 3대 영역 요약 — 히어로와 서비스 목록 사이 구분 */
const pillars = [
  { title: '인프라', desc: '서버·IDC·이중화·DB', icon: '🏗️' },
  { title: '보안', desc: '관제·이상탐지·거버넌스', icon: '🔒' },
  { title: '미디어', desc: '저지연 스트림·VOD', icon: '📺' },
]

export default function HomeValueStrip() {
  return (
    <section
      aria-label="사업 영역 요약"
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(37, 99, 235, 0.12)',
        borderBottom: '1px solid rgba(37, 99, 235, 0.12)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(241,247,255,0.95) 100%)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '28px 5%',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
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
              padding: '16px 20px',
              borderRadius: 8,
              border: '1px solid rgba(37,99,235,0.1)',
              background: 'rgba(255,255,255,0.9)',
            }}
          >
            <span style={{ fontSize: '1.35rem', lineHeight: 1 }} aria-hidden>{p.icon}</span>
            <div>
              <div style={{ fontFamily: 'var(--display)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{p.title}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.55 }}>{p.desc}</div>
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
