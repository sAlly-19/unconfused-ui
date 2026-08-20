"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const core_1 = require("@unconfused-ui/core");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
function DocumentationContent() {
    const { theme } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.SafeAreaView, { style: { flex: 1, backgroundColor: theme.colors.background }, children: (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { contentContainerStyle: { padding: 24 }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 6, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "3xl", weight: "bold", color: theme.colors.foreground, children: "Unconfused UI Documentation" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", color: theme.colors.foregroundMuted, children: "Human and AI-Agent readable design system specification & component guides." })] }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "bordered", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "Quick Installation" }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Surface, { variant: "bordered", style: { padding: 16 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { style: { fontFamily: "monospace" }, children: "npx unconfused init" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { style: { fontFamily: "monospace", marginTop: 8 }, children: "npx unconfused add button card badge" })] }) })] }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "bordered", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "Component API: Button" }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "semibold", children: "Props:" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", children: "- variant: \"primary\" | \"secondary\" | \"destructive\" | \"outline\" | \"ghost\"" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", children: "- size: \"sm\" | \"md\" | \"lg\"" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", children: "- loading: boolean" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", children: "- slots: { leftIcon, rightIcon, loadingSpinner }" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", children: "- style, contentStyle, labelStyle: Style overrides" })] }) })] })] }) }) }));
}
function App() {
    return ((0, jsx_runtime_1.jsx)(theme_1.ThemeProvider, { colorScheme: "dark", children: (0, jsx_runtime_1.jsx)(DocumentationContent, {}) }));
}
