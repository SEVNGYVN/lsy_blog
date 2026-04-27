"use client";

import Link from 'next/link';
import Navbar from './components/Navbar';
import { articles } from './articles/data';


export default function Blog() {
  const handleAlert = (e: React.MouseEvent, msg: string) => {
    e.preventDefault();
    alert(msg);
  };

  const schedule = {
    previous: {
      round: 3, name: 'Japan', dates: '27 – 29 MAR',
      image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Japan.webp',
      highlightUrl: 'https://www.youtube.com/watch?v=oAtYfF0_4-I',
    },
    next: {
      round: 4, name: 'Miami', dates: '01 – 03 MAY',
      image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Miami.webp',
    },
    upcoming: {
      round: 5, name: 'Canada', dates: '22 – 24 MAY',
      image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp',
    },
  };

  const highlights = [
    {
      round: 'Round 1 · Melbourne',
      title: '2026 호주 그랑프리 하이라이트',
      url: 'https://www.youtube.com/watch?v=lL_d84cN1UY',
      thumbnail: 'https://img.youtube.com/vi/lL_d84cN1UY/maxresdefault.jpg',
    },
    {
      round: 'Round 2 · Shanghai',
      title: '2026 중국 그랑프리 하이라이트',
      url: 'https://www.youtube.com/watch?v=t8HpVlineX4',
      thumbnail: 'https://img.youtube.com/vi/t8HpVlineX4/maxresdefault.jpg',
    },
    {
     round: 'Round 3 · Suzuka',
      title: '2026 일본 그랑프리 하이라이트',
      url: 'https://www.youtube.com/watch?v=oAtYfF0_4-I',
      thumbnail: 'https://img.youtube.com/vi/oAtYfF0_4-I/maxresdefault.jpg', 
    },
  ];

  const standings = {
    drivers: [
      { pos: 1, name: 'Kimi Antonelli', team: 'Mercedes', points: 72, color: '#27F4D2' },
      { pos: 2, name: 'George Russell', team: 'Mercedes', points: 63, color: '#27F4D2' },
      { pos: 3, name: 'Charles Leclerc', team: 'Ferrari', points: 49, color: '#E8002D' },
      { pos: 4, name: 'Lewis Hamilton', team: 'Ferrari', points: 41, color: '#E8002D' },
      { pos: 5, name: 'Lando Norris', team: 'McLaren', points: 25, color: '#FF8000' },
    ],
    constructors: [
      { pos: 1, name: 'Mercedes', points: 135, color: '#27F4D2' },
      { pos: 2, name: 'Ferrari', points: 90, color: '#E8002D' },
      { pos: 3, name: 'McLaren', points: 46, color: '#FF8000' },
      { pos: 4, name: 'Haas F1 Team', points: 18, color: '#5E6D75' },
      { pos: 5, name: 'Alpine', points: 16, color: '#0090FF' },
    ],
  };

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
                  "on-surface-variant": "#404753", "on-secondary-fixed-variant": "#46464a",
                  "tertiary": "#5a5c5e", "on-primary": "#ffffff", "on-primary-fixed-variant": "#004786",
                  "surface-dim": "#dbd9de", "inverse-surface": "#2f3034", "secondary-fixed-dim": "#c7c6ca",
                  "primary": "#005cab", "on-error-container": "#93000a", "on-secondary": "#ffffff",
                  "on-background": "#1a1b1f", "surface-variant": "#e3e2e6", "surface-container-low": "#f4f3f7",
                  "tertiary-container": "#737576", "secondary": "#5e5e62", "primary-container": "#0075d6",
                  "background": "#faf9fd", "surface-container-lowest": "#ffffff", "secondary-fixed": "#e3e2e6",
                  "on-primary-fixed": "#001c3a", "inverse-primary": "#a5c8ff", "secondary-container": "#e0dfe3",
                  "primary-fixed-dim": "#a5c8ff", "tertiary-fixed": "#e2e2e4", "surface-container": "#efedf2",
                  "surface-bright": "#faf9fd", "on-secondary-container": "#626266", "surface-container-high": "#e9e7ec",
                  "on-tertiary-fixed": "#1a1c1d", "outline": "#707785", "surface-container-highest": "#e3e2e6",
                  "error-container": "#ffdad6", "on-error": "#ffffff", "error": "#ba1a1a",
                  "tertiary-fixed-dim": "#c6c6c8", "surface-tint": "#005faf", "on-tertiary-container": "#fcfcfe",
                  "on-secondary-fixed": "#1a1b1f", "surface": "#faf9fd", "inverse-on-surface": "#f2f0f4",
                  "on-tertiary-fixed-variant": "#454749", "on-surface": "#1a1b1f", "primary-fixed": "#d4e3ff",
                  "on-primary-container": "#fefcff", "outline-variant": "#c0c7d6", "on-tertiary": "#ffffff"
                },
                borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
                fontFamily: { headline: ["Inter"], body: ["Inter"], label: ["Inter"] }
              }
            }
          };
        `
      }} />

      <div className="f1-blog light bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed" style={{ minHeight: '100vh', marginTop: '-80px' }}>

        {/* Nav */}
        <Navbar />

        <main className="pt-24 pb-20">

          {/* Hero */}
          <div className="max-w-7xl mx-auto px-8 mb-16">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1]" style={{ letterSpacing: '-0.02em', color: 'black' }}>
                모터스포츠의 <span className="text-primary">정점</span>을 향한 깊이 있는 분석.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-sm font-medium leading-relaxed">
                F1과 관련한 정보를 공유합니다.
              </p>
            </div>
          </div>

          {/* ── Race Schedule Section ── */}
          <section style={{ background: '#12121A', padding: '4rem 0' }}>
            <div className="max-w-7xl mx-auto px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.01em' }}>2026 F1 레이스 캘린더</h2>
                <Link
                  href="/f1/schedule"
                  style={{
                    color: 'white', border: '1px solid rgba(255,255,255,0.3)',
                    padding: '0.4rem 1.2rem', borderRadius: '999px',
                    fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  전체 일정
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '16px', alignItems: 'center' }}>

                {/* Previous */}
                <a
                  href={schedule.previous.highlightUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    position: 'relative', borderRadius: '14px', overflow: 'hidden',
                    aspectRatio: '4/3', cursor: 'pointer', opacity: 0.75,
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.75'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                  >
                    <img src={schedule.previous.image} alt="Japan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>Previous</p>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', margin: '2px 0 0 0' }}>ROUND {schedule.previous.round}</p>
                      </div>
                      <div>
                        <p style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.02em', margin: 0, lineHeight: 1 }}>{schedule.previous.name}</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600, margin: '4px 0 0 0' }}>{schedule.previous.dates}</p>
                      </div>
                    </div>
                    {/* Highlight badge */}
                    <div style={{
                      position: 'absolute', top: '12px', right: '12px',
                      background: '#FF0000', color: 'white',
                      fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.05em',
                      padding: '3px 8px', borderRadius: '4px',
                    }}>▶ 하이라이트</div>
                  </div>
                </a>

                {/* Next (Featured - larger) */}
                <div style={{
                  position: 'relative', borderRadius: '16px', overflow: 'hidden',
                  aspectRatio: '4/3', cursor: 'default',
                  boxShadow: '0 0 0 3px #E10600, 0 20px 60px rgba(225,6,0,0.3)',
                }}>
                  <img src={schedule.next.image} alt="Miami" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: '1.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ color: '#E10600', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>Next Race</p>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', margin: '2px 0 0 0' }}>ROUND {schedule.next.round}</p>
                    </div>
                    <div>
                      <p style={{ color: 'white', fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>{schedule.next.name}</p>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600, margin: '6px 0 0 0' }}>{schedule.next.dates}</p>
                    </div>
                  </div>
                </div>

                {/* Upcoming */}
                <div style={{
                  position: 'relative', borderRadius: '14px', overflow: 'hidden',
                  aspectRatio: '4/3', opacity: 0.75,
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.75'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <img src={schedule.upcoming.image} alt="Canada" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>Upcoming</p>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', margin: '2px 0 0 0' }}>ROUND {schedule.upcoming.round}</p>
                    </div>
                    <div>
                      <p style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.02em', margin: 0, lineHeight: 1 }}>{schedule.upcoming.name}</p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600, margin: '4px 0 0 0' }}>{schedule.upcoming.dates}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── Highlights Section ── */}
          <section style={{ background: '#1a1a24', padding: '4rem 0' }}>
            <div className="max-w-7xl mx-auto px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
                  레이스 하이라이트
                </h2>
                <a
                  href="https://www.youtube.com/@Formula1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#FF0000', fontSize: '0.8rem', fontWeight: 700,
                    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  ▶ F1 공식 유튜브
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {highlights.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      borderRadius: '14px', overflow: 'hidden',
                      background: '#252530', cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(255,0,0,0.15)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                        <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{
                            width: '48px', height: '48px', borderRadius: '50%',
                            background: 'rgba(255,0,0,0.9)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            backdropFilter: 'blur(4px)',
                          }}>
                            <span style={{ color: 'white', fontSize: '1.2rem', marginLeft: '3px' }}>▶</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: '1rem 1.2rem' }}>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>{item.round}</p>
                        <p style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, margin: 0, lineHeight: 1.3 }}>{item.title}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── Standings Snapshot ── */}
          <section style={{ background: '#12121A', padding: '4rem 0' }}>
            <div className="max-w-7xl mx-auto px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.01em' }}>2026 챔피언십 순위</h2>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600 }}>Round 3 이후 기준</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

                {/* Drivers */}
                <div style={{ background: '#1e1e2a', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 1rem 0' }}>드라이버 순위</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {standings.drivers.map((d) => (
                      <div key={d.pos} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '10px 14px', borderRadius: '10px',
                        background: d.pos === 1 ? 'rgba(255,255,255,0.06)' : 'transparent',
                        transition: 'background 0.2s',
                      }}>
                        <span style={{
                          color: d.pos <= 3 ? 'white' : 'rgba(255,255,255,0.4)',
                          fontSize: '1rem', fontWeight: 900, width: '24px', textAlign: 'center',
                        }}>{d.pos}</span>
                        <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: d.color }} />
                        <div style={{ flex: 1 }}>
                          <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>{d.name}</p>
                          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 500, margin: '1px 0 0 0' }}>{d.team}</p>
                        </div>
                        <span style={{ color: 'white', fontSize: '1rem', fontWeight: 800 }}>{d.points}</span>
                        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', fontWeight: 600 }}>PTS</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Constructors */}
                <div style={{ background: '#1e1e2a', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 1rem 0' }}>컨스트럭터 순위</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {standings.constructors.map((c) => (
                      <div key={c.pos} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '10px 14px', borderRadius: '10px',
                        minHeight: '56px',
                        background: c.pos === 1 ? 'rgba(255,255,255,0.06)' : 'transparent',
                        transition: 'background 0.2s',
                      }}>
                        <span style={{
                          color: c.pos <= 3 ? 'white' : 'rgba(255,255,255,0.4)',
                          fontSize: '1rem', fontWeight: 900, width: '24px', textAlign: 'center',
                        }}>{c.pos}</span>
                        <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: c.color }} />
                        <div style={{ flex: 1 }}>
                          <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>{c.name}</p>
                        </div>
                        <span style={{ color: 'white', fontSize: '1rem', fontWeight: 800 }}>{c.points}</span>
                        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', fontWeight: 600 }}>PTS</span>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </section>

          {/* ── Editorial Articles Section ── */}
          <section className="max-w-7xl mx-auto px-8 py-20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-secondary uppercase tracking-widest text-xs font-semibold mb-2 block">에디토리얼</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#1a1b1f' }}>최신 분석 아티클</h2>
              </div>
              <Link
  href="/f1/articles"
  style={{
    color: '#005cab', border: '1px solid #005cab',
    padding: '0.5rem 1.4rem', borderRadius: '999px',
    fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
    cursor: 'pointer', transition: 'all 0.2s',
  }}
  onMouseEnter={e => { e.currentTarget.style.background = '#005cab'; e.currentTarget.style.color = 'white'; }}
  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#005cab'; }}
>
  전체 보기
</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {articles.map((article, i) => (
  <Link
  key={i}
  href={article.externalUrl ?? `/f1/articles/${article.slug}`}
  target={article.externalUrl ? '_blank' : undefined}
  rel={article.externalUrl ? 'noopener noreferrer' : undefined}
  style={{ textDecoration: 'none' }}
>
    <div
      style={{
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
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ padding: '1.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span style={{
                        background: '#005cab', color: 'white',
                        fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em',
                        padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase',
                      }}>{article.category}</span>
                      {/*<span style={{ color: '#707785', fontSize: '0.7rem', fontWeight: 500 }}>{article.readTime} 읽기</span>*/}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a1b1f', margin: '0 0 8px 0', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{article.title}</h3>
                    <p style={{ color: '#707785', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{article.description}</p>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          
          </section>

        </main>

        {/* Footer */}
        <footer style={{ background: '#0a0a10', padding: '3rem 0 2rem 0' }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>

              {/* Brand */}
              <div>
                <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>F1 에디토리얼</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                  모터스포츠의 정점을 향한 깊이 있는 분석과 인사이트를 제공합니다.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>바로가기</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['팀', '드라이버', '서킷', '순위'].map((label) => (
                    <a key={label} onClick={(e) => handleAlert(e, `${label} 페이지는 준비 중입니다!`)} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                    >{label}</a>
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
                &copy; 2026 F1 에디토리얼. 모든 권리 보유. F1CREW로부터 컨텐츠 사용 허가. 이 사이트는 Formula 1과 공식적으로 관련이 없습니다.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', margin: 0 }}>
                포트폴리오 프로젝트
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
