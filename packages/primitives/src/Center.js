"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Center = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Box_1 = require("./Box");
exports.Center = react_1.default.forwardRef(({ square, circle, inline = false, style, children, ...rest }, ref) => {
    const dimension = typeof circle === "number" ? circle : square;
    const isCircle = !!circle;
    const centerStyle = {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: inline ? "flex-start" : undefined,
        width: dimension,
        height: dimension,
        borderRadius: isCircle ? (dimension ? dimension / 2 : 9999) : undefined,
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, style: [centerStyle, style], ...rest, children: children }));
});
exports.Center.displayName = "Center";
