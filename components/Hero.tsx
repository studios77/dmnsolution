export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: 'min(100vh, 920px)',
      display: 'flex',
      alignItems: 'center',
      padding: '96px 5% 48px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 50% at 15% 20%, rgba(59,130,246,0.09) 0%, transparent 52%), radial-gradient(ellipse 45% 40% at 85% 15%, rgba(14,165,233,0.07) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1180,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.05fr) minmax(280px, 0.95fr)',
        gap: 'clamp(32px, 5vw, 64px)',
        alignItems: 'center',
      }} className="hero-split">

        {/* 좌측: 메시지 · CTA — 중앙 정렬형 히어로와 구분 */}
        <div style={{ textAlign: 'left', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--mono)', fontSize: '0.68rem', color: '#1e40af',
            letterSpacing: '0.12em', padding: '6px 14px',
            border: '1px solid rgba(37, 99, 235, 0.2)', borderRadius: 4,
            marginBottom: 22, background: 'rgba(255,255,255,0.75)',
            animation: 'fadeUp 0.7s ease both',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb', flexShrink: 0 }} />
            IDC × AI SECURITY × STREAM
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px 10px',
              marginBottom: 14,
              animation: 'fadeUp 0.7s 0.05s ease both',
            }}
            aria-hidden
          >
            {[
              { t: 'IDC', bg: 'rgba(37,99,235,0.11)', bd: 'rgba(37,99,235,0.28)', c: '#1d4ed8' },
              { t: 'AI 보안', bg: 'rgba(217,119,6,0.09)', bd: 'rgba(217,119,6,0.25)', c: '#b45309' },
              { t: 'Ultrastream', bg: 'rgba(14,165,233,0.1)', bd: 'rgba(14,165,233,0.28)', c: '#0369a1' },
            ].map(b => (
              <span
                key={b.t}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  padding: '5px 12px',
                  borderRadius: 999,
                  border: `1px solid ${b.bd}`,
                  background: b.bg,
                  color: b.c,
                }}
              >
                {b.t}
              </span>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2rem, 4.6vw, 3.35rem)',
            fontWeight: 800,
            lineHeight: 1.13,
            letterSpacing: '-0.032em',
            color: 'var(--text)',
            marginBottom: 20,
            animation: 'fadeUp 0.7s 0.08s ease both',
            wordBreak: 'keep-all',
          }}>
            서버부터 라이브 송출까지,<br />
            <span style={{
              background: 'linear-gradient(105deg, #1d4ed8 0%, #0891b2 45%, #4f46e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>한 줄로 연결되는</span>{' '}
            인프라 경험
          </h1>

          <p style={{
            fontSize: '0.96rem',
            color: 'var(--text2)',
            maxWidth: 540,
            lineHeight: 1.82,
            marginBottom: 28,
            animation: 'fadeUp 0.7s 0.15s ease both',
          }}>
            규격서만 같은 구축 대신 — <strong style={{ fontWeight: 700, color: 'var(--text)' }}>IDC 호스팅</strong>,
            실시간에 대응하는 <strong style={{ fontWeight: 700, color: 'var(--text)' }}>AI 보안 레이어</strong>,
            그리고 초저지연 <strong style={{ fontWeight: 700, color: 'var(--text)' }}>Ultrastream 스트리밍 엔진</strong>까지 한 팀에서 맞춤 설계합니다.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            animation: 'fadeUp 0.7s 0.22s ease both',
          }}>
            <a href="#services" style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #0891b2 100%)',
              color: '#fff',
              borderRadius: 999,
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 10px 28px rgba(37,99,235,0.38)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >스택 둘러보기</a>
            <a href="#contact" style={{
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.95)',
              color: '#1e3a8a',
              border: '2px solid rgba(37,99,235,0.45)',
              borderRadius: 999,
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(239,246,255,1)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.borderColor = '#2563eb'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.95)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,99,235,0.45)'
              }}
            >지금 상담하기</a>
          </div>
        </div>

        {/* 우측: 수치·범위 요약 카드 — 랜딩 단일열 히어로와 차별 */}
        <div style={{
          background: '#fff',
          border: '1px solid rgba(37,99,235,0.15)',
          borderRadius: 12,
          boxShadow: '0 24px 48px rgba(15,23,42,0.08)',
          padding: '28px 26px 24px',
          animation: 'fadeUp 0.7s 0.2s ease both',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.12em', marginBottom: 18 }}>
            실시간 운영 스냅샷 · 참고 수치
          </div>
          <dl style={{ margin: 0, padding: 0 }}>
            {[
              { k: '가용성', v: '99.99%', d: 'SLA 목표(서비스별 협의)' },
              { k: '송출 지연', v: '1~2 s', d: 'LL-HLS 기준(환경별 상이)' },
              { k: '대응', v: '24 / 7', d: '보안·장애 창구' },
              { k: '라인업', v: '14+', d: '세부 SKU는 서비스 페이지 참조' },
            ].map(row => (
              <div key={row.k} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 12,
                padding: '14px 0',
                borderBottom: '1px solid rgba(15,23,42,0.06)',
              }}>
                <dt style={{ fontSize: '0.82rem', color: 'var(--text3)', fontWeight: 500, margin: 0 }}>{row.k}</dt>
                <dd style={{ margin: 0, textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '1.25rem', fontWeight: 700, color: '#1d4ed8' }}>{row.v}</span>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text3)', marginTop: 2, maxWidth: 200 }}>{row.d}</div>
                </dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: 18, fontSize: '0.72rem', color: 'var(--text3)', lineHeight: 1.6 }}>
            수치는 대표적인 목표값이며, 산업·규모에 따라 별도 합의가 필요합니다.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
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
