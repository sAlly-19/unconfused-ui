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
exports.ScrollView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
/**
 * Universal ScrollView primitive with theme token support, elastic pull-to-refresh
 * and simplified scroll indicator controls.
 */
exports.ScrollView = react_1.default.forwardRef(({ padding, paddingHorizontal, paddingVertical, gap, hideIndicator = false, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, onPullToRefresh, refreshing: propRefreshing, contentContainerStyle, style, children, ...rest }, ref) => {
    const { baseTokens, semanticColors } = (0, theme_1.useTheme)();
    const [localRefreshing, setLocalRefreshing] = (0, react_1.useState)(false);
    const handleRefresh = (0, react_1.useCallback)(async () => {
        if (!onPullToRefresh)
            return;
        setLocalRefreshing(true);
        try {
            await onPullToRefresh();
        }
        finally {
            setLocalRefreshing(false);
        }
    }, [onPullToRefresh]);
    const isRefreshing = propRefreshing !== undefined ? propRefreshing : localRefreshing;
    const resolvedContentStyle = {
        padding: padding !== undefined ? baseTokens.spacing[padding] ?? padding : undefined,
        paddingHorizontal: paddingHorizontal !== undefined
            ? baseTokens.spacing[paddingHorizontal] ?? paddingHorizontal
            : undefined,
        paddingVertical: paddingVertical !== undefined
            ? baseTokens.spacing[paddingVertical] ?? paddingVertical
            : undefined,
        gap: gap !== undefined ? baseTokens.spacing[gap] ?? gap : undefined,
    };
    const refreshControl = onPullToRefresh ? ((0, jsx_runtime_1.jsx)(react_native_1.RefreshControl, { refreshing: isRefreshing, onRefresh: handleRefresh, tintColor: semanticColors.primary, colors: [semanticColors.primary] })) : undefined;
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { ref: ref, showsHorizontalScrollIndicator: hideIndicator ? false : showsHorizontalScrollIndicator, showsVerticalScrollIndicator: hideIndicator ? false : showsVerticalScrollIndicator, refreshControl: refreshControl, contentContainerStyle: [resolvedContentStyle, contentContainerStyle], style: style, ...rest, children: children }));
});
exports.ScrollView.displayName = "ScrollView";
