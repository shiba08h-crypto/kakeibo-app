"use client";

import styles from "./CategorySelector.module.css";

type Category = {
  value: string;
  label: string;
  emoji: string;
};

const CATEGORIES: Category[] = [
  { value: "food", label: "食費", emoji: "🍽️" },
  { value: "daily", label: "日用品", emoji: "🧴" },
  { value: "transport", label: "交通", emoji: "🚃" },
  { value: "housing", label: "住居", emoji: "🏠" },
  { value: "utility", label: "光熱費", emoji: "💡" },
  { value: "communication", label: "通信", emoji: "📱" },
  { value: "entertainment", label: "娯楽", emoji: "🎮" },
  { value: "medical", label: "医療", emoji: "🏥" },
  { value: "education", label: "教育", emoji: "📚" },
  { value: "other", label: "その他", emoji: "📦" },
];

type CategorySelectorProps = {
  selected: string;
  onSelect: (category: string) => void;
  type: "income" | "expense";
  onTypeChange: (type: "income" | "expense") => void;
};

export default function CategorySelector({
  selected,
  onSelect,
  type,
  onTypeChange,
}: CategorySelectorProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={`${styles.typeButton} ${
            type === "expense" ? styles.typeButtonActive : ""
          } ${styles.typeExpense}`}
          onClick={() => onTypeChange("expense")}
        >
          支出
        </button>
        <button
          className={`${styles.typeButton} ${
            type === "income" ? styles.typeButtonActive : ""
          } ${styles.typeIncome}`}
          onClick={() => onTypeChange("income")}
        >
          収入
        </button>
      </div>

      <div className={styles.categories}>
        {CATEGORIES.map((category) => (
          <button
            key={category.value}
            className={`${styles.categoryButton} ${
              selected === category.value ? styles.categoryButtonActive : ""
            }`}
            onClick={() => onSelect(category.value)}
          >
            <span className={styles.emoji}>{category.emoji}</span>
            <span className={styles.label}>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
