import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const container = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space.xl,
  gap: vars.space.xl,
});

export const title = style({
  fontFamily: vars.font.display,
  fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
  fontWeight: vars.fontWeight.black,
  color: vars.color.textPrimary,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textShadow: `0 0 20px ${vars.color.primaryGlow}, 0 4px 8px rgba(0, 0, 0, 0.5)`,
});

export const subtitle = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.textSecondary,
  textAlign: "center",
});

export const resultScore = style({
  fontFamily: vars.font.mono,
  fontSize: "clamp(2rem, 8vw, 4rem)",
  fontWeight: vars.fontWeight.black,
  color: vars.color.accent,
  letterSpacing: "0.05em",
  textShadow: `0 0 30px ${vars.color.accentGlow}, 0 4px 8px rgba(0, 0, 0, 0.5)`,
});

export const gameContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const scoreWrapper = style({
  position: "absolute",
  top: vars.space.md,
  left: vars.space.md,
  zIndex: vars.zIndex.sticky,
});

export const scoreLabel = style({
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
});

export const scoreValue = style({
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.xl,
  minWidth: "60px",
  textAlign: "right",
});
