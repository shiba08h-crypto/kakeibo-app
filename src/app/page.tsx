export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>家計簿アプリ</h1>
      <p>ここから開発を進めます。</p>
      <a
        href="https://kakeibo-app-kgbp.vercel.app/login"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontWeight: "500",
          transition: "background-color 0.2s"
        }}
      >
        ログインへ
      </a>
    </main>
  );
}
