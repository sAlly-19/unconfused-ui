import React, { useState } from "react";
import {
  BookIcon,
  CodeIcon,
  CopyIcon,
  CheckIcon,
  LayersIcon,
  TerminalIcon,
  SparklesIcon,
  SettingsIcon,
  ShieldCheckIcon,
  BoxPlotIcon,
  SlidersIcon,
  LayoutIcon,
  ActivityIcon,
} from "@unconfused-ui/icons";
import {
  Box,
  HStack,
  Inline,
  Pressable,
  Stack,
  Text,
  VStack,
  AnimatedBox,
  ScrollView,
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

export function DocsScreen(): React.JSX.Element {
  const { semanticColors } = useTheme();
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>("quickstart");

  const copySnippet = (code: string, id: string) => {
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
    { id: "quickstart", label: "Início Rápido & Setup", icon: <TerminalIcon size={16} color={semanticColors.foreground} /> },
    { id: "primitives", label: "Primitivas de Layout", icon: <LayersIcon size={16} color={semanticColors.foreground} /> },
    { id: "forms", label: "Formulários & Inputs", icon: <SlidersIcon size={16} color={semanticColors.foreground} /> },
    { id: "overlays", label: "Overlays & Modais", icon: <BoxPlotIcon size={16} color={semanticColors.foreground} /> },
    { id: "motion", label: "Micro-Interações & Animações", icon: <SparklesIcon size={16} color={semanticColors.foreground} /> },
    { id: "data", label: "Data & Virtualização", icon: <ActivityIcon size={16} color={semanticColors.foreground} /> },
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
          <Button variant="primary" icon={<SparklesIcon size={16} color="#FFF" />}>
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

  return (
    <Stack gap={8}>
      {/* Header */}
      <VStack gap={2}>
        <Inline align="center" gap={2}>
          <Badge variant="primary" size="sm">DOCUMENTAÇÃO OFICIAL</Badge>
          <Badge variant="outline" size="sm">Café - Sistemas & Softwares</Badge>
        </Inline>
        <Text size="3xl" weight="bold" color={semanticColors.foreground} style={{ letterSpacing: -0.8 }}>
          Guia de Arquitetura e Uso
        </Text>
        <Text size="md" color={semanticColors.foregroundMuted} style={{ maxWidth: 780 }}>
          Bem-vindo à documentação oficial da Unconfused UI. Desenvolvida sob o motor perceptual OKLCH, conformidade WCAG 3.0 APCA e primitivas puras React Native.
        </Text>
      </VStack>

      {/* Navigation Pills */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Inline gap={2} style={{ paddingVertical: 4 }}>
          {sections.map((sec) => {
            const isActive = selectedSection === sec.id;
            return (
              <Pressable
                key={sec.id}
                onPress={() => setSelectedSection(sec.id)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 10,
                  backgroundColor: isActive ? semanticColors.primary : semanticColors.surfaceSubtle,
                  borderWidth: 1,
                  borderColor: isActive ? semanticColors.primary : semanticColors.borderSubtle,
                  gap: 6,
                }}
              >
                {React.cloneElement(sec.icon as any, {
                  color: isActive ? "#FFFFFF" : semanticColors.foreground,
                })}
                <Text
                  size="sm"
                  weight={isActive ? "bold" : "medium"}
                  color={isActive ? "#FFFFFF" : semanticColors.foreground}
                >
                  {sec.label}
                </Text>
              </Pressable>
            );
          })}
        </Inline>
      </ScrollView>

      {/* Section Content */}
      <VStack gap={6}>
        {selectedSection === "quickstart" && (
          <VStack gap={4}>
            {/* Step 1 */}
            <Card variant="default">
              <Card.Header>
                <Inline align="center" justify="space-between">
                  <Inline align="center" gap={2}>
                    <Badge variant="primary" size="sm">1</Badge>
                    <Text size="lg" weight="bold" color={semanticColors.foreground}>
                      Instalação dos Pacotes
                    </Text>
                  </Inline>
                  <Button
                    variant="ghost"
                    size="sm"
                    onPress={() => copySnippet(codeSnippets.install, "install")}
                    leftIcon={copiedCode === "install" ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                  >
                    {copiedCode === "install" ? "Copiado!" : "Copiar"}
                  </Button>
                </Inline>
              </Card.Header>
              <Card.Content>
                <Box
                  style={{
                    backgroundColor: withAlpha("#000000", 0.5),
                    borderRadius: 8,
                    padding: 14,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                  }}
                >
                  <Text size="xs" color={semanticColors.primary} style={{ fontFamily: "monospace" }}>
                    {codeSnippets.install}
                  </Text>
                </Box>
              </Card.Content>
            </Card>

            {/* Step 2 */}
            <Card variant="default">
              <Card.Header>
                <Inline align="center" justify="space-between">
                  <Inline align="center" gap={2}>
                    <Badge variant="primary" size="sm">2</Badge>
                    <Text size="lg" weight="bold" color={semanticColors.foreground}>
                      Configuração do ThemeProvider
                    </Text>
                  </Inline>
                  <Button
                    variant="ghost"
                    size="sm"
                    onPress={() => copySnippet(codeSnippets.setup, "setup")}
                    leftIcon={copiedCode === "setup" ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                  >
                    {copiedCode === "setup" ? "Copiado!" : "Copiar"}
                  </Button>
                </Inline>
              </Card.Header>
              <Card.Content>
                <Box
                  style={{
                    backgroundColor: withAlpha("#000000", 0.5),
                    borderRadius: 8,
                    padding: 14,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                  }}
                >
                  <Text size="xs" color={semanticColors.foreground} style={{ fontFamily: "monospace", lineHeight: 18 }}>
                    {codeSnippets.setup}
                  </Text>
                </Box>
              </Card.Content>
            </Card>
          </VStack>
        )}

        {selectedSection === "primitives" && (
          <Card variant="default">
            <Card.Header>
              <Inline align="center" justify="space-between">
                <Text size="lg" weight="bold" color={semanticColors.foreground}>
                  Primitivas de Layout & Estrutura
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => copySnippet(codeSnippets.primitives, "primitives")}
                  leftIcon={copiedCode === "primitives" ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                >
                  {copiedCode === "primitives" ? "Copiado!" : "Copiar"}
                </Button>
              </Inline>
            </Card.Header>
            <Card.Content>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.5),
                  borderRadius: 8,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Text size="xs" color={semanticColors.foreground} style={{ fontFamily: "monospace", lineHeight: 18 }}>
                  {codeSnippets.primitives}
                </Text>
              </Box>
            </Card.Content>
          </Card>
        )}

        {selectedSection === "forms" && (
          <Card variant="default">
            <Card.Header>
              <Inline align="center" justify="space-between">
                <Text size="lg" weight="bold" color={semanticColors.foreground}>
                  Componentes de Formulário & Entrada
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => copySnippet(codeSnippets.forms, "forms")}
                  leftIcon={copiedCode === "forms" ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                >
                  {copiedCode === "forms" ? "Copiado!" : "Copiar"}
                </Button>
              </Inline>
            </Card.Header>
            <Card.Content>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.5),
                  borderRadius: 8,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Text size="xs" color={semanticColors.foreground} style={{ fontFamily: "monospace", lineHeight: 18 }}>
                  {codeSnippets.forms}
                </Text>
              </Box>
            </Card.Content>
          </Card>
        )}

        {selectedSection === "overlays" && (
          <Card variant="default">
            <Card.Header>
              <Inline align="center" justify="space-between">
                <Text size="lg" weight="bold" color={semanticColors.foreground}>
                  Overlays, Toasts e Diálogos
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => copySnippet(codeSnippets.overlays, "overlays")}
                  leftIcon={copiedCode === "overlays" ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                >
                  {copiedCode === "overlays" ? "Copiado!" : "Copiar"}
                </Button>
              </Inline>
            </Card.Header>
            <Card.Content>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.5),
                  borderRadius: 8,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Text size="xs" color={semanticColors.foreground} style={{ fontFamily: "monospace", lineHeight: 18 }}>
                  {codeSnippets.overlays}
                </Text>
              </Box>
            </Card.Content>
          </Card>
        )}

        {selectedSection === "motion" && (
          <Card variant="default">
            <Card.Header>
              <Inline align="center" justify="space-between">
                <Text size="lg" weight="bold" color={semanticColors.foreground}>
                  Micro-Interações, Molas & Gestos Físicos
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => copySnippet(codeSnippets.motion, "motion")}
                  leftIcon={copiedCode === "motion" ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                >
                  {copiedCode === "motion" ? "Copiado!" : "Copiar"}
                </Button>
              </Inline>
            </Card.Header>
            <Card.Content>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.5),
                  borderRadius: 8,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Text size="xs" color={semanticColors.foreground} style={{ fontFamily: "monospace", lineHeight: 18 }}>
                  {codeSnippets.motion}
                </Text>
              </Box>
            </Card.Content>
          </Card>
        )}

        {selectedSection === "data" && (
          <Card variant="default">
            <Card.Header>
              <Inline align="center" justify="space-between">
                <Text size="lg" weight="bold" color={semanticColors.foreground}>
                  DataTables & Virtualização Bidirecional
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => copySnippet(codeSnippets.data, "data")}
                  leftIcon={copiedCode === "data" ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} color={semanticColors.foregroundMuted} />}
                >
                  {copiedCode === "data" ? "Copiado!" : "Copiar"}
                </Button>
              </Inline>
            </Card.Header>
            <Card.Content>
              <Box
                style={{
                  backgroundColor: withAlpha("#000000", 0.5),
                  borderRadius: 8,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <Text size="xs" color={semanticColors.foreground} style={{ fontFamily: "monospace", lineHeight: 18 }}>
                  {codeSnippets.data}
                </Text>
              </Box>
            </Card.Content>
          </Card>
        )}
      </VStack>
    </Stack>
  );
}

DocsScreen.displayName = "DocsScreen";
