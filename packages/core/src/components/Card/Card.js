"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.CardFooter = exports.CardContent = exports.CardDescription = exports.CardTitle = exports.CardHeader = exports.CardRoot = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const recipes_1 = require("@unconfused-ui/recipes");
const getCardRecipe = (semanticColors) => (0, recipes_1.createSlotRecipe)({
    slots: ["root", "header", "title", "description", "content", "footer"],
    base: {
        root: {
            overflow: "hidden",
            borderRadius: 12,
            borderWidth: 1,
        },
        header: {
            gap: 6,
        },
        footer: {
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: semanticColors.borderSubtle,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
        },
    },
    variants: {
        variant: {
            default: {
                root: {
                    backgroundColor: semanticColors.surface,
                    borderColor: semanticColors.borderSubtle,
                },
            },
            glass: {
                root: {
                    backgroundColor: semanticColors.surfaceSubtle,
                    borderColor: semanticColors.borderSubtle,
                },
            },
            subtle: {
                root: {
                    backgroundColor: semanticColors.surfaceSubtle,
                    borderColor: semanticColors.borderSubtle,
                },
            },
            bordered: {
                root: {
                    backgroundColor: semanticColors.surface,
                    borderColor: semanticColors.border,
                },
            },
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const CardContext = (0, react_1.createContext)(null);
exports.CardRoot = react_1.default.forwardRef(({ variant = "default", elevation = "none", accentBar = false, style, children, ...rest }, ref) => {
    const { semanticColors, theme } = (0, theme_1.useTheme)();
    const recipe = getCardRecipe(semanticColors);
    const styles = (0, react_1.useMemo)(() => recipe({ variant }), [recipe, variant]);
    return ((0, jsx_runtime_1.jsx)(CardContext.Provider, { value: styles, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { ref: ref, style: [
                ...styles.root,
                elevation === "sm" && theme.shadows.sm,
                elevation === "md" && theme.shadows.md,
                elevation === "lg" && theme.shadows.lg,
                style,
            ], ...rest, children: [accentBar && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        height: 2,
                        width: "100%",
                        backgroundColor: semanticColors.primary,
                    } })), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { padding: 20 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 4, children: children }) })] }) }));
});
exports.CardRoot.displayName = "Card";
const CardHeader = ({ style, children }) => {
    const styles = (0, react_1.useContext)(CardContext);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Stack, { style: [styles?.header, style], children: children }));
};
exports.CardHeader = CardHeader;
exports.CardHeader.displayName = "Card.Header";
const CardTitle = ({ children, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const styles = (0, react_1.useContext)(CardContext);
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xl", weight: "bold", color: semanticColors.foreground, style: [styles?.title, style], children: children })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
};
exports.CardTitle = CardTitle;
exports.CardTitle.displayName = "Card.Title";
const CardDescription = ({ children, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const styles = (0, react_1.useContext)(CardContext);
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, lineHeight: "sm", style: [styles?.description, style], children: children })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
};
exports.CardDescription = CardDescription;
exports.CardDescription.displayName = "Card.Description";
const CardContent = ({ style, children }) => {
    const styles = (0, react_1.useContext)(CardContext);
    return (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [styles?.content, style], children: children });
};
exports.CardContent = CardContent;
exports.CardContent.displayName = "Card.Content";
const CardFooter = ({ style, children }) => {
    const styles = (0, react_1.useContext)(CardContext);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [styles?.footer, style], children: children }));
};
exports.CardFooter = CardFooter;
exports.CardFooter.displayName = "Card.Footer";
exports.Card = Object.assign(exports.CardRoot, {
    Header: exports.CardHeader,
    Title: exports.CardTitle,
    Description: exports.CardDescription,
    Content: exports.CardContent,
    Footer: exports.CardFooter,
});
