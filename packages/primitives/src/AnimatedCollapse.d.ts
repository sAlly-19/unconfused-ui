import React from "react";
import { ViewStyle } from "react-native";
export type AnimatedCollapseProps = {
    expanded: boolean;
    children: React.ReactNode;
    preset?: "snappy" | "bouncy" | "gentle";
    style?: ViewStyle;
};
export declare const AnimatedCollapse: React.FC<AnimatedCollapseProps>;
//# sourceMappingURL=AnimatedCollapse.d.ts.map