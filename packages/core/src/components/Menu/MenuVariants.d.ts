import React from "react";
import { ViewStyle } from "react-native";
export type MenuItemProps = {
    label: string;
    icon?: React.ReactNode;
    shortcut?: string;
    onPress?: () => void;
    destructive?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
};
export declare const MenuItem: {
    ({ label, icon, shortcut, onPress, destructive, disabled, style, }: MenuItemProps): React.JSX.Element;
    displayName: string;
};
export declare const MenuGroup: {
    ({ title, children }: {
        title?: string;
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const MenuSeparator: {
    (): React.JSX.Element;
    displayName: string;
};
export declare const Menu: (({ children, style }: {
    children: React.ReactNode;
    style?: ViewStyle;
}) => React.JSX.Element) & {
    Item: {
        ({ label, icon, shortcut, onPress, destructive, disabled, style, }: MenuItemProps): React.JSX.Element;
        displayName: string;
    };
    Group: {
        ({ title, children }: {
            title?: string;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Separator: {
        (): React.JSX.Element;
        displayName: string;
    };
};
export type DropdownProps = {
    trigger: React.ReactNode;
    children: React.ReactNode;
};
export declare const Dropdown: {
    ({ trigger, children }: DropdownProps): React.JSX.Element;
    displayName: string;
};
export type CommandItem = {
    id: string;
    label: string;
    category?: string;
    icon?: React.ReactNode;
    shortcut?: string;
    onSelect?: () => void;
};
export type CommandPaletteProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    items: CommandItem[];
    placeholder?: string;
};
export declare const CommandPalette: {
    ({ open, onOpenChange, items, placeholder, }: CommandPaletteProps): React.JSX.Element;
    displayName: string;
};
export declare const CommandMenu: {
    ({ open, onOpenChange, items, placeholder, }: CommandPaletteProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MenuVariants.d.ts.map