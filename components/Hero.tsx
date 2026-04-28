export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: 'min(100vh, 920px)',
      display: 'flex',
      alignItems: 'center',
      padding: '112px 5% 64px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(165deg, #030712 0%, #0f172a 42%, #111827 100%)',
      borderBottom: '1px solid rgba(34, 197, 94, 0.18)',
    }}>
      {/* Tech grid overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.45,
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 85%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(900px, 90vw)',
          height: '55%',
          background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.18) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.08fr) minmax(280px, 0.92fr)',
        gap: 'clamp(36px, 5vw, 72px)',
        alignItems: 'center',
        position: 'relative',
      }} className="hero-split">

        <div style={{ textAlign: 'left', position: 'relative', paddingBottom: 8 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)',
            letterSpacing: '0.14em', padding: '6px 14px', marginBottom: 18,
            borderRadius: 6,
            border: '1px solid rgba(34, 197, 94, 0.35)',
            background: 'rgba(34, 197, 94, 0.08)',
            animation: 'fadeUp 0.7s ease both',
          }}>
            LIVE STACK · ULTRASTREAM ENGINE
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: 22,
              animation: 'fadeUp 0.7s 0.05s ease both',
            }}
            aria-hidden
          >
            {['RTMP', 'HLS', 'LL-HLS', 'WebRTC', 'SRT'].map(label => (
              <span
                key={label}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  padding: '6px 11px',
                  borderRadius: 4,
                  border: '1px solid rgba(148, 163, 184, 0.35)',
                  background: 'rgba(15, 23, 42, 0.6)',
                  color: '#cbd5e1',
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2rem, 5vw, 3.35rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            color: 'var(--hero-text)',
            marginBottom: 20,
            animation: 'fadeUp 0.7s 0.1s ease both',
          }}>
            실시간 송출 인프라를<br />
            <span style={{ color: 'var(--accent)' }}>서버에서 뷰어까지</span> 한 번에
          </h1>

          <p style={{
            fontSize: '0.96rem',
            color: 'var(--hero-muted)',
            maxWidth: 520,
            lineHeight: 1.78,
            marginBottom: 26,
            animation: 'fadeUp 0.7s 0.16s ease both',
          }}>
            IDC·코로케이션부터 AI 보안 관제, Ultrastream(LL-HLS) 초저지연까지 — 미디어 서버 제품을 고르듯 모듈을 조합할 수 있습니다.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            animation: 'fadeUp 0.7s 0.22s ease both',
          }}>
            <a href="#services" style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
              color: '#030712',
              borderRadius: 8,
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              boxShadow: '0 12px 36px rgba(34, 197, 94, 0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >서비스 카탈로그</a>
            <a href="#contact" style={{
              padding: '14px 28px',
              background: 'transparent',
              color: '#e2e8f0',
              border: '1px solid rgba(148, 163, 184, 0.45)',
              borderRadius: 8,
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(34, 197, 94, 0.5)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(148, 163, 184, 0.45)'
              }}
            >도입 문의</a>
          </div>
        </div>

        <aside style={{
          background: 'rgba(15, 23, 42, 0.72)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(34, 197, 94, 0.22)',
          borderRadius: 12,
          boxShadow: '0 24px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
          padding: '26px 24px 22px',
          animation: 'fadeUp 0.7s 0.22s ease both',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 14 }}>
            지표 요약
          </div>
          <dl style={{ margin: 0, padding: 0 }}>
            {[
              { k: '가용성 목표', v: '99.99%', d: 'SLA는 서비스별 협의' },
              { k: '송출 지연', v: '1~2초', d: 'LL-HLS 기준' },
              { k: '대응', v: '24/7', d: '보안 · 장애' },
              { k: '라인업', v: '14+', d: '상세에서 스펙 확인' },
            ].map(row => (
              <div key={row.k} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 12,
                padding: '12px 0',
                borderBottom: '1px solid rgba(51, 65, 85, 0.65)',
              }}>
                <dt style={{ fontSize: '0.76rem', color: '#94a3b8', fontWeight: 500, margin: 0 }}>{row.k}</dt>
                <dd style={{ margin: 0, textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '1.22rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{row.v}</span>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: 2, maxWidth: 200 }}>{row.d}</div>
                </dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: 14, fontSize: '0.65rem', color: '#64748b', lineHeight: 1.55, fontFamily: 'var(--mono)' }}>
            실제 수치는 도입 환경에 따라 달라집니다.
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
