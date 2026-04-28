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
  { icon: '🏢', cat: 'IDC / 서버', name: '서버 임대 · 코로케이션', slug: 'server-rental', desc: '가상화 기반 VM 즉시 할당부터 고객 장비 입주(코로케이션)까지. 전력·냉각·네트워크 포함, IPMI 원격관리.', tags: ['KVM','IPMI','Bare Metal'] },
  { icon: '⚙️', cat: 'IDC / MSP', name: '위탁운영 매니지먼트', slug: 'managed-service', desc: 'OS 패치·장애대응·성능튜닝 전담. Zabbix+Grafana 실시간 모니터링, 월 SLA 리포트.', tags: ['Zabbix','Ansible','Grafana'] },
  { icon: '🔄', cat: 'IDC / HA', name: '운영서버 이중화 (HA)', slug: 'ha', desc: 'Active-Active/Standby 구성, 자동 페일오버 30초 이내, L4/L7 로드밸런서, 99.99% SLA.', tags: ['Keepalived','HAProxy','Pacemaker'] },
  { icon: '🗄️', cat: 'IDC / DB', name: 'DB 이중화 매니지먼트', slug: 'db-cluster', desc: 'Galera Cluster·Master-Slave 구성·모니터링·자동복구 위탁관리. 슬로우쿼리 분석.', tags: ['Galera','ProxySQL','Percona'] },
  { icon: '🛠️', cat: 'IDC / 서버', name: '서버 장애 복구 및 이전', slug: 'system-recovery-migration', desc: '당사 IDC 입주 여부와 무관하게, 외부 고객이 운영 중인 서버·VM·온프레 환경에 대해 서비스가 필요한 고객이 요청 시 장애 복구, 이전, 성능·네트워크 TS. 원격·현장.', tags: ['긴급복구','이전','온프레'] },
  { icon: '🛡️', cat: 'AI 보안', name: 'AI 보안 관제', slug: 'ai-security', desc: '365일 24시간 무인 관제. 위협 자동 탐지·분류·대응과 비용 절감을 동시에. 공공·금융·중견기업 특화.', tags: ['24/7','자동 대응','컴플라이언스'] },
  { icon: '🤖', cat: 'AI 보안', name: 'AI 자율 관제 에이전트', slug: 'ai-agent', desc: 'LLM 기반 SOC 자동화. Wazuh SIEM·SOAR 플레이북으로 탐지→분석→대응까지 연결.', tags: ['LLM','SIEM','SOAR'] },
  { icon: '🛰️', cat: 'AI 보안', name: 'AI 스트림 이상탐지', slug: 'ai-stream-security', desc: 'RTMP/HLS 트래픽 머신러닝 분석. 세션 하이재킹·인젝션·DDoS 실시간 탐지 및 자동차단.', tags: ['Python ML','MediaMTX','Fail2ban'] },
  { icon: '🔍', cat: 'AI 보안', name: '딥페이크 탐지 서비스', slug: 'deepfake-detection', desc: '라이브 스트림 내 AI 합성 영상·음성 실시간 검출. 방송사·기업 미디어 대상 고부가가치.', tags: ['PyTorch','ONNX','FaceForensics'] },
  { icon: '🌐', cat: 'AI 보안', name: '네트워크 보안 · IDS/IPS', slug: 'network-security', desc: '침입탐지·방지와 ML 보조 이상탐지. 경계·내부 세그먼트 가시화 및 SIEM 연동.', tags: ['Suricata','Zeek','eBPF'] },
  { icon: '🔐', cat: 'AI 보안', name: '제로트러스트 아키텍처', slug: 'zero-trust', desc: 'ID·디바이스·맥락 기반 최소권한. 마이크로세그먼트·MFA·지속 검증 로드맵.', tags: ['IAM','세그먼트','MFA'] },
  { icon: '📋', cat: 'AI 보안', name: 'LLM 보안 감사', slug: 'llm-security-audit', desc: '생성형 AI 유출·프롬프트 인젝션·RAG 거버넌스 점검. 정책·기술·운영 권고안.', tags: ['프롬프트','거버넌스','감사'] },
  { icon: '📡', cat: '스트리밍', name: 'Ultrastream 엔진 호스팅', slug: 'ultrastream', desc: '국내 CDN 대비 10배 빠른 LL-HLS 1~2초 초저지연. 공공기관·기업·방송사·라이브커머스 전용. 동시 시청자 무제한, 99.99% 가용성.', tags: ['초저지연','무제한 시청자','99.99% SLA'] },
  { icon: '🎬', cat: '스트리밍', name: 'VOD 관리 + 멀티 리스트림', slug: 'vod-multistream', desc: 'VOD 저장·썸네일 자동생성. 유튜브·트위치·네이버 동시 송출 자동화.', tags: ['MariaDB','Cloudflare','FFmpeg'] },
]

const GROUPS: { id: string; title: string; subtitle: string; slugs: string[] }[] = [
  {
    id: 'infra',
    title: '호스팅 · 운영',
    subtitle: 'IDC, 위탁운영, 이중화, 복구',
    slugs: ['server-rental', 'managed-service', 'ha', 'db-cluster', 'system-recovery-migration'],
  },
  {
    id: 'security',
    title: '보안 · 거버넌스',
    subtitle: '관제, 이상탐지, 제로트러스트, LLM 감사',
    slugs: ['ai-security', 'ai-agent', 'ai-stream-security', 'deepfake-detection', 'network-security', 'zero-trust', 'llm-security-audit'],
  },
  {
    id: 'media',
    title: '미디어 · 송출',
    subtitle: '저지연 스트림, 멀티 플랫폼',
    slugs: ['ultrastream', 'vod-multistream'],
  },
]

function cardFor(slug: string): ServiceCard | undefined {
  return services.find(s => s.slug === slug)
}

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 5% 100px' }}>
        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: '#b45309', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
            Portfolio
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.75rem,4vw,2.65rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 12 }}>
            사업 라인별 구성안
          </h2>
          <p style={{ fontSize: '0.94rem', color: 'var(--text2)', maxWidth: 560, lineHeight: 1.8 }}>
            카테고리별로 필요한 SKU만 선택하거나 통합 패키지로 제안합니다. 모든 항목은 상세 페이지에서 규격·도입 조건을 확인할 수 있습니다.
          </p>
        </div>

        {GROUPS.map((g, gi) => (
          <div key={g.id} style={{ marginTop: gi === 0 ? 48 : 56 }}>
            <div style={{ marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid rgba(37,99,235,0.12)' }}>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{g.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text3)', margin: 0 }}>{g.subtitle}</p>
            </div>
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 18,
            }}>
              {g.slugs.map(slug => {
                const s = cardFor(slug)
                if (!s) return null
                return (
                  <Link key={s.slug} href={`/services/${s.slug}/`} title={s.name} style={{ textDecoration: 'none', minWidth: 0 }}>
                    <div style={{
                      background: gi % 2 === 0 ? 'rgba(255,255,255,0.92)' : 'rgba(248,250,255,0.95)',
                      padding: '28px 22px',
                      height: '100%',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 10,
                      border: '1px solid rgba(37,99,235,0.1)',
                      boxShadow: '0 4px 16px rgba(15,23,42,0.04)',
                    }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.transform = 'translateY(-3px)'
                        el.style.boxShadow = '0 12px 28px rgba(37,99,235,0.12)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.transform = 'translateY(0)'
                        el.style.boxShadow = '0 4px 16px rgba(15,23,42,0.04)'
                      }}
                    >
                      <div style={{ fontSize: '1.25rem', marginBottom: 14 }} aria-hidden>{s.icon}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.06em', marginBottom: 8, fontWeight: 600 }}>{s.cat}</div>
                      <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1rem, 2vw, 1.08rem)', fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.35 }}>{s.name}</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text2)', lineHeight: 1.62, marginBottom: 16, wordBreak: 'keep-all' }}>{s.desc}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {s.tags.map(t => (
                          <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', padding: '3px 8px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)', borderRadius: 4, color: 'var(--text3)' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ marginTop: 18, fontFamily: 'var(--mono)', fontSize: '0.72rem', color: '#2563eb', fontWeight: 600 }}>
                        상세 보기 →
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
