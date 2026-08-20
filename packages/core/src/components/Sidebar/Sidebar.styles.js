"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSidebarNavItemRecipe = getSidebarNavItemRecipe;
const recipes_1 = require("@unconfused-ui/recipes");
const tokens_1 = require("@unconfused-ui/tokens");
function getSidebarNavItemRecipe(colors) {
    return (0, recipes_1.createRecipe)({
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
                    backgroundColor: (0, tokens_1.withAlpha)(colors.foreground, 0.08),
                    borderWidth: 1,
                    borderColor: (0, tokens_1.withAlpha)(colors.foreground, 0.12),
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
