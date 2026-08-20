"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Box_1 = require("./Box");
exports.View = react_1.default.forwardRef((props, ref) => {
    return (0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, ...props });
});
exports.View.displayName = "View";
