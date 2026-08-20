import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { useBreakpoint } from "@unconfused-ui/hooks";
import { useTheme } from "@unconfused-ui/theme";
import { Box } from "./Box";
import { Inline } from "./Inline";
import { Pressable } from "./Pressable";
import { Text } from "./Text";

export type SplitViewProps = {
  master: React.ReactNode;
  detail: React.ReactNode;
  masterWidth?: number | string;
  showDetailOnMobile?: boolean;
  onBackToMaster?: () => void;
  style?: ViewStyle;
};

/**
 * Universal Responsive SplitView (Master-Detail layout primitive):
 * Displays side-by-side master/detail panels on desktop/tablet (md, lg, xl)
 * and an accessible stacked navigation view on mobile (base, sm).
 */
export function SplitView({
  master,
  detail,
  masterWidth = 320,
  showDetailOnMobile = false,
  onBackToMaster,
  style,
}: SplitViewProps): React.JSX.Element {
  const breakpoint = useBreakpoint();
  const { semanticColors } = useTheme();

  const isWide = breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl";

  if (isWide) {
    return (
      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            borderRadius: 14,
            borderWidth: 1,
            borderColor: semanticColors.border,
            overflow: "hidden",
            backgroundColor: semanticColors.surface,
          },
          style,
        ]}
      >
        <Box
          style={{
            width: typeof masterWidth === "number" ? masterWidth : undefined,
            flex: typeof masterWidth === "string" ? 1 : undefined,
            borderRightWidth: 1,
            borderRightColor: semanticColors.border,
            backgroundColor: semanticColors.surfaceSubtle,
          }}
        >
          {master}
        </Box>
        <Box style={{ flex: 2, backgroundColor: semanticColors.surface }}>
          {detail}
        </Box>
      </View>
    );
  }

  // Mobile mode (stacked)
  return (
    <View style={[{ flex: 1, backgroundColor: semanticColors.surface }, style]}>
      {showDetailOnMobile ? (
        <Box style={{ flex: 1 }}>
          {onBackToMaster && (
            <Pressable
              onPress={onBackToMaster}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderBottomWidth: 1,
                borderBottomColor: semanticColors.border,
                backgroundColor: semanticColors.surfaceSubtle,
              }}
            >
              <Text size="sm" weight="bold" color={semanticColors.primary}>
                ← Voltar
              </Text>
            </Pressable>
          )}
          {detail}
        </Box>
      ) : (
        <Box style={{ flex: 1 }}>{master}</Box>
      )}
    </View>
  );
}

SplitView.displayName = "SplitView";
