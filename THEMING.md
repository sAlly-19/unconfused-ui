# Unconfused UI - Theme Engine Specification

## Overview

The theme engine provides type-safe theme management, light/dark mode switching, custom theme overrides, and runtime token extraction.

---

## API & Usage

### 1. `createTheme(options)`

Defines or extends a custom theme.

```tsx
import { createTheme } from "@unconfused-ui/theme";

export const customTheme = createTheme({
  name: "my-custom-theme",
  tokens: {
    colors: {
      brand: {
        500: "#6366F1",
      },
    },
    radii: {
      md: 12,
    },
  },
  semanticTokens: {
    light: {
      primary: "#6366F1",
    },
    dark: {
      primary: "#818CF8",
    },
  },
});
```

---

### 2. `<ThemeProvider>`

Root provider wrapping the app. Automatically syncs with the device color scheme or accepts an explicit `colorScheme` mode (`"light"` | `"dark"` | `"system"`).

```tsx
import { ThemeProvider } from "@unconfused-ui/theme";

export function App() {
  return (
    <ThemeProvider colorScheme="system">
      <YourAppComponents />
    </ThemeProvider>
  );
}
```

---

### 3. `useTheme()`

Hook to access active tokens, semantic tokens, current color scheme, and theme switcher function.

```tsx
import { useTheme } from "@unconfused-ui/theme";

export function MyComponent() {
  const { theme, colorScheme, setColorScheme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      {/* ... */}
    </View>
  );
}
```
