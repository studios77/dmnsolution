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
  { icon: '🏢', cat: 'IDC / 서버', name: '서버 임대 · 코로케이션', slug: 'server-rental', desc: '가상화 기반 VM 즉시 할당부터 고객 장비 입주(코로케이션)까지. 전력·냉각·네트워크 포함, IPMI 원격관리.', tags: ['KVM', 'IPMI', 'Bare Metal'] },
  { icon: '⚙️', cat: 'IDC / MSP', name: '위탁운영 매니지먼트', slug: 'managed-service', desc: 'OS 패치·장애대응·성능튜닝 전담. Zabbix+Grafana 실시간 모니터링, 월 SLA 리포트.', tags: ['Zabbix', 'Ansible', 'Grafana'] },
  { icon: '🔄', cat: 'IDC / HA', name: '운영서버 이중화 (HA)', slug: 'ha', desc: 'Active-Active/Standby 구성, 자동 페일오버 30초 이내, L4/L7 로드밸런서, 99.99% SLA.', tags: ['Keepalived', 'HAProxy', 'Pacemaker'] },
  { icon: '🗄️', cat: 'IDC / DB', name: 'DB 이중화 매니지먼트', slug: 'db-cluster', desc: 'Galera Cluster·Master-Slave 구성·모니터링·자동복구 위탁관리. 슬로우쿼리 분석.', tags: ['Galera', 'ProxySQL', 'Percona'] },
  { icon: '🛠️', cat: 'IDC / 서버', name: '서버 장애 복구 및 이전', slug: 'system-recovery-migration', desc: '당사 IDC 입주 여부와 무관하게 외부 운영 서버·VM·온프레 환경까지 장애 복구·이전·성능·네트워크 지원. 원격·현장.', tags: ['긴급복구', '이전', '온프레'] },
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
    title: 'IDC · 서버 인프라',
    subtitle: '데이터센터 입주·위탁운영·이중화·DB·장애 복구. IDC만 단독으로 문의·계약할 수 있습니다.',
    slugs: ['server-rental', 'managed-service', 'ha', 'db-cluster', 'system-recovery-migration'],
  },
  {
    id: 'security',
    anchorId: 'services-security',
    title: 'AI 보안 · 거버넌스',
    subtitle: '관제, 이상·딥페이크 탐지, 네트워크·제로트러스트, LLM 감사. 보안 라인은 인프라·스트리밍과 별도 견적입니다.',
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
    <section id="services" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 5% 100px' }}>
        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.14em', marginBottom: 12 }}>
            서비스 카탈로그
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.85rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 14 }}>
            세 가지 사업, 서로 다른 서비스
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text2)', maxWidth: 640, lineHeight: 1.78 }}>
            아래는 <strong style={{ color: 'var(--text)' }}>IDC</strong>, <strong style={{ color: 'var(--text)' }}>AI 보안</strong>, <strong style={{ color: 'var(--text)' }}>스트리밍</strong>으로 나뉜 목록입니다. 동시에 문의하셔도 견적·계약·운영은 분야별로 구분합니다. 카드를 누르면 해당 상품의 상세·스펙으로 이동합니다.
          </p>
        </div>

        {GROUPS.map((g, gi) => (
          <div key={g.id} id={g.anchorId} style={{ marginTop: gi === 0 ? 52 : 60, scrollMarginTop: 88 }}>
            <div style={{ marginBottom: 24, paddingBottom: 14, borderBottom: '2px solid var(--text)' }}>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>{g.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text3)', margin: 0 }}>{g.subtitle}</p>
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
                  <Link key={s.slug} href={`/services/${s.slug}/`} title={s.name} style={{ textDecoration: 'none', minWidth: 0 }}>
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
                        el.style.boxShadow = '8px 8px 0 rgba(93,165,111,0.12)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.transform = 'translate(0,0)'
                        el.style.boxShadow = '4px 4px 0 rgba(20,18,17,0.04)'
                      }}
                    >
                      <div style={{ fontSize: '1.15rem', marginBottom: 12, opacity: 0.9 }} aria-hidden>{s.icon}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 8, fontWeight: 700 }}>{s.cat}</div>
                      <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.05rem, 2vw, 1.18rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 12, lineHeight: 1.25 }}>{s.name}</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text2)', lineHeight: 1.62, marginBottom: 16, wordBreak: 'keep-all' }}>{s.desc}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {s.tags.map(t => (
                          <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', padding: '4px 8px', background: 'var(--accent-soft)', border: '1px solid var(--border)', borderRadius: 2, color: 'var(--text3)' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ marginTop: 18, fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 700 }}>
                        상세 보기 · 스펙 확인 →
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
