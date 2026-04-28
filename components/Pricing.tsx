'use client'
import { useState, useRef } from 'react'
import { formDataToRecord, notifyAdminInstant } from '@/lib/adminNotify'

const WEB3FORMS_KEY = '92e76d57-87e2-4f09-8084-bc2552db772d'

const plans = [
  {
    tier: 'Starter', name: '스트림 Basic', price: '49,000', unit: '/시간', featured: false,
    desc: '라이브를 시작하는 소규모 팀용 입문 플랜입니다.',
    features: ['Ultrastream 엔진 1채널','LL-HLS (최대 1080p)','동시 시청자 100명','VOD 저장 50GB','기본 모니터링 대시보드','이메일 기술지원'],
  },
  {
    tier: 'Professional', name: 'Stream Pro', price: '가격문의', unit: '', featured: true,
    desc: '스트리밍 단독 플래그십. AI 보안·IDC 옵션은 별도 견적로 추가할 수 있습니다.',
    features: ['Ultrastream 엔진 5채널','ABR 4단계 (1080p~360p)','동시 시청자 1,000명','VOD 500GB + CDN','멀티플랫폼 동시 송출','엔드포인트 모니터링(기본)','24시간 Slack 지원 · AI 보안 옵션 별도'],
  },
  {
    tier: 'IDC Standard', name: '서버 위탁운영', price: '30만~', unit: '/월', featured: false,
    desc: '패치·장애 대응을 맡기고 본업에 집중하고 싶은 조직용입니다.',
    features: ['OS 패치·보안 업데이트','장애 대응 (4시간 이내 목표)','Zabbix 실시간 모니터링','월간 SLA 리포트','백업 자동화','전화·원격 지원'],
  },
  {
    tier: 'HA / DR', name: '이중화 + DR', price: '80만~', unit: '/월', featured: false,
    desc: '서버·DB 이중화와 재해복구까지 묶은 고가용성 구성입니다.',
    features: ['Active-Active HA 구성','자동 페일오버 30초 이내','DB 이중화 (Galera 등)','DR 원격 백업 연동','RTO 4h / RPO 1h 목표','분기별 복구 훈련'],
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
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
              요금 안내
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.95rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 14 }}>
              대표 요금제 · 맞춤 견적
            </h2>
            <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: 620, lineHeight: 1.78 }}>
              아래는 대표 요금 예시입니다. IDC·AI 보안·스트리밍은 서로 다른 상품이므로, 표에 없는 조합이나 “한 분야만” 도입도 문의 후 별도 견적합니다.
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
                  <div style={{ position: 'absolute', top: -1, right: 24, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, padding: '5px 12px', borderRadius: '0 0 2px 2px' }}>인기</div>
                )}
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>{p.tier}</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.name}</div>
                <div style={{ margin: '20px 0' }}>
                  {p.price === '가격문의' ? (
                    <span style={{ fontFamily: 'var(--display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.02em' }}>가격 문의</span>
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
                  {p.tier === 'IDC Standard' || p.tier === 'HA / DR' ? '이 구성으로 문의' : '이 플랜으로 신청'}
                </button>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: 20, border: '2px solid var(--border)', borderRadius: 2, padding: '36px 28px', background: 'var(--bg2)', boxShadow: '8px 8px 0 rgba(20,18,17,0.06)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent2)', letterSpacing: '0.12em', marginBottom: 10 }}>엔터프라이즈</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>복수 라인 · 대규모 맞춤</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', margin: '14px 0' }}>맞춤 견적</div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text2)', marginBottom: 20, lineHeight: 1.75, maxWidth: 640 }}>IDC·보안·스트리밍 중 여러 라인을 동시에 쓰거나, 전용 서버·무제한 채널·관제 범위 확대 같은 대규모 요구가 있을 때 협의합니다. 항목별 범위와 SLA를 나누어 제안합니다.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0 20px', marginBottom: 24 }}>
              {['무제한 채널 + 전용 서버','AI 보안 관제 24/7','딥페이크·스트림 ML','HA/DR 완전 이중화','LLM 보안 프로그램','현장·원격 복구','IDS/IPS 구성','전담 엔지니어'].map(f => (
                <div key={f} style={{ fontSize: '0.83rem', color: 'var(--text2)', padding: '7px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: 10 }}>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: '0.7rem', flexShrink: 0, marginTop: 2 }}>—</span>{f}
                </div>
              ))}
            </div>
            <button
              onClick={() => openModal('복수 라인 · 대규모 맞춤', 'Enterprise')}
              style={{ display: 'inline-block', padding: '12px 32px', background: 'var(--accent)', color: '#fff', borderRadius: 2, fontFamily: 'var(--mono)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}
            >
              엔터프라이즈 상담
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
                    접수 내용을 확인한 뒤 <strong>영업일 기준</strong>으로 순차 연락드립니다.
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
                    영업일 기준 순차 회신
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
