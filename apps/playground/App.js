"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const core_1 = require("@unconfused-ui/core");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
function PlaygroundContent() {
    const { theme } = (0, theme_1.useTheme)();
    const [variant, setVariant] = (0, react_1.useState)("primary");
    const [size, setSize] = (0, react_1.useState)("md");
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [disabled, setDisabled] = (0, react_1.useState)(false);
    const generatedCode = `<Button
  variant="${variant}"
  size="${size}"${loading ? "\n  loading" : ""}${disabled ? "\n  disabled" : ""}
>
  Interactive Button
</Button>`;
    return ((0, jsx_runtime_1.jsx)(react_native_1.SafeAreaView, { style: { flex: 1, backgroundColor: theme.colors.background }, children: (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { contentContainerStyle: { padding: 20 }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 6, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", weight: "bold", color: theme.colors.foreground, children: "Interactive Playground" }), (0, jsx_runtime_1.jsx)(primitives_1.Surface, { variant: "bordered", style: { padding: 32, alignItems: "center", justifyContent: "center", minHeight: 160 }, children: (0, jsx_runtime_1.jsx)(core_1.Button, { variant: variant, size: size, loading: loading, disabled: disabled, children: "Interactive Button" }) }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "bordered", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "Prop Controls" }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 4, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "semibold", children: "Variant" }), (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, wrap: true, children: ["primary", "secondary", "destructive", "outline", "ghost"].map((v) => ((0, jsx_runtime_1.jsx)(core_1.Button, { size: "sm", variant: variant === v ? "primary" : "outline", onPress: () => setVariant(v), children: v }, v))) })] }), (0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "semibold", children: "Size" }), (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, children: ["sm", "md", "lg"].map((s) => ((0, jsx_runtime_1.jsx)(core_1.Button, { size: "sm", variant: size === s ? "primary" : "outline", onPress: () => setSize(s), children: s }, s))) })] }), (0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "semibold", children: "State" }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 2, children: [(0, jsx_runtime_1.jsxs)(core_1.Button, { size: "sm", variant: loading ? "primary" : "outline", onPress: () => setLoading(!loading), children: ["Loading: ", loading ? "ON" : "OFF"] }), (0, jsx_runtime_1.jsxs)(core_1.Button, { size: "sm", variant: disabled ? "primary" : "outline", onPress: () => setDisabled(!disabled), children: ["Disabled: ", disabled ? "ON" : "OFF"] })] })] })] }) })] }), (0, jsx_runtime_1.jsxs)(core_1.Card, { variant: "subtle", children: [(0, jsx_runtime_1.jsx)(core_1.Card.Header, { children: (0, jsx_runtime_1.jsx)(core_1.Card.Title, { children: "Generated Code" }) }), (0, jsx_runtime_1.jsx)(core_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.Surface, { variant: "bordered", style: { padding: 16, backgroundColor: theme.colors.surface }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", style: { fontFamily: "monospace" }, children: generatedCode }) }) })] })] }) }) }));
}
function App() {
    return ((0, jsx_runtime_1.jsx)(theme_1.ThemeProvider, { colorScheme: "dark", children: (0, jsx_runtime_1.jsx)(PlaygroundContent, {}) }));
}
