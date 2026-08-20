"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsScreen = DocsScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const icons_1 = require("@unconfused-ui/icons");
const primitives_1 = require("@unconfused-ui/primitives");
const core_1 = require("@unconfused-ui/core");
const theme_1 = require("@unconfused-ui/theme");
const core_2 = require("@unconfused-ui/core");
const tokens_1 = require("@unconfused-ui/tokens");
function DocsScreen() {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const { toast } = (0, core_2.useToast)();
    const [copiedCode, setCopiedCode] = (0, react_1.useState)(null);
    const [selectedSection, setSelectedSection] = (0, react_1.useState)("quickstart");
    const copySnippet = (code, id) => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(code);
        }
        setCopiedCode(id);
        toast({
            title: "Código copiado!",
            description: "Snippet copiado para a área de transferência com sucesso.",
            variant: "success",
        });
        setTimeout(() => setCopiedCode(null), 2000);
    };
    const sections = [
        { id: "quickstart", label: "Início Rápido & Setup", icon: (0, jsx_runtime_1.jsx)(icons_1.TerminalIcon, { size: 16, color: semanticColors.foreground }) },
        { id: "primitives", label: "Primitivas de Layout", icon: (0, jsx_runtime_1.jsx)(icons_1.LayersIcon, { size: 16, color: semanticColors.foreground }) },
        { id: "forms", label: "Formulários & Inputs", icon: (0, jsx_runtime_1.jsx)(icons_1.SlidersIcon, { size: 16, color: semanticColors.foreground }) },
        { id: "overlays", label: "Overlays & Modais", icon: (0, jsx_runtime_1.jsx)(icons_1.BoxPlotIcon, { size: 16, color: semanticColors.foreground }) },
        { id: "motion", label: "Micro-Interações & Animações", icon: (0, jsx_runtime_1.jsx)(icons_1.SparklesIcon, { size: 16, color: semanticColors.foreground }) },
        { id: "data", label: "Data & Virtualização", icon: (0, jsx_runtime_1.jsx)(icons_1.ActivityIcon, { size: 16, color: semanticColors.foreground }) },
    ];
    const codeSnippets = {
        install: `npm install @unconfused-ui/core @unconfused-ui/primitives @unconfused-ui/icons @unconfused-ui/theme @unconfused-ui/tokens @unconfused-ui/hooks @unconfused-ui/recipes`,
        setup: `import React from "react";
import { ThemeProvider } from "@unconfused-ui/theme";
import { Button, Card, Text } from "@unconfused-ui/core";
import { SparklesIcon } from "@unconfused-ui/icons";

export default function App() {
  return (
    <ThemeProvider defaultColorScheme="dark">
      <Card variant="glass">
        <Card.Header>
          <Card.Title>Unconfused UI Pro</Card.Title>
          <Card.Description>Assinado por Café - Sistemas & Softwares</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text size="sm">Interface fluida, acessível e sem complicação.</Text>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary" icon={<SparklesIcon size={16} color={baseTokens.colors.white} />}>
            Começar Agora
          </Button>
        </Card.Footer>
      </Card>
    </ThemeProvider>
  );
}`,
        primitives: `import { Stack, HStack, VStack, Inline, Box, Surface, SplitView, SwipeableRow } from "@unconfused-ui/primitives";

export function LayoutExample() {
  return (
    <VStack gap={4}>
      {/* Layout com animação escalonada */}
      <Stack direction="vertical" gap={3} staggerDelay={40}>
        <Surface variant="glass" padding={4}>
          <Text size="md" weight="bold">Item 1 (Animado)</Text>
        </Surface>
        <Surface variant="glass" padding={4}>
          <Text size="md" weight="bold">Item 2 (Animado)</Text>
        </Surface>
      </Stack>

      {/* SplitView responsivo: Mestre-Detalhe */}
      <SplitView
        master={<Text>Lista de Conversas</Text>}
        detail={<Text>Chat Ativo</Text>}
        masterWidth={300}
      />
    </VStack>
  );
}`,
        forms: `import { Input, Combobox, SegmentedControl, FileDropzone, Stepper } from "@unconfused-ui/core";

export function FormExample() {
  const [segValue, setSegValue] = React.useState("geral");

  return (
    <VStack gap={4}>
      <Input label="Nome Completo" placeholder="Digite seu nome..." />

      <SegmentedControl
        options={[
          { label: "Geral", value: "geral" },
          { label: "Segurança", value: "seguranca" },
          { label: "Avançado", value: "avancado" },
        ]}
        value={segValue}
        onValueChange={setSegValue}
      />

      <Combobox
        placeholder="Escolha um país..."
        options={[
          { label: "Brasil", value: "br" },
          { label: "Portugal", value: "pt" },
          { label: "Estados Unidos", value: "us" },
        ]}
      />

      <FileDropzone
        title="Arraste seus comprovantes"
        onFilesSelected={(files) => console.log(files)}
      />
    </VStack>
  );
}`,
        overlays: `import { Dialog, Sheet, Popover, toast, ToastProvider } from "@unconfused-ui/core";

export function OverlaysExample() {
  return (
    <Inline gap={3}>
      <Button
        variant="primary"
        onPress={() => toast.success("Operação concluída com sucesso!")}
      >
        Disparar Toast (useSyncExternalStore)
      </Button>

      <Dialog>
        <Dialog.Trigger>
          <Button variant="outline">Abrir Diálogo</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Confirmar Exclusão?</Dialog.Title>
            <Dialog.Description>Esta ação é irreversível.</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Button variant="danger">Confirmar</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </Inline>
  );
}`,
        motion: `import { AnimatedBox, ScrollView } from "@unconfused-ui/primitives";
import { useMagneticHover, useFocusRing } from "@unconfused-ui/hooks";

export function MotionExample() {
  const { magneticStyle, onPointerMove, onPointerLeave } = useMagneticHover({ strength: 0.4 });

  return (
    <ScrollView
      onPullToRefresh={async () => {
        await new Promise((r) => setTimeout(r, 1500));
      }}
    >
      <AnimatedBox isAnimated={true} animationType="spring" delay={100}>
        <Button style={magneticStyle} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
          Botão com Efeito Magnético
        </Button>
      </AnimatedBox>
    </ScrollView>
  );
}`,
        data: `import { DataTable } from "@unconfused-ui/core";

const columns = [
  { header: "ID", accessorKey: "id", width: 80 },
  { header: "Cliente", accessorKey: "name", width: 180, sortable: true },
  { header: "Status", accessorKey: "status", width: 120 },
  { header: "Valor", accessorKey: "amount", width: 120, align: "right" },
];

export function TableExample() {
  return (
    <DataTable
      columns={columns}
      data={[
        { id: "01", name: "Empresa Café", status: "Ativo", amount: "R$ 4.500,00" },
        { id: "02", name: "Studio Pro", status: "Pendente", amount: "R$ 1.200,00" },
      ]}
      virtualizeColumns={true}
      maxHeight={360}
    />
  );
}`,
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 8, children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [(0, jsx_runtime_1.jsx)(core_1.Badge, { variant: "primary", size: "sm", children: "DOCUMENTA\u00C7\u00C3O OFICIAL" }), (0, jsx_runtime_1.jsx)(core_1.Badge, { variant: "outline", size: "sm", children: "Caf\u00E9 - Sistemas & Softwares" })] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "3xl", weight: "bold", color: semanticColors.foreground, style: { letterSpacing: -0.8 }, children: "Guia de Arquitetura e Uso" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", color: semanticColors.foregroundMuted, style: { maxWidth: 780 }, children: "Bem-vindo \u00E0 documenta\u00E7\u00E3o oficial da Unconfused UI. Desenvolvida sob o motor perceptual OKLCH, conformidade WCAG 3.0 APCA e primitivas puras React Native." })] }), (0, jsx_runtime_1.jsx)(primitives_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, children: (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, style: { paddingVertical: 4 }, children: sections.map((sec) => {
                        const isActive = selectedSection === sec.id;
                        return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => setSelectedSection(sec.id), style: {
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 8,
                                paddingHorizontal: 14,
                                borderRadius: 10,
                                backgroundColor: isActive ? semanticColors.primary : semanticColors.surfaceSubtle,
                                borderWidth: 1,
                                borderColor: isActive ? semanticColors.primary : semanticColors.borderSubtle,
                                gap: 6,
                            }, children: [react_1.default.cloneElement(sec.icon, {
                                    color: isActive ? baseTokens.colors.white : semanticColors.foreground,
                                }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: isActive ? "bold" : "medium", color: isActive ? baseTokens.colors.white : semanticColors.foreground, children: sec.label })] }, sec.id));
                    }) }) }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 6, children: [selectedSection === "quickstart" && ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 4, children: [(0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [(0, jsx_runtime_1.jsx)(core_1.Badge, { variant: "primary", size: "sm", children: "1" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: "Instala\u00E7\u00E3o dos Pacotes" })] }), (0, jsx_runtime_1.jsx)(core_1.Button, { variant: "ghost", size: "sm", onPress: () => copySnippet(codeSnippets.install, "install"), leftIcon: copiedCode === "install" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: baseTokens.colors.success[500] }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }), children: copiedCode === "install" ? "Copiado!" : "Copiar" })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.5),
                                                borderRadius: 8,
                                                padding: 14,
                                                borderWidth: 1,
                                                borderColor: semanticColors.border,
                                            }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, style: { fontFamily: "monospace" }, children: codeSnippets.install }) }) })] }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [(0, jsx_runtime_1.jsx)(core_1.Badge, { variant: "primary", size: "sm", children: "2" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: "Configura\u00E7\u00E3o do ThemeProvider" })] }), (0, jsx_runtime_1.jsx)(core_1.Button, { variant: "ghost", size: "sm", onPress: () => copySnippet(codeSnippets.setup, "setup"), leftIcon: copiedCode === "setup" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: "#10B981" }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }), children: copiedCode === "setup" ? "Copiado!" : "Copiar" })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.5),
                                                borderRadius: 8,
                                                padding: 14,
                                                borderWidth: 1,
                                                borderColor: semanticColors.border,
                                            }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, style: { fontFamily: "monospace", lineHeight: 18 }, children: codeSnippets.setup }) }) })] })] })), selectedSection === "primitives" && ((0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: "Primitivas de Layout & Estrutura" }), (0, jsx_runtime_1.jsx)(core_1.Button, { variant: "ghost", size: "sm", onPress: () => copySnippet(codeSnippets.primitives, "primitives"), leftIcon: copiedCode === "primitives" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: "#10B981" }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }), children: copiedCode === "primitives" ? "Copiado!" : "Copiar" })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                        backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.5),
                                        borderRadius: 8,
                                        padding: 14,
                                        borderWidth: 1,
                                        borderColor: semanticColors.border,
                                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, style: { fontFamily: "monospace", lineHeight: 18 }, children: codeSnippets.primitives }) }) })] })), selectedSection === "forms" && ((0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: "Componentes de Formul\u00E1rio & Entrada" }), (0, jsx_runtime_1.jsx)(core_1.Button, { variant: "ghost", size: "sm", onPress: () => copySnippet(codeSnippets.forms, "forms"), leftIcon: copiedCode === "forms" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: "#10B981" }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }), children: copiedCode === "forms" ? "Copiado!" : "Copiar" })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                        backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.5),
                                        borderRadius: 8,
                                        padding: 14,
                                        borderWidth: 1,
                                        borderColor: semanticColors.border,
                                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, style: { fontFamily: "monospace", lineHeight: 18 }, children: codeSnippets.forms }) }) })] })), selectedSection === "overlays" && ((0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: "Overlays, Toasts e Di\u00E1logos" }), (0, jsx_runtime_1.jsx)(core_1.Button, { variant: "ghost", size: "sm", onPress: () => copySnippet(codeSnippets.overlays, "overlays"), leftIcon: copiedCode === "overlays" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: "#10B981" }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }), children: copiedCode === "overlays" ? "Copiado!" : "Copiar" })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                        backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.5),
                                        borderRadius: 8,
                                        padding: 14,
                                        borderWidth: 1,
                                        borderColor: semanticColors.border,
                                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, style: { fontFamily: "monospace", lineHeight: 18 }, children: codeSnippets.overlays }) }) })] })), selectedSection === "motion" && ((0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: "Micro-Intera\u00E7\u00F5es, Molas & Gestos F\u00EDsicos" }), (0, jsx_runtime_1.jsx)(core_1.Button, { variant: "ghost", size: "sm", onPress: () => copySnippet(codeSnippets.motion, "motion"), leftIcon: copiedCode === "motion" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: "#10B981" }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }), children: copiedCode === "motion" ? "Copiado!" : "Copiar" })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                        backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.5),
                                        borderRadius: 8,
                                        padding: 14,
                                        borderWidth: 1,
                                        borderColor: semanticColors.border,
                                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, style: { fontFamily: "monospace", lineHeight: 18 }, children: codeSnippets.motion }) }) })] })), selectedSection === "data" && ((0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "default", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: "DataTables & Virtualiza\u00E7\u00E3o Bidirecional" }), (0, jsx_runtime_1.jsx)(core_1.Button, { variant: "ghost", size: "sm", onPress: () => copySnippet(codeSnippets.data, "data"), leftIcon: copiedCode === "data" ? (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 14, color: "#10B981" }) : (0, jsx_runtime_1.jsx)(icons_1.CopyIcon, { size: 14, color: semanticColors.foregroundMuted }), children: copiedCode === "data" ? "Copiado!" : "Copiar" })] }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                        backgroundColor: (0, tokens_1.withAlpha)("#000000", 0.5),
                                        borderRadius: 8,
                                        padding: 14,
                                        borderWidth: 1,
                                        borderColor: semanticColors.border,
                                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, style: { fontFamily: "monospace", lineHeight: 18 }, children: codeSnippets.data }) }) })] }))] })] }));
}
DocsScreen.displayName = "DocsScreen";
