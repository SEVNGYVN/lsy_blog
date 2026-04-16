"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { articles } from '../data';
import Navbar from '../../components/Navbar';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', background: '#faf9fd' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1b1f', marginBottom: '1rem' }}>기사를 찾을 수 없습니다</h1>
          <p style={{ color: '#707785', marginBottom: '2rem' }}>요청하신 기사가 존재하지 않거나 삭제되었습니다.</p>
          <Link href="/f1/articles" style={{ color: '#005cab', fontWeight: 600, textDecoration: 'none' }}>← 아티클 목록으로</Link>
        </div>
      </div>
    );
  }

  // 다른 기사 추천 (현재 기사 제외)
  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.tailwind = window.tailwind || {};
          window.tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#005cab", "on-primary": "#ffffff",
                  "on-background": "#1a1b1f", "on-surface": "#1a1b1f",
                  "on-surface-variant": "#404753", "secondary": "#5e5e62",
                  "outline": "#707785", "background": "#faf9fd",
                },
                fontFamily: { headline: ["Inter"], body: ["Inter"], label: ["Inter"] }
              }
            }
          };
        `
      }} />

      <div style={{ minHeight: '100vh', background: '#faf9fd', fontFamily: 'Inter, sans-serif', marginTop: '-80px' }}>

        {/* Nav */}
        <nav style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 50,
          background: 'rgba(250,249,253,0.8)', backdropFilter: 'blur(20px)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
            <Link href="/f1" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.04em', color: '#1E90FF', textDecoration: 'none' }}>F1 에디토리얼</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link href="/f1/articles" style={{ color: '#5e5e62', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>아티클</Link>
              <Link href="/f1/teams" style={{ color: '#5e5e62', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>팀</Link>
              <Link href="/f1/drivers" style={{ color: '#5e5e62', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>드라이버</Link>
              <Link href="/f1" style={{ color: '#5e5e62', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>메인으로</Link>
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>

          {/* Hero Image */}
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', marginBottom: '2.5rem' }}>
            <Link href="/f1/articles" style={{ color: '#005cab', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '1.5rem' }}>
              ← 아티클 목록
            </Link>
            <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '21/9', position: 'relative' }}>
              <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                  <span style={{
                    background: '#005cab', color: 'white',
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em',
                    padding: '4px 12px', borderRadius: '999px', textTransform: 'uppercase',
                  }}>{article.category}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 500 }}>{article.readTime} 읽기</span>
                </div>
                <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0, maxWidth: '800px' }}>
                  {article.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem' }}>

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e3e2e6' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #005cab, #1E90FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.8rem', fontWeight: 800,
              }}>F1</div>
              <div>
                <p style={{ color: '#1a1b1f', fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>{article.author}</p>
                <p style={{ color: '#707785', fontSize: '0.75rem', margin: '2px 0 0 0' }}>{article.date}</p>
              </div>
            </div>

            {/* Body */}
            <div style={{ marginBottom: '3rem' }}>
              {article.content.map((paragraph, i) => (
                <p key={i} style={{
                  color: '#2c2c2c', fontSize: '1.05rem', lineHeight: 1.9,
                  margin: '0 0 1.5rem 0', fontWeight: 400, letterSpacing: '-0.005em',
                }}>
                  {i === 0 ? (
                    <>
                      <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1b1f' }}>{paragraph.charAt(0)}</span>
                      {paragraph.slice(1)}
                    </>
                  ) : paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid #e3e2e6' }}>
              {['F1', '2026', article.category].map((tag) => (
                <span key={tag} style={{
                  background: '#f0f0f4', color: '#5e5e62',
                  fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em',
                  padding: '5px 14px', borderRadius: '999px',
                }}>{tag}</span>
              ))}
            </div>

          </div>

          {/* Related Articles */}
          {otherArticles.length > 0 && (
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1a1b1f', letterSpacing: '-0.01em', marginBottom: '1.5rem' }}>다른 아티클</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {otherArticles.map((other, i) => (
                  <Link key={i} href={`/f1/articles/${other.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '0',
                      borderRadius: '16px', overflow: 'hidden', background: 'white',
                      border: '1px solid #e3e2e6', cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                        <img src={other.image} alt={other.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <span style={{
                            background: '#005cab', color: 'white',
                            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em',
                            padding: '3px 8px', borderRadius: '999px', textTransform: 'uppercase',
                          }}>{other.category}</span>
                          <span style={{ color: '#aaa', fontSize: '0.7rem' }}>{other.readTime} 읽기</span>
                        </div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a1b1f', margin: '0 0 6px 0', lineHeight: 1.3 }}>{other.title}</h4>
                        <p style={{ color: '#707785', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>{other.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </main>

        {/* Footer */}
        <footer style={{ background: '#0a0a10', padding: '2.5rem 0 1.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', margin: 0 }}>
                &copy; 2026 F1 에디토리얼. 모든 권리 보유.
              </p>
              <Link href="/f1" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textDecoration: 'none' }}>
                메인으로 돌아가기
              </Link>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
