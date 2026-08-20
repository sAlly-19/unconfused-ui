# Unconfused UI - Accessibility (a11y) Specification

## Requirements

Accessibility is a non-negotiable requirement for every component in Unconfused UI.

---

## 1. Native Accessibility Props Mapping

Every component must pass through and implement standard React Native accessibility properties:

- `accessibilityRole`: Explicit role definition (`"button"`, `"header"`, `"checkbox"`, `"switch"`, `"image"`, `"link"`, `"none"`).
- `accessibilityLabel`: Clear text description for screen readers (VoiceOver & TalkBack).
- `accessibilityHint`: Contextual hint explaining the outcome of interacting with the element.
- `accessibilityState`: Dynamic state object (`{ disabled, selected, checked, expanded, busy }`).
- `accessibilityValue`: Numeric or text range value (`{ min, max, now, text }`).

---

## 2. Minimum Touch Targets

Interactive elements (`Pressable`, `Button`, `IconButton`, `Checkbox`, `Switch`, `Radio`) MUST guarantee a minimum touch target size of **44 x 44 pt** on iOS and **48 x 48 dp** on Android, using `hitSlop` padding when visual component dimensions are smaller.

---

## 3. Contrast Ratios

Default light and dark theme color combinations MUST pass WCAG 2.1 Level AA contrast guidelines (minimum 4.5:1 ratio for normal text and 3:1 for large text / UI boundaries).

---

## 4. Keyboard Navigation & Screen Readers

Overlays, sheets, and dialogs must support:
- Hardware Back button handler on Android.
- Escape key keydown handler on Web.
- Trapping focus inside active modal dialogs.
