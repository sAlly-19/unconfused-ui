"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingState = exports.OfflineState = exports.ErrorState = exports.NotFound = exports.NoResults = exports.EmptyState = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Button_1 = require("../Button");
const FeedbackVariants_1 = require("../Feedback/FeedbackVariants");
const getEmptyStateSurfaceStyle = (semanticColors, baseTokens) => ({
    padding: 36,
    borderRadius: 20,
    backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.8),
    borderWidth: 1,
    borderColor: semanticColors.borderSubtle,
    alignItems: "center",
    justifyContent: "center",
});
const getIconGlowStyle = (semanticColors) => ({
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.15),
    borderWidth: 1,
    borderColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.3),
});
const EmptyState = ({ title = "No Items Found", description = "There is no data to display at the moment.", icon = (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "3xl", children: "\uD83D\uDCED" }), actionLabel, onAction, secondaryActionLabel, onSecondaryAction, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            getEmptyStateSurfaceStyle(semanticColors, baseTokens),
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 4, align: "center", style: { maxWidth: 380 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Center, { style: getIconGlowStyle(semanticColors), children: icon }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1.5, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, style: { textAlign: "center" }, children: title }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, style: { textAlign: "center", lineHeight: 18 }, children: description })] }), (actionLabel || secondaryActionLabel) && ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 2, style: { marginTop: 4 }, children: [secondaryActionLabel && onSecondaryAction && ((0, jsx_runtime_1.jsx)(Button_1.Button, { size: "sm", variant: "ghost", onPress: onSecondaryAction, children: secondaryActionLabel })), actionLabel && onAction && ((0, jsx_runtime_1.jsx)(Button_1.Button, { size: "sm", variant: "primary", onPress: onAction, children: actionLabel }))] }))] }) }));
};
exports.EmptyState = EmptyState;
exports.EmptyState.displayName = "EmptyState";
// 1. NoResults (Search / Filter empty state)
const NoResults = (props) => ((0, jsx_runtime_1.jsx)(exports.EmptyState, { title: "No Matching Results", description: "We couldn't find anything matching your query. Try searching with different keywords.", icon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", children: "\uD83D\uDD0D" }), actionLabel: "Clear Search", ...props }));
exports.NoResults = NoResults;
exports.NoResults.displayName = "NoResults";
// 2. NotFound (404 Page / Resource not found)
const NotFound = (props) => ((0, jsx_runtime_1.jsx)(exports.EmptyState, { title: "404 - Node Not Found", description: "The requested cluster instance or resource has been relocated or decommissioned.", icon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", children: "\uD83E\uDE90" }), actionLabel: "Back to Dashboard", ...props }));
exports.NotFound = NotFound;
exports.NotFound.displayName = "NotFound";
// 3. ErrorState (Exception / Fault)
const ErrorState = (props) => ((0, jsx_runtime_1.jsx)(exports.EmptyState, { title: "Service Unavailable", description: "An unexpected telemetry fault occurred while communicating with the cluster.", icon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", children: "\u26A0\uFE0F" }), actionLabel: "Retry Operation", ...props }));
exports.ErrorState = ErrorState;
exports.ErrorState.displayName = "ErrorState";
// 4. OfflineState (No Connection)
const OfflineState = (props) => ((0, jsx_runtime_1.jsx)(exports.EmptyState, { title: "Connection Offline", description: "Your client is currently disconnected from the global network mesh. Reconnecting...", icon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", children: "\uD83D\uDCE1" }), actionLabel: "Reconnect Now", ...props }));
exports.OfflineState = OfflineState;
exports.OfflineState.displayName = "OfflineState";
// 5. LoadingState (Activity container)
const LoadingState = ({ title = "Synchronizing Telemetry...", description = "Pulling latest replica metrics from distributed edge workers.", style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            getEmptyStateSurfaceStyle(semanticColors, baseTokens),
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, align: "center", style: { maxWidth: 360 }, children: [(0, jsx_runtime_1.jsx)(FeedbackVariants_1.Spinner, { size: "large" }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", weight: "bold", color: semanticColors.foreground, style: { textAlign: "center" }, children: title }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, style: { textAlign: "center" }, children: description })] })] }) }));
};
exports.LoadingState = LoadingState;
exports.LoadingState.displayName = "LoadingState";
