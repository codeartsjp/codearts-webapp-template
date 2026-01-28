import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: vars.space.md,
});

export const stage = style({
  cursor: "pointer",
});
