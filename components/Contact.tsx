'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { formDataToRecord, notifyAdminInstant } from '@/lib/adminNotify'
import { getWeb3FormsAccessKey } from '@/lib/web3formsKey'

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

/** ASCII-only ops in source; avoids non-UTF8 issues in CI */
const generateCaptcha = (): CaptchaState => {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const operations = ['+', '-', '*'] as const
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
    case '*':
      answer = num1 * num2
      question = `${num1} * ${num2} = ?`
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
      alert(
        '\ubcf4\uc548 \ud655\uc778 \ub2f5\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud655\uc778\ud574 \uc8fc\uc138\uc694.'
      )
      setCaptcha(generateCaptcha())
      return
    }

    const web3Key = getWeb3FormsAccessKey()
    if (!web3Key) {
      alert(
        'Web3Forms \uc561\uc138\uc2a4 \ud0a4\uac00 \uc124\uc815\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY\ub97c .env.local \ub610\ub294 Cloudflare Pages \ud658\uacbd \ubcc0\uc218\uc5d0 \ucd94\uac00\ud574 \uc8fc\uc138\uc694.'
      )
      return
    }

    setStatus('sending')
    const fd = new FormData(formRef.current)

    fd.append('access_key', web3Key)
    fd.append(
      'subject',
      '[DMN\uc194\ub8e8\uc158] \ubb38\uc758 \xb7 \uacac\uc801 \xb7 \ub3c4\uc785\uc0c1\ub2f4 \uc811\uc218'
    )
    fd.append('from_name', 'DMN\uc194\ub8e8\uc158 \ubb38\uc758 \ud3fc')
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
          title: '[DMN\uc194\ub8e8\uc158] \ubb38\uc758 \uc811\uc218',
          fields: {
            ...snapshot,
            submission_time: new Date().toLocaleString('ko-KR'),
            submission_source: '\uba54\uc778 \ud398\uc774\uc9c0 \ubb38\uc758 \uc139\uc158',
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
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{'\u2705'}</div>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--text)',
                marginBottom: 10,
              }}
            >
              {'\ubb38\uc758\uac00 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4'}
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: 22 }}>
              {
                '\uc601\uc5c5\uc77c \uae30\uc900 \ube60\ub974\uac8c \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. \uba54\uc77c\uc774 \ubcf4\uc774\uc9c0 \uc54a\uc73c\uba74 \uc2a4\ud338\ud568\ub3c4 \ud655\uc778\ud574 \uc8fc\uc138\uc694.'
              }
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
              {'\uc694\uae08\uc548\ub0b4\ub85c'}
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
            {'\uacac\uc801 \xb7 \ub3c4\uc785\uc0c1\ub2f4 \xb7 \ubb38\uc758'}
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
            {'\ud504\ub85c\uc81d\ud2b8\xb7\uacac\uc801 \ubb38\uc758'}
          </h2>
          <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: 580, lineHeight: 1.78, marginBottom: 28 }}>
            {
              'AIDC, AI \ubcf4\uc548, \uc2a4\ud2b8\ub9ac\ubc0d \ub4f1 \ud544\uc694\ud558\uc2e0 \ubc94\uc704\ub97c \ub0a8\uaca8 \uc8fc\uc2dc\uba74 \ub3c4\uba54\uc778\ubcc4\ub85c \uac80\ud1a0 \ud6c4 \ud68c\uc2e0\ub4dc\ub9bd\ub2c8\ub2e4.'
            }
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
                  {'\ud68c\uc0ac\uba85'}
                </label>
                <input
                  name="company"
                  required
                  style={inputStyle}
                  placeholder={'\uc608: \u25cb\u25cb\u25cb'}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                  {'\ub2f4\ub2f9\uc790'}
                </label>
                <input
                  name="name"
                  required
                  style={inputStyle}
                  placeholder={'\uc131\ud568'}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                  {'\uc774\uba54\uc77c'}
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
                  {'\uc5f0\ub77d\ucc98'}
                </label>
                <input
                  name="phone"
                  type="tel"
                  style={inputStyle}
                  placeholder={'\uc120\ud0dd'}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                {'\uad00\uc2ec \uc11c\ube44\uc2a4'}
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
                  {'\uc120\ud0dd\ud574 \uc8fc\uc138\uc694'}
                </option>
                <optgroup label={'AIDC \xb7 \uc11c\ubc84'}>
                  <option>{'IDC \ucf54\ub85c\ucf00\uc774\uc158'}</option>
                  <option>{'\ubca0\uc5b4\uba54\ud0c8 \uc804\uc6a9\uc11c\ubc84'}</option>
                  <option>{'\ud074\ub77c\uc6b0\ub4dc \uc11c\ubc84'}</option>
                  <option>Proxmox VE</option>
                  <option>{'HA / DR \uc194\ub8e8\uc158'}</option>
                </optgroup>
                <optgroup label={'AI \ubcf4\uc548'}>
                  <option>{'AI \uc2e4\uc2dc\uac04 \uac10\uc9c0'}</option>
                  <option>{'\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548'}</option>
                  <option>IDS/IPS</option>
                  <option>{'\uc81c\ub85c\ud2b8\ub7ec\uc2a4\ud2b8 \uc124\uacc4'}</option>
                  <option>{'LLM \ubcf4\uc548 \uac10\uc0ac'}</option>
                </optgroup>
                <optgroup label={'\uc2a4\ud2b8\ub9ac\ubc0d'}>
                  <option>{'Ultrastream \uc2a4\ud2b8\ub9ac\ubc0d'}</option>
                  <option>{'VOD + \uba40\ud2f0 \uc2a4\ud2b8\ub9ac\ubc0d'}</option>
                </optgroup>
                <optgroup label={'\uae30\ud0c0'}>
                  <option>{'\ubcf5\ud569 \ubb38\uc758'}</option>
                </optgroup>
              </select>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                {'\ubb38\uc758 \ub0b4\uc6a9'}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                placeholder={
                  '\ud604\uc7ac \ud658\uacbd\uc774\ub098 \ud544\uc694\ud558\uc2e0 \ubc94\uc704\ub97c \uc801\uc5b4 \uc8fc\uc138\uc694.'
                }
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                {'\ubcf4\uc548 \ud655\uc778 '}
                <span style={{ color: '#ef4444' }}>*</span>
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
                  placeholder={'\uc815\ub2f5'}
                  required
                  aria-label={'\ubcf4\uc548 \ud655\uc778 \ub2f5'}
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
                  title={'\ub2e4\ub978 \ubb38\uc81c'}
                >
                  {'\ub2e4\ub978 \ubb38\uc81c'}
                </button>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text3)', marginTop: 6, fontFamily: 'var(--mono)' }}>
                {
                  '\uc790\ub3d9 \uc2e0\uccad \ubc29\uc9c0\uc6a9 \uac04\ub2e8 \uacc4\uc0b0\uc785\ub2c8\ub2e4. \uc694\uae08\uc81c \ubaa8\ub2ec\uacfc \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc785\ub2c8\ub2e4.'
                }
              </p>
            </div>

            {status === 'error' && (
              <p style={{ marginBottom: 12, fontSize: '0.85rem', color: '#dc2626', fontFamily: 'var(--sans)' }}>
                {
                  '\uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uac70\ub098 \uba54\uc77c\ub85c \ubb38\uc758\ud574 \uc8fc\uc138\uc694.'
                }
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
              {status === 'sending' ? '\uc804\uc1a1 \uc911\u2026' : '\ubb38\uc758 \ubcf4\ub0b4\uae30'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
