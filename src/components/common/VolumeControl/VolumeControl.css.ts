import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const popoverContent = style({
  zIndex: vars.zIndex.popover,
  background: vars.color.bgElevated,
  border: `1px solid ${vars.color.bgSurface}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.md,
  boxShadow: vars.shadow.lg,
  minWidth: "200px",
});

export const popoverArrow = style({
  fill: vars.color.bgElevated,
});

export const sliderContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
});

export const volumeIcon = style({
  color: vars.color.textSecondary,
  opacity: 0.7,
  selectors: {
    "&.muted": {
      opacity: 0.3,
    },
  },
});

export const muteIcon = style({
  selectors: {
    "&.muted": {
      color: vars.color.error,
    },
  },
});
