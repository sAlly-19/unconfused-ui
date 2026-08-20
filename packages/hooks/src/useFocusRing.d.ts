export type FocusRingOptions = {
    offset?: number;
    width?: number;
};
export type FocusRingResult = {
    isFocused: boolean;
    isFocusVisible: boolean;
    focusProps: {
        onFocus: () => void;
        onBlur: () => void;
    };
    focusRingStyle: object;
};
/**
 * Universal Focus Ring Hook providing W3C-compliant double halo focus indicators for keyboard navigation.
 */
export declare function useFocusRing(options?: FocusRingOptions): FocusRingResult;
//# sourceMappingURL=useFocusRing.d.ts.map