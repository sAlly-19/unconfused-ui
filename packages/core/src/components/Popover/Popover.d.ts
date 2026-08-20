import React from "react";
import { ViewStyle } from "react-native";
type PopoverContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
export declare function usePopoverContext(): PopoverContextValue;
export type PopoverProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
};
export declare const PopoverRoot: {
    ({ open: propOpen, defaultOpen, onOpenChange, children }: PopoverProps): React.JSX.Element;
    displayName: string;
};
export declare const PopoverTrigger: {
    ({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const PopoverContent: {
    ({ style, children }: {
        style?: ViewStyle;
        children: React.ReactNode;
    }): React.JSX.Element | null;
    displayName: string;
};
export declare const Popover: {
    ({ open: propOpen, defaultOpen, onOpenChange, children }: PopoverProps): React.JSX.Element;
    displayName: string;
} & {
    Trigger: {
        ({ children }: {
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ style, children }: {
            style?: ViewStyle;
            children: React.ReactNode;
        }): React.JSX.Element | null;
        displayName: string;
    };
};
export {};
//# sourceMappingURL=Popover.d.ts.map