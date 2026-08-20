import React from "react";
import { ViewStyle } from "react-native";
export type SheetProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const SheetRoot: {
    ({ open, onOpenChange, style, children }: SheetProps): React.JSX.Element;
    displayName: string;
};
export declare const SheetHeader: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const SheetTitle: {
    ({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const SheetDescription: {
    ({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const SheetContent: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const SheetFooter: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const Sheet: {
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
//# sourceMappingURL=Sheet.d.ts.map