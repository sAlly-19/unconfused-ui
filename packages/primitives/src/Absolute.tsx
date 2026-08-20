import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, BoxProps } from "./Box";

export type AbsolutePlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center"
  | "center"
  | "fill";

export type AbsoluteProps = BoxProps & {
  top?: ViewStyle["top"];
  bottom?: ViewStyle["bottom"];
  left?: ViewStyle["left"];
  right?: ViewStyle["right"];
  inset?: number;
  zIndex?: number;
  center?: boolean;
  placement?: AbsolutePlacement;
};

export const Absolute = React.forwardRef<View, AbsoluteProps>(
  (
    {
      top,
      bottom,
      left,
      right,
      inset,
      zIndex = 1,
      center = false,
      placement,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const getPlacementStyle = (): ViewStyle => {
      if (!placement) return {};
      switch (placement) {
        case "top-left":
          return { top: 0, left: 0 };
        case "top-right":
          return { top: 0, right: 0 };
        case "bottom-left":
          return { bottom: 0, left: 0 };
        case "bottom-right":
          return { bottom: 0, right: 0 };
        case "top-center":
          return { top: 0, left: "50%", transform: [{ translateX: -50 }] };
        case "bottom-center":
          return { bottom: 0, left: "50%", transform: [{ translateX: -50 }] };
        case "center":
          return { top: "50%", left: "50%", transform: [{ translateX: -50 }, { translateY: -50 }] };
        case "fill":
          return { top: 0, bottom: 0, left: 0, right: 0 };
      }
    };

    const absoluteStyle: ViewStyle = {
      position: "absolute",
      top: inset !== undefined ? inset : top,
      bottom: inset !== undefined ? inset : bottom,
      left: inset !== undefined ? inset : left,
      right: inset !== undefined ? inset : right,
      zIndex,
      ...getPlacementStyle(),
      ...(center
        ? {
            top: "50%",
            left: "50%",
            transform: [{ translateX: -50 }, { translateY: -50 }],
          }
        : {}),
    };

    return (
      <Box ref={ref} style={[absoluteStyle, style]} {...rest}>
        {children}
      </Box>
    );
  }
);

Absolute.displayName = "Absolute";
