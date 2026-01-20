import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>
            シンプルで美しい
            <br />
            家計簿アプリ
          </h1>
          <p>
            毎日の収支を簡単に記録。直感的なインターフェースで、あなたのお金の流れを可視化します。賢い財務管理をはじめましょう。
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>わかりやすい分析</h3>
            <p>グラフとチャートで支出を可視化</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h3>簡単入力</h3>
            <p>すばやく収支を記録できる</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3>目標管理</h3>
            <p>貯蓄目標を設定して達成</p>
          </div>
        </div>

        <div className={styles.ctas}>
          <Link href="/dashboard" className={styles.primary}>
            ダッシュボードへ
          </Link>
          <Link href="/login" className={styles.secondary}>
            ログイン
          </Link>
        </div>
      </main>
    </div>
  );
}
