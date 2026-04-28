'use client'
import Link from 'next/link'

const edges = [
  {
    badge: '01 · IDC · 서버',
    icon: '🏢',
    title: '데이터센터와 운영 안정성',
    subtitle: '인프라 전용 상품',
    desc: '코로케이션·전용 임대·위탁운영(OS·패치·장애)과 HA·DB 클러스터·이전·복구까지, IDC 범위 안에서 설계합니다. 송출 품질이나 AI 모델과 섞지 않고, 가용성·RTO·RPO 기준으로 잡습니다.',
    stats: [
      { val: '99.99%', label: '가용 목표' },
      { val: '<30s', label: 'HA 페일오버' },
      { val: '24/7', label: '장애 대응' },
    ],
    highlight: '“서버와 망만 안정되면 된다”는 조직은 이 라인만 단독으로 검토할 수 있습니다.',
    color: '#0ea5e9',
    link: '/services/server-rental/',
  },
  {
    badge: '02 · AI 보안',
    icon: '🛡️',
    title: '탐지·관제·거버넌스',
    subtitle: '보안 전용 상품',
    desc: 'AI 보안 관제, LLM·SIEM·SOAR, 딥페이크·스트림 이상탐지, 네트워크 IDS/IPS, 제로트러스트, LLM 감사 등. 인프라 용량이나 송출 채널 수와 별도로, 보안 범위·컴플라이언스에 맞춰 견적합니다.',
    stats: [
      { val: '24/7', label: '관제(옵션)' },
      { val: '95%+', label: '탐지 목표' },
      { val: '<5m', label: '위협 격리' },
    ],
    highlight: '“보안만 강화하고 싶다”면 AI 보안 라인만 도입·확장할 수 있습니다.',
    color: '#16a34a',
    link: '/services/ai-security/',
  },
  {
    badge: '03 · 스트리밍',
    icon: '📡',
    title: '초저지연 · 멀티 송출',
    subtitle: '미디어 전용 상품',
    desc: 'Ultrastream 엔진 기반 LL-HLS(1~2초대 목표), VOD·썸네일, 유튜브·트위치 등 멀티 리스트림. 시청 품질·채널·트래픽을 기준으로 하며, IDC·보안과는 별도 상품 견적입니다.',
    stats: [
      { val: '1~2s', label: 'LL-HLS' },
      { val: '80%', label: '비용 절감(사례)' },
      { val: '∞', label: '동시 시청' },
    ],
    highlight: '라이브·커머스·중계에 맞는 송출만 단독으로 쓰는 것도 가능합니다.',
    color: '#a78bfa',
    link: '/services/ultrastream/',
  },
]

const lineStats = [
  { line: 'IDC', val: '99.99%', label: '가용·SLA' },
  { line: 'AI 보안', val: '24/7', label: '관제(옵션)' },
  { line: '스트리밍', val: '1~2s', label: '지연 목표' },
]

const sectors = [
  { icon: '🏛️', label: '공공 · 지자체' },
  { icon: '🏦', label: '금융 · 핀테크' },
  { icon: '📺', label: '방송 · OTT' },
  { icon: '🛒', label: '이커머스 · 라이브커머스' },
  { icon: '🎮', label: '게임 · 미디어' },
  { icon: '🏥', label: '의료 · 헬스' },
  { icon: '🎓', label: '교육 · 에듀' },
  { icon: '🏢', label: '중견 · 중소' },
]

export default function EdgeSection() {
  return (
    <section style={{ background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 5%' }}>

        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
            분야별 과제
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.95rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 16 }}>
            세 가지 질문은<br />
            <span style={{ color: 'var(--accent)' }}>서로 다른 서비스</span>로 답합니다
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', lineHeight: 1.78, maxWidth: 640 }}>
            서버가 버티느냐, 위협을 잡느냐, 화면이 빠르게 도착하느냐 — 과제마다 측정 지표가 다릅니다. DMN솔루션은 IDC·AI 보안·스트리밍을{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>연결된 패키지가 아니라</strong> 각각의 상품으로 제안합니다. 여러 분야를 함께 쓰는 경우에도 견적과 운영 범위는 나눕니다.
          </p>
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 56 }}>
          {edges.map((e, i) => (
            <div key={i} className="edge-card" style={{
              background: 'var(--surface)',
              border: '2px solid var(--border)',
              borderRadius: 2,
              padding: '32px 32px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 40,
              alignItems: 'center',
              transition: 'border-color 0.25s, box-shadow 0.25s',
              boxShadow: '6px 6px 0 rgba(20,18,17,0.04)',
            }}
              onMouseEnter={e2 => {
                (e2.currentTarget as HTMLDivElement).style.borderColor = e.color
                ;(e2.currentTarget as HTMLDivElement).style.boxShadow = `8px 8px 0 ${e.color}22`
              }}
              onMouseLeave={e2 => {
                (e2.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                ;(e2.currentTarget as HTMLDivElement).style.boxShadow = '6px 6px 0 rgba(20,18,17,0.04)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: e.color, letterSpacing: '0.08em', border: `1px solid ${e.color}`, borderRadius: 2, padding: '4px 12px' }}>
                    {e.badge}
                  </span>
                </div>
                <div style={{ fontSize: '1.75rem', marginBottom: 8 }}>{e.icon}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.42rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 6 }}>
                  {e.title}
                </h3>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: e.color, marginBottom: 14, letterSpacing: '0.06em' }}>
                  {e.subtitle}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.75 }}>
                  {e.desc}
                </p>
                <div style={{ marginTop: 16, padding: '12px 14px', background: 'var(--accent-soft)', borderLeft: `3px solid ${e.color}`, borderRadius: '0 2px 2px 0', fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.6 }}>
                  {e.highlight}
                </div>
                <Link href={e.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600, color: e.color, textDecoration: 'none', borderBottom: `1px solid ${e.color}88`, paddingBottom: 2 }}>
                  분야 상세 보기 →
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {e.stats.map((s, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 20px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 2 }}>
                    <div className="stat-num" style={{ fontSize: '2rem', fontWeight: 700, color: e.color, letterSpacing: '0.02em', lineHeight: 1, flexShrink: 0 }}>
                      {s.val}
                    </div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: 'var(--text2)', fontWeight: 600, lineHeight: 1.45 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 72 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent2)', letterSpacing: '0.12em', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 28, height: 1, background: 'var(--accent2)', display: 'inline-block' }} />
            분야별 참고 지표 (목표·협의)
          </div>
          <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 2, overflow: 'hidden' }}>
            {lineStats.map((t, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em', marginBottom: 10 }}>
                  {t.line}
                </div>
                <div className="stat-num" style={{ fontSize: '1.9rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.02em', marginBottom: 8 }}>
                  {t.val}
                </div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'var(--text3)', lineHeight: 1.45 }}>
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 56 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent2)', letterSpacing: '0.12em', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 28, height: 1, background: 'var(--accent2)', display: 'inline-block' }} />
            도입이 많은 분야
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {sectors.map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 2,
                fontSize: '0.8rem',
                color: 'var(--text2)',
                fontFamily: 'var(--sans)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'
                  ;(e.currentTarget as HTMLDivElement).style.color = 'var(--text)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.color = 'var(--text2)'
                }}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:768px){
          .edge-card { grid-template-columns: 1fr !important; gap: 28px !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
