"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
/**
 * Universal AnimatedBox primitive enabling seamless physical animations across UI components.
 */
const AnimatedBox = ({ isAnimated = true, animationType = "fade", delay = 0, duration = 300, style, children, }) => {
    const animValue = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(() => {
        if (!isAnimated) {
            animValue.setValue(1);
            return;
        }
        animValue.setValue(0);
        const timingConfig = {
            toValue: 1,
            duration,
            useNativeDriver: true,
        };
        let animation;
        switch (animationType) {
            case "spring":
            case "bounce":
                animation = react_native_1.Animated.spring(animValue, {
                    toValue: 1,
                    damping: animationType === "bounce" ? 8 : 15,
                    stiffness: 200,
                    useNativeDriver: true,
                });
                break;
            case "glow":
                animation = react_native_1.Animated.loop(react_native_1.Animated.sequence([
                    react_native_1.Animated.timing(animValue, { toValue: 1, duration: 800, useNativeDriver: true }),
                    react_native_1.Animated.timing(animValue, { toValue: 0.4, duration: 800, useNativeDriver: true }),
                ]));
                break;
            case "fade":
            case "scale":
            case "slide-up":
            case "slide-down":
            default:
                animation = react_native_1.Animated.timing(animValue, timingConfig);
                break;
        }
        if (delay > 0) {
            const timer = setTimeout(() => animation.start(), delay);
            return () => clearTimeout(timer);
        }
        else {
            animation.start();
        }
        return () => {
            animation.stop();
        };
    }, [isAnimated, animationType, delay, duration, animValue]);
    if (!isAnimated) {
        return (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: style, children: children });
    }
    const getTransform = () => {
        switch (animationType) {
            case "scale":
                return [{ scale: animValue.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] }) }];
            case "spring":
            case "bounce":
                return [{ scale: animValue.interpolate({ inputRange: [0, 1], outputRange: [0.92, 1] }) }];
            case "slide-up":
                return [{ translateY: animValue.interpolate({ inputRange: [0, 1], outputRange: [16, 0] }) }];
            case "slide-down":
                return [{ translateY: animValue.interpolate({ inputRange: [0, 1], outputRange: [-16, 0] }) }];
            default:
                return undefined;
        }
    };
    const getOpacity = () => {
        switch (animationType) {
            case "glow":
                return animValue;
            case "fade":
            case "scale":
            case "spring":
            case "slide-up":
            case "slide-down":
            case "bounce":
            default:
                return animValue.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
        }
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [
            {
                opacity: getOpacity(),
                transform: getTransform(),
            },
            style,
        ], children: children }));
};
exports.AnimatedBox = AnimatedBox;
exports.AnimatedBox.displayName = "AnimatedBox";
