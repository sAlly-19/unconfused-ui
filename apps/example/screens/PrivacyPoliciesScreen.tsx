import React from "react";
import {
  ShieldCheckIcon,
  LockIcon,
  CheckCircleIcon,
  ActivityIcon,
  SparklesIcon,
} from "@unconfused-ui/icons";
import {
  Box,
  HStack,
  Inline,
  Stack,
  Text,
  VStack,
  AnimatedBox,
} from "@unconfused-ui/primitives";
import {
  Badge,
  Card,
  Divider,
} from "@unconfused-ui/core";
import { useTheme } from "@unconfused-ui/theme";

export function PrivacyPoliciesScreen() {
  const { theme, semanticColors } = useTheme();

  return (
    <Stack gap={8}>
      {/* Header */}
      <VStack gap={2}>
        <Inline align="center" gap={2}>
          <Badge variant="primary" size="sm">TERMOS & COMPLIANCE</Badge>
          <Badge variant="outline" size="sm">Café - Sistemas & Softwares</Badge>
        </Inline>
        <Text size="3xl" weight="bold" color={semanticColors.foreground} style={{ letterSpacing: -0.8 }}>
          Políticas de Uso, Licença & Privacidade
        </Text>
        <Text size="md" color={semanticColors.foregroundMuted} style={{ maxWidth: 720 }}>
          Diretrizes de transparência, privacidade e licenciamento de software da biblioteca Unconfused UI, desenvolvida por Café - Sistemas & Softwares.
        </Text>
      </VStack>

      {/* Sections Grid */}
      <VStack gap={4}>
        {/* Policy 1: Open Source License */}
        <Card variant="default">
          <Card.Header>
            <Inline align="center" gap={2}>
              <ShieldCheckIcon size={20} color={semanticColors.primary} />
              <Text size="lg" weight="bold" color={semanticColors.foreground}>
                1. Licença de Código Aberto (MIT License)
              </Text>
            </Inline>
          </Card.Header>
          <Card.Content>
            <VStack gap={2}>
              <Text size="sm" color={semanticColors.foregroundMuted} style={{ lineHeight: 22 }}>
                A Unconfused UI é distribuída sob a licença MIT. Você tem permissão irrestrita para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e vender cópias do software em projetos comerciais ou pessoais, sem taxas de licenciamento.
              </Text>
            </VStack>
          </Card.Content>
        </Card>

        {/* Policy 2: Zero Telemetry & Privacy */}
        <Card variant="default">
          <Card.Header>
            <Inline align="center" gap={2}>
              <LockIcon size={20} color="#10B981" />
              <Text size="lg" weight="bold" color={semanticColors.foreground}>
                2. Política de Privacidade & Zero Telemetria
              </Text>
            </Inline>
          </Card.Header>
          <Card.Content>
            <VStack gap={2}>
              <Text size="sm" color={semanticColors.foregroundMuted} style={{ lineHeight: 22 }}>
                Priorizamos sua privacidade acima de tudo. A biblioteca Unconfused UI não coleta dados pessoais, não realiza telemetria oculta, não executa scripts de rastreamento e não armazena cookies de terceiros. Todo o processamento de temas e tokens é 100% local no cliente.
              </Text>
            </VStack>
          </Card.Content>
        </Card>

        {/* Policy 3: Accessibility & Quality Guarantee */}
        <Card variant="default">
          <Card.Header>
            <Inline align="center" gap={2}>
              <SparklesIcon size={20} color="#3B82F6" />
              <Text size="lg" weight="bold" color={semanticColors.foreground}>
                3. Compromisso de Engenharia & Acessibilidade
              </Text>
            </Inline>
          </Card.Header>
          <Card.Content>
            <VStack gap={2}>
              <Text size="sm" color={semanticColors.foregroundMuted} style={{ lineHeight: 22 }}>
                Todos os componentes são auditados contra as diretrizes W3C WCAG 2.2 / APCA WCAG 3.0 e submetidos a testes de tipagem rigorosos com TypeScript strict. A manutenção contínua e as atualizações de segurança são coordenadas pela equipe da Café - Sistemas & Softwares.
              </Text>
            </VStack>
          </Card.Content>
        </Card>

        {/* Official Sign-off Card */}
        <Card variant="glass">
          <Card.Content>
            <VStack gap={1}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ letterSpacing: 1, textTransform: "uppercase" }}>
                ASSINATURA OFICIAL
              </Text>
              <Text size="md" weight="bold" color={semanticColors.foreground}>
                Café - Sistemas & Softwares
              </Text>
              <Text size="xs" color={semanticColors.foregroundSubtle}>
                Desenvolvimento de Sistemas Críticos, Arquiteturas Universais e Inteligência Artificial.
              </Text>
            </VStack>
          </Card.Content>
        </Card>
      </VStack>
    </Stack>
  );
}
