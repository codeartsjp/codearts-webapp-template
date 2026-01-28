import type { JSX } from "react";
import { spinnerContainer, spinnerCore, spinnerRing } from "~/styles";
import * as styles from "./LoadingScreen.css";

export interface LoadingScreenProps {
  message?: string;
  progress?: number;
}

export function LoadingScreen({
  message = "読み込み中...",
  progress,
}: LoadingScreenProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={spinnerContainer}>
          <div className={spinnerRing} />
          <div className={spinnerCore} />
        </div>

        <p className={styles.message}>{message}</p>

        {progress !== undefined && (
          <p className={styles.progress}>{Math.round(progress)}%</p>
        )}
      </div>
    </div>
  );
}
