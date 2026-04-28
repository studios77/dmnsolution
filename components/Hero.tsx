export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 5% 60px', overflow: 'hidden', position: 'relative', zIndex: 1,
    }}>
      <div style={{
        position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)',
        width: 920, height: 560,
        background: 'radial-gradient(ellipse at 45% 35%, rgba(59,130,246,0.12) 0%, transparent 55%), radial-gradient(ellipse at 72% 25%, rgba(14,165,233,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(186,230,253,0.25) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', width: '100%' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--mono)', fontSize: '0.7rem', color: '#1d4ed8',
          letterSpacing: '0.1em', padding: '7px 18px',
          border: '1px solid rgba(37, 99, 235, 0.22)', borderRadius: 4,
          marginBottom: 32, background: 'rgba(255,255,255,0.65)',
          animation: 'fadeUp 0.8s ease both',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: '#2563eb',
            animation: 'pulse 1.5s ease-in-out infinite', display: 'inline-block',
          }} />
          Enterprise ICT Partner
        </div>

        <h1 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem, 7vw, 4.75rem)',
          fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--text)',
          marginBottom: 24, animation: 'fadeUp 0.8s 0.1s ease both',
          wordBreak: 'keep-all',
        }}>
          기업 IT 인프라와 사이버 보안을<br />
          <span style={{
            background: 'linear-gradient(135deg, #1d4ed8, #0d9488, #0369a1)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>아키텍처부터 운영까지</span>
          <span style={{ color: 'var(--text)' }}> 책임집니다</span>
        </h1>

        <p style={{
          fontSize: '1.02rem', color: 'var(--text2)', maxWidth: 600,
          margin: '0 auto 48px', lineHeight: 1.88,
          animation: 'fadeUp 0.8s 0.2s ease both',
        }}>
          DMN솔루션은 IDC·클라우드 기반 서버 운영, 보안 관제 및 스트리밍 플랫폼까지<br />
          기업 정보시스템 전 영역에서 검증된 도입 경험으로 최적의 IT 환경을 제안합니다.
        </p>

        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeUp 0.8s 0.3s ease both',
        }}>
          <a href="#services" style={{
            padding: '16px 40px',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            color: '#fff',
            border: 'none', borderRadius: 30, fontFamily: 'var(--sans)',
            fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.02em',
            textDecoration: 'none', boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(37,99,235,0.45)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(37,99,235,0.35)'; }}
          >서비스 안내</a>
          <a href="#contact" style={{
            padding: '16px 40px', background: 'rgba(255,255,255,0.92)', color: 'var(--text)',
            border: '1px solid rgba(37,99,235,0.25)', borderRadius: 30, backdropFilter: 'blur(12px)',
            fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.02em',
            textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.background = '#ffffff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.92)'; }}
          >도입 문의</a>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: 24, marginTop: 80,
          paddingTop: 48, flexWrap: 'wrap',
          animation: 'fadeUp 0.8s 0.4s ease both',
        }}>
          {[
            { num: '99.99', unit: '%', label: '가용성 SLA 목표' },
            { num: '1~2', unit: '초', label: '실시간 스트림' },
            { num: '24', unit: '/7', label: '보안 상시 대응' },
            { num: '14', unit: '+', label: '전문 서비스 라인업' },
          ].map(s => (
            <div key={s.label} style={{
              textAlign: 'center', background: 'rgba(255,255,255,0.78)',
              backdropFilter: 'blur(14px)', border: '1px solid rgba(37,99,235,0.12)',
              borderRadius: 16, padding: '24px 32px', minWidth: 180,
              boxShadow: '0 8px 28px rgba(30,58,138,0.06)',
            }}>
              <span style={{
                fontFamily: 'var(--display)', fontSize: '2.8rem', fontWeight: 800,
                color: 'var(--text)', display: 'block', lineHeight: 1.1, marginBottom: 4
              }}>
                {s.num}<span style={{ color: '#2563eb', fontSize: '1.6rem', marginLeft: 2 }}>{s.unit}</span>
              </span>
              <span style={{
                fontFamily: 'var(--sans)', fontSize: '0.85rem',
                color: 'var(--text3)', letterSpacing: '0.04em',
                fontWeight: 600,
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </section>
  )
}
