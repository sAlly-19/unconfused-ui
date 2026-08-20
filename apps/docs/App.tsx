import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Card } from "@unconfused-ui/core";
import { Inline, Stack, Surface, Text } from "@unconfused-ui/primitives";
import { ThemeProvider, useTheme } from "@unconfused-ui/theme";

function DocumentationContent() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Stack gap={6}>
          <Stack gap={2}>
            <Text size="3xl" weight="bold" color={theme.colors.foreground}>
              Unconfused UI Documentation
            </Text>
            <Text size="md" color={theme.colors.foregroundMuted}>
              Human and AI-Agent readable design system specification & component guides.
            </Text>
          </Stack>

          <Card variant="bordered">
            <Card.Header>
              <Card.Title>Quick Installation</Card.Title>
            </Card.Header>
            <Card.Content>
              <Surface variant="bordered" style={{ padding: 16 }}>
                <Text style={{ fontFamily: "monospace" }}>npx unconfused init</Text>
                <Text style={{ fontFamily: "monospace", marginTop: 8 }}>npx unconfused add button card badge</Text>
              </Surface>
            </Card.Content>
          </Card>

          <Card variant="bordered">
            <Card.Header>
              <Card.Title>Component API: Button</Card.Title>
            </Card.Header>
            <Card.Content>
              <Stack gap={2}>
                <Text size="sm" weight="semibold">Props:</Text>
                <Text size="sm">- variant: "primary" | "secondary" | "destructive" | "outline" | "ghost"</Text>
                <Text size="sm">- size: "sm" | "md" | "lg"</Text>
                <Text size="sm">- loading: boolean</Text>
                <Text size="sm">{"- slots: { leftIcon, rightIcon, loadingSpinner }"}</Text>
                <Text size="sm">- style, contentStyle, labelStyle: Style overrides</Text>
              </Stack>
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
      <DocumentationContent />
    </ThemeProvider>
  );
}
