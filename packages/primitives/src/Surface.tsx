import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Radii, Shadows, Materials, materials as defaultMaterials } from "@unconfused-ui/tokens";

export type SurfaceProps = ViewProps & {
  variant?: "default" | "subtle" | "bordered" | "flat";
  material?: keyof Materials;
  elevation?: keyof Shadows;
  radius?: keyof Radii | number;
  children?: React.ReactNode;
};

export const Surface = React.forwardRef<View, SurfaceProps>(
  (
    { variant = "default", material, elevation = "none", radius = "md", style, children, ...rest },
    ref
  ) => {
    const { theme } = useTheme();

    const resolveRadius = typeof radius === "number" ? radius : theme.radii[radius];

    const getMaterialStyles = (): ViewStyle | undefined => {
      if (!material) return undefined;
      const mat = theme.materials?.[material] ?? defaultMaterials[material];
      if (!mat) return undefined;

      return {
        backgroundColor: mat.tint,
        opacity: mat.tintOpacity,
        borderColor: `rgba(255, 255, 255, ${mat.borderLuminance})`,
        borderWidth: mat.borderLuminance > 0 ? 1 : 0,
      };
    };

    const getVariantStyles = (): ViewStyle => {
      if (material) {
        return getMaterialStyles() || { backgroundColor: theme.colors.surface };
      }

      switch (variant) {
        case "subtle":
          return {
            backgroundColor: theme.colors.surfaceSubtle,
          };
        case "bordered":
          return {
            backgroundColor: theme.colors.surface,
            borderWidth: 1,
            borderColor: theme.colors.border,
          };
        case "flat":
          return {
            backgroundColor: theme.colors.background,
          };
        case "default":
        default:
          return {
            backgroundColor: theme.colors.surface,
          };
      }
    };

    const surfaceStyle: ViewStyle = {
      borderRadius: resolveRadius,
      ...getVariantStyles(),
      ...(elevation !== "none" ? theme.shadows[elevation] : {}),
    };

    return (
      <View ref={ref} style={[surfaceStyle, style]} {...rest}>
        {children}
      </View>
    );
  }
);

Surface.displayName = "Surface";
