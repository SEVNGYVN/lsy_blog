"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return pathname.startsWith("/f1") ? null : (
    <footer style={{
      padding: "4rem 2rem",
      textAlign: "center",
      borderTop: "1px solid var(--border)",
      marginTop: "auto",
      color: "var(--text-secondary)"
    }}>
      <p style={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} LS 포트폴리오 및 블로그. Next.js와 Vanilla CSS로 제작되었습니다.
      </p>
    </footer>
  );
}
