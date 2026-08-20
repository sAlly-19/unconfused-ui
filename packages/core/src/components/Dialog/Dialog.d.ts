import React from "react";
import { ViewStyle } from "react-native";
export type DialogProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const DialogRoot: {
    ({ open, onOpenChange, style, children }: DialogProps): React.JSX.Element;
    displayName: string;
};
export declare const DialogHeader: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const DialogTitle: {
    ({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const DialogDescription: {
    ({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const DialogContent: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const DialogFooter: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const Dialog: {
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
//# sourceMappingURL=Dialog.d.ts.map