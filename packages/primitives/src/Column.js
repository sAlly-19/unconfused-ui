"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const VStack_1 = require("./VStack");
exports.Column = react_1.default.forwardRef(({ span, flex, ...rest }, ref) => {
    const resolvedFlex = flex ?? (span ? span : 1);
    return (0, jsx_runtime_1.jsx)(VStack_1.VStack, { ref: ref, flex: resolvedFlex, ...rest });
});
exports.Column.displayName = "Column";
