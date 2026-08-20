import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, BoxProps } from "./Box";

export type AspectRatioValue = number | "16/9" | "4/3" | "1/1" | "21/9" | "9/16" | "3/2";

export type AspectRatioProps = BoxProps & {
  ratio?: AspectRatioValue;
  children?: React.ReactNode;
};

const RATIO_MAP: Record<string, number> = {
  "16/9": 16 / 9,
  "4/3": 4 / 3,
  "1/1": 1,
  "21/9": 21 / 9,
  "9/16": 9 / 16,
  "3/2": 3 / 2,
};

export const AspectRatio = React.forwardRef<View, AspectRatioProps>(
  ({ ratio = 16 / 9, style, children, ...rest }, ref) => {
    const numericRatio = typeof ratio === "number" ? ratio : RATIO_MAP[ratio] ?? 16 / 9;

    const ratioStyle: ViewStyle = {
      aspectRatio: numericRatio,
      width: "100%",
      position: "relative",
      overflow: "hidden",
    };

    return (
      <Box ref={ref} style={[ratioStyle, style]} {...rest}>
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          {children}
        </View>
      </Box>
    );
  }
);

AspectRatio.displayName = "AspectRatio";
