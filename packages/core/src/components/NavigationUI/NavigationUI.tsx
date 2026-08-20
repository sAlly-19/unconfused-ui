import React, { useState } from "react";
import { ScrollView, TextStyle, View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { Breadcrumbs, BreadcrumbsProps } from "../Breadcrumbs";
import { Button } from "../Button";
import { Drawer } from "../Overlay/OverlayVariants";
import { Sidebar } from "../Sidebar";
import { Tabs, TabsTrigger } from "../Tabs";

export * from "../Tabs";
export * from "../Breadcrumbs";
export * from "../Sidebar";

// 1. Tab, TabBar, TopTabs, BottomTabs aliases & components
export const Tab = TabsTrigger;
export const TabBar = Tabs.List;
export const TopTabs = Tabs;

export type BottomTabItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  badge?: number | string;
};

export type BottomTabsProps = {
  items: BottomTabItem[];
  activeKey?: string;
  onSelect?: (key: string) => void;
  style?: ViewStyle;
};

export const BottomTabs = ({
  items,
  activeKey = items[0]?.key,
  onSelect,
  style,
}: BottomTabsProps) => {
  const { semanticColors } = useTheme();

  return (
    <Box
      style={[
        {
          height: 64,
          backgroundColor: "rgba(16, 18, 30, 0.98)",
          borderTopWidth: 1,
          borderTopColor: "rgba(255, 255, 255, 0.1)",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 8,
          paddingBottom: 4,
        },
        style,
      ]}
    >
      {items.map((tab) => {
        const isActive = tab.key === activeKey;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onSelect?.(tab.key)}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              paddingVertical: 6,
            }}
          >
            <Box style={{ position: "relative" }}>
              {tab.icon}
              {tab.badge !== undefined && (
                <Box
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -10,
                    backgroundColor: semanticColors.primary,
                    borderRadius: 10,
                    paddingHorizontal: 5,
                    paddingVertical: 1,
                  }}
                >
                  <Text size="xs" weight="bold" color="#FFFFFF">
                    {tab.badge}
                  </Text>
                </Box>
              )}
            </Box>
            <Text
              size="xs"
              weight={isActive ? "bold" : "medium"}
              color={isActive ? semanticColors.primary : semanticColors.foregroundMuted}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </Box>
  );
};
BottomTabs.displayName = "BottomTabs";

// 2. Breadcrumb
export const Breadcrumb = Breadcrumbs;

// 3. NavigationBar & AppBar
export type NavigationBarProps = {
  title?: string;
  subtitle?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  style?: ViewStyle;
};

export const NavigationBar = ({
  title,
  subtitle,
  leftAction,
  rightAction,
  style,
}: NavigationBarProps) => {
  const { semanticColors } = useTheme();

  return (
    <Inline
      justify="space-between"
      align="center"
      style={[
        {
          height: 60,
          paddingHorizontal: 16,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
        },
        style,
      ]}
    >
      <Box style={{ minWidth: 40, justifyContent: "center" }}>{leftAction}</Box>
      <VStack gap={0} align="center" style={{ flex: 1 }}>
        {title && (
          <Text size="md" weight="bold" color={semanticColors.foreground}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text size="xs" color={semanticColors.foregroundMuted}>
            {subtitle}
          </Text>
        )}
      </VStack>
      <Box style={{ minWidth: 40, alignItems: "flex-end", justifyContent: "center" }}>{rightAction}</Box>
    </Inline>
  );
};
NavigationBar.displayName = "NavigationBar";

export const AppBar = NavigationBar;

// 4. NavigationRail (Vertical desktop rail)
export type NavigationRailItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
};

export type NavigationRailProps = {
  items: NavigationRailItem[];
  activeKey?: string;
  onSelect?: (key: string) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  style?: ViewStyle;
};

export const NavigationRail = ({
  items,
  activeKey = items[0]?.key,
  onSelect,
  header,
  footer,
  style,
}: NavigationRailProps) => {
  const { semanticColors } = useTheme();

  return (
    <Box
      style={[
        {
          width: 72,
          height: "100%",
          backgroundColor: "rgba(16, 18, 30, 0.98)",
          borderRightWidth: 1,
          borderRightColor: "rgba(255, 255, 255, 0.1)",
          paddingVertical: 16,
          alignItems: "center",
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      {header && <Box style={{ marginBottom: 16 }}>{header}</Box>}

      <VStack gap={3} align="center" style={{ flex: 1 }}>
        {items.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <Pressable
              key={item.key}
              onPress={() => onSelect?.(item.key)}
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                backgroundColor: isActive ? "rgba(124, 58, 237, 0.25)" : "transparent",
                borderWidth: isActive ? 1 : 0,
                borderColor: isActive ? semanticColors.primary : "transparent",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {item.icon}
              <Text
                size="xs"
                weight={isActive ? "bold" : "medium"}
                color={isActive ? semanticColors.primary : semanticColors.foregroundMuted}
                style={{ fontSize: 10 }}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </VStack>

      {footer && <Box style={{ marginTop: 16 }}>{footer}</Box>}
    </Box>
  );
};
NavigationRail.displayName = "NavigationRail";

// 5. Navbar (Web & App wide responsive header)
export type NavbarProps = {
  brand: React.ReactNode;
  links?: { label: string; href?: string; active?: boolean; onPress?: () => void }[];
  searchSlot?: React.ReactNode;
  actions?: React.ReactNode;
  style?: ViewStyle;
};

export const Navbar = ({ brand, links = [], searchSlot, actions, style }: NavbarProps) => {
  const { semanticColors } = useTheme();

  return (
    <Inline
      justify="space-between"
      align="center"
      style={[
        {
          height: 64,
          paddingHorizontal: 20,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          gap: 16,
        },
        style,
      ]}
    >
      <HStack gap={6} align="center">
        {brand}
        {links.length > 0 && (
          <HStack gap={4} align="center">
            {links.map((link, idx) => (
              <Pressable key={idx} onPress={link.onPress}>
                <Text
                  size="sm"
                  weight={link.active ? "bold" : "medium"}
                  color={link.active ? semanticColors.primary : semanticColors.foregroundMuted}
                >
                  {link.label}
                </Text>
              </Pressable>
            ))}
          </HStack>
        )}
      </HStack>

      <HStack gap={4} align="center">
        {searchSlot}
        {actions}
      </HStack>
    </Inline>
  );
};
Navbar.displayName = "Navbar";

// 6. Header (Page Hero Header with breadcrumb and actions)
export type HeaderProps = {
  breadcrumbs?: BreadcrumbsProps["items"];
  title: string;
  description?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  style?: ViewStyle;
};

export const Header = ({
  breadcrumbs,
  title,
  description,
  badge,
  actions,
  style,
}: HeaderProps) => {
  const { semanticColors } = useTheme();

  return (
    <VStack gap={3} style={[{ paddingVertical: 16 }, style]}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <Inline justify="space-between" align="center">
        <HStack gap={3} align="center">
          <Text size="2xl" weight="bold" color={semanticColors.foreground}>
            {title}
          </Text>
          {badge}
        </HStack>

        {actions && <Inline gap={2}>{actions}</Inline>}
      </Inline>

      {description && (
        <Text size="sm" color={semanticColors.foregroundMuted} lineHeight="sm">
          {description}
        </Text>
      )}
    </VStack>
  );
};
Header.displayName = "Header";

// 7. Toolbar (Formatting / Filter action toolbar)
export type ToolbarProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const Toolbar = ({ children, style }: ToolbarProps) => {
  const { semanticColors } = useTheme();

  return (
    <Inline
      gap={2}
      align="center"
      style={[
        {
          padding: 8,
          backgroundColor: semanticColors.surfaceSubtle,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: semanticColors.border,
        },
        style,
      ]}
    >
      {children}
    </Inline>
  );
};
Toolbar.displayName = "Toolbar";

// 8. Pagination (Numbered with boundary controls)
export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  showPageNumbers?: boolean;
  style?: ViewStyle;
};

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  showPageNumbers = true,
  style,
}: PaginationProps) => {
  const { semanticColors } = useTheme();

  const getVisiblePages = () => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Inline gap={2} align="center" justify="center" style={style}>
      <Pressable
        onPress={() => page > 1 && onPageChange?.(page - 1)}
        disabled={page <= 1}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 8,
          backgroundColor: semanticColors.surfaceSubtle,
          opacity: page <= 1 ? 0.4 : 1,
        }}
      >
        <Text size="xs" weight="bold">← Prev</Text>
      </Pressable>

      {showPageNumbers &&
        getVisiblePages().map((p) => {
          const isCurrent = p === page;
          return (
            <Pressable
              key={p}
              onPress={() => onPageChange?.(p)}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                backgroundColor: isCurrent ? semanticColors.primary : "transparent",
                borderWidth: isCurrent ? 0 : 1,
                borderColor: semanticColors.border,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text size="xs" weight="bold" color={isCurrent ? "#FFFFFF" : semanticColors.foreground}>
                {p}
              </Text>
            </Pressable>
          );
        })}

      <Pressable
        onPress={() => page < totalPages && onPageChange?.(page + 1)}
        disabled={page >= totalPages}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 8,
          backgroundColor: semanticColors.surfaceSubtle,
          opacity: page >= totalPages ? 0.4 : 1,
        }}
      >
        <Text size="xs" weight="bold">Next →</Text>
      </Pressable>
    </Inline>
  );
};
Pagination.displayName = "Pagination";

// 9. Stepper (Numbered wizard steps with connecting progress)
export type StepItem = {
  title: string;
  description?: string;
};

export type StepperProps = {
  steps?: StepItem[];
  currentStep: number;
  totalSteps?: number;
  onStepPress?: (step: number) => void;
  style?: ViewStyle;
};

export const Stepper = ({
  steps,
  currentStep,
  totalSteps = steps?.length ?? 4,
  onStepPress,
  style,
}: StepperProps) => {
  const { semanticColors } = useTheme();

  return (
    <VStack gap={3} style={style}>
      <Inline align="center" justify="space-between" style={{ position: "relative" }}>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <React.Fragment key={index}>
              <Pressable
                onPress={() => onStepPress?.(index)}
                style={{
                  alignItems: "center",
                  gap: 6,
                  zIndex: 2,
                }}
              >
                <Box
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: isCompleted || isCurrent ? semanticColors.primary : semanticColors.surfaceSubtle,
                    borderWidth: 2,
                    borderColor: isCurrent ? "#FFFFFF" : isCompleted ? semanticColors.primary : semanticColors.border,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text size="xs" weight="bold" color="#FFFFFF">
                    {isCompleted ? "✓" : index + 1}
                  </Text>
                </Box>
                {steps?.[index] && (
                  <Text
                    size="xs"
                    weight={isCurrent ? "bold" : "medium"}
                    color={isCurrent ? semanticColors.primary : semanticColors.foregroundMuted}
                  >
                    {steps[index].title}
                  </Text>
                )}
              </Pressable>

              {index < totalSteps - 1 && (
                <Box
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: index < currentStep ? semanticColors.primary : semanticColors.border,
                    marginHorizontal: 8,
                    marginBottom: steps ? 20 : 0,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </Inline>
    </VStack>
  );
};
Stepper.displayName = "Stepper";
