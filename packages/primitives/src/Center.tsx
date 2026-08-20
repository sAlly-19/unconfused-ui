import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, BoxProps } from "./Box";

export type CenterProps = BoxProps & {
  square?: number;
  circle?: boolean | number;
  inline?: boolean;
  children?: React.ReactNode;
};

export const Center = React.forwardRef<View, CenterProps>(
  ({ square, circle, inline = false, style, children, ...rest }, ref) => {
    const dimension = typeof circle === "number" ? circle : square;
    const isCircle = !!circle;

    const centerStyle: ViewStyle = {
      alignItems: "center",
      justifyContent: "center",
      alignSelf: inline ? "flex-start" : undefined,
      width: dimension,
      height: dimension,
      borderRadius: isCircle ? (dimension ? dimension / 2 : 9999) : undefined,
    };

    return (
      <Box ref={ref} style={[centerStyle, style]} {...rest}>
        {children}
      </Box>
    );
  }
);

Center.displayName = "Center";
