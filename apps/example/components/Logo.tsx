import React from "react";
import { View, ViewStyle } from "react-native";
import { SvgIcon } from "@unconfused-ui/icons";
import { Box, Inline, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type LogoProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showSignature?: boolean;
  style?: ViewStyle;
};

/**
 * Official Brand Logo for Unconfused UI
 * Concept: "The Untangling Prism" — Transforming chaotic interface complexity into pure, effortless geometric clarity ("U").
 * Signed by Café - Sistemas & Softwares.
 */
export const Logo: React.FC<LogoProps> = ({ size = "md", showSignature = true, style }) => {
  const { semanticColors } = useTheme();

  const getDimensions = () => {
    switch (size) {
      case "xs":
        return { iconBox: 22, iconSize: 13, titleSize: "xs" as const, badge: 8, gap: 1.5 };
      case "sm":
        return { iconBox: 28, iconSize: 16, titleSize: "sm" as const, badge: 9, gap: 2 };
      case "lg":
        return { iconBox: 44, iconSize: 26, titleSize: "xl" as const, badge: 12, gap: 3 };
      case "xl":
        return { iconBox: 56, iconSize: 34, titleSize: "2xl" as const, badge: 14, gap: 3.5 };
      case "md":
      default:
        return { iconBox: 36, iconSize: 21, titleSize: "md" as const, badge: 10, gap: 2.5 };
    }
  };

  const dim = getDimensions();

  return (
    <Inline align="center" gap={dim.gap} style={style}>
      {/* The Untangling "U" Prism Emblem */}
      <Box
        style={{
          width: dim.iconBox,
          height: dim.iconBox,
          borderRadius: size === "xs" || size === "sm" ? 7 : 12,
          backgroundColor: semanticColors.primary,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: semanticColors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 6,
          borderWidth: 1,
          borderColor: withAlpha("#FFFFFF", 0.25),
        }}
      >
        <SvgIcon
          size={dim.iconSize}
          color="#FFFFFF"
          strokeWidth={2.4}
          paths={[
            // The Untangled "U" Clarity Glyph:
            // Two curved inputs uniting into a crisp vertical aperture U
            { d: "M5 3v8a7 7 0 0 0 14 0V3" },
            { d: "M9 3v8a3 3 0 0 0 6 0V3" },
            { d: "M2 19l4-4 4 4" },
            { d: "M22 19l-4-4-4 4" },
          ]}
        />
      </Box>

      {/* Typography Lockup & Cafe Signature */}
      <VStack gap={0}>
        <Inline align="center" gap={1.5}>
          <Text size={dim.titleSize} weight="bold" color={semanticColors.foreground} style={{ letterSpacing: -0.5 }}>
            UNCONFUSED
          </Text>
          <Text size={dim.titleSize} weight="regular" color={semanticColors.primary} style={{ letterSpacing: -0.5 }}>
            UI
          </Text>
          <Box
            style={{
              paddingHorizontal: 5,
              paddingVertical: 1.5,
              borderRadius: 4,
              backgroundColor: withAlpha(semanticColors.primary, 0.15),
              borderWidth: 1,
              borderColor: withAlpha(semanticColors.primary, 0.3),
            }}
          >
            <Text
              size="xs"
              weight="bold"
              color={semanticColors.primary}
              style={{ fontSize: dim.badge, letterSpacing: 0.5 }}
            >
              PRO
            </Text>
          </Box>
        </Inline>

        {showSignature && (
          <Text
            size="xs"
            color={semanticColors.foregroundMuted}
            style={{ fontSize: dim.badge, letterSpacing: 0.5 }}
          >
            by Café - Sistemas & Softwares
          </Text>
        )}
      </VStack>
    </Inline>
  );
};

Logo.displayName = "Logo";
