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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.PresenceIndicator = exports.UserAvatar = exports.AvatarFallback = exports.AvatarImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Avatar_1 = require("./Avatar");
__exportStar(require("./Avatar"), exports);
const AvatarImage = ({ src, style }) => {
    const imageSource = typeof src === "string" ? { uri: src } : src;
    return (0, jsx_runtime_1.jsx)(react_native_1.Image, { source: imageSource, style: [{ width: "100%", height: "100%" }, style], resizeMode: "cover" });
};
exports.AvatarImage = AvatarImage;
exports.AvatarImage.displayName = "AvatarImage";
const AvatarFallback = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: "#A78BFA", style: style, children: children.substring(0, 2).toUpperCase() }));
exports.AvatarFallback = AvatarFallback;
exports.AvatarFallback.displayName = "AvatarFallback";
const UserAvatar = ({ name, email, fallback, ...rest }) => ((0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { fallback: fallback ?? (name ? name.substring(0, 2) : "?"), ...rest }));
exports.UserAvatar = UserAvatar;
exports.UserAvatar.displayName = "UserAvatar";
const PresenceIndicator = ({ status = "online", size = 10, showGlow = true, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const getColor = () => {
        switch (status) {
            case "online":
                return baseTokens.colors.success[500];
            case "busy":
                return baseTokens.colors.danger[500];
            case "away":
                return baseTokens.colors.warning[500];
            case "offline":
            default:
                return baseTokens.colors.neutral[500];
        }
    };
    const activeColor = getColor();
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: activeColor,
                borderWidth: 2,
                borderColor: "#080911",
                shadowColor: showGlow ? activeColor : "transparent",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 6,
                elevation: showGlow ? 3 : 0,
            },
            style,
        ] }));
};
exports.PresenceIndicator = PresenceIndicator;
exports.PresenceIndicator.displayName = "PresenceIndicator";
const Profile = ({ name, role, email, avatarSrc, status = "online", avatarSize = "md", badge, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "center", justify: "space-between", style: style, children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, children: [(0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { src: avatarSrc, fallback: name.substring(0, 2).toUpperCase(), size: avatarSize, status: status }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0.5, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: name }), badge] }), role && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "medium", color: semanticColors.primary, children: role })), email && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: email }))] })] }) }));
};
exports.Profile = Profile;
exports.Profile.displayName = "Profile";
