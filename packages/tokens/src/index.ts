import { baseColors } from "./base/colors";
import { motion } from "./base/motion";
import { radii } from "./base/radii";
import { shadows } from "./base/shadows";
import { spacing } from "./base/spacing";
import { fontSizes, fontWeights, lineHeights } from "./base/typography";
import { zIndices } from "./base/zIndices";
import { materials } from "./base/materials";
import { breakpoints, breakpointOrder } from "./base/breakpoints";
import { darkSemanticTokens } from "./semantic/dark";
import { lightSemanticTokens } from "./semantic/light";

export * from "./types";
export * from "./base/materials";
export * from "./base/breakpoints";
export * from "./oklch";
export * from "./apca";

export { baseColors } from "./base/colors";
export { lightSemanticTokens } from "./semantic/light";
export { darkSemanticTokens } from "./semantic/dark";
export { spacing } from "./base/spacing";
export { radii } from "./base/radii";
export { fontSizes, fontWeights, lineHeights } from "./base/typography";
export { shadows } from "./base/shadows";
export { motion } from "./base/motion";
export { zIndices } from "./base/zIndices";
export { materials } from "./base/materials";
export { breakpoints, breakpointOrder } from "./base/breakpoints";

export const defaultTokens = {
  colors: baseColors,
  semantic: lightSemanticTokens,
  spacing,
  radii,
  fontSizes,
  lineHeights,
  fontWeights,
  shadows,
  motion,
  zIndices,
  materials,
  breakpoints,
};
