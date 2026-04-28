import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      id="main-content"
      role="main"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 5%',
        background: 'var(--bg)',
        color: 'var(--text)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 16,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          marginBottom: 12,
        }}
      >
        페이지를 찾을 수 없습니다
      </h1>
      <p style={{ fontSize: '0.95rem', color: 'var(--text2)', textAlign: 'center', maxWidth: 420, lineHeight: 1.7, marginBottom: 36 }}>
        주소가 잘못되었거나 삭제된 페이지입니다. 메인 화면에서 서비스를 선택하거나 문의로 이동해 주세요.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            padding: '12px 28px',
            background: 'var(--accent)',
            color: '#000',
            borderRadius: 4,
            fontFamily: 'var(--mono)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textDecoration: 'none',
          }}
        >
          메인으로
        </Link>
        <Link
          href="/#contact"
          style={{
            padding: '12px 28px',
            background: 'transparent',
            color: 'var(--text)',
            border: '1px solid var(--border2)',
            borderRadius: 4,
            fontFamily: 'var(--mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.06em',
            textDecoration: 'none',
          }}
        >
          문의하기
        </Link>
      </div>
    </div>
  )
}
