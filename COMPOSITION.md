# Unconfused UI - Composition & Slot Specification

## Principles of Composition

Unconfused UI components prefer explicit compound composition over monolithic prop objects.

---

## 1. Compound Component Pattern

Complex UI components are broken down into logical sub-components attached as static properties:

```tsx
<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Card description text</Card.Description>
  </Card.Header>
  <Card.Content>
    <Text>Main content inside card</Text>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Action</Button>
  </Card.Footer>
</Card>
```

---

## 2. Slot Overrides (`slots` Prop)

When a component renders internal sub-elements automatically, it accepts a `slots` prop allowing custom components to be injected:

```tsx
<Button
  variant="primary"
  slots={{
    icon: CustomIcon,
    label: CustomText,
  }}
>
  Click Me
</Button>
```

---

## 3. Style Overrides

All visual components support overriding container styles and specific internal element styles:

```tsx
<Button
  style={{ borderRadius: 20 }}
  contentStyle={{ paddingHorizontal: 24 }}
  labelStyle={{ fontWeight: "700" }}
>
  Customized Button
</Button>
```

---

## 4. `asChild` Primitive Polymorphism

Where applicable in React Native, primitives support rendering custom child elements while passing down style and gesture handlers seamlessly.
