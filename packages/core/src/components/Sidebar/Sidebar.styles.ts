import { createRecipe } from "@unconfused-ui/recipes";
import { SemanticTokens } from "@unconfused-ui/tokens";

export function getSidebarNavItemRecipe(colors: SemanticTokens) {
  return createRecipe({
    base: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      gap: 10,
      minHeight: 38,
    },
    variants: {
      active: {
        active: {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.12)",
        },
        inactive: {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "transparent",
        },
      },
    },
    defaultVariants: {
      active: "inactive",
    },
  });
}
