'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { formDataToRecord, notifyAdminInstant } from '@/lib/adminNotify'

const WEB3FORMS_KEY = '92e76d57-87e2-4f09-8084-bc2552db772d'

interface CaptchaState {
  question: string
  answer: number
  userAnswer: string
}

const inputStyle: React.CSSProperties = {
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  padding: '10px 14px',
  color: 'var(--text)',
  fontFamily: 'var(--sans)',
  fontSize: '0.88rem',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s',
}

const generateCaptcha = (): CaptchaState => {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const operations = ['+', '-', '×'] as const
  const operation = operations[Math.floor(Math.random() * operations.length)]

  let answer: number
  let question: string

  switch (operation) {
    case '+':
      answer = num1 + num2
      question = `${num1} + ${num2} = ?`
      break
    case '-': {
      const larger = Math.max(num1, num2)
      const smaller = Math.min(num1, num2)
      answer = larger - smaller
      question = `${larger} - ${smaller} = ?`
      break
    }
    case '×':
      answer = num1 * num2
      question = `${num1} × ${num2} = ?`
      break
    default:
      answer = num1 + num2
      question = `${num1} + ${num2} = ?`
  }

  return { question, answer, userAnswer: '' }
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [captcha, setCaptcha] = useState<CaptchaState>(() => generateCaptcha())
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const entered = Number.parseInt(captcha.userAnswer.replace(/\s/g, ''), 10)
    if (!Number.isFinite(entered) || entered !== captcha.answer) {
      alert('?? ?? ?? ???? ????. ?? ??? ???.')
      setCaptcha(generateCaptcha())
      return
    }

    setStatus('sending')
    const fd = new FormData(formRef.current)

    fd.append('access_key', WEB3FORMS_KEY)
    fd.append('subject', '[DMN???] ?? · ?? · ???? ??')
    fd.append('from_name', 'DMN??? ?? ?')
    fd.append('botcheck', '')

    const userEmail = fd.get('email') as string | null
    if (userEmail) fd.append('replyto', userEmail)

    fd.append('timestamp', new Date().toISOString())
    fd.append('redirect', 'false')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      const data = await res.json()

      if (data.success && formRef.current) {
        const snapshot = formDataToRecord(new FormData(formRef.current))
        void notifyAdminInstant({
          title: '[DMN???] ?? ??',
          fields: {
            ...snapshot,
            submission_time: new Date().toLocaleString('ko-KR'),
            submission_source: '?? ??? ?? ??',
          },
        })
        setStatus('success')
        formRef.current.reset()
        setCaptcha(generateCaptcha())
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 620, margin: '0 auto', padding: '100px 5%', textAlign: 'center' }}>
          <div
            style={{
              background: 'var(--surface)',
              borderRadius: 16,
              padding: '40px 28px',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>?</div>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--text)',
                marginBottom: 10,
              }}
            >
              ??? ???????
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: 22 }}>
              ??? ?? ??? ????????. ??? ??? ??? ???? ??? ???.
            </p>
            <Link
              href="/#pricing"
              style={{
                display: 'inline-block',
                marginInlineEnd: 10,
                padding: '11px 20px',
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              ?????
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 5%' }}>
        <div className="reveal">
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.62rem',
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              marginBottom: 12,
              textTransform: 'uppercase',
            }}
          >
            ?? · ???? · ??
          </div>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(1.85rem,4vw,2.6rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: 12,
            }}
          >
            ????·?? ??
          </h2>
          <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: 580, lineHeight: 1.78, marginBottom: 28 }}>
            AIDC, AI ??, ???? ? ???? ??? ?? ??? ????? ?? ? ??????.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: 640,
            background: 'var(--surface)',
            borderRadius: 14,
            padding: '28px 26px',
            border: '1px solid var(--border)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                  ???
                </label>
                <input
                  name="company"
                  required
                  style={inputStyle}
                  placeholder="?: ???"
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                  ???
                </label>
                <input
                  name="name"
                  required
                  style={inputStyle}
                  placeholder="??"
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                  ???
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  style={inputStyle}
                  placeholder="reply@..."
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                  ???
                </label>
                <input
                  name="phone"
                  type="tel"
                  style={inputStyle}
                  placeholder="??"
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                ?? ???
              </label>
              <select
                name="service"
                required
                style={{ ...inputStyle, cursor: 'pointer' }}
                defaultValue=""
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              >
                <option value="" disabled>
                  ??? ???
                </option>
                <optgroup label="AIDC · ??">
                  <option>IDC ?????</option>
                  <option>???? ????</option>
                  <option>???? ??</option>
                  <option>Proxmox VE</option>
                  <option>HA / DR ???</option>
                </optgroup>
                <optgroup label="AI ??">
                  <option>AI ??? ??</option>
                  <option>???? ??</option>
                  <option>IDS/IPS</option>
                  <option>?????? ??</option>
                  <option>LLM ?? ??</option>
                </optgroup>
                <optgroup label="????">
                  <option>Ultrastream ????</option>
                  <option>VOD + ?? ????</option>
                </optgroup>
                <optgroup label="??">
                  <option>?? ??</option>
                </optgroup>
              </select>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                ?? ??
              </label>
              <textarea
                name="message"
                rows={5}
                required
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                placeholder="?? ???? ???? ??? ?? ???."
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                ?? ?? <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 14px',
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--border2)',
                  borderRadius: 8,
                }}
              >
                <span style={{ fontFamily: 'var(--mono)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', minWidth: '6.5rem' }}>
                  {captcha.question}
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  value={captcha.userAnswer}
                  onChange={e => setCaptcha(prev => ({ ...prev, userAnswer: e.target.value }))}
                  placeholder="??"
                  required
                  aria-label="?? ?? ?"
                  style={{
                    ...inputStyle,
                    width: 120,
                    maxWidth: '100%',
                    textAlign: 'center',
                    fontWeight: 600,
                    flex: '0 0 auto',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
                <button
                  type="button"
                  onClick={() => setCaptcha(generateCaptcha())}
                  style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '8px 12px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--mono)',
                  }}
                  title="?? ?? ??"
                >
                  ?? ??
                </button>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text3)', marginTop: 6, fontFamily: 'var(--mono)' }}>
                ?? ?? ??? ?? ?????. ??? ??? ??? ?????.
              </p>
            </div>

            {status === 'error' && (
              <p style={{ marginBottom: 12, fontSize: '0.85rem', color: '#dc2626', fontFamily: 'var(--sans)' }}>
                ??? ??????. ?? ? ?? ????? ??? ??? ???.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '14px',
                background: status === 'sending' ? 'var(--border2)' : 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontFamily: 'var(--mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.85 : 1,
              }}
            >
              {status === 'sending' ? '?? ??' : '?? ???'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
