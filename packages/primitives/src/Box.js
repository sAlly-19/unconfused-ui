"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
exports.Box = react_1.default.forwardRef(({ padding, p, paddingHorizontal, px, paddingVertical, py, paddingTop, pt, paddingBottom, pb, paddingLeft, pl, paddingRight, pr, margin, m, marginHorizontal, mx, marginVertical, my, marginTop, mt, marginBottom, mb, marginLeft, ml, marginRight, mr, width, w, height, h, minWidth, minW, maxWidth, maxW, minHeight, minH, maxHeight, maxH, flex, flexGrow, flexShrink, flexBasis, direction, flexDirection, align, alignItems, justify, justifyContent, alignSelf, wrap, flexWrap, gap, bg, backgroundColor, radius, rounded, borderWidth, borderColor, borderStyle, shadow, overflow, opacity, variant, style, children, ...rest }, ref) => {
    const { theme, semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const resolveSpacing = (val) => {
        if (val === undefined)
            return undefined;
        if (typeof val === "number")
            return val;
        return theme.spacing[val];
    };
    const resolveRadius = (val) => {
        if (val === undefined)
            return undefined;
        if (typeof val === "number")
            return val;
        return theme.radii[val];
    };
    const resolveColor = (colorVal) => {
        if (!colorVal)
            return undefined;
        if (colorVal in semanticColors) {
            return semanticColors[colorVal];
        }
        return colorVal;
    };
    const getVariantStyle = () => {
        switch (variant) {
            case "bordered":
                return {
                    backgroundColor: semanticColors.surface,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                };
            case "subtle":
                return {
                    backgroundColor: semanticColors.surfaceSubtle,
                    borderWidth: 1,
                    borderColor: "transparent",
                };
            case "glass":
                return {
                    backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.75),
                    borderWidth: 1,
                    borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.12),
                };
            case "elevated":
                return {
                    backgroundColor: semanticColors.surface,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                    ...theme.shadows.md,
                };
            case "flat":
            default:
                return {};
        }
    };
    const boxStyle = {
        // Padding
        padding: resolveSpacing(p ?? padding),
        paddingHorizontal: resolveSpacing(px ?? paddingHorizontal),
        paddingVertical: resolveSpacing(py ?? paddingVertical),
        paddingTop: resolveSpacing(pt ?? paddingTop),
        paddingBottom: resolveSpacing(pb ?? paddingBottom),
        paddingLeft: resolveSpacing(pl ?? paddingLeft),
        paddingRight: resolveSpacing(pr ?? paddingRight),
        // Margin
        margin: resolveSpacing(m ?? margin),
        marginHorizontal: resolveSpacing(mx ?? marginHorizontal),
        marginVertical: resolveSpacing(my ?? marginVertical),
        marginTop: resolveSpacing(mt ?? marginTop),
        marginBottom: resolveSpacing(mb ?? marginBottom),
        marginLeft: resolveSpacing(ml ?? marginLeft),
        marginRight: resolveSpacing(mr ?? marginRight),
        // Dimensions
        width: w ?? width,
        height: h ?? height,
        minWidth: minW ?? minWidth,
        maxWidth: maxW ?? maxWidth,
        minHeight: minH ?? minHeight,
        maxHeight: maxH ?? maxHeight,
        // Flex
        flex,
        flexGrow,
        flexShrink,
        flexBasis,
        flexDirection: direction ?? flexDirection,
        alignItems: align ?? alignItems,
        justifyContent: justify ?? justifyContent,
        alignSelf,
        flexWrap: typeof wrap === "boolean" ? (wrap ? "wrap" : "nowrap") : (wrap ?? flexWrap),
        gap: resolveSpacing(gap),
        // Visual
        backgroundColor: resolveColor(bg ?? backgroundColor),
        borderRadius: resolveRadius(rounded ?? radius),
        borderWidth,
        borderColor: resolveColor(borderColor),
        borderStyle,
        overflow,
        opacity,
        // Variant & Shadows
        ...getVariantStyle(),
        ...(shadow ? theme.shadows[shadow] : {}),
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { ref: ref, style: [boxStyle, style], ...rest, children: children }));
});
exports.Box.displayName = "Box";
