export type GameState = "idle" | "loading" | "playing" | "paused" | "finished";

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect extends Position, Size {}
