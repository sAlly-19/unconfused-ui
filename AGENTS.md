# Unconfused UI - AI Coding Agent Guidelines

> **Purpose**: Instructions for AI coding assistants working on or generating code with Unconfused UI.

---

## 1. Project Architecture Guidelines

- **Package Boundary Integrity**:
  - `@unconfused-ui/tokens`: Contains pure token scales & semantic theme definitions.
  - `@unconfused-ui/theme`: Provides `ThemeProvider`, `useTheme`, and `createTheme`.
  - `@unconfused-ui/recipes`: Variant recipe engine `createRecipe()`.
  - `@unconfused-ui/primitives`: Layout primitives (`Box`, `Text`, `Stack`, `Inline`, `Surface`, `Pressable`, `Spacer`, `Center`).
  - `@unconfused-ui/core`: High-level UI components (`Button`, `IconButton`, `Badge`, `Avatar`, `Card`, `Separator`, etc.).
  - `@unconfused-ui/cli`: CLI commands (`init`, `add`, `ai-context`, `studio`, `audit`, `sync-tokens`).

- **React Native Primitives Only**:
  - Do NOT introduce web DOM elements (`<div>`, `<span>`, `<button>`, `<input>`) or CSS files into components.
  - Rely exclusively on `react-native` primitives (`View`, `Text`, `Pressable`, `StyleSheet`).

---

## 2. Component Code Conventions

1. **Styling Rules**:
   - Use `createRecipe()` for variants.
   - Access theme tokens via `useTheme()`.
   - Never hardcode hex color strings (e.g. `#FFFFFF` or `#000000`) inside component files. Always use semantic theme tokens (e.g. `theme.colors.background`, `theme.colors.foreground`).

2. **Prop Rules**:
   - Do NOT invent shortcut props like `bg`, `px`, `py`, `color`, `borderColor`.
   - Use `style` or token-based primitive props (`padding`, `gap`, `variant`, `size`).
   - Support `style` overrides for root containers and `contentStyle` / `labelStyle` for child sub-elements.

3. **Accessibility Rules**:
   - Always set appropriate `accessibilityRole`.
   - Add `accessibilityState` for dynamic states (`disabled`, `checked`, `expanded`, `selected`).
   - Ensure minimum touch target size (44x44pt).

4. **Slot Composition Rules**:
   - For multi-part components, create compound sub-components attached to the main export (e.g. `Card.Header`, `Card.Title`, `Card.Content`, `Card.Footer`).

---

## 3. Development Workflow & Commands

- **Build all packages**: `pnpm run build`
- **Typecheck workspace**: `pnpm run typecheck`
- **Run tests**: `pnpm run test`
- **Run Expo example**: `pnpm --filter example start`
