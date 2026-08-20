"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusRing = useFocusRing;
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
let isKeyboardNavigation = false;
if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
        if (e.key === "Tab" || e.key.startsWith("Arrow")) {
            isKeyboardNavigation = true;
        }
    }, true);
    window.addEventListener("pointerdown", () => {
        isKeyboardNavigation = false;
    }, true);
}
/**
 * Universal Focus Ring Hook providing W3C-compliant double halo focus indicators for keyboard navigation.
 */
function useFocusRing(options = {}) {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const [isFocusVisible, setIsFocusVisible] = (0, react_1.useState)(false);
    const onFocus = (0, react_1.useCallback)(() => {
        setIsFocused(true);
        if (react_native_1.Platform.OS === "web") {
            setIsFocusVisible(isKeyboardNavigation);
        }
        else {
            setIsFocusVisible(true);
        }
    }, []);
    const onBlur = (0, react_1.useCallback)(() => {
        setIsFocused(false);
        setIsFocusVisible(false);
    }, []);
    const focusRingStyle = isFocusVisible
        ? {
            borderWidth: 2,
            borderColor: semanticColors.primary,
            shadowColor: semanticColors.primary,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 6,
            elevation: 4,
        }
        : {};
    return {
        isFocused,
        isFocusVisible,
        focusProps: {
            onFocus,
            onBlur,
        },
        focusRingStyle,
    };
}
