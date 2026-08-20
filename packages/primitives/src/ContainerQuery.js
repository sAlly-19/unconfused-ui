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
exports.ContainerQuery = void 0;
exports.useContainerQuery = useContainerQuery;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
/**
 * High-performance ContainerQuery primitive that responds to its own bounding box dimensions
 * rather than the full viewport/window width. Uses microtask debouncing to eliminate layout thrashing.
 */
exports.ContainerQuery = react_1.default.forwardRef(({ minWidth, maxWidth, minHeight, maxHeight, children, style, onLayout: propOnLayout, ...rest }, ref) => {
    const [dimensions, setDimensions] = (0, react_1.useState)({ width: 0, height: 0 });
    const timerRef = (0, react_1.useRef)(null);
    const handleLayout = (0, react_1.useCallback)((e) => {
        propOnLayout?.(e);
        const { width, height } = e.nativeEvent.layout;
        // Skip redundant updates if dimensions haven't changed by at least 1px
        if (Math.abs(dimensions.width - width) < 1 && Math.abs(dimensions.height - height) < 1) {
            return;
        }
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setDimensions({ width, height });
        }, 16); // 1 frame debounce (60fps)
    }, [dimensions.width, dimensions.height, propOnLayout]);
    const matches = (minWidth === undefined || dimensions.width >= minWidth) &&
        (maxWidth === undefined || dimensions.width <= maxWidth) &&
        (minHeight === undefined || dimensions.height >= minHeight) &&
        (maxHeight === undefined || dimensions.height <= maxHeight);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { ref: ref, onLayout: handleLayout, style: style, ...rest, children: typeof children === "function"
            ? children({ matches, dimensions })
            : matches
                ? children
                : null }));
});
exports.ContainerQuery.displayName = "ContainerQuery";
/**
 * Hook for component-level container queries.
 */
function useContainerQuery(options) {
    const [dimensions, setDimensions] = (0, react_1.useState)({ width: 0, height: 0 });
    const timerRef = (0, react_1.useRef)(null);
    const onLayout = (0, react_1.useCallback)((e) => {
        const { width, height } = e.nativeEvent.layout;
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setDimensions({ width, height });
        }, 16);
    }, []);
    const matches = (options.minWidth === undefined || dimensions.width >= options.minWidth) &&
        (options.maxWidth === undefined || dimensions.width <= options.maxWidth) &&
        (options.minHeight === undefined || dimensions.height >= options.minHeight) &&
        (options.maxHeight === undefined || dimensions.height <= options.maxHeight);
    return {
        matches,
        dimensions,
        onLayout,
    };
}
