import React from "react";
import { SafeAreaView, ViewProps } from "react-native";
export type SafeAreaProps = ViewProps & {
    bg?: string;
    children?: React.ReactNode;
};
export declare const SafeArea: React.ForwardRefExoticComponent<ViewProps & {
    bg?: string;
    children?: React.ReactNode;
} & React.RefAttributes<SafeAreaView>>;
//# sourceMappingURL=SafeArea.d.ts.map