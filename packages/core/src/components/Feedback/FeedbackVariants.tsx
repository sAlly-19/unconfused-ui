import React, { useState } from "react";
import { ActivityIndicator as RNActivityIndicator, Modal, View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";
import { Button } from "../Button";
import { Dialog, DialogProps } from "../Dialog";
import { Progress, ProgressProps } from "../Progress";
import { Skeleton } from "../Skeleton";

export * from "../Toast";
export * from "../Skeleton";

// 1. Alert
export type AlertVariant = "info" | "success" | "warning" | "danger" | "glass";

export type AlertProps = {
  title?: string;
  description?: string;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export const Alert = ({
  title,
  description,
  variant = "info",
  icon,
  dismissible = false,
  onDismiss,
  action,
  style,
  children,
}: AlertProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const getVariantStyles = (): { bg: string; border: string; defaultIcon: string; iconColor: string } => {
    switch (variant) {
      case "success":
        return {
          bg: withAlpha(baseTokens.colors.success[500], 0.12),
          border: withAlpha(baseTokens.colors.success[500], 0.35),
          defaultIcon: "✓",
          iconColor: baseTokens.colors.success[500],
        };
      case "warning":
        return {
          bg: withAlpha(baseTokens.colors.warning[500], 0.12),
          border: withAlpha(baseTokens.colors.warning[500], 0.35),
          defaultIcon: "⚠️",
          iconColor: baseTokens.colors.warning[500],
        };
      case "danger":
        return {
          bg: withAlpha(baseTokens.colors.danger[500], 0.12),
          border: withAlpha(baseTokens.colors.danger[500], 0.35),
          defaultIcon: "🛑",
          iconColor: semanticColors.danger,
        };
      case "glass":
        return {
          bg: withAlpha(baseTokens.colors.black, 0.75),
          border: withAlpha(baseTokens.colors.white, 0.15),
          defaultIcon: "⚡",
          iconColor: semanticColors.primary,
        };
      case "info":
      default:
        return {
          bg: withAlpha(semanticColors.primary, 0.12),
          border: withAlpha(semanticColors.primary, 0.35),
          defaultIcon: "ℹ️",
          iconColor: semanticColors.primary,
        };
    }
  };

  const currentVariant = getVariantStyles();

  return (
    <Box
      style={[
        {
          borderRadius: 14,
          borderWidth: 1,
          borderColor: currentVariant.border,
          backgroundColor: currentVariant.bg,
          padding: 16,
        },
        style,
      ]}
      accessibilityRole="alert"
    >
      <HStack gap={3} align="flex-start">
        {icon ?? <Text size="md" color={currentVariant.iconColor}>{currentVariant.defaultIcon}</Text>}

        <VStack gap={1} style={{ flex: 1 }}>
          {title && (
            <Text size="sm" weight="bold" color={semanticColors.foreground}>
              {title}
            </Text>
          )}
          {description && (
            <Text size="xs" color={semanticColors.foregroundMuted} lineHeight="sm">
              {description}
            </Text>
          )}
          {children}
          {action && <Box style={{ marginTop: 6 }}>{action}</Box>}
        </VStack>

        {dismissible && (
          <Pressable
            onPress={() => {
              setVisible(false);
              onDismiss?.();
            }}
            accessibilityLabel="Dismiss Alert"
          >
            <Text size="xs" color={semanticColors.foregroundSubtle}>
              ✕
            </Text>
          </Pressable>
        )}
      </HStack>
    </Box>
  );
};
Alert.displayName = "Alert";

// 2. AlertDialog & ConfirmDialog
export type ConfirmDialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "primary" | "destructive";
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const ConfirmDialog = ({
  open = false,
  onOpenChange,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "primary",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={() => onOpenChange?.(false)}>
      <Pressable
        onPress={() => onOpenChange?.(false)}
        style={{
          flex: 1,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.65),
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <Box
          p={6}
          rounded="xl"
          bg={semanticColors.surface}
          borderWidth={1}
          borderColor={semanticColors.borderBold}
          style={{ width: "100%", maxWidth: 400, gap: 16 }}
        >
          <VStack gap={2}>
            <Text size="lg" weight="bold" color={semanticColors.foreground}>
              {title}
            </Text>
            <Text size="xs" color={semanticColors.foregroundMuted} lineHeight="sm">
              {description}
            </Text>
          </VStack>

          <Inline justify="flex-end" gap={3}>
            <Button
              size="sm"
              variant="ghost"
              onPress={() => {
                onCancel?.();
                onOpenChange?.(false);
              }}
            >
              {cancelText}
            </Button>
            <Button
              size="sm"
              variant={variant === "destructive" ? "destructive" : "primary"}
              onPress={() => {
                onConfirm?.();
                onOpenChange?.(false);
              }}
            >
              {confirmText}
            </Button>
          </Inline>
        </Box>
      </Pressable>
    </Modal>
  );
};
ConfirmDialog.displayName = "ConfirmDialog";

export const AlertDialog = ConfirmDialog;

// 3. Snackbar (Bottom snack bar)
export type SnackbarProps = {
  visible?: boolean;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: ViewStyle;
};

export const Snackbar = ({
  visible = true,
  message,
  actionLabel = "UNDO",
  onAction,
  style,
}: SnackbarProps) => {
  const { semanticColors, baseTokens } = useTheme();
  if (!visible) return null;

  return (
    <Box
      style={[
        {
          backgroundColor: withAlpha(baseTokens.colors.black, 0.95),
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.15),
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          shadowColor: withAlpha(baseTokens.colors.black, 0.4),
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 10,
        },
        style,
      ]}
    >
      <Text size="xs" color={semanticColors.foreground} weight="medium">
        {message}
      </Text>
      {actionLabel && (
        <Pressable onPress={onAction} style={{ paddingLeft: 12 }}>
          <Text size="xs" weight="bold" color={semanticColors.primary}>
            {actionLabel}
          </Text>
        </Pressable>
      )}
    </Box>
  );
};
Snackbar.displayName = "Snackbar";

// 4. Banner (Full-width broadcast)
export type BannerProps = AlertProps;
export const Banner = ({ style, ...props }: BannerProps) => (
  <Alert
    style={{
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      width: "100%",
      ...(style as object),
    }}
    {...props}
  />
);
Banner.displayName = "Banner";

// 5. Callout (Left-accent stripe box)
export type CalloutProps = AlertProps;
export const Callout = ({ style, variant = "info", ...props }: CalloutProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const accentColor =
    variant === "danger"
      ? semanticColors.danger
      : variant === "warning"
      ? baseTokens.colors.warning[500]
      : variant === "success"
      ? baseTokens.colors.success[500]
      : semanticColors.primary;

  return (
    <Alert
      variant={variant}
      style={{
        borderLeftWidth: 4,
        borderLeftColor: accentColor,
        ...(style as object),
      }}
      {...props}
    />
  );
};
Callout.displayName = "Callout";

// 6. Notice (Compact inline badge notification)
export type NoticeProps = {
  label: string;
  variant?: AlertVariant;
  style?: ViewStyle;
};

export const Notice = ({ label, variant = "info", style }: NoticeProps) => (
  <Alert variant={variant} style={{ paddingVertical: 8, paddingHorizontal: 12, ...(style as object) }}>
    <Text size="xs" weight="bold">
      {label}
    </Text>
  </Alert>
);
Notice.displayName = "Notice";

// 7. Message items (ErrorMessage, SuccessMessage, WarningMessage, InfoMessage)
export const ErrorMessage = ({ message, children }: { message?: string; children?: React.ReactNode }) => (
  <Alert variant="danger" title={message ?? (typeof children === "string" ? children : undefined)}>
    {typeof children !== "string" ? children : null}
  </Alert>
);

export const SuccessMessage = ({ message, children }: { message?: string; children?: React.ReactNode }) => (
  <Alert variant="success" title={message ?? (typeof children === "string" ? children : undefined)}>
    {typeof children !== "string" ? children : null}
  </Alert>
);

export const WarningMessage = ({ message, children }: { message?: string; children?: React.ReactNode }) => (
  <Alert variant="warning" title={message ?? (typeof children === "string" ? children : undefined)}>
    {typeof children !== "string" ? children : null}
  </Alert>
);

export const InfoMessage = ({ message, children }: { message?: string; children?: React.ReactNode }) => (
  <Alert variant="info" title={message ?? (typeof children === "string" ? children : undefined)}>
    {typeof children !== "string" ? children : null}
  </Alert>
);

// 8. ProgressBar & ProgressCircle
export const ProgressBar = Progress;

export type ProgressCircleProps = {
  value?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: ViewStyle;
};

export const ProgressCircle = ({
  value = 65,
  size = 64,
  strokeWidth = 6,
  color,
  style,
}: ProgressCircleProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const activeColor = color ?? semanticColors.primary;

  return (
    <Box
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: withAlpha(baseTokens.colors.white, 0.1),
          borderTopColor: activeColor,
          borderRightColor: value > 50 ? activeColor : withAlpha(baseTokens.colors.white, 0.1),
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Text size="xs" weight="bold" color={semanticColors.foreground}>
        {Math.round(value)}%
      </Text>
    </Box>
  );
};
ProgressCircle.displayName = "ProgressCircle";

// 9. Spinner & LoadingIndicator
export type SpinnerProps = {
  size?: "small" | "large";
  color?: string;
};

export const Spinner = ({ size = "small", color }: SpinnerProps) => {
  const { semanticColors } = useTheme();
  return <RNActivityIndicator size={size} color={color ?? semanticColors.primary} />;
};
Spinner.displayName = "Spinner";

export const ActivityIndicator = Spinner;

export const LoadingIndicator = ({
  label = "Loading assets...",
  size = "small",
}: {
  label?: string;
  size?: "small" | "large";
}) => {
  const { semanticColors } = useTheme();
  return (
    <Inline align="center" gap={2}>
      <Spinner size={size} />
      {label && (
        <Text size="xs" color={semanticColors.foregroundMuted} weight="medium">
          {label}
        </Text>
      )}
    </Inline>
  );
};
LoadingIndicator.displayName = "LoadingIndicator";

