import React, { useState } from "react";
import { Linking, TextStyle, View, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Box } from "./Box";
import { Inline } from "./Inline";
import { Pressable } from "./Pressable";
import { Text, TextProps } from "./Text";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = TextProps & {
  level?: HeadingLevel;
  accentBar?: boolean;
  gradient?: boolean;
};

export const Heading = React.forwardRef<any, HeadingProps>(
  ({ level = 1, accentBar = false, gradient = false, style, children, ...rest }, ref) => {
    const { semanticColors } = useTheme();

    const getLevelConfig = () => {
      switch (level) {
        case 1:
          return { size: "4xl" as const, weight: "bold" as const, tracking: "tight" as const };
        case 2:
          return { size: "3xl" as const, weight: "bold" as const, tracking: "tight" as const };
        case 3:
          return { size: "2xl" as const, weight: "bold" as const, tracking: "normal" as const };
        case 4:
          return { size: "xl" as const, weight: "bold" as const, tracking: "normal" as const };
        case 5:
          return { size: "lg" as const, weight: "semibold" as const, tracking: "normal" as const };
        case 6:
        default:
          return { size: "md" as const, weight: "semibold" as const, tracking: "normal" as const };
      }
    };

    const config = getLevelConfig();

    const headingElement = (
      <Text
        ref={ref}
        size={config.size}
        weight={config.weight}
        tracking={config.tracking}
        color={gradient ? semanticColors.primary : semanticColors.foreground}
        style={style}
        accessibilityRole="header"
        {...rest}
      >
        {children}
      </Text>
    );

    if (accentBar) {
      return (
        <Inline align="center" gap={3}>
          <Box
            style={{
              width: 4,
              height: "80%",
              minHeight: 20,
              backgroundColor: semanticColors.primary,
              borderRadius: 2,
            }}
          />
          {headingElement}
        </Inline>
      );
    }

    return headingElement;
  }
);
Heading.displayName = "Heading";

export type TitleProps = TextProps & {
  variant?: "hero" | "section" | "card";
};

export const Title = React.forwardRef<any, TitleProps>(
  ({ variant = "section", style, children, ...rest }, ref) => {
    const size = variant === "hero" ? "3xl" : variant === "section" ? "xl" : "lg";

    return (
      <Text
        ref={ref}
        size={size}
        weight="bold"
        tracking={variant === "hero" ? "tight" : "normal"}
        style={style}
        {...rest}
      >
        {children}
      </Text>
    );
  }
);
Title.displayName = "Title";

export type SubtitleProps = TextProps & {
  variant?: "subtle" | "muted" | "accent";
};

export const Subtitle = React.forwardRef<any, SubtitleProps>(
  ({ variant = "muted", style, children, ...rest }, ref) => {
    const { semanticColors } = useTheme();

    const color =
      variant === "subtle"
        ? semanticColors.foregroundSubtle
        : variant === "accent"
        ? semanticColors.primary
        : semanticColors.foregroundMuted;

    return (
      <Text ref={ref} size="md" weight="medium" color={color} style={style} {...rest}>
        {children}
      </Text>
    );
  }
);
Subtitle.displayName = "Subtitle";

export type LabelProps = TextProps & {
  required?: boolean;
  optional?: boolean;
  uppercase?: boolean;
};

export const Label = React.forwardRef<any, LabelProps>(
  ({ required = false, optional = false, uppercase = false, style, children, ...rest }, ref) => {
    const { semanticColors } = useTheme();

    return (
      <Inline align="center" gap={1}>
        <Text
          ref={ref}
          size="xs"
          weight="bold"
          color={semanticColors.foregroundMuted}
          style={[
            uppercase && { textTransform: "uppercase", letterSpacing: 1.2 },
            style,
          ]}
          {...rest}
        >
          {children}
        </Text>
        {required && (
          <Text size="xs" weight="bold" color={semanticColors.danger}>
            *
          </Text>
        )}
        {optional && (
          <Text size="xs" color={semanticColors.foregroundSubtle}>
            (optional)
          </Text>
        )}
      </Inline>
    );
  }
);
Label.displayName = "Label";

export type CaptionProps = TextProps;
export const Caption = React.forwardRef<any, CaptionProps>(({ style, children, ...rest }, ref) => {
  const { semanticColors } = useTheme();
  return (
    <Text ref={ref} size="xs" color={semanticColors.foregroundSubtle} leading="normal" style={style} {...rest}>
      {children}
    </Text>
  );
});
Caption.displayName = "Caption";

export type ParagraphProps = TextProps & {
  lead?: boolean;
  prose?: boolean;
};

export const Paragraph = React.forwardRef<any, ParagraphProps>(
  ({ lead = false, prose = true, style, children, ...rest }, ref) => {
    const { semanticColors } = useTheme();

    return (
      <Text
        ref={ref}
        size={lead ? "lg" : "sm"}
        leading={prose ? "relaxed" : "normal"}
        color={lead ? semanticColors.foreground : semanticColors.foregroundMuted}
        style={style}
        {...rest}
      >
        {children}
      </Text>
    );
  }
);
Paragraph.displayName = "Paragraph";

export type LinkProps = TextProps & {
  href?: string;
  external?: boolean;
  variant?: "underline" | "hover" | "subtle";
  onPress?: () => void;
  asChild?: boolean;
};

export const Link = React.forwardRef<any, LinkProps>(
  ({ href, external = false, variant = "underline", onPress, style, children, asChild, ...rest }, ref) => {
    const { semanticColors } = useTheme();

    const handlePress = () => {
      if (href) {
        Linking.openURL(href).catch(() => {});
      }
      onPress?.();
    };

    return (
      <Pressable onPress={handlePress} accessibilityRole="link" style={{ alignSelf: "flex-start" }} asChild={asChild}>
        {asChild ? (
          children
        ) : (
          <Inline align="center" gap={1}>
            <Text
              ref={ref}
              size="sm"
              weight="semibold"
              color={variant === "subtle" ? semanticColors.foregroundMuted : semanticColors.primary}
              style={[
                variant === "underline" && { textDecorationLine: "underline" },
                style,
              ]}
              {...rest}
            >
              {children}
            </Text>
            {external && (
              <Text size="xs" color={semanticColors.primary}>
                ↗
              </Text>
            )}
          </Inline>
        )}
      </Pressable>
    );
  }
);
Link.displayName = "Link";

export type CodeProps = TextProps & {
  block?: boolean;
};

export const Code = React.forwardRef<any, CodeProps>(
  ({ block = false, style, children, ...rest }, ref) => {
    const { semanticColors } = useTheme();

    if (block) {
      return (
        <Box
          p={4}
          rounded="lg"
          borderWidth={1}
          borderColor={semanticColors.border}
          bg={semanticColors.surface}
          style={{ width: "100%", overflow: "hidden" }}
        >
          <Text
            ref={ref}
            size="xs"
            color={semanticColors.foreground}
            style={[{ fontFamily: "monospace", lineHeight: 20 }, style]}
            {...rest}
          >
            {children}
          </Text>
        </Box>
      );
    }

    return (
      <Text
        ref={ref}
        size="xs"
        color={semanticColors.primaryForeground}
        style={[
          {
            fontFamily: "monospace",
            backgroundColor: semanticColors.surface,
            paddingHorizontal: 7,
            paddingVertical: 3,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: semanticColors.border,
            overflow: "hidden",
          },
          style,
        ]}
        {...rest}
      >
        {children}
      </Text>
    );
  }
);
Code.displayName = "Code";

export type BlockquoteProps = {
  author?: string;
  cite?: string;
  variant?: "primary" | "subtle" | "accent";
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Blockquote = ({
  author,
  cite,
  variant = "primary",
  style,
  children,
}: BlockquoteProps): React.JSX.Element => {
  const { semanticColors, baseTokens } = useTheme();

  const borderColor =
    variant === "subtle"
      ? semanticColors.borderBold
      : variant === "accent"
      ? baseTokens.colors.warning[500]
      : semanticColors.primary;

  return (
    <Box
      style={[
        {
          borderLeftWidth: 3.5,
          borderLeftColor: borderColor,
          paddingLeft: 16,
          paddingVertical: 8,
          backgroundColor: semanticColors.surfaceSubtle,
          borderRadius: 4,
          gap: 4,
        },
        style,
      ]}
    >
      {typeof children === "string" ? (
        <Text size="sm" italic leading="relaxed" color={semanticColors.foreground}>
          "{children}"
        </Text>
      ) : (
        children
      )}
      {(author || cite) && (
        <Inline align="center" gap={1.5} style={{ marginTop: 2 }}>
          <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
            — {author}
          </Text>
          {cite && (
            <Text size="xs" color={semanticColors.foregroundSubtle}>
              ({cite})
            </Text>
          )}
        </Inline>
      )}
    </Box>
  );
};
Blockquote.displayName = "Blockquote";

export type TruncatedTextProps = TextProps & {
  lines?: number;
  expandable?: boolean;
};

export const TruncatedText = React.forwardRef<any, TruncatedTextProps>(
  ({ lines = 1, expandable = false, style, children, ...rest }, ref) => {
    const [expanded, setExpanded] = useState(false);
    const { semanticColors } = useTheme();

    return (
      <Box gap={1}>
        <Text
          ref={ref}
          numberOfLines={expandable && expanded ? undefined : lines}
          style={style}
          {...rest}
        >
          {children}
        </Text>
        {expandable && (
          <Pressable onPress={() => setExpanded(!expanded)} style={{ alignSelf: "flex-start" }}>
            <Text size="xs" weight="bold" color={semanticColors.primary}>
              {expanded ? "Show less ↑" : "Show more ↓"}
            </Text>
          </Pressable>
        )}
      </Box>
    );
  }
);
TruncatedText.displayName = "TruncatedText";

export type GradientTextVariant = "violet" | "cyan" | "emerald" | "amber";

export type GradientTextProps = TextProps & {
  variant?: GradientTextVariant;
};

export const GradientText = React.forwardRef<any, GradientTextProps>(
  ({ variant = "violet", style, children, ...rest }, ref) => {
    const { semanticColors, baseTokens } = useTheme();

    const getColor = () => {
      switch (variant) {
        case "cyan":
          return "#38BDF8";
        case "emerald":
          return baseTokens.colors.success[500];
        case "amber":
          return baseTokens.colors.warning[500];
        case "violet":
        default:
          return semanticColors.primary;
      }
    };

    return (
      <Text
        ref={ref}
        size="2xl"
        weight="bold"
        tracking="tight"
        color={getColor()}
        style={[{ letterSpacing: 0.5 }, style]}
        {...rest}
      >
        {children}
      </Text>
    );
  }
);
GradientText.displayName = "GradientText";
