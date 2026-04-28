export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: 'min(100vh, 920px)',
      display: 'flex',
      alignItems: 'center',
      padding: '104px 5% 56px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
      borderBottom: '1px solid var(--border)',
      background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 55%)',
    }}>
      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.08fr) minmax(280px, 0.92fr)',
        gap: 'clamp(36px, 5vw, 72px)',
        alignItems: 'end',
      }} className="hero-split">

        <div style={{ textAlign: 'left', position: 'relative', paddingBottom: 8 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--text3)',
            letterSpacing: '0.22em', padding: '8px 0', marginBottom: 20,
            textTransform: 'uppercase', animation: 'fadeUp 0.7s ease both',
          }}>
            DMN Solution · Seoul · Since operations
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px 10px',
              marginBottom: 20,
              animation: 'fadeUp 0.7s 0.05s ease both',
            }}
            aria-hidden
          >
            {['HOSTING', 'SECOPS', 'LIVE STACK'].map(label => (
              <span
                key={label}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.64rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  padding: '8px 14px',
                  borderRadius: 2,
                  border: '1.5px solid var(--text)',
                  background: 'transparent',
                  color: 'var(--text)',
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2.25rem, 5.2vw, 3.65rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
            marginBottom: 22,
            animation: 'fadeUp 0.7s 0.1s ease both',
          }}>
            Infrastructure that<br />
            stays under your signal.
          </h1>

          <p style={{
            fontSize: '0.94rem',
            color: 'var(--text2)',
            maxWidth: 520,
            lineHeight: 1.75,
            marginBottom: 26,
            animation: 'fadeUp 0.7s 0.16s ease both',
            fontWeight: 450,
          }}>
            <span style={{ display: 'block', marginBottom: 10, color: 'var(--text3)', fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Korean summary
            </span>
            IDC부터 AI 보안·Ultrastream 초저지연까지 한 팀이 설계하고 붙입니다. 랜딩만 다른 도메인과 달리, 여기서는 제품을 고르듯 흐름을 잡도록 보였습니다.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            animation: 'fadeUp 0.7s 0.22s ease both',
          }}>
            <a href="#services" style={{
              padding: '15px 26px',
              background: 'var(--text)',
              color: '#fff',
              borderRadius: 2,
              fontFamily: 'var(--sans)',
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              boxShadow: '0 12px 32px rgba(20,18,17,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >Explore catalog</a>
            <a href="#contact" style={{
              padding: '15px 26px',
              background: 'transparent',
              color: 'var(--text)',
              border: '2px solid var(--text)',
              borderRadius: 2,
              fontFamily: 'var(--sans)',
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(20,18,17,0.05)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >Book a conversation</a>
          </div>
        </div>

        <aside style={{
          background: 'var(--surface)',
          border: '2px solid var(--text)',
          borderRadius: 2,
          boxShadow: '16px 16px 0 rgba(20,18,17,0.06)',
          padding: '26px 24px 22px',
          animation: 'fadeUp 0.7s 0.22s ease both',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
            Reference targets · not a quote
          </div>
          <dl style={{ margin: 0, padding: 0 }}>
            {[
              { k: 'Uptime', v: '99.99%', d: 'SLA by contract' },
              { k: 'Glass-to-glass', v: '1–2 s', d: 'LL-HLS baseline' },
              { k: 'Coverage', v: '24 / 7', d: 'Sec + NOC lanes' },
              { k: 'Lines', v: '14+', d: 'See detail pages' },
            ].map(row => (
              <div key={row.k} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 12,
                padding: '14px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <dt style={{ fontSize: '0.78rem', color: 'var(--text3)', fontWeight: 600, margin: 0 }}>{row.k}</dt>
                <dd style={{ margin: 0, textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '1.28rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{row.v}</span>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text3)', marginTop: 2, maxWidth: 200 }}>{row.d}</div>
                </dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: 16, fontSize: '0.68rem', color: 'var(--text3)', lineHeight: 1.55, fontFamily: 'var(--mono)' }}>
            Figures are directional. Final SLA and commercials follow scoping — scroll for the stacks we ship.
          </p>
        </aside>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .hero-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
