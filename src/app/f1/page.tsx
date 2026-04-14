import Link from 'next/link';

export const metadata = {
  title: 'F1 Editorial Blog',
  description: '모터스포츠의 정점을 향한 깊이 있는 분석',
};

export default function Blog() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.tailwind = window.tailwind || {};
          window.tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "on-surface-variant": "#404753", "on-secondary-fixed-variant": "#46464a", "tertiary": "#5a5c5e",
                  "on-primary": "#ffffff", "on-primary-fixed-variant": "#004786", "surface-dim": "#dbd9de",
                  "inverse-surface": "#2f3034", "secondary-fixed-dim": "#c7c6ca", "primary": "#005cab",
                  "on-error-container": "#93000a", "on-secondary": "#ffffff", "on-background": "#1a1b1f",
                  "surface-variant": "#e3e2e6", "surface-container-low": "#f4f3f7", "tertiary-container": "#737576",
                  "secondary": "#5e5e62", "primary-container": "#0075d6", "background": "#faf9fd",
                  "surface-container-lowest": "#ffffff", "secondary-fixed": "#e3e2e6", "on-primary-fixed": "#001c3a",
                  "inverse-primary": "#a5c8ff", "secondary-container": "#e0dfe3", "primary-fixed-dim": "#a5c8ff",
                  "tertiary-fixed": "#e2e2e4", "surface-container": "#efedf2", "surface-bright": "#faf9fd",
                  "on-secondary-container": "#626266", "surface-container-high": "#e9e7ec", "on-tertiary-fixed": "#1a1c1d",
                  "outline": "#707785", "surface-container-highest": "#e3e2e6", "error-container": "#ffdad6",
                  "on-error": "#ffffff", "error": "#ba1a1a", "tertiary-fixed-dim": "#c6c6c8", "surface-tint": "#005faf",
                  "on-tertiary-container": "#fcfcfe", "on-secondary-fixed": "#1a1b1f", "surface": "#faf9fd",
                  "inverse-on-surface": "#f2f0f4", "on-tertiary-fixed-variant": "#454749", "on-surface": "#1a1b1f",
                  "primary-fixed": "#d4e3ff", "on-primary-container": "#fefcff", "outline-variant": "#c0c7d6",
                  "on-tertiary": "#ffffff"
                },
                borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
                fontFamily: { headline: ["Inter"], body: ["Inter"], label: ["Inter"] }
              }
            }
          };
        `
      }} />

      <div className="f1-blog light bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed" style={{ minHeight: '100vh', marginTop: '-80px' }}>
        <nav className="fixed top-0 w-full z-50 bg-[#faf9fd]/80 dark:bg-[#1a1b1f]/80 backdrop-blur-xl">
          <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <Link href="/blog" className="text-xl font-bold tracking-tighter text-[#1E90FF]">F1 에디토리얼</Link>
            <div className="hidden md:flex items-center space-x-8 font-['Inter'] tracking-tight">
              <a className="text-[#5e5e62] hover:text-[#1E90FF] transition-colors" href="#">팀</a>
              <a className="text-[#5e5e62] hover:text-[#1E90FF] transition-colors" href="#">드라이버</a>
              <a className="text-[#5e5e62] hover:text-[#1E90FF] transition-colors" href="#">서킷</a>
              <a className="text-[#5e5e62] hover:text-[#1E90FF] transition-colors" href="#">순위</a>
              <Link className="text-[#5e5e62] hover:text-[#1E90FF] transition-colors" href="/">포트폴리오 돌아가기</Link>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-on-surface-variant hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                구독하기
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
          <header className="mb-16">
            <span className="text-secondary label-md uppercase tracking-widest text-xs font-semibold mb-4 block">뉴스룸</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1]" style={{ letterSpacing: '-0.02em', color: 'black' }}>
                  모터스포츠의 <span className="text-primary">정점</span>을 향한 깊이 있는 분석.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-sm font-medium leading-relaxed">
                  모든 코너, 모든 기술적 혁신, 그리고 패독의 모든 루머를 분석합니다.
              </p>
            </div>
          </header>

          <div className="sticky top-24 z-40 mb-12">
            <div className="bg-surface-container-low rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm">
              <div className="relative w-full md:flex-1">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline" placeholder="50개 이상의 에디토리얼 아카이브 검색..." type="text"/>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
                <button className="bg-primary-fixed text-on-primary-fixed px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">전체 게시글</button>
                <button className="bg-surface-container-highest text-on-secondary-container px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-variant transition-colors">기술 분석</button>
                <button className="bg-surface-container-highest text-on-secondary-container px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-variant transition-colors">레이스 리포트</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <article className="md:col-span-8 group cursor-pointer">
              <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-6 relative">
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="transition-transform duration-700 group-hover:scale-105" alt="고속 포뮬러 1 카" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbXh0Hu1Aj4Dwnk3dq9lC4j_a8J7Mq66XarDPUiyrzu8taMzQaDvSL6h48pttaqudSFOBF6PDWweGBeKJFeFeL6Ccj1GsIla-LT1Xeao0CUhKBmkI4uCkApNsnnyEzXfeK42xnRN6nCE5i5oBqMdi2jfdD8u3QMaZZsW_5KecZR5KYUTG6UgIY-VLN4hTBq902GIBAweOwGgmGQy5o_pBGrkIK9gzm6nbaD9YcIfCeZmU42U1Ib644m067U94IyYePG1gf3To0DtlS" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <span className="bg-primary text-on-primary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">기술 심층 분석</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors text-[#1a1b1f]">에어로 전쟁: 레드불의 플로어 업데이트가 RB20의 한계를 재정의한 방법</h2>
              <p className="text-secondary text-lg leading-relaxed mb-6 max-w-2xl">
                  RB20에 도입된 최신 플로어 엣지 변경 사항과 이전 시뮬레이션에서 나타난 포퍼싱 문제를 어떻게 해결했는지에 대한 포괄적인 분석입니다.
              </p>
            </article>

            <div className="md:col-span-4 space-y-8">
              <h3 className="text-xl font-bold border-b border-outline-variant/15 pb-4 text-black">가장 많이 본 글</h3>
              <article className="group cursor-pointer">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">루머</span>
                <h4 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors mb-2 text-black">사인츠의 아우디행: 최종 발표를 늦추는 법적 걸림돌</h4>
                <p className="text-outline text-sm">4분 소요 • 10월 22일</p>
              </article>
              <article className="group cursor-pointer">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">레이스 리포트</span>
                <h4 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors mb-2 text-black">모나코 GP: 페라리의 피트 스톱 전략 마스터클래스</h4>
                <p className="text-outline text-sm">7분 소요 • 10월 21일</p>
              </article>
            </div>
          </div>
        </main>
        
        <footer className="w-full mt-20 bg-[#efedf2] dark:bg-[#1a1b1f]">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto border-t border-[#c0c7d6]/15">
            <div className="text-xs font-['Inter'] text-[#5e5e62] uppercase tracking-widest mb-8 md:mb-0">
                © 2024 F1 에디토리얼. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a className="text-xs font-['Inter'] text-[#5e5e62] uppercase tracking-widest hover:text-[#1E90FF] transition-colors" href="#">Twitter</a>
              <a className="text-xs font-['Inter'] text-[#5e5e62] uppercase tracking-widest hover:text-[#1E90FF] transition-colors" href="#">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
