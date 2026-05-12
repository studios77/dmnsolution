import Link from 'next/link'

type ServiceCard = {
  icon: string
  cat: string
  name: string
  slug: string
  desc: string
  tags: string[]
}

const services: ServiceCard[] = [
  { icon: '🏢', cat: 'AIDC / 서버', name: '서버 임대 · 코로케이션', slug: 'server-rental', desc: '지능형 가상화 기반 VM 즉시 할당부터 고객 장비 입주(코로케이션)까지. 전력·냉각·네트워크 포함, IPMI 원격관리.', tags: ['KVM', 'IPMI', 'Bare Metal'] },
  { icon: '⚙️', cat: 'AIDC / MSP', name: '위탁운영 매니지먼트', slug: 'managed-service', desc: 'OS 패치·장애대응·성능튜닝 전담. Zabbix+Grafana 실시간 모니터링, 월 SLA 리포트.', tags: ['Zabbix', 'Ansible', 'Grafana'] },
  { icon: '🔄', cat: 'AIDC / HA', name: '운영서버 이중화 (HA)', slug: 'ha', desc: 'Active-Active/Standby 구성, 자동 페일오버 30초 이내, L4/L7 로드밸런서, 99.99% SLA.', tags: ['Keepalived', 'HAProxy', 'Pacemaker'] },
  { icon: '🗄️', cat: 'AIDC / DB', name: 'DB 이중화 매니지먼트', slug: 'db-cluster', desc: 'Galera Cluster·Master-Slave 구성·모니터링·자동복구 위탁관리. 슬로우쿼리 분석.', tags: ['Galera', 'ProxySQL', 'Percona'] },
  { icon: '🛠️', cat: 'AIDC / 서버', name: '서버 장애 복구 및 이전', slug: 'system-recovery-migration', desc: '당사 AIDC 입주 여부와 무관하게 외부 운영 서버·VM·온프레 환경까지 장애 복구·이전·성능·네트워크 지원. 원격·현장.', tags: ['긴급복구', '이전', '온프레'] },
  { icon: '🛡️', cat: 'AI 보안', name: 'AI 보안 관제', slug: 'ai-security', desc: '365일 24시간 무인 관제. 위협 자동 탐지·분류·대응과 비용 절감을 동시에. 공공·금융·중견기업 특화.', tags: ['24/7', '자동 대응', '컴플라이언스'] },
  { icon: '🤖', cat: 'AI 보안', name: 'AI 자율 관제 에이전트', slug: 'ai-agent', desc: 'LLM 기반 SOC 자동화. Wazuh SIEM·SOAR 플레이북으로 탐지·분석·대응을 자동화합니다.', tags: ['LLM', 'SIEM', 'SOAR'] },
  { icon: '🛰️', cat: 'AI 보안', name: 'AI 스트림 이상탐지', slug: 'ai-stream-security', desc: 'RTMP/HLS 트래픽 머신러닝 분석. 세션 하이재킹·인젝션·DDoS 실시간 탐지 및 자동차단.', tags: ['Python ML', 'MediaMTX', 'Fail2ban'] },
  { icon: '🔍', cat: 'AI 보안', name: '딥페이크 탐지 서비스', slug: 'deepfake-detection', desc: '라이브 스트림 내 AI 합성 영상·음성 실시간 검출. 방송사·기업 미디어 대상 고부가가치.', tags: ['PyTorch', 'ONNX', 'FaceForensics'] },
  { icon: '🌐', cat: 'AI 보안', name: '네트워크 보안 · IDS/IPS', slug: 'network-security', desc: '침입탐지·방지와 ML 보조 이상탐지. 경계·내부 세그먼트 가시화 및 SIEM 연동.', tags: ['Suricata', 'Zeek', 'eBPF'] },
  { icon: '🔐', cat: 'AI 보안', name: '제로트러스트 아키텍처', slug: 'zero-trust', desc: 'ID·디바이스·맥락 기반 최소권한. 마이크로세그먼트·MFA·지속 검증 로드맵.', tags: ['IAM', '세그먼트', 'MFA'] },
  { icon: '📋', cat: 'AI 보안', name: 'LLM 보안 감사', slug: 'llm-security-audit', desc: '생성형 AI 유출·프롬프트 인젝션·RAG 거버넌스 점검. 정책·기술·운영 권고안.', tags: ['프롬프트', '거버넌스', '감사'] },
  { icon: '📡', cat: '스트리밍', name: 'Ultrastream 엔진 호스팅', slug: 'ultrastream', desc: '국내 CDN 대비 빠른 LL-HLS 1~2초 초저지연. 동시 시청자 무제한, 99.99% 가용성 목표.', tags: ['초저지연', '무제한 시청자', '99.99% SLA'] },
  { icon: '🎬', cat: '스트리밍', name: 'VOD 관리 + 멀티 리스트림', slug: 'vod-multistream', desc: 'VOD 저장·썸네일 자동생성. 유튜브·트위치·네이버 동시 송출 자동화.', tags: ['MariaDB', 'Cloudflare', 'FFmpeg'] },
]

const GROUPS: { id: string; anchorId: string; title: string; subtitle: string; slugs: string[] }[] = [
  {
    id: 'idc',
    anchorId: 'services-idc',
    title: 'AIDC · 지능형 서버 인프라',
    subtitle: '지능형 데이터센터 입주·위탁운영·이중화·DB·장애 복구. AIDC만 단독으로 문의·계약할 수 있습니다.',
    slugs: ['server-rental', 'managed-service', 'ha', 'db-cluster', 'system-recovery-migration'],
  },
  {
    id: 'security',
    anchorId: 'services-security',
    title: 'AI 보안 · 지능형 거버넌스',
    subtitle: '24/7 관제, 이상·딥페이크 탐지, 네트워크·제로트러스트, LLM 감사. 보안 도메인은 인프라·스트리밍과 독립된 전문 서비스입니다.',
    slugs: ['ai-security', 'ai-agent', 'ai-stream-security', 'deepfake-detection', 'network-security', 'zero-trust', 'llm-security-audit'],
  },
  {
    id: 'media',
    anchorId: 'services-streaming',
    title: '라이브 스트리밍 · 미디어',
    subtitle: 'Ultrastream 엔진·VOD·멀티 송출. 송출 품질·채널 수는 스트리밍 상품 기준으로 산정합니다.',
    slugs: ['ultrastream', 'vod-multistream'],
  },
]

function cardFor(slug: string): ServiceCard | undefined {
  return services.find(s => s.slug === slug)
}

export default function Services() {
  return (
    <section id="services" style={{ 
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)', 
      position: 'relative', 
      zIndex: 1,
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 5% 120px' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{ 
            fontFamily: 'var(--mono)', 
            fontSize: '0.75rem', 
            color: 'var(--accent)', 
            letterSpacing: '0.15em', 
            marginBottom: 16,
            textTransform: 'uppercase',
            fontWeight: 600
          }}>
            ✦ 전문 서비스 포트폴리오 ✦
          </div>
          <h2 style={{ 
            fontFamily: 'var(--display)', 
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', 
            fontWeight: 800, 
            lineHeight: 1.1, 
            letterSpacing: '-0.02em', 
            color: 'var(--text)', 
            marginBottom: 24,
            background: 'linear-gradient(135deg, var(--text) 0%, var(--accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            3개 분야 × 전문 서비스
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text2)', 
            maxWidth: 720, 
            lineHeight: 1.8,
            margin: '0 auto',
            fontWeight: 500,
          }}>
            <strong style={{ color: 'var(--accent)', fontWeight: 700 }}>AIDC</strong>, <strong style={{ color: 'var(--accent)', fontWeight: 700 }}>AI 보안</strong>, <strong style={{ color: 'var(--accent)', fontWeight: 700 }}>스트리밍</strong> — 각 분야별 전문가가 독립적으로 운영하는 특화 서비스입니다.<br />
            복합 도입 시에도 <strong style={{ color: 'var(--text)' }}>분야별 전담 관리</strong>로 최적화된 솔루션을 제공합니다.
          </p>
        </div>

        {GROUPS.map((g, gi) => (
          <div key={g.id} id={g.anchorId} style={{ marginTop: gi === 0 ? 0 : 80, scrollMarginTop: 88 }}>
            <div style={{ 
              marginBottom: 40, 
              padding: '32px', 
              background: 'var(--surface)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 16,
              }}>
                <div style={{
                  width: 4,
                  height: 40,
                  background: `linear-gradient(180deg, ${gi === 0 ? '#3b82f6' : gi === 1 ? '#22c55e' : '#8b5cf6'} 0%, ${gi === 0 ? '#1d4ed8' : gi === 1 ? '#16a34a' : '#7c3aed'} 100%)`,
                  borderRadius: 2,
                }} />
                <div>
                  <h3 style={{ 
                    fontFamily: 'var(--display)', 
                    fontSize: '1.5rem', 
                    fontWeight: 800, 
                    color: 'var(--text)', 
                    marginBottom: 8, 
                    letterSpacing: '-0.02em' 
                  }}>{g.title}</h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: 'var(--text2)', 
                    margin: 0,
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}>{g.subtitle}</p>
                </div>
              </div>
              <div className="reveal" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 24,
              }}>
              {g.slugs.map(slug => {
                const s = cardFor(slug)
                if (!s) return null
                return (
                  <Link key={s.slug} href={`/services/${s.slug}/`} title={s.name} style={{ textDecoration: 'none', minWidth: 0 }}>
                    <div style={{
                      background: '#ffffff',
                      padding: '32px 28px',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 16,
                      border: '2px solid var(--border)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.transform = 'translateY(-8px)'
                        el.style.boxShadow = '0 16px 40px rgba(59, 130, 246, 0.15)'
                        el.style.borderColor = 'var(--accent)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.transform = 'translateY(0)'
                        el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
                        el.style.borderColor = 'var(--border)'
                      }}
                    >
                      <div style={{ 
                        fontSize: '2.5rem', 
                        marginBottom: 16, 
                        textAlign: 'center',
                        filter: 'grayscale(0.3)',
                      }} aria-hidden>{s.icon}</div>
                      
                      <div style={{ 
                        fontFamily: 'var(--mono)', 
                        fontSize: '0.7rem', 
                        color: 'var(--accent)', 
                        letterSpacing: '0.1em', 
                        marginBottom: 12, 
                        fontWeight: 700,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        background: 'var(--accent-soft)',
                        padding: '6px 12px',
                        borderRadius: 20,
                        display: 'inline-block',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}>{s.cat}</div>
                      
                      <h4 style={{ 
                        fontFamily: 'var(--display)', 
                        fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', 
                        fontWeight: 800, 
                        color: '#0f172a', 
                        marginBottom: 16, 
                        lineHeight: 1.3,
                        textAlign: 'center',
                      }}>{s.name}</h4>
                      
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: '#475569', 
                        lineHeight: 1.7, 
                        marginBottom: 20, 
                        wordBreak: 'keep-all',
                        textAlign: 'center',
                        fontWeight: 500,
                      }}>{s.desc}</p>
                      
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 8,
                        justifyContent: 'center',
                        marginBottom: 20,
                      }}>
                        {s.tags.map(t => (
                          <span key={t} style={{ 
                            fontFamily: 'var(--mono)', 
                            fontSize: '0.65rem', 
                            padding: '6px 12px', 
                            background: '#f1f5f9', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: 20, 
                            color: '#475569',
                            fontWeight: 600,
                          }}>{t}</span>
                        ))}
                      </div>
                      
                      <div style={{ 
                        marginTop: 'auto',
                        textAlign: 'center',
                        padding: '12px 0',
                        borderTop: '1px solid #f1f5f9',
                      }}>
                        <span style={{ 
                          fontFamily: 'var(--sans)', 
                          fontSize: '0.85rem', 
                          color: 'var(--accent)', 
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                        }}>
                          상세 보기 · 스펙 확인
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
