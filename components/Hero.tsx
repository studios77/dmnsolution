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
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb' }} />
            B2B IT · Security · Broadcasting
          </div>

          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(1.95rem, 4.2vw, 3.15rem)',
            fontWeight: 700,
            lineHeight: 1.18,
            letterSpacing: '-0.028em',
            color: 'var(--text)',
            marginBottom: 20,
            animation: 'fadeUp 0.7s 0.08s ease both',
            wordBreak: 'keep-all',
          }}>
            운영 부담을 줄이고,<br />
            <span style={{ color: '#1d4ed8' }}>안정적인 IT 기반을</span> 제공합니다
          </h1>

          <p style={{
            fontSize: '0.98rem',
            color: 'var(--text2)',
            maxWidth: 520,
            lineHeight: 1.82,
            marginBottom: 28,
            animation: 'fadeUp 0.7s 0.15s ease both',
          }}>
            호스팅·보안관제·송출까지 분산하지 않고 단일 채널로 문의와 운영을 이어 드립니다.
            규모에 맞는 구성부터 확장까지 함께 설계합니다.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            animation: 'fadeUp 0.7s 0.22s ease both',
          }}>
            <a href="#services" style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: '#fff',
              borderRadius: 6,
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(37,99,235,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >업무 분야 확인</a>
            <a href="#contact" style={{
              padding: '14px 28px',
              background: '#fff',
              color: 'var(--text)',
              border: '1px solid rgba(37,99,235,0.35)',
              borderRadius: 6,
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(239,246,255,1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff' }}
            >견적·상담 요청</a>
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
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.14em', marginBottom: 18, textTransform: 'uppercase' }}>
            운영 지표 · 범위
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
