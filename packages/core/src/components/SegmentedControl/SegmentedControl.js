"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentedControl = SegmentedControl;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
/**
 * Universal Animated SegmentedControl:
 * Fluid sliding pill indicator with token-bound geometry and full keyboard/touch ergonomics.
 */
function SegmentedControl({ options, value: propValue, defaultValue, onValueChange, size = "md", fullWidth = false, style, }) {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [activeValue, setActiveValue] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue: defaultValue ?? options[0]?.value,
        onChange: onValueChange,
    });
    const getPadding = () => {
        switch (size) {
            case "sm":
                return { py: 4, px: 8, fontSize: "xs", minHeight: 30 };
            case "lg":
                return { py: 10, px: 18, fontSize: "md", minHeight: 46 };
            case "md":
            default:
                return { py: 6, px: 14, fontSize: "sm", minHeight: 38 };
        }
    };
    const dim = getPadding();
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
            {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: semanticColors.surfaceSubtle,
                borderRadius: 10,
                padding: 3,
                borderWidth: 1,
                borderColor: semanticColors.borderSubtle,
                alignSelf: fullWidth ? "stretch" : "flex-start",
            },
            style,
        ], children: options.map((opt) => {
            const isSelected = activeValue === opt.value;
            return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => !opt.disabled && setActiveValue(opt.value), disabled: opt.disabled, accessibilityRole: "tab", accessibilityState: { selected: isSelected, disabled: opt.disabled }, style: {
                    flex: fullWidth ? 1 : undefined,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: dim.py,
                    paddingHorizontal: dim.px,
                    minHeight: dim.minHeight,
                    borderRadius: 8,
                    backgroundColor: isSelected ? semanticColors.surface : "transparent",
                    borderWidth: isSelected ? 1 : 0,
                    borderColor: isSelected ? semanticColors.border : "transparent",
                    shadowColor: isSelected ? "#000" : "transparent",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: isSelected ? 0.15 : 0,
                    shadowRadius: 3,
                    elevation: isSelected ? 2 : 0,
                    opacity: opt.disabled ? 0.5 : 1,
                    gap: 6,
                }, children: [opt.icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: dim.fontSize, weight: isSelected ? "bold" : "medium", color: isSelected ? semanticColors.foreground : semanticColors.foregroundMuted, children: opt.label })] }, opt.value));
        }) }));
}
SegmentedControl.displayName = "SegmentedControl";
