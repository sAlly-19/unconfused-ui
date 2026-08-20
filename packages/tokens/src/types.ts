export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type BaseColors = {
  neutral: ColorScale;
  brand: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  white: string;
  black: string;
  transparent: string;
};

export type SemanticTokens = {
  background: string;
  surface: string;
  surfaceSubtle: string;
  surfaceHover: string;
  surfacePressed: string;
  foreground: string;
  foregroundMuted: string;
  foregroundSubtle: string;
  border: string;
  borderSubtle: string;
  borderBold: string;
  primary: string;
  primaryForeground: string;
  primaryHover: string;
  primaryPressed: string;
  secondary: string;
  secondaryForeground: string;
  secondaryHover: string;
  secondaryPressed: string;
  danger: string;
  dangerForeground: string;
  dangerHover: string;
  dangerPressed: string;
  focusRing: string;
};

export type Spacing = {
  0: number;
  0.5: number;
  1: number;
  1.5: number;
  2: number;
  2.5: number;
  3: number;
  3.5: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  12: number;
  14: number;
  16: number;
  20: number;
  24: number;
};

export type Radii = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
  full: number;
};

export type FontSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
  "3xl": number;
  "4xl": number;
};

export type LineHeights = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
  "3xl": number;
  "4xl": number;
};

export type FontWeights = {
  regular: "400";
  medium: "500";
  semibold: "600";
  bold: "700";
};

export type Shadows = {
  none: object;
  sm: object;
  md: object;
  lg: object;
  xl: object;
};

export type Motion = {
  spring: {
    snappy: { damping: number; stiffness: number; mass: number };
    bouncy: { damping: number; stiffness: number; mass: number };
    gentle: { damping: number; stiffness: number; mass: number };
  };
  duration: {
    fast: number;
    normal: number;
    slow: number;
  };
};

export type ZIndices = {
  hide: number;
  base: number;
  dropdown: number;
  sticky: number;
  overlay: number;
  modal: number;
  popover: number;
  toast: number;
};

import { Materials } from "./base/materials";
import { Breakpoints } from "./base/breakpoints";

export type ThemeTokens = {
  colors: BaseColors;
  semantic: SemanticTokens;
  spacing: Spacing;
  radii: Radii;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
  fontWeights: FontWeights;
  shadows: Shadows;
  motion: Motion;
  zIndices: ZIndices;
  materials?: Materials;
  breakpoints?: Breakpoints;
};
