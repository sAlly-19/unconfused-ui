import React from "react";
import { View } from "react-native";
import { VStack, VStackProps } from "./VStack";

export type ColumnProps = VStackProps & {
  span?: number; // 1 to 12 or flex value
};

export const Column = React.forwardRef<View, ColumnProps>(({ span, flex, ...rest }, ref) => {
  const resolvedFlex = flex ?? (span ? span : 1);
  return <VStack ref={ref} flex={resolvedFlex} {...rest} />;
});

Column.displayName = "Column";
