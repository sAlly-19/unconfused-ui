import React from "react";
import { View as RNView, ViewProps as RNViewProps, ViewStyle } from "react-native";
import { Box, BoxProps } from "./Box";

export type ViewProps = BoxProps;

export const View = React.forwardRef<RNView, ViewProps>((props, ref) => {
  return <Box ref={ref} {...props} />;
});

View.displayName = "View";
