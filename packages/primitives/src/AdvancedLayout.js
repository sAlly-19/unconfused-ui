"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer = exports.Overlay = exports.Masonry = exports.Flow = exports.Wrap = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Box_1 = require("./Box");
const Inline_1 = require("./Inline");
const Wrap = (props) => (0, jsx_runtime_1.jsx)(Inline_1.Inline, { wrap: true, ...props });
exports.Wrap = Wrap;
exports.Wrap.displayName = "Wrap";
const Flow = (props) => (0, jsx_runtime_1.jsx)(Inline_1.Inline, { wrap: true, ...props });
exports.Flow = Flow;
exports.Flow.displayName = "Flow";
const Masonry = ({ columns = 2, gap = 12, style, children }) => ((0, jsx_runtime_1.jsx)(Inline_1.Inline, { gap: gap, wrap: true, style: style, children: react_1.default.Children.map(children, (child) => ((0, jsx_runtime_1.jsx)(Box_1.Box, { style: { width: `${100 / columns - 2}%` }, children: child }))) }));
exports.Masonry = Masonry;
exports.Masonry.displayName = "Masonry";
exports.Overlay = react_1.default.forwardRef(({ style, children, ...rest }, ref) => {
    const overlayStyle = {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, style: [overlayStyle, style], ...rest, children: children }));
});
exports.Overlay.displayName = "Overlay";
exports.Layer = exports.Overlay;
