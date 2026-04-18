"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "홈", path: "/" },
  { name: "블로그", path: "/blog" },
  { name: "프로젝트", path: "/projects" },
  { name: "F1 Overtake Lab", path: "/f1" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return pathname.startsWith("/f1") ? null : (
    <header className={`nav-header ${scrolled ? "glass" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/" style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.05em" }}>
          LS<span className="text-gradient">.</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`nav-link ${pathname === item.path ? "active" : ""}`}
                  style={{ position: "relative" }}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "var(--accent)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
