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
        borderTopColor: semanticColors.borderSubtle,
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
            borderColor: semanticColors.borderSubtle,
          },
        },
        glass: {
          root: {
            backgroundColor: semanticColors.surfaceSubtle,
            borderColor: semanticColors.borderSubtle,
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
    const { semanticColors, theme } = useTheme();
    const recipe = getCardRecipe(semanticColors);
    const styles = useMemo(() => recipe({ variant }), [recipe, variant]);

    return (
      <CardContext.Provider value={styles}>
        <View
          ref={ref}
          style={[
            ...styles.root,
            elevation === "sm" && theme.shadows.sm,
            elevation === "md" && theme.shadows.md,
            elevation === "lg" && theme.shadows.lg,
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
