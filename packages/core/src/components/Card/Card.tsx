import React, { createContext, useContext, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Box, Stack, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { createSlotRecipe } from "@unconfused-ui/recipes";

const getCardRecipe = (semanticColors: any) =>
  createSlotRecipe({
    slots: ["root", "header", "title", "description", "content", "footer"],
    base: {
      root: {
        overflow: "hidden",
        borderRadius: 12,
        borderWidth: 1,
      },
      header: {
        gap: 6,
      },
      footer: {
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.06)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
    variants: {
      variant: {
        default: {
          root: {
            backgroundColor: semanticColors.surface,
            borderColor: "rgba(255, 255, 255, 0.06)",
          },
        },
        glass: {
          root: {
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderColor: "rgba(255, 255, 255, 0.08)",
          },
        },
        subtle: {
          root: {
            backgroundColor: semanticColors.surfaceSubtle,
            borderColor: semanticColors.borderSubtle,
          },
        },
        bordered: {
          root: {
            backgroundColor: semanticColors.surface,
            borderColor: semanticColors.border,
          },
        },
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });

type CardContextValue = Record<string, any[]>;
const CardContext = createContext<CardContextValue | null>(null);

export type CardProps = {
  variant?: "default" | "subtle" | "bordered" | "glass";
  elevation?: "none" | "sm" | "md" | "lg";
  accentBar?: boolean;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const CardRoot = React.forwardRef<View, CardProps>(
  ({ variant = "default", elevation = "none", accentBar = false, style, children, ...rest }, ref) => {
    const { semanticColors } = useTheme();
    const recipe = getCardRecipe(semanticColors);
    const styles = useMemo(() => recipe({ variant }), [recipe, variant]);

    return (
      <CardContext.Provider value={styles}>
        <View
          ref={ref}
          style={[
            ...styles.root,
            elevation === "sm" && { shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.12, shadowRadius: 3, elevation: 1 },
            elevation === "md" && { shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.18, shadowRadius: 12, elevation: 4 },
            elevation === "lg" && { shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.24, shadowRadius: 24, elevation: 8 },
            style,
          ]}
          {...rest}
        >
          {accentBar && (
            <View
              style={{
                height: 2,
                width: "100%",
                backgroundColor: semanticColors.primary,
              }}
            />
          )}
          <Box style={{ padding: 20 }}>
            <Stack gap={4}>{children}</Stack>
          </Box>
        </View>
      </CardContext.Provider>
    );
  }
);

CardRoot.displayName = "Card";

export const CardHeader = ({ style, children }: { style?: ViewStyle; children: React.ReactNode }) => {
  const styles = useContext(CardContext);
  return (
    <Stack style={[styles?.header, style]}>
      {children}
    </Stack>
  );
};
CardHeader.displayName = "Card.Header";

export const CardTitle = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  const { semanticColors } = useTheme();
  const styles = useContext(CardContext);
  return typeof children === "string" ? (
    <Text size="xl" weight="bold" color={semanticColors.foreground} style={[styles?.title, style]}>
      {children}
    </Text>
  ) : (
    <>{children}</>
  );
};
CardTitle.displayName = "Card.Title";

export const CardDescription = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  const { semanticColors } = useTheme();
  const styles = useContext(CardContext);
  return typeof children === "string" ? (
    <Text size="sm" color={semanticColors.foregroundMuted} lineHeight="sm" style={[styles?.description, style]}>
      {children}
    </Text>
  ) : (
    <>{children}</>
  );
};
CardDescription.displayName = "Card.Description";

export const CardContent = ({ style, children }: { style?: ViewStyle; children: React.ReactNode }) => {
  const styles = useContext(CardContext);
  return <Box style={[styles?.content, style]}>{children}</Box>;
};
CardContent.displayName = "Card.Content";

export const CardFooter = ({ style, children }: { style?: ViewStyle; children: React.ReactNode }) => {
  const styles = useContext(CardContext);
  return (
    <Box style={[styles?.footer, style]}>
      {children}
    </Box>
  );
};
CardFooter.displayName = "Card.Footer";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
