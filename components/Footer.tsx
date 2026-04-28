'use client'

const links = [
  ['Catalog', '/#services'],
  ['Pricing', '/#pricing'],
  ['Approach', '/#about'],
  ['Contact', '/#contact'],
]

const companyInfo = [
  { label: 'Legal name', value: '(주)디엠엔솔루션' },
  { label: 'Reg. no.', value: '209-81-37743' },
  { label: 'Address', value: '서울시 영등포구 영중로 140 5F' },
  { label: 'Phone', value: '0505-299-7623 / 0505-683-2580' },
  { label: 'Email', value: 'studios77@gmail.com / phd580@gmail.com' },
]

export default function Footer() {
  const footerBg = '#141210'

  return (
    <footer style={{ background: footerBg, borderTop: '1px solid rgba(245,243,239,0.12)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '52px 5% 32px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr auto', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.45rem', fontWeight: 800, color: '#faf8f5', marginBottom: 10, letterSpacing: '-0.03em' }}>
              DMN<span style={{ color: '#fb923c' }}>solution</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: '#a8a29e', letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.6 }}>
              Seoul · Hosted stacks · 보안 스트림
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {companyInfo.map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', fontWeight: 600, color: '#a8a29e', letterSpacing: '0.08em', minWidth: 88, flexShrink: 0 }}>
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

        <div style={{ marginTop: 36, paddingTop: 20, borderTop: '1px solid rgba(245,243,239,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: '#78716c', letterSpacing: '0.06em' }}>
            © 2026 DMN Solution Corp. · All rights reserved.
          </span>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: '#78716c' }}>
            dmns.co.kr — 자체 카피 · 타이포 · 섹션 설계 (제3자 테마 재판매 없음).
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
