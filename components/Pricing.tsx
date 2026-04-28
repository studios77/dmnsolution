'use client'
import { useState, useRef } from 'react'
import { formDataToRecord, notifyAdminInstant } from '@/lib/adminNotify'

const WEB3FORMS_KEY = '92e76d57-87e2-4f09-8084-bc2552db772d'

const plans = [
  {
    tier: 'Starter', name: 'Stream Basic', price: '49,000', unit: '/hour', featured: false,
    desc: 'Entry stack for teams proving interactive latency before scaling spend.',
    features: ['1× Ultrastream lane','LL-HLS ladder (up to 1080p)','100 concurrent viewers','50 GB VOD shelf','Baseline telemetry','Email support'],
  },
  {
    tier: 'Professional', name: 'Stream Pro + AI', price: 'QUOTE', unit: '', featured: true,
    desc: 'Our most requested bundle — picture pipeline plus AI guardrails.',
    features: ['5× Ultrastream lanes','4-step ABR ladder','1,000 concurrent viewers','500 GB VOD + CDN edge','Stream anomaly + IP ban','Multi-platform syndication','24/7 Slack engineer'],
  },
  {
    tier: 'IDC Standard', name: 'Managed metal', price: '30만~', unit: '/mo', featured: false,
    desc: 'Delegation model for teams that need sleep and patch discipline.',
    features: ['Patch + hardening cadence','Incident ≤4h SLA target','Zabbix + Grafana','Monthly SLA digest','Backup automation','Voice + remote hands'],
  },
  {
    tier: 'HA / DR', name: 'Resilience bundle', price: '80만~', unit: '/mo', featured: false,
    desc: 'Active paths, clustered data planes, rehearsal-friendly DR.',
    features: ['Active-active patterns','Failover ≤30s story','Galera / replica ops','Remote DR hook-in','RTO 4h · RPO 1h targets','Quarterly restore drills'],
  },
]

interface ModalState {
  open: boolean
  planName: string
  planTier: string
}

const inputStyle: React.CSSProperties = {
  background: 'var(--bg)', border: '1px solid var(--border)',
  borderRadius: 6, padding: '10px 14px', color: 'var(--text)',
  fontFamily: 'var(--sans)', fontSize: '0.88rem',
  outline: 'none', width: '100%', transition: 'border-color 0.2s',
}

export default function Pricing() {
  const [modal, setModal] = useState<ModalState>({ open: false, planName: '', planTier: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const openModal = (planName: string, planTier: string) => {
    setModal({ open: true, planName, planTier })
    setStatus('idle')
    setTimeout(() => formRef.current?.reset(), 50)
  }

  const closeModal = () => {
    if (status === 'sending') return
    setModal(m => ({ ...m, open: false }))
    setStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    const fd = new FormData(formRef.current)
    fd.append('access_key', WEB3FORMS_KEY)
    fd.append('subject', `[DMN솔루션 요금제 접수] ${modal.planTier} — ${modal.planName}`)
    fd.append('from_name', 'DMN솔루션 요금제 신청')
    fd.append('plan', `${modal.planTier} / ${modal.planName}`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.success) {
        const snapshot = formDataToRecord(new FormData(formRef.current))
        void notifyAdminInstant({
          title: `[DMN솔루션] 요금제 신청 — ${modal.planTier} / ${modal.planName}`,
          fields: {
            ...snapshot,
            subject: `[DMN솔루션 요금제 접수] ${modal.planTier} — ${modal.planName}`,
          },
        })
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section id="pricing" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 5%' }}>
          <div className="reveal">
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>
              Commercial ladders
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.95rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 14 }}>
              Transparent entry points.<br /><span style={{ color: 'var(--text3)' }}>Custom math on top.</span>
            </h2>
            <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: 600, lineHeight: 1.78 }}>
              Ballpark numbers anchor the conversation — everything else is workload discovery.
              Hybrid stacks or regulated environments route through the intake form exactly like a checkout lane.
              <span style={{ display: 'block', marginTop: 10, fontSize: '0.82rem', color: 'var(--text3)' }}>
                버튼은 국내 운영팀 접수 플로우와 동일합니다.
              </span>
            </p>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 60 }}>
            {plans.map(p => (
              <div key={p.name} style={{
                border: p.featured ? '2px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: 2, padding: '36px 28px',
                background: p.featured ? 'linear-gradient(180deg, rgba(251,146,60,0.08), var(--surface))' : 'var(--surface)',
                position: 'relative', transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: p.featured ? '8px 8px 0 rgba(194,65,12,0.12)' : '4px 4px 0 rgba(20,18,17,0.04)',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                {p.featured && (
                  <div style={{ position: 'absolute', top: -1, right: 24, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', padding: '5px 12px', borderRadius: '0 0 2px 2px' }}>POPULAR</div>
                )}
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>{p.tier}</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.name}</div>
                <div style={{ margin: '20px 0' }}>
                  {p.price === 'QUOTE' ? (
                    <span style={{ fontFamily: 'var(--display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.02em' }}>Price on scope</span>
                  ) : (
                    <span style={{ fontFamily: 'var(--display)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--text)' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text2)', fontFamily: 'var(--mono)', verticalAlign: 'super' }}>₩</span>
                      {p.price}
                      <span style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'var(--mono)', fontWeight: 400 }}>{p.unit}</span>
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text2)', marginBottom: 24, lineHeight: 1.7 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', marginBottom: 32, flex: 1 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ fontSize: '0.83rem', color: 'var(--text2)', padding: '7px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: '0.7rem', flexShrink: 0, marginTop: 2 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(p.name, p.tier)}
                  style={{
                    display: 'block', width: '100%', padding: 12, borderRadius: 4, textAlign: 'center',
                    fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.06em', transition: 'all 0.25s',
                    background: p.featured ? 'var(--accent)' : 'transparent',
                    border: p.featured ? '1px solid var(--accent)' : '1px solid var(--border2)',
                    color: p.featured ? '#fff' : 'var(--text)', fontWeight: p.featured ? 600 : 500,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (!p.featured) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)'
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!p.featured) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                      ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text)'
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border2)'
                    }
                  }}
                >
                  {p.tier === 'IDC Standard' || p.tier === 'HA / DR' ? 'Talk about this tier' : 'Hold this plan'}
                </button>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: 20, border: '2px solid var(--border)', borderRadius: 2, padding: '36px 28px', background: 'var(--bg2)', boxShadow: '8px 8px 0 rgba(20,18,17,0.06)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent2)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Enterprise</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>Full AI security fabric</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', margin: '14px 0' }}>Named account pricing</div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text2)', marginBottom: 20, lineHeight: 1.75, maxWidth: 640 }}>Unlimited channels, dedicated metal, 24/7 AI SOC, deepfake stack, HA/DR pairs, backup automation, break-fix anywhere you host — one commercial wrapper.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0 20px', marginBottom: 24 }}>
              {['Dedicated fleet + unlimited channels','AI SOC (always-on)','Deepfake + stream ML','Full HA / DR pair','LLM security program','Field + remote recovery','IDS / IPS fabric','Named principal engineer'].map(f => (
                <div key={f} style={{ fontSize: '0.83rem', color: 'var(--text2)', padding: '7px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: 10 }}>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: '0.7rem', flexShrink: 0, marginTop: 2 }}>—</span>{f}
                </div>
              ))}
            </div>
            <button
              onClick={() => openModal('Full AI Security Suite', 'Enterprise')}
              style={{ display: 'inline-block', padding: '12px 32px', background: 'var(--accent)', color: '#fff', borderRadius: 2, fontFamily: 'var(--mono)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}
            >
              Book enterprise lane
            </button>
          </div>
        </div>
      </section>

      {modal.open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) closeModal() }}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border2)',
            borderRadius: 16, width: '100%', maxWidth: 480,
            boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
            overflow: 'hidden',
          }}>
            <div style={{ padding: '24px 28px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {modal.planTier}
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>
                  {modal.planName} 신청
                </div>
              </div>
              <button
                onClick={closeModal}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text3)', fontSize: '1.2rem', padding: 4, lineHeight: 1 }}
              >✕</button>
            </div>

            <div style={{ padding: '24px 28px 28px' }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✅</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>
                    접수가 완료되었습니다!
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: 24 }}>
                    전문 엔지니어가 확인 후 <strong>24시간 이내</strong> 연락드립니다.<br />
                    긴급 장애는 즉시 대응합니다.<br />
                    긴급 문의: <a href="tel:01032043847" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>010-3204-3847</a>
                  </p>
                  <button
                    onClick={closeModal}
                    style={{ padding: '10px 28px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 6, fontFamily: 'var(--mono)', fontSize: '0.78rem', cursor: 'pointer', fontWeight: 600 }}
                  >
                    닫기
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="hidden" name="plan" value={`${modal.planTier} / ${modal.planName}`} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.63rem', color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                        이름 / 담당자 <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input name="name" type="text" placeholder="홍길동" required style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.63rem', color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                        연락처 <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input name="phone" type="tel" placeholder="010-0000-0000" required style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.63rem', color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                        이메일 <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input name="email" type="email" placeholder="contact@company.com" required style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.63rem', color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                        회사명
                      </label>
                      <input name="company" type="text" placeholder="(주)회사명 (선택)" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.63rem', color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                        추가 문의사항
                      </label>
                      <textarea name="message" placeholder="궁금한 점이나 요구사항을 자유롭게 작성해 주세요." rows={3}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 16, padding: '10px 14px', background: 'var(--accent-soft)', border: '1px solid var(--border2)', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>✓</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text2)' }}>
                      선택 플랜: <strong style={{ color: 'var(--text)' }}>{modal.planTier} — {modal.planName}</strong>
                    </span>
                  </div>

                  {status === 'error' && (
                    <p style={{ marginTop: 10, fontSize: '0.8rem', color: '#ef4444', fontFamily: 'var(--mono)' }}>
                      전송 실패 — 잠시 후 다시 시도하거나 전화로 문의해 주세요.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      width: '100%', marginTop: 18, padding: '13px 0',
                      background: status === 'error' ? '#ef4444' : 'var(--accent)',
                      color: '#fff', border: 'none', borderRadius: 6,
                      fontFamily: 'var(--mono)', fontSize: '0.8rem', fontWeight: 600,
                      letterSpacing: '0.06em', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      opacity: status === 'sending' ? 0.7 : 1, transition: 'all 0.2s',
                    }}
                  >
                    {status === 'sending' ? '접수 중…' : status === 'error' ? '전송 실패 — 다시 시도' : '신청 접수하기'}
                  </button>

                  <p style={{ marginTop: 10, fontSize: '0.72rem', color: 'var(--text3)', textAlign: 'center', fontFamily: 'var(--mono)' }}>
                    전문 엔지니어 24시간 내 회신 · 긴급 장애 즉시 · 010-3204-3847
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
