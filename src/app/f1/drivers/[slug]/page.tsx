"use client";
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ───────────────────────────────────────────
   모바일 감지 커스텀 훅
─────────────────────────────────────────── */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile(); // 초기 체크
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  return isMobile;
}

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
  flag: string; // flagcdn을 위한 국가 코드 (예: 'mc', 'gb')
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
    image: '/F_LEC_NB.png', flag: 'mc', nationality: 'Monégasque',
    season: { position: '3rd', points: 49, races: 3, gpPoints: 42, wins: 0, podiums: 2, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 7, sprintWins: 0, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 174, careerPoints: 1721, highestRaceFinish: '1 (x8)', podiums: 52, highestGridPosition: '1 (x27)', polePositions: 27, worldChampionships: 0, dnfs: 23 },
  },
  HAM: {
    firstName: 'Lewis', lastName: 'Hamilton',
    team: 'Ferrari', number: 44, color: '#DC0000',
    image: '/F_HAM_NB.png', flag: 'gb', nationality: 'British',
    season: { position: '4th', points: 41, races: 3, gpPoints: 35, wins: 0, podiums: 1, poles: 0, top10s: 3, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 6, sprintWins: 0, sprintPodiums: 1, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 383, careerPoints: 5059.5, highestRaceFinish: '1 (x105)', podiums: 203, highestGridPosition: '1 (x104)', polePositions: 104, worldChampionships: 7, dnfs: 34 },
  },
  RUS: {
    firstName: 'George', lastName: 'Russell',
    team: 'Mercedes', number: 63, color: '#38d2b8',
    image: '/M_RUS_NB.png', flag: 'gb', nationality: 'British',
    season: { position: '2nd', points: 63, races: 3, gpPoints: 55, wins: 1, podiums: 2, poles: 1, top10s: 3, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 8, sprintWins: 1, sprintPodiums: 1, sprintPoles: 1, sprintTop10s: 1 },
    career: { grandPrixEntered: 155, careerPoints: 1096, highestRaceFinish: '1 (x6)', podiums: 26, highestGridPosition: '1 (x9)', polePositions: 8, worldChampionships: 0, dnfs: 19 },
  },
  ANT: {
    firstName: 'Kimi', lastName: 'Antonelli',
    team: 'Mercedes', number: 12, color: '#38d2b8',
    image: '/M_ANT_NB.png', flag: 'it', nationality: 'Italian',
    season: { position: '1st', points: 72, races: 3, gpPoints: 68, wins: 2, podiums: 3, poles: 2, top10s: 3, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 4, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 27, careerPoints: 222, highestRaceFinish: '1 (x2)', podiums: 6, highestGridPosition: '1 (x2)', polePositions: 2, worldChampionships: 0, dnfs: 4 },
  },
  NOR: {
    firstName: 'Lando', lastName: 'Norris',
    team: 'McLaren', number: 4, color: '#FF8000',
    image: '/ML_NOR_NB.png', flag: 'gb', nationality: 'British',
    season: { position: '5th', points: 25, races: 3, gpPoints: 20, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 5, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 155, careerPoints: 1455, highestRaceFinish: '1 (x11)', podiums: 44, highestGridPosition: '1 (x16)', polePositions: 16, worldChampionships: 1, dnfs: 13 },
  },
  PIA: {
    firstName: 'Oscar', lastName: 'Piastri',
    team: 'McLaren', number: 81, color: '#FF8000',
    image: '/ML_PIA_NB.png', flag: 'au', nationality: 'Australian',
    season: { position: '6th', points: 21, races: 3, gpPoints: 18, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 3, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 55, careerPoints: 510, highestRaceFinish: '1 (x3)', podiums: 10, highestGridPosition: '1 (x3)', polePositions: 3, worldChampionships: 0, dnfs: 5 },
  },
  VER: {
    firstName: 'Max', lastName: 'Verstappen',
    team: 'Red Bull Racing', number: 1, color: '#0600EF',
    image: '/RB_VER_NB.png', flag: 'nl', nationality: 'Dutch',
    season: { position: '8th', points: 18, races: 3, gpPoints: 15, wins: 0, podiums: 1, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 3, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 245, careerPoints: 3887, highestRaceFinish: '1 (x63)', podiums: 116, highestGridPosition: '1 (x42)', polePositions: 42, worldChampionships: 4, dnfs: 28 },
  },
  PER: {
    firstName: 'Sergio', lastName: 'Pérez',
    team: 'Red Bull Racing', number: 11, color: '#0600EF',
    image: '/RB_PER_NB.png', flag: 'mx', nationality: 'Mexican',
    season: { position: '9th', points: 12, races: 3, gpPoints: 12, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 289, careerPoints: 1358, highestRaceFinish: '1 (x6)', podiums: 32, highestGridPosition: '1 (x3)', polePositions: 3, worldChampionships: 0, dnfs: 42 },
  },
  SAI: {
    firstName: 'Carlos', lastName: 'Sainz',
    team: 'Williams', number: 55, color: '#041E3C',
    image: '/W_SAI_NB.png', flag: 'es', nationality: 'Spanish',
    season: { position: '12th', points: 4, races: 3, gpPoints: 4, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 206, careerPoints: 1226, highestRaceFinish: '1 (x4)', podiums: 25, highestGridPosition: '1 (x6)', polePositions: 6, worldChampionships: 0, dnfs: 42 },
  },
  ALB: {
    firstName: 'Alexander', lastName: 'Albon',
    team: 'Williams', number: 23, color: '#041E3C',
    image: '/W_ALB_NB.png', flag: 'th', nationality: 'Thai',
    season: { position: '18th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 131, careerPoints: 313, highestRaceFinish: '3 (x2)', podiums: 2, highestGridPosition: '4 (x5)', polePositions: 0, worldChampionships: 0, dnfs: 22 },
  },
  OCO: {
    firstName: 'Esteban', lastName: 'Ocon',
    team: 'Haas F1 Team', number: 31, color: '#5E6D75',
    image: '/H_OCO_NB.png', flag: 'fr', nationality: 'French',
    season: { position: '15th', points: 1, races: 3, gpPoints: 1, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 183, careerPoints: 484, highestRaceFinish: '1 (x1)', podiums: 4, highestGridPosition: '3 (x3)', polePositions: 0, worldChampionships: 0, dnfs: 25 },
  },
  BEA: {
    firstName: 'Oliver', lastName: 'Bearman',
    team: 'Haas F1 Team', number: 87, color: '#5E6D75',
    image: '/H_BEA_NB.png', flag: 'gb', nationality: 'British',
    season: { position: '7th', points: 17, races: 3, gpPoints: 16, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 1, sprintRaces: 1, sprintPoints: 1, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 30, careerPoints: 65 , highestRaceFinish: '4 (x1)', podiums: 0, highestGridPosition: '8 (x2)', polePositions: 0, worldChampionships: 0, dnfs: 4 },
  },
  LAW: {
    firstName: 'Liam', lastName: 'Lawson',
    team: 'Racing Bulls', number: 30, color: '#003BD1',
    image: '/RB_LAW_NB.png', flag: 'nz', nationality: 'New Zealander',
    season: { position: '10th', points: 10, races: 3, gpPoints: 8, wins: 0, podiums: 0, poles: 0, top10s: 2, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 2, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 1 },
    career: { grandPrixEntered: 38, careerPoints: 54, highestRaceFinish: '5 (x1)', podiums: 0, highestGridPosition: '3 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 6 },
  },
  LIN: {
    firstName: 'Arvid', lastName: 'Lindblad',
    team: 'Racing Bulls', number: 41, color: '#003BD1',
    image: '/RB_LIN_NB.png', flag: 'gb', nationality: 'British',
    season: { position: '11th', points: 4, races: 3, gpPoints: 4, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 3, careerPoints: 4, highestRaceFinish: '8 (x1)', podiums: 0, highestGridPosition: '9 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 0 },
  },
  HUL: {
    firstName: 'Nico', lastName: 'Hülkenberg',
    team: 'Audi', number: 27, color: '#7D1600',
    image: '/AD_HUL_NB.png', flag: 'de', nationality: 'German',
    season: { position: '17th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 254, careerPoints: 622, highestRaceFinish: '3 (x1)', podiums: 1, highestGridPosition: '1 (x1)', polePositions: 1, worldChampionships: 0, dnfs: 44 },
  },
  BOR: {
    firstName: 'Gabriel', lastName: 'Bortoleto',
    team: 'Audi', number: 5, color: '#7D1600',
    image: '/AD_BOR_NB.png', flag: 'br', nationality: 'Brazilian',
    season: { position: '13th', points: 2, races: 3, gpPoints: 2, wins: 0, podiums: 0, poles: 0, top10s: 1, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 27, careerPoints: 21, highestRaceFinish: '6 (x1)', podiums: 0, highestGridPosition: '7 (x3)', polePositions: 0, worldChampionships: 0, dnfs: 5 },
  },
  ALO: {
    firstName: 'Fernando', lastName: 'Alonso',
    team: 'Aston Martin', number: 14, color: '#358C75',
    image: '/AM_ALO_NB.png', flag: 'es', nationality: 'Spanish',
    season: { position: '21th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 2, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 430, careerPoints: 2393, highestRaceFinish: '1 (x32)', podiums: 106, highestGridPosition: '1 (x22)', polePositions: 22, worldChampionships: 2, dnfs: 85 },
  },
  STR: {
    firstName: 'Lance', lastName: 'Stroll',
    team: 'Aston Martin', number: 18, color: '#358C75',
    image: '/AM_STR_NB.png', flag: 'ca', nationality: 'Canadian',
    season: { position: '19th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 0, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 166, careerPoints: 281, highestRaceFinish: '3 (x3)', podiums: 3, highestGridPosition: '1 (x1)', polePositions: 1, worldChampionships: 0, dnfs: 34 },
  },
  GAS: {
    firstName: 'Pierre', lastName: 'Gasly',
    team: 'Alpine', number: 10, color: '#0093cc',
    image: '/A_GAS_NB.png', flag: 'fr', nationality: 'French',
    season: { position: '16th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 1, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 153, careerPoints: 420, highestRaceFinish: '1 (x1)', podiums: 4, highestGridPosition: '2 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 18 },
  },
  DOO: {
    firstName: 'Jack', lastName: 'Doohan',
    team: 'Alpine', number: 7, color: '#0093cc',
    image: '/A_DOO_NB.png', flag: 'au', nationality: 'Australian',
    season: { position: '20th', points: 0, races: 3, gpPoints: 0, wins: 0, podiums: 0, poles: 0, top10s: 0, fastestLaps: 0, dnfs: 1, sprintRaces: 1, sprintPoints: 0, sprintWins: 0, sprintPodiums: 0, sprintPoles: 0, sprintTop10s: 0 },
    career: { grandPrixEntered: 3, careerPoints: 0, highestRaceFinish: '15 (x1)', podiums: 0, highestGridPosition: '13 (x1)', polePositions: 0, worldChampionships: 0, dnfs: 1 },
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

function StatCell({ label, value, isMobile }: { label: string; value: string | number; isMobile: boolean }) {
  return (
    <div style={{ paddingBottom: '1.2rem' }}>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500, margin: '0 0 6px 0' }}>{label}</p>
      <p style={{ color: 'white', fontSize: isMobile ? '1.4rem' : '2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>{value}</p>
    </div>
  );
}

/* ───────────────────────────────────────────
   메인 컴포넌트
─────────────────────────────────────────── */
export default function DriverProfile() {
  const isMobile = useIsMobile();
  const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').pop()?.toUpperCase() : '';
  const [currentSlug, setCurrentSlug] = useState<string>('');

  useEffect(() => {
    setCurrentSlug(slug || '');
  }, [slug]);

  if (!currentSlug || !driversData[currentSlug]) return <div style={{ color: 'white', padding: '2rem' }}>로딩 중...</div>;

  const driver = driversData[currentSlug];
  const { season: s, career: c } = driver;

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      
      {/* ── 히어로 섹션 ── */}
      <div style={{
        position: 'relative',
        background: `linear-gradient(135deg, ${driver.color}20 0%, #0a0a0f 100%)`,
        minHeight: isMobile ? '500px' : '600px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: isMobile ? '1rem' : '2rem',
      }}>
        {/* 배경 그라데이션 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${isMobile ? '70%' : '60%'} ${isMobile ? '30%' : '40%'}, ${driver.color}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* 텍스트 콘텐츠 */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '1.5rem' : '3rem 2rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: isMobile ? '450px' : '550px',
        }}>
          {/* 상단 정보 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <p style={{
              color: 'white',
              fontSize: isMobile ? '1rem' : '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              margin: 0, lineHeight: 1,
            }}>
              {driver.nationality}
            </p>
            <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 6px', fontSize: isMobile ? '1rem' : '1.5rem', fontWeight: 900 }}>·</span>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: isMobile ? '1rem' : '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              margin: 0, lineHeight: 1,
            }}>
              {driver.team}
            </p>
          </div>

          {/* 이름 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 style={{
              color: 'white',
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0',
              lineHeight: 1,
              wordBreak: 'break-word',
            }}>
              {driver.firstName}
            </h1>
            <h1 style={{
              color: 'white',
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0.5rem 0 0 0',
              lineHeight: 1,
              wordBreak: 'break-word',
            }}>
              {driver.lastName}
            </h1>
          </div>

          {/* 드라이버 번호 */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '50px' : '56px',
            height: isMobile ? '50px' : '56px',
            borderRadius: isMobile ? '10px' : '12px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            marginTop: '1rem',
          }}>
            <span style={{ color: 'white', fontSize: isMobile ? '1.4rem' : '1.6rem', fontWeight: 900 }}>
              {driver.number}
            </span>
          </div>
        </div>

        {/* 드라이버 이미지 */}
        <div style={{
          position: 'absolute',
          right: isMobile ? '-5%' : '5%',
          bottom: 0,
          height: '100%',
          width: isMobile ? '70%' : '35%',
          zIndex: 1,
          opacity: isMobile ? 0.5 : 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
          <img
            src={driver.image}
            alt={`${driver.firstName} ${driver.lastName}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom right',
              maxWidth: '100%',
            }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* ── 스탯 섹션 ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          color: 'white',
          fontSize: isMobile ? '1.8rem' : '2.5rem',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          margin: '0 0 2rem 0',
          textTransform: 'uppercase',
          fontStyle: 'italic',
        }}>
          STATISTICS
        </h2>

        {/* 모바일일 때 1단, PC일 때 2단 그리드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 400px',
          gap: isMobile ? '2rem' : '3rem',
          alignItems: isMobile ? 'stretch' : 'start',
        }}>
          {/* ── 왼쪽: 2026 시즌 스탯 ── */}
          <div style={{ overflowX: 'hidden' }}>
            <h3 style={{
              color: 'white',
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              margin: '0 0 1.5rem 0',
              textTransform: 'uppercase',
            }}>
              2026 SEASON
            </h3>

            {/* 시즌 포지션 + 포인트 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
              gap: isMobile ? '1.5rem 1rem' : '2rem',
              marginBottom: '1rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              <StatCell label="Season Position" value={s.position} isMobile={isMobile} />
              <StatCell label="Season Points" value={s.points} isMobile={isMobile} />
            </div>

            {/* GP 스탯 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
              gap: isMobile ? '1.5rem 1rem' : '0 2rem',
              marginBottom: '1rem',
            }}>
              <StatCell label="Grand Prix Races" value={s.races} isMobile={isMobile} />
              <StatCell label="Grand Prix Points" value={s.gpPoints} isMobile={isMobile} />
              <StatCell label="Grand Prix Wins" value={s.wins} isMobile={isMobile} />
              <StatCell label="Grand Prix Podiums" value={s.podiums} isMobile={isMobile} />
              <StatCell label="Grand Prix Poles" value={s.poles} isMobile={isMobile} />
              <StatCell label="Grand Prix Top 10s" value={s.top10s} isMobile={isMobile} />
              <StatCell label="DHL Fastest Laps" value={s.fastestLaps} isMobile={isMobile} />
              <StatCell label="DNFs" value={s.dnfs} isMobile={isMobile} />
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '1rem 0 1.5rem 0' }} />

            {/* 스프린트 스탯 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
              gap: isMobile ? '1.5rem 1rem' : '0 2rem',
            }}>
              <StatCell label="Sprint Races" value={s.sprintRaces} isMobile={isMobile} />
              <StatCell label="Sprint Points" value={s.sprintPoints} isMobile={isMobile} />
              <StatCell label="Sprint Wins" value={s.sprintWins} isMobile={isMobile} />
              <StatCell label="Sprint Podiums" value={s.sprintPodiums} isMobile={isMobile} />
              <StatCell label="Sprint Poles" value={s.sprintPoles} isMobile={isMobile} />
              <StatCell label="Sprint Top 10s" value={s.sprintTop10s} isMobile={isMobile} />
            </div>
          </div>

          {/* ── 오른쪽: 커리어 스탯 ── */}
          <div style={{
            background: '#1e1e2a',
            borderRadius: '20px',
            padding: isMobile ? '1.5rem' : '2rem',
            border: '1px solid rgba(255,255,255,0.06)',
            position: isMobile ? 'static' : 'sticky',
            top: '80px',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <h3 style={{
              color: 'white',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.01em',
              margin: '0 0 1rem 0',
              textTransform: 'uppercase',
            }}>
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

      <Footer />
    </div>
  );
}
