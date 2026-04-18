export interface Session {
  day: number;
  month: string;
  name: string;
  startTime: string;
  endTime?: string;
}

export interface RaceResult {
  pos: number;
  driverName: string;
  driverSlug: string;
  teamName: string;
  teamColor: string;
  time: string;
  points: number;
}

export interface CircuitInfo {
  name: string;
  image: string; // 서킷 레이아웃 이미지 경로
  length: string;
  firstGrandPrix: number;
  numberOfLaps: number;
  fastestLapTime: string;
  fastestLapHolder: string;
  raceDistance: string;
}

export interface RaceEvent {
  slug: string;
  round: number;
  country: string;
  flag: string;
  raceName: string;
  location: string;
  heroImage: string;
  isCompleted: boolean;
  sessions: Session[];
  circuit: CircuitInfo;
  results?: {
    race?: RaceResult[];
    qualifying?: RaceResult[];
    sprint?: RaceResult[];
  };
}

export const raceEvents: RaceEvent[] = [
  {
    slug: 'australia-2026',
    round: 1,
    country: 'Australia',
    flag: '🇦🇺',
    raceName: 'Australian Grand Prix',
    location: 'Melbourne',
    heroImage: '/circuits/australia.jpg',
    isCompleted: true,
    sessions: [
      { day: 13, month: 'MAR', name: 'PRACTICE 1', startTime: '12:30', endTime: '13:30' },
      { day: 13, month: 'MAR', name: 'PRACTICE 2', startTime: '16:00', endTime: '17:00' },
      { day: 14, month: 'MAR', name: 'PRACTICE 3', startTime: '12:30', endTime: '13:30' },
      { day: 14, month: 'MAR', name: 'QUALIFYING', startTime: '16:00', endTime: '17:00' },
      { day: 15, month: 'MAR', name: 'RACE', startTime: '15:00' },
    ],
    circuit: {
      name: 'Albert Park Circuit',
      image: '/circuits/australia_layout.png',
      length: '5.278km',
      firstGrandPrix: 1996,
      numberOfLaps: 58,
      fastestLapTime: '1:20.235',
      fastestLapHolder: 'Charles Leclerc (2022)',
      raceDistance: '306.124km',
    },
    results: {
      race: [
        { pos: 1, driverName: 'Kimi Antonelli', driverSlug: 'ANT', teamName: 'Mercedes', teamColor: '#00D2BE', time: '1:33:15.607', points: 25 },
        { pos: 2, driverName: 'George Russell', driverSlug: 'RUS', teamName: 'Mercedes', teamColor: '#00D2BE', time: '+5.515s', points: 18 },
        { pos: 3, driverName: 'Lewis Hamilton', driverSlug: 'HAM', teamName: 'Ferrari', teamColor: '#DC0000', time: '+25.267s', points: 15 },
        { pos: 4, driverName: 'Charles Leclerc', driverSlug: 'LEC', teamName: 'Ferrari', teamColor: '#DC0000', time: '+28.894s', points: 12 },
        { pos: 5, driverName: 'Oliver Bearman', driverSlug: 'BEA', teamName: 'Haas', teamColor: '#B6BABD', time: '+57.268s', points: 10 },
        { pos: 6, driverName: 'Lando Norris', driverSlug: 'NOR', teamName: 'McLaren', teamColor: '#FF8000', time: '+1:02.441s', points: 8 },
        { pos: 7, driverName: 'Oscar Piastri', driverSlug: 'PIA', teamName: 'McLaren', teamColor: '#FF8000', time: '+1:15.882s', points: 6 },
        { pos: 8, driverName: 'Max Verstappen', driverSlug: 'VER', teamName: 'Red Bull', teamColor: '#3671C6', time: '+1:28.114s', points: 4 },
        { pos: 9, driverName: 'Fernando Alonso', driverSlug: 'ALO', teamName: 'Aston Martin', teamColor: '#358C75', time: '+1:45.003s', points: 2 },
        { pos: 10, driverName: 'Lance Stroll', driverSlug: 'STR', teamName: 'Aston Martin', teamColor: '#358C75', time: '+1 lap', points: 1 },
        { pos: 11, driverName: 'Pierre Gasly', driverSlug: 'GAS', teamName: 'Alpine', teamColor: '#0093CC', time: '+1 lap', points: 0 },
        { pos: 12, driverName: 'Jack Doohan', driverSlug: 'DOO', teamName: 'Alpine', teamColor: '#0093CC', time: '+1 lap', points: 0 },
        { pos: 13, driverName: 'Yuki Tsunoda', driverSlug: 'TSU', teamName: 'Red Bull', teamColor: '#3671C6', time: '+2 laps', points: 0 },
        { pos: 14, driverName: 'Nico Hülkenberg', driverSlug: 'HUL', teamName: 'Sauber/Audi', teamColor: '#52E252', time: '+2 laps', points: 0 },
        { pos: 15, driverName: 'Gabriel Bortoleto', driverSlug: 'BOR', teamName: 'Sauber/Audi', teamColor: '#52E252', time: '+2 laps', points: 0 },
        { pos: 16, driverName: 'Alex Albon', driverSlug: 'ALB', teamName: 'Williams', teamColor: '#37BEDD', time: 'DNF', points: 0 },
        { pos: 17, driverName: 'Carlos Sainz', driverSlug: 'SAI', teamName: 'Williams', teamColor: '#37BEDD', time: 'DNF', points: 0 },
        { pos: 18, driverName: 'Isack Hadjar', driverSlug: 'HAD', teamName: 'Racing Bulls', teamColor: '#6692FF', time: 'DNF', points: 0 },
        { pos: 19, driverName: 'Liam Lawson', driverSlug: 'LAW', teamName: 'Racing Bulls', teamColor: '#6692FF', time: 'DNF', points: 0 },
        { pos: 20, driverName: 'Esteban Ocon', driverSlug: 'OCO', teamName: 'Haas', teamColor: '#B6BABD', time: 'DNF', points: 0 },
      ],
      qualifying: [
        { pos: 1, driverName: 'Kimi Antonelli', driverSlug: 'ANT', teamName: 'Mercedes', teamColor: '#00D2BE', time: '1:15.096', points: 0 },
        { pos: 2, driverName: 'George Russell', driverSlug: 'RUS', teamName: 'Mercedes', teamColor: '#00D2BE', time: '+0.112s', points: 0 },
        { pos: 3, driverName: 'Charles Leclerc', driverSlug: 'LEC', teamName: 'Ferrari', teamColor: '#DC0000', time: '+0.284s', points: 0 },
        { pos: 4, driverName: 'Lewis Hamilton', driverSlug: 'HAM', teamName: 'Ferrari', teamColor: '#DC0000', time: '+0.391s', points: 0 },
        { pos: 5, driverName: 'Lando Norris', driverSlug: 'NOR', teamName: 'McLaren', teamColor: '#FF8000', time: '+0.512s', points: 0 },
      ],
    },
  },
  {
    slug: 'china-2026',
    round: 2,
    country: 'China',
    flag: '🇨🇳',
    raceName: 'Chinese Grand Prix',
    location: 'Shanghai',
    heroImage: '/circuits/china.jpg',
    isCompleted: true,
    sessions: [
      { day: 20, month: 'MAR', name: 'PRACTICE 1', startTime: '11:30', endTime: '12:30' },
      { day: 20, month: 'MAR', name: 'SPRINT QUALIFYING', startTime: '15:30', endTime: '16:14' },
      { day: 21, month: 'MAR', name: 'SPRINT', startTime: '11:00', endTime: '12:00' },
      { day: 21, month: 'MAR', name: 'QUALIFYING', startTime: '15:00', endTime: '16:00' },
      { day: 22, month: 'MAR', name: 'RACE', startTime: '15:00' },
    ],
    circuit: {
      name: 'Shanghai International Circuit',
      image: '/circuits/china_layout.png',
      length: '5.451km',
      firstGrandPrix: 2004,
      numberOfLaps: 56,
      fastestLapTime: '1:32.238',
      fastestLapHolder: 'Michael Schumacher (2004)',
      raceDistance: '305.066km',
    },
    results: {
      race: [
        { pos: 1, driverName: 'Charles Leclerc', driverSlug: 'LEC', teamName: 'Ferrari', teamColor: '#DC0000', time: '1:31:05.234', points: 25 },
        { pos: 2, driverName: 'Lewis Hamilton', driverSlug: 'HAM', teamName: 'Ferrari', teamColor: '#DC0000', time: '+3.112s', points: 18 },
        { pos: 3, driverName: 'Kimi Antonelli', driverSlug: 'ANT', teamName: 'Mercedes', teamColor: '#00D2BE', time: '+12.445s', points: 15 },
        { pos: 4, driverName: 'George Russell', driverSlug: 'RUS', teamName: 'Mercedes', teamColor: '#00D2BE', time: '+18.771s', points: 12 },
        { pos: 5, driverName: 'Lando Norris', driverSlug: 'NOR', teamName: 'McLaren', teamColor: '#FF8000', time: '+34.882s', points: 10 },
        { pos: 6, driverName: 'Oscar Piastri', driverSlug: 'PIA', teamName: 'McLaren', teamColor: '#FF8000', time: '+41.003s', points: 8 },
        { pos: 7, driverName: 'Max Verstappen', driverSlug: 'VER', teamName: 'Red Bull', teamColor: '#3671C6', time: '+55.114s', points: 6 },
        { pos: 8, driverName: 'Oliver Bearman', driverSlug: 'BEA', teamName: 'Haas', teamColor: '#B6BABD', time: '+1:02.338s', points: 4 },
        { pos: 9, driverName: 'Fernando Alonso', driverSlug: 'ALO', teamName: 'Aston Martin', teamColor: '#358C75', time: '+1:18.556s', points: 2 },
        { pos: 10, driverName: 'Yuki Tsunoda', driverSlug: 'TSU', teamName: 'Red Bull', teamColor: '#3671C6', time: '+1:25.771s', points: 1 },
      ],
    },
  },
  {
    slug: 'japan-2026',
    round: 3,
    country: 'Japan',
    flag: '🇯🇵',
    raceName: 'Japanese Grand Prix',
    location: 'Suzuka',
    heroImage: '/circuits/japan.jpg',
    isCompleted: true,
    sessions: [
      { day: 3, month: 'APR', name: 'PRACTICE 1', startTime: '11:30', endTime: '12:30' },
      { day: 3, month: 'APR', name: 'PRACTICE 2', startTime: '15:00', endTime: '16:00' },
      { day: 4, month: 'APR', name: 'PRACTICE 3', startTime: '11:30', endTime: '12:30' },
      { day: 4, month: 'APR', name: 'QUALIFYING', startTime: '15:00', endTime: '16:00' },
      { day: 5, month: 'APR', name: 'RACE', startTime: '14:00' },
    ],
    circuit: {
      name: 'Suzuka International Racing Course',
      image: '/circuits/japan_layout.png',
      length: '5.807km',
      firstGrandPrix: 1987,
      numberOfLaps: 53,
      fastestLapTime: '1:30.983',
      fastestLapHolder: 'Lewis Hamilton (2019)',
      raceDistance: '307.471km',
    },
    results: {
      race: [
        { pos: 1, driverName: 'Charles Leclerc', driverSlug: 'LEC', teamName: 'Ferrari', teamColor: '#DC0000', time: '1:29:44.112', points: 25 },
        { pos: 2, driverName: 'Kimi Antonelli', driverSlug: 'ANT', teamName: 'Mercedes', teamColor: '#00D2BE', time: '+8.334s', points: 18 },
        { pos: 3, driverName: 'Lewis Hamilton', driverSlug: 'HAM', teamName: 'Ferrari', teamColor: '#DC0000', time: '+15.667s', points: 15 },
        { pos: 4, driverName: 'George Russell', driverSlug: 'RUS', teamName: 'Mercedes', teamColor: '#00D2BE', time: '+22.441s', points: 12 },
        { pos: 5, driverName: 'Lando Norris', driverSlug: 'NOR', teamName: 'McLaren', teamColor: '#FF8000', time: '+38.115s', points: 10 },
      ],
    },
  },
  {
    slug: 'bahrain-2026',
    round: 4,
    country: 'Bahrain',
    flag: '🇧🇭',
    raceName: 'Bahrain Grand Prix',
    location: 'Sakhir',
    heroImage: '/circuits/bahrain.jpg',
    isCompleted: false,
    sessions: [
      { day: 17, month: 'APR', name: 'PRACTICE 1', startTime: '13:30', endTime: '14:30' },
      { day: 17, month: 'APR', name: 'PRACTICE 2', startTime: '17:00', endTime: '18:00' },
      { day: 18, month: 'APR', name: 'PRACTICE 3', startTime: '13:30', endTime: '14:30' },
      { day: 18, month: 'APR', name: 'QUALIFYING', startTime: '17:00', endTime: '18:00' },
      { day: 19, month: 'APR', name: 'RACE', startTime: '18:00' },
    ],
    circuit: {
      name: 'Bahrain International Circuit',
      image: '/circuits/bahrain_layout.png',
      length: '5.412km',
      firstGrandPrix: 2004,
      numberOfLaps: 57,
      fastestLapTime: '1:31.447',
      fastestLapHolder: 'Pedro de la Rosa (2005)',
      raceDistance: '308.238km',
    },
  },
  {
    slug: 'saudi-arabia-2026',
    round: 5,
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    raceName: 'Saudi Arabian Grand Prix',
    location: 'Jeddah',
    heroImage: '/circuits/saudi.jpg',
    isCompleted: false,
    sessions: [
      { day: 1, month: 'MAY', name: 'PRACTICE 1', startTime: '18:30', endTime: '19:30' },
      { day: 1, month: 'MAY', name: 'PRACTICE 2', startTime: '22:00', endTime: '23:00' },
      { day: 2, month: 'MAY', name: 'PRACTICE 3', startTime: '18:30', endTime: '19:30' },
      { day: 2, month: 'MAY', name: 'QUALIFYING', startTime: '22:00', endTime: '23:00' },
      { day: 3, month: 'MAY', name: 'RACE', startTime: '21:00' },
    ],
    circuit: {
      name: 'Jeddah Corniche Circuit',
      image: '/circuits/saudi_layout.png',
      length: '6.174km',
      firstGrandPrix: 2021,
      numberOfLaps: 50,
      fastestLapTime: '1:30.734',
      fastestLapHolder: 'Lewis Hamilton (2021)',
      raceDistance: '308.450km',
    },
  },
];
