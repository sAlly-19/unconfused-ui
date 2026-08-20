import React from "react";
import { ViewStyle } from "react-native";
import { SidebarNavItemProps, SidebarProps } from "./Sidebar.types";
type SidebarContextValue = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    width: number;
    collapsedWidth: number;
};
export declare function useSidebarContext(): SidebarContextValue;
export declare const SidebarRoot: {
    ({ collapsed: propCollapsed, defaultCollapsed, onCollapseChange, width, collapsedWidth, style, children, }: SidebarProps): React.JSX.Element;
    displayName: string;
};
export declare const SidebarHeader: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const SidebarNav: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const SidebarNavItem: {
    ({ icon, label, badge, active, onPress, style, children, }: SidebarNavItemProps): React.JSX.Element;
    displayName: string;
};
export declare const SidebarFooter: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const SidebarToggle: {
    ({ style }: {
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const Sidebar: {
    ({ collapsed: propCollapsed, defaultCollapsed, onCollapseChange, width, collapsedWidth, style, children, }: SidebarProps): React.JSX.Element;
    displayName: string;
} & {
    Header: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Nav: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    NavItem: {
        ({ icon, label, badge, active, onPress, style, children, }: SidebarNavItemProps): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Toggle: {
        ({ style }: {
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
};
export {};
//# sourceMappingURL=Sidebar.d.ts.map