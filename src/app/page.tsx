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
              Welcome to my portfolio
            </span>
          </motion.div>
          <motion.h1 variants={item} className="title">
            Hi, I'm <span className="text-gradient">LS</span>.<br />
            Building amazing experiences.
          </motion.h1>
          <motion.p variants={item} className="subtitle" style={{ maxWidth: "600px", marginBottom: "3rem" }}>
            I am a passionate software engineer focused on crafting clean, high-performance web applications with a keen eye for premium design.
          </motion.p>
          <motion.div variants={item} style={{ display: "flex", gap: "1rem" }}>
            <Link href="/projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} style={{ marginLeft: "0.5rem" }} />
            </Link>
            <Link href="/blog" className="btn btn-outline">
              Read my Blog
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-secondary)", borderRadius: "32px" }}>
        <h2 className="title" style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "4rem" }}>My Expertise</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {[
            { title: "Frontend Engineering", icon: <Code2 size={40} color="var(--accent)" />, desc: "Expert in React, Next.js, and modern CSS to build pixel-perfect user interfaces." },
            { title: "Backend Systems", icon: <Terminal size={40} color="var(--accent)" />, desc: "Building scalable APIs and robust server-side architectures using Node.js and more." },
            { title: "Architecture", icon: <Layers size={40} color="var(--accent)" />, desc: "Designing maintainable cloud infrastructures and optimizing performance." },
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
            <h2 className="title" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Selected Work</h2>
            <p className="subtitle">Some of my recent projects</p>
          </div>
          <Link href="/projects" style={{ color: "var(--accent)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }}>
            See All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {[1, 2].map((i) => (
            <div key={i} className="glass" style={{ overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ height: "200px", backgroundColor: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--text-secondary)" }}>Project Preview Image</span>
              </div>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--accent)" }}>React</span>
                  <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--bg-primary)", borderRadius: "99px", color: "var(--accent)" }}>Next.js</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Awesome Project {i}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>A brief description of what this project does and the value it brings.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
