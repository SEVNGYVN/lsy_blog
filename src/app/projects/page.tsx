import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | LS. Portfolio',
  description: 'A showcase of my recent work and side projects.',
};

export default function Projects() {
  return (
    <div className="section" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <h1 className="title">나의 <span className="text-gradient">프로젝트</span></h1>
      <p className="subtitle" style={{ marginBottom: '4rem' }}>최근 작업한 프로젝트들을 확인해 보세요.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass" style={{ overflow: "hidden", transition: "transform 0.3s ease", textAlign: 'left' }}>
            <div style={{ height: "200px", backgroundColor: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "var(--text-secondary)" }}>프로젝트 미리보기 커버 {i}</span>
            </div>
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--accent)" }}>Next.js</span>
                <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--text-secondary)" }}>Vanilla CSS</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>포트폴리오 프로 {i}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: '1.5rem', lineHeight: 1.6 }}>고급 애니메이션, 서버 사이드 렌더링, 세련된 다크 테마를 갖춘 인터랙티브하고 성능이 뛰어난 웹 애플리케이션입니다.</p>
              <a href="#" style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'inline-block', borderBottom: '1px solid var(--accent)' }}>저장소 보기</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
