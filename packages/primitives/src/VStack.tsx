import React from "react";
import { View } from "react-native";
import { Stack, StackProps } from "./Stack";

export type VStackProps = Omit<StackProps, "direction">;

export const VStack = React.forwardRef<View, VStackProps>(
  ({ align = "stretch", justify = "flex-start", ...rest }, ref) => {
    return <Stack ref={ref} direction="column" align={align} justify={justify} {...rest} />;
  }
);

VStack.displayName = "VStack";
