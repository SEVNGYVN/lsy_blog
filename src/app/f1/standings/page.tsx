"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

/* ───────────────────────────────────────────
   드라이버 순위 데이터 (1~22위)
   - image: public 폴더에 있는 드라이버 사진 경로
   - color: 팀 컬러 (포디움 카드 배경에 사용)
   - flag: 국기 이모지 (포디움 카드에 표시)
   ─────────────────────────────────────────── */
const driverStandings = [
  { pos: 1, firstName: 'Kimi', lastName: 'Antonelli', team: 'Mercedes', points: 72, color: '#38d2b8', image: '/M_ANT_NB.png', flag: '🇮🇹' },
  { pos: 2, firstName: 'George', lastName: 'Russell', team: 'Mercedes', points: 63, color: '#38d2b8', image: '/M_RUS_NB.png', flag: '🇬🇧' },
  { pos: 3, firstName: 'Charles', lastName: 'Leclerc', team: 'Ferrari', points: 49, color: '#DC0000', image: '/F_LEC_NB.png', flag: '🇲🇨' },
  { pos: 4, firstName: 'Lewis', lastName: 'Hamilton', team: 'Ferrari', points: 41, color: '#DC0000', image: '/F_HAM_NB.png', flag: '🇬🇧' },
  { pos: 5, firstName: 'Lando', lastName: 'Norris', team: 'McLaren', points: 25, color: '#FF8000', image: '/ML_NOR_NB.png', flag: '🇬🇧' },
  { pos: 6, firstName: 'Oscar', lastName: 'Piastri', team: 'McLaren', points: 21, color: '#FF8000', image: '/ML_PIA_NB.png', flag: '🇦🇺' },
  { pos: 7, firstName: 'Oliver', lastName: 'Bearman', team: 'Haas F1 Team', points: 17, color: '#5E6D75', image: '/H_BEA_NB.png', flag: '🇬🇧' },
  { pos: 8, firstName: 'Pierre', lastName: 'Gasly', team: 'Alpine', points: 15, color: '#0090FF', image: '/A_GAS_NB.png', flag: '🇫🇷' },
  { pos: 9, firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing', points: 12, color: '#3671C6', image: '/R_VER_NB.png', flag: '🇳🇱' },
  { pos: 10, firstName: 'Liam', lastName: 'Lawson', team: 'Racing Bulls', points: 10, color: '#003BD1', image: '/RB_LAW_NB.png', flag: '🇳🇿' },
  { pos: 11, firstName: 'Arvid', lastName: 'Lindblad', team: 'Racing Bulls', points: 4, color: '#003BD1', image: '/RB_LIN_NB.png', flag: '🇬🇧' },
  { pos: 12, firstName: 'Isack', lastName: 'Hadjar', team: 'Red Bull Racing', points: 4, color: '#3671C6', image: '/R_HAD_NB.png', flag: '🇫🇷' },
  { pos: 13, firstName: 'Gabriel', lastName: 'Bortoleto', team: 'Audi', points: 2, color: '#7D1600', image: '/AD_BOR_NB.png', flag: '🇧🇷' },
  { pos: 14, firstName: 'Carlos', lastName: 'Sainz', team: 'Williams', points: 2, color: '#041E3C', image: '/W_SAI_NB.png', flag: '🇪🇸' },
  { pos: 15, firstName: 'Esteban', lastName: 'Ocon', team: 'Haas F1 Team', points: 1, color: '#5E6D75', image: '/H_OCO_NB.png', flag: '🇫🇷' },
  { pos: 16, firstName: 'Franco', lastName: 'Colapinto', team: 'Alpine', points: 1, color: '#0090FF', image: '/A_COL_NB.png', flag: '🇦🇷' },
  { pos: 17, firstName: 'Nico', lastName: 'Hülkenberg', team: 'Audi', points: 0, color: '#7D1600', image: '/AD_HUL_NB.png', flag: '🇩🇪' },
  { pos: 18, firstName: 'Alexander', lastName: 'Albon', team: 'Williams', points: 0, color: '#041E3C', image: '/W_ALB_NB.png', flag: '🇹🇭' },
  { pos: 19, firstName: 'Valtteri', lastName: 'Bottas', team: 'Cadillac', points: 0, color: '#4B4C53', image: '/C_BOT_NB.png', flag: '🇫🇮' },
  { pos: 20, firstName: 'Sergio', lastName: 'Pérez', team: 'Cadillac', points: 0, color: '#4B4C53', image: '/C_PER_NB.png', flag: '🇲🇽' },
  { pos: 21, firstName: 'Fernando', lastName: 'Alonso', team: 'Aston Martin', points: 0, color: '#358C75', image: '/AM_ALO_NB.png', flag: '🇪🇸' },
  { pos: 22, firstName: 'Lance', lastName: 'Stroll', team: 'Aston Martin', points: 0, color: '#358C75', image: '/AM_STR_NB.png', flag: '🇨🇦' },
];

/* ───────────────────────────────────────────
   팀(컨스트럭터) 순위 데이터 (1~11위)
   ─────────────────────────────────────────── */
const teamStandings = [
  { pos: 1, name: 'Mercedes', points: 135, color: '#38d2b8', image: '/M_CAR_NB.png', drivers: 'Antonelli · Russell' },
  { pos: 2, name: 'Ferrari', points: 90, color: '#DC0000', image: '/F_CAR_NB.png', drivers: 'Leclerc · Hamilton' },
  { pos: 3, name: 'McLaren', points: 46, color: '#FF8000', image: '/ML_CAR_NB.png', drivers: 'Norris · Piastri' },
  { pos: 4, name: 'Haas F1 Team', points: 18, color: '#5E6D75', image: '/H_CAR_NB.png', drivers: 'Ocon · Bearman' },
  { pos: 5, name: 'Alpine', points: 16, color: '#0090FF', image: '/A_CAR_NB.png', drivers: 'Gasly · Colapinto' },
  { pos: 6, name: 'Red Bull Racing', points: 16, color: '#3671C6', image: '/R_CAR_NB.png', drivers: 'Verstappen · Hadjar' },
  { pos: 7, name: 'Racing Bulls', points: 14, color: '#003BD1', image: '/RB_CAR_NB.png', drivers: 'Lawson · Lindblad' },
  { pos: 8, name: 'Audi', points: 2, color: '#7D1600', image: '/AD_CAR_NB.png', drivers: 'Hülkenberg · Bortoleto' },
  { pos: 9, name: 'Williams', points: 2, color: '#041E3C', image: '/W_CAR_NB.png', drivers: 'Sainz · Albon' },
  { pos: 10, name: 'Cadillac', points: 0, color: '#4B4C53', image: '/C_CAR_NB.png', drivers: 'Pérez · Bottas' },
  { pos: 11, name: 'Aston Martin', points: 0, color: '#358C75', image: '/AM_CAR_NB.png', drivers: 'Alonso · Stroll' },
];

/* ───────────────────────────────────────────
   순위 접미사 (1st, 2nd, 3rd ...)
   ─────────────────────────────────────────── */
function ordinal(n: number) {
  if (n === 1) return { num: '1', suffix: 'ST' };
  if (n === 2) return { num: '2', suffix: 'ND' };
  if (n === 3) return { num: '3', suffix: 'RD' };
  return { num: String(n), suffix: 'TH' };
}

export default function StandingsPage() {
  const [activeTab, setActiveTab] = useState<'drivers' | 'teams'>('drivers');

  const podiumDrivers = driverStandings.slice(0, 3);
  // 포디움 순서: 2위 - 1위 - 3위
  const podiumOrder = [podiumDrivers[1], podiumDrivers[0], podiumDrivers[2]];

  const podiumTeams = teamStandings.slice(0, 3);
  const podiumTeamOrder = [podiumTeams[1], podiumTeams[0], podiumTeams[2]];

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e16', paddingTop: '64px' }}>
      <Navbar />

      {/* ── 헤더 ── */}
      <div style={{ background: '#12121A', padding: '3rem 2rem 1rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ borderTop: '4px solid #e10600', marginBottom: '2rem' }} />
        <h1 style={{
          color: 'white', fontSize: '3rem', fontWeight: 900,
          letterSpacing: '-0.03em', margin: '0 0 2rem 0',
          fontFamily: "'Inter', sans-serif",
        }}>
          2026 SEASON
        </h1>

        {/* ── 탭 전환 ── */}
        <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setActiveTab('drivers')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: activeTab === 'drivers' ? 'white' : 'rgba(255,255,255,0.4)',
              fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em',
              textTransform: 'uppercase', paddingBottom: '12px',
              borderBottom: activeTab === 'drivers' ? '3px solid #e10600' : '3px solid transparent',
              transition: 'all 0.2s',
            }}
          >
            DRIVERS
          </button>
          <button
            onClick={() => setActiveTab('teams')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: activeTab === 'teams' ? 'white' : 'rgba(255,255,255,0.4)',
              fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em',
              textTransform: 'uppercase', paddingBottom: '12px',
              borderBottom: activeTab === 'teams' ? '3px solid #e10600' : '3px solid transparent',
              transition: 'all 0.2s',
            }}
          >
            TEAMS
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════
          드라이버 순위 탭
         ══════════════════════════════════════ */}
      {activeTab === 'drivers' && (
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>

          {/* ── 포디움 카드 (2위 - 1위 - 3위) ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr 0.9fr',
            gap: '16px',
            marginBottom: '3rem',
            alignItems: 'end',
          }}>
            {podiumOrder.map((driver) => {
              const ord = ordinal(driver.pos);
              const isFirst = driver.pos === 1;
              return (
                <div key={driver.pos} style={{
                  background: `linear-gradient(135deg, ${driver.color} 0%, #0e0e16 100%)`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: isFirst ? '420px' : driver.pos === 2 ? '380px' : '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* 상단 정보 */}
                  <div style={{ padding: '1.5rem 1.5rem 0 1.5rem', position: 'relative', zIndex: 2 }}>
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>{ord.num}</span>
                      <sup style={{ fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', verticalAlign: 'super' }}>{ord.suffix}</sup>
                    </div>
                    <p style={{
                      color: 'white', fontSize: isFirst ? '1.8rem' : '1.5rem',
                      fontWeight: 900, lineHeight: 1.1, margin: '0 0 4px 0',
                      letterSpacing: '-0.02em',
                    }}>
                      {driver.firstName}<br /><span style={{ fontWeight: 900 }}>{driver.lastName}</span>
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, margin: '0 0 8px 0' }}>
                      {driver.team}
                    </p>
                    <span style={{ fontSize: '1.5rem' }}>{driver.flag}</span>
                  </div>

                  {/* 드라이버 이미지 */}
                  <div style={{
                    position: 'absolute', bottom: '0', right: '0',
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
                  }}>
                    <img
                      src={driver.image}
                      alt={`${driver.firstName} ${driver.lastName}`}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',        // contain → cover
                        objectPosition: 'top center',
                      }}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* 하단 포인트 */}
                  <div style={{
                    padding: '1rem 1.5rem',
                    background: 'rgba(0,0,0,0.2)',
                    position: 'relative', zIndex: 2,
                  }}>
                    <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900 }}>{driver.points}</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 700, marginLeft: '6px' }}>PTS</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── 전체 드라이버 순위 테이블 (1~22위) ── */}
          <div style={{
            background: '#1a1a28', borderRadius: '16px',
            overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                드라이버 챔피언십 순위
              </h2>
            </div>

            {driverStandings.map((driver, i) => (
              <div key={driver.pos} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px 1.5rem',
                borderBottom: i < driverStandings.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                background: driver.pos <= 3 ? 'rgba(255,255,255,0.03)' : 'transparent',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = driver.pos <= 3 ? 'rgba(255,255,255,0.03)' : 'transparent')}
              >
                {/* 순위 */}
                <span style={{
                  color: driver.pos <= 3 ? 'white' : 'rgba(255,255,255,0.4)',
                  fontSize: '1rem', fontWeight: 900, width: '32px', textAlign: 'center',
                }}>
                  {driver.pos}
                </span>

                {/* 팀 컬러 바 */}
                <div style={{ width: '4px', height: '32px', borderRadius: '2px', background: driver.color }} />

                {/* 드라이버 사진 (썸네일) */}
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  overflow: 'hidden', background: 'rgba(255,255,255,0.08)', flexShrink: 0,
                }}>
                  <img
                    src={driver.image}
                    alt={`${driver.firstName} ${driver.lastName}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>

                {/* 이름 + 팀 */}
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>
                    {driver.firstName} <strong>{driver.lastName}</strong>
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 500, margin: 0 }}>
                    {driver.team}
                  </p>
                </div>

                {/* 포인트 */}
                <span style={{ color: 'white', fontSize: '1.05rem', fontWeight: 800 }}>{driver.points}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', fontWeight: 600, minWidth: '24px' }}>PTS</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          팀 순위 탭
         ══════════════════════════════════════ */}
      {activeTab === 'teams' && (
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>

          {/* ── 포디움 카드 (2위 - 1위 - 3위) ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr 0.9fr',
            gap: '16px',
            marginBottom: '3rem',
            alignItems: 'end',
          }}>
            {podiumTeamOrder.map((team) => {
              const ord = ordinal(team.pos);
              const isFirst = team.pos === 1;
              return (
                <div key={team.pos} style={{
                  background: `linear-gradient(180deg, ${team.color} 0%, #0e0e16 100%)`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: isFirst ? '380px' : team.pos === 2 ? '340px' : '310px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* 상단 정보 */}
                  <div style={{ padding: '1.5rem 1.5rem 0 1.5rem', position: 'relative', zIndex: 2 }}>
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>{ord.num}</span>
                      <sup style={{ fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', verticalAlign: 'super' }}>{ord.suffix}</sup>
                    </div>
                    <p style={{
                      color: 'white', fontSize: isFirst ? '1.8rem' : '1.5rem',
                      fontWeight: 900, lineHeight: 1.1, margin: '0 0 4px 0',
                      letterSpacing: '-0.02em',
                    }}>
                      {team.name}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: 500, margin: 0 }}>
                      {team.drivers}
                    </p>
                  </div>

                  {/* 팀 차량 이미지 */}
                  <div style={{
                    position: 'absolute', bottom: '75px', right: '15px',
                    width: '90%', height: '60%',
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
                  }}>
                    <img
                      src={team.image}
                      alt={team.name}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'contain',        // contain → cover
                        objectPosition: 'bottom right',
                      }}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* 하단 포인트 */}
                  <div style={{
                    padding: '1rem 1.5rem',
                    background: 'rgba(0,0,0,0.2)',
                    position: 'relative', zIndex: 2,
                  }}>
                    <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900 }}>{team.points}</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 700, marginLeft: '6px' }}>PTS</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── 전체 팀 순위 테이블 (1~11위) ── */}
          <div style={{
            background: '#1a1a28', borderRadius: '16px',
            overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                컨스트럭터 챔피언십 순위
              </h2>
            </div>

            {teamStandings.map((team, i) => (
              <div key={team.pos} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px 1.5rem',
                borderBottom: i < teamStandings.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                background: team.pos <= 3 ? 'rgba(255,255,255,0.03)' : 'transparent',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = team.pos <= 3 ? 'rgba(255,255,255,0.03)' : 'transparent')}
              >
                {/* 순위 */}
                <span style={{
                  color: team.pos <= 3 ? 'white' : 'rgba(255,255,255,0.4)',
                  fontSize: '1rem', fontWeight: 900, width: '32px', textAlign: 'center',
                }}>
                  {team.pos}
                </span>

                {/* 팀 컬러 바 */}
                <div style={{ width: '4px', height: '32px', borderRadius: '2px', background: team.color }} />

                {/* 팀 이름 + 드라이버 */}
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>
                    {team.name}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 500, margin: 0 }}>
                    {team.drivers}
                  </p>
                </div>

                {/* 포인트 */}
                <span style={{ color: 'white', fontSize: '1.05rem', fontWeight: 800 }}>{team.points}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', fontWeight: 600, minWidth: '24px' }}>PTS</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
