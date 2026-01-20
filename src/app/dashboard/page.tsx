"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "./dashboard.module.css";

const today = new Date().toISOString().slice(0, 10);

type Entry = {
  id: string;
  user_id: string;
  date: string; // YYYY-MM-DD
  type: "income" | "expense";
  category: string;
  amount: number;
  memo: string | null;
  created_at: string;
};

const CATEGORY_OPTIONS = [
  { value: "food", label: "食費" },
  { value: "daily", label: "日用品" },
  { value: "transport", label: "交通" },
  { value: "housing", label: "住居" },
  { value: "utility", label: "光熱費" },
  { value: "communication", label: "通信" },
  { value: "entertainment", label: "娯楽" },
  { value: "medical", label: "医療" },
  { value: "education", label: "教育" },
  { value: "other", label: "その他" },
];

const categoryLabel = (value: string) =>
  CATEGORY_OPTIONS.find((c) => c.value === value)?.label ?? value;

export default function DashboardPage() {
  const router = useRouter();

  const [entries, setEntries] = useState<Entry[]>([]);
  const [date, setDate] = useState(today);
  const [type, setType] = useState<"income" | "expense">("expense");
  const [category, setCategory] = useState<string>("food");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // --- ログインチェック＋データ取得 ---
  useEffect(() => {
    const init = async () => {
      setErrMsg("");

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("entries")
        .select("*")
        .order("date", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        setErrMsg(`読込失敗: ${error.message}`);
        return;
      }
      if (data) setEntries(data as Entry[]);
    };

    init();
  }, [router]);

  // --- 追加 ---
  const addEntry = async () => {
    setErrMsg("");

    if (!date || !amount) {
      setErrMsg("日付と金額は必須です");
      return;
    }

    const value = Number(amount);
    if (Number.isNaN(value) || value < 0) {
      setErrMsg("金額は0以上の数値で入力してください");
      return;
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setErrMsg("ユーザー取得に失敗しました。再ログインしてください。");
      router.push("/login");
      return;
    }

    const { error } = await supabase.from("entries").insert({
      user_id: user.id,
      date,
      type,
      category, // ★追加
      amount: value,
      memo: memo.trim() ? memo.trim() : null,
    });

    if (error) {
      setErrMsg(`保存失敗: ${error.message}`);
      return;
    }

    // reset（dateとcategoryは保持。家計簿では便利）
    setAmount("");
    setMemo("");

    // 再読込
    const { data, error: selectError } = await supabase
      .from("entries")
      .select("*")
      .order("date", { ascending: false })
      .order("created_at", { ascending: false });

    if (selectError) {
      setErrMsg(`再読込失敗: ${selectError.message}`);
      return;
    }
    if (data) setEntries(data as Entry[]);
  };

  // --- ログアウト ---
  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const total = useMemo(() => {
    return entries.reduce((sum, e) => {
      return e.type === "expense" ? sum - e.amount : sum + e.amount;
    }, 0);
  }, [entries]);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>家計簿</h1>
          <div className={styles.subtle}>Supabase保存・ログイン保護済み</div>
        </div>
        <button className={styles.buttonSecondary} onClick={logout}>
          ログアウト
        </button>
      </div>

      <section className={styles.card}>
        <h2 className={styles.h2}>入力</h2>

        <div className={styles.formGrid}>
          <input
            className={styles.input}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className={styles.select}
            value={type}
            onChange={(e) => setType(e.target.value as any)}
          >
            <option value="expense">支出</option>
            <option value="income">収入</option>
          </select>

          <select
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>

          <input
            className={styles.input}
            placeholder="金額（例：1200）"
            value={amount}
            onChange={(e) => {
              // 全角数値を半角数値に変換
              const normalizedValue = e.target.value.replace(/[０-９]/g, (s) =>
                String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
              );
              setAmount(normalizedValue);
            }}
            inputMode="numeric"
            pattern="[0-9]*"
          />

          <input
            className={styles.input}
            placeholder="メモ（任意）"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />

          <button className={styles.button} onClick={addEntry}>
            追加
          </button>
        </div>

        {errMsg && <div className={styles.notice}>{errMsg}</div>}
      </section>

      <section className={styles.card}>
        <div className={styles.kpiRow}>
          <h2 className={styles.h2}>合計</h2>
          <div className={styles.kpiValue}>{total.toLocaleString()} 円</div>
        </div>
        <div className={styles.subtle}>
          収入はプラス、支出はマイナスとして集計しています
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.h2}>一覧</h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>日付</th>
                <th>種別</th>
                <th>カテゴリ</th>
                <th className={styles.amount}>金額</th>
                <th>メモ</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id}>
                  <td>{e.date}</td>
                  <td>
                    {e.type === "expense" ? (
                      <span className={styles.badgeExpense}>支出</span>
                    ) : (
                      <span className={styles.badgeIncome}>収入</span>
                    )}
                  </td>
                  <td>
                    <span className={styles.badgeCategory}>
                      {categoryLabel(e.category)}
                    </span>
                  </td>
                  <td className={styles.amount}>{e.amount.toLocaleString()} 円</td>
                  <td>{e.memo ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
