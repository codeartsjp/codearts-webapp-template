import { describe, expect, test, beforeEach } from "bun:test";
import { useGameStore } from "./game-store";

describe("game-store", () => {
  beforeEach(() => {
    useGameStore.getState().reset();
  });

  describe("初期状態", () => {
    test("初期状態が正しく設定されている", () => {
      const state = useGameStore.getState();
      expect(state.gameState).toBe("idle");
      expect(state.score).toBe(0);
      expect(state.isLoading).toBe(false);
      expect(state.error).toBeNull();
    });
  });

  describe("pauseGame", () => {
    test("playing状態からpaused状態に遷移する", () => {
      useGameStore.setState({ gameState: "playing" });
      useGameStore.getState().pauseGame();
      expect(useGameStore.getState().gameState).toBe("paused");
    });

    test("playing以外の状態では何もしない", () => {
      useGameStore.setState({ gameState: "idle" });
      useGameStore.getState().pauseGame();
      expect(useGameStore.getState().gameState).toBe("idle");
    });
  });

  describe("resumeGame", () => {
    test("paused状態からplaying状態に遷移する", () => {
      useGameStore.setState({ gameState: "paused" });
      useGameStore.getState().resumeGame();
      expect(useGameStore.getState().gameState).toBe("playing");
    });

    test("paused以外の状態では何もしない", () => {
      useGameStore.setState({ gameState: "idle" });
      useGameStore.getState().resumeGame();
      expect(useGameStore.getState().gameState).toBe("idle");
    });
  });

  describe("endGame", () => {
    test("finished状態に遷移する", () => {
      useGameStore.setState({ gameState: "playing" });
      useGameStore.getState().endGame();
      expect(useGameStore.getState().gameState).toBe("finished");
    });
  });

  describe("setScore", () => {
    test("スコアを設定できる", () => {
      useGameStore.getState().setScore(100);
      expect(useGameStore.getState().score).toBe(100);
    });

    test("負の値は0にクランプされる", () => {
      useGameStore.getState().setScore(-50);
      expect(useGameStore.getState().score).toBe(0);
    });
  });

  describe("addScore", () => {
    test("スコアを加算できる", () => {
      useGameStore.setState({ score: 50 });
      useGameStore.getState().addScore(30);
      expect(useGameStore.getState().score).toBe(80);
    });

    test("負の値を加算できる", () => {
      useGameStore.setState({ score: 100 });
      useGameStore.getState().addScore(-30);
      expect(useGameStore.getState().score).toBe(70);
    });

    test("スコアが負になる場合は0にクランプされる", () => {
      useGameStore.setState({ score: 20 });
      useGameStore.getState().addScore(-50);
      expect(useGameStore.getState().score).toBe(0);
    });
  });

  describe("reset", () => {
    test("状態を初期化する", () => {
      useGameStore.setState({
        gameState: "playing",
        score: 500,
        isLoading: true,
        error: "some error",
      });
      useGameStore.getState().reset();

      const state = useGameStore.getState();
      expect(state.gameState).toBe("idle");
      expect(state.score).toBe(0);
      expect(state.isLoading).toBe(false);
      expect(state.error).toBeNull();
    });
  });
});
