/* ═══════════════════════════════════════════════════════════
   드라이버 마스터 데이터
   - 이 파일 하나만 수정하면 모든 페이지에 자동 반영됩니다.
   - 약자(key): 3자리 드라이버 코드 (예: ANT, RUS, LEC)
   ═══════════════════════════════════════════════════════════ */

export interface DriverInfo {
  firstName: string;
  lastName: string;
  team: string;
  teamColor: string;   // 팀 컬러 (hex)
  image: string;       // public 폴더 기준 드라이버 이미지 경로
  flag: string;        // flagcdn.com ISO 2자리 국가코드 (소문자)
}

export const DRIVERS: Record<string, DriverInfo> = {
  ANT: { firstName: 'Kimi',     lastName: 'Antonelli',  team: 'Mercedes',         teamColor: '#38d2b8', image: '/M_ANT_NB.png',  flag: 'it' },
  RUS: { firstName: 'George',   lastName: 'Russell',    team: 'Mercedes',         teamColor: '#38d2b8', image: '/M_RUS_NB.png',  flag: 'gb' },
  LEC: { firstName: 'Charles',  lastName: 'Leclerc',    team: 'Ferrari',          teamColor: '#DC0000', image: '/F_LEC_NB.png',  flag: 'mc' },
  HAM: { firstName: 'Lewis',    lastName: 'Hamilton',   team: 'Ferrari',          teamColor: '#DC0000', image: '/F_HAM_NB.png',  flag: 'gb' },
  NOR: { firstName: 'Lando',    lastName: 'Norris',     team: 'McLaren',          teamColor: '#FF8000', image: '/ML_NOR_NB.png', flag: 'gb' },
  PIA: { firstName: 'Oscar',    lastName: 'Piastri',    team: 'McLaren',          teamColor: '#FF8000', image: '/ML_PIA_NB.png', flag: 'au' },
  BEA: { firstName: 'Oliver',   lastName: 'Bearman',    team: 'Haas F1 Team',     teamColor: '#5E6D75', image: '/H_BEA_NB.png',  flag: 'gb' },
  GAS: { firstName: 'Pierre',   lastName: 'Gasly',      team: 'Alpine',           teamColor: '#0090FF', image: '/A_GAS_NB.png',  flag: 'fr' },
  VER: { firstName: 'Max',      lastName: 'Verstappen', team: 'Red Bull Racing',  teamColor: '#3671C6', image: '/R_VER_NB.png',  flag: 'nl' },
  LAW: { firstName: 'Liam',     lastName: 'Lawson',     team: 'Racing Bulls',     teamColor: '#003BD1', image: '/RB_LAW_NB.png', flag: 'nz' },
  LIN: { firstName: 'Arvid',    lastName: 'Lindblad',   team: 'Racing Bulls',     teamColor: '#003BD1', image: '/RB_LIN_NB.png', flag: 'gb' },
  HAD: { firstName: 'Isack',    lastName: 'Hadjar',     team: 'Red Bull Racing',  teamColor: '#3671C6', image: '/R_HAD_NB.png',  flag: 'fr' },
  BOR: { firstName: 'Gabriel',  lastName: 'Bortoleto',  team: 'Audi',             teamColor: '#7D1600', image: '/AD_BOR_NB.png', flag: 'br' },
  SAI: { firstName: 'Carlos',   lastName: 'Sainz',      team: 'Williams',         teamColor: '#041E3C', image: '/W_SAI_NB.png',  flag: 'es' },
  OCO: { firstName: 'Esteban',  lastName: 'Ocon',       team: 'Haas F1 Team',     teamColor: '#5E6D75', image: '/H_OCO_NB.png',  flag: 'fr' },
  COL: { firstName: 'Franco',   lastName: 'Colapinto',  team: 'Alpine',           teamColor: '#0090FF', image: '/A_COL_NB.png',  flag: 'ar' },
  HUL: { firstName: 'Nico',     lastName: 'Hülkenberg', team: 'Audi',             teamColor: '#7D1600', image: '/AD_HUL_NB.png', flag: 'de' },
  ALB: { firstName: 'Alexander',lastName: 'Albon',      team: 'Williams',         teamColor: '#041E3C', image: '/W_ALB_NB.png',  flag: 'th' },
  BOT: { firstName: 'Valtteri', lastName: 'Bottas',     team: 'Cadillac',         teamColor: '#4B4C53', image: '/C_BOT_NB.png',  flag: 'fi' },
  PER: { firstName: 'Sergio',   lastName: 'Pérez',      team: 'Cadillac',         teamColor: '#4B4C53', image: '/C_PER_NB.png',  flag: 'mx' },
  ALO: { firstName: 'Fernando', lastName: 'Alonso',     team: 'Aston Martin',     teamColor: '#358C75', image: '/AM_ALO_NB.png', flag: 'es' },
  STR: { firstName: 'Lance',    lastName: 'Stroll',     team: 'Aston Martin',     teamColor: '#358C75', image: '/AM_STR_NB.png', flag: 'ca' },
  TSU: { firstName: 'Yuki',     lastName: 'Tsunoda',    team: 'Red Bull Racing',  teamColor: '#3671C6', image: '/R_TSU_NB.png',  flag: 'jp' },
  DOO: { firstName: 'Jack',     lastName: 'Doohan',     team: 'Alpine',           teamColor: '#0090FF', image: '/A_DOO_NB.png',  flag: 'au' },
};

/** 드라이버 코드로 전체 이름 반환 */
export function getDriverName(code: string): string {
  const d = DRIVERS[code];
  return d ? `${d.firstName} ${d.lastName}` : code;
}

/** 드라이버 코드로 팀 컬러 반환 */
export function getTeamColor(code: string): string {
  return DRIVERS[code]?.teamColor ?? '#888888';
}

/** 드라이버 코드로 팀 이름 반환 */
export function getTeamName(code: string): string {
  return DRIVERS[code]?.team ?? '';
}
