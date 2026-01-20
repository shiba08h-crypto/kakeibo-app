"use client";

import { useMemo } from "react";
import styles from "./CalendarView.module.css";

type Entry = {
  id: string;
  date: string;
  type: "income" | "expense";
  category: string;
  amount: number;
};

type CalendarViewProps = {
  entries: Entry[];
  currentMonth: string; // YYYY-MM
  onMonthChange: (month: string) => void;
  onDateSelect: (date: string) => void;
};

export default function CalendarView({
  entries,
  currentMonth,
  onMonthChange,
  onDateSelect,
}: CalendarViewProps) {
  const calendarData = useMemo(() => {
    const [year, month] = currentMonth.split("-").map(Number);
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay(); // 0 = 日曜日

    // 日付ごとの金額を集計
    const dailyAmounts: Record<string, { income: number; expense: number }> =
      {};

    entries
      .filter((e) => e.date.startsWith(currentMonth))
      .forEach((e) => {
        if (!dailyAmounts[e.date]) {
          dailyAmounts[e.date] = { income: 0, expense: 0 };
        }
        if (e.type === "income") {
          dailyAmounts[e.date].income += e.amount;
        } else {
          dailyAmounts[e.date].expense += e.amount;
        }
      });

    // カレンダーの日付配列を作成
    const days: Array<{
      date: number | null;
      fullDate: string | null;
      income: number;
      expense: number;
    }> = [];

    // 月の最初の日までの空白
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ date: null, fullDate: null, income: 0, expense: 0 });
    }

    // 月の日付
    for (let i = 1; i <= daysInMonth; i++) {
      const fullDate = `${currentMonth}-${String(i).padStart(2, "0")}`;
      const amounts = dailyAmounts[fullDate] || { income: 0, expense: 0 };
      days.push({
        date: i,
        fullDate,
        income: amounts.income,
        expense: amounts.expense,
      });
    }

    return { days, year, month };
  }, [entries, currentMonth]);

  const changeMonth = (delta: number) => {
    const [year, month] = currentMonth.split("-").map(Number);
    const newDate = new Date(year, month - 1 + delta, 1);
    const newMonth = `${newDate.getFullYear()}-${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}`;
    onMonthChange(newMonth);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles.navButton}
          onClick={() => changeMonth(-1)}
          aria-label="前月"
        >
          ◀
        </button>
        <div className={styles.monthLabel}>
          {calendarData.year}年 {calendarData.month}月
        </div>
        <button
          className={styles.navButton}
          onClick={() => changeMonth(1)}
          aria-label="翌月"
        >
          ▶
        </button>
      </div>

      <div className={styles.weekdays}>
        <div className={styles.weekday}>日</div>
        <div className={styles.weekday}>月</div>
        <div className={styles.weekday}>火</div>
        <div className={styles.weekday}>水</div>
        <div className={styles.weekday}>木</div>
        <div className={styles.weekday}>金</div>
        <div className={styles.weekday}>土</div>
      </div>

      <div className={styles.days}>
        {calendarData.days.map((day, index) => (
          <div
            key={index}
            className={`${styles.day} ${!day.date ? styles.dayEmpty : ""} ${
              day.income > 0 || day.expense > 0 ? styles.dayHasData : ""
            }`}
            onClick={() => day.fullDate && onDateSelect(day.fullDate)}
          >
            {day.date && (
              <>
                <div className={styles.dayNumber}>{day.date}</div>
                {day.expense > 0 && (
                  <div className={styles.dayExpense}>
                    ¥{day.expense.toLocaleString()}
                  </div>
                )}
                {day.income > 0 && (
                  <div className={styles.dayIncome}>
                    ¥{day.income.toLocaleString()}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
