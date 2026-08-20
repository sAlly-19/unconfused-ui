import React from "react";
import { SafeAreaView, View, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";

export type SafeAreaProps = ViewProps & {
  bg?: string;
  children?: React.ReactNode;
};

export const SafeArea = React.forwardRef<SafeAreaView, SafeAreaProps>(
  ({ bg, style, children, ...rest }, ref) => {
    const { semanticColors } = useTheme();

    return (
      <SafeAreaView
        ref={ref}
        style={[
          {
            flex: 1,
            backgroundColor: bg ?? semanticColors.background,
          },
          style,
        ]}
        {...rest}
      >
        {children}
      </SafeAreaView>
    );
  }
);

SafeArea.displayName = "SafeArea";
