const lines = [
  { href: '#services-idc', label: 'IDC · 서버', hint: '코로케이션 · MSP · HA' },
  { href: '#services-security', label: 'AI 보안', hint: '관제 · 탐지 · 거버넌스' },
  { href: '#services-streaming', label: '라이브 스트리밍', hint: 'Ultrastream · LL-HLS' },
]

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: 'min(100vh, 920px)',
      display: 'flex',
      alignItems: 'center',
      padding: '124px 5% 64px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(165deg, #030712 0%, #0f172a 42%, #111827 100%)',
      borderBottom: '1px solid rgba(34, 197, 94, 0.18)',
    }}>
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
            letterSpacing: '0.12em', padding: '6px 14px', marginBottom: 18,
            borderRadius: 6,
            border: '1px solid rgba(34, 197, 94, 0.35)',
            background: 'rgba(34, 197, 94, 0.08)',
            animation: 'fadeUp 0.7s ease both',
          }}>
            THREE SERVICE LINES — 별도 견적 · 별도 계약
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginBottom: 22,
              animation: 'fadeUp 0.7s 0.05s ease both',
            }}
          >
            {lines.map(row => (
              <a
                key={row.href}
                href={row.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: '1px solid rgba(148, 163, 184, 0.25)',
                  background: 'rgba(15, 23, 42, 0.55)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34, 197, 94, 0.45)'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(15, 23, 42, 0.85)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148, 163, 184, 0.25)'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(15, 23, 42, 0.55)'
                }}
              >
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9' }}>{row.label}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: '#94a3b8', textAlign: 'right' }}>{row.hint}</span>
              </a>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.035em',
            color: 'var(--hero-text)',
            marginBottom: 20,
            animation: 'fadeUp 0.7s 0.1s ease both',
          }}>
            IDC, AI 보안, 스트리밍을<br />
            <span style={{ color: 'var(--accent)' }}>각각의 서비스</span>로 도입합니다
          </h1>

          <p style={{
            fontSize: '0.96rem',
            color: 'var(--hero-muted)',
            maxWidth: 540,
            lineHeight: 1.78,
            marginBottom: 26,
            animation: 'fadeUp 0.7s 0.16s ease both',
          }}>
            세 사업은 서로 다른 목표·SLA·운영 방식을 가집니다. 인프라만, 보안만, 송출만 — 필요한 라인만 골라 상세 스펙과 견적을 받을 수 있습니다. (여러 분야를 동시에 쓰는 경우에도{' '}
            <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>항목별로</strong> 구분해 제안합니다.)
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
            >분야별 서비스 보기</a>
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
            >분야 지정 문의</a>
          </div>
        </div>

        <aside style={{
          background: 'rgba(15, 23, 42, 0.72)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(34, 197, 94, 0.22)',
          borderRadius: 12,
          boxShadow: '0 24px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
          padding: '24px 22px 20px',
          animation: 'fadeUp 0.7s 0.22s ease both',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 16 }}>
            분야별 요약 (참고)
          </div>
          {[
            {
              title: 'IDC · 서버',
              color: '#38bdf8',
              items: [
                { k: '가용·SLA', v: '99.99%', d: '인프라·계약별' },
                { k: 'HA', v: '<30s', d: '페일오버 목표' },
              ],
            },
            {
              title: 'AI 보안',
              color: '#22c55e',
              items: [
                { k: '관제', v: '24/7', d: '옵션·범위별' },
                { k: '탐지', v: '95%+', d: '딥페이크 등 목표' },
              ],
            },
            {
              title: '스트리밍',
              color: '#a78bfa',
              items: [
                { k: '지연', v: '1~2s', d: 'LL-HLS' },
                { k: '엔진', v: 'Ultrastream', d: '채널·용량 별도' },
              ],
            },
          ].map(block => (
            <div
              key={block.title}
              style={{
                marginBottom: 16,
                paddingBottom: 16,
                borderBottom: '1px solid rgba(51, 65, 85, 0.65)',
              }}
            >
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', fontWeight: 700, color: block.color, letterSpacing: '0.06em', marginBottom: 10 }}>
                {block.title}
              </div>
              {block.items.map(row => (
                <div
                  key={row.k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 10,
                    padding: '6px 0',
                  }}
                >
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 500 }}>{row.k}</span>
                  <span style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'var(--display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{row.v}</span>
                    <div style={{ fontSize: '0.6rem', color: '#64748b', marginTop: 1 }}>{row.d}</div>
                  </span>
                </div>
              ))}
            </div>
          ))}
          <p style={{ margin: 0, fontSize: '0.62rem', color: '#64748b', lineHeight: 1.55, fontFamily: 'var(--mono)' }}>
            실제 수치·범위는 견적서·SLA를 따릅니다.
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
