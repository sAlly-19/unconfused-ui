"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageModesScreen = UsageModesScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const icons_1 = require("@unconfused-ui/icons");
const primitives_1 = require("@unconfused-ui/primitives");
const core_1 = require("@unconfused-ui/core");
const theme_1 = require("@unconfused-ui/theme");
const core_2 = require("@unconfused-ui/core");
const tokens_1 = require("@unconfused-ui/tokens");
function UsageModesScreen() {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const { toast } = (0, core_2.useToast)();
    const [copiedKey, setCopiedKey] = (0, react_1.useState)(null);
    const copyText = (text, key) => {
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
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 8, children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [(0, jsx_runtime_1.jsx)(core_1.Badge, { variant: "primary", size: "sm", children: "MODOS DE ADO\u00C7\u00C3O" }), (0, jsx_runtime_1.jsx)(core_1.Badge, { variant: "outline", size: "sm", children: "Caf\u00E9 - Sistemas & Softwares" })] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "3xl", weight: "bold", color: semanticColors.foreground, style: { letterSpacing: -0.8 }, children: "Tr\u00EAs Modos Flex\u00EDveis de Uso" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", color: semanticColors.foregroundMuted, style: { maxWidth: 740 }, children: "A Unconfused UI foi projetada para se adaptar perfeitamente ao seu fluxo de trabalho: desde a instala\u00E7\u00E3o padr\u00E3o como pacote NPM monorepo at\u00E9 a c\u00F3pia granular de c\u00F3digo e agentes aut\u00F4nomos de IA." })] }), (0, jsx_runtime_1.jsxs)(primitives_1.HStack, { gap: 4, wrap: true, children: [(0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "glass", style: { flex: 1, minWidth: 280 }, children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: 10,
                                                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.brand[500], 0.15),
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }, children: (0, jsx_runtime_1.jsx)(icons_1.LayersIcon, { size: 20, color: baseTokens.colors.brand[500] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "1. Modo Pacote NPM" }), (0, jsx_runtime_1.jsx)(core_1.Card.Description, { children: "Ideal para projetos com pipelines tradicionais e controle centralizado de vers\u00F5es." })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: "Instala\u00E7\u00E3o direta via gerenciador de pacotes:" }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.6),
                                                borderRadius: 8,
                                                padding: 12,
                                                borderWidth: 1,
                                                borderColor: semanticColors.border,
                                            }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: baseTokens.colors.brand[500], style: { fontFamily: "monospace" }, children: "npm i @unconfused-ui/core" }), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => copyText("npm i @unconfused-ui/core", "m1"), children: copiedKey === "m1" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: baseTokens.colors.success[500] }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }) })] }) })] }) })] }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "glass", style: { flex: 1, minWidth: 280 }, children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: 10,
                                                backgroundColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.15),
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }, children: (0, jsx_runtime_1.jsx)(icons_1.CodeIcon, { size: 20, color: semanticColors.primary }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "2. Modo CLI / Copy-Paste" }), (0, jsx_runtime_1.jsx)(core_1.Card.Description, { children: "C\u00F3digo 100% no seu reposit\u00F3rio estilo Shadcn para controle total e customiza\u00E7\u00F5es ilimitadas." })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: "Adicione componentes isolados via CLI:" }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.6),
                                                borderRadius: 8,
                                                padding: 12,
                                                borderWidth: 1,
                                                borderColor: semanticColors.border,
                                            }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, style: { fontFamily: "monospace" }, children: "npx unconfused add button dialog" }), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => copyText("npx unconfused add button dialog", "m2"), children: copiedKey === "m2" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: baseTokens.colors.success[500] }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }) })] }) })] }) })] }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "glass", style: { flex: 1, minWidth: 280 }, children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: 10,
                                                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.success[500], 0.15),
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }, children: (0, jsx_runtime_1.jsx)(icons_1.SparklesIcon, { size: 20, color: baseTokens.colors.success[500] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "3. Modo AI-Native" }), (0, jsx_runtime_1.jsx)(core_1.Card.Description, { children: "Projetado para agentes LLM gerarem interfaces perfeitas com tipagem estrita e zero alucina\u00E7\u00E3o de estilos." })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: "Gere contexto para prompts e assistentes de c\u00F3digo:" }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.6),
                                                borderRadius: 8,
                                                padding: 12,
                                                borderWidth: 1,
                                                borderColor: semanticColors.border,
                                            }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: baseTokens.colors.success[500], style: { fontFamily: "monospace" }, children: "npx unconfused ai-context" }), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => copyText("npx unconfused ai-context", "m3"), children: copiedKey === "m3" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: baseTokens.colors.success[500] }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }) })] }) })] }) })] })] }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsxs)(core_1.Card.Header, { children: [(0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "Exemplo de Integra\u00E7\u00E3o Completa" }), (0, jsx_runtime_1.jsx)(core_1.Card.Description, { children: "Como montar uma tela moderna utilizando o motor de temas, slots e componentes compostos." })] }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.6),
                                borderRadius: 10,
                                padding: 16,
                                borderWidth: 1,
                                borderColor: semanticColors.border,
                            }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, style: { fontFamily: "monospace", lineHeight: 19 }, children: `import React, { useState } from "react";
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
}` }) }) })] })] }));
}
UsageModesScreen.displayName = "UsageModesScreen";
