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
            letterSpacing: '0.12em', padding: '8px 0', marginBottom: 20,
            animation: 'fadeUp 0.7s ease both',
          }}>
            DMN솔루션 · 서울 · IDC · AI 보안 · 스트리밍
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
            {['IDC 호스팅', 'AI 보안', 'Ultrastream'].map(label => (
              <span
                key={label}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
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
            fontSize: 'clamp(2.1rem, 5vw, 3.45rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
            marginBottom: 22,
            animation: 'fadeUp 0.7s 0.1s ease both',
          }}>
            송출 화면까지<br />
            <span style={{ color: 'var(--accent)' }}>끊기지 않게</span> 잇는 인프라
          </h1>

          <p style={{
            fontSize: '0.96rem',
            color: 'var(--text2)',
            maxWidth: 520,
            lineHeight: 1.78,
            marginBottom: 26,
            animation: 'fadeUp 0.7s 0.16s ease both',
            fontWeight: 450,
          }}>
            서버·코로케이션부터 AI 보안 관제, 초저지연 라이브(Ultrastream)까지 한 팀이 설계합니다. 아래 카탈로그에서 항목을 고르면 상세 페이지로 이어져 견적·도입을 정리할 수 있습니다.
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
            >서비스 둘러보기</a>
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
            >문의 · 견적</a>
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
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: 16 }}>
            대표 수치 · 참고용 (계약별 협의)
          </div>
          <dl style={{ margin: 0, padding: 0 }}>
            {[
              { k: '가용성 목표', v: '99.99%', d: 'SLA는 서비스별 협의' },
              { k: '송출 지연', v: '1~2초', d: 'LL-HLS 기준(환경별 상이)' },
              { k: '대응', v: '24 / 7', d: '보안·장애 창구' },
              { k: '라인업', v: '14+', d: '상세 페이지에서 옵션 확인' },
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
          <p style={{ marginTop: 16, fontSize: '0.68rem', color: 'var(--text3)', lineHeight: 1.55 }}>
            실제 과금·SLA는 도입 범위에 따라 달라집니다. 스크롤하여 서비스 목록을 확인해 주세요.
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
