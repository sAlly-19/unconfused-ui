import React, { useState } from "react";
import {
  LayersIcon,
  CodeIcon,
  SparklesIcon,
  TerminalIcon,
  CheckCircleIcon,
  ServerIcon,
  GridIcon,
  CopyIcon,
  CheckIcon,
} from "@unconfused-ui/icons";
import {
  Box,
  HStack,
  Inline,
  Stack,
  Text,
  VStack,
  AnimatedBox,
  ScrollView,
  Pressable,
} from "@unconfused-ui/primitives";
import {
  Badge,
  Button,
  Card,
  Divider,
} from "@unconfused-ui/core";
import { useTheme } from "@unconfused-ui/theme";
import { useToast } from "@unconfused-ui/core";
import { withAlpha } from "@unconfused-ui/tokens";

export function UsageModesScreen(): React.JSX.Element {
  const { semanticColors, baseTokens } = useTheme();
  const { toast } = useToast();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(key);
    toast({
      title: "Copiado!",
      description: "Comando copiado para a área de transferência.",
      variant: "success",
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <Stack gap={8}>
      {/* Header */}
      <VStack gap={2}>
        <Inline align="center" gap={2}>
          <Badge variant="primary" size="sm">MODOS DE ADOÇÃO</Badge>
          <Badge variant="outline" size="sm">Café - Sistemas & Softwares</Badge>
        </Inline>
        <Text size="3xl" weight="bold" color={semanticColors.foreground} style={{ letterSpacing: -0.8 }}>
          Três Modos Flexíveis de Uso
        </Text>
        <Text size="md" color={semanticColors.foregroundMuted} style={{ maxWidth: 740 }}>
          A Unconfused UI foi projetada para se adaptar perfeitamente ao seu fluxo de trabalho: desde a instalação padrão como pacote NPM monorepo até a cópia granular de código e agentes autônomos de IA.
        </Text>
      </VStack>

      {/* The 3 Cards */}
      <HStack gap={4} wrap>
        {/* Mode 1: Package Mode */}
        <Card variant="glass" style={{ flex: 1, minWidth: 280 }}>
          <Card.Header>
            <VStack gap={2}>
              <Box
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: withAlpha(baseTokens.colors.brand[500], 0.15),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LayersIcon size={20} color={baseTokens.colors.brand[500]} />
              </Box>
              <Card.Title>1. Modo Pacote NPM</Card.Title>
              <Card.Description>
                Ideal para projetos com pipelines tradicionais e controle centralizado de versões.
              </Card.Description>
            </VStack>
          </Card.Header>
          <Card.Content>
            <VStack gap={3}>
              <Text size="xs" color={semanticColors.foregroundMuted}>
                Instalação direta via gerenciador de pacotes:
              </Text>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.6),
                  borderRadius: 8,
                  padding: 12,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Inline align="center" justify="space-between">
                  <Text size="xs" color={baseTokens.colors.brand[500]} style={{ fontFamily: "monospace" }}>
                    npm i @unconfused-ui/core
                  </Text>
                  <Pressable onPress={() => copyText("npm i @unconfused-ui/core", "m1")}>
                    {copiedKey === "m1" ? <CheckIcon size={14} color={baseTokens.colors.success[500]} /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                  </Pressable>
                </Inline>
              </Box>
            </VStack>
          </Card.Content>
        </Card>

        {/* Mode 2: Copy-Paste / CLI Mode */}
        <Card variant="glass" style={{ flex: 1, minWidth: 280 }}>
          <Card.Header>
            <VStack gap={2}>
              <Box
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: withAlpha(semanticColors.primary, 0.15),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CodeIcon size={20} color={semanticColors.primary} />
              </Box>
              <Card.Title>2. Modo CLI / Copy-Paste</Card.Title>
              <Card.Description>
                Código 100% no seu repositório estilo Shadcn para controle total e customizações ilimitadas.
              </Card.Description>
            </VStack>
          </Card.Header>
          <Card.Content>
            <VStack gap={3}>
              <Text size="xs" color={semanticColors.foregroundMuted}>
                Adicione componentes isolados via CLI:
              </Text>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.6),
                  borderRadius: 8,
                  padding: 12,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Inline align="center" justify="space-between">
                  <Text size="xs" color={semanticColors.primary} style={{ fontFamily: "monospace" }}>
                    npx unconfused add button dialog
                  </Text>
                  <Pressable onPress={() => copyText("npx unconfused add button dialog", "m2")}>
                    {copiedKey === "m2" ? <CheckIcon size={14} color={baseTokens.colors.success[500]} /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                  </Pressable>
                </Inline>
              </Box>
            </VStack>
          </Card.Content>
        </Card>

        {/* Mode 3: AI-Native Agent Mode */}
        <Card variant="glass" style={{ flex: 1, minWidth: 280 }}>
          <Card.Header>
            <VStack gap={2}>
              <Box
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: withAlpha(baseTokens.colors.success[500], 0.15),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SparklesIcon size={20} color={baseTokens.colors.success[500]} />
              </Box>
              <Card.Title>3. Modo AI-Native</Card.Title>
              <Card.Description>
                Projetado para agentes LLM gerarem interfaces perfeitas com tipagem estrita e zero alucinação de estilos.
              </Card.Description>
            </VStack>
          </Card.Header>
          <Card.Content>
            <VStack gap={3}>
              <Text size="xs" color={semanticColors.foregroundMuted}>
                Gere contexto para prompts e assistentes de código:
              </Text>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.6),
                  borderRadius: 8,
                  padding: 12,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Inline align="center" justify="space-between">
                  <Text size="xs" color={baseTokens.colors.success[500]} style={{ fontFamily: "monospace" }}>
                    npx unconfused ai-context
                  </Text>
                  <Pressable onPress={() => copyText("npx unconfused ai-context", "m3")}>
                    {copiedKey === "m3" ? <CheckIcon size={14} color={baseTokens.colors.success[500]} /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                  </Pressable>
                </Inline>
              </Box>
            </VStack>
          </Card.Content>
        </Card>
      </HStack>

      {/* Code Integration Walkthrough */}
      <Card variant="default">
        <Card.Header>
          <Card.Title>Exemplo de Integração Completa</Card.Title>
          <Card.Description>
            Como montar uma tela moderna utilizando o motor de temas, slots e componentes compostos.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <Box
            style={{
              backgroundColor: withAlpha("#000000", 0.6),
              borderRadius: 10,
              padding: 16,
              borderWidth: 1,
              borderColor: semanticColors.border,
            }}
          >
            <Text size="xs" color={semanticColors.foreground} style={{ fontFamily: "monospace", lineHeight: 19 }}>
{`import React, { useState } from "react";
import { ThemeProvider } from "@unconfused-ui/theme";
import {
  VStack,
  HStack,
  Text,
  ScrollView,
  SplitView,
} from "@unconfused-ui/primitives";
import {
  Button,
  Card,
  Input,
  Combobox,
  SegmentedControl,
  toast,
} from "@unconfused-ui/core";
import { SparklesIcon, CheckIcon } from "@unconfused-ui/icons";

export function Dashboard() {
  const [tab, setTab] = useState("analytics");

  return (
    <ThemeProvider defaultColorScheme="dark">
      <ScrollView padding={6} gap={4}>
        <HStack justify="space-between" align="center">
          <VStack gap={0}>
            <Text size="2xl" weight="bold">Painel de Controle</Text>
            <Text size="xs" color={withAlpha(baseTokens.colors.white, 0.6)}>Café - Sistemas & Softwares</Text>
          </VStack>
          <Button
            variant="primary"
            icon={<SparklesIcon size={16} color="#FFF" />}
            onPress={() => toast.success("Ação disparada com useSyncExternalStore!")}
          >
            Ação Rápida
          </Button>
        </HStack>

        <SegmentedControl
          options={[
            { label: "Métricas", value: "analytics" },
            { label: "Clientes", value: "clients" },
            { label: "Configurações", value: "settings" },
          ]}
          value={tab}
          onValueChange={setTab}
        />
      </ScrollView>
    </ThemeProvider>
  );
}`}
            </Text>
          </Box>
        </Card.Content>
      </Card>
    </Stack>
  );
}

UsageModesScreen.displayName = "UsageModesScreen";
