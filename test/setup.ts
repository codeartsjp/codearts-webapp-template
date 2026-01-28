import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "bun:test";

// 各テスト後にクリーンアップ
afterEach(() => {
  cleanup();
});

// window.matchMediaのモック（Mantineに必要）
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// IntersectionObserverのモック
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as unknown as typeof IntersectionObserver;

// ResizeObserverのモック
global.ResizeObserver = class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof ResizeObserver;

// Howlerのモック
class MockHowl {
  _src: string[];
  _volume: number;
  _onload?: () => void;
  _onloaderror?: () => void;

  constructor(options: {
    src: string[];
    volume?: number;
    onload?: () => void;
    onloaderror?: () => void;
  }) {
    this._src = options.src;
    this._volume = options.volume ?? 1;
    this._onload = options.onload;
    this._onloaderror = options.onloaderror;

    // 非同期でonloadを呼び出す
    setTimeout(() => {
      if (this._onload) {
        this._onload();
      }
    }, 0);
  }

  play() {
    return 1;
  }
  stop() {
    return this;
  }
  volume(vol?: number) {
    if (vol !== undefined) {
      this._volume = vol;
      return this;
    }
    return this._volume;
  }
  unload() {}
}

// Howlerモックをグローバルに設定
// @ts-expect-error: Howl mock for testing
global.Howl = MockHowl;

// Howler.ctxのモック（AudioContext）
(global as Record<string, unknown>).Howler = {
  ctx: {
    state: "running",
    resume: () => Promise.resolve(),
  },
  mute: () => {},
  volume: () => {},
};
