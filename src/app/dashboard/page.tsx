"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import NumericKeypad from "@/components/NumericKeypad";
import CategorySelector from "@/components/CategorySelector";
import ExpensePieChart from "@/components/ExpensePieChart";
import CalendarView from "@/components/CalendarView";
import styles from "./dashboard.module.css";

const today = new Date().toISOString().slice(0, 10);
const currentMonth = today.slice(0, 7);

type Entry = {
  id: string;
  user_id: string;
  date: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  memo: string | null;
  created_at: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [entries, setEntries] = useState<Entry[]>([]);
  const [date, setDate] = useState(today);
  const [type, setType] = useState<"income" | "expense">("expense");
  const [category, setCategory] = useState<string>("food");
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState(currentMonth);
  const [errMsg, setErrMsg] = useState("");

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
      category,
      amount: value,
      memo: null,
    });

    if (error) {
      setErrMsg(`保存失敗: ${error.message}`);
      return;
    }

    setAmount("");

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

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const handleDateSelect = (selectedDate: string) => {
    setDate(selectedDate);
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>家計簿</h1>
        <button className={styles.logoutButton} onClick={logout}>
          ログアウト
        </button>
      </div>

      {errMsg && <div className={styles.error}>{errMsg}</div>}

      <div className={styles.grid}>
        {/* 左パネル: 入力エリア */}
        <div className={styles.leftPanel}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>日付</h2>
            <input
              className={styles.dateInput}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>種別・カテゴリ</h2>
            <CategorySelector
              selected={category}
              onSelect={setCategory}
              type={type}
              onTypeChange={setType}
            />
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>金額入力</h2>
            <NumericKeypad
              value={amount}
              onChange={setAmount}
              onSubmit={addEntry}
            />
          </div>
        </div>

        {/* 中央パネル: グラフ */}
        <div className={styles.centerPanel}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>支出分析</h2>
            <ExpensePieChart entries={entries} currentMonth={month} />
          </div>
        </div>

        {/* 右パネル: カレンダー */}
        <div className={styles.rightPanel}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>カレンダー</h2>
            <CalendarView
              entries={entries}
              currentMonth={month}
              onMonthChange={setMonth}
              onDateSelect={handleDateSelect}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
