import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type SidebarProps = {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  width?: number;
  collapsedWidth?: number;
  style?: ViewStyle;
  children: React.ReactNode;
};

export type SidebarNavItemProps = {
  icon?: React.ReactNode;
  label?: string;
  badge?: React.ReactNode;
  active?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle> | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);
  children?: React.ReactNode;
};
