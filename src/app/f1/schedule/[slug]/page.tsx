"use client";

import { useState } from 'react';
import { use } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { raceEvents, resolveDriverName, resolveTeamName, resolveTeamColor } from '../data';
import Footer from '../../components/Footer';

const resultTypeLabels: Record<string, string> = {
  race: 'Race Result',
  qualifying: 'Qualifying',
  sprint: 'Sprint',
};

export default function RaceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const pathname = usePathname();

  // slug를 params에서 가져오거나, 안 되면 pathname에서 추출
  const slug = resolvedParams?.slug || pathname?.split('/').pop() || '';
  const event = raceEvents.find(e => e.slug === slug);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    schedule: true,
    circuit: true,
    results: true,
  });

  const [activeResultType, setActiveResultType] = useState<'race' | 'qualifying' | 'sprint'>('race');
  const [showAllResults, setShowAllResults] = useState(false);

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!event) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '100vh', background: '#f5f5f0', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '64px' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1b1f', marginBottom: '1rem' }}>레이스를 찾을 수 없습니다</h1>
            <p style={{ color: '#707785', marginBottom: '2rem' }}>해당 레이스 데이터가 아직 준비되지 않았습니다.</p>
            <Link href="/f1/schedule" style={{ color: '#005cab', fontWeight: 700, textDecoration: 'none' }}>← 일정으로 돌아가기</Link>
          </div>
        </div>
      </>
    );
  }

  const availableResultTypes = event.results
    ? (Object.keys(event.results) as ('race' | 'qualifying' | 'sprint')[])
    : [];

  const currentResults = event.results?.[activeResultType] ?? [];
  const displayedResults = showAllResults ? currentResults : currentResults.slice(0, 5);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <Navbar />

      <div style={{ minHeight: '100vh', background: '#f5f5f0', fontFamily: 'Inter, sans-serif' }}>

        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #12121A 0%, #1a1a2e 60%, #16213e 100%)',
          paddingTop: '80px',
          paddingBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* 히어로 이미지 배경 */}
          {event.heroImage && (
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              pointerEvents: 'none',
            }}>
              <img
                src={event.heroImage}
                alt={event.raceName}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  opacity: 0.55,
                }}
              />
              {/* 텍스트 가독성을 위한 오버레이 */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to right, rgba(18,18,26,0.6) 40%, rgba(18,18,26,0.15) 100%)',
              }} />
            </div>
          )}
          {/* 배경 장식 */}
          <div style={{
            position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
            background: 'linear-gradient(135deg, transparent 0%, rgba(220,0,0,0.08) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 2rem 0' }}>
            {/* 뒤로가기 */}
            <Link href="/f1/schedule" style={{
              color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
              marginBottom: '1.5rem',
            }}>
              ← 일정으로 돌아가기
            </Link>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                  <span style={{
                    background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                    padding: '4px 12px', borderRadius: '999px', textTransform: 'uppercase',
                  }}>ROUND {event.round}</span>
                  {event.isCompleted && (
                    <span style={{
                      background: 'rgba(0,200,100,0.15)', color: '#00c864',
                      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                      padding: '4px 12px', borderRadius: '999px', textTransform: 'uppercase',
                      border: '1px solid rgba(0,200,100,0.3)',
                    }}>완료</span>
                  )}
                  {!event.isCompleted && (
                    <span style={{
                      background: 'rgba(0,92,171,0.2)', color: '#4da6ff',
                      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                      padding: '4px 12px', borderRadius: '999px', textTransform: 'uppercase',
                      border: '1px solid rgba(0,92,171,0.4)',
                    }}>예정</span>
                  )}
                </div>
                <img
                  src={`https://flagcdn.com/w80/${event.flag}.png`}
                  alt={event.country}
                  style={{ height: '36px', width: 'auto', borderRadius: '4px', marginBottom: '0.5rem', display: 'block' }}
                />
                <h1 style={{
                  color: 'white', fontSize: '2.8rem', fontWeight: 900,
                  letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 0.5rem 0',
                }}>
                  {event.raceName}
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', margin: 0 }}>
                  {event.location} · {event.circuit.name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 2rem' }}>

          {/* ─── 세션 일정 섹션 ─── */}
          <div style={{
            background: 'white', borderRadius: '20px', overflow: 'hidden',
            boxShadow: '0 2px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem',
          }}>
            <button
              onClick={() => toggleSection('schedule')}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.5rem 2rem', background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: openSections.schedule ? '1px solid #f0f0f0' : 'none',
              }}
            >
              <h2 style={{
                fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em',
                color: '#1a1b1f', margin: 0, textTransform: 'uppercase',
              }}>SCHEDULE</h2>
              <span style={{
                fontSize: '1.2rem', color: '#707785',
                transform: openSections.schedule ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s',
                display: 'inline-block',
              }}>▼</span>
            </button>

            {openSections.schedule && (
              <div>
                {event.sessions.map((session, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center',
                    padding: '1.25rem 2rem',
                    borderBottom: i < event.sessions.length - 1 ? '1px solid #f5f5f5' : 'none',
                  }}>
                    <div style={{ minWidth: '60px', marginRight: '1.5rem' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1a1b1f', lineHeight: 1 }}>
                        {session.day}
                      </div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#707785', letterSpacing: '0.08em' }}>
                        {session.month}
                      </div>
                    </div>
                    <div style={{ width: '1px', height: '40px', background: '#e3e2e6', marginRight: '1.5rem' }} />
                    <div style={{ fontSize: '1.1rem', marginRight: '1rem', opacity: 0.6 }}>🏁</div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '1rem', fontWeight: 800, color: '#1a1b1f',
                        letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif',
                      }}>
                        {session.name}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#707785', marginTop: '2px' }}>
                        {session.startTime}{session.endTime ? ` – ${session.endTime}` : ''}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ─── 서킷 정보 섹션 ─── */}
          <div style={{
            background: 'white', borderRadius: '20px', overflow: 'hidden',
            boxShadow: '0 2px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem',
          }}>
            <button
              onClick={() => toggleSection('circuit')}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.5rem 2rem', background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: openSections.circuit ? '1px solid #f0f0f0' : 'none',
              }}
            >
              <h2 style={{
                fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em',
                color: '#1a1b1f', margin: 0, textTransform: 'uppercase',
              }}>CIRCUIT</h2>
              <span style={{
                fontSize: '1.2rem', color: '#707785',
                transform: openSections.circuit ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s',
                display: 'inline-block',
              }}>▼</span>
            </button>

            {openSections.circuit && (
              <div>
                <div style={{ height: '4px', background: 'linear-gradient(90deg, #DC0000 0%, #ff4444 80%, transparent 100%)', margin: '0 2rem' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <img
                      src={event.circuit.image}
                      alt={event.circuit.name}
                      style={{ maxWidth: '100%', maxHeight: '280px', objectFit: 'contain' }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div style="width:280px;height:200px;background:#f5f5f5;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:0.85rem;">서킷 이미지 준비 중</div>`;
                        }
                      }}
                    />
                  </div>
                  <div style={{ borderLeft: '1px solid #f0f0f0', paddingLeft: '2rem' }}>
                    <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f5f5f5' }}>
                      <div style={{ fontSize: '0.75rem', color: '#707785', fontWeight: 600, marginBottom: '6px' }}>Circuit Length</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1a1b1f', letterSpacing: '-0.02em' }}>
                        {event.circuit.length}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f5f5f5' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#707785', fontWeight: 600, marginBottom: '6px' }}>First Grand Prix</div>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1a1b1f' }}>{event.circuit.firstGrandPrix}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#707785', fontWeight: 600, marginBottom: '6px' }}>Number of Laps</div>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1a1b1f' }}>{event.circuit.numberOfLaps}</div>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#707785', fontWeight: 600, marginBottom: '6px' }}>Fastest lap time</div>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1a1b1f' }}>{event.circuit.fastestLapTime}</div>
                        <div style={{ fontSize: '0.75rem', color: '#707785', marginTop: '4px' }}>{event.circuit.fastestLapHolder}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#707785', fontWeight: 600, marginBottom: '6px' }}>Race Distance</div>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1a1b1f' }}>{event.circuit.raceDistance}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ─── 레이스 결과 섹션 (완료된 레이스만) ─── */}
          {event.isCompleted && event.results && (
            <div style={{
              background: 'white', borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
            }}>
              <button
                onClick={() => toggleSection('results')}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.5rem 2rem', background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: openSections.results ? '1px solid #f0f0f0' : 'none',
                }}
              >
                <h2 style={{
                  fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em',
                  color: '#1a1b1f', margin: 0, textTransform: 'uppercase',
                }}>RESULTS</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{
                    fontSize: '1.2rem', color: '#707785',
                    transform: openSections.results ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
                    display: 'inline-block',
                  }}>▼</span>
                </div>
              </button>

              {openSections.results && (
                <div>
                  <div style={{ padding: '1rem 2rem 0', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{
                      display: 'inline-flex', background: '#f5f5f0', borderRadius: '999px',
                      padding: '4px', gap: '4px',
                    }}>
                      {availableResultTypes.map(type => (
                        <button
                          key={type}
                          onClick={() => { setActiveResultType(type); setShowAllResults(false); }}
                          style={{
                            padding: '6px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.02em',
                            background: activeResultType === type ? 'white' : 'transparent',
                            color: activeResultType === type ? '#1a1b1f' : '#707785',
                            boxShadow: activeResultType === type ? '0 1px 6px rgba(0,0,0,0.1)' : 'none',
                            transition: 'all 0.2s',
                          }}
                        >
                          {resultTypeLabels[type]} {activeResultType === type ? '▾' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '1rem 2rem 0' }}>
                    <div style={{ background: '#fafafa', borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
                      <div style={{
                        display: 'grid', gridTemplateColumns: '60px 1fr 160px 80px',
                        padding: '0.75rem 1.5rem', borderBottom: '1px solid #e8e8e8',
                      }}>
                        {['POS.', 'DRIVER', 'TIME', 'POINTS'].map((h, i) => (
                          <div key={i} style={{
                            fontSize: '0.7rem', fontWeight: 700, color: '#aaa',
                            letterSpacing: '0.08em',
                            textAlign: i >= 2 ? 'right' as const : 'left' as const,
                          }}>{h}</div>
                        ))}
                      </div>

                      {displayedResults.map((result, i) => (
                        <div key={i} style={{
                          display: 'grid', gridTemplateColumns: '60px 1fr 160px 80px',
                          padding: '1rem 1.5rem',
                          borderBottom: i < displayedResults.length - 1 ? '1px solid #f0f0f0' : 'none',
                          alignItems: 'center',
                          background: i === 0 ? 'rgba(255,215,0,0.04)' : 'transparent',
                        }}>
                          <div style={{
                            fontSize: '1.1rem', fontWeight: 800, color: i === 0 ? '#b8860b' : '#1a1b1f',
                          }}>{result.pos}</div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                              width: '4px', height: '32px', borderRadius: '2px',
                              background: resolveTeamColor(result),
                              flexShrink: 0,
                            }} />
                            <div>
                              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a1b1f' }}>
                                {resolveDriverName(result)}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#707785', marginTop: '1px' }}>
                                {resolveTeamName(result)}
                              </div>
                            </div>
                          </div>

                          <div style={{
                            fontSize: '0.9rem', fontWeight: 600,
                            textAlign: 'right' as const,
                            color: result.time === 'DNF' ? '#DC0000' : '#1a1b1f',
                          }}>{result.time}</div>

                          <div style={{
                            fontSize: '1rem', fontWeight: 800, color: '#1a1b1f',
                            textAlign: 'right' as const,
                          }}>{result.points > 0 ? result.points : '-'}</div>
                        </div>
                      ))}
                    </div>

                    {currentResults.length > 5 && (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem 0' }}>
                        <button
                          onClick={() => setShowAllResults(prev => !prev)}
                          style={{
                            padding: '10px 28px', borderRadius: '999px',
                            border: '2px solid #1a1b1f', background: 'transparent',
                            fontSize: '0.85rem', fontWeight: 700, color: '#1a1b1f',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = '#1a1b1f';
                            (e.currentTarget as HTMLButtonElement).style.color = 'white';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                            (e.currentTarget as HTMLButtonElement).style.color = '#1a1b1f';
                          }}
                        >
                          {showAllResults ? 'Show less ▲' : 'Show all ▾'}
                        </button>
                      </div>
                    )}
                  </div>

                  <div style={{ height: '1.5rem' }} />
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}
