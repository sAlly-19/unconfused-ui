"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTokensAndTheme = testTokensAndTheme;
const tokens_1 = require("@unconfused-ui/tokens");
const theme_1 = require("@unconfused-ui/theme");
function testTokensAndTheme() {
    const isNeutralValid = tokens_1.defaultTokens.colors.neutral[500] === "#71717A";
    const customTheme = (0, theme_1.createTheme)({ name: "test-theme" });
    const isThemeValid = customTheme.name === "test-theme";
    return isNeutralValid && isThemeValid;
}
