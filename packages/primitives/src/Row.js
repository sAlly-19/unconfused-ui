"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const HStack_1 = require("./HStack");
exports.Row = react_1.default.forwardRef(({ gutter, gap, ...rest }, ref) => {
    return (0, jsx_runtime_1.jsx)(HStack_1.HStack, { ref: ref, gap: gutter ?? gap, ...rest });
});
exports.Row.displayName = "Row";
