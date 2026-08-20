import React from "react";
import { ViewStyle } from "react-native";
export type AnimationType = "fade" | "spring" | "scale" | "slide-up" | "slide-down" | "bounce" | "glow";
export type AnimatedBoxProps = {
    isAnimated?: boolean;
    animationType?: AnimationType;
    delay?: number;
    duration?: number;
    style?: ViewStyle | ViewStyle[];
    children?: React.ReactNode;
};
/**
 * Universal AnimatedBox primitive enabling seamless physical animations across UI components.
 */
export declare const AnimatedBox: React.FC<AnimatedBoxProps>;
//# sourceMappingURL=AnimatedBox.d.ts.map