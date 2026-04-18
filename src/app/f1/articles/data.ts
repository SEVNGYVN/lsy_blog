export interface Article {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string[];
  externalUrl?: string;
}

export const articles: Article[] = [
  {
    slug: 'active-aero-2026',
    category: '오피셜 뉴스',
    title: '인천 F1 그랑프리, 경제적 타당성 적격 판정',
    description: "인천광역시가 추진해온 'F1 인천 그랑프리 기본구상 및 사전타당성조사'결과, 사업 타당성이 확보된 것으로 공식 발표됐습니다",
    image: '/F1CREW_INCHEON.png',
    date: '2026년 4월 16일',
    author: 'F1 CREW',
    externalUrl: 'https://www.instagram.com/p/DXLVqgUknC5/?img_index=1',
    content: [
      '2026 시즌은 Formula 1 역사상 가장 급진적인 기술 규정 변화를 맞이합니다. FIA가 발표한 새로운 레귤레이션의 핵심은 액티브 에어로다이나믹스의 전면 도입입니다. 이는 단순한 규정 변경이 아니라, F1 머신의 근본적인 설계 철학을 뒤바꾸는 혁명적 전환점입니다.',
      '액티브 에어로다이나믹스란 주행 상황에 따라 차량의 공기역학적 요소가 실시간으로 변형되는 시스템을 말합니다. 2026 규정에서는 프론트 윙과 리어 윙 모두에 가변 요소가 허용되며, 이를 통해 직선 구간에서는 드래그를 최소화하고 코너에서는 다운포스를 극대화할 수 있습니다.',
      '이 변화가 가져올 가장 큰 영향은 오버테이킹 기회의 증가입니다. 현재 DRS 시스템을 대체하는 이 새로운 메커니즘은 선행 차량의 난류 영향을 크게 줄여, 후방 차량이 더 가까이 접근할 수 있게 합니다. 시뮬레이션 데이터에 따르면, 후방 차량의 다운포스 손실이 현재 35%에서 약 15%로 감소할 것으로 예상됩니다.',
      '파워유닛 측면에서도 큰 변화가 있습니다. 전기 모터의 출력이 현재 대비 약 3배 증가하며, 이는 전체 파워의 약 50%를 전기 에너지가 담당하게 됨을 의미합니다. 이러한 변화는 지속가능성을 향한 F1의 의지를 보여주는 동시에, 팀들에게 에너지 관리라는 새로운 전략적 차원을 추가합니다.',
      '각 팀의 대응 전략도 주목할 만합니다. Red Bull Racing은 이미 2025 시즌 중반부터 2026 머신 개발에 상당한 자원을 투입한 것으로 알려져 있으며, Mercedes는 새로운 파워유닛 아키텍처에서 우위를 점하기 위해 혁신적인 배터리 기술을 개발 중입니다. Ferrari는 공기역학 부문에서의 전통적 강점을 살려 액티브 에어로 시스템의 효율성 극대화에 집중하고 있습니다.',
      '결론적으로, 2026 레귤레이션은 F1의 경쟁 판도를 완전히 재편할 잠재력을 가지고 있습니다. 기존 강호들의 지배력이 유지될지, 아니면 새로운 세력이 부상할지는 각 팀이 이 혁명적 변화에 얼마나 효과적으로 적응하느냐에 달려 있습니다.',
    ],
  },
  {
    slug: 'driver-market-2027',
    category: '드라이버 마켓',
    title: '2027 시트 쟁탈전: 누가 어디로 가는가?',
    description: '주요 드라이버 계약 만료 시점과 팀 이적 루머를 정리하고, 가능한 시나리오를 예측합니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzAgyQ4LOXqIULXKmApKNMZw1crNYycBmZulDScxcEG4l9IuZ3X8yPLRPOmjK1QeSukPMklCDYcgdTH7Q7r7UT7RKwkfCU9FyN-YpBYIAx4-cSLttMG5-PSUzTnMDMozlBbEx5AtHtSq8it1s-SQC1bmgXJqmYAtgqjZJFiKVomBfMQO9fks2dxOebVPBg3e7hqVF8VpKGHPvBV3PxjpfHuOd6JV8zpTZYHBpa_yXBi3tmyvTwz-y_yJgoiDO8-n1o_I1TiZbNU88L',
    date: '2026년 4월 12일',
    author: 'F1 에디토리얼 패독팀',
    externalUrl: '',
    content: [
      '2026 시즌이 본격적으로 시작된 가운데, 패독에서는 이미 2027 시즌을 향한 드라이버 마켓이 뜨겁게 달아오르고 있습니다. 여러 톱 드라이버들의 계약이 올 시즌 말 만료되면서, 역대급 이적 시장이 펼쳐질 전망입니다.',
      'Max Verstappen의 동향이 가장 큰 관심사입니다. Red Bull Racing과의 장기 계약에도 불구하고, 성적 조항(performance clause)의 존재가 공공연한 비밀입니다. 만약 Red Bull이 2026 시즌에서 컨스트럭터 챔피언십 3위 밖으로 밀려난다면, Verstappen은 계약을 해지할 수 있는 옵션을 갖게 됩니다.',
      'Mercedes는 Verstappen 영입을 위해 오랫동안 공을 들여왔습니다. Toto Wolff는 공개적으로 Verstappen에 대한 관심을 표명한 바 있으며, Mercedes의 2026 패키지가 경쟁력을 보여준다면 이 시나리오는 현실이 될 수 있습니다.',
      'Ferrari 역시 주목해야 합니다. Lewis Hamilton의 Ferrari 이적은 2025 시즌 최대 뉴스였지만, Hamilton의 나이(41세)를 고려하면 Ferrari는 장기적 관점에서 후임자를 물색할 수밖에 없습니다. Charles Leclerc는 팀의 미래로 확고한 위치를 차지하고 있으며, 두 번째 시트를 둘러싼 경쟁이 치열해질 것입니다.',
      'McLaren의 Lando Norris와 Oscar Piastri 콤비는 현재 F1 그리드에서 가장 강력한 드라이버 라인업 중 하나입니다. 두 드라이버 모두 장기 계약을 맺고 있어 당장의 변동은 없겠지만, Norris가 챔피언십 타이틀을 향한 야망을 이루지 못한다면 상황이 달라질 수 있습니다.',
      '주니어 드라이버들의 부상도 눈여겨봐야 합니다. F2에서 인상적인 성적을 거두고 있는 여러 유망주들이 2027 시즌 F1 데뷔를 노리고 있으며, 이들의 존재는 현재 중위권 팀 드라이버들에게 상당한 압박으로 작용할 것입니다.',
    ],
  },
  {
    slug: 'japan-gp-review-2026',
    category: '레이스 리뷰',
    title: '일본 GP 리뷰: 스즈카에서의 전략 대결',
    description: 'Round 3 일본 그랑프리의 핵심 전략 분석과 드라이버별 퍼포먼스를 되짚어 봅니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAODdHenYMXq92eh8xvg-EkrpcbNPsheeYNOf-IpkVOfAv-vystn_k7NAyWdnKW4JGO1QqHBKXYOthfsXqqHqQf1bXSYTCxDq4MpBvubU5IDCYuoNWjfKZEJUvMT64JZsuKZ9Rz4dth6svUGjQyOJ-5EUbNjyMpNsnvfZdR-bnSLkdEpgaLYl-B0CEVatj_KVOByYwkvEGyW5Ej8VTx0-WHl4sR7xlRdgtdeBB-aJbckVUMVCZZ7gtWRes_jq2azM6ztw276wrNkc0W',
    date: '2026년 3월 30일',
    author: 'F1 에디토리얼 분석팀',
    externalUrl: '',
    content: [
      '스즈카 서킷에서 펼쳐진 2026 시즌 Round 3 일본 그랑프리는 올 시즌 가장 흥미진진한 전략 대결을 선사했습니다. 53랩에 걸친 레이스에서 타이어 전략, 날씨 변수, 그리고 드라이버들의 순간적인 판단력이 결과를 좌우했습니다.',
      '폴 포지션에서 출발한 Kimi Antonelli는 레이스 초반 강력한 페이스로 격차를 벌렸습니다. Mercedes의 W17은 스즈카의 고속 코너 섹션에서 특히 뛰어난 안정성을 보여주었고, 이는 새로운 액티브 에어로 시스템의 효율적인 작동 덕분이었습니다.',
      '레이스의 전환점은 27랩에서 찾아왔습니다. 갑작스러운 소나기가 S 커브 구간에 내리기 시작하면서, 팀들은 인터미디엇 타이어로의 교체 여부를 놓고 극적인 판단을 내려야 했습니다. Ferrari는 과감하게 두 드라이버 모두를 즉시 피트인시킨 반면, Mercedes는 한 랩을 더 기다렸습니다.',
      'Ferrari의 빠른 판단은 결과적으로 적중했습니다. Charles Leclerc는 인터미디엇 타이어에서 놀라운 페이스를 보여주며 Antonelli를 추월하는 데 성공했고, Lewis Hamilton 역시 3위까지 순위를 끌어올렸습니다. 반면 McLaren은 피트 전략에서 실기하며 두 드라이버 모두 포인트 획득에 그쳤습니다.',
      '비가 그친 후 다시 슬릭 타이어로 교체하는 두 번째 피트스톱 윈도우에서도 긴장감 넘치는 순간들이 이어졌습니다. George Russell은 과감하게 일찍 슬릭으로 교체하는 언더컷 전략을 시도했고, 이는 그에게 4위라는 값진 결과를 안겨주었습니다.',
      '최종 결과는 Leclerc의 시즌 첫 우승, Antonelli 2위, Hamilton 3위로 마무리되었습니다. 이 결과로 드라이버 챔피언십은 더욱 치열해졌으며, 컨스트럭터 챔피언십에서 Mercedes와 Ferrari의 격차는 단 5포인트로 좁혀졌습니다.',
    ],
  },
];
