import React from "react";
import { Dimensions, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { calculateFluidSize, FontSizes, FontWeights, LineHeights } from "@unconfused-ui/tokens";

export type TrackingScale = "tight" | "normal" | "wide" | "widest";
export type LeadingScale = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

export type TextProps = RNTextProps & {
  size?: keyof FontSizes | number;
  weight?: keyof FontWeights;
  lineHeight?: keyof LineHeights | number;
  leading?: LeadingScale;
  color?: string;
  align?: TextStyle["textAlign"];
  transform?: TextStyle["textTransform"];
  decoration?: TextStyle["textDecorationLine"];
  italic?: boolean;
  tracking?: TrackingScale | number;
  muted?: boolean;
  contrast?: boolean;
  fluid?: boolean | [number, number];
  children?: React.ReactNode;
};

const TRACKING_MAP: Record<TrackingScale, number> = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  widest: 1.5,
};

const LEADING_MAP: Record<LeadingScale, number> = {
  none: 1,
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.65,
  loose: 1.8,
};

export const Text = React.forwardRef<RNText, TextProps>(
  (
    {
      size = "md",
      weight = "regular",
      lineHeight,
      leading,
      color,
      align,
      transform,
      decoration,
      italic = false,
      tracking,
      muted = false,
      contrast = false,
      fluid = false,
      allowFontScaling,
      maxFontSizeMultiplier,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { theme, semanticColors } = useTheme();

    const baseFontSize = typeof size === "number" ? size : theme.fontSizes[size];

    const resolveFontSize = () => {
      if (!fluid) return baseFontSize;
      const windowWidth = typeof Dimensions !== "undefined" ? Dimensions.get("window").width : 768;
      if (Array.isArray(fluid)) {
        return calculateFluidSize(fluid[0], fluid[1], 360, 1280, windowWidth);
      }
      return calculateFluidSize(Math.round(baseFontSize * 0.85), Math.round(baseFontSize * 1.3), 360, 1280, windowWidth);
    };

    const fontSize = resolveFontSize();

    const resolveLineHeight = () => {
      if (lineHeight !== undefined) {
        return typeof lineHeight === "number" ? lineHeight : theme.lineHeights[lineHeight];
      }
      if (leading !== undefined) {
        return Math.round(fontSize * LEADING_MAP[leading]);
      }
      return typeof size === "string" ? theme.lineHeights[size] : Math.round(fontSize * 1.4);
    };

    const resolveColor = () => {
      if (muted) return semanticColors.foregroundMuted;
      if (contrast) return semanticColors.primary;
      if (color) {
        if (color in semanticColors) {
          return (semanticColors as Record<string, string>)[color];
        }
        return color;
      }
      return semanticColors.foreground;
    };

    const resolveTracking = () => {
      if (tracking === undefined) return undefined;
      if (typeof tracking === "number") return tracking;
      return TRACKING_MAP[tracking];
    };

    const textStyle: TextStyle = {
      fontSize,
      fontWeight: theme.fontWeights[weight],
      lineHeight: resolveLineHeight(),
      color: resolveColor(),
      textAlign: align,
      textTransform: transform,
      textDecorationLine: decoration,
      fontStyle: italic ? "italic" : "normal",
      letterSpacing: resolveTracking(),
    };

    return (
      <RNText
        ref={ref}
        allowFontScaling={allowFontScaling ?? true}
        maxFontSizeMultiplier={maxFontSizeMultiplier ?? (typeof size === "string" && (size.startsWith("3") || size.startsWith("4")) ? 1.3 : 1.5)}
        style={[textStyle, style]}
        {...rest}
      >
        {children}
      </RNText>
    );
  }
);

Text.displayName = "Text";
