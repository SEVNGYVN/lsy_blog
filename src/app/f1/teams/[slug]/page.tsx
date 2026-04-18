"use client";

import Link from 'next/link';
import Navbar from '../../components/Navbar';

/* ───────────────────────────────────────────
   팀 데이터 (팀별 스탯 + 소속 드라이버 매핑)
─────────────────────────────────────────── */
const teamsData: Record<string, {
  name: string;
  color: string;
  base: string;
  teamPrincipal: string;
  powerUnit: string;
  firstEntry: number;
  carImage: string;
  drivers: {
    slug: string;
    firstName: string;
    lastName: string;
    number: number;
    image: string;
    flag: string;
    nationality: string;
  }[];
  season: {
    position: string;
    points: number;
    races: number;
    gpPoints: number;
    wins: number;
    podiums: number;
    poles: number;
    top10s: number;
    fastestLaps: number;
    dnfs: number;
    sprintRaces: number;
    sprintPoints: number;
    sprintWins: number;
    sprintPodiums: number;
    sprintPoles: number;
    sprintTop10s: number;
  };
  career: {
    grandPrixEntered: number;
    careerPoints: number;
    highestRaceFinish: string;
    podiums: number;
    highestGridPosition: string;
    polePositions: number;
    worldChampionships: number;
  };
}> = {
  F: {
    name: 'Ferrari',
    color: '#DC0000',
    base: 'Maranello, Italy',
    teamPrincipal: 'Frédéric Vasseur',
    powerUnit: 'Ferrari',
    firstEntry: 1950,
    carImage: '/F_CAR.png',
    drivers: [
      { slug: 'LEC', firstName: 'Charles', lastName: 'Leclerc', number: 16, image: '/F_LEC_NB.png', flag: '🇲🇨', nationality: 'Monégasque' },
      { slug: 'HAM', firstName: 'Lewis', lastName: 'Hamilton', number: 44, image: '/F_HAM_NB.png', flag: '🇬🇧', nationality: 'British' },
    ],
    season: { position: '2nd', points: 90, races: 3, gpPoints: 77, wins: 0, podiums: 3, poles: 0, top10s: 6, fastestLaps: 0, dnfs: 0, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  M: {
    name: 'Mercedes',
    color: '#38d2b8',
    base: 'Brackley, United Kingdom',
    teamPrincipal: 'Toto Wolff',
    powerUnit: 'Mercedes',
    firstEntry: 1954,
    carImage: '/M_CAR.png',
    drivers: [
      { slug: 'RUS', firstName: 'George', lastName: 'Russell', number: 63, image: '/M_RUS_NB.png', flag: '🇬🇧', nationality: 'British' },
      { slug: 'ANT', firstName: 'Kimi', lastName: 'Antonelli', number: 12, image: '/M_ANT_NB.png', flag: '🇮🇹', nationality: 'Italian' },
    ],
    season: { position: '1st', points: 135, races: 3, gpPoints: 77, wins: 3, podiums: 5, poles: 3, top10s: 6, fastestLaps: 0, dnfs: 0,
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  ML: {
    name: 'McLaren',
    color: '#FF8000',
    base: 'Woking, United Kingdom',
    teamPrincipal: 'Andrea Stella',
    powerUnit: 'Mercedes',
    firstEntry: 1966,
    carImage: '/ML_CAR.png',
    drivers: [
      { slug: 'NOR', firstName: 'Lando', lastName: 'Norris', number: 4, image: '/ML_NOR_NB.png', flag: '🇬🇧', nationality: 'British' },
      { slug: 'PIA', firstName: 'Oscar', lastName: 'Piastri', number: 81, image: '/ML_PIA_NB.png', flag: '🇦🇺', nationality: 'Australian' },
    ],
    season: { position: '3rd', points: 46, races: 3, gpPoints: 77, wins: 0, podiums: 1, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 0, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  R: {
    name: 'Red Bull Racing',
    color: '#26508C',
    base: 'Milton Keynes, United Kingdom',
    teamPrincipal: 'Christian Horner',
    powerUnit: 'Ford',
    firstEntry: 2005,
    carImage: '/R_CAR.png',
    drivers: [
      { slug: 'VER', firstName: 'Max', lastName: 'Verstappen', number: 3, image: '/R_VER_NB.png', flag: '🇳🇱', nationality: 'Dutch' },
      { slug: 'HAD', firstName: 'Isack', lastName: 'Hadjar', number: 6, image: '/R_HAD_NB.png', flag: '🇫🇷', nationality: 'French' },
    ],
    season: { position: '5th', points: 16, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 3, fastestLaps: 1, dnfs: 2, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  A: {
    name: 'Alpine',
    color: '#0090FF',
    base: 'Enstone, United Kingdom',
    teamPrincipal: 'Oliver Oakes',
    powerUnit: 'Mercedes',
    firstEntry: 1986,
    carImage: '/A_CAR.png',
    drivers: [
      { slug: 'GAS', firstName: 'Pierre', lastName: 'Gasly', number: 10, image: '/A_GAS_NB.png', flag: '🇫🇷', nationality: 'French' },
      { slug: 'COL', firstName: 'Franco', lastName: 'Colapinto', number: 43, image: '/A_COL_NB.png', flag: '🇦🇷', nationality: 'Argentine' },
    ],
    season: { position: '6th', points: 16, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 4, fastestLaps: 0, dnfs: 0, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  W: {
    name: 'Williams',
    color: '#041E3C',
    base: 'Grove, United Kingdom',
    teamPrincipal: 'James Vowles',
    powerUnit: 'Mercedes',
    firstEntry: 1978,
    carImage: '/W_CAR.png',
    drivers: [
      { slug: 'SAI', firstName: 'Carlos', lastName: 'Sainz', number: 55, image: '/W_SAI_NB.png', flag: '🇪🇸', nationality: 'Spanish' },
      { slug: 'ALB', firstName: 'Alexander', lastName: 'Albon', number: 23, image: '/W_ALB_NB.png', flag: '🇹🇭', nationality: 'Thai' },
    ],
    season: { position: '8th', points: 2, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  H: {
    name: 'Haas F1 Team',
    color: '#5E6D75',
    base: 'Kannapolis, United States',
    teamPrincipal: 'Ayao Komatsu',
    powerUnit: 'Ferrari',
    firstEntry: 2016,
    carImage: '/H_CAR.png',
    drivers: [
      { slug: 'OCO', firstName: 'Esteban', lastName: 'Ocon', number: 31, image: '/H_OCO_NB.png', flag: '🇫🇷', nationality: 'French' },
      { slug: 'BEA', firstName: 'Oliver', lastName: 'Bearman', number: 87, image: '/H_BEA_NB.png', flag: '🇬🇧', nationality: 'British' },
    ],
    season: { position: '4th', points: 18, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 1, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  RB: {
    name: 'Racing Bulls',
    color: '#003BD1',
    base: 'Faenza, Italy',
    teamPrincipal: 'Laurent Mekies',
    powerUnit: 'Ford',
    firstEntry: 1985,
    carImage: '/RB_CAR.png',
    drivers: [
      { slug: 'LAW', firstName: 'Liam', lastName: 'Lawson', number: 30, image: '/RB_LAW_NB.png', flag: '🇳🇿', nationality: 'New Zealander' },
      { slug: 'LIN', firstName: 'Arvid', lastName: 'Lindblad', number: 41, image: '/RB_LIN_NB.png', flag: '🇬🇧', nationality: 'British' },
    ],
    season: { position: '7th', points: 14, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 0, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  AD: {
    name: 'Audi',
    color: '#7D1600',
    base: 'Hinwil, Switzerland',
    teamPrincipal: 'Mattia Binotto',
    powerUnit: 'Audi',
    firstEntry: 1993,
    carImage: '/AD_CAR.png',
    drivers: [
      { slug: 'HUL', firstName: 'Nico', lastName: 'Hülkenberg', number: 27, image: '/AD_HUL_NB.png', flag: '🇩🇪', nationality: 'German' },
      { slug: 'BOR', firstName: 'Gabriel', lastName: 'Bortoleto', number: 5, image: '/AD_BOR_NB.png', flag: '🇧🇷', nationality: 'Brazilian' },
    ],
    season: { position: '9th', points: 2, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  AM: {
    name: 'Aston Martin',
    color: '#358C75',
    base: 'Silverstone, United Kingdom',
    teamPrincipal: 'Andy Cowell',
    powerUnit: 'Honda',
    firstEntry: 1959,
    carImage: '/AM_CAR.png',
    drivers: [
      { slug: 'ALO', firstName: 'Fernando', lastName: 'Alonso', number: 14, image: '/AM_ALO_NB.png', flag: '🇪🇸', nationality: 'Spanish' },
      { slug: 'STR', firstName: 'Lance', lastName: 'Stroll', number: 18, image: '/AM_STR_NB.png', flag: '🇨🇦', nationality: 'Canadian' },
    ],
    season: { position: '10th', points: 0, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 4, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
  C: {
    name: 'Cadillac',
    color: '#4B4C53',
    base: 'United States',
    teamPrincipal: 'Graeme Lowdon',
    powerUnit: 'Ferrari',
    firstEntry: 2026,
    carImage: '/C_CAR.png',
    drivers: [
      { slug: 'PER', firstName: 'Sergio', lastName: 'Pérez', number: 11, image: '/C_PER_NB.png', flag: '🇲🇽', nationality: 'Mexican' },
      { slug: 'BOT', firstName: 'Valtteri', lastName: 'Bottas', number: 77, image: '/C_BOT_NB.png', flag: '🇫🇮', nationality: 'Finnish' },
    ],
    season: { position: '11th', points: 0, races: 3, gpPoints: 77, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 1, 
    sprintRaces: 1, sprintPoints: 13, sprintWins: 0, sprintPodiums: 2, sprintPoles: 0, sprintTop10s: 2 },
    career: { grandPrixEntered: 1126, careerPoints: 10765, highestRaceFinish: '1 (x249)', podiums: 642, 
    highestGridPosition: '1 (x254)', polePositions: 254, worldChampionships: 16, },
  },
};

/* ───────────────────────────────────────────
   재사용 컴포넌트
─────────────────────────────────────────── */
function StatRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      padding: '1.1rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 500 }}>{label}</span>
      <span style={{ color: 'white', fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.01em' }}>{value}</span>
    </div>
  );
}

function StatCell({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{ paddingBottom: '1.2rem' }}>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500, margin: '0 0 6px 0' }}>{label}</p>
      <p style={{ color: 'white', fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>{value}</p>
    </div>
  );
}

/* ───────────────────────────────────────────
   드라이버 카드 컴포넌트
─────────────────────────────────────────── */
function DriverCard({ driver, teamColor }: {
  driver: { slug: string; firstName: string; lastName: string; number: number; image: string; flag: string; nationality: string };
  teamColor: string;
}) {
  return (
    <Link href={`/f1/driver/${driver.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
      <div
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          border: `1px solid ${teamColor}44`,
          background: `linear-gradient(135deg, ${teamColor}30 0%, ${teamColor}10 100%)`,
          cursor: 'pointer',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          height: '280px',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${teamColor}33`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        }}
      >
        {/* 드라이버 정보 */}
        <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 500, margin: '0 0 4px 0' }}>
            {driver.firstName}
          </p>
          <p style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900, margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
            {driver.lastName}
          </p>

          {/* 등번호 */}
          <p style={{
            color: 'white', fontSize: '3rem', fontWeight: 900,
            margin: '0.5rem 0 0 0', opacity: 0.9,
            letterSpacing: '-0.03em',
            fontStyle: 'italic',
          }}>
            {driver.number}
          </p>

          {/* 국기 */}
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{driver.flag}</span>
          </div>
        </div>

        {/* 드라이버 이미지 */}
        <div style={{
          position: 'absolute', right: '-10px', bottom: 0,
          height: '100%', width: '40%', zIndex: 1,
        }}>
          <img
            src={driver.image}
            alt={`${driver.firstName} ${driver.lastName}`}
            style={{
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom right',
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
              /*borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '33 / 14',
              cursor: 'pointer',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              background: driver.color,*/

            }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>
    </Link>
  );
}

/* ───────────────────────────────────────────
   메인 페이지
─────────────────────────────────────────── */
export default async function TeamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug.toUpperCase();
  const team = teamsData[slug];

  if (!team) {
    return (
      <div style={{ minHeight: '100vh', background: '#0e0e16', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Navbar />
        <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>팀을 찾을 수 없습니다.</p>
      </div>
    );
  }

  const { season: s, career: c } = team;

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e16', paddingTop: '64px' }}>
      <Navbar />

      {/* ── 히어로 배너 ── */}
      <div style={{
        background: `linear-gradient(135deg, ${team.color} 0%, #0e0e16 60%)`,
        position: 'relative', overflow: 'hidden', minHeight: '320px',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem',
          position: 'relative', zIndex: 2,
        }}>
          {/* 뒤로가기 */}
          <Link href="/f1/teams" style={{
            color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600,
            textDecoration: 'none', letterSpacing: '0.05em',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            marginBottom: '1.5rem',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            ← 팀 목록으로
          </Link>

          <h1 style={{
            color: 'white', fontSize: '4rem', fontWeight: 900,
            letterSpacing: '-0.03em', margin: '0', lineHeight: 1,
            textTransform: 'uppercase',
          }}>
            {team.name}
          </h1>

          {/* 팀 정보 태그 */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Base', value: team.base },
              { label: 'Team Principal', value: team.teamPrincipal },
              { label: 'Power Unit', value: team.powerUnit },
              { label: 'First Entry', value: team.firstEntry },
            ].map(item => (
              <div key={item.label} style={{
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                borderRadius: '10px', padding: '0.6rem 1rem',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 600, margin: '0 0 2px 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {item.label}
                </p>
                <p style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 팀 차량 이미지 (배경) */}
        <div style={{
          position: 'absolute', right: '0', bottom: '-20px',
          width: '55%', height: '120%', zIndex: 1,
          opacity: 0.3,
        }}>
          <img
            src={team.carImage}
            alt={`${team.name} car`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center right' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* ── 메인 콘텐츠 ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem' }}>

        {/* ── DRIVERS 섹션 ── */}
        <h2 style={{
          color: 'white', fontSize: '2.5rem', fontWeight: 900,
          letterSpacing: '-0.02em', margin: '0 0 2rem 0', textTransform: 'uppercase',
          fontStyle: 'italic',
        }}>
          DRIVERS
        </h2>

        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
          {team.drivers.map(driver => (
            <DriverCard key={driver.slug} driver={driver} teamColor={team.color} />
          ))}
        </div>

        {/* 팀 컬러 구분선 */}
        <div style={{
          height: '4px',
          background: team.color,
          borderRadius: '2px',
          margin: '0 0 3rem 0',
        }} />

        {/* ── STATISTICS 섹션 ── */}
        <h2 style={{
          color: 'white', fontSize: '2.5rem', fontWeight: 900,
          letterSpacing: '-0.02em', margin: '0 0 2.5rem 0', textTransform: 'uppercase',
          fontStyle: 'italic',
        }}>
          STATISTICS
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>

          {/* ── 왼쪽: 2026 시즌 스탯 ── */}
          <div>
            <h3 style={{
              color: 'white', fontSize: '1.8rem', fontWeight: 900,
              letterSpacing: '-0.02em', margin: '0 0 1.5rem 0', textTransform: 'uppercase',
            }}>
              2026 SEASON
            </h3>

            {/* 시즌 포지션 + 포인트 */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem',
              marginBottom: '1rem', paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              <StatCell label="Season Position" value={s.position} />
              <StatCell label="Season Points" value={s.points} />
            </div>

            {/* 시즌 상세 스탯 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
              <StatCell label="Grand Prix Races" value={s.races} />
              <StatCell label="Grand Prix Points" value={s.gpPoints} />
              <StatCell label="Grand Prix Wins" value={s.wins} />
              <StatCell label="Grand Prix Podiums" value={s.podiums} />
              <StatCell label="Grand Prix Poles" value={s.poles} />
              <StatCell label="Grand Prix Top 10s" value={s.top10s} />
              <StatCell label="DHL Fastest Laps" value={s.fastestLaps} />
              <StatCell label="DNFs" value={s.dnfs} />
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '0.5rem 0 1rem 0' }} />

            {/* 스프린트 스탯 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
              <StatCell label="Sprint Races" value={s.sprintRaces} />
              <StatCell label="Sprint Points" value={s.sprintPoints} />
              <StatCell label="Sprint Wins" value={s.sprintWins} />
              <StatCell label="Sprint Podiums" value={s.sprintPodiums} />
              <StatCell label="Sprint Poles" value={s.sprintPoles} />
              <StatCell label="Sprint Top 10s" value={s.sprintTop10s} />
            </div>
          </div>

          {/* ── 오른쪽: 커리어 스탯 ── */}
          <div style={{
            background: '#1e1e2a', borderRadius: '20px',
            padding: '2rem', border: '1px solid rgba(255,255,255,0.06)',
            position: 'sticky', top: '80px',
          }}>
            <h3 style={{
              color: 'white', fontSize: '1.5rem', fontWeight: 900,
              letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', textTransform: 'uppercase',
            }}>
              TEAM HISTORY
            </h3>
            <StatRow label="Grand Prix Entered" value={c.grandPrixEntered} />
            <StatRow label="Career Points" value={c.careerPoints} />
            <StatRow label="Highest Race Finish" value={c.highestRaceFinish} />
            <StatRow label="Podiums" value={c.podiums} />
            <StatRow label="Highest Grid Position" value={c.highestGridPosition} />
            <StatRow label="Pole Positions" value={c.polePositions} />
            <StatRow label="World Championships" value={c.worldChampionships} />
          </div>

        </div>
      </div>
    </div>
  );
}
