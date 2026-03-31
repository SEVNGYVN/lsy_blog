import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | LS. Portfolio',
  description: 'A showcase of my recent work and side projects.',
};

export default function Projects() {
  return (
    <div className="section" style={{ textAlign: 'center', paddingTop: '6rem' }}>
      <h1 className="title">My <span className="text-gradient">Projects</span></h1>
      <p className="subtitle" style={{ marginBottom: '4rem' }}>Check out some of the things I've built recently.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass" style={{ overflow: "hidden", transition: "transform 0.3s ease", textAlign: 'left' }}>
            <div style={{ height: "200px", backgroundColor: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "var(--text-secondary)" }}>Project Preview Cover {i}</span>
            </div>
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--accent)" }}>Next.js</span>
                <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--text-secondary)" }}>Vanilla CSS</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Portfollio Pro {i}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: '1.5rem', lineHeight: 1.6 }}>An interactive and performant web application featuring advanced animations, server-side rendering, and a sleek dark theme.</p>
              <a href="#" style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'inline-block', borderBottom: '1px solid var(--accent)' }}>View Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
