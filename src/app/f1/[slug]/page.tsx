import Link from 'next/link';
import { getSortedF1PostsData } from '@/lib/f1-posts';

export const metadata = {
  title: 'F1 Editorial Blog',
  description: '모터스포츠의 정점을 향한 깊이 있는 분석',
};

export default function Blog() {
  const allPostsData = getSortedF1PostsData();
  const mainPost = allPostsData[0]; // 가장 최신 글 1개 (메인)
  const subPosts = allPostsData.slice(1, 4); // 두번째 최신 글부터 (사이드바)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.tailwind = {
            darkMode: "class",
            theme: { extend: { colors: {
              "primary": "#005cab", "on-background": "#1a1b1f", "background": "#faf9fd",
              "secondary": "#5e5e62", "on-surface-variant": "#404753", "outline": "#707785"
            }}}
          };
        `
      }} />

      <div className="f1-blog light bg-background text-on-background" style={{ minHeight: '100vh', marginTop: '-80px' }}>
        <nav className="fixed top-0 w-full z-50 bg-[#faf9fd]/80 backdrop-blur-xl">
          <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <Link href="/blog" className="text-xl font-bold tracking-tighter text-[#1E90FF]">F1 에디토리얼</Link>
            <div className="hidden md:flex items-center space-x-8 font-['Inter'] tracking-tight">
              <span className="text-[#5e5e62]">선수 및 메뉴 준비중</span>
              <Link className="text-[#5e5e62] hover:text-[#1E90FF]" href="/">포트폴리오로</Link>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
          <header className="mb-16">
            <span className="text-secondary label-md uppercase tracking-widest text-xs font-semibold mb-4 block">뉴스룸</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1]" style={{ letterSpacing: '-0.02em', color: 'black' }}>
                  모터스포츠의 <span className="text-primary">정점</span>을 향한 분석.
              </h1>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
            {/* 메인 기사 (가장 최신 글) */}
            {mainPost ? (
              <Link href={`/f1/${mainPost.slug}`} className="md:col-span-8 group cursor-pointer transition-transform hover:-translate-y-1 block">
                <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-6 relative">
                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="transition-transform duration-700 group-hover:scale-105" alt="커버" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbXh0Hu1Aj4Dwnk3dq9lC4j_a8J7Mq66XarDPUiyrzu8taMzQaDvSL6h48pttaqudSFOBF6PDWweGBeKJFeFeL6Ccj1GsIla-LT1Xeao0CUhKBmkI4uCkApNsnnyEzXfeK42xnRN6nCE5i5oBqMdi2jfdD8u3QMaZZsW_5KecZR5KYUTG6UgIY-VLN4hTBq902GIBAweOwGgmGQy5o_pBGrkIK9gzm6nbaD9YcIfCeZmU42U1Ib644m067U94IyYePG1gf3To0DtlS" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <span className="bg-primary text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">{mainPost.category}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors text-[#1a1b1f]">{mainPost.title}</h2>
                <p className="text-secondary text-lg leading-relaxed mb-6 max-w-2xl">{mainPost.description}</p>
              </Link>
            ) : (
               <div className="md:col-span-8"><p className="text-secondary text-lg">아직 작성된 에디토리얼 글이 없습니다.</p></div>
            )}

            {/* 사이드바 기사들 (2, 3번째 글) */}
            <div className="md:col-span-4 space-y-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-4 text-black">다른 글 보기</h3>
              {subPosts.map(post => (
                <Link href={`/f1/${post.slug}`} key={post.slug} className="group cursor-pointer transition-transform hover:-translate-y-1 block">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">{post.category}</span>
                  <h4 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors mb-2 text-black">{post.title}</h4>
                  <p className="text-outline text-sm text-gray-500">{post.readTime} 소요 • {post.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
