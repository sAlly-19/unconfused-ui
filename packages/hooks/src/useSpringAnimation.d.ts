import { Animated } from "react-native";
export type SpringPreset = "snappy" | "bouncy" | "gentle";
export type UseSpringAnimationOptions = {
    toValue: number;
    initialValue?: number;
    preset?: SpringPreset;
    useNativeDriver?: boolean;
    onFinished?: () => void;
};
/**
 * Hook to animate values using Unconfused UI physical spring tokens.
 */
export declare function useSpringAnimation({ toValue, initialValue, preset, useNativeDriver, onFinished, }: UseSpringAnimationOptions): Animated.Value;
//# sourceMappingURL=useSpringAnimation.d.ts.map