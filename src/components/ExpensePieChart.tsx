"use client";

import { useMemo } from "react";
import styles from "./ExpensePieChart.module.css";

type Entry = {
  id: string;
  date: string;
  type: "income" | "expense";
  category: string;
  amount: number;
};

type ExpensePieChartProps = {
  entries: Entry[];
  currentMonth: string; // YYYY-MM
};

const CATEGORY_LABELS: Record<string, string> = {
  food: "食費",
  daily: "日用品",
  transport: "交通",
  housing: "住居",
  utility: "光熱費",
  communication: "通信",
  entertainment: "娯楽",
  medical: "医療",
  education: "教育",
  other: "その他",
};

const CATEGORY_COLORS: Record<string, string> = {
  food: "#FF6B6B",
  daily: "#FF8C42",
  transport: "#FFC93C",
  housing: "#4ECDC4",
  utility: "#45B7D1",
  communication: "#96CEB4",
  entertainment: "#DDA15E",
  medical: "#BC6C25",
  education: "#8E44AD",
  other: "#95A5A6",
};

export default function ExpensePieChart({
  entries,
  currentMonth,
}: ExpensePieChartProps) {
  const stats = useMemo(() => {
    // 当月のデータのみフィルタ
    const monthEntries = entries.filter((e) => e.date.startsWith(currentMonth));

    const income = monthEntries
      .filter((e) => e.type === "income")
      .reduce((sum, e) => sum + e.amount, 0);

    const expense = monthEntries
      .filter((e) => e.type === "expense")
      .reduce((sum, e) => sum + e.amount, 0);

    // カテゴリ別支出
    const categoryExpenses: Record<string, number> = {};
    monthEntries
      .filter((e) => e.type === "expense")
      .forEach((e) => {
        categoryExpenses[e.category] =
          (categoryExpenses[e.category] || 0) + e.amount;
      });

    // 円グラフ用のデータ
    const categoryData = Object.entries(categoryExpenses)
      .map(([category, amount]) => ({
        category,
        label: CATEGORY_LABELS[category] || category,
        amount,
        color: CATEGORY_COLORS[category] || "#999",
        percentage: (amount / expense) * 100,
      }))
      .sort((a, b) => b.amount - a.amount);

    return {
      income,
      expense,
      balance: income - expense,
      categoryData,
    };
  }, [entries, currentMonth]);

  // 円グラフのSVGパス生成
  const pieSlices = useMemo(() => {
    if (stats.categoryData.length === 0) return [];

    const total = stats.expense;
    let currentAngle = -90; // 12時の位置から開始

    return stats.categoryData.map((data) => {
      const angle = (data.amount / total) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;

      // SVGパスの計算
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const x1 = 100 + 80 * Math.cos(startRad);
      const y1 = 100 + 80 * Math.sin(startRad);
      const x2 = 100 + 80 * Math.cos(endRad);
      const y2 = 100 + 80 * Math.sin(endRad);

      const largeArc = angle > 180 ? 1 : 0;

      const path = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;

      currentAngle = endAngle;

      return {
        path,
        color: data.color,
        label: data.label,
        amount: data.amount,
        percentage: data.percentage,
      };
    });
  }, [stats.categoryData, stats.expense]);

  if (entries.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>データがありません</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>収入合計</div>
          <div className={`${styles.summaryValue} ${styles.income}`}>
            ¥{stats.income.toLocaleString()}
          </div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>支出合計</div>
          <div className={`${styles.summaryValue} ${styles.expense}`}>
            ¥{stats.expense.toLocaleString()}
          </div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>収支バランス</div>
          <div
            className={`${styles.summaryValue} ${
              stats.balance >= 0 ? styles.income : styles.expense
            }`}
          >
            ¥{stats.balance.toLocaleString()}
          </div>
        </div>
      </div>

      {stats.categoryData.length > 0 && (
        <>
          <div className={styles.chartWrapper}>
            <svg
              viewBox="0 0 200 200"
              className={styles.chart}
              aria-label="支出の円グラフ"
            >
              {pieSlices.map((slice, index) => (
                <path
                  key={index}
                  d={slice.path}
                  fill={slice.color}
                  className={styles.slice}
                />
              ))}
              {/* 中央の白い円 */}
              <circle cx="100" cy="100" r="45" fill="white" />
              <text
                x="100"
                y="95"
                textAnchor="middle"
                className={styles.centerLabel}
              >
                支出合計
              </text>
              <text
                x="100"
                y="115"
                textAnchor="middle"
                className={styles.centerValue}
              >
                ¥{stats.expense.toLocaleString()}
              </text>
            </svg>
          </div>

          <div className={styles.legend}>
            {stats.categoryData.map((data, index) => (
              <div key={index} className={styles.legendItem}>
                <div
                  className={styles.legendColor}
                  style={{ backgroundColor: data.color }}
                />
                <div className={styles.legendLabel}>{data.label}</div>
                <div className={styles.legendAmount}>
                  ¥{data.amount.toLocaleString()}
                </div>
                <div className={styles.legendPercentage}>
                  {data.percentage.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
