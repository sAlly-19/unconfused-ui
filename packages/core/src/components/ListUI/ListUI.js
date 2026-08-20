"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = exports.TableHeader = exports.TableRow = exports.Table = exports.GridItem = exports.Grid = exports.List = exports.ListSection = exports.ListFooter = exports.ListHeader = exports.ListItem = void 0;
exports.FlatList = FlatList;
exports.SectionList = SectionList;
exports.VirtualList = VirtualList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const ListItem = ({ title, subtitle, leftIcon, rightAction, onPress, showChevron = false, selected = false, disabled = false, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: onPress, disabled: disabled || !onPress, accessibilityRole: "button", accessibilityState: { selected, disabled }, style: [
            {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 14,
                paddingHorizontal: 16,
                backgroundColor: selected ? (0, tokens_1.withAlpha)(baseTokens.colors.brand[500], 0.15) : "transparent",
                borderBottomWidth: 1,
                borderBottomColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.06),
                minHeight: 52,
                opacity: disabled ? 0.4 : 1,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, style: { flex: 1 }, children: [leftIcon, (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0.5, style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "semibold", color: semanticColors.foreground, children: title }), subtitle && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: subtitle }))] })] }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [rightAction, showChevron && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: "\u203A" }))] })] }));
};
exports.ListItem = ListItem;
exports.ListItem.displayName = "ListItem";
// 2. ListHeader, ListFooter, ListSection
const ListHeader = ({ title, count }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: {
            paddingHorizontal: 16,
            paddingVertical: 10,
            backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.03),
            borderBottomWidth: 1,
            borderBottomColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.08),
        }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.2 }, color: semanticColors.primary, children: title }), count !== undefined && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, weight: "bold", children: count }))] }));
};
exports.ListHeader = ListHeader;
exports.ListHeader.displayName = "ListHeader";
const ListFooter = ({ children, style }) => {
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ padding: 14, backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.02) }, style], children: typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.5), children: children })) : (children) }));
};
exports.ListFooter = ListFooter;
exports.ListFooter.displayName = "ListFooter";
const ListSection = ({ title, count, children, }) => {
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, style: { borderBottomWidth: 1, borderBottomColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.08) }, children: [(0, jsx_runtime_1.jsx)(exports.ListHeader, { title: title, count: count }), children] }));
};
exports.ListSection = ListSection;
exports.ListSection.displayName = "ListSection";
// 3. List
exports.List = Object.assign(({ children, style }) => {
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                borderRadius: 14,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.8),
            },
            style,
        ], children: children }));
}, {
    Item: exports.ListItem,
    Header: exports.ListHeader,
    Footer: exports.ListFooter,
    Section: exports.ListSection,
});
// 4. FlatList & SectionList
function FlatList(props) {
    return (0, jsx_runtime_1.jsx)(react_native_1.FlatList, { showsVerticalScrollIndicator: false, ...props });
}
function SectionList(props) {
    return (0, jsx_runtime_1.jsx)(react_native_1.SectionList, { showsVerticalScrollIndicator: false, ...props });
}
function VirtualList({ itemHeight, ...props }) {
    const getItemLayout = itemHeight
        ? (_, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
        })
        : undefined;
    return ((0, jsx_runtime_1.jsx)(react_native_1.FlatList, { showsVerticalScrollIndicator: false, initialNumToRender: props.initialNumToRender ?? 15, maxToRenderPerBatch: props.maxToRenderPerBatch ?? 20, windowSize: props.windowSize ?? 5, getItemLayout: getItemLayout, ...props }));
}
const Grid = ({ columns = 2, gap = 12, style, children }) => ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: gap, wrap: true, style: style, children: react_1.default.Children.map(children, (child) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { width: `${100 / columns - 2.5}%` }, children: child }))) }));
exports.Grid = Grid;
exports.Grid.displayName = "Grid";
const GridItem = (props) => (0, jsx_runtime_1.jsx)(primitives_1.Box, { ...props });
exports.GridItem = GridItem;
exports.GridItem.displayName = "GridItem";
const Table = ({ style, children }) => ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                minWidth: 560,
                borderRadius: 14,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(16, 18, 30, 0.85)",
            },
            style,
        ], children: children }) }));
exports.Table = Table;
exports.Table.displayName = "Table";
const TableRow = ({ isHeader = false, zebra = false, style, children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: isHeader ? 12 : 14,
                paddingHorizontal: 16,
                backgroundColor: isHeader
                    ? "rgba(255, 255, 255, 0.05)"
                    : zebra
                        ? "rgba(255, 255, 255, 0.02)"
                        : "transparent",
                borderBottomWidth: 1,
                borderBottomColor: isHeader ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.05)",
            },
            style,
        ], children: children }));
};
exports.TableRow = TableRow;
exports.TableRow.displayName = "TableRow";
const TableHeader = ({ label, flex = 1, align = "left", style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ flex, alignItems: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start" }, style], children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.1 }, color: semanticColors.primary, children: label }) }));
};
exports.TableHeader = TableHeader;
exports.TableHeader.displayName = "TableHeader";
const TableCell = ({ flex = 1, align = "left", style, children }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ flex, alignItems: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start" }, style], children: typeof children === "string" ? (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", children: children }) : children }));
exports.TableCell = TableCell;
exports.TableCell.displayName = "TableCell";
