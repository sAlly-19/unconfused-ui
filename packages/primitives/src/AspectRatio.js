"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspectRatio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Box_1 = require("./Box");
const RATIO_MAP = {
    "16/9": 16 / 9,
    "4/3": 4 / 3,
    "1/1": 1,
    "21/9": 21 / 9,
    "9/16": 9 / 16,
    "3/2": 3 / 2,
};
exports.AspectRatio = react_1.default.forwardRef(({ ratio = 16 / 9, style, children, ...rest }, ref) => {
    const numericRatio = typeof ratio === "number" ? ratio : RATIO_MAP[ratio] ?? 16 / 9;
    const ratioStyle = {
        aspectRatio: numericRatio,
        width: "100%",
        position: "relative",
        overflow: "hidden",
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, style: [ratioStyle, style], ...rest, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, children: children }) }));
});
exports.AspectRatio.displayName = "AspectRatio";
