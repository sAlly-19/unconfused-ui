import React from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Box, BoxProps } from "./Box";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "fluid" | "full";

export type ContainerProps = BoxProps & {
  size?: ContainerSize;
  maxWidth?: number | ViewStyle["maxWidth"];
  center?: boolean;
  gutters?: boolean;
};

const CONTAINER_MAX_WIDTHS: Record<ContainerSize, number | string> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  fluid: "100%",
  full: "100%",
};

export const Container = React.forwardRef<View, ContainerProps>(
  ({ size = "xl", maxWidth, center = true, gutters = true, style, children, ...rest }, ref) => {
    const { theme } = useTheme();

    const resolvedMaxWidth = maxWidth ?? CONTAINER_MAX_WIDTHS[size];

    const containerStyle: ViewStyle = {
      width: "100%",
      maxWidth: resolvedMaxWidth as any,
      alignSelf: center ? "center" : "auto",
      paddingHorizontal: gutters ? theme.spacing[4] : 0,
    };

    return (
      <Box ref={ref} style={[containerStyle, style]} {...rest}>
        {children}
      </Box>
    );
  }
);

Container.displayName = "Container";
