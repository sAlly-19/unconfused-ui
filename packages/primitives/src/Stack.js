"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const theme_1 = require("@unconfused-ui/theme");
const Box_1 = require("./Box");
const AnimatedBox_1 = require("./AnimatedBox");
exports.Stack = react_1.default.forwardRef(({ direction = "vertical", gap = 4, align = "stretch", justify = "flex-start", wrap = false, reverse = false, divider, staggerDelay, style, children, ...rest }, ref) => {
    const { theme } = (0, theme_1.useTheme)();
    const resolveGap = typeof gap === "number" ? gap : theme.spacing[gap];
    const getFlexDirection = () => {
        if (direction === "horizontal" || direction === "row") {
            return reverse ? "row-reverse" : "row";
        }
        return reverse ? "column-reverse" : "column";
    };
    const validChildren = react_1.default.Children.toArray(children).filter(Boolean);
    const renderChildren = () => {
        let items = validChildren;
        if (staggerDelay && staggerDelay > 0) {
            items = validChildren.map((child, index) => ((0, jsx_runtime_1.jsx)(AnimatedBox_1.AnimatedBox, { isAnimated: true, animationType: "slide-up", delay: index * staggerDelay, duration: 250, children: child }, index)));
        }
        if (!divider || items.length <= 1) {
            return items;
        }
        return items.map((child, index) => {
            const isLast = index === items.length - 1;
            if (isLast) {
                return (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: child }, index);
            }
            return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [child, react_1.default.cloneElement(divider, { key: `divider-${index}` })] }, index));
        });
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, flexDirection: getFlexDirection(), alignItems: align, justifyContent: justify, flexWrap: typeof wrap === "boolean" ? (wrap ? "wrap" : "nowrap") : wrap, gap: divider ? undefined : resolveGap, style: style, ...rest, children: renderChildren() }));
});
exports.Stack.displayName = "Stack";
