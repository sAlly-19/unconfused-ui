"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HStack = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Stack_1 = require("./Stack");
exports.HStack = react_1.default.forwardRef(({ align = "center", justify = "flex-start", ...rest }, ref) => {
    return (0, jsx_runtime_1.jsx)(Stack_1.Stack, { ref: ref, direction: "row", align: align, justify: justify, ...rest });
});
exports.HStack.displayName = "HStack";
