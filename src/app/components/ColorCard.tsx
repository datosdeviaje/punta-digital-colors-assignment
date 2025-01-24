import React, { useState } from "react";
import { IColor } from "../Data";
import styles from "./ColorCard.module.css";

export default function ColorCard({ colorData }: { colorData: IColor }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <button
      onClick={() => setShowDetails(!showDetails)}
      className={styles.card}
      style={{
        backgroundColor: colorData.Hexadecimal,
      }}
    >
      {showDetails && (
        <div className={styles.colorDetails}>
          <div>{colorData.Color}</div>
          <div>{colorData.Hexadecimal}</div>
          <div>{"(" + colorData.RGB.join(", ") + ")"}</div>
        </div>
      )}
    </button>
  );
}
