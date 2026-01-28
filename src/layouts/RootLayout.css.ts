import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const root = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: `radial-gradient(ellipse at center, ${vars.color.bgSurface}, ${vars.color.bgDark})`,
});

export const header = style({
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: vars.zIndex.sticky,
  padding: vars.space.sm,
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
});

export const main = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});
