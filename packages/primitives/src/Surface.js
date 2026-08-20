"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surface = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
exports.Surface = react_1.default.forwardRef(({ variant = "default", material, elevation = "none", radius = "md", style, children, ...rest }, ref) => {
    const { theme } = (0, theme_1.useTheme)();
    const resolveRadius = typeof radius === "number" ? radius : theme.radii[radius];
    const getMaterialStyles = () => {
        if (!material)
            return undefined;
        const mat = theme.materials?.[material] ?? tokens_1.materials[material];
        if (!mat)
            return undefined;
        return {
            backgroundColor: mat.tint,
            opacity: mat.tintOpacity,
            borderColor: `rgba(255, 255, 255, ${mat.borderLuminance})`,
            borderWidth: mat.borderLuminance > 0 ? 1 : 0,
        };
    };
    const getVariantStyles = () => {
        if (material) {
            return getMaterialStyles() || { backgroundColor: theme.colors.surface };
        }
        switch (variant) {
            case "subtle":
                return {
                    backgroundColor: theme.colors.surfaceSubtle,
                };
            case "bordered":
                return {
                    backgroundColor: theme.colors.surface,
                    borderWidth: 1,
                    borderColor: theme.colors.border,
                };
            case "flat":
                return {
                    backgroundColor: theme.colors.background,
                };
            case "default":
            default:
                return {
                    backgroundColor: theme.colors.surface,
                };
        }
    };
    const surfaceStyle = {
        borderRadius: resolveRadius,
        ...getVariantStyles(),
        ...(elevation !== "none" ? theme.shadows[elevation] : {}),
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { ref: ref, style: [surfaceStyle, style], ...rest, children: children }));
});
exports.Surface.displayName = "Surface";
