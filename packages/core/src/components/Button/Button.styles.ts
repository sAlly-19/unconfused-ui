import { createRecipe } from "@unconfused-ui/recipes";
import { SemanticTokens, withAlpha } from "@unconfused-ui/tokens";

const buttonRecipeCache = new WeakMap<SemanticTokens, ReturnType<typeof createRecipe>>();

export function getButtonRecipe(colors: SemanticTokens) {
  const cached = buttonRecipeCache.get(colors);
  if (cached) return cached;

  const recipe = createRecipe({
    base: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
    },
    variants: {
      variant: {
        primary: {
          backgroundColor: colors.primary,
          borderWidth: 1,
          borderColor: withAlpha(colors.primaryForeground, 0.2),
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.35,
          shadowRadius: 10,
          elevation: 5,
        },
        secondary: {
          backgroundColor: colors.surfaceSubtle,
          borderWidth: 1,
          borderColor: colors.border,
        },
        destructive: {
          backgroundColor: colors.danger,
          borderWidth: 1,
          borderColor: withAlpha(colors.dangerForeground, 0.2),
          shadowColor: colors.danger,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 4,
        },
        outline: {
          backgroundColor: "transparent",
          borderWidth: 1.5,
          borderColor: colors.borderBold,
        },
        ghost: {
          backgroundColor: "transparent",
          borderWidth: 0,
        },
        glass: {
          backgroundColor: withAlpha(colors.surface, 0.7),
          borderWidth: 1,
          borderColor: colors.borderSubtle,
        },
        subtle: {
          backgroundColor: withAlpha(colors.primary, 0.12),
          borderWidth: 1,
          borderColor: withAlpha(colors.primary, 0.25),
        },
      },
      size: {
        xs: {
          paddingHorizontal: 10,
          paddingVertical: 5,
          minHeight: 28,
          borderRadius: 6,
        },
        sm: {
          paddingHorizontal: 14,
          paddingVertical: 8,
          minHeight: 36,
          borderRadius: 8,
        },
        md: {
          paddingHorizontal: 18,
          paddingVertical: 11,
          minHeight: 44,
          borderRadius: 12,
        },
        lg: {
          paddingHorizontal: 24,
          paddingVertical: 14,
          minHeight: 52,
          borderRadius: 14,
        },
        xl: {
          paddingHorizontal: 32,
          paddingVertical: 18,
          minHeight: 60,
          borderRadius: 16,
        },
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  });

  buttonRecipeCache.set(colors, recipe);
  return recipe;
}
