import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const gameButton = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${vars.space.md} ${vars.space.xl}`,
    fontFamily: vars.font.display,
    fontSize: vars.fontSize.lg,
    fontWeight: vars.fontWeight.bold,
    color: vars.color.bgDark,
    background: `linear-gradient(180deg, ${vars.color.accentLight} 0%, ${vars.color.accent} 100%)`,
    border: "none",
    borderRadius: vars.radius.lg,
    boxShadow: `0 4px 0 ${vars.color.accentDark}, 0 6px 12px rgba(0, 0, 0, 0.3)`,
    cursor: "pointer",
    transition: `all ${vars.transition.fast}`,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 6px 0 ${vars.color.accentDark}, 0 8px 16px rgba(0, 0, 0, 0.4), 0 0 20px ${vars.color.accentGlow}`,
    },
    ":active": {
      transform: "translateY(2px)",
      boxShadow: `0 2px 0 ${vars.color.accentDark}, 0 4px 8px rgba(0, 0, 0, 0.3)`,
    },
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      transform: "none",
    },
  },
  variants: {
    size: {
      sm: {
        padding: `${vars.space.sm} ${vars.space.md}`,
        fontSize: vars.fontSize.sm,
      },
      md: {
        padding: `${vars.space.md} ${vars.space.xl}`,
        fontSize: vars.fontSize.lg,
      },
      lg: {
        padding: `${vars.space.lg} ${vars.space["2xl"]}`,
        fontSize: vars.fontSize.xl,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const iconButton = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: vars.space.sm,
    color: vars.color.textPrimary,
    background: "transparent",
    border: "none",
    borderRadius: vars.radius.md,
    cursor: "pointer",
    opacity: 0.7,
    transition: `all ${vars.transition.fast}`,
    ":hover": {
      opacity: 1,
      color: vars.color.primary,
    },
    ":disabled": {
      opacity: 0.3,
      cursor: "not-allowed",
    },
  },
  variants: {
    size: {
      sm: { padding: vars.space.xs },
      md: { padding: vars.space.sm },
      lg: { padding: vars.space.md },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const gameTitle = recipe({
  base: {
    fontFamily: vars.font.display,
    fontWeight: vars.fontWeight.black,
    color: vars.color.textPrimary,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    textShadow: `0 0 20px ${vars.color.primaryGlow}, 0 4px 8px rgba(0, 0, 0, 0.5)`,
    textAlign: "center",
  },
  variants: {
    size: {
      sm: { fontSize: vars.fontSize["2xl"] },
      md: { fontSize: vars.fontSize["3xl"] },
      lg: { fontSize: vars.fontSize["4xl"] },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const scoreDisplay = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: vars.space.sm,
    padding: `${vars.space.sm} ${vars.space.md}`,
    fontFamily: vars.font.display,
    fontSize: vars.fontSize.lg,
    fontWeight: vars.fontWeight.bold,
    color: vars.color.accent,
    background: `linear-gradient(180deg, ${vars.color.bgElevated} 0%, ${vars.color.bgSurface} 100%)`,
    border: `2px solid ${vars.color.accent}`,
    borderRadius: vars.radius.lg,
    boxShadow: `${vars.shadow.inset}, 0 0 12px ${vars.color.accentGlow}`,
    textShadow: `0 0 8px ${vars.color.accentGlow}`,
    letterSpacing: "0.05em",
  },
});
