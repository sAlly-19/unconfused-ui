import React from "react";
import { View } from "react-native";
import { Stack, StackProps } from "./Stack";

export type HStackProps = Omit<StackProps, "direction">;

export const HStack = React.forwardRef<View, HStackProps>(
  ({ align = "center", justify = "flex-start", ...rest }, ref) => {
    return <Stack ref={ref} direction="row" align={align} justify={justify} {...rest} />;
  }
);

HStack.displayName = "HStack";
