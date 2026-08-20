"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = exports.SidebarToggle = exports.SidebarFooter = exports.SidebarNavItem = exports.SidebarNav = exports.SidebarHeader = exports.SidebarRoot = void 0;
exports.useSidebarContext = useSidebarContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Sidebar_styles_1 = require("./Sidebar.styles");
const SidebarContext = (0, react_1.createContext)(null);
function useSidebarContext() {
    const context = (0, react_1.useContext)(SidebarContext);
    if (!context) {
        throw new Error("Sidebar sub-components must be used within a <Sidebar>");
    }
    return context;
}
const SidebarRoot = ({ collapsed: propCollapsed, defaultCollapsed = false, onCollapseChange, width = 260, collapsedWidth = 72, style, children, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [collapsed, setCollapsed] = (0, hooks_1.useControllableState)({
        value: propCollapsed,
        defaultValue: defaultCollapsed,
        onChange: onCollapseChange,
    });
    const activeWidth = collapsed ? collapsedWidth : width;
    const sidebarStyle = {
        width: activeWidth,
        height: "100%",
        backgroundColor: "rgba(12, 14, 24, 0.95)",
        borderRightWidth: 1,
        borderRightColor: "rgba(255, 255, 255, 0.08)",
        paddingVertical: 16,
        paddingHorizontal: collapsed ? 8 : 14,
        justifyContent: "space-between",
    };
    return ((0, jsx_runtime_1.jsx)(SidebarContext.Provider, { value: { collapsed, setCollapsed, width, collapsedWidth }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [sidebarStyle, style], accessibilityRole: "menu", children: children }) }));
};
exports.SidebarRoot = SidebarRoot;
exports.SidebarRoot.displayName = "Sidebar";
const SidebarHeader = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ marginBottom: 20 }, style], children: children }));
exports.SidebarHeader = SidebarHeader;
exports.SidebarHeader.displayName = "Sidebar.Header";
const SidebarNav = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 1.5, style: [{ flex: 1 }, style], children: children }));
exports.SidebarNav = SidebarNav;
exports.SidebarNav.displayName = "Sidebar.Nav";
const SidebarNavItem = ({ icon, label, badge, active = false, onPress, style, children, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const { collapsed } = useSidebarContext();
    const itemRecipe = (0, Sidebar_styles_1.getSidebarNavItemRecipe)(semanticColors);
    const activeStyle = itemRecipe({ active: active ? "active" : "inactive" });
    const labelColor = active ? semanticColors.foreground : semanticColors.foregroundMuted;
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: onPress, accessibilityRole: "button", accessibilityState: { selected: active }, style: (state) => [
            ...activeStyle,
            collapsed && { justifyContent: "center", paddingHorizontal: 0 },
            typeof style === "function" ? style(state) : style,
        ], children: [icon, !collapsed && ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: { flex: 1 }, children: [label ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: active ? "semibold" : "regular", color: labelColor, children: label })) : (children), badge] }))] }));
};
exports.SidebarNavItem = SidebarNavItem;
exports.SidebarNavItem.displayName = "Sidebar.NavItem";
const SidebarFooter = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ paddingTop: 16, borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.06)" }, style], children: children }));
exports.SidebarFooter = SidebarFooter;
exports.SidebarFooter.displayName = "Sidebar.Footer";
const SidebarToggle = ({ style }) => {
    const { collapsed, setCollapsed } = useSidebarContext();
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setCollapsed(!collapsed), accessibilityRole: "button", accessibilityLabel: collapsed ? "Expand sidebar" : "Collapse sidebar", style: [
            {
                paddingVertical: 6,
                paddingHorizontal: 10,
                borderRadius: 6,
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.08)",
                alignItems: "center",
                justifyContent: "center",
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "medium", color: semanticColors.foregroundMuted, children: collapsed ? "»" : "« Collapse" }) }));
};
exports.SidebarToggle = SidebarToggle;
exports.SidebarToggle.displayName = "Sidebar.Toggle";
exports.Sidebar = Object.assign(exports.SidebarRoot, {
    Header: exports.SidebarHeader,
    Nav: exports.SidebarNav,
    NavItem: exports.SidebarNavItem,
    Footer: exports.SidebarFooter,
    Toggle: exports.SidebarToggle,
});
