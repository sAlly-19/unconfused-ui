"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const SvgIcon = ({ paths, size = 24, color, strokeWidth = 2, fill = "none", viewBox = "0 0 24 24", style, accessibilityLabel, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const strokeColor = color ?? semanticColors?.foreground ?? "#FFFFFF";
    const numSize = typeof size === "number" ? size : parseInt(String(size), 10) || 24;
    if (react_native_1.Platform.OS === "web") {
        const children = paths.map((p, idx) => {
            const type = p.type ?? "path";
            if (type === "circle") {
                return react_1.default.createElement("circle", {
                    key: idx,
                    cx: p.cx,
                    cy: p.cy,
                    r: p.r,
                });
            }
            if (type === "rect") {
                return react_1.default.createElement("rect", {
                    key: idx,
                    x: p.x,
                    y: p.y,
                    width: p.width,
                    height: p.height,
                    rx: p.rx ?? 0,
                    ry: p.ry ?? 0,
                });
            }
            if (type === "line") {
                return react_1.default.createElement("line", {
                    key: idx,
                    x1: p.x1,
                    y1: p.y1,
                    x2: p.x2,
                    y2: p.y2,
                });
            }
            if (type === "polyline") {
                return react_1.default.createElement("polyline", {
                    key: idx,
                    points: p.points,
                });
            }
            if (type === "polygon") {
                return react_1.default.createElement("polygon", {
                    key: idx,
                    points: p.points,
                });
            }
            return react_1.default.createElement("path", {
                key: idx,
                d: p.d,
            });
        });
        return react_1.default.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox,
            width: numSize,
            height: numSize,
            fill,
            stroke: strokeColor,
            strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-label": accessibilityLabel,
            style: {
                display: "inline-block",
                verticalAlign: "middle",
                flexShrink: 0,
                width: numSize,
                height: numSize,
                ...style,
            },
        }, ...children);
    }
    // Native React Native fallback container
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { accessibilityRole: "image", accessibilityLabel: accessibilityLabel, style: [{ width: numSize, height: numSize, alignItems: "center", justifyContent: "center" }, style] }));
};
exports.SvgIcon = SvgIcon;
exports.SvgIcon.displayName = "SvgIcon";
