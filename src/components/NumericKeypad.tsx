"use client";

import styles from "./NumericKeypad.module.css";

type NumericKeypadProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export default function NumericKeypad({
  value,
  onChange,
  onSubmit,
}: NumericKeypadProps) {
  const handleKeyPress = (key: string) => {
    if (key === "C") {
      onChange("");
      return;
    }
    if (key === "⌫") {
      onChange(value.slice(0, -1));
      return;
    }
    onChange(value + key);
  };

  const keys = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["00", "0", "⌫"],
  ];

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.amount}>
          {value || "0"}
          <span className={styles.currency}>円</span>
        </div>
      </div>

      <div className={styles.keypad}>
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((key) => (
              <button
                key={key}
                className={`${styles.key} ${
                  key === "⌫" ? styles.keyDelete : ""
                }`}
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button className={styles.submitButton} onClick={onSubmit}>
        入力
      </button>
    </div>
  );
}
