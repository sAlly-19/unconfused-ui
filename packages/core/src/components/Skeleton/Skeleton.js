"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = exports.SkeletonBox = exports.SkeletonGroup = void 0;
exports.useSkeletonGroup = useSkeletonGroup;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const SkeletonGroupContext = (0, react_1.createContext)({ loading: false });
function useSkeletonGroup() {
    return (0, react_1.useContext)(SkeletonGroupContext);
}
const SkeletonGroup = ({ loading = false, children }) => {
    return ((0, jsx_runtime_1.jsx)(SkeletonGroupContext.Provider, { value: { loading }, children: children }));
};
exports.SkeletonGroup = SkeletonGroup;
const SkeletonBox = ({ width = "100%", height = 20, radius, rounded, animated = true, style, children, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const { loading } = useSkeletonGroup();
    const shimmerAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0.35)).current;
    (0, react_1.useEffect)(() => {
        if (!animated)
            return;
        const animation = react_native_1.Animated.loop(react_native_1.Animated.sequence([
            react_native_1.Animated.timing(shimmerAnim, {
                toValue: 0.85,
                duration: 900,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(shimmerAnim, {
                toValue: 0.35,
                duration: 900,
                useNativeDriver: true,
            }),
        ]));
        animation.start();
        return () => {
            animation.stop();
        };
    }, [animated, shimmerAnim]);
    if (!loading && children) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    }
    const getBorderRadius = () => {
        if (radius !== undefined)
            return radius;
        switch (rounded) {
            case "sm":
                return 4;
            case "md":
                return 8;
            case "lg":
                return 12;
            case "full":
                return 9999;
            default:
                return 8;
        }
    };
    const skeletonStyle = {
        width: width,
        height,
        borderRadius: getBorderRadius(),
        backgroundColor: semanticColors.surfaceSubtle,
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [
            skeletonStyle,
            animated && { opacity: shimmerAnim },
            style,
        ], accessibilityRole: "none" }));
};
exports.SkeletonBox = SkeletonBox;
exports.Skeleton = Object.assign(exports.SkeletonBox, {
    Group: exports.SkeletonGroup,
});
