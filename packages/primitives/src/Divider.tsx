import React from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed" | "dotted";

export type DividerProps = BoxProps & {
  orientation?: DividerOrientation;
  dividerVariant?: DividerVariant;
  color?: string;
  thickness?: number;
  label?: string;
  labelPosition?: "center" | "left" | "right";
  children?: React.ReactNode;
};

export const Divider = React.forwardRef<View, DividerProps>(
  (
    {
      orientation = "horizontal",
      dividerVariant = "solid",
      color,
      thickness = 1,
      label,
      labelPosition = "center",
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { semanticColors } = useTheme();
    const dividerColor = color ?? semanticColors.border;
    const resolvedBorderStyle: ViewStyle["borderStyle"] = dividerVariant;

    const labelContent = label ?? children;

    if (orientation === "vertical") {
      return (
        <Box
          ref={ref}
          style={[
            {
              width: thickness,
              height: "100%",
              minHeight: 16,
              borderLeftWidth: thickness,
              borderLeftColor: dividerColor,
              borderStyle: resolvedBorderStyle,
              alignSelf: "stretch",
            },
            style,
          ]}
          accessibilityRole="summary"
          {...rest}
        />
      );
    }

    if (labelContent) {
      return (
        <Box
          ref={ref}
          style={[
            {
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 12,
            },
            style,
          ]}
          accessibilityRole="summary"
          {...rest}
        >
          <Box
            style={{
              flex: labelPosition === "left" ? 0.15 : 1,
              height: thickness,
              borderBottomWidth: thickness,
              borderBottomColor: dividerColor,
              borderStyle: resolvedBorderStyle,
            }}
          />
          <Box style={{ paddingHorizontal: 12 }}>
            {typeof labelContent === "string" ? (
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                {labelContent}
              </Text>
            ) : (
              labelContent
            )}
          </Box>
          <Box
            style={{
              flex: labelPosition === "right" ? 0.15 : 1,
              height: thickness,
              borderBottomWidth: thickness,
              borderBottomColor: dividerColor,
              borderStyle: resolvedBorderStyle,
            }}
          />
        </Box>
      );
    }

    return (
      <Box
        ref={ref}
        style={[
          {
            width: "100%",
            height: thickness,
            borderBottomWidth: thickness,
            borderBottomColor: dividerColor,
            borderStyle: resolvedBorderStyle,
          },
          style,
        ]}
        accessibilityRole="summary"
        {...rest}
      />
    );
  }
);

Divider.displayName = "Divider";
