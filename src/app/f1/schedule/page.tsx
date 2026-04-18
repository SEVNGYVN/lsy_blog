"use client";

import Navbar from '../components/Navbar';

/* ───────────────────────────────────────────
   2026 F1 레이스 캘린더 데이터
   status: 'done' | 'next' | 'upcoming'
─────────────────────────────────────────── */
const races = [
  {
    round: 1, name: 'Australia', flag: '🇦🇺',
    fullName: 'FORMULA 1 QATAR AIRWAYS AUSTRALIAN GRAND PRIX 2026',
    dates: '14 – 16 MAR', status: 'done',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Australia.webp',
    podium: [
      { pos: 1, code: 'RUS', time: '1:23:06.801', color: '#38d2b8' },
      { pos: 2, code: 'ANT', time: '+2.974', color: '#38d2b8' },
      { pos: 3, code: 'LEC', time: '+15.519', color: '#DC0000' },
    ],
  },
  {
    round: 2, name: 'China', flag: '🇨🇳',
    fullName: 'FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2026',
    dates: '21 – 23 MAR', status: 'done',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/China.webp',
    podium: [
      { pos: 1, code: 'ANT', time: '1:33:15.607', color: '#38d2b8' },
      { pos: 2, code: 'RUS', time: '+5.515', color: '#38d2b8' },
      { pos: 3, code: 'HAM', time: '+25.267', color: '#DC0000' },
    ],
  },
  {
    round: 3, name: 'Japan', flag: '🇯🇵',
    fullName: 'FORMULA 1 ARAMCO JAPANESE GRAND PRIX 2026',
    dates: '27 – 29 MAR', status: 'done',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Japan.webp',
    podium: [
      { pos: 1, code: 'ANT', time: '1:28:03.403', color: '#38d2b8' },
      { pos: 2, code: 'PIA', time: '+13.722', color: '#FF8000' },
      { pos: 3, code: 'LEC', time: '+15.27', color: '#DC0000' },
    ],
  },
  {
    round: 4, name: 'Miami', flag: '🇺🇸',
    fullName: 'FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2026',
    dates: '01 – 03 MAY', status: 'next',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Miami.webp',
    podium: null,
  },
  {
    round: 5, name: 'Canada', flag: '🇨🇦',
    fullName: 'FORMULA 1 LENOVO GRAND PRIX DU CANADA 2026',
    dates: '22 – 24 MAY', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp',
    podium: null,
  },
  {
    round: 6, name: 'Monaco', flag: '🇲🇨',
    fullName: 'FORMULA 1 LOUIS VUITTON GRAND PRIX DE MONACO 2026',
    dates: '29 – 31 MAY', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Monaco.webp',
    podium: null,
  },
  {
    round: 7, name: 'Spain', flag: '🇪🇸',
    fullName: 'FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2026',
    dates: '12 – 14 JUN', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Spain.webp',
    podium: null,
  },
  {
    round: 8, name: 'Austria', flag: '🇦🇹',
    fullName: 'FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2026',
    dates: '26 – 28 JUN', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Austria.webp',
    podium: null,
  },
  {
    round: 9, name: 'Great Britain', flag: '🇬🇧',
    fullName: 'FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2026',
    dates: '03 – 05 JUL', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Great%20Britain.webp',
    podium: null,
  },
  {
    round: 10, name: 'Belgium', flag: '🇧🇪',
    fullName: 'FORMULA 1 ROLEX BELGIAN GRAND PRIX 2026',
    dates: '24 – 26 JUL', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Belgium.webp',
    podium: null,
  },
  {
    round: 11, name: 'Hungary', flag: '🇭🇺',
    fullName: 'FORMULA 1 HUNGARIAN GRAND PRIX 2026',
    dates: '31 JUL – 02 AUG', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Hungary.webp',
    podium: null,
  },
  {
    round: 12, name: 'Netherlands', flag: '🇳🇱',
    fullName: 'FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2026',
    dates: '28 – 30 AUG', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Netherlands.webp',
    podium: null,
  },
  {
    round: 13, name: 'Italy', flag: '🇮🇹',
    fullName: 'FORMULA 1 PIRELLI GRAN PREMIO D\'ITALIA 2026',
    dates: '04 – 06 SEP', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Italy.webp',
    podium: null,
  },
  {
    round: 14, name: 'Azerbaijan', flag: '🇦🇿',
    fullName: 'FORMULA 1 AZERBAIJAN GRAND PRIX 2026',
    dates: '18 – 20 SEP', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan.webp',
    podium: null,
  },
  {
    round: 15, name: 'Singapore', flag: '🇸🇬',
    fullName: 'FORMULA 1 SINGAPORE GRAND PRIX 2026',
    dates: '02 – 04 OCT', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Singapore.webp',
    podium: null,
  },
  {
    round: 16, name: 'United States', flag: '🇺🇸',
    fullName: 'FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2026',
    dates: '16 – 18 OCT', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/USA.webp',
    podium: null,
  },
  {
    round: 17, name: 'Mexico', flag: '🇲🇽',
    fullName: 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2026',
    dates: '23 – 25 OCT', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Mexico.webp',
    podium: null,
  },
  {
    round: 18, name: 'Brazil', flag: '🇧🇷',
    fullName: 'FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2026',
    dates: '06 – 08 NOV', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Brazil.webp',
    podium: null,
  },
  {
    round: 19, name: 'Las Vegas', flag: '🇺🇸',
    fullName: 'FORMULA 1 HEINEKEN LAS VEGAS GRAND PRIX 2026',
    dates: '19 – 21 NOV', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Las%20Vegas.webp',
    podium: null,
  },
  {
    round: 20, name: 'Qatar', flag: '🇶🇦',
    fullName: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2026',
    dates: '28 – 30 NOV', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Qatar.webp',
    podium: null,
  },
  {
    round: 21, name: 'Abu Dhabi', flag: '🇦🇪',
    fullName: 'FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2026',
    dates: '05 – 07 DEC', status: 'upcoming',
    image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Abu%20Dhabi.webp',
    podium: null,
  },
];

/* ───────────────────────────────────────────
   포디움 순위 접미사
─────────────────────────────────────────── */
function posLabel(pos: number) {
  if (pos === 1) return '1ST';
  if (pos === 2) return '2ND';
  return '3RD';
}

export default function CircuitPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0e0e16', paddingTop: '64px' }}>
      <Navbar />

      {/* ── 헤더 ── */}
      <div style={{ background: '#12121A', padding: '3rem 2rem 1rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ borderTop: '4px solid #e10600', marginBottom: '2rem' }} />
        <h1 style={{
          color: 'white', fontSize: '3rem', fontWeight: 900,
          letterSpacing: '-0.03em', margin: '0 0 0.5rem 0',
        }}>
          2026 F1 RACE CALENDAR
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 600, margin: '0 0 2rem 0' }}>
          21 ROUNDS · 2026 SEASON
        </p>
      </div>

      {/* ── 레이스 그리드 ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}>
          {races.map((race) => {
            const isNext = race.status === 'next';
            const isDone = race.status === 'done';

            return (
              <div
                key={race.round}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: isNext ? '#e10600' : '#1a1a28',
                  border: isNext
                    ? 'none'
                    : isDone
                    ? '1px solid rgba(255,255,255,0.08)'
                    : '1px solid rgba(255,255,255,0.04)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = isNext
                    ? '0 20px 60px rgba(225,6,0,0.4)'
                    : '0 12px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* 배경 이미지 (done / next 카드) */}
                {(isDone || isNext) && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${race.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isNext ? 0.15 : 0.08,
                  }} />
                )}

                <div style={{ position: 'relative', zIndex: 1, padding: '1.4rem 1.6rem' }}>

                  {/* 상단: 라운드 + NEXT RACE 뱃지 + 날짜 */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                    <div>
                      <p style={{
                        color: isNext ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)',
                        fontSize: '0.7rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0,
                      }}>
                        ROUND {race.round}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {isDone && (
                        <span style={{
                          background: 'rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.5)',
                          fontSize: '0.6rem', fontWeight: 700,
                          padding: '3px 10px', borderRadius: '4px',
                          letterSpacing: '0.06em',
                        }}>✓ 완료</span>
                      )}
                      {isNext && (
                        <span style={{
                          background: 'white',
                          color: '#e10600',
                          fontSize: '0.6rem', fontWeight: 800,
                          padding: '3px 10px', borderRadius: '4px',
                          letterSpacing: '0.06em',
                        }}>NEXT RACE ›</span>
                      )}
                      <p style={{
                        color: isNext ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                        fontSize: '0.72rem', fontWeight: 700,
                        letterSpacing: '0.06em', margin: 0,
                      }}>
                        {race.dates}
                      </p>
                    </div>
                  </div>

                  {/* 국기 + 나라 이름 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.4rem' }}>{race.flag}</span>
                    <p style={{
                      color: 'white',
                      fontSize: isNext ? '2rem' : '1.5rem',
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      margin: 0, lineHeight: 1,
                    }}>
                      {race.name}
                    </p>
                  </div>

                  {/* 풀 레이스명 */}
                  <p style={{
                    color: isNext ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)',
                    fontSize: '0.65rem', fontWeight: 600,
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                    margin: '0 0 1.2rem 0',
                  }}>
                    {race.fullName}
                  </p>

                  {/* 포디움 결과 (done 카드) */}
                  {isDone && race.podium && (
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px',
                    }}>
                      {race.podium.map((p) => (
                        <div key={p.pos} style={{
                          background: 'rgba(255,255,255,0.06)',
                          borderRadius: '10px',
                          padding: '10px 12px',
                          borderLeft: `3px solid ${p.color}`,
                        }}>
                          <p style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.6rem', fontWeight: 800,
                            letterSpacing: '0.08em', margin: '0 0 4px 0',
                          }}>{posLabel(p.pos)}</p>
                          <p style={{
                            color: 'white', fontSize: '1rem',
                            fontWeight: 900, margin: '0 0 2px 0',
                            letterSpacing: '0.02em',
                          }}>{p.code}</p>
                          <p style={{
                            color: 'rgba(255,255,255,0.4)',
                            fontSize: '0.65rem', fontWeight: 600, margin: 0,
                          }}>{p.time}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 다음 레이스 카운트다운 텍스트 */}
                  {isNext && (
                    <div style={{
                      background: 'rgba(0,0,0,0.2)',
                      borderRadius: '10px', padding: '10px 14px',
                      display: 'inline-block',
                    }}>
                      <p style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '0.8rem', fontWeight: 700, margin: 0,
                      }}>🏁 다음 레이스</p>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
