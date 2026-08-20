import React from "react";
import { View } from "react-native";
import { HStack, HStackProps } from "./HStack";

export type RowProps = HStackProps & {
  gutter?: HStackProps["gap"];
};

export const Row = React.forwardRef<View, RowProps>(({ gutter, gap, ...rest }, ref) => {
  return <HStack ref={ref} gap={gutter ?? gap} {...rest} />;
});

Row.displayName = "Row";
