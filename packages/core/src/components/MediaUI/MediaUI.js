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
exports.MediaPlayer = exports.Video = exports.AudioPlayer = exports.Carousel = exports.ImageGallery = exports.ImageViewer = exports.Icon = exports.Thumbnail = exports.ImageBackground = exports.Image = exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Avatar_1 = require("../Avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return Avatar_1.Avatar; } });
const Button_1 = require("../Button");
exports.Image = react_1.default.forwardRef(({ radius = 8, aspectRatio, style, ...rest }, ref) => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Image, { ref: ref, style: [{ borderRadius: radius, aspectRatio }, style], resizeMode: "cover", ...rest }));
});
exports.Image.displayName = "Image";
const ImageBackground = ({ overlayColor = "rgba(0, 0, 0, 0.4)", style, children, ...rest }) => ((0, jsx_runtime_1.jsxs)(react_native_1.ImageBackground, { style: [{ overflow: "hidden", position: "relative" }, style], ...rest, children: [overlayColor && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: overlayColor,
            } })), children] }));
exports.ImageBackground = ImageBackground;
exports.ImageBackground.displayName = "ImageBackground";
const Thumbnail = ({ src, fallbackIcon = "🖼️", size = 64, radius = 12, showPlayBadge = false, onPress, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: onPress, disabled: !onPress, style: [
            {
                width: size,
                height: size,
                borderRadius: radius,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
            },
            style,
        ], children: [src ? ((0, jsx_runtime_1.jsx)(react_native_1.Image, { source: { uri: src }, style: { width: "100%", height: "100%" }, resizeMode: "cover" })) : ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", children: fallbackIcon })), showPlayBadge && ((0, jsx_runtime_1.jsx)(primitives_1.Center, { style: {
                    position: "absolute",
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: "#FFF", children: "\u25B6" }) }))] }));
};
exports.Thumbnail = Thumbnail;
exports.Thumbnail.displayName = "Thumbnail";
// 4. Icon (Re-exported from @unconfused-ui/icons)
var icons_1 = require("@unconfused-ui/icons");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return icons_1.Icon; } });
const ImageViewer = ({ open = false, onClose, title = "Image Preview", src }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: onClose, children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: onClose, style: {
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.9)",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
            }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: (e) => e.stopPropagation?.(), style: {
                    maxWidth: 600,
                    width: "100%",
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: "rgba(16, 18, 30, 0.95)",
                    borderWidth: 1,
                    borderColor: "rgba(255, 255, 255, 0.15)",
                }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: { padding: 14 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", children: title }), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: onClose, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, children: "\u2715" }) })] }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { height: 300, backgroundColor: "#000", alignItems: "center", justifyContent: "center" }, children: src ? ((0, jsx_runtime_1.jsx)(react_native_1.Image, { source: { uri: src }, style: { width: "100%", height: "100%" }, resizeMode: "contain" })) : ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "3xl", children: "\uD83C\uDF0C" })) })] }) }) }));
};
exports.ImageViewer = ImageViewer;
exports.ImageViewer.displayName = "ImageViewer";
const ImageGallery = ({ items, columns = 3, onSelect, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 3, wrap: true, style: style, children: items.map((item) => ((0, jsx_runtime_1.jsx)(exports.Thumbnail, { src: item.src, size: 84, radius: 10, onPress: () => onSelect?.(item) }, item.id))) }));
exports.ImageGallery = ImageGallery;
exports.ImageGallery.displayName = "ImageGallery";
const Carousel = ({ items, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(0);
    const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : items.length - 1));
    const next = () => setActiveIndex((i) => (i < items.length - 1 ? i + 1 : 0));
    const current = items[activeIndex];
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 20,
                borderRadius: 16,
                backgroundColor: "rgba(16, 18, 30, 0.95)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                maxWidth: 480,
                position: "relative",
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 4, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, style: { textTransform: "uppercase" }, children: ["Slide ", activeIndex + 1, " of ", items.length] }), current?.badge && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, backgroundColor: "rgba(124, 58, 237, 0.2)" }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: "#A78BFA", weight: "bold", children: current.badge }) }))] }), (0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { minHeight: 70, justifyContent: "center" }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: current?.title }), current?.subtitle && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, style: { marginTop: 4 }, children: current.subtitle }))] }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 1.5, children: items.map((_, idx) => ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setActiveIndex(idx), style: {
                                    width: activeIndex === idx ? 20 : 6,
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: activeIndex === idx ? semanticColors.primary : "rgba(255, 255, 255, 0.2)",
                                } }, idx))) }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 2, children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { size: "xs", variant: "ghost", onPress: prev, children: "\u2039 Prev" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { size: "xs", variant: "primary", onPress: next, children: "Next \u203A" })] })] })] }) }));
};
exports.Carousel = Carousel;
exports.Carousel.displayName = "Carousel";
const AudioPlayer = ({ title = "Ambient Space Waves", artist = "Antigravity Synth", duration = "03:45", elapsed = "01:14", style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [playing, setPlaying] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 16,
                borderRadius: 16,
                backgroundColor: "rgba(16, 18, 30, 0.95)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                maxWidth: 400,
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, children: [(0, jsx_runtime_1.jsx)(primitives_1.Center, { circle: 38, bg: playing ? semanticColors.primary : "rgba(255, 255, 255, 0.08)", children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setPlaying(!playing), children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: "#FFF", children: playing ? "⏸" : "▶" }) }) }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: title }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: artist })] })] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, weight: "bold", children: playing ? "Playing" : "Paused" })] }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { width: "100%", height: 6, borderRadius: 3, backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "hidden" }, children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { width: "38%", height: "100%", backgroundColor: semanticColors.primary } }) }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: elapsed }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: duration })] })] })] }) }));
};
exports.AudioPlayer = AudioPlayer;
exports.AudioPlayer.displayName = "AudioPlayer";
const Video = ({ title = "Architecture Overview", duration = "12:40", style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [playing, setPlaying] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [
            {
                borderRadius: 16,
                backgroundColor: "rgba(16, 18, 30, 0.95)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                maxWidth: 420,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { height: 180, backgroundColor: "#0A0B14", alignItems: "center", justifyContent: "center", position: "relative" }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "4xl", children: "\uD83C\uDFAC" }), (0, jsx_runtime_1.jsx)(primitives_1.Center, { style: {
                            position: "absolute",
                            width: 48,
                            height: 48,
                            borderRadius: 24,
                            backgroundColor: "rgba(124, 58, 237, 0.85)",
                        }, children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setPlaying(!playing), children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", color: "#FFF", children: playing ? "⏸" : "▶" }) }) })] }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: { padding: 14 }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", children: title }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: "1080p 60fps \u2022 H.265" })] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, weight: "bold", children: duration })] })] }));
};
exports.Video = Video;
exports.Video.displayName = "Video";
exports.MediaPlayer = exports.Video;
