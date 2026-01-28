import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const versionText = style({
  position: "fixed",
  bottom: vars.space.sm,
  right: vars.space.sm,
  zIndex: vars.zIndex.fixed,
  fontFamily: vars.font.mono,
  fontSize: "10px",
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textMuted,
  opacity: 0.5,
  letterSpacing: "0.05em",
  pointerEvents: "none",
  userSelect: "none",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
});
