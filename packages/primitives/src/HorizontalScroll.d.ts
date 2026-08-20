import React from "react";
import { ScrollView as RNScrollView, ScrollViewProps as RNScrollViewProps } from "react-native";
import { Spacing } from "@unconfused-ui/tokens";
export type HorizontalScrollProps = Omit<RNScrollViewProps, "horizontal"> & {
    gap?: keyof Spacing | number;
    contentPadding?: keyof Spacing | number;
};
export declare const HorizontalScroll: React.ForwardRefExoticComponent<Omit<RNScrollViewProps, "horizontal"> & {
    gap?: keyof Spacing | number;
    contentPadding?: keyof Spacing | number;
} & React.RefAttributes<RNScrollView>>;
//# sourceMappingURL=HorizontalScroll.d.ts.map