import { describe, expect, test } from "bun:test";
import {
  calculateCenterPosition,
  calculateScaleToFit,
  clamp,
  lerp,
  easeOutCubic,
  easeInOutQuad,
  degToRad,
  radToDeg,
} from "./canvas";

describe("calculateCenterPosition", () => {
  test("コンテナ中央に要素を配置する座標を計算する", () => {
    const result = calculateCenterPosition(
      { width: 100, height: 100 },
      { width: 20, height: 20 },
    );
    expect(result).toEqual({ x: 40, y: 40 });
  });

  test("コンテナと要素が同じサイズの場合は原点を返す", () => {
    const result = calculateCenterPosition(
      { width: 50, height: 50 },
      { width: 50, height: 50 },
    );
    expect(result).toEqual({ x: 0, y: 0 });
  });
});

describe("calculateScaleToFit", () => {
  test("コンテナに収まるスケールを計算する（幅が制約）", () => {
    const result = calculateScaleToFit(
      { width: 100, height: 200 },
      { width: 200, height: 200 },
    );
    expect(result).toBe(0.5);
  });

  test("コンテナに収まるスケールを計算する（高さが制約）", () => {
    const result = calculateScaleToFit(
      { width: 200, height: 100 },
      { width: 200, height: 200 },
    );
    expect(result).toBe(0.5);
  });

  test("コンテンツがコンテナより小さい場合は1を超えない", () => {
    const result = calculateScaleToFit(
      { width: 400, height: 400 },
      { width: 100, height: 100 },
    );
    expect(result).toBe(1);
  });

  test("paddingを考慮する", () => {
    const result = calculateScaleToFit(
      { width: 100, height: 100 },
      { width: 100, height: 100 },
      10,
    );
    expect(result).toBe(0.8);
  });
});

describe("clamp", () => {
  test("値が範囲内の場合はそのまま返す", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test("値が最小値未満の場合は最小値を返す", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test("値が最大値超過の場合は最大値を返す", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test("境界値: 最小値と等しい", () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  test("境界値: 最大値と等しい", () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });
});

describe("lerp", () => {
  test("t=0のとき開始値を返す", () => {
    expect(lerp(0, 100, 0)).toBe(0);
  });

  test("t=1のとき終了値を返す", () => {
    expect(lerp(0, 100, 1)).toBe(100);
  });

  test("t=0.5のとき中間値を返す", () => {
    expect(lerp(0, 100, 0.5)).toBe(50);
  });

  test("負の値でも動作する", () => {
    expect(lerp(-100, 100, 0.5)).toBe(0);
  });
});

describe("easeOutCubic", () => {
  test("t=0のとき0を返す", () => {
    expect(easeOutCubic(0)).toBe(0);
  });

  test("t=1のとき1を返す", () => {
    expect(easeOutCubic(1)).toBe(1);
  });

  test("t=0.5のとき0.5より大きい値を返す（ease-out特性）", () => {
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
  });
});

describe("easeInOutQuad", () => {
  test("t=0のとき0を返す", () => {
    expect(easeInOutQuad(0)).toBe(0);
  });

  test("t=1のとき1を返す", () => {
    expect(easeInOutQuad(1)).toBe(1);
  });

  test("t=0.5のとき0.5を返す（対称性）", () => {
    expect(easeInOutQuad(0.5)).toBe(0.5);
  });
});

describe("degToRad", () => {
  test("0度は0ラジアン", () => {
    expect(degToRad(0)).toBe(0);
  });

  test("180度はπラジアン", () => {
    expect(degToRad(180)).toBe(Math.PI);
  });

  test("360度は2πラジアン", () => {
    expect(degToRad(360)).toBe(Math.PI * 2);
  });

  test("90度はπ/2ラジアン", () => {
    expect(degToRad(90)).toBe(Math.PI / 2);
  });
});

describe("radToDeg", () => {
  test("0ラジアンは0度", () => {
    expect(radToDeg(0)).toBe(0);
  });

  test("πラジアンは180度", () => {
    expect(radToDeg(Math.PI)).toBe(180);
  });

  test("2πラジアンは360度", () => {
    expect(radToDeg(Math.PI * 2)).toBe(360);
  });

  test("π/2ラジアンは90度", () => {
    expect(radToDeg(Math.PI / 2)).toBe(90);
  });
});
