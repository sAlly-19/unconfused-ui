import React from "react";
import { View } from "react-native";
import { HStackProps } from "./HStack";
export type RowProps = HStackProps & {
    gutter?: HStackProps["gap"];
};
export declare const Row: React.ForwardRefExoticComponent<HStackProps & {
    gutter?: HStackProps["gap"];
} & React.RefAttributes<View>>;
//# sourceMappingURL=Row.d.ts.map