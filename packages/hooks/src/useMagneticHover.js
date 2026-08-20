"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMagneticHover = useMagneticHover;
const react_1 = require("react");
const react_native_1 = require("react-native");
/**
 * useMagneticHover Hook:
 * Applies a smooth physical magnetic attraction towards the pointer on Web / Desktop.
 */
function useMagneticHover(options = {}) {
    const { strength = 0.35, maxDistance = 12 } = options;
    const [offset, setOffset] = (0, react_1.useState)({ x: 0, y: 0 });
    const containerRef = (0, react_1.useRef)(null);
    const onPointerMove = (0, react_1.useCallback)((e) => {
        if (react_native_1.Platform.OS !== "web")
            return;
        const target = e.currentTarget || e.target;
        if (!target || !target.getBoundingClientRect)
            return;
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
        const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));
        setOffset({ x: clampedX, y: clampedY });
    }, [strength, maxDistance]);
    const onPointerLeave = (0, react_1.useCallback)(() => {
        setOffset({ x: 0, y: 0 });
    }, []);
    const magneticStyle = {
        transform: [{ translateX: offset.x }, { translateY: offset.y }],
    };
    return {
        magneticStyle,
        onPointerMove: react_native_1.Platform.OS === "web" ? onPointerMove : undefined,
        onPointerLeave: react_native_1.Platform.OS === "web" ? onPointerLeave : undefined,
    };
}
