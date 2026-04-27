"use client";

import Link from 'next/link';
import { articles } from './data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ArticlesPage() {
  const featuredArticle = articles[0];
  const featuredHref = featuredArticle.externalUrl
    ? featuredArticle.externalUrl
    : `/f1/articles/${featuredArticle.slug}`;
  const featuredIsExternal = !!featuredArticle.externalUrl;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
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
                  "surface-variant": "#e3e2e6", "outline": "#707785",
                  "background": "#faf9fd",
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
          <Navbar />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
            <Link href="/f1" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.04em', color: '#1E90FF', textDecoration: 'none' }}>F1 에디토리얼</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link href="/f1/teams" style={{ color: '#5e5e62', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>팀</Link>
              <Link href="/f1/drivers" style={{ color: '#5e5e62', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>드라이버</Link>
              <Link href="/f1" style={{ color: '#5e5e62', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>메인으로</Link>
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>

          {/* Header */}
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }}>
            <span style={{ color: '#5e5e62', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}> </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#1a1b1f', margin: '0 0 1rem 0', lineHeight: 1.1 }}>
              분석 뉴스
            </h1>
            <p style={{ color: '#707785', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.7 }}>
              기술 분석, 드라이버 마켓, 레이스 리뷰까지. F1의 모든 것을 깊이 있게 다룹니다.
            </p>
          </div>

          {/* Featured Article (첫 번째 기사를 크게) */}
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }}>
            <a
              href={featuredHref}
              {...(featuredIsExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0',
                borderRadius: '20px', overflow: 'hidden', background: '#12121A',
                cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ overflow: 'hidden', background: '#1a1a2e' }}>
                  <img src={featuredArticle.image} alt={featuredArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                    <span style={{
                      background: '#005cab', color: 'white',
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em',
                      padding: '4px 12px', borderRadius: '999px', textTransform: 'uppercase',
                    }}>{featuredArticle.category}</span>
                  </div>
                  <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
                    {featuredArticle.title}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 1.5rem 0' }}>
                    {featuredArticle.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>{featuredArticle.author}</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>{featuredArticle.date}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Article Grid (나머지 기사들) */}
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1a1b1f', letterSpacing: '-0.01em', marginBottom: '1.5rem' }}>최신 아티클</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {articles.map((article, i) => {
                const href = article.externalUrl
                  ? article.externalUrl
                  : `/f1/articles/${article.slug}`;
                const isExternal = !!article.externalUrl;

                return (
                  <a
                    key={i}
                    href={href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
                      background: 'white', border: '1px solid #e3e2e6',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ overflow: 'hidden', background: '#f0f0f4' }}>
                        <img
                          src={article.image}
                          alt={article.title}
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                      <div style={{ padding: '1.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                          <span style={{
                            background: '#005cab', color: 'white',
                            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em',
                            padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase',
                          }}>{article.category}</span>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a1b1f', margin: '0 0 8px 0', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{article.title}</h3>
                        <p style={{ color: '#707785', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 12px 0' }}>{article.description}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: '#aaa', fontSize: '0.7rem' }}>{article.author}</span>
                          <span style={{ color: '#ddd' }}>·</span>
                          <span style={{ color: '#aaa', fontSize: '0.7rem' }}>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}
