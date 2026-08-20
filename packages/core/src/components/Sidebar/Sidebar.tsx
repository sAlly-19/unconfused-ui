import React, { createContext, useContext } from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Box, Inline, Pressable, Stack, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { getSidebarNavItemRecipe } from "./Sidebar.styles";
import { SidebarNavItemProps, SidebarProps } from "./Sidebar.types";

type SidebarContextValue = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  width: number;
  collapsedWidth: number;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Sidebar sub-components must be used within a <Sidebar>");
  }
  return context;
}

export const SidebarRoot = ({
  collapsed: propCollapsed,
  defaultCollapsed = false,
  onCollapseChange,
  width = 260,
  collapsedWidth = 72,
  style,
  children,
}: SidebarProps) => {
  const { semanticColors } = useTheme();
  const [collapsed, setCollapsed] = useControllableState({
    value: propCollapsed,
    defaultValue: defaultCollapsed,
    onChange: onCollapseChange,
  });

  const activeWidth = collapsed ? collapsedWidth : width;

  const sidebarStyle: ViewStyle = {
    width: activeWidth,
    height: "100%",
    backgroundColor: "rgba(12, 14, 24, 0.95)",
    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255, 0.08)",
    paddingVertical: 16,
    paddingHorizontal: collapsed ? 8 : 14,
    justifyContent: "space-between",
  };

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, width, collapsedWidth }}>
      <View style={[sidebarStyle, style]} accessibilityRole="menu">
        {children}
      </View>
    </SidebarContext.Provider>
  );
};
SidebarRoot.displayName = "Sidebar";

export const SidebarHeader = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Box style={[{ marginBottom: 20 }, style]}>{children}</Box>
);
SidebarHeader.displayName = "Sidebar.Header";

export const SidebarNav = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Stack gap={1.5} style={[{ flex: 1 }, style]}>
    {children}
  </Stack>
);
SidebarNav.displayName = "Sidebar.Nav";

export const SidebarNavItem = ({
  icon,
  label,
  badge,
  active = false,
  onPress,
  style,
  children,
}: SidebarNavItemProps) => {
  const { semanticColors } = useTheme();
  const { collapsed } = useSidebarContext();
  const itemRecipe = getSidebarNavItemRecipe(semanticColors);

  const activeStyle = itemRecipe({ active: active ? "active" : "inactive" });

  const labelColor = active ? semanticColors.foreground : semanticColors.foregroundMuted;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      style={(state) => [
        ...activeStyle,
        collapsed && { justifyContent: "center", paddingHorizontal: 0 },
        typeof style === "function" ? style(state) : style,
      ]}
    >
      {icon}

      {!collapsed && (
        <Inline justify="space-between" align="center" style={{ flex: 1 }}>
          {label ? (
            <Text size="sm" weight={active ? "semibold" : "regular"} color={labelColor}>
              {label}
            </Text>
          ) : (
            children
          )}
          {badge}
        </Inline>
      )}
    </Pressable>
  );
};
SidebarNavItem.displayName = "Sidebar.NavItem";

export const SidebarFooter = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Box style={[{ paddingTop: 16, borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.06)" }, style]}>
    {children}
  </Box>
);
SidebarFooter.displayName = "Sidebar.Footer";

export const SidebarToggle = ({ style }: { style?: ViewStyle }) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const { semanticColors } = useTheme();

  return (
    <Pressable
      onPress={() => setCollapsed(!collapsed)}
      accessibilityRole="button"
      accessibilityLabel={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      style={[
        {
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 6,
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.08)",
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Text size="xs" weight="medium" color={semanticColors.foregroundMuted}>
        {collapsed ? "»" : "« Collapse"}
      </Text>
    </Pressable>
  );
};
SidebarToggle.displayName = "Sidebar.Toggle";

export const Sidebar = Object.assign(SidebarRoot, {
  Header: SidebarHeader,
  Nav: SidebarNav,
  NavItem: SidebarNavItem,
  Footer: SidebarFooter,
  Toggle: SidebarToggle,
});
