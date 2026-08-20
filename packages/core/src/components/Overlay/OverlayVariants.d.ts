import React from "react";
import { ViewStyle } from "react-native";
import { DialogProps } from "../Dialog";
import { SheetProps } from "../Sheet";
export * from "../Dialog";
export * from "../Sheet";
export * from "../Popover";
export * from "../Tooltip";
export declare const Modal: {
    ({ open, onOpenChange, style, children }: DialogProps): React.JSX.Element;
    displayName: string;
} & {
    Header: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children }: {
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Description: {
        ({ children }: {
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
};
export type DrawerProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    position?: "left" | "right";
    width?: number | `${number}%`;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const Drawer: {
    ({ open, onOpenChange, position, width, style, children, }: DrawerProps): React.JSX.Element;
    displayName: string;
};
export declare const BottomSheet: {
    ({ open, onOpenChange, style, children }: SheetProps): React.JSX.Element;
    displayName: string;
} & {
    Header: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children }: {
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Description: {
        ({ children }: {
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
};
export type ActionSheetItem = {
    label: string;
    onPress: () => void;
    icon?: React.ReactNode;
    destructive?: boolean;
    disabled?: boolean;
};
export type ActionSheetProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
    actions: ActionSheetItem[];
    cancelText?: string;
};
export declare const ActionSheet: {
    ({ open, onOpenChange, title, description, actions, cancelText, }: ActionSheetProps): React.JSX.Element;
    displayName: string;
};
export type OverlayMenuItem = {
    label: string;
    onPress?: () => void;
    icon?: React.ReactNode;
    shortcut?: string;
    destructive?: boolean;
    divider?: boolean;
};
export type DropdownMenuProps = {
    trigger: React.ReactNode;
    items: OverlayMenuItem[];
};
export declare const DropdownMenu: {
    ({ trigger, items }: DropdownMenuProps): React.JSX.Element;
    displayName: string;
};
export declare const ContextMenu: {
    ({ trigger, items }: DropdownMenuProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=OverlayVariants.d.ts.map