import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const container = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `radial-gradient(ellipse at center, ${vars.color.bgSurface}, ${vars.color.bgDark})`,
  zIndex: vars.zIndex.modal,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.lg,
});

export const message = style({
  margin: 0,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textSecondary,
  textShadow: `0 0 10px ${vars.color.primaryGlow}`,
  letterSpacing: "0.05em",
});

export const progress = style({
  margin: 0,
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  textShadow: `0 0 15px ${vars.color.primaryGlow}`,
  letterSpacing: "0.1em",
});
