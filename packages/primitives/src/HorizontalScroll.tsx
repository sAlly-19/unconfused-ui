import React from "react";
import { ScrollView as RNScrollView, ScrollViewProps as RNScrollViewProps, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Spacing } from "@unconfused-ui/tokens";

export type HorizontalScrollProps = Omit<RNScrollViewProps, "horizontal"> & {
  gap?: keyof Spacing | number;
  contentPadding?: keyof Spacing | number;
};

export const HorizontalScroll = React.forwardRef<RNScrollView, HorizontalScrollProps>(
  ({ gap, contentPadding, contentContainerStyle, style, children, ...rest }, ref) => {
    const { theme } = useTheme();

    const resolvedGap =
      gap !== undefined ? (typeof gap === "number" ? gap : theme.spacing[gap]) : undefined;

    const resolvedPadding =
      contentPadding !== undefined
        ? typeof contentPadding === "number"
          ? contentPadding
          : theme.spacing[contentPadding]
        : undefined;

    return (
      <RNScrollView
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          {
            flexDirection: "row",
            alignItems: "center",
            gap: resolvedGap,
            padding: resolvedPadding,
          },
          contentContainerStyle,
        ]}
        style={style}
        {...rest}
      >
        {children}
      </RNScrollView>
    );
  }
);

HorizontalScroll.displayName = "HorizontalScroll";
