'use client'

const links = [
  ['서비스', '/#services'],
  ['요금', '/#pricing'],
  ['소개', '/#about'],
  ['문의', '/#contact'],
]

const companyInfo = [
  { label: '회사명', value: '(주)디엠엔솔루션' },
  { label: '사업자등록번호', value: '209-81-37743' },
  { label: '주소', value: '서울시 영등포구 영중로 140 5F' },
  { label: '전화', value: '0505-299-7623 / 0505-683-2580' },
  { label: '이메일', value: 'studios77@gmail.com / phd580@gmail.com' },
]

export default function Footer() {
  const footerBg = '#141210'

  return (
    <footer style={{ background: footerBg, borderTop: '1px solid rgba(245,243,239,0.12)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '52px 5% 32px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr auto', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.45rem', fontWeight: 800, color: '#faf8f5', marginBottom: 10, letterSpacing: '-0.03em' }}>
              DMN<span style={{ color: '#fb923c' }}>솔루션</span>
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: '#a8a29e', lineHeight: 1.55 }}>
              IDC · AI 보안 · 라이브 스트리밍
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {companyInfo.map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', fontWeight: 600, color: '#a8a29e', letterSpacing: '0.06em', minWidth: 96, flexShrink: 0 }}>
                  {label}
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: '#e7e5e4', fontWeight: 450, lineHeight: 1.55, flex: 1, minWidth: 0 }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', margin: 0, padding: 0, alignItems: 'flex-end' }}>
            {links.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  style={{ fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 600, color: '#d6d3d1', textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fb923c')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = '#d6d3d1')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 36, paddingTop: 20, borderTop: '1px solid rgba(245,243,239,0.08)', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: '#78716c', textAlign: 'center' }}>
            © 2026 (주)디엠엔솔루션 · DMN솔루션. All rights reserved. · dmns.co.kr
          </span>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          footer .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          footer .footer-links { align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
