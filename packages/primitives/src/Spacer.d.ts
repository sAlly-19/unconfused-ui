import React from "react";
import { ViewStyle } from "react-native";
import { Spacing } from "@unconfused-ui/tokens";
export type SpacerProps = {
    size?: keyof Spacing | number;
    horizontal?: boolean;
    flex?: number;
    style?: ViewStyle;
};
export declare const Spacer: {
    ({ size, horizontal, flex, style }: SpacerProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Spacer.d.ts.map