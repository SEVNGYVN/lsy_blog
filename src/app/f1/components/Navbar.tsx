"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: '팀', href: '/f1/teams' },
  { label: '드라이버', href: '/f1/drivers' },
  { label: '서킷', href: '/f1/circuits' },
  { label: '순위', href: '/f1/standings' },
  { label: '뉴스', href: '/f1/articles' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(18,18,26,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* 로고 */}
        <Link href="/f1" style={{
          color: 'white', fontSize: '1.1rem', fontWeight: 900,
          letterSpacing: '-0.02em', textDecoration: 'none',
        }}>
          F1 에디토리얼
        </Link>

        {/* 메뉴 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: isActive ? 'white' : 'rgba(255,255,255,0.55)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  borderBottom: isActive ? '2px solid #005cab' : '2px solid transparent',
                  paddingBottom: '4px',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
