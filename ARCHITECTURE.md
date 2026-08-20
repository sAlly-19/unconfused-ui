# Unconfused UI - Architecture Specification

> **Core Philosophy**:
> *"Beautiful by default. Completely customizable. Composable by design. Native when it matters. Expo first. Owned by the developer."*

---

## 1. System Architecture Overview

Unconfused UI is designed from the ground up for React Native and Expo. It avoids web-only DOM abstractions in its core layer while maintaining full support for React Native Web.

The architecture is layered in strict dependency order:

```
+-------------------------------------------------------------------+
|                        User Application                           |
+---------------------------------+---------------------------------+
                                  |
            +---------------------+---------------------+
            |                                           |
            v                                           v
  [@unconfused-ui/core]                         [components/ui/*]
  (Package Import Mode)                         (Owned Component Mode)
            |                                           |
            +---------------------+---------------------+
                                  |
                                  v
                       [@unconfused-ui/primitives]
                                  |
                   +--------------+--------------+
                   v                             v
          [@unconfused-ui/theme]       [@unconfused-ui/recipes]
                   |                             |
                   v                             |
          [@unconfused-ui/tokens] <--------------+
```

---

## 2. Monorepo & Package Boundaries

- **`@unconfused-ui/tokens`**:
  Pure JS/TS objects containing base design tokens (colors, spacing, radii, font sizes, weights, shadows, motion, zIndex) and semantic color mappings for light and dark modes. Zero external dependencies.

- **`@unconfused-ui/theme`**:
  Provides `createTheme()`, `ThemeProvider`, `useTheme()`, and color scheme resolution. Manages dynamic runtime theme switching without unnecessary component re-renders.

- **`@unconfused-ui/recipes`**:
  Type-safe variant generator function `createRecipe()` optimized for React Native `StyleSheet` objects. Produces cached style declarations based on props, variants, and compound variants.

- **`@unconfused-ui/hooks`**:
  Utility hooks for React Native UI (`useControllableState`, `usePressableState`, `useColorScheme`).

- **`@unconfused-ui/primitives`**:
  Unstyled layout components (`Box`, `Text`, `Stack`, `Inline`, `Surface`, `Pressable`, `Spacer`, `Center`). Built strictly using `react-native` primitives (`View`, `Text`, `Pressable`).

- **`@unconfused-ui/core`**:
  Higher-level composable UI components (`Button`, `IconButton`, `Badge`, `Avatar`, `Card`, `Separator`, `Input`, etc.) constructed using primitives, recipes, and tokens.

- **`@unconfused-ui/cli`**:
  Node.js CLI executable (`unconfused`) providing:
  - `init`: Scaffolds theme configuration and root providers.
  - `add <component>`: Installs or copies component code into `components/ui/` (Owned mode) or configures package imports.
  - `ai-context`: Exports structured context for AI agents.
  - `audit`: Scans codebase for design token drift and accessibility issues.
  - `sync-tokens`: Bi-directional W3C design tokens sync.

---

## 3. Strict Architectural Rules

1. **React Native First**: Never import `react-dom`, `html` elements, or web-only libraries into `@unconfused-ui/primitives` or `@unconfused-ui/core`.
2. **No Prop Bloat**: Visual customization must be handled via `style`, theme tokens, recipes, or slot composition—never by adding dozens of individual props like `bg`, `px`, `py`, `textColor`.
3. **Preserve Native Props**: Components extending React Native elements must pass through standard props (`PressableProps`, `TextProps`, `TextInputProps`, `ViewProps`).
4. **Slot Composition Over Monoliths**: Complex components MUST expose sub-components (e.g. `Card.Header`, `Card.Content`) or a `slots` prop.
5. **Dark Mode & Semantics**: Never hardcode hex color strings inside component implementations. Always use semantic theme tokens (e.g. `colors.background`, `colors.foreground`, `colors.primary`).
