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
  {slug: 'driver-market-2027',
    category: '인터뷰',
    title: '막스 베르스타펜, 람비아제 이적에 직접 동의',
    description: '베르스타펜은 최근 한 인터뷰에서 자신의 좌측근인인 람피아제의 맥라렌 이적에 대해 본인이 직접 동의한다고 밝혔습니다.',
    image: 'F1CREW_LAM.png',
    date: '2026년 4월 17일',
    author: 'F1 CREW',
    externalUrl: '',
    content: [
      '',
    ],
  },
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
      '',
    ],
  },
  {

    slug: 'japan-gp-review-2026',
    category: 'AMuS/공신력 상',
    title: '페라리, 엔진 성능 개선 기회 열렸다?',
    description: '마이애미 그랑프리 이후, FIA는 각 팀의 엔진 성능을 평가해 업그레이드 허용 여부를 결정할 예정입니다.',
    image: 'F1CREW_F.png',
    date: '2026년 4월 8일',
    author: 'F1 CREW',
    externalUrl: 'https://www.instagram.com/p/DW22AgmEoOy/?img_index=1',
    content: [
      '',
    ],
  },
];
