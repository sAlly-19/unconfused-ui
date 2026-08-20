import React from "react";
import { View } from "react-native";
import {
  SparklesIcon,
  ZapIcon,
  ShieldCheckIcon,
  LayersIcon,
  GridIcon,
  CodeIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ActivityIcon,
  ServerIcon,
  LockIcon,
} from "@unconfused-ui/icons";
import {
  Box,
  Center,
  HStack,
  Inline,
  Pressable,
  Stack,
  Text,
  VStack,
  AnimatedBox,
} from "@unconfused-ui/primitives";
import {
  Badge,
  Button,
  Card,
  Divider,
  StatTile,
} from "@unconfused-ui/core";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";
import { Logo } from "../components/Logo";

export interface HomeScreenProps {
  onNavigateTo: (targetId: string) => void;
}

export function HomeScreen({ onNavigateTo }: HomeScreenProps) {
  const { theme, semanticColors, activeColorScheme, baseTokens } = useTheme();

  return (
    <Stack gap={10}>
      {/* Hero Presentation */}
      <AnimatedBox isAnimated={true} animationType="spring">
        <Card variant="glass" style={{ overflow: "hidden", position: "relative" }}>
          <Card.Content style={{ paddingVertical: 48, paddingHorizontal: 32 }}>
            <VStack gap={6} style={{ maxWidth: 780 }}>
              {/* Badge & Signature */}
              <Inline align="center" gap={2}>
                <Badge variant="primary" size="md" asChild>
                  <Inline align="center" gap={1.5}>
                    <SparklesIcon size={14} color={baseTokens.colors.white} />
                    <Text size="xs" weight="bold" color={baseTokens.colors.white}>
                      UNCONFUSED UI v2.4
                    </Text>
                  </Inline>
                </Badge>
                <Badge variant="outline" size="md">
                  <Text size="xs" weight="bold" color={semanticColors.primary}>
                    by Café - Sistemas & Softwares
                  </Text>
                </Badge>
              </Inline>

              {/* Main Punchy Title */}
              <VStack gap={2}>
                <Text
                  size="4xl"
                  weight="bold"
                  color={semanticColors.foreground}
                  style={{ letterSpacing: -1.2, lineHeight: 48 }}
                >
                  Universal UI Architecture for Modern Cross-Platform Applications
                </Text>
                <Text
                  size="lg"
                  color={semanticColors.foregroundMuted}
                  style={{ lineHeight: 28, maxWidth: 640 }}
                >
                  Biblioteca enterprise de componentes 100% universais em React Native, projetada para alta performance, conformidade estrita de acessibilidade APCA e integração profunda com IA.
                </Text>
              </VStack>

              {/* Action Buttons */}
              <Inline align="center" gap={3} wrap>
                <Button
                  variant="primary"
                  size="lg"
                  onPress={() => onNavigateTo("foundations")}
                >
                  <Inline align="center" gap={2}>
                    <Text size="sm" weight="bold" color={baseTokens.colors.white}>Explorar Componentes</Text>
                    <ChevronRightIcon size={18} color={baseTokens.colors.white} />
                  </Inline>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onPress={() => onNavigateTo("docs")}
                >
                  <Inline align="center" gap={2}>
                    <CodeIcon size={18} color={semanticColors.foreground} />
                    <Text size="sm" weight="semibold">Ver Documentação</Text>
                  </Inline>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onPress={() => onNavigateTo("usage")}
                >
                  <Inline align="center" gap={2}>
                    <LayersIcon size={18} color={semanticColors.foregroundMuted} />
                    <Text size="sm" weight="medium" color={semanticColors.foregroundMuted}>Modos de Uso</Text>
                  </Inline>
                </Button>
              </Inline>
            </VStack>
          </Card.Content>
        </Card>
      </AnimatedBox>

      {/* Metrics Row */}
      <HStack gap={4} wrap>
        <StatTile
          title="COMPONENTS INCLUDED"
          value="268+"
          trend="+15 added"
          badge={<Badge variant="success" size="sm">Ready</Badge>}
          style={{ flex: 1, minWidth: 200 }}
        />
        <StatTile
          title="SVG VECTOR ICONS"
          value="80+"
          trend="Grid 24x24"
          badge={<Badge variant="primary" size="sm">Universal</Badge>}
          style={{ flex: 1, minWidth: 200 }}
        />
        <StatTile
          title="APCA CONTRAST"
          value="100%"
          trend="Perceptual Lightness"
          badge={<Badge variant="success" size="sm">WCAG 3.0</Badge>}
          style={{ flex: 1, minWidth: 200 }}
        />
        <StatTile
          title="DOM DEPENDENCY"
          value="0%"
          trend="Pure React Native"
          badge={<Badge variant="outline" size="sm">Expo SDK</Badge>}
          style={{ flex: 1, minWidth: 200 }}
        />
      </HStack>

      {/* Engineering Pillars Grid */}
      <VStack gap={4}>
        <VStack gap={1}>
          <Text size="xs" weight="bold" color={semanticColors.primary} style={{ letterSpacing: 1.2, textTransform: "uppercase" }}>
            Arquitetura & Fundamentos
          </Text>
          <Text size="xl" weight="bold" color={semanticColors.foreground}>
            Por que escolher a Unconfused UI?
          </Text>
        </VStack>

        <HStack gap={4} wrap>
          {/* Pillar 1 */}
          <Card variant="default" style={{ flex: 1, minWidth: 280 }}>
            <Card.Content>
              <VStack gap={3}>
                <Box
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "rgba(139, 92, 246, 0.15)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SparklesIcon size={22} color={semanticColors.primary} />
                </Box>
                <VStack gap={1}>
                  <Text size="md" weight="bold" color={semanticColors.foreground}>
                    Motor Perceptual OKLCH & APCA
                  </Text>
                  <Text size="sm" color={semanticColors.foregroundMuted} style={{ lineHeight: 20 }}>
                    Geração algorítmica de temas completos a partir de uma única cor semente, com auditoria de contraste baseada no algoritmo perceptivo do WCAG 3.0.
                  </Text>
                </VStack>
              </VStack>
            </Card.Content>
          </Card>

          {/* Pillar 2 */}
          <Card variant="default" style={{ flex: 1, minWidth: 280 }}>
            <Card.Content>
              <VStack gap={3}>
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
                  <ZapIcon size={22} color={baseTokens.colors.success[500]} />
                </Box>
                <VStack gap={1}>
                  <Text size="md" weight="bold" color={semanticColors.foreground}>
                    Performance Nativa & Zero Lag
                  </Text>
                  <Text size="sm" color={semanticColors.foregroundMuted} style={{ lineHeight: 20 }}>
                    Cache determinístico de receitas com Map/WeakMap, virtualização de 10k+ registros e molas físicas tokenizadas rodando a 60fps constantes.
                  </Text>
                </VStack>
              </VStack>
            </Card.Content>
          </Card>

          {/* Pillar 3 */}
          <Card variant="default" style={{ flex: 1, minWidth: 280 }}>
            <Card.Content>
              <VStack gap={3}>
                <Box
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ShieldCheckIcon size={22} color="#3B82F6" />
                </Box>
                <VStack gap={1}>
                  <Text size="md" weight="bold" color={semanticColors.foreground}>
                    Acessibilidade Universal (A11y)
                  </Text>
                  <Text size="sm" color={semanticColors.foregroundMuted} style={{ lineHeight: 20 }}>
                    Focus trap completo na web, suporte nativo a VoiceOver e TalkBack, semântica quantitativa e live regions para leitores de tela.
                  </Text>
                </VStack>
              </VStack>
            </Card.Content>
          </Card>
        </HStack>
      </VStack>

      {/* Signature Callout */}
      <Card variant="glass">
        <Card.Content>
          <Inline justify="space-between" align="center" wrap gap={4}>
            <VStack gap={1}>
              <Text size="md" weight="bold" color={semanticColors.foreground}>
                Desenvolvido e mantido por Café - Sistemas & Softwares
              </Text>
              <Text size="sm" color={semanticColors.foregroundMuted}>
                Soluções avançadas em engenharia de software, design systems universais e inteligência artificial aplicada.
              </Text>
            </VStack>
            <Button variant="secondary" size="md" onPress={() => onNavigateTo("privacy")}>
              Conhecer Termos & Políticas
            </Button>
          </Inline>
        </Card.Content>
      </Card>
    </Stack>
  );
}
