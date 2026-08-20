"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePressableState = usePressableState;
const react_1 = require("react");
function usePressableState(options = {}) {
    const [isPressed, setIsPressed] = (0, react_1.useState)(false);
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const handlePressIn = (0, react_1.useCallback)((e) => {
        if (options.disabled)
            return;
        setIsPressed(true);
        options.onPressIn?.(e);
    }, [options]);
    const handlePressOut = (0, react_1.useCallback)((e) => {
        if (options.disabled)
            return;
        setIsPressed(false);
        options.onPressOut?.(e);
    }, [options]);
    const handleHoverIn = (0, react_1.useCallback)(() => {
        if (options.disabled)
            return;
        setIsHovered(true);
        options.onHoverIn?.();
    }, [options]);
    const handleHoverOut = (0, react_1.useCallback)(() => {
        if (options.disabled)
            return;
        setIsHovered(false);
        options.onHoverOut?.();
    }, [options]);
    const handleFocus = (0, react_1.useCallback)(() => {
        if (options.disabled)
            return;
        setIsFocused(true);
        options.onFocus?.();
    }, [options]);
    const handleBlur = (0, react_1.useCallback)(() => {
        if (options.disabled)
            return;
        setIsFocused(false);
        options.onBlur?.();
    }, [options]);
    return {
        isPressed,
        isHovered,
        isFocused,
        pressableProps: {
            onPressIn: handlePressIn,
            onPressOut: handlePressOut,
            onHoverIn: handleHoverIn,
            onHoverOut: handleHoverOut,
            onFocus: handleFocus,
            onBlur: handleBlur,
        },
    };
}
