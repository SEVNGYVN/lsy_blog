
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { format, parseISO } from 'date-fns';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="section">
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="title">생각 & <span className="text-gradient">글쓰기</span></h1>
        <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          제 블로그에 오신 것을 환영합니다. 여기에서는 최신 웹 개발에 대한 튜토리얼, 이야기 및 생각을 공유합니다.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {allPostsData.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>게시물이 없습니다.</p>
        ) : (
          allPostsData.map(({ id, date, title, description, tags }) => (
            <Link href={`/blog/${id}`} key={id}>
              <article className="glass" style={{ padding: '2rem', transition: 'all 0.3s ease', cursor: 'pointer' }} 
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateX(10px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  {tags?.map((tag: string) => (
                    <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '99px', color: 'var(--accent)', fontWeight: 600 }}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h2>
                <time style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>
                  {format(parseISO(date), 'LLLL d, yyyy')}
                </time>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  더 읽어보기 <span>→</span>
                </div>
              </article>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
