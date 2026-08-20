import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Button, ButtonProps, ButtonSize, ButtonVariant } from "./Button";

export type ButtonGroupProps = {
  attached?: boolean;
  orientation?: "horizontal" | "vertical";
  gap?: number;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const ButtonGroup = ({
  attached = false,
  orientation = "horizontal",
  gap = 2,
  style,
  children,
}: ButtonGroupProps) => {
  const childrenArray = React.Children.toArray(children).filter(Boolean);

  if (attached) {
    return (
      <Box
        flexDirection={orientation === "horizontal" ? "row" : "column"}
        style={[
          {
            borderRadius: 12,
            overflow: "hidden",
          },
          style,
        ]}
      >
        {childrenArray.map((child, index) => {
          const isFirst = index === 0;
          const isLast = index === childrenArray.length - 1;

          let borderPatch: ViewStyle = { borderRadius: 0 };
          if (orientation === "horizontal") {
            if (isFirst) borderPatch = { borderTopLeftRadius: 12, borderBottomLeftRadius: 12, borderRightWidth: 0.5 };
            else if (isLast) borderPatch = { borderTopRightRadius: 12, borderBottomRightRadius: 12, borderLeftWidth: 0.5 };
            else borderPatch = { borderRadius: 0, borderLeftWidth: 0.5, borderRightWidth: 0.5 };
          }

          if (React.isValidElement<ButtonProps>(child)) {
            const childStyle = child.props.style;
            return React.cloneElement(child, {
              key: index,
              style: (state: { pressed: boolean }) => ({
                ...borderPatch,
                ...(typeof childStyle === "function" ? childStyle(state) : (childStyle as object)),
              }),
            });
          }
          return child;
        })}
      </Box>
    );
  }

  if (orientation === "vertical") {
    return (
      <VStack gap={gap} style={style}>
        {children}
      </VStack>
    );
  }

  return (
    <HStack gap={gap} align="center" style={style}>
      {children}
    </HStack>
  );
};
ButtonGroup.displayName = "ButtonGroup";

export type FloatingActionButtonProps = ButtonProps & {
  label?: string;
  icon?: React.ReactNode;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
};

export const FloatingActionButton = ({
  label,
  icon = <Text size="md" color="#FFF">＋</Text>,
  position = "bottom-right",
  style,
  children,
  ...rest
}: FloatingActionButtonProps) => {
  const { semanticColors } = useTheme();

  const getPosStyle = (): ViewStyle => {
    switch (position) {
      case "bottom-left":
        return { position: "absolute", bottom: 24, left: 24, zIndex: 1000 };
      case "top-right":
        return { position: "absolute", top: 24, right: 24, zIndex: 1000 };
      case "top-left":
        return { position: "absolute", top: 24, left: 24, zIndex: 1000 };
      case "bottom-right":
      default:
        return { position: "absolute", bottom: 24, right: 24, zIndex: 1000 };
    }
  };

  const isExtended = !!label;

  return (
    <Button
      variant="primary"
      size={isExtended ? "md" : "lg"}
      rounded="full"
      style={{
        ...getPosStyle(),
        width: isExtended ? undefined : 56,
        height: 56,
        paddingHorizontal: isExtended ? 20 : 0,
        paddingVertical: 0,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: semanticColors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 14,
        elevation: 8,
        ...(style as object),
      }}
      leftIcon={icon}
      accessibilityLabel={label ?? "Floating Action"}
      {...rest}
    >
      {label ?? children}
    </Button>
  );
};
FloatingActionButton.displayName = "FloatingActionButton";

export type LinkButtonProps = ButtonProps & {
  underline?: boolean;
};

export const LinkButton = ({ underline = false, style, children, ...rest }: LinkButtonProps) => {
  const { semanticColors } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      style={{
        paddingHorizontal: 4,
        paddingVertical: 2,
        minHeight: 24,
        ...(style as object),
      }}
      {...rest}
    >
      <Text
        size="sm"
        weight="semibold"
        color={semanticColors.primary}
        style={underline ? { textDecorationLine: "underline" } : undefined}
      >
        {children}
      </Text>
    </Button>
  );
};
LinkButton.displayName = "LinkButton";

export type CloseButtonProps = Omit<ButtonProps, "children"> & {
  size?: "sm" | "md" | "lg";
};

export const CloseButton = ({ size = "md", style, ...rest }: CloseButtonProps) => {
  const { semanticColors } = useTheme();
  const dimension = size === "sm" ? 32 : size === "lg" ? 44 : 36;
  const fontSize = size === "sm" ? "sm" : size === "lg" ? "xl" : "md";

  return (
    <Button
      variant="ghost"
      rounded="full"
      accessibilityLabel="Close"
      style={{
        width: dimension,
        height: dimension,
        minHeight: dimension,
        paddingHorizontal: 0,
        paddingVertical: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        ...(style as object),
      }}
      {...rest}
    >
      <Text size={fontSize} weight="bold" color={semanticColors.foreground}>
        ✕
      </Text>
    </Button>
  );
};
CloseButton.displayName = "CloseButton";

export type BackButtonProps = Omit<ButtonProps, "children"> & {
  label?: string;
  showLabel?: boolean;
};

export const BackButton = ({
  label = "Back",
  showLabel = true,
  style,
  ...rest
}: BackButtonProps) => {
  const { semanticColors } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      accessibilityLabel="Go Back"
      style={{
        paddingHorizontal: 10,
        paddingVertical: 6,
        ...(style as object),
      }}
      leftIcon={<Text size="sm" weight="bold" color={semanticColors.foreground}>←</Text>}
      {...rest}
    >
      {showLabel ? label : undefined}
    </Button>
  );
};
BackButton.displayName = "BackButton";

export type SubmitButtonProps = ButtonProps & {
  submitting?: boolean;
};

export const SubmitButton = ({
  submitting = false,
  loading,
  fullWidth = true,
  children = "Submit Form",
  ...rest
}: SubmitButtonProps) => (
  <Button
    variant="primary"
    size="md"
    loading={submitting || loading}
    loadingText="Submitting..."
    fullWidth={fullWidth}
    {...rest}
  >
    {children}
  </Button>
);
SubmitButton.displayName = "SubmitButton";
