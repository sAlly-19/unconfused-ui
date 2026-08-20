# Unconfused UI

> **Beautiful by default. Completely customizable. Composable by design. Native when it matters. Expo first. Owned by the developer.**

Unconfused UI is a **React Native and Expo-first UI system** designed to help developers build beautiful, accessible and customizable applications without locking them into a rigid component library.

It combines a powerful design system, composable components, semantic theming, reusable primitives and an architecture that allows developers to either consume the library as a package or own and customize the component source code directly.

## Why Unconfused UI?

Building UI for React Native often forces developers to choose between two extremes:

- Use a complete UI library and lose flexibility.
- Build every component from scratch.

Unconfused UI aims to provide a third option.

You can use the components directly from the package:

```tsx
import { Button } from '@unconfused-ui/core';

export function App() {
  return (
    <Button>
      Continue
    </Button>
  );
}

Or use Owned Component Mode, where the component source code lives inside your application:

components/
└── ui/
    └── button.tsx

This means you can start quickly without giving up control over your UI.

Core Principles
React Native First

Unconfused UI is designed primarily for React Native and Expo.

The core packages avoid DOM abstractions and web-only dependencies, while maintaining support for React Native Web.

React Native
      │
      ├── iOS
      ├── Android
      └── Web

The goal is to provide a consistent development experience across platforms without treating React Native as an afterthought.

Learn more:

Platform Support
Architecture

Expo First

Unconfused UI is designed with Expo projects in mind.

The architecture prioritizes compatibility with:

Expo
Expo Go
Metro
React Native
React Native Web

The project avoids requiring a complex native setup for its core functionality whenever possible.

Developer Ownership

A component library should not become a black box.

Unconfused UI supports two ways of consuming components.

Package Mode

Import components directly from the library:

import { Button, Card, Input } from '@unconfused-ui/core';
Owned Component Mode

Add the component source code directly to your project:

components/
└── ui/
    ├── button.tsx
    ├── card.tsx
    └── input.tsx

You can then modify the component however you want.

Learn more about component composition:

Component Composition

Architecture

Unconfused UI follows a layered architecture with strict dependency boundaries.

┌─────────────────────────────────────────────────────────────┐
│                      User Application                       │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              │                               │
              ▼                               ▼
     @unconfused-ui/core              components/ui/*
        Package Mode                  Owned Component Mode
              │                               │
              └───────────────┬───────────────┘
                              ▼
                    @unconfused-ui/primitives
                              │
                   ┌──────────┴──────────┐
                   ▼                     ▼
          @unconfused-ui/theme   @unconfused-ui/recipes
                   │                     │
                   └──────────┬──────────┘
                              ▼
                    @unconfused-ui/tokens

The dependency flow is intentionally one-directional.

tokens
   ↓
theme
   ↓
recipes
   ↓
primitives
   ↓
core
   ↓
application

Each layer has a specific responsibility.

For a complete explanation:

📖 Architecture Specification

Packages

The monorepo is organized into independent packages.

@unconfused-ui/tokens

The foundation of the design system.

Contains design tokens such as:

colors
semantic colors
spacing
typography
font weights
border radii
shadows
motion
z-index

The tokens package should remain lightweight and independent from React.

tokens/
├── colors
├── spacing
├── typography
├── radii
├── shadows
├── motion
└── z-index

Learn more:

📖 Design System

@unconfused-ui/theme

Responsible for runtime theme management.

Provides functionality such as:

ThemeProvider
useTheme()
createTheme()

The theme system supports semantic tokens and theme switching.

Example:

import {
  ThemeProvider,
  createTheme
} from '@unconfused-ui/theme';


const theme = createTheme({
  colors: {
    primary: '#6366F1'
  }
});


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

Learn more:

📖 Theming Guide

@unconfused-ui/recipes

Provides a type-safe variant system for React Native components.

Recipes allow components to define variants without creating large collections of visual props.

Example:

const buttonRecipe = createRecipe({
  variants: {
    variant: {
      primary: {},
      secondary: {},
      ghost: {}
    },


    size: {
      sm: {},
      md: {},
      lg: {}
    }
  },


  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

Recipes should support:

variants
compound variants
default variants
style caching
TypeScript inference
@unconfused-ui/hooks

Reusable hooks for UI components.

Examples include:

useControllableState
usePressableState
useColorScheme

These hooks help keep component behavior consistent across the library.

@unconfused-ui/primitives

The low-level building blocks of Unconfused UI.

Primitives are intentionally unstyled or minimally styled.

Examples:

Box
Text
Stack
Inline
Surface
Pressable
Spacer
Center

They are built using React Native primitives such as:

View
Text
Pressable

Higher-level components should be composed from primitives whenever possible.

@unconfused-ui/core

The main component package.

It contains higher-level UI components built on top of:

tokens
theme
recipes
hooks
primitives

Examples:

Button
IconButton
Badge
Avatar
Card
Separator
Input

Components should follow the following principles:

composable
accessible
theme-aware
customizable
platform-aware
type-safe
@unconfused-ui/icons

Shared icon infrastructure for the UI system.

Icons should be lightweight, tree-shakeable and compatible with React Native and React Native Web.

@unconfused-ui/cli

The command-line interface for working with Unconfused UI.

Planned commands include:

unconfused init

Initialize the project and configure the required providers.

unconfused add button

Add a component to the project.

unconfused ai-context

Generate structured context that can help AI coding agents understand the project's design system.

unconfused audit

Analyze a project for potential issues such as:

design token drift
inconsistent component usage
accessibility problems
unconfused sync-tokens

Synchronize design tokens with external token formats.

Some CLI functionality may still be under active development.

Design System

Unconfused UI separates design decisions into different layers.

Primitive Tokens
        ↓
Semantic Tokens
        ↓
Theme
        ↓
Recipes
        ↓
Components

Components should not directly depend on raw colors.

Avoid:

backgroundColor: '#000000'

Prefer semantic values:

colors.background
colors.foreground
colors.primary
colors.destructive

This allows the same component to work across themes without rewriting its implementation.

Learn more:

📖 Design System

Theming

Themes are built around semantic design tokens.

Example:

colors.background
colors.surface
colors.foreground
colors.muted
colors.primary
colors.primaryForeground
colors.destructive
colors.success
colors.warning

This makes it possible to support:

light mode
dark mode
system preference
custom themes
brand themes

Example:

const theme = createTheme({
  colors: {
    primary: '#6366F1'
  }
});

Learn more:

📖 Theming

Component Composition

Unconfused UI avoids creating massive components with dozens of props.

Instead of this:

<Button
  backgroundColor="blue"
  textColor="white"
  paddingX={20}
  paddingY={12}
  borderRadius={8}
/>

Customization should primarily happen through:

themes
recipes
styles
slots
component composition

Complex components should expose meaningful composition points.

Example:

<Card>
  <Card.Header>
    <Card.Title>
      Profile
    </Card.Title>
  </Card.Header>


  <Card.Content>
    Content
  </Card.Content>


  <Card.Footer>
    <Button>
      Save
    </Button>
  </Card.Footer>
</Card>

Learn more:

📖 Composition

Accessibility

Accessibility is considered part of the component API.

Components should support appropriate React Native accessibility props.

Examples include:

accessibilityRole
accessibilityLabel
accessibilityHint
accessibilityState

Interactive components should also provide appropriate:

focus states
disabled states
semantic roles
readable labels
touch targets

For more information:

♿ Accessibility Guidelines

Platform Support

The project is designed around the following platforms:

Platform	Support
iOS	Target
Android	Target
React Native Web	Target
Expo	First-class target

Platform-specific behavior should be isolated when necessary.

The core architecture should avoid leaking platform-specific logic throughout every component.

Learn more:

📖 Platform Support

AI-Friendly Development

Unconfused UI is designed to be understandable not only by developers, but also by AI coding agents.

The CLI includes a planned command:

unconfused ai-context

The goal is to generate structured information about:

available components
component APIs
design tokens
theme structure
composition rules
architectural constraints

This can help AI agents generate UI that follows the project's design system instead of introducing inconsistent styles or random hardcoded values.

For project-specific AI instructions:

🤖 Agent Guidelines

Repository Structure
unconfused-ui/
│
├── apps/
│   │
│   ├── docs/
│   │   └── Documentation application
│   │
│   ├── example/
│   │   └── Example application
│   │
│   └── playground/
│       └── Component experimentation environment
│
├── packages/
│   │
│   ├── cli/
│   ├── core/
│   ├── hooks/
│   ├── icons/
│   ├── primitives/
│   ├── recipes/
│   ├── theme/
│   └── tokens/
│
├── tooling/
│
├── ACCESSIBILITY.md
├── AGENTS.md
├── ARCHITECTURE.md
├── COMPOSITION.md
├── CONTRIBUTING.md
├── DESIGN-SYSTEM.md
├── MASTER-ROADMAP.md
├── PLATFORM-SUPPORT.md
├── THEMING.md
│
├── package.json
└── turbo.json
Development

Install dependencies:

npm install

Run the development environment:

npm run dev

Build all packages:

npm run build

Run type checking:

npm run typecheck

Run linting:

npm run lint

Run tests:

npm run test

Clean generated files:

npm run clean

The repository uses Turbo to orchestrate tasks across the monorepo.

Contributing

Contributions are welcome.

Before opening a pull request, please review:

📖 Contributing Guide

Contributors should follow the architectural rules defined by the project.

Important principles include:

React Native first.
Avoid unnecessary dependencies.
Do not introduce web-only dependencies into the core layer.
Preserve native component props.
Avoid prop bloat.
Use semantic design tokens.
Prefer composition over monolithic components.
Keep package boundaries clean.
Add tests for new behavior.
Maintain accessibility support.
Project Documentation

The following documents provide detailed information about different parts of Unconfused UI.

Document	Description
📐 ARCHITECTURE.md	Complete architecture and package boundaries
🎨 DESIGN-SYSTEM.md	Design tokens and design system philosophy
🌓 THEMING.md	Theme creation and semantic colors
🧩 COMPOSITION.md	Component composition patterns
♿ ACCESSIBILITY.md	Accessibility requirements and guidelines
📱 PLATFORM-SUPPORT.md	iOS, Android, Web and Expo support
🤖 AGENTS.md	Guidelines for AI coding agents
🛣️ MASTER-ROADMAP.md	Project roadmap and development priorities
🤝 CONTRIBUTING.md	Contribution guidelines
Roadmap

Unconfused UI is under active development.

Current priorities include:

Stabilizing the design token system.
Improving the theme engine.
Expanding test coverage.
Validating recipes and variant performance.
Building a robust component foundation.
Improving Expo compatibility testing.
Developing the CLI.
Improving documentation.
Supporting both Package Mode and Owned Component Mode.
Establishing a reliable release and versioning workflow.

For the complete roadmap:

🛣️ Master Roadmap

Philosophy

Unconfused UI is built around a simple idea:

A UI library should help you move faster without taking ownership away from you.

Components should be:

beautiful by default
customizable when necessary
composable by design
native when it matters
accessible by default
compatible with Expo
understandable by humans and AI
owned by the developer
Status

🚧 Unconfused UI is currently under active development.

The API and package structure may evolve as the project matures.

The project is currently focused on stabilizing its foundations before expanding the component catalog.

License

License information will be added to the repository.

<div align="center">

Built for React Native, Expo and developers who want control over their UI.

Beautiful by default. Completely customizable. Composable by design. Native when it matters. Expo first. Owned by the developer.

</div> ```