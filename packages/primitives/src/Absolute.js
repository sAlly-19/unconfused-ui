"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Absolute = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Box_1 = require("./Box");
exports.Absolute = react_1.default.forwardRef(({ top, bottom, left, right, inset, zIndex = 1, center = false, placement, style, children, ...rest }, ref) => {
    const getPlacementStyle = () => {
        if (!placement)
            return {};
        switch (placement) {
            case "top-left":
                return { top: 0, left: 0 };
            case "top-right":
                return { top: 0, right: 0 };
            case "bottom-left":
                return { bottom: 0, left: 0 };
            case "bottom-right":
                return { bottom: 0, right: 0 };
            case "top-center":
                return { top: 0, left: "50%", transform: [{ translateX: -50 }] };
            case "bottom-center":
                return { bottom: 0, left: "50%", transform: [{ translateX: -50 }] };
            case "center":
                return { top: "50%", left: "50%", transform: [{ translateX: -50 }, { translateY: -50 }] };
            case "fill":
                return { top: 0, bottom: 0, left: 0, right: 0 };
        }
    };
    const absoluteStyle = {
        position: "absolute",
        top: inset !== undefined ? inset : top,
        bottom: inset !== undefined ? inset : bottom,
        left: inset !== undefined ? inset : left,
        right: inset !== undefined ? inset : right,
        zIndex,
        ...getPlacementStyle(),
        ...(center
            ? {
                top: "50%",
                left: "50%",
                transform: [{ translateX: -50 }, { translateY: -50 }],
            }
            : {}),
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, style: [absoluteStyle, style], ...rest, children: children }));
});
exports.Absolute.displayName = "Absolute";
