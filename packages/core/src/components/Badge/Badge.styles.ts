import { createRecipe } from "@unconfused-ui/recipes";
import { SemanticTokens, withAlpha } from "@unconfused-ui/tokens";

export function getBadgeRecipe(colors: SemanticTokens) {
  return createRecipe({
    base: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 8,
      borderWidth: 1,
    },
    variants: {
      variant: {
        primary: {
          backgroundColor: withAlpha(colors.primary, 0.16),
          borderColor: withAlpha(colors.primary, 0.35),
        },
        secondary: {
          backgroundColor: colors.surfaceSubtle,
          borderColor: colors.border,
        },
        success: {
          backgroundColor: withAlpha("#10B981", 0.16),
          borderColor: withAlpha("#10B981", 0.35),
        },
        warning: {
          backgroundColor: withAlpha("#F59E0B", 0.16),
          borderColor: withAlpha("#F59E0B", 0.35),
        },
        danger: {
          backgroundColor: withAlpha(colors.danger, 0.16),
          borderColor: withAlpha(colors.danger, 0.35),
        },
        outline: {
          backgroundColor: "transparent",
          borderColor: colors.borderBold,
        },
      },
      size: {
        sm: {
          paddingHorizontal: 8,
          paddingVertical: 3,
        },
        md: {
          paddingHorizontal: 12,
          paddingVertical: 5,
        },
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  });
}
