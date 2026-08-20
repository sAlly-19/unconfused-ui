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
exports.ActionCard = exports.FeatureCard = exports.StatTile = exports.Tile = exports.Paper = exports.Panel = exports.CardBody = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Card_1 = require("./Card");
__exportStar(require("./Card"), exports);
exports.CardBody = Card_1.CardContent;
const Panel = ({ title, subtitle, headerAction, variant = "glass", style, children, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: variant, accentBar: false, style: style, children: [(title || headerAction) && ((0, jsx_runtime_1.jsx)(Card_1.Card.Header, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0.5, children: [title && (0, jsx_runtime_1.jsx)(Card_1.Card.Title, { children: title }), subtitle && (0, jsx_runtime_1.jsx)(Card_1.Card.Description, { children: subtitle })] }), headerAction] }) })), (0, jsx_runtime_1.jsx)(Card_1.Card.Content, { children: children })] }));
};
exports.Panel = Panel;
exports.Panel.displayName = "Panel";
const Paper = (props) => (0, jsx_runtime_1.jsx)(primitives_1.Surface, { ...props });
exports.Paper = Paper;
exports.Paper.displayName = "Paper";
const Tile = ({ title, value, subtitle, icon, badge, trend, style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [
            {
                padding: 16,
                borderRadius: 14,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.8),
                borderWidth: 1,
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                gap: 12,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundMuted, style: { textTransform: "uppercase" }, children: title })] }), badge] }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", weight: "bold", color: semanticColors.foreground, children: value }), (subtitle || trend) && ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [trend && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: baseTokens.colors.success[500], children: trend })), subtitle && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: subtitle }))] }))] })] }));
};
exports.Tile = Tile;
exports.Tile.displayName = "Tile";
exports.StatTile = exports.Tile;
const FeatureCard = ({ title, description, icon, badge, ctaLabel, onCtaPress, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: "glass", accentBar: true, style: style, children: [(0, jsx_runtime_1.jsxs)(Card_1.Card.Header, { children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "flex-start", children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                    width: 44,
                                    height: 44,
                                    borderRadius: 12,
                                    backgroundColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.2),
                                    borderWidth: 1,
                                    borderColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.4),
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 8,
                                }, children: icon }), badge] }), (0, jsx_runtime_1.jsx)(Card_1.Card.Title, { children: title })] }), (0, jsx_runtime_1.jsx)(Card_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(Card_1.Card.Description, { children: description }) }), ctaLabel && ((0, jsx_runtime_1.jsx)(Card_1.Card.Footer, { children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: onCtaPress, children: (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: [ctaLabel, " \u2192"] }) }) }))] }));
};
exports.FeatureCard = FeatureCard;
exports.FeatureCard.displayName = "FeatureCard";
const ActionCard = ({ title, description, icon, actionLabel = "Configure", onAction, badge, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: onAction, disabled: !onAction, children: (0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [
                {
                    padding: 18,
                    borderRadius: 16,
                    backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.8),
                    borderWidth: 1,
                    borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                    gap: 12,
                },
                style,
            ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, children: [icon && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        backgroundColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.15),
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }, children: icon })), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", weight: "bold", color: semanticColors.foreground, children: title })] }), badge] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, lineHeight: "sm", children: description }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "flex-end", align: "center", gap: 1, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: actionLabel }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, children: "\u2192" })] })] }) }));
};
exports.ActionCard = ActionCard;
exports.ActionCard.displayName = "ActionCard";
