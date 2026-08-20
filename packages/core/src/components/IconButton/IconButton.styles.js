"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconButtonRecipe = getIconButtonRecipe;
const recipes_1 = require("@unconfused-ui/recipes");
function getIconButtonRecipe(colors) {
    return (0, recipes_1.createRecipe)({
        base: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999,
            borderWidth: 1,
        },
        variants: {
            variant: {
                primary: {
                    backgroundColor: colors.primary,
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    shadowColor: colors.primary,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.35,
                    shadowRadius: 6,
                    elevation: 4,
                },
                secondary: {
                    backgroundColor: colors.surfaceSubtle,
                    borderColor: colors.border,
                },
                destructive: {
                    backgroundColor: colors.danger,
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    shadowColor: colors.danger,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 4,
                },
                outline: {
                    backgroundColor: "transparent",
                    borderColor: colors.borderBold,
                },
                ghost: {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                },
                glass: {
                    backgroundColor: "rgba(16, 18, 30, 0.7)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                },
            },
            size: {
                xs: {
                    width: 28,
                    height: 28,
                },
                sm: {
                    width: 36,
                    height: 36,
                },
                md: {
                    width: 44,
                    height: 44,
                },
                lg: {
                    width: 52,
                    height: 52,
                },
                xl: {
                    width: 60,
                    height: 60,
                },
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    });
}
