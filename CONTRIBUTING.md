# Unconfused UI - Contributing Guide

Thank you for contributing to Unconfused UI!

---

## Workspace Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development environment:
   ```bash
   pnpm dev
   ```
4. Run tests:
   ```bash
   pnpm test
   ```
5. Run typechecking:
   ```bash
   pnpm typecheck
   ```

---

## Component Definition of Done (DoD)

Before opening a pull request for a new component or feature, ensure all criteria are met:

- [ ] Strict TypeScript types with no `any`.
- [ ] Recipe & variant definition completed.
- [ ] Theme token usage verified (no hardcoded color hex strings).
- [ ] Custom style overrides supported (`style`, `contentStyle`, etc.).
- [ ] Accessibility traits (`accessibilityRole`, `accessibilityLabel`, touch targets) implemented.
- [ ] Unit & integration tests written and passing (`pnpm test`).
- [ ] Integrated into `apps/example` Expo app.
- [ ] Documented in `apps/docs`.
- [ ] Added to `apps/playground`.
