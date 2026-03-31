import { getAllPostIds, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: `${postData.title} | LS. Blog`,
      description: postData.description,
    };
  } catch (e) {
    return { title: 'Post Not Found' };
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  
  try {
    const postData = await getPostData(slug);
    
    return (
      <article className="section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
        <Link 
          href="/blog" 
          style={{ 
            color: 'var(--text-secondary)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            marginBottom: '4rem', 
            transition: 'color 0.2s ease',
            textDecoration: 'none'
          }}
        >
          <span style={{ marginRight: '0.5rem' }}>←</span> Back to all posts
        </Link>
        <header style={{ marginBottom: '3rem' }}>
          <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            {postData.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <time style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              {format(parseISO(postData.date), 'LLLL d, yyyy')}
            </time>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
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
