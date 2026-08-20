import React from "react";
import { View, ViewProps } from "react-native";
import { Radii, Shadows, Materials } from "@unconfused-ui/tokens";
export type SurfaceProps = ViewProps & {
    variant?: "default" | "subtle" | "bordered" | "flat";
    material?: keyof Materials;
    elevation?: keyof Shadows;
    radius?: keyof Radii | number;
    children?: React.ReactNode;
};
export declare const Surface: React.ForwardRefExoticComponent<ViewProps & {
    variant?: "default" | "subtle" | "bordered" | "flat";
    material?: keyof Materials;
    elevation?: keyof Shadows;
    radius?: keyof Radii | number;
    children?: React.ReactNode;
} & React.RefAttributes<View>>;
//# sourceMappingURL=Surface.d.ts.map