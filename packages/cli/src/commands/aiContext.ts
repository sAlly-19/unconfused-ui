export function aiContextCommand() {
  console.log("Generating AI System Context Specification (llms.txt / Cursor / Claude / Antigravity)...");
  
  const aiContextOutput = `# Unconfused UI - AI Coding Context Specification (v2.0)
# Standard: W3C DTCG / OKLCH Perceptual / APCA Accessible / Slot Recipes

## 1. Core Architecture Principles
- Universal React Native Primitives Only (View, Text, Pressable, StyleSheet, Dimensions).
- ZERO Web DOM elements (no <div>, <span>, <button>, <input>, CSS).
- ZERO Hardcoded Hex Strings - Always use semantic theme tokens via 'useTheme()'.
- OKLCH Perceptual Color Scales: generateScale({ seed: "#HEX" }) produces 11 uniform steps (50-950).
- Multi-Part Components: Built with createSlotRecipe({ slots: [...], base, variants, compoundVariants }).
- Responsive Layouts: useBreakpoint() with breakpoints { base: 0, sm: 640, md: 768, lg: 1024, xl: 1280 }.
- Surface Materials: <Surface material="glass" | "frosted" | "matte" | "liquid" | "solid" />.

## 2. Package Directory Map
- @unconfused-ui/tokens: Base scales, OKLCH engine, APCA auditor, DTCG mappings, materials, breakpoints.
- @unconfused-ui/theme: ThemeProvider, useTheme, createTheme({ seed: "#HEX", audit: true }).
- @unconfused-ui/recipes: createRecipe(), createSlotRecipe().
- @unconfused-ui/hooks: useBreakpoint(), resolveResponsiveValue(), useControllableState(), usePressableState().
- @unconfused-ui/primitives: Box, Text, Stack, HStack, VStack, Row, Column, Inline, Surface, Pressable, Spacer, Center, Divider, AspectRatio, Absolute, SafeArea, Portal, AdvancedLayout (Wrap, Flow, Masonry, Overlay, Layer).
- @unconfused-ui/core: 24 component categories (Button, Card, Input, Selection, Forms, Feedback, Dialog, Navigation, ListUI, MediaUI, DataViz, GesturesUI, MobileUI, CompositeUI, etc.).

## 3. Example Seed Theming
\`\`\`tsx
import { createTheme, ThemeProvider } from "@unconfused-ui/theme";

// Generate entire theme from a single seed color with OKLCH + APCA validation:
const myTheme = createTheme({
  seed: "#7C3AED", // Electric Violet
  audit: true,
});
\`\`\`

## 4. Example Slot Recipe Usage
\`\`\`tsx
import { createSlotRecipe } from "@unconfused-ui/recipes";

export const cardRecipe = createSlotRecipe({
  slots: ["root", "header", "title", "content", "footer"],
  base: {
    root: { borderRadius: 12, overflow: "hidden" },
    header: { padding: 16 },
    title: { fontSize: 18, fontWeight: "600" },
    content: { padding: 16 },
    footer: { padding: 16 },
  },
  variants: {
    variant: {
      elevated: { root: { elevation: 4 } },
      bordered: { root: { borderWidth: 1 } },
    },
  },
});
\`\`\`
`;

  console.log(aiContextOutput);
  console.log("AI Context specification generated successfully.");
}
