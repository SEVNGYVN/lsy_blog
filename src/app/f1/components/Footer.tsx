"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a10', padding: '3rem 0 2rem 0' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>

          {/* Brand */}
          <div>
            <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>F1 Overtake Lab</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.7 }}>
              모터스포츠의 정점을 향한 깊이 있는 분석과 인사이트를 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>바로가기</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: '팀', href: '/f1/teams' },
                { label: '드라이버', href: '/f1/drivers' },
                { label: '일정', href: '/f1/schedule' },
                { label: '순위', href: '/f1/standings' },
                { label: '뉴스', href: '/f1/articles' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >{label}</Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>리소스</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'F1 공식 사이트', url: 'https://www.formula1.com' },
                { label: 'FIA 규정', url: 'https://www.fia.com/regulation/category/110' },
                { label: 'F1 유튜브', url: 'https://www.youtube.com/@Formula1' },
              ].map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >{link.label}</a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>소셜</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: '𝕏', url: 'https://twitter.com/F1' },
                { icon: 'IG', url: 'https://www.instagram.com/f1/' },
                { icon: 'YT', url: 'https://www.youtube.com/@Formula1' },
              ].map((social) => (
                <a key={social.icon} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 800,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >{social.icon}</a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', margin: 0 }}>
            &copy; F1 Overtake Lab. 모든 권리 보유. F1CREW로부터 컨텐츠 사용 허가. 이 사이트는 Formula 1과 공식적으로 관련이 없습니다.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', margin: 0 }}>
            포트폴리오 프로젝트
          </p>
        </div>
      </div>
    </footer>
  );
}