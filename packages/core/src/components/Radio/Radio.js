"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = exports.RadioGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const RadioGroupContext = (0, react_1.createContext)(null);
const RadioGroup = ({ value: propValue, defaultValue = "", onValueChange, disabled = false, style, children, }) => {
    const [value, setValue] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    return ((0, jsx_runtime_1.jsx)(RadioGroupContext.Provider, { value: { value, setValue, disabled }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 2, style: style, accessibilityRole: "radiogroup", children: children }) }));
};
exports.RadioGroup = RadioGroup;
const Radio = ({ value: radioValue, label, disabled: itemDisabled = false, style }) => {
    const context = (0, react_1.useContext)(RadioGroupContext);
    const { semanticColors } = (0, theme_1.useTheme)();
    if (!context) {
        throw new Error("<Radio> must be used within a <RadioGroup>");
    }
    const isSelected = context.value === radioValue;
    const isDisabled = context.disabled || itemDisabled;
    const handlePress = () => {
        if (isDisabled)
            return;
        context.setValue(radioValue);
    };
    const circleStyle = {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: isSelected ? semanticColors.primary : semanticColors.borderBold,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: isSelected ? semanticColors.primary : "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: isSelected ? 2 : 0,
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: handlePress, disabled: isDisabled, accessibilityRole: "radio", accessibilityState: { selected: isSelected, disabled: isDisabled }, style: [
            {
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                minHeight: 44, // 44pt touch target
                opacity: isDisabled ? 0.5 : 1,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: circleStyle, children: isSelected && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: semanticColors.primary,
                    } })) }), label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "medium", color: semanticColors.foreground, children: label }))] }));
};
exports.Radio = Radio;
