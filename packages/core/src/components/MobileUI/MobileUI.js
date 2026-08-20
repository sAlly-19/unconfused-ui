"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HapticButton = exports.ShareButton = exports.BottomTabBar = exports.KeyboardAccessory = exports.StatusBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Button_1 = require("../Button");
const StatusBar = (props) => (0, jsx_runtime_1.jsx)(react_native_1.StatusBar, { ...props });
exports.StatusBar = StatusBar;
exports.StatusBar.displayName = "StatusBar";
const KeyboardAccessory = ({ style, children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 8,
                backgroundColor: semanticColors.surfaceSubtle,
                borderTopWidth: 1,
                borderTopColor: semanticColors.border,
            },
            style,
        ], children: children }));
};
exports.KeyboardAccessory = KeyboardAccessory;
exports.KeyboardAccessory.displayName = "KeyboardAccessory";
const BottomTabBar = ({ style, children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { justify: "space-around", align: "center", style: [
            {
                height: 60,
                backgroundColor: semanticColors.surface,
                borderTopWidth: 1,
                borderTopColor: semanticColors.border,
            },
            style,
        ], children: children }));
};
exports.BottomTabBar = BottomTabBar;
exports.BottomTabBar.displayName = "BottomTabBar";
const ShareButton = ({ shareContent, onPress, children, ...rest }) => {
    const handleShare = () => {
        if (shareContent) {
            react_native_1.Share.share(shareContent).catch(() => { });
        }
        onPress?.();
    };
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "outline", onPress: handleShare, ...rest, children: children ?? "Share" }));
};
exports.ShareButton = ShareButton;
exports.ShareButton.displayName = "ShareButton";
exports.HapticButton = Button_1.Button;
