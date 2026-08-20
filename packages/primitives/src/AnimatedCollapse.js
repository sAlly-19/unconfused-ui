"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedCollapse = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const tokens_1 = require("@unconfused-ui/tokens");
const AnimatedCollapse = ({ expanded, children, preset = "snappy", style, }) => {
    const [contentHeight, setContentHeight] = (0, react_1.useState)(null);
    const animatedHeight = (0, react_1.useRef)(new react_native_1.Animated.Value(expanded ? 1 : 0)).current;
    (0, react_1.useEffect)(() => {
        const springConfig = tokens_1.motion.spring[preset] ?? tokens_1.motion.spring.snappy;
        react_native_1.Animated.spring(animatedHeight, {
            toValue: expanded ? 1 : 0,
            damping: springConfig.damping,
            stiffness: springConfig.stiffness,
            mass: springConfig.mass,
            useNativeDriver: false,
        }).start();
    }, [expanded, preset, animatedHeight]);
    const onLayout = (e) => {
        const { height } = e.nativeEvent.layout;
        if (height > 0 && contentHeight === null) {
            setContentHeight(height);
        }
    };
    const heightInterpolation = animatedHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight ?? 0],
    });
    const opacityInterpolation = animatedHeight.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [0, 0.4, 1],
    });
    return ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [
            {
                overflow: "hidden",
                height: contentHeight !== null ? heightInterpolation : undefined,
                opacity: opacityInterpolation,
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(react_native_1.View, { onLayout: onLayout, style: { position: contentHeight === null ? "relative" : undefined }, children: children }) }));
};
exports.AnimatedCollapse = AnimatedCollapse;
exports.AnimatedCollapse.displayName = "AnimatedCollapse";
