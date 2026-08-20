import React from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Spacing } from "@unconfused-ui/tokens";
import { Box, BoxProps } from "./Box";
import { AnimatedBox } from "./AnimatedBox";

export type StackDirection = "vertical" | "horizontal" | "row" | "column" | "row-reverse" | "column-reverse";

export type StackProps = BoxProps & {
  direction?: StackDirection;
  gap?: keyof Spacing | number;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  wrap?: boolean | ViewStyle["flexWrap"];
  reverse?: boolean;
  divider?: React.ReactElement;
  staggerDelay?: number;
  children?: React.ReactNode;
};

export const Stack = React.forwardRef<View, StackProps>(
  (
    {
      direction = "vertical",
      gap = 4,
      align = "stretch",
      justify = "flex-start",
      wrap = false,
      reverse = false,
      divider,
      staggerDelay,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { theme } = useTheme();

    const resolveGap = typeof gap === "number" ? gap : theme.spacing[gap];

    const getFlexDirection = (): ViewStyle["flexDirection"] => {
      if (direction === "horizontal" || direction === "row") {
        return reverse ? "row-reverse" : "row";
      }
      return reverse ? "column-reverse" : "column";
    };

    const validChildren = React.Children.toArray(children).filter(Boolean);

    const renderChildren = () => {
      let items = validChildren;

      if (staggerDelay && staggerDelay > 0) {
        items = validChildren.map((child, index) => (
          <AnimatedBox
            key={index}
            isAnimated={true}
            animationType="slide-up"
            delay={index * staggerDelay}
            duration={250}
          >
            {child}
          </AnimatedBox>
        ));
      }

      if (!divider || items.length <= 1) {
        return items;
      }

      return items.map((child, index) => {
        const isLast = index === items.length - 1;
        if (isLast) {
          return <React.Fragment key={index}>{child}</React.Fragment>;
        }
        return (
          <React.Fragment key={index}>
            {child}
            {React.cloneElement(divider, { key: `divider-${index}` })}
          </React.Fragment>
        );
      });
    };

    return (
      <Box
        ref={ref}
        flexDirection={getFlexDirection()}
        alignItems={align}
        justifyContent={justify}
        flexWrap={typeof wrap === "boolean" ? (wrap ? "wrap" : "nowrap") : wrap}
        gap={divider ? undefined : resolveGap}
        style={style}
        {...rest}
      >
        {renderChildren()}
      </Box>
    );
  }
);

Stack.displayName = "Stack";
