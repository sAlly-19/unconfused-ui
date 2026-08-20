"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gauge = exports.ProgressChart = exports.PieChart = exports.DonutChart = exports.Sparkline = exports.RadarChart = exports.AreaChart = exports.LineChart = exports.Chart = exports.BarChart = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const BarChart = ({ data, height = 150, title, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const maxValue = Math.max(...data.map((d) => d.value), 1);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 18,
                backgroundColor: "rgba(16, 18, 30, 0.85)",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.08)",
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [title && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundMuted, style: { textTransform: "uppercase" }, children: title })), (0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "flex-end", justify: "space-around", style: { height }, children: data.map((item, index) => {
                        const barHeight = (item.value / maxValue) * (height - 36);
                        const barColor = item.color ?? semanticColors.primary;
                        return ((0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 1.5, style: { alignItems: "center", flex: 1 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, weight: "bold", style: { fontSize: 10 }, children: item.value }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                        width: 24,
                                        height: Math.max(barHeight, 8),
                                        borderRadius: 6,
                                        backgroundColor: barColor,
                                    } }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: item.label })] }, index));
                    }) })] }) }));
};
exports.BarChart = BarChart;
exports.BarChart.displayName = "BarChart";
exports.Chart = exports.BarChart;
exports.LineChart = exports.BarChart;
exports.AreaChart = exports.BarChart;
exports.RadarChart = exports.BarChart;
const Sparkline = ({ values = [12, 18, 15, 24, 28, 34, 42], color = "#10B981", trend = "+32.4%", style, }) => {
    const max = Math.max(...values, 1);
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, style: style, children: [(0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "flex-end", gap: 1, style: { height: 20 }, children: values.map((v, i) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        width: 4,
                        height: Math.max((v / max) * 18, 3),
                        borderRadius: 2,
                        backgroundColor: color,
                    } }, i))) }), trend && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: color, children: trend }))] }));
};
exports.Sparkline = Sparkline;
exports.Sparkline.displayName = "Sparkline";
const DonutChart = ({ data, centerLabel = "Total Load", centerValue = "94%", size = 120, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 18,
                backgroundColor: "rgba(16, 18, 30, 0.85)",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.08)",
                alignItems: "center",
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 4, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Center, { style: {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderWidth: 12,
                        borderColor: "rgba(255, 255, 255, 0.08)",
                        borderTopColor: data[0]?.color ?? semanticColors.primary,
                        borderRightColor: data[1]?.color ?? "#10B981",
                        borderBottomColor: data[2]?.color ?? "#F59E0B",
                    }, children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: centerValue }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, style: { fontSize: 10 }, children: centerLabel })] }) }), (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 3, wrap: true, justify: "center", children: data.map((item, idx) => ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1.5, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { width: 8, height: 8, borderRadius: 4, backgroundColor: item.color } }), (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: [item.label, " (", item.value, "%)"] })] }, idx))) })] }) }));
};
exports.DonutChart = DonutChart;
exports.DonutChart.displayName = "DonutChart";
exports.PieChart = exports.DonutChart;
const ProgressChart = ({ tracks, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 18,
                backgroundColor: "rgba(16, 18, 30, 0.85)",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.08)",
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 3, children: tracks.map((track, idx) => ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "medium", color: semanticColors.foreground, children: track.label }), (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: track.color, children: [track.value, "%"] })] }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { width: "100%", height: 6, borderRadius: 3, backgroundColor: "rgba(255, 255, 255, 0.08)", overflow: "hidden" }, children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { width: `${Math.min(100, track.value)}%`, height: "100%", backgroundColor: track.color } }) })] }, idx))) }) }));
};
exports.ProgressChart = ProgressChart;
exports.ProgressChart.displayName = "ProgressChart";
const Gauge = ({ value, label = "Health Index", statusText = "Optimal", style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const color = value > 80 ? "#10B981" : value > 50 ? "#F59E0B" : "#F43F5E";
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 18,
                borderRadius: 16,
                backgroundColor: "rgba(16, 18, 30, 0.85)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.08)",
                alignItems: "center",
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Center, { style: {
                        width: 90,
                        height: 90,
                        borderRadius: 45,
                        borderWidth: 8,
                        borderColor: "rgba(255, 255, 255, 0.08)",
                        borderTopColor: color,
                        borderRightColor: value > 50 ? color : "rgba(255, 255, 255, 0.08)",
                    }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xl", weight: "bold", color: color, children: [value, "%"] }) }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foreground, style: { marginTop: 4 }, children: label }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: color, weight: "semibold", children: statusText })] }) }));
};
exports.Gauge = Gauge;
exports.Gauge.displayName = "Gauge";
