import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { Box, Inline, Pressable, Text, VStack } from "@unconfused-ui/primitives";
import { Button } from "../Button/Button";
import { CheckIcon } from "@unconfused-ui/icons";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type StepItem = {
  title: string;
  description?: string;
  content: React.ReactNode;
  canProceed?: boolean;
};

export type StepperProps = {
  steps: StepItem[];
  currentStep?: number;
  onStepChange?: (stepIndex: number) => void;
  onComplete?: () => void;
  style?: ViewStyle;
};

/**
 * Universal Stepper / Multi-Step Wizard:
 * Interactive step indicator, step validation, and form navigation controls.
 */
export function Stepper({
  steps,
  currentStep: propStep,
  onStepChange,
  onComplete,
  style,
}: StepperProps): React.JSX.Element {
  const { semanticColors, baseTokens } = useTheme();
  const [internalStep, setInternalStep] = useState(0);

  const activeIndex = propStep !== undefined ? propStep : internalStep;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === steps.length - 1;
  const currentStepData = steps[activeIndex];

  const goToStep = (target: number) => {
    if (target >= 0 && target < steps.length) {
      setInternalStep(target);
      onStepChange?.(target);
    }
  };

  const handleNext = () => {
    if (isLast) {
      onComplete?.();
    } else {
      goToStep(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    goToStep(activeIndex - 1);
  };

  return (
    <VStack gap={5} style={style}>
      {/* Steps Header Navigation */}
      <Inline align="center" justify="space-between" style={{ paddingHorizontal: 4 }}>
        {steps.map((step, idx) => {
          const isDone = idx < activeIndex;
          const isActive = idx === activeIndex;

          return (
            <React.Fragment key={idx}>
              <Pressable
                onPress={() => isDone && goToStep(idx)}
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                {/* Step Circle Badge */}
                <Box
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isDone
                      ? baseTokens.colors.success[500]
                      : isActive
                      ? semanticColors.primary
                      : semanticColors.surfaceSubtle,
                    borderWidth: 1,
                    borderColor: isActive ? semanticColors.primary : semanticColors.border,
                  }}
                >
                  {isDone ? (
                    <CheckIcon size={16} color={baseTokens.colors.white} />
                  ) : (                    <Text
                      size="xs"
                      weight="bold"
                      color={isActive ? semanticColors.primaryForeground : semanticColors.foregroundMuted}
                    >
                      {idx + 1}
                    </Text>
                  )}
                </Box>

                {/* Step Title Label */}
                <VStack gap={0}>
                  <Text
                    size="xs"
                    weight={isActive ? "bold" : "medium"}
                    color={isActive ? semanticColors.foreground : semanticColors.foregroundMuted}
                  >
                    {step.title}
                  </Text>
                  {step.description && (
                    <Text size="xs" color={semanticColors.foregroundSubtle}>
                      {step.description}
                    </Text>
                  )}
                </VStack>
              </Pressable>

              {/* Connecting line */}
              {idx < steps.length - 1 && (
                <Box
                 style={{
                   flex: 1,
                   height: 2,
                   marginHorizontal: 12,
                   backgroundColor: isDone ? baseTokens.colors.success[500] : semanticColors.border,
                 }}
                />
              )}
            </React.Fragment>
          );
        })}
      </Inline>

      {/* Step Active Content Area */}
      <Box
        style={{
          padding: 20,
          borderRadius: 14,
          backgroundColor: semanticColors.surface,
          borderWidth: 1,
          borderColor: semanticColors.border,
          minHeight: 200,
        }}
      >
        {currentStepData?.content}
      </Box>

      {/* Stepper Navigation Actions */}
      <Inline justify="space-between" align="center">
        <Button variant="outline" size="md" disabled={isFirst} onPress={handlePrev}>
          ← Anterior
        </Button>

        <Button
          variant="primary"
          size="md"
          disabled={currentStepData?.canProceed === false}
          onPress={handleNext}
        >
          {isLast ? "Concluir" : "Próximo →"}
        </Button>
      </Inline>
    </VStack>
  );
}

Stepper.displayName = "Stepper";
