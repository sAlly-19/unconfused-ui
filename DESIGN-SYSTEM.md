# Unconfused UI - Design System Specification

## Visual Identity Principles

Unconfused UI introduces a distinct, modern visual language for mobile and cross-platform apps:

- **Typography**: Clean, highly readable geometric sans-serif scale with defined line-height ratios and structural font weight hierarchy (regular: 400, medium: 500, semibold: 600, bold: 700).
- **Color Palette**: Rich obsidian/slate neutrals for dark mode and alabaster/paper neutrals for light mode. Vibrant indigo-violet accent primary, emerald success, amber warning, and rose danger tokens.
- **Radii & Geometry**: Modern rounded aesthetic (`none: 0`, `sm: 6`, `md: 10`, `lg: 14`, `xl: 20`, `full: 9999`).
- **Borders**: Crisp, hairline (0.5px) and 1px semantic borders for container separation (`border/subtle`, `border/default`, `border/bold`).
- **Shadows & Elevation**: Subtle platform-tuned elevation tokens using native iOS shadow properties and Android `elevation`.

---

## Token Specifications

### Base Token Categories

1. **`colors`**:
   - `neutral`: Scale from 50 to 950.
   - `brand`: Scale from 50 to 950.
   - `success`: Scale from 50 to 950.
   - `warning`: Scale from 50 to 950.
   - `danger`: Scale from 50 to 950.

2. **`semantic` (Light & Dark Theme Mappings)**:
   - `background`: Canvas background color.
   - `surface`: Elevated card/container surface color.
   - `surfaceSubtle`: Secondary subtle surface.
   - `foreground`: Primary text color.
   - `foregroundMuted`: Secondary/muted text color.
   - `border`: Standard border color.
   - `borderSubtle`: Hairline subtle border color.
   - `primary`: Main brand accent background.
   - `primaryForeground`: Text/icon color on primary background.
   - `secondary`: Secondary button/badge background.
   - `secondaryForeground`: Text/icon color on secondary background.
   - `danger`: Destructive accent background.
   - `dangerForeground`: Text color on danger background.

3. **`spacing`**:
   - `0: 0`, `1: 4`, `2: 8`, `3: 12`, `4: 16`, `5: 20`, `6: 24`, `8: 32`, `10: 40`, `12: 48`, `16: 64`.

4. **`radii`**:
   - `none: 0`, `xs: 4`, `sm: 6`, `md: 10`, `lg: 14`, `xl: 20`, `2xl: 28`, `full: 9999`.

5. **`typography`**:
   - `fontSizes`: `xs: 12`, `sm: 14`, `md: 16`, `lg: 18`, `xl: 20`, `2xl: 24`, `3xl: 30`, `4xl: 36`.
   - `lineHeights`: `xs: 16`, `sm: 20`, `md: 24`, `lg: 28`, `xl: 28`, `2xl: 32`, `3xl: 38`, `4xl: 44`.
   - `fontWeights`: `regular: "400"`, `medium: "500"`, `semibold: "600"`, `bold: "700"`.

6. **`motion`**:
   - `spring`: Presets for `snappy`, `bouncy`, `gentle`.
   - `duration`: `fast: 150`, `normal: 250`, `slow: 350`.

7. **`zIndices`**:
   - `hide: -1`, `base: 0`, `dropdown: 1000`, `sticky: 1100`, `overlay: 1300`, `modal: 1400`, `popover: 1500`, `toast: 1700`.
