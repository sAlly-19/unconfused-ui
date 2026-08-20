import React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Radii, Shadows, Spacing, withAlpha } from "@unconfused-ui/tokens";

export type BoxVariant = "flat" | "bordered" | "subtle" | "glass" | "elevated";

export type BoxProps = ViewProps & {
  // Padding
  padding?: keyof Spacing | number;
  p?: keyof Spacing | number;
  paddingHorizontal?: keyof Spacing | number;
  px?: keyof Spacing | number;
  paddingVertical?: keyof Spacing | number;
  py?: keyof Spacing | number;
  paddingTop?: keyof Spacing | number;
  pt?: keyof Spacing | number;
  paddingBottom?: keyof Spacing | number;
  pb?: keyof Spacing | number;
  paddingLeft?: keyof Spacing | number;
  pl?: keyof Spacing | number;
  paddingRight?: keyof Spacing | number;
  pr?: keyof Spacing | number;

  // Margin
  margin?: keyof Spacing | number;
  m?: keyof Spacing | number;
  marginHorizontal?: keyof Spacing | number;
  mx?: keyof Spacing | number;
  marginVertical?: keyof Spacing | number;
  my?: keyof Spacing | number;
  marginTop?: keyof Spacing | number;
  mt?: keyof Spacing | number;
  marginBottom?: keyof Spacing | number;
  mb?: keyof Spacing | number;
  marginLeft?: keyof Spacing | number;
  ml?: keyof Spacing | number;
  marginRight?: keyof Spacing | number;
  mr?: keyof Spacing | number;

  // Dimensions
  width?: ViewStyle["width"];
  w?: ViewStyle["width"];
  height?: ViewStyle["height"];
  h?: ViewStyle["height"];
  minWidth?: ViewStyle["minWidth"];
  minW?: ViewStyle["minWidth"];
  maxWidth?: ViewStyle["maxWidth"];
  maxW?: ViewStyle["maxWidth"];
  minHeight?: ViewStyle["minHeight"];
  minH?: ViewStyle["minHeight"];
  maxHeight?: ViewStyle["maxHeight"];
  maxH?: ViewStyle["maxHeight"];

  // Flexbox & Layout
  flex?: ViewStyle["flex"];
  flexGrow?: ViewStyle["flexGrow"];
  flexShrink?: ViewStyle["flexShrink"];
  flexBasis?: ViewStyle["flexBasis"];
  direction?: ViewStyle["flexDirection"];
  flexDirection?: ViewStyle["flexDirection"];
  align?: ViewStyle["alignItems"];
  alignItems?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  justifyContent?: ViewStyle["justifyContent"];
  alignSelf?: ViewStyle["alignSelf"];
  wrap?: boolean | ViewStyle["flexWrap"];
  flexWrap?: ViewStyle["flexWrap"];
  gap?: keyof Spacing | number;

  // Visual
  bg?: string;
  backgroundColor?: string;
  radius?: keyof Radii | number;
  rounded?: keyof Radii | number;
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: ViewStyle["borderStyle"];
  shadow?: keyof Shadows;
  overflow?: ViewStyle["overflow"];
  opacity?: number;
  variant?: BoxVariant;

  children?: React.ReactNode;
};

export const Box = React.forwardRef<View, BoxProps>(
  (
    {
      padding,
      p,
      paddingHorizontal,
      px,
      paddingVertical,
      py,
      paddingTop,
      pt,
      paddingBottom,
      pb,
      paddingLeft,
      pl,
      paddingRight,
      pr,
      margin,
      m,
      marginHorizontal,
      mx,
      marginVertical,
      my,
      marginTop,
      mt,
      marginBottom,
      mb,
      marginLeft,
      ml,
      marginRight,
      mr,
      width,
      w,
      height,
      h,
      minWidth,
      minW,
      maxWidth,
      maxW,
      minHeight,
      minH,
      maxHeight,
      maxH,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      direction,
      flexDirection,
      align,
      alignItems,
      justify,
      justifyContent,
      alignSelf,
      wrap,
      flexWrap,
      gap,
      bg,
      backgroundColor,
      radius,
      rounded,
      borderWidth,
      borderColor,
      borderStyle,
      shadow,
      overflow,
      opacity,
      variant,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { theme, semanticColors, baseTokens } = useTheme();

    const resolveSpacing = (val: keyof Spacing | number | undefined) => {
      if (val === undefined) return undefined;
      if (typeof val === "number") return val;
      return theme.spacing[val];
    };

    const resolveRadius = (val: keyof Radii | number | undefined) => {
      if (val === undefined) return undefined;
      if (typeof val === "number") return val;
      return theme.radii[val];
    };

    const resolveColor = (colorVal?: string) => {
      if (!colorVal) return undefined;
      if (colorVal in semanticColors) {
        return (semanticColors as Record<string, string>)[colorVal];
      }
      return colorVal;
    };

    const getVariantStyle = (): ViewStyle => {
      switch (variant) {
        case "bordered":
          return {
            backgroundColor: semanticColors.surface,
            borderWidth: 1,
            borderColor: semanticColors.border,
          };
        case "subtle":
          return {
            backgroundColor: semanticColors.surfaceSubtle,
            borderWidth: 1,
            borderColor: "transparent",
          };
        case "glass":
          return {
            backgroundColor: withAlpha(baseTokens.colors.black, 0.75),
            borderWidth: 1,
            borderColor: withAlpha(baseTokens.colors.white, 0.12),
          };
        case "elevated":
          return {
            backgroundColor: semanticColors.surface,
            borderWidth: 1,
            borderColor: semanticColors.border,
            ...theme.shadows.md,
          };
        case "flat":
        default:
          return {};
      }
    };

    const boxStyle: ViewStyle = {
      // Padding
      padding: resolveSpacing(p ?? padding),
      paddingHorizontal: resolveSpacing(px ?? paddingHorizontal),
      paddingVertical: resolveSpacing(py ?? paddingVertical),
      paddingTop: resolveSpacing(pt ?? paddingTop),
      paddingBottom: resolveSpacing(pb ?? paddingBottom),
      paddingLeft: resolveSpacing(pl ?? paddingLeft),
      paddingRight: resolveSpacing(pr ?? paddingRight),

      // Margin
      margin: resolveSpacing(m ?? margin),
      marginHorizontal: resolveSpacing(mx ?? marginHorizontal),
      marginVertical: resolveSpacing(my ?? marginVertical),
      marginTop: resolveSpacing(mt ?? marginTop),
      marginBottom: resolveSpacing(mb ?? marginBottom),
      marginLeft: resolveSpacing(ml ?? marginLeft),
      marginRight: resolveSpacing(mr ?? marginRight),

      // Dimensions
      width: w ?? width,
      height: h ?? height,
      minWidth: minW ?? minWidth,
      maxWidth: maxW ?? maxWidth,
      minHeight: minH ?? minHeight,
      maxHeight: maxH ?? maxHeight,

      // Flex
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      flexDirection: direction ?? flexDirection,
      alignItems: align ?? alignItems,
      justifyContent: justify ?? justifyContent,
      alignSelf,
      flexWrap: typeof wrap === "boolean" ? (wrap ? "wrap" : "nowrap") : (wrap ?? flexWrap),
      gap: resolveSpacing(gap),

      // Visual
      backgroundColor: resolveColor(bg ?? backgroundColor),
      borderRadius: resolveRadius(rounded ?? radius),
      borderWidth,
      borderColor: resolveColor(borderColor),
      borderStyle,
      overflow,
      opacity,

      // Variant & Shadows
      ...getVariantStyle(),
      ...(shadow ? theme.shadows[shadow] : {}),
    };

    return (
      <View ref={ref} style={[boxStyle, style]} {...rest}>
        {children}
      </View>
    );
  }
);

Box.displayName = "Box";
