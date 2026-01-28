import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    // Primary (Vibrant Cyan)
    primary: "#00d4ff",
    primaryLight: "#5ce1ff",
    primaryDark: "#00a8cc",
    primaryGlow: "rgba(0, 212, 255, 0.4)",

    // Secondary (Purple/Magenta)
    secondary: "#b388ff",
    secondaryLight: "#d4b8ff",
    secondaryDark: "#7c4dff",

    // Accent (Gold/Yellow)
    accent: "#ffd700",
    accentLight: "#ffe44d",
    accentDark: "#ccac00",
    accentGlow: "rgba(255, 215, 0, 0.4)",

    // Background (Dark theme)
    bgDark: "#1a1a2e",
    bgDarker: "#0f0f1a",
    bgSurface: "#16213e",
    bgElevated: "#1f2b4d",

    // Status
    success: "#00ff88",
    successDark: "#00cc6a",
    warning: "#ff9500",
    warningDark: "#cc7700",
    error: "#ff4757",
    errorDark: "#cc3945",

    // Text
    textPrimary: "#ffffff",
    textSecondary: "#b8c5d6",
    textMuted: "#6b7a8f",
    textDisabled: "#4a5568",
  },

  font: {
    display: "'Orbitron', 'Noto Sans JP', sans-serif",
    body: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'Orbitron', 'SF Mono', Monaco, monospace",
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.5rem",
  },

  fontWeight: {
    normal: "400",
    medium: "500",
    bold: "700",
    black: "900",
  },

  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },

  shadow: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.3)",
    md: "0 4px 12px rgba(0, 0, 0, 0.4)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.5)",
    inset: "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "350ms ease",
  },

  zIndex: {
    dropdown: "1000",
    sticky: "1020",
    fixed: "1030",
    modalBackdrop: "1040",
    modal: "1050",
    popover: "1060",
    tooltip: "1070",
  },
});
