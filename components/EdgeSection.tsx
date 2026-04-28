'use client'
import Link from 'next/link'

const edges = [
  {
    badge: '01 · 딥페이크 탐지',
    icon: '🔍',
    title: '실시간 딥페이크 탐지',
    subtitle: '라이브 스트림 특화',
    desc: '방송 중 AI 합성 영상·음성을 프레임·오디오 단위로 검출합니다. CNN+LSTM 기반으로 탐지율 95% 이상을 목표로 하며, 사후 영상만 보는 방식이 아니라 송출 직전·직후에 막을 수 있게 구성합니다.',
    stats: [
      { val: '95%+', label: '탐지 정확도' },
      { val: '<1s', label: '감지→조치' },
      { val: '24/7', label: '무인 감시' },
    ],
    highlight: '선거·금융 설명·기업 공지 등 신뢰가 곧 서비스인 화면에 맞춥니다.',
    color: '#c2410c',
  },
  {
    badge: '02 · AI 자율 관제',
    icon: '🤖',
    title: 'LLM 기반 AI 보안 관제',
    subtitle: '시그니처만이 아닌 맥락',
    desc: '고정 룰만으로는 놓치는 연쇄 공격·이상 징후를 SIEM·SOAR와 LLM이 함께 읽습니다. 야간 인력을 늘리지 않고도 엔터프라이즈 수준의 대응 절차에 가깝게 맞출 수 있습니다.',
    stats: [
      { val: '50+', label: '자동 시나리오' },
      { val: '90%', label: '관제비 절감(사례)' },
      { val: '<5분', label: '위협→격리' },
    ],
    highlight: '보안 전담 인력이 부족한 조직도 도입·운영 현실을 맞춥니다.',
    color: '#0f766e',
    link: '/services/ai-security/',
  },
  {
    badge: '03 · 초저지연 스트리밍',
    icon: '📡',
    title: 'LL-HLS 1~2초대',
    subtitle: '일반 CDN HLS 대비 체감 지연 축소',
    desc: '국내 일반 CDN HLS는 종종 5~15초대 지연이 납니다. Ultrastream은 LL-HLS로 1~2초대를 목표로 해 라이브커머스·중계·실시간 이벤트에서 체감 차이를 만듭니다.',
    stats: [
      { val: '1~2s', label: '목표 지연' },
      { val: '80%', label: '비용 절감(사례)' },
      { val: '∞', label: '동시 시청' },
    ],
    highlight: '스포츠·라이브커머스·실시간 경매처럼 초 단위가 매출·신뢰로 이어지는 경우에 적합합니다.',
    color: '#a16207',
    link: '/services/ultrastream/',
  },
]

const trustStats = [
  { val: '99.99%', label: '서비스 가용성 SLA' },
  { val: '24/7', label: 'AI 보안 관제' },
  { val: '<30초', label: 'HA 페일오버' },
  { val: '95%+', label: '딥페이크 탐지' },
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
            검증 · 관제 · 송출
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.95rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 16 }}>
            라이브 시대에 반복되는<br />
            <span style={{ color: 'var(--accent)' }}>세 가지 숙제</span>를 함께 봅니다
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', lineHeight: 1.78, maxWidth: 620 }}>
            “지금 이 영상이 진짜냐”, “서버에 무슨 일이냐”, “왜 이렇게 늦게 보이냐” — 검측·보안·송출은 따로 사면 이음새에서 깨집니다. DMN솔루션은 세 축을 한 구성으로 설계할 수 있게 제품을 묶었습니다.
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
                {e.link && (
                  <Link href={e.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600, color: e.color, textDecoration: 'none', borderBottom: `1px solid ${e.color}88`, paddingBottom: 2 }}>
                    서비스 상세 보기 →
                  </Link>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {e.stats.map((s, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 20px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 2 }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 800, color: e.color, letterSpacing: '-0.03em', lineHeight: 1, flexShrink: 0 }}>
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
            검증된 수치 (목표·참고)
          </div>
          <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 2, overflow: 'hidden' }}>
            {trustStats.map((t, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 8 }}>
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
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
