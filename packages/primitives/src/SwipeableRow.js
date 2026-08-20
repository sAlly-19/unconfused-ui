"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeableRow = SwipeableRow;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
/**
 * Universal Swipeable Row Primitive:
 * Supports native touch and pointer gestures to reveal actions or dismiss rows.
 */
function SwipeableRow({ children, leftAction, rightAction, onSwipeLeft, onSwipeRight, threshold = 80, style, }) {
    const { semanticColors } = (0, theme_1.useTheme)();
    const pan = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 10,
        onPanResponderMove: (_, gesture) => {
            pan.setValue(gesture.dx);
        },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dx < -threshold && onSwipeLeft) {
                react_native_1.Animated.spring(pan, { toValue: -120, useNativeDriver: true, bounciness: 4 }).start();
                onSwipeLeft();
            }
            else if (gesture.dx > threshold && onSwipeRight) {
                react_native_1.Animated.spring(pan, { toValue: 120, useNativeDriver: true, bounciness: 4 }).start();
                onSwipeRight();
            }
            else {
                react_native_1.Animated.spring(pan, { toValue: 0, useNativeDriver: true, bounciness: 6 }).start();
            }
        },
    })).current;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.container, style], children: [leftAction && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.action, styles.leftAction], children: leftAction }), rightAction && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.action, styles.rightAction], children: rightAction }), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [
                    styles.content,
                    { backgroundColor: semanticColors.surface, transform: [{ translateX: pan }] },
                ], ...panResponder.panHandlers, children: children })] }));
}
const styles = react_native_1.StyleSheet.create({
    container: {
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
    },
    action: {
        position: "absolute",
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    leftAction: {
        left: 0,
        paddingLeft: 16,
    },
    rightAction: {
        right: 0,
        paddingRight: 16,
    },
    content: {
        zIndex: 2,
    },
});
SwipeableRow.displayName = "SwipeableRow";
