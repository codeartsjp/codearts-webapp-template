import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "./theme.css";

// Animations
export const spinKeyframes = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const spinReverseKeyframes = keyframes({
  from: { transform: "rotate(360deg)" },
  to: { transform: "rotate(0deg)" },
});

// Spinner styles
export const spinnerContainer = style({
  position: "relative",
  width: "64px",
  height: "64px",
});

export const spinnerRing = style({
  position: "absolute",
  inset: 0,
  border: "3px solid transparent",
  borderTopColor: vars.color.primary,
  borderRadius: "50%",
  animation: `${spinKeyframes} 1s linear infinite`,
  boxShadow: `0 0 10px ${vars.color.primaryGlow}, inset 0 0 10px ${vars.color.primaryGlow}`,
});

export const spinnerCore = style({
  position: "absolute",
  inset: "12px",
  border: "2px solid transparent",
  borderBottomColor: vars.color.accent,
  borderRadius: "50%",
  animation: `${spinReverseKeyframes} 0.6s linear infinite`,
  boxShadow: `0 0 8px ${vars.color.accentGlow}, inset 0 0 8px ${vars.color.accentGlow}`,
});
