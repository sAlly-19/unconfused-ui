"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpringAnimation = useSpringAnimation;
const react_1 = require("react");
const react_native_1 = require("react-native");
const tokens_1 = require("@unconfused-ui/tokens");
/**
 * Hook to animate values using Unconfused UI physical spring tokens.
 */
function useSpringAnimation({ toValue, initialValue = 0, preset = "snappy", useNativeDriver = true, onFinished, }) {
    const animatedValue = (0, react_1.useRef)(new react_native_1.Animated.Value(initialValue)).current;
    (0, react_1.useEffect)(() => {
        const springConfig = tokens_1.motion.spring[preset] ?? tokens_1.motion.spring.snappy;
        const anim = react_native_1.Animated.spring(animatedValue, {
            toValue,
            damping: springConfig.damping,
            stiffness: springConfig.stiffness,
            mass: springConfig.mass,
            useNativeDriver,
        });
        anim.start(() => {
            onFinished?.();
        });
        return () => {
            anim.stop();
        };
    }, [toValue, preset, useNativeDriver, animatedValue, onFinished]);
    return animatedValue;
}
