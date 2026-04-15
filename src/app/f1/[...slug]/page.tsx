import { getAllF1PostSlugs, getF1PostData } from '@/lib/f1-posts';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

// Next.js MetaData Generator
export async function generateMetadata(context: any) {
  try {
    const params = await context.params;
    const postData = await getF1PostData(params.slug); // 여러 단계의 폴더 경로가 들어와도 처리됨!
    return {
      title: `${postData.title} | F1 에디토리얼`,
      description: postData.description,
    };
  } catch (e) {
    return { title: 'Post Not Found' };
  }
}

// Next.js URL Path Generator
export async function generateStaticParams() {
  const paths = getAllF1PostSlugs();
  return paths.map((slugArray) => ({ slug: slugArray }));
}

// 상세 페이지 화면 렌더링
// 폴더명 → 돌아갈 주소 및 버튼 이름 매핑 테이블
const backLinkMap: Record<string, { href: string; label: string }> = {
  driver:  { href: '/f1/drivers',   label: 'F1 그리드 드라이버로 돌아가기' },
  team:    { href: '/f1/teams',     label: '팀 목록으로 돌아가기' },
  circuit: { href: '/f1/circuits',  label: '서킷 목록으로 돌아가기' },
};

export default async function F1Post(context: any) {
  try {
    const params = await context.params;
    const postData = await getF1PostData(params.slug);

    // slug 첫 번째 값(폴더명)을 기준으로 뒤로가기 버튼 결정
    const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
    const parentFolder = slugArray.length > 1 ? slugArray[0] : null;
    const backLink = (parentFolder && backLinkMap[parentFolder]) 
      ? backLinkMap[parentFolder] 
      : { href: '/f1', label: 'F1 메뉴로 돌아가기' };
    
    return (
      <article className="section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
        <Link 
          href={backLink.href} 
          style={{ 
            color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', 
            marginBottom: '4rem', transition: 'color 0.2s ease', textDecoration: 'none'
          }}
        >
          <span style={{ marginRight: '0.5rem' }}>←</span> {backLink.label}
        </Link>

        <header style={{ marginBottom: '3rem' }}>
          <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            {postData.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {postData.category !== '정보' && (
              <time style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                {format(parseISO(postData.date), 'LLLL d, yyyy')}
              </time>
            )}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', backgroundColor: '#e0dfe3', border: '1px solid var(--border)', borderRadius: '99px', color: '#1a1b1f', fontWeight: 600 }}>
                {postData.category}
              </span>
              {postData.tags?.map((tag: string) => (
                <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '99px', color: 'var(--text-secondary)' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>
        <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
