"use client";

import Navbar from '../../components/Navbar';

/* ───────────────────────────────────────────
   드라이버 데이터 (커리어 스탯 수정은 여기서!)
─────────────────────────────────────────── */
const driversData: Record<string, {
  firstName: string;
  lastName: string;
  team: string;
  number: number;
  color: string;
  image: string;
  flag: string;
  nationality: string;
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
    dnfs: number;
  };
}> = {
  // ── 각 드라이버 스탯 수정은 아래에서 ──
  LEC: {
    firstName: 'Charles', lastName: 'Leclerc',
    team: 'Ferrari', number: 16, color: '#DC0000',
    image: '/F_LEC.png', flag: '🇲🇨', nationality: 'Monégasque',
    season: { position: '3rd', points: 49, races: 3, gpPoints: 42, wins: 0, podiums: 2, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 7, sprintWins: 0, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 174, careerPoints: 1721, highestRaceFinish: '1 (x8)', podiums: 52, highestGridPosition: '1 (x27)', polePositions: 27, worldChampionships: 0, dnfs: 23 },
  },
  HAM: {
    firstName: 'Lewis', lastName: 'Hamilton',
    team: 'Ferrari', number: 44, color: '#DC0000',
    image: '/F_HAM.png', flag: '🇬🇧', nationality: 'British',
    season: { position: '4th', points: 41, races: 3, gpPoints: 34, wins: 0, podiums: 1, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 7, sprintWins: 0, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 353, careerPoints: 4639, highestRaceFinish: '1 (x103)', podiums: 197, highestGridPosition: '1 (x104)', polePositions: 104, worldChampionships: 7, dnfs: 37 },
  },
  RUS: {
    firstName: 'George', lastName: 'Russell',
    team: 'Mercedes', number: 63, color: '#00A19C',
    image: '/M_RUS.png', flag: '🇬🇧', nationality: 'British',
    season: { position: '2nd', points: 63, races: 3, gpPoints: 53, wins: 1, podiums: 2, poles: 1, top10s: 3, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 10, sprintWins: 1, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 120, careerPoints: 1021, highestRaceFinish: '1 (x11)', podiums: 28, highestGridPosition: '1 (x10)', polePositions: 10, worldChampionships: 0, dnfs: 12 },
  },
  ANT: {
    firstName: 'Kimi', lastName: 'Antonelli',
    team: 'Mercedes', number: 12, color: '#00A19C',
    image: '/M_ANT.png', flag: '🇮🇹', nationality: 'Italian',
    season: { position: '1st', points: 72, races: 3, gpPoints: 62, wins: 2, podiums: 3, poles: 1, top10s: 3, fastestLaps: 1, dnfs: 0, sprintRaces: 1, sprintPoints: 10, sprintWins: 1, sprintPodiums: 1, sprintPoles: 1, sprintTop10s: 1 },
    career: { grandPrixEntered: 3, careerPoints: 72, highestRaceFinish: '1 (x2)', podiums: 3, highestGridPosition: '1 (x1)', polePositions: 1, worldChampionships: 0, dnfs: 0 },
  },
  NOR: {
    firstName: 'Lando', lastName: 'Norris',
    team: 'McLaren', number: 4, color: '#FF8000',
    image: '/ML_NOR.png', flag: '🇬🇧', nationality: 'British',
    season: { position: '5th', points: 25, races: 3, gpPoints: 18, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 7, sprintWins: 0, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 120, careerPoints: 1021, highestRaceFinish: '1 (x6)', podiums: 28, highestGridPosition: '1 (x8)', polePositions: 8, worldChampionships: 0, dnfs: 14 },
  },
  PIA: {
    firstName: 'Oscar', lastName: 'Piastri',
    team: 'McLaren', number: 81, color: '#FF8000',
    image: '/ML_PIA.png', flag: '🇦🇺', nationality: 'Australian',
    season: { position: '6th', points: 21, races: 3, gpPoints: 14, wins: 0, podiums: 1, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 7, sprintWins: 0, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 67, careerPoints: 487, highestRaceFinish: '1 (x3)', podiums: 14, highestGridPosition: '1 (x2)', polePositions: 2, worldChampionships: 0, dnfs: 5 },
  },
  VER: {
    firstName: 'Max', lastName: 'Verstappen',
    team: 'Red Bull Racing', number: 3, color: '#152E52',
    image: '/R_VER.png', flag: '🇳🇱', nationality: 'Dutch',
    season: { position: '7th', points: 18, races: 3, gpPoints: 11, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 1, dnfs: 0, sprintRaces: 1, sprintPoints: 7, sprintWins: 0, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 212, careerPoints: 3014, highestRaceFinish: '1 (x62)', podiums: 112, highestGridPosition: '1 (x40)', polePositions: 40, worldChampionships: 4, dnfs: 22 },
  },
  HAD: {
    firstName: 'Isack', lastName: 'Hadjar',
    team: 'Red Bull Racing', number: 6, color: '#152E52',
    image: '/R_HAD.png', flag: '🇫🇷', nationality: 'French',
    season: { position: '11th', points: 10, races: 3, gpPoints: 10, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 3, careerPoints: 10, highestRaceFinish: '7 (x1)', podiums: 0, highestGridPosition: '5 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 0 },
  },
  GAS: {
    firstName: 'Pierre', lastName: 'Gasly',
    team: 'Alpine', number: 10, color: '#005073',
    image: '/A_GAS.png', flag: '🇫🇷', nationality: 'French',
    season: { position: '10th', points: 12, races: 3, gpPoints: 12, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 170, careerPoints: 432, highestRaceFinish: '1 (x1)', podiums: 4, highestGridPosition: '1 (x1)', polePositions: 1, worldChampionships: 0, dnfs: 19 },
  },
  COL: {
    firstName: 'Franco', lastName: 'Colapinto',
    team: 'Alpine', number: 43, color: '#005073',
    image: '/A_COL.png', flag: '🇦🇷', nationality: 'Argentine',
    season: { position: '15th', points: 4, races: 3, gpPoints: 4, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 12, careerPoints: 9, highestRaceFinish: '8 (x1)', podiums: 0, highestGridPosition: '6 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 1 },
  },
  SAI: {
    firstName: 'Carlos', lastName: 'Sainz',
    team: 'Williams', number: 55, color: '#061D3D',
    image: '/W_SAI.png', flag: '🇪🇸', nationality: 'Spanish',
    season: { position: '14th', points: 6, races: 3, gpPoints: 6, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 210, careerPoints: 1083, highestRaceFinish: '1 (x3)', podiums: 27, highestGridPosition: '1 (x5)', polePositions: 5, worldChampionships: 0, dnfs: 26 },
  },
  ALB: {
    firstName: 'Alexander', lastName: 'Albon',
    team: 'Williams', number: 23, color: '#061D3D',
    image: '/W_ALB.png', flag: '🇹🇭', nationality: 'Thai',
    season: { position: '16th', points: 3, races: 3, gpPoints: 3, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 110, careerPoints: 280, highestRaceFinish: '2 (x2)', podiums: 2, highestGridPosition: '2 (x3)', polePositions: 0, worldChampionships: 0, dnfs: 15 },
  },
  OCO: {
    firstName: 'Esteban', lastName: 'Ocon',
    team: 'Haas F1 Team', number: 31, color: '#5E6D75',
    image: '/H_OCO.png', flag: '🇫🇷', nationality: 'French',
    season: { position: '12th', points: 10, races: 3, gpPoints: 10, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 148, careerPoints: 423, highestRaceFinish: '1 (x1)', podiums: 7, highestGridPosition: '1 (x1)', polePositions: 1, worldChampionships: 0, dnfs: 16 },
  },
  BEA: {
    firstName: 'Oliver', lastName: 'Bearman',
    team: 'Haas F1 Team', number: 87, color: '#5E6D75',
    image: '/H_BEA.png', flag: '🇬🇧', nationality: 'British',
    season: { position: '13th', points: 8, races: 3, gpPoints: 8, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 24, careerPoints: 24, highestRaceFinish: '7 (x2)', podiums: 0, highestGridPosition: '4 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 1 },
  },
  LAW: {
    firstName: 'Liam', lastName: 'Lawson',
    team: 'Racing Bulls', number: 30, color: '#003BD1',
    image: '/RB_LAW.png', flag: '🇳🇿', nationality: 'New Zealander',
    season: { position: '17th', points: 2, races: 3, gpPoints: 2, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 22, careerPoints: 28, highestRaceFinish: '9 (x2)', podiums: 0, highestGridPosition: '7 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 2 },
  },
  LIN: {
    firstName: 'Arvid', lastName: 'Lindblad',
    team: 'Racing Bulls', number: 41, color: '#003BD1',
    image: '/RB_LIN.png', flag: '🇬🇧', nationality: 'British',
    season: { position: '20th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 3, careerPoints: 0, highestRaceFinish: '12 (x1)', podiums: 0, highestGridPosition: '10 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 0 },
  },
  HUL: {
    firstName: 'Nico', lastName: 'Hülkenberg',
    team: 'Audi', number: 27, color: '#7D1600',
    image: '/AD_HUL.png', flag: '🇩🇪', nationality: 'German',
    season: { position: '18th', points: 1, races: 3, gpPoints: 1, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 230, careerPoints: 547, highestRaceFinish: '4 (x5)', podiums: 0, highestGridPosition: '1 (x1)', polePositions: 1, worldChampionships: 0, dnfs: 28 },
  },
  BOR: {
    firstName: 'Gabriel', lastName: 'Bortoleto',
    team: 'Audi', number: 5, color: '#7D1600',
    image: '/AD_BOR.png', flag: '🇧🇷', nationality: 'Brazilian',
    season: { position: '19th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 3, careerPoints: 0, highestRaceFinish: '14 (x1)', podiums: 0, highestGridPosition: '11 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 0 },
  },
  ALO: {
    firstName: 'Fernando', lastName: 'Alonso',
    team: 'Aston Martin', number: 14, color: '#358C75',
    image: '/AM_ALO.png', flag: '🇪🇸', nationality: 'Spanish',
    season: { position: '8th', points: 16, races: 3, gpPoints: 16, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 403, careerPoints: 2267, highestRaceFinish: '1 (x32)', podiums: 106, highestGridPosition: '1 (x22)', polePositions: 22, worldChampionships: 2, dnfs: 51 },
  },
  STR: {
    firstName: 'Lance', lastName: 'Stroll',
    team: 'Aston Martin', number: 18, color: '#358C75',
    image: '/AM_STR.png', flag: '🇨🇦', nationality: 'Canadian',
    season: { position: '9th', points: 14, races: 3, gpPoints: 14, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 168, careerPoints: 316, highestRaceFinish: '2 (x3)', podiums: 3, highestGridPosition: '1 (x1)', polePositions: 1, worldChampionships: 0, dnfs: 20 },
  },
  PER: {
    firstName: 'Sergio', lastName: 'Pérez',
    team: 'Cadillac', number: 11, color: '#4B4C53',
    image: '/C_PER.png', flag: '🇲🇽', nationality: 'Mexican',
    season: { position: '21st', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 281, careerPoints: 1633, highestRaceFinish: '1 (x6)', podiums: 40, highestGridPosition: '1 (x3)', polePositions: 3, worldChampionships: 0, dnfs: 30 },
  },
  BOT: {
    firstName: 'Valtteri', lastName: 'Bottas',
    team: 'Cadillac', number: 77, color: '#4B4C53',
    image: '/C_BOT.png', flag: '🇫🇮', nationality: 'Finnish',
    season: { position: '22nd', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 257, careerPoints: 1797, highestRaceFinish: '1 (x10)', podiums: 67, highestGridPosition: '1 (x20)', polePositions: 20, worldChampionships: 0, dnfs: 24 },
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
   메인 페이지
─────────────────────────────────────────── */
export default async function DriverDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug.toUpperCase();
  const driver = driversData[slug];

  if (!driver) {
    return (
      <div style={{ minHeight: '100vh', background: '#0e0e16', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Navbar />
        <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>드라이버를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const { season: s, career: c } = driver;

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e16', paddingTop: '64px' }}>
      <Navbar />

      {/* ── 히어로 배너 ── */}
      <div style={{
        background: `linear-gradient(135deg, ${driver.color} 0%, #0e0e16 60%)`,
        position: 'relative', overflow: 'hidden', minHeight: '320px',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem',
          display: 'flex', alignItems: 'flex-end', gap: '2rem',
          position: 'relative', zIndex: 2,
        }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
              {driver.flag} {driver.nationality} · {driver.team}
            </p>
            <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.03em', margin: '0', lineHeight: 1 }}>
              {driver.firstName}
            </h1>
            <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 1rem 0', lineHeight: 1 }}>
              {driver.lastName}
            </h1>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '56px', height: '56px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
            }}>
              <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900 }}>{driver.number}</span>
            </div>
          </div>
        </div>

        {/* 드라이버 이미지 */}
        <div style={{ position: 'absolute', right: '5%', bottom: 0, height: '110%', zIndex: 1 }}>
          <img
            src={driver.image}
            alt={`${driver.firstName} ${driver.lastName}`}
            style={{ height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* ── 스탯 섹션 ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem' }}>

        <h2 style={{
          color: 'white', fontSize: '2.5rem', fontWeight: 900,
          letterSpacing: '-0.02em', margin: '0 0 2.5rem 0', textTransform: 'uppercase',
        }}>
          STATISTICS
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>

          {/* ── 왼쪽: 2026 시즌 스탯 ── */}
          <div>
            <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 1.5rem 0', textTransform: 'uppercase' }}>
              2026 SEASON
            </h3>

            {/* 시즌 포지션 + 포인트 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <StatCell label="Season Position" value={s.position} />
              <StatCell label="Season Points" value={s.points} />
            </div>

            {/* GP 스탯 */}
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
            <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>
              CAREER STATS
            </h3>
            <StatRow label="Grand Prix Entered" value={c.grandPrixEntered} />
            <StatRow label="Career Points" value={c.careerPoints} />
            <StatRow label="Highest Race Finish" value={c.highestRaceFinish} />
            <StatRow label="Podiums" value={c.podiums} />
            <StatRow label="Highest Grid Position" value={c.highestGridPosition} />
            <StatRow label="Pole Positions" value={c.polePositions} />
            <StatRow label="World Championships" value={c.worldChampionships} />
            <StatRow label="DNFs" value={c.dnfs} />
          </div>

        </div>
      </div>
    </div>
  );
}
