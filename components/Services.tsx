import Link from 'next/link'

type ServiceCard = {
  icon: string
  cat: string
  catEn: string
  name: string
  titleEn: string
  slug: string
  desc: string
  descEn: string
  tags: string[]
}

const services: ServiceCard[] = [
  { icon: '🏢', cat: 'IDC / 서버', catEn: 'IDC · Hosting', name: '서버 임대 · 코로케이션', titleEn: 'Colocation & bare metal', slug: 'server-rental', desc: '가상화 기반 VM 즉시 할당부터 고객 장비 입주(코로케이션)까지. 전력·냉각·네트워크 포함, IPMI 원격관리.', descEn: 'VMs to full racks. Power, cooling, network, IPMI out-of-band — one contract.', tags: ['KVM', 'IPMI', 'Bare Metal'] },
  { icon: '⚙️', cat: 'IDC / MSP', catEn: 'Managed', name: '위탁운영 매니지먼트', titleEn: 'Managed operations', slug: 'managed-service', desc: 'OS 패치·장애대응·성능튜닝 전담. Zabbix+Grafana 실시간 모니터링, 월 SLA 리포트.', descEn: 'Patches, incidents, tuning. Zabbix + Grafana dashboards and monthly SLA receipts.', tags: ['Zabbix', 'Ansible', 'Grafana'] },
  { icon: '🔄', cat: 'IDC / HA', catEn: 'Resilience', name: '운영서버 이중화 (HA)', titleEn: 'Active / standby HA', slug: 'ha', desc: 'Active-Active/Standby 구성, 자동 페일오버 30초 이내, L4/L7 로드밸런서, 99.99% SLA.', descEn: 'Failover in seconds, L4/L7 LB — engineered for 99.99% targets.', tags: ['Keepalived', 'HAProxy', 'Pacemaker'] },
  { icon: '🗄️', cat: 'IDC / DB', catEn: 'Data', name: 'DB 이중화 매니지먼트', titleEn: 'Clustered databases', slug: 'db-cluster', desc: 'Galera Cluster·Master-Slave 구성·모니터링·자동복구 위탁관리. 슬로우쿼리 분석.', descEn: 'Galera or replica topologies with monitoring, slow-query review, failover drills.', tags: ['Galera', 'ProxySQL', 'Percona'] },
  { icon: '🛠️', cat: 'IDC / 서버', catEn: 'Recovery', name: '서버 장애 복구 및 이전', titleEn: 'Break-fix & migrations', slug: 'system-recovery-migration', desc: '당사 IDC 입주 여부와 무관하게, 외부 고객이 운영 중인 서버·VM·온프레 환경에 대해 서비스가 필요한 고객이 요청 시 장애 복구, 이전, 성능·네트워크 TS. 원격·현장.', descEn: 'On-prem or cloud — rescue, relocation, tuning. Remote-first, onsite when needed.', tags: ['Incident', 'Move', 'On-prem'] },
  { icon: '🛡️', cat: 'AI 보안', catEn: 'AI SecOps', name: 'AI 보안 관제', titleEn: 'Autonomous SOC', slug: 'ai-security', desc: '365일 24시간 무인 관제. 위협 자동 탐지·분류·대응과 비용 절감을 동시에. 공공·금융·중견기업 특화.', descEn: 'Always-on triage, auto playbooks, compliance-friendly reporting — without a 24/7 bench.', tags: ['24/7', 'Auto', 'GRC'] },
  { icon: '🤖', cat: 'AI 보안', catEn: 'AI SecOps', name: 'AI 자율 관제 에이전트', titleEn: 'LLM SOC agent', slug: 'ai-agent', desc: 'LLM 기반 SOC 자동화. Wazuh SIEM·SOAR 플레이북으로 탐지→분석→대응까지 연결.', descEn: 'LLM reads context, not just regex. SIEM + SOAR wired for real response.', tags: ['LLM', 'SIEM', 'SOAR'] },
  { icon: '🛰️', cat: 'AI 보안', catEn: 'AI SecOps', name: 'AI 스트림 이상탐지', titleEn: 'Stream anomaly ML', slug: 'ai-stream-security', desc: 'RTMP/HLS 트래픽 머신러닝 분석. 세션 하이재킹·인젝션·DDoS 실시간 탐지 및 자동차단.', descEn: 'RTMP/HLS telemetry models for hijack, injection, volumetric abuse — block at wire speed.', tags: ['Python ML', 'MediaMTX', 'Fail2ban'] },
  { icon: '🔍', cat: 'AI 보안', catEn: 'AI SecOps', name: '딥페이크 탐지 서비스', titleEn: 'Live deepfake guard', slug: 'deepfake-detection', desc: '라이브 스트림 내 AI 합성 영상·음성 실시간 검출. 방송사·기업 미디어 대상 고부가가치.', descEn: 'Frame-level models for synthetic video/audio on live feeds — not post-mortem only.', tags: ['PyTorch', 'ONNX', 'Forensics'] },
  { icon: '🌐', cat: 'AI 보안', catEn: 'Network', name: '네트워크 보안 · IDS/IPS', titleEn: 'IDS / IPS fabric', slug: 'network-security', desc: '침입탐지·방지와 ML 보조 이상탐지. 경계·내부 세그먼트 가시화 및 SIEM 연동.', descEn: 'East-west visibility, Suricata/Zeek stacks, ML assist, SIEM handoff.', tags: ['Suricata', 'Zeek', 'eBPF'] },
  { icon: '🔐', cat: 'AI 보안', catEn: 'Zero Trust', name: '제로트러스트 아키텍처', titleEn: 'Zero trust roadmap', slug: 'zero-trust', desc: 'ID·디바이스·맥락 기반 최소권한. 마이크로세그먼트·MFA·지속 검증 로드맵.', descEn: 'Identity, device posture, micro-segmentation — pragmatic rollout, not slide-ware.', tags: ['IAM', 'Segment', 'MFA'] },
  { icon: '📋', cat: 'AI 보안', catEn: 'Governance', name: 'LLM 보안 감사', titleEn: 'LLM / GenAI audit', slug: 'llm-security-audit', desc: '생성형 AI 유출·프롬프트 인젝션·RAG 거버넌스 점검. 정책·기술·운영 권고안.', descEn: 'Leakage, prompt injection, RAG hygiene — policy + technical fixes with owners.', tags: ['Prompt', 'Gov', 'Audit'] },
  { icon: '📡', cat: '스트리밍', catEn: 'Media', name: 'Ultrastream 엔진 호스팅', titleEn: 'Ultrastream engine', slug: 'ultrastream', desc: '국내 CDN 대비 10배 빠른 LL-HLS 1~2초 초저지연. 공공기관·기업·방송사·라이브커머스 전용. 동시 시청자 무제한, 99.99% 가용성.', descEn: 'LL-HLS stacks tuned for glass-to-glass seconds, broadcast-grade SLA targets.', tags: ['LL-HLS', 'Scale', 'SLA'] },
  { icon: '🎬', cat: '스트리밍', catEn: 'Media', name: 'VOD 관리 + 멀티 리스트림', titleEn: 'VOD + multistream', slug: 'vod-multistream', desc: 'VOD 저장·썸네일 자동생성. 유튜브·트위치·네이버 동시 송출 자동화.', descEn: 'Ingest once, syndicate everywhere — FFmpeg pipelines and partner APIs.', tags: ['MariaDB', 'Cloudflare', 'FFmpeg'] },
]

const GROUPS: { id: string; title: string; subtitle: string; slugs: string[] }[] = [
  {
    id: 'infra',
    title: 'Hosting & uptime',
    subtitle: 'Bare metal → HA → recovery — tangible ops',
    slugs: ['server-rental', 'managed-service', 'ha', 'db-cluster', 'system-recovery-migration'],
  },
  {
    id: 'security',
    title: 'SecOps & posture',
    subtitle: 'What attacks actually look like in Korea',
    slugs: ['ai-security', 'ai-agent', 'ai-stream-security', 'deepfake-detection', 'network-security', 'zero-trust', 'llm-security-audit'],
  },
  {
    id: 'media',
    title: 'Live & syndication',
    subtitle: 'Milliseconds matter on camera',
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
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            Product index
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.85rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 14 }}>
            Pick modules. We integrate.
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', maxWidth: 620, lineHeight: 1.78 }}>
            English-first tiles, Korean detail inside each page. Same SKUs Lunarflux-style catalogs list — different layout, typography, and voice.
            <span style={{ display: 'block', marginTop: 10, fontSize: '0.84rem', color: 'var(--text3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
              한 줄 요약 · 모듈을 골라 붙이고, 상세 페이지에서 스펙·도입 조건을 확정합니다.
            </span>
          </p>
        </div>

        {GROUPS.map((g, gi) => (
          <div key={g.id} style={{ marginTop: gi === 0 ? 52 : 60 }}>
            <div style={{ marginBottom: 24, paddingBottom: 14, borderBottom: '2px solid var(--text)' }}>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>{g.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text3)', margin: 0, fontFamily: 'var(--mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{g.subtitle}</p>
            </div>
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
            }}>
              {g.slugs.map(slug => {
                const s = cardFor(slug)
                if (!s) return null
                return (
                  <Link key={s.slug} href={`/services/${s.slug}/`} title={`${s.titleEn} — ${s.name}`} style={{ textDecoration: 'none', minWidth: 0 }}>
                    <div style={{
                      background: 'var(--surface)',
                      padding: '26px 22px',
                      height: '100%',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 2,
                      border: '1px solid var(--border)',
                      boxShadow: '4px 4px 0 rgba(20,18,17,0.04)',
                    }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.transform = 'translate(-2px,-2px)'
                        el.style.boxShadow = '8px 8px 0 rgba(194,65,12,0.12)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.transform = 'translate(0,0)'
                        el.style.boxShadow = '4px 4px 0 rgba(20,18,17,0.04)'
                      }}
                    >
                      <div style={{ fontSize: '1.15rem', marginBottom: 12, opacity: 0.9 }} aria-hidden>{s.icon}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8, fontWeight: 700 }}>{s.catEn}</div>
                      <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.05rem, 2vw, 1.18rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 6, lineHeight: 1.25 }}>{s.titleEn}</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text3)', marginBottom: 12, fontWeight: 500 }}>{s.name}</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text2)', lineHeight: 1.62, marginBottom: 16, wordBreak: 'keep-all' }}>{s.descEn}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {s.tags.map(t => (
                          <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', padding: '4px 8px', background: 'var(--accent-soft)', border: '1px solid var(--border)', borderRadius: 2, color: 'var(--text3)' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ marginTop: 18, fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Open dossier →
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
