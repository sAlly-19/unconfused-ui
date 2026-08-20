import { GestureResponderEvent } from "react-native";
export type UsePressableStateOptions = {
    onPressIn?: ((event: GestureResponderEvent) => void) | null;
    onPressOut?: ((event: GestureResponderEvent) => void) | null;
    onHoverIn?: (() => void) | null;
    onHoverOut?: (() => void) | null;
    onFocus?: (() => void) | null;
    onBlur?: (() => void) | null;
    disabled?: boolean;
};
export declare function usePressableState(options?: UsePressableStateOptions): {
    isPressed: boolean;
    isHovered: boolean;
    isFocused: boolean;
    pressableProps: {
        onPressIn: (e: GestureResponderEvent) => void;
        onPressOut: (e: GestureResponderEvent) => void;
        onHoverIn: () => void;
        onHoverOut: () => void;
        onFocus: () => void;
        onBlur: () => void;
    };
};
//# sourceMappingURL=usePressableState.d.ts.map