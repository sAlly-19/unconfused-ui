import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Spacing } from "@unconfused-ui/tokens";

export type InlineProps = ViewProps & {
  gap?: keyof Spacing | number;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  wrap?: boolean;
  children?: React.ReactNode;
};

export const Inline = React.forwardRef<View, InlineProps>(
  (
    {
      gap = 2,
      align = "center",
      justify = "flex-start",
      wrap = false,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { theme } = useTheme();

    const resolveGap = typeof gap === "number" ? gap : theme.spacing[gap];

    const inlineStyle: ViewStyle = {
      flexDirection: "row",
      gap: resolveGap,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? "wrap" : "nowrap",
    };

    return (
      <View ref={ref} style={[inlineStyle, style]} {...rest}>
        {children}
      </View>
    );
  }
);

Inline.displayName = "Inline";
