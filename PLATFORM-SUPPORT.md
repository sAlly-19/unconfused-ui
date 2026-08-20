# Unconfused UI - Platform Support Guidelines

## Target Platforms

1. **iOS** (Natively rendered via React Native & Expo)
2. **Android** (Natively rendered via React Native & Expo)
3. **Web** (Rendered via React Native Web)

---

## 1. Platform Encapsulation Strategy

- **Core Primitives First**: Components are built using core `react-native` primitives (`View`, `Text`, `Pressable`, `StyleSheet`).
- **Platform Files**: When platform APIs diverge significantly, separate implementation files are used:
  - `Component.native.tsx`
  - `Component.web.tsx`
  - `Component.ios.tsx`
  - `Component.android.tsx`
- **Platform-Specific Prop Handling**: Use `Platform.select()` sparingly for minor inline differences (e.g. shadow elevation vs iOS shadow props).

---

## 2. Web (React Native Web) Compatibility Rules

- Do NOT rely on DOM-only APIs (`document`, `window`, `localStorage`, `CSS animations`) in core packages.
- Ensure all custom gestures fall back gracefully to standard mouse/pointer click events on Web.
- Test web rendering using `apps/example` web target (`npx expo start --web`).
