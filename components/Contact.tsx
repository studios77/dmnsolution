'use client'
import { useState, useRef } from 'react'
import { formDataToRecord, notifyAdminInstant } from '@/lib/adminNotify'

const WEB3FORMS_KEY = '92e76d57-87e2-4f09-8084-bc2552db772d'

// 간단한 캡챠 생성 함수
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const answer = num1 + num2
  return { question: `${num1} + ${num2} = ?`, answer, userAnswer: '' }
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [captcha, setCaptcha] = useState(generateCaptcha())
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    // 캡챠 검증
    if (parseInt(captcha.userAnswer) !== captcha.answer) {
      alert('보안 문제의 답이 올바르지 않습니다.')
      setCaptcha(generateCaptcha())
      return
    }

    setStatus('sending')

    const formData = new FormData(formRef.current)
    formData.append('_subject', '[DMN?붾（?? ???쒕퉬??臾몄쓽媛 ?묒닔?섏뿀?듬땲??)
    formData.append('_captcha', 'false') // 罹≪감 鍮꾪솢?깊솕 (?좏깮)

    try {
      const res = await fetch('https://formsubmit.co/ajax/studios77@gmail.com', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        const snapshot = formDataToRecord(new FormData(formRef.current))
        void notifyAdminInstant({
          title: '[DMN?붾（?? ?쒕퉬??臾몄쓽 ?묒닔',
          fields: {
            ...snapshot,
            subject: '[DMN?붾（?? ???쒕퉬??臾몄쓽媛 ?묒닔?섏뿀?듬땲??,
          },
        })
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg)', border: '1px solid var(--border)',
    borderRadius: 4, padding: '11px 14px', color: 'var(--text)',
    fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 300,
    outline: 'none', width: '100%', transition: 'border-color 0.2s',
  }

  const contactItems: Array<{
    icon: string
    title: string
    highlight?: boolean
    val?: string
    lines?: string[]
  }> = [
    { icon: '?벁', title: '?대찓??, lines: ['studios77@gmail.com', 'phd580@gmail.com'] },
    {
      icon: '?뱸',
      title: '????꾪솕',
      lines: ['0505-299-7623', '0505-683-2580'],
      highlight: true,
    },
    { icon: '?뮠', title: 'Kakao / Telegram', val: '@dmnsolution' },
    {
      icon: '?븧',
      title: '?묐떟 ?덈궡',
      lines: ['?곸뾽??湲곗? ?쒖감 ?뚯떊'],
    },
    { icon: '?뱧', title: '?쒕퉬??吏??, val: '?먭꺽 ?댁쁺 쨌 湲濡쒕쾶 ???媛?? },
  ]

  return (
    <section id="contact" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 5%' }}>
        <div className="reveal">
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
            臾몄쓽
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.85rem,4vw,2.95rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em', color: 'var(--text)', marginBottom: 14 }}>
            寃ъ쟻 쨌 ?꾩엯 ?곷떞
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--text2)', maxWidth: 580, lineHeight: 1.78 }}>
            愿???쒕퉬?ㅼ? ?곕씫泥섎? ?④꺼 二쇱떆硫?寃???? <strong style={{ color: 'var(--text)' }}>?곸뾽??湲곗?</strong>?쇰줈 ?쒖감 ?뚯떊?쒕┰?덈떎.
          </p>
        </div>

        <div className="reveal contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, marginTop: 60, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {contactItems.map(c => (
              <div key={c.title} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 16px',
                background: c.highlight ? 'linear-gradient(135deg, rgba(251,146,60,0.1), rgba(251,146,60,0.02))' : 'var(--surface)',
                border: c.highlight ? '1.5px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: 6,
                boxShadow: c.highlight ? '0 0 18px rgba(194,65,12,0.15)' : 'none',
              }}>
                <div style={{ fontSize: '1rem', width: 36, height: 36, background: c.highlight ? 'var(--accent-soft)' : 'rgba(20,18,17,0.06)', border: `1px solid ${c.highlight ? 'var(--accent)' : 'var(--border)'}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: c.highlight ? 'var(--accent)' : 'var(--text)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>{c.title}</div>
                  {c.lines ? (
                    <div style={{ fontSize: c.highlight ? '1rem' : '0.85rem', color: 'var(--text)', fontWeight: c.highlight ? 700 : 500, lineHeight: 1.65 }}>
                      {c.lines.map((line, i) =>
                        c.highlight && /^[\d\-]+$/.test(line.replace(/\s/g, '')) ? (
                          <div key={i}>
                            <a href={`tel:${line.replace(/-/g, '')}`} style={{ color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.03em' }}>{line}</a>
                          </div>
                        ) : (
                          <div key={i}>{line}</div>
                        ),
                      )}
                    </div>
                  ) : (
                    <a href={c.highlight && c.val ? `tel:${c.val.replace(/-/g, '')}` : undefined} style={{ fontSize: c.highlight ? '1rem' : '0.85rem', color: 'var(--text)', fontWeight: c.highlight ? 700 : 500, textDecoration: 'none', letterSpacing: c.highlight ? '0.04em' : 'normal' }}>{c.val}</a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: '36px 32px' }}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[
                  { label: '?대쫫 / ?대떦??, name: 'name', type: 'text', placeholder: '?띻만?? },
                  { label: '?뚯궗紐?, name: 'company', type: 'text', placeholder: '(二??뚯궗紐? },
                  { label: '?대찓??, name: 'email', type: 'email', placeholder: 'contact@company.com' },
                  { label: '?곕씫泥?, name: 'phone', type: 'tel', placeholder: '010-0000-0000' },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.name === 'name' || f.name === 'email'} style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                ))}

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>愿???쒕퉬??/label>
                  <select
                    name="service"
                    style={{ ...inputStyle, appearance: 'none', fontSize: '0.84rem', lineHeight: 1.45, paddingTop: 12, paddingBottom: 12 }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  >
                    <option value="">?쒕퉬?ㅻ? ?좏깮?댁＜?몄슂</option>
                    <optgroup label="IDC / ?쒕쾭">
                      <option>?쒕쾭 ?꾨? / 肄붾줈耳?댁뀡</option>
                      <option>?꾪긽?댁쁺 (MSP)</option>
                      <option>?쒕쾭 ?댁쨷??(HA)</option>
                      <option>DB ?댁쨷??留ㅻ땲吏癒쇳듃</option>
                      <option>?쒕쾭 ?μ븷 蹂듦뎄 諛??댁쟾 (?몃? ?댁쁺 ?쒕쾭)</option>
                    </optgroup>
                    <optgroup label="AI 蹂댁븞">
                      <option>AI 蹂댁븞 愿??/option>
                      <option>AI ?먯쑉 愿???먯씠?꾪듃 (LLM SOC)</option>
                      <option>AI ?ㅽ듃由??댁긽?먯?</option>
                      <option>?ν럹?댄겕 ?먯?</option>
                      <option>?ㅽ듃?뚰겕 蹂댁븞 쨌 IDS/IPS</option>
                      <option>?쒕줈?몃윭?ㅽ듃 ?ㅺ퀎</option>
                      <option>LLM 蹂댁븞 媛먯궗</option>
                    </optgroup>
                    <optgroup label="?ㅽ듃由щ컢">
                      <option>Ultrastream ?ㅽ듃由щ컢 ?몄뒪??/option>
                      <option>VOD + 硫??由ъ뒪?몃┝</option>
                    </optgroup>
                    <optgroup label="湲고?">
                      <option>DR ?ы빐蹂듦뎄</option>
                      <option>?뷀꽣?꾨씪?댁쫰 (蹂듭닔 ?쇱씤 쨌 留욎땄)</option>
                      <option>湲고? / 蹂듯빀 臾몄쓽</option>
                    </optgroup>
                  </select>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>臾몄쓽 ?댁슜</label>
                  <textarea name="message" placeholder="?꾩옱 ?명봽???섍꼍?대굹 ?꾩슂?섏떊 ?쒕퉬?ㅻ? ?먯쑀濡?쾶 ?묒꽦??二쇱꽭??" rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>

              {status === 'error' && (
                <p style={{ marginTop: 12, fontSize: '0.82rem', color: '#ef4444', fontFamily: 'var(--mono)' }}>
                  ?꾩넚 ?ㅽ뙣 ???좎떆 ???ㅼ떆 ?쒕룄?댁＜?몄슂.
                </p>
              )}

              <button type="submit" disabled={status === 'sending'} style={{
                width: '100%', marginTop: 16, padding: 14,
                background: status === 'success' ? '#28c840' : status === 'error' ? '#ef4444' : 'var(--accent)',
                color: '#fff',
                border: 'none', borderRadius: 4,
                fontFamily: 'var(--mono)', fontSize: '0.78rem', fontWeight: 500,
                letterSpacing: '0.08em',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'all 0.25s',
                opacity: status === 'sending' ? 0.7 : 1,
              }}>
                {status === 'sending' && '?꾩넚 以묅?}
                {status === 'success' && '?꾩넚 ?꾨즺 ???곸뾽??湲곗? ?쒖감 ?뚯떊 ??}
                {status === 'error' && '?꾩넚 ?ㅽ뙣 ???ㅼ떆 ?쒕룄?댁＜?몄슂'}
                {status === 'idle' && (
                  <>
                    <span style={{ display: 'block' }}>臾몄쓽 ?꾩넚</span>
                    <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 500, marginTop: 4, opacity: 0.92 }}>?곸뾽??湲곗? ?쒖감 ?뚯떊</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ 
          #contact .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } 
          #contact .form-grid { grid-template-columns: 1fr !important; } 
        }
      `}</style>
    </section>
  )
}
