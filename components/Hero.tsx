const lines = [
  { href: '#services-idc', label: 'AIDC · 서버', hint: '지능형 IDC · MSP · HA' },
  { href: '#services-security', label: 'AI 보안', hint: '관제 · 탐지 · 거버넌스' },
  { href: '#services-streaming', label: '라이브 스트리밍', hint: 'Ultrastream · LL-HLS' },
]

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
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
    }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.45,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
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
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
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
            fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--accent)',
            letterSpacing: '0.1em', padding: '8px 16px', marginBottom: 18,
            borderRadius: 12,
            border: '1px solid rgba(59, 130, 246, 0.3)',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeUp 0.7s ease both',
          }}>
            SPECIALIZED SERVICE DOMAINS — 독립 운영 · 전문화 계약
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
                  padding: '12px 16px',
                  borderRadius: 12,
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  background: 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(12px)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59, 130, 246, 0.4)'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(30, 41, 59, 0.8)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148, 163, 184, 0.2)'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(30, 41, 59, 0.6)'
                }}
              >
                <span style={{ fontFamily: 'var(--sans)', fontSize: '1.02rem', fontWeight: 700, color: '#f1f5f9' }}>{row.label}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: '#cbd5e1', textAlign: 'right', lineHeight: 1.35 }}>{row.hint}</span>
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
            AIDC, AI 보안, 스트리밍을<br />
            <span style={{ color: 'var(--accent)' }}>각 분야별 전문서비스</span>로 제공합니다
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--hero-muted)',
            maxWidth: 560,
            lineHeight: 1.75,
            marginBottom: 26,
            animation: 'fadeUp 0.7s 0.16s ease both',
          }}>
            세 분야는 각각 전문화된 목표·SLA·운영 체계를 갖추고 있습니다. 인프라만, 보안만, 송출만 — 필요한 도메인만 선택해 맞춤형 스펙과 견적을 받으실 수 있습니다. (복수 분야 동시 도입 시에도{' '}
            <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>분야별로</strong> 구분해 제안합니다.)
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            animation: 'fadeUp 0.7s 0.22s ease both',
          }}>
            <a href="#services" style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              color: 'white',
              borderRadius: 12,
              fontFamily: 'var(--sans)',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s ease',
              border: 'none',
            }}
              onMouseEnter={e => { 
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(59, 130, 246, 0.4)'
              }}
              onMouseLeave={e => { 
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.3)'
              }}
            >분야별 서비스 보기</a>
            <a href="#contact" style={{
              padding: '16px 32px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 12,
              fontFamily: 'var(--sans)',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(59, 130, 246, 0.5)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.1)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >분야 지정 문의</a>
          </div>

          {/* Service Images */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            marginTop: 32,
            animation: 'fadeUp 0.7s 0.28s ease both',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              opacity: 0.8,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8' }}
            >
              <img src="/images/idc-infrastructure.svg" alt="AIDC Infrastructure" style={{
                width: 90,
                height: 70,
                borderRadius: 16,
                border: '1px solid rgba(59, 130, 246, 0.2)',
                background: 'rgba(30, 41, 59, 0.4)',
                padding: 12,
                backdropFilter: 'blur(8px)',
              }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontFamily: 'var(--sans)', fontWeight: 500 }}>AIDC</span>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              opacity: 0.8,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8' }}
            >
              <img src="/images/ai-security.svg" alt="AI Security" style={{
                width: 90,
                height: 70,
                borderRadius: 16,
                border: '1px solid rgba(34, 197, 94, 0.2)',
                background: 'rgba(30, 41, 59, 0.4)',
                padding: 12,
                backdropFilter: 'blur(8px)',
              }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontFamily: 'var(--sans)', fontWeight: 500 }}>AI SECURITY</span>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              opacity: 0.8,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8' }}
            >
              <img src="/images/streaming-engine.svg" alt="Streaming Engine" style={{
                width: 90,
                height: 70,
                borderRadius: 16,
                border: '1px solid rgba(139, 92, 246, 0.2)',
                background: 'rgba(30, 41, 59, 0.4)',
                padding: 12,
                backdropFilter: 'blur(8px)',
              }} />
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontFamily: 'var(--sans)', fontWeight: 500 }}>STREAMING</span>
            </div>
          </div>
        </div>

        <aside style={{
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: 20,
          boxShadow: '0 32px 64px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
          padding: '32px 28px 28px',
          animation: 'fadeUp 0.7s 0.22s ease both',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 18, fontWeight: 600 }}>
            분야별 요약 (참고)
          </div>
          {[
            {
              title: 'AIDC · 서버',
              color: '#38bdf8',
              items: [
                { k: '가용·SLA', v: '99.99%', d: '지능형 인프라별' },
                { k: 'HA', v: '<30s', d: '자동 페일오버' },
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
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', fontWeight: 700, color: block.color, letterSpacing: '0.05em', marginBottom: 12 }}>
                {block.title}
              </div>
              {block.items.map(row => (
                <div
                  key={row.k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 12,
                    padding: '8px 0',
                  }}
                >
                  <span style={{ fontSize: '0.88rem', color: '#cbd5e1', fontWeight: 600 }}>{row.k}</span>
                  <span style={{ textAlign: 'right' }}>
                    <span className="stat-num" style={{ display: 'block', fontSize: '1.28rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.01em' }}>{row.v}</span>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginTop: 3, lineHeight: 1.35, fontFamily: 'var(--sans)' }}>{row.d}</div>
                  </span>
                </div>
              ))}
            </div>
          ))}
          <p style={{ margin: 0, fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.55, fontFamily: 'var(--mono)' }}>
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
