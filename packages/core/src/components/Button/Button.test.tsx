import { defaultTokens } from "@unconfused-ui/tokens";
import { createTheme } from "@unconfused-ui/theme";

export function testTokensAndTheme() {
  const isNeutralValid = defaultTokens.colors.neutral[500] === "#71717A";
  const customTheme = createTheme({ name: "test-theme" });
  const isThemeValid = customTheme.name === "test-theme";
  return isNeutralValid && isThemeValid;
}
