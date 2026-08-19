'use client'

import { useState, useEffect } from 'react'
import { getWeb3FormsKey } from '@/lib/web3formsKey'

const SERVICES = ['IDC', 'AI', '보안', '스트리밍', '기타']

/**
 * 문의를 어디로 보낼지.
 *
 *   'server'    → `/api/contact` (Cloudflare Pages Function).
 *                 키가 서버에만 있어 안전합니다. ZeptoMail·Resend·웹훅 중
 *                 하나가 설정돼 있어야 동작합니다.
 *   'web3forms' → 브라우저에서 Web3Forms 를 직접 호출합니다.
 *
 * **지금 'web3forms' 인 이유.** 이관하며 전달을 서버 경유로 바꿨는데,
 * Web3Forms 무료 플랜은 서버에서 호출하면 403 으로 막습니다.
 *
 *   POST https://api.web3forms.com/submit → 403
 *   "This method is not allowed. Use our API in client side or contact
 *    support with server IP address (Pro plan is required)"
 *
 * 그래서 폼이 502 를 돌려주고 문의가 한 건도 전달되지 않았습니다. 무료 플랜을
 * 쓰는 동안에는 브라우저에서 직접 부르는 것이 유일하게 동작하는 경로입니다.
 *
 * **서버 경로로 되돌리는 법**: Cloudflare Secret 에 `RESEND_API_KEY` 와
 * `CONTACT_TO_EMAIL` 을 넣고(또는 Web3Forms Pro 결제) 이 값을 'server' 로
 * 바꾸세요. 그때부터 접근 키가 브라우저 번들에서 사라집니다.
 */
const DELIVERY_MODE: 'server' | 'web3forms' = 'web3forms'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/** 입력 요소 공통 스타일. outline을 지우는 대신 focus 링을 남겨 키보드 접근성을 유지합니다. */
const FIELD =
  'w-full rounded-lg border border-line bg-canvas px-4 py-3 text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/60'

const LABEL = 'mb-2 block text-body text-fg-muted'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'IDC',
    message: '',
  })

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 })
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'unconfigured'>('idle')

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    })
    setCaptchaAnswer('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check CAPTCHA
    if (parseInt(captchaAnswer) !== captcha.num1 + captcha.num2) {
      alert('자동가입방지(캡챠) 정답이 올바르지 않습니다.')
      generateCaptcha()
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const outcome =
        DELIVERY_MODE === 'server' ? await sendViaServer() : await sendViaWeb3Forms()

      if (outcome === 'success') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', service: 'IDC', message: '' })
        generateCaptcha()
        return
      }

      // 접수되지 않은 문의를 접수된 것처럼 보이게 하지 않습니다. 실패는 실패로
      // 알리고 이메일 주소를 함께 안내합니다.
      setSubmitStatus(outcome)
    } catch (error) {
      console.warn('[ContactForm] 문의 전송 실패', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  /** Cloudflare Pages Function 경유. 전달 채널은 서버 환경변수에만 있습니다. */
  async function sendViaServer(): Promise<'success' | 'error' | 'unconfigured'> {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (res.ok) return 'success'
    // 503 = 관리자가 전달 채널을 아직 설정하지 않음.
    return res.status === 503 ? 'unconfigured' : 'error'
  }

  /** 브라우저에서 Web3Forms 직접 호출. 무료 플랜에서 동작하는 유일한 경로입니다. */
  async function sendViaWeb3Forms(): Promise<'success' | 'error' | 'unconfigured'> {
    const accessKey = getWeb3FormsKey()
    // 키가 없으면 보낼 곳이 없습니다. 빌드 환경에 NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    // 가 빠진 경우이고, 조용히 실패시키는 대신 대체 수단을 안내합니다.
    if (!accessKey) return 'unconfigured'

    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[DMN솔루션] 문의 접수 — ${formData.service}`,
        from_name: 'DMN솔루션 웹사이트',
        // 답장 버튼이 문의자에게 바로 가도록 합니다.
        replyto: formData.email,
        이름: formData.name,
        회사: formData.company || '(미기재)',
        관심분야: formData.service,
        이메일: formData.email,
        문의내용: formData.message,
        // 허니팟. 사람은 볼 수 없는 필드라 값이 차 있으면 봇입니다.
        botcheck: '',
      }),
    })

    if (!res.ok) return 'error'
    // Web3Forms 는 200 을 주면서 본문에 success:false 를 담는 경우가 있습니다.
    // 상태코드만 보면 실패를 성공으로 표시하게 됩니다.
    const body = (await res.json().catch(() => null)) as { success?: boolean } | null
    return body?.success ? 'success' : 'error'
  }

  return (
    <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <div className="mb-6 flex items-start gap-5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line bg-elev text-2xl">
          📧
        </div>
        <div>
          <h3 className="mb-2 text-[1.25rem] font-bold text-fg">이메일 문의 폼</h3>
          <p className="break-keep text-body text-fg-muted">
            상세한 제안서 요청, 기술 검토서 전달 등 문의사항을 남겨주시면 검토 후 24시간 이내에 회신해 드립니다.
            <br />
            <a
              href="mailto:dmnsolution251@gmail.com"
              className="mt-2 inline-block rounded-md border border-line bg-elev px-2 py-1 text-body font-semibold text-accent-2 transition-colors hover:border-accent-2"
            >
              dmnsolution251@gmail.com
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={LABEL}>이름 / 직급 *</label>
            <input
              id="cf-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={FIELD}
              placeholder="홍길동 과장"
            />
          </div>
          <div>
            <label htmlFor="cf-company" className={LABEL}>회사명</label>
            <input
              id="cf-company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={FIELD}
              placeholder="(주)루나플럭스"
            />
          </div>
        </div>

        <div>
          <span className={LABEL}>문의 서비스 *</span>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map(service => (
              <button
                key={service}
                type="button"
                aria-pressed={formData.service === service}
                onClick={() => setFormData(prev => ({ ...prev, service }))}
                className={`min-h-11 rounded-full border px-4 py-2 text-body transition-all duration-200 ${
                  formData.service === service
                    ? 'border-accent bg-accent/10 font-semibold text-accent'
                    : 'border-line bg-canvas text-fg-muted hover:border-line-strong hover:text-fg'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="cf-email" className={LABEL}>이메일 주소 *</label>
          <input
            id="cf-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={FIELD}
            placeholder="example@company.com"
          />
        </div>

        <div>
          <label htmlFor="cf-message" className={LABEL}>문의 내용 *</label>
          <textarea
            id="cf-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${FIELD} resize-y`}
            placeholder="도입하고자 하는 서비스나 궁금하신 점을 상세히 적어주세요."
          />
        </div>

        <div className="rounded-lg border border-line bg-elev p-4">
          <label htmlFor="cf-captcha" className="mb-3 block text-body text-fg-muted">
            자동등록방지 (캡챠) *
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-lg bg-canvas px-4 py-2 text-[1.2rem] font-bold tracking-[2px] text-fg">
              {captcha.num1} + {captcha.num2} = ?
            </div>
            <input
              id="cf-captcha"
              type="number"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
              className={`${FIELD} w-25`}
              placeholder="정답"
            />
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="rounded-lg bg-accent/10 p-3 text-body text-accent">
            성공적으로 문의가 접수되었습니다. 빠르게 회신드리겠습니다.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="rounded-lg bg-danger/10 p-3 text-body text-danger">
            문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주시고, 계속 실패하면{' '}
            <a href="mailto:dmnsolution251@gmail.com" className="font-semibold underline">
              dmnsolution251@gmail.com
            </a>
            로 직접 보내주세요.
          </div>
        )}

        {submitStatus === 'unconfigured' && (
          <div className="rounded-lg bg-warn/10 p-3 text-body text-warn">
            현재 온라인 접수가 준비 중입니다. 번거로우시겠지만{' '}
            <a href="mailto:dmnsolution251@gmail.com" className="font-semibold underline">
              dmnsolution251@gmail.com
            </a>
            로 보내주시면 동일하게 처리해 드립니다.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-lg bg-accent p-4 text-base font-bold text-canvas transition-all duration-200 hover:bg-accent-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? '접수 중...' : '문의 접수하기'}
        </button>
      </form>
    </div>
  )
}
