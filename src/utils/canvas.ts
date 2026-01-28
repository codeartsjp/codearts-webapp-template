import type { Position, Size } from "~/types";

export function calculateCenterPosition(
  containerSize: Size,
  elementSize: Size,
): Position {
  return {
    x: (containerSize.width - elementSize.width) / 2,
    y: (containerSize.height - elementSize.height) / 2,
  };
}

export function calculateScaleToFit(
  containerSize: Size,
  contentSize: Size,
  padding = 0,
): number {
  const availableWidth = containerSize.width - padding * 2;
  const availableHeight = containerSize.height - padding * 2;

  const scaleX = availableWidth / contentSize.width;
  const scaleY = availableHeight / contentSize.height;

  return Math.min(scaleX, scaleY, 1);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

export function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

export function degToRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function radToDeg(radians: number): number {
  return (radians * 180) / Math.PI;
}
