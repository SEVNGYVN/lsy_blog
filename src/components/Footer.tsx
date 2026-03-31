export default function Footer() {
  return (
    <footer style={{
      padding: "4rem 2rem",
      textAlign: "center",
      borderTop: "1px solid var(--border)",
      marginTop: "auto",
      color: "var(--text-secondary)"
    }}>
      <p style={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} LS Portfolio & Blog. Built with Next.js & Vanilla CSS.
      </p>
    </footer>
  );
}
