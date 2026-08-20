import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, ButtonSize, ButtonVariant, Card } from "@unconfused-ui/core";
import { Inline, Stack, Surface, Text } from "@unconfused-ui/primitives";
import { ThemeProvider, useTheme } from "@unconfused-ui/theme";

function PlaygroundContent() {
  const { theme } = useTheme();
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [size, setSize] = useState<ButtonSize>("md");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const generatedCode = `<Button
  variant="${variant}"
  size="${size}"${loading ? "\n  loading" : ""}${disabled ? "\n  disabled" : ""}
>
  Interactive Button
</Button>`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Stack gap={6}>
          <Text size="2xl" weight="bold" color={theme.colors.foreground}>
            Interactive Playground
          </Text>

          {/* Live Preview Surface */}
          <Surface variant="bordered" style={{ padding: 32, alignItems: "center", justifyContent: "center", minHeight: 160 }}>
            <Button variant={variant} size={size} loading={loading} disabled={disabled}>
              Interactive Button
            </Button>
          </Surface>

          {/* Controls Panel */}
          <Card variant="bordered">
            <Card.Header>
              <Card.Title>Prop Controls</Card.Title>
            </Card.Header>
            <Card.Content>
              <Stack gap={4}>
                <Stack gap={2}>
                  <Text size="sm" weight="semibold">Variant</Text>
                  <Inline gap={2} wrap>
                    {(["primary", "secondary", "destructive", "outline", "ghost"] as ButtonVariant[]).map((v) => (
                      <Button key={v} size="sm" variant={variant === v ? "primary" : "outline"} onPress={() => setVariant(v)}>
                        {v}
                      </Button>
                    ))}
                  </Inline>
                </Stack>

                <Stack gap={2}>
                  <Text size="sm" weight="semibold">Size</Text>
                  <Inline gap={2}>
                    {(["sm", "md", "lg"] as ButtonSize[]).map((s) => (
                      <Button key={s} size="sm" variant={size === s ? "primary" : "outline"} onPress={() => setSize(s)}>
                        {s}
                      </Button>
                    ))}
                  </Inline>
                </Stack>

                <Stack gap={2}>
                  <Text size="sm" weight="semibold">State</Text>
                  <Inline gap={2}>
                    <Button size="sm" variant={loading ? "primary" : "outline"} onPress={() => setLoading(!loading)}>
                      Loading: {loading ? "ON" : "OFF"}
                    </Button>
                    <Button size="sm" variant={disabled ? "primary" : "outline"} onPress={() => setDisabled(!disabled)}>
                      Disabled: {disabled ? "ON" : "OFF"}
                    </Button>
                  </Inline>
                </Stack>
              </Stack>
            </Card.Content>
          </Card>

          {/* Generated Code Panel */}
          <Card variant="subtle">
            <Card.Header>
              <Card.Title>Generated Code</Card.Title>
            </Card.Header>
            <Card.Content>
              <Surface variant="bordered" style={{ padding: 16, backgroundColor: theme.colors.surface }}>
                <Text size="sm" style={{ fontFamily: "monospace" }}>
                  {generatedCode}
                </Text>
              </Surface>
            </Card.Content>
          </Card>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider colorScheme="dark">
      <PlaygroundContent />
    </ThemeProvider>
  );
}
