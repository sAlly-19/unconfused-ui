"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingCard = exports.DashboardCard = exports.MetricCard = exports.StatsCard = exports.SettingsList = exports.SettingsSection = exports.ProfileMenu = exports.NotificationCenter = exports.UserMenu = exports.VerificationCode = exports.OTPField = exports.PasswordField = exports.ImageUploader = exports.FileUploader = exports.DateRangePicker = exports.FilterSheet = exports.FilterBar = exports.SearchBar = exports.LoginForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Avatar_1 = require("../Avatar");
const Badge_1 = require("../Badge");
const Button_1 = require("../Button");
const Card_1 = require("../Card");
const DateTime_1 = require("../DateTime");
const Input_1 = require("../Input");
const InputVariants_1 = require("../Input/InputVariants");
const Popover_1 = require("../Popover");
const LoginForm = ({ onLogin, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [email, setEmail] = (0, react_1.useState)("");
    const [pass, setPass] = (0, react_1.useState)("");
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: "glass", style: { width: "100%", maxWidth: 420, ...style }, children: [(0, jsx_runtime_1.jsxs)(Card_1.Card.Header, { children: [(0, jsx_runtime_1.jsx)(Card_1.Card.Title, { children: "Developer Sign In" }), (0, jsx_runtime_1.jsx)(Card_1.Card.Description, { children: "Access distributed cluster telemetry and keys." })] }), (0, jsx_runtime_1.jsx)(Card_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 4, children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { label: "Email Address", placeholder: "alex@antigravity.ai", value: email, onChangeText: setEmail }), (0, jsx_runtime_1.jsx)(InputVariants_1.PasswordInput, { label: "Secret Key / Password", value: pass, onChangeText: setPass })] }) }), (0, jsx_runtime_1.jsx)(Card_1.Card.Footer, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "primary", style: { width: "100%" }, onPress: () => onLogin?.({ email, pass }), children: "Authenticate Session \u2192" }) })] }));
};
exports.LoginForm = LoginForm;
exports.LoginForm.displayName = "LoginForm";
// 2. SearchBar, FilterBar & FilterSheet
exports.SearchBar = InputVariants_1.SearchInput;
exports.FilterBar = InputVariants_1.SearchInput;
exports.FilterSheet = Card_1.Card;
const DateRangePicker = ({ style }) => ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 3, align: "center", style: style, children: [(0, jsx_runtime_1.jsx)(DateTime_1.DateInput, { placeholder: "Start Date", style: { flex: 1 } }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: "gray", children: "\u2192" }), (0, jsx_runtime_1.jsx)(DateTime_1.DateInput, { placeholder: "End Date", style: { flex: 1 } })] }));
exports.DateRangePicker = DateRangePicker;
exports.DateRangePicker.displayName = "DateRangePicker";
const FileUploader = ({ label = "Upload Architecture Manifest", description = "Drag & drop .yaml or tap to browse", onUpload, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: onUpload, children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
                {
                    padding: 24,
                    borderRadius: 16,
                    borderWidth: 1.5,
                    borderColor: "rgba(124, 58, 237, 0.4)",
                    borderStyle: "dashed",
                    alignItems: "center",
                    backgroundColor: "rgba(16, 18, 30, 0.6)",
                },
                style,
            ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", children: "\uD83D\uDCE6" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.primary, children: label }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: description })] }) }) }));
};
exports.FileUploader = FileUploader;
exports.FileUploader.displayName = "FileUploader";
exports.ImageUploader = exports.FileUploader;
exports.PasswordField = InputVariants_1.PasswordInput;
exports.OTPField = InputVariants_1.OTPInput;
exports.VerificationCode = InputVariants_1.OTPInput;
const UserMenu = ({ userName = "Alisson Silva", userRole = "Lead Architect", onLogout, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(Popover_1.Popover.Trigger, { children: (0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "center", gap: 2, children: (0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { fallback: userName.substring(0, 2).toUpperCase(), size: "sm", status: "online" }) }) }), (0, jsx_runtime_1.jsx)(Popover_1.Popover.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: userName }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: userRole })] }), (0, jsx_runtime_1.jsx)(Button_1.Button, { size: "xs", variant: "ghost", children: "Account Settings" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { size: "xs", variant: "destructive", onPress: onLogout, children: "Sign Out" })] }) })] }));
};
exports.UserMenu = UserMenu;
exports.UserMenu.displayName = "UserMenu";
exports.NotificationCenter = exports.UserMenu;
exports.ProfileMenu = exports.UserMenu;
// 6. SettingsSection & SettingsList
const SettingsSection = ({ title, children }) => ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.2 }, children: title }), children] }));
exports.SettingsSection = SettingsSection;
const SettingsList = ({ children }) => ((0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 4, children: children }));
exports.SettingsList = SettingsList;
const StatsCard = ({ title, value, change = "+18.4%", isPositive = true, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: "glass", style: { flex: 1, minWidth: 200, ...style }, children: [(0, jsx_runtime_1.jsx)(Card_1.Card.Header, { children: (0, jsx_runtime_1.jsx)(Card_1.Card.Description, { children: title }) }), (0, jsx_runtime_1.jsx)(Card_1.Card.Content, { children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", weight: "bold", color: semanticColors.foreground, children: value }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1.5, children: [(0, jsx_runtime_1.jsx)(Badge_1.Badge, { variant: isPositive ? "success" : "danger", size: "sm", children: change }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: "vs last month" })] })] }) })] }));
};
exports.StatsCard = StatsCard;
exports.StatsCard.displayName = "StatsCard";
exports.MetricCard = exports.StatsCard;
exports.DashboardCard = exports.StatsCard;
const PricingCard = ({ plan, price, period = "/month", popular = false, features, onSelect, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: "glass", accentBar: popular, style: {
            flex: 1,
            minWidth: 260,
            borderColor: popular ? "rgba(124, 58, 237, 0.6)" : "rgba(255, 255, 255, 0.1)",
            ...style,
        }, children: [(0, jsx_runtime_1.jsxs)(Card_1.Card.Header, { children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsx)(Card_1.Card.Title, { children: plan }), popular && (0, jsx_runtime_1.jsx)(Badge_1.Badge, { variant: "primary", size: "sm", children: "POPULAR" })] }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "baseline", gap: 1, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "3xl", weight: "bold", color: semanticColors.foreground, children: price }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: period })] })] }), (0, jsx_runtime_1.jsx)(Card_1.Card.Content, { children: (0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 2.5, children: features.map((f, i) => ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 2, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, weight: "bold", children: "\u2713" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, children: f })] }, i))) }) }), (0, jsx_runtime_1.jsx)(Card_1.Card.Footer, { children: (0, jsx_runtime_1.jsxs)(Button_1.Button, { variant: popular ? "primary" : "outline", style: { width: "100%" }, onPress: onSelect, children: ["Deploy ", plan, " \u2192"] }) })] }));
};
exports.PricingCard = PricingCard;
exports.PricingCard.displayName = "PricingCard";
