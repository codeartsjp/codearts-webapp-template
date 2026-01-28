import { create } from "zustand";
import type { GameState } from "~/types";

const DISPLAY_DELAY = 600;

interface GameStoreState {
  gameState: GameState;
  score: number;
  isLoading: boolean;
  error: string | null;

  startGame: () => Promise<void>;
  pauseGame: () => void;
  resumeGame: () => void;
  endGame: () => void;
  setScore: (score: number) => void;
  addScore: (points: number) => void;
  reset: () => void;
}

export const useGameStore = create<GameStoreState>((set, get) => ({
  gameState: "idle",
  score: 0,
  isLoading: false,
  error: null,

  startGame: async () => {
    const state = get();

    if (state.isLoading || state.gameState === "playing") {
      return;
    }

    try {
      // Phase 1: Loading
      set({ isLoading: true, error: null });

      // Simulate async initialization (replace with actual game setup)
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Phase 2: Display delay
      set({ gameState: "loading" });
      await new Promise((resolve) => setTimeout(resolve, DISPLAY_DELAY));

      // Phase 3: Ready to play
      set({
        gameState: "playing",
        isLoading: false,
        score: 0,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Failed to start game",
        gameState: "idle",
      });
    }
  },

  pauseGame: () => {
    const state = get();
    if (state.gameState === "playing") {
      set({ gameState: "paused" });
    }
  },

  resumeGame: () => {
    const state = get();
    if (state.gameState === "paused") {
      set({ gameState: "playing" });
    }
  },

  endGame: () => {
    set({ gameState: "finished" });
  },

  setScore: (score) => {
    set({ score: Math.max(0, score) });
  },

  addScore: (points) => {
    set((state) => ({
      score: Math.max(0, state.score + points),
    }));
  },

  reset: () => {
    set({
      gameState: "idle",
      score: 0,
      isLoading: false,
      error: null,
    });
  },
}));
