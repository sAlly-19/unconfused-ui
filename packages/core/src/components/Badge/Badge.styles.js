"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgeRecipe = getBadgeRecipe;
const recipes_1 = require("@unconfused-ui/recipes");
const tokens_1 = require("@unconfused-ui/tokens");
function getBadgeRecipe(colors) {
    return (0, recipes_1.createRecipe)({
        base: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 8,
            borderWidth: 1,
        },
        variants: {
            variant: {
                primary: {
                    backgroundColor: (0, tokens_1.withAlpha)(colors.primary, 0.16),
                    borderColor: (0, tokens_1.withAlpha)(colors.primary, 0.35),
                },
                secondary: {
                    backgroundColor: colors.surfaceSubtle,
                    borderColor: colors.border,
                },
                success: {
                    backgroundColor: (0, tokens_1.withAlpha)("#10B981", 0.16),
                    borderColor: (0, tokens_1.withAlpha)("#10B981", 0.35),
                },
                warning: {
                    backgroundColor: (0, tokens_1.withAlpha)("#F59E0B", 0.16),
                    borderColor: (0, tokens_1.withAlpha)("#F59E0B", 0.35),
                },
                danger: {
                    backgroundColor: (0, tokens_1.withAlpha)(colors.danger, 0.16),
                    borderColor: (0, tokens_1.withAlpha)(colors.danger, 0.35),
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
