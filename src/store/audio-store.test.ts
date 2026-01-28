import { describe, expect, test, beforeEach, mock } from "bun:test";

// 外部audio関数をモック（ライブラリ責任範囲は検証しない）
mock.module("~/utils/audio", () => ({
  setVolume: () => {},
  toggleAudio: () => {},
}));

// モック後にimport
const { useAudioStore } = await import("./audio-store");

describe("audio-store", () => {
  beforeEach(() => {
    localStorage.clear();
    // ストアを初期状態にリセット
    useAudioStore.setState({ volume: 100, isMuted: false });
  });

  describe("setVolume", () => {
    test("音量を設定できる", () => {
      useAudioStore.getState().setVolume(50);
      expect(useAudioStore.getState().volume).toBe(50);
    });

    test("音量は0未満にならない", () => {
      useAudioStore.getState().setVolume(-10);
      expect(useAudioStore.getState().volume).toBe(0);
    });

    test("音量は100を超えない", () => {
      useAudioStore.getState().setVolume(150);
      expect(useAudioStore.getState().volume).toBe(100);
    });

    test("境界値: 0は有効", () => {
      useAudioStore.getState().setVolume(0);
      expect(useAudioStore.getState().volume).toBe(0);
    });

    test("境界値: 100は有効", () => {
      useAudioStore.getState().setVolume(100);
      expect(useAudioStore.getState().volume).toBe(100);
    });

    test("音量がlocalStorageに保存される", () => {
      useAudioStore.getState().setVolume(75);
      expect(localStorage.getItem("game-volume")).toBe("75");
    });
  });

  describe("setMuted", () => {
    test("ミュート状態を設定できる", () => {
      useAudioStore.getState().setMuted(true);
      expect(useAudioStore.getState().isMuted).toBe(true);
    });

    test("ミュート解除できる", () => {
      useAudioStore.setState({ isMuted: true });
      useAudioStore.getState().setMuted(false);
      expect(useAudioStore.getState().isMuted).toBe(false);
    });

    test("ミュート状態がlocalStorageに保存される", () => {
      useAudioStore.getState().setMuted(true);
      expect(localStorage.getItem("game-muted")).toBe("true");
    });
  });

  describe("toggleMute", () => {
    test("ミュートをトグルできる（false→true）", () => {
      useAudioStore.setState({ isMuted: false });
      useAudioStore.getState().toggleMute();
      expect(useAudioStore.getState().isMuted).toBe(true);
    });

    test("ミュートをトグルできる（true→false）", () => {
      useAudioStore.setState({ isMuted: true });
      useAudioStore.getState().toggleMute();
      expect(useAudioStore.getState().isMuted).toBe(false);
    });
  });
});
