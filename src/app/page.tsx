"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Layers } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div style={{ paddingBottom: "4rem" }}>
      {/* Hero Section */}
      <section className="section" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} style={{ marginBottom: "1.5rem" }}>
            <span style={{ display: "inline-block", padding: "0.25rem 1rem", borderRadius: "999px", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--accent)", fontWeight: 500, fontSize: "0.9rem" }}>
              제 포트폴리오에 오신 것을 환영합니다
            </span>
          </motion.div>
          <motion.h1 variants={item} className="title">
            안녕하세요, <span className="text-gradient">이승윤</span>입니다.<br />
            배움을 통하여 성장합니다.
          </motion.h1>
          <motion.p variants={item} className="subtitle" style={{ maxWidth: "600px", marginBottom: "3rem" }}>
            사용자 중심의 프리미엄 디자인과 깔끔하고 성능이 뛰어난 웹 애플리케이션을 제작하는 데 열정을 다하는 소프트웨어 엔지니어입니다.
          </motion.p>
          <motion.div variants={item} style={{ display: "flex", gap: "1rem" }}>
            <Link href="/projects" className="btn btn-primary">
              프로젝트 보기 <ArrowRight size={18} style={{ marginLeft: "0.5rem" }} />
            </Link>
            <Link href="/blog" className="btn btn-outline">
              블로그 읽기
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-secondary)", borderRadius: "32px" }}>
        <h2 className="title" style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "4rem" }}>저의 전문 분야</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {[
            { title: "프론트엔드 엔지니어링", icon: <Code2 size={40} color="var(--accent)" />, desc: "React, Next.js 및 최신 CSS를 활용하여 픽셀 퍼펙트한 사용자 인터페이스를 구축합니다." },
            { title: "백엔드 시스템", icon: <Terminal size={40} color="var(--accent)" />, desc: "Node.js 등을 사용하여 확장 가능한 API와 견고한 서버 사이드 아키텍처를 구축합니다." },
            { title: "아키텍처", icon: <Layers size={40} color="var(--accent)" />, desc: "유지보수 가능한 클라우드 인프라를 설계하고 성능을 최적화합니다." },
          ].map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass" style={{ padding: "2.5rem" }}
            >
              <div style={{ marginBottom: "1.5rem", display: "inline-block", padding: "1rem", backgroundColor: "var(--bg-primary)", borderRadius: "16px" }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 700 }}>{skill.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Activity/Projects Preview - can expand later */}
      <section className="section" style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <h2 className="title" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>주요 작업물</h2>
            <p className="subtitle">최근 진행한 프로젝트들</p>
          </div>
          <Link href="/projects" style={{ color: "var(--accent)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }}>
            전체 보기 <ArrowRight size={16} />
          </Link>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {[1, 2].map((i) => (
            <div key={i} className="glass" style={{ overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ height: "200px", backgroundColor: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--text-secondary)" }}>프로젝트 미리보기 이미지</span>
              </div>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--accent)" }}>React</span>
                  <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--accent)" }}>Next.js</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>멋진 프로젝트 {i}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>이 프로젝트가 하는 일과 제공하는 가치에 대한 간단한 설명입니다.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
