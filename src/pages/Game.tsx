import type { JSX } from "react";
import { GameCanvas } from "~/components/canvas/GameCanvas";
import { LoadingScreen } from "~/components/common/LoadingScreen";
import { useGameStore } from "~/store/game-store";
import { gameButton, scoreDisplay } from "~/styles";
import { playClickSound, resumeAudioContext } from "~/utils/audio";
import * as styles from "./Game.css";

export function Game(): JSX.Element {
  const { gameState, score, isLoading, startGame, reset } = useGameStore();

  const handleStart = async () => {
    await resumeAudioContext();
    playClickSound();
    await startGame();
  };

  const handleCanvasClick = () => {
    if (gameState === "playing") {
      playClickSound();
    }
  };

  const handleReset = () => {
    playClickSound();
    reset();
  };

  if (isLoading || gameState === "loading") {
    return <LoadingScreen message="ゲームを準備中..." />;
  }

  if (gameState === "idle") {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Canvas Game Template</h1>
        <p className={styles.subtitle}>タップしてゲームを開始</p>
        <button
          type="button"
          className={gameButton({ size: "lg" })}
          onClick={handleStart}
        >
          スタート
        </button>
      </div>
    );
  }

  if (gameState === "finished") {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>ゲーム終了</h1>
        <div className={styles.resultScore}>{score.toLocaleString()}</div>
        <button
          type="button"
          className={gameButton({ size: "lg" })}
          onClick={handleReset}
        >
          もう一度プレイ
        </button>
      </div>
    );
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.scoreWrapper}>
        <div className={scoreDisplay()}>
          <span className={styles.scoreLabel}>SCORE</span>
          <span className={styles.scoreValue}>{score.toLocaleString()}</span>
        </div>
      </div>

      <GameCanvas onClick={handleCanvasClick} />
    </div>
  );
}
