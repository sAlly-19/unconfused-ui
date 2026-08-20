"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullToRefresh = exports.PinchZoom = exports.PanGesture = exports.Resizable = exports.Droppable = exports.Draggable = exports.DoubleTap = exports.LongPress = exports.SwipeActions = exports.Swipeable = exports.Touchable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
// 1. Touchable & Pressable
const Touchable = (props) => (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { ...props });
exports.Touchable = Touchable;
exports.Touchable.displayName = "Touchable";
const Swipeable = ({ leftActions, rightActions, children, style }) => {
    const [offset, setOffset] = (0, react_1.useState)(0);
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [
            {
                borderRadius: 14,
                overflow: "hidden",
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.85),
                borderWidth: 1,
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.08),
                position: "relative",
            },
            style,
        ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, paddingHorizontal: 12 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { children: leftActions }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { children: rightActions })] }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                    transform: [{ translateX: offset }],
                    backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.98),
                    padding: 16,
                }, children: children })] }));
};
exports.Swipeable = Swipeable;
exports.Swipeable.displayName = "Swipeable";
const SwipeActions = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, style: style, children: children }));
exports.SwipeActions = SwipeActions;
exports.SwipeActions.displayName = "SwipeActions";
const LongPress = ({ onLongPress, delayLongPress = 500, children, style }) => {
    const [pressed, setPressed] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPressIn: () => setPressed(true), onPressOut: () => setPressed(false), onLongPress: onLongPress, delayLongPress: delayLongPress, style: [
            {
                opacity: pressed ? 0.75 : 1,
                transform: [{ scale: pressed ? 0.97 : 1 }],
            },
            style,
        ], children: children }));
};
exports.LongPress = LongPress;
exports.LongPress.displayName = "LongPress";
const DoubleTap = ({ onDoubleTap, delay = 300, children, style }) => {
    const [lastTap, setLastTap] = (0, react_1.useState)(0);
    const handlePress = () => {
        const now = Date.now();
        if (now - lastTap < delay) {
            onDoubleTap?.();
            setLastTap(0);
        }
        else {
            setLastTap(now);
        }
    };
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: handlePress, style: style, children: children }));
};
exports.DoubleTap = DoubleTap;
exports.DoubleTap.displayName = "DoubleTap";
const Draggable = ({ children, style }) => {
    const [position, setPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                transform: [{ translateX: position.x }, { translateY: position.y }],
            },
            style,
        ], children: children }));
};
exports.Draggable = Draggable;
exports.Draggable.displayName = "Draggable";
const Droppable = ({ children, style }) => {
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                borderWidth: 2,
                borderStyle: "dashed",
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.brand[500], 0.4),
                borderRadius: 16,
                padding: 20,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.brand[500], 0.05),
                alignItems: "center",
                justifyContent: "center",
            },
            style,
        ], children: children }));
};
exports.Droppable = Droppable;
exports.Droppable.displayName = "Droppable";
// 6. Resizable, PanGesture, PinchZoom
const Resizable = ({ children, style }) => {
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ borderWidth: 1, borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1), borderRadius: 14, padding: 14 }, style], children: children }));
};
exports.Resizable = Resizable;
exports.Resizable.displayName = "Resizable";
const PanGesture = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: style, children: children }));
exports.PanGesture = PanGesture;
exports.PanGesture.displayName = "PanGesture";
const PinchZoom = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: style, children: children }));
exports.PinchZoom = PinchZoom;
exports.PinchZoom.displayName = "PinchZoom";
const PullToRefresh = (props) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return (0, jsx_runtime_1.jsx)(react_native_1.RefreshControl, { tintColor: semanticColors.primary, colors: [semanticColors.primary], ...props });
};
exports.PullToRefresh = PullToRefresh;
exports.PullToRefresh.displayName = "PullToRefresh";
