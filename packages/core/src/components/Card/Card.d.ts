import React from "react";
import { View, ViewStyle } from "react-native";
export type CardProps = {
    variant?: "default" | "subtle" | "bordered" | "glass";
    elevation?: "none" | "sm" | "md" | "lg";
    accentBar?: boolean;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const CardRoot: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<View>>;
export declare const CardHeader: {
    ({ style, children }: {
        style?: ViewStyle;
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const CardTitle: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: any;
    }): React.JSX.Element;
    displayName: string;
};
export declare const CardDescription: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: any;
    }): React.JSX.Element;
    displayName: string;
};
export declare const CardContent: {
    ({ style, children }: {
        style?: ViewStyle;
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const CardFooter: {
    ({ style, children }: {
        style?: ViewStyle;
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<View>> & {
    Header: {
        ({ style, children }: {
            style?: ViewStyle;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: any;
        }): React.JSX.Element;
        displayName: string;
    };
    Description: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: any;
        }): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ style, children }: {
            style?: ViewStyle;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ style, children }: {
            style?: ViewStyle;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Card.d.ts.map