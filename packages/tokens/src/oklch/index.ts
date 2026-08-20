/**
 * OKLCH Perceptual Color Engine & Color-Aware Elevation
 * Pure TypeScript implementation, zero dependencies.
 */

import type { ColorScale } from "../types";

export type NeutralFamily = "auto" | "zinc" | "slate" | "warm" | "pure";

/**
 * Converts a hex or rgb color to an rgba string with specified alpha (0-1).
 * @param color Hex (3 or 6 chars) or rgb string
 * @param alpha Opacity from 0 to 1
 * @returns Standard rgba(r, g, b, alpha) string
 */
export function withAlpha(color: string, alpha: number): string {
  if (!color) return `rgba(255, 255, 255, ${alpha})`;
  if (color.startsWith("rgba")) {
    return color.replace(/[\d\.]+\)$/g, `${alpha})`);
  }
  if (color.startsWith("rgb")) {
    return color.replace("rgb", "rgba").replace(")", `, ${alpha})`);
  }
  const [r, g, b] = hexToRgb(color);
  const r255 = Math.round(r * 255);
  const g255 = Math.round(g * 255);
  const b255 = Math.round(b * 255);
  return `rgba(${r255}, ${g255}, ${b255}, ${alpha})`;
}

/**
 * Calculates fluid typography size with linear viewport interpolation and boundary clamping.
 */
export function calculateFluidSize(
  minPx: number,
  maxPx: number,
  minViewport: number = 360,
  maxViewport: number = 1200,
  currentViewport: number = 768
): number {
  if (currentViewport <= minViewport) return minPx;
  if (currentViewport >= maxViewport) return maxPx;
  const slope = (maxPx - minPx) / (maxViewport - minViewport);
  const calculated = minPx + slope * (currentViewport - minViewport);
  return Math.round(Math.max(minPx, Math.min(maxPx, calculated)) * 10) / 10;
}

/**
 * Color-Aware Perceptual Elevation generator.
 * Computes natural shadow properties tinted with the environment's OKLCH chromatic tone.
 */
export function createPerceptualElevation(
  level: 1 | 2 | 3 | 4 | 5,
  baseColorHex: string = "#8B5CF6",
  mode: "light" | "dark" | "oled" = "dark"
) {
  const oklch = hexToOklch(baseColorHex);
  const isDark = mode === "dark" || mode === "oled";

  // Lightness & Chroma adjustments for shadow tint
  const shadowL = isDark ? 0.02 : 0.2;
  const shadowC = isDark ? Math.min(0.04, oklch.C * 0.4) : Math.min(0.08, oklch.C * 0.6);
  const shadowColor = oklchToHex(shadowL, shadowC, oklch.h);

  const configs = {
    1: {
      offsetY: isDark ? 2 : 1,
      radius: isDark ? 4 : 3,
      opacity: isDark ? 0.35 : 0.08,
      elevation: 2,
    },
    2: {
      offsetY: isDark ? 4 : 3,
      radius: isDark ? 8 : 6,
      opacity: isDark ? 0.4 : 0.12,
      elevation: 4,
    },
    3: {
      offsetY: isDark ? 8 : 6,
      radius: isDark ? 16 : 12,
      opacity: isDark ? 0.45 : 0.16,
      elevation: 8,
    },
    4: {
      offsetY: isDark ? 16 : 12,
      radius: isDark ? 28 : 22,
      opacity: isDark ? 0.5 : 0.2,
      elevation: 16,
    },
    5: {
      offsetY: isDark ? 24 : 18,
      radius: isDark ? 40 : 32,
      opacity: isDark ? 0.55 : 0.25,
      elevation: 24,
    },
  };

  const cfg = configs[level] ?? configs[1];

  return {
    shadowColor: isDark ? withAlpha(shadowColor, cfg.opacity) : shadowColor,
    shadowOffset: { width: 0, height: cfg.offsetY },
    shadowOpacity: cfg.opacity,
    shadowRadius: cfg.radius,
    elevation: cfg.elevation,
  };
}

/**
 * Parses a hex string to 0-1 RGB array.
 */
export function hexToRgb(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const int = parseInt(hex, 16);
  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255,
  ];
}

/**
 * Converts 0-1 RGB to a hex string.
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n * 255)));
  const rHex = clamp(r).toString(16).padStart(2, "0");
  const gHex = clamp(g).toString(16).padStart(2, "0");
  const bHex = clamp(b).toString(16).padStart(2, "0");
  return `#${rHex}${gHex}${bHex}`;
}

export function linearize(c: number): number {
  return c >= 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;
}

export function delinearize(c: number): number {
  return c >= 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c;
}

export function rgbToOklch(r: number, g: number, b: number): { L: number; C: number; h: number } {
  const lr = linearize(r);
  const lg = linearize(g);
  const lb = linearize(b);

  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

  const C = Math.sqrt(a * a + b_ * b_);
  let h = Math.atan2(b_, a) * (180 / Math.PI);
  if (h < 0) h += 360;

  return { L, C, h };
}

export function oklchToRgb(L: number, C: number, h: number): [number, number, number] {
  const hr = h * (Math.PI / 180);
  const a = C * Math.cos(hr);
  const b_ = C * Math.sin(hr);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b_;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b_;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b_;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  const lr = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const lg = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const lb = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;

  let r = delinearize(lr);
  let g = delinearize(lg);
  let b = delinearize(lb);

  r = Math.max(0, Math.min(1, r));
  g = Math.max(0, Math.min(1, g));
  b = Math.max(0, Math.min(1, b));

  return [r, g, b];
}

export function hexToOklch(hex: string): { L: number; C: number; h: number } {
  const [r, g, b] = hexToRgb(hex);
  return rgbToOklch(r, g, b);
}

export function oklchToHex(L: number, C: number, h: number): string {
  const [r, g, b] = oklchToRgb(L, C, h);
  return rgbToHex(r, g, b);
}

export function generateScale(options: { seed: string; steps?: number; chromaPreserve?: number }): ColorScale {
  const oklch = hexToOklch(options.seed);
  const hue = oklch.h;
  const chroma = oklch.C * (options.chromaPreserve ?? 0.85);

  const lightnessSteps = [0.97, 0.93, 0.87, 0.78, 0.68, 0.58, 0.48, 0.39, 0.31, 0.24, 0.15];

  return {
    50: oklchToHex(lightnessSteps[0], chroma, hue),
    100: oklchToHex(lightnessSteps[1], chroma, hue),
    200: oklchToHex(lightnessSteps[2], chroma, hue),
    300: oklchToHex(lightnessSteps[3], chroma, hue),
    400: oklchToHex(lightnessSteps[4], chroma, hue),
    500: oklchToHex(lightnessSteps[5], chroma, hue),
    600: oklchToHex(lightnessSteps[6], chroma, hue),
    700: oklchToHex(lightnessSteps[7], chroma, hue),
    800: oklchToHex(lightnessSteps[8], chroma, hue),
    900: oklchToHex(lightnessSteps[9], chroma, hue),
    950: oklchToHex(lightnessSteps[10], chroma, hue),
  };
}

/**
 * Generates neutral scales for diverse branded neutral families.
 */
export function generateNeutralScale(familyOrHue: NeutralFamily | number = "auto", seedHue: number = 0): ColorScale {
  let hue = seedHue;
  let chroma = 0.015;

  if (typeof familyOrHue === "number") {
    hue = familyOrHue;
  } else {
    switch (familyOrHue) {
      case "slate":
        hue = 240; // Cool Slate
        chroma = 0.02;
        break;
      case "zinc":
        hue = 260; // Modern Zinc
        chroma = 0.008;
        break;
      case "warm":
        hue = 65; // Warm Stone
        chroma = 0.02;
        break;
      case "pure":
        chroma = 0.0; // Pure Monochromatic
        break;
      case "auto":
      default:
        hue = seedHue;
        chroma = 0.012;
        break;
    }
  }

  const lightnessSteps = [0.97, 0.93, 0.87, 0.78, 0.68, 0.58, 0.48, 0.39, 0.31, 0.24, 0.15];

  return {
    50: oklchToHex(lightnessSteps[0], chroma, hue),
    100: oklchToHex(lightnessSteps[1], chroma, hue),
    200: oklchToHex(lightnessSteps[2], chroma, hue),
    300: oklchToHex(lightnessSteps[3], chroma, hue),
    400: oklchToHex(lightnessSteps[4], chroma, hue),
    500: oklchToHex(lightnessSteps[5], chroma, hue),
    600: oklchToHex(lightnessSteps[6], chroma, hue),
    700: oklchToHex(lightnessSteps[7], chroma, hue),
    800: oklchToHex(lightnessSteps[8], chroma, hue),
    900: oklchToHex(lightnessSteps[9], chroma, hue),
    950: oklchToHex(lightnessSteps[10], chroma, hue),
  };
}
