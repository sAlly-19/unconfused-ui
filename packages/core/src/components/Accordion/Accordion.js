"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = exports.AccordionRoot = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const recipes_1 = require("@unconfused-ui/recipes");
const theme_1 = require("@unconfused-ui/theme");
const getAccordionRecipe = (semanticColors) => (0, recipes_1.createSlotRecipe)({
    slots: ["root", "item", "trigger", "title", "indicator", "content"],
    base: {
        root: {
            gap: 8,
        },
        item: {
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.08)",
            backgroundColor: semanticColors.surface,
            overflow: "hidden",
        },
        trigger: {
            paddingHorizontal: 16,
            paddingVertical: 14,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        title: {
            fontSize: 15,
            fontWeight: "600",
            color: semanticColors.foreground,
        },
        indicator: {
            fontSize: 12,
            color: semanticColors.foregroundMuted,
        },
        content: {
            paddingHorizontal: 16,
            paddingBottom: 16,
            paddingTop: 4,
            borderTopWidth: 1,
            borderTopColor: "rgba(255, 255, 255, 0.05)",
        },
    },
    variants: {
        variant: {
            default: {
                item: {
                    backgroundColor: semanticColors.surface,
                    borderColor: "rgba(255, 255, 255, 0.08)",
                },
            },
            bordered: {
                item: {
                    backgroundColor: "transparent",
                    borderColor: semanticColors.border,
                },
            },
            subtle: {
                item: {
                    backgroundColor: semanticColors.surfaceSubtle,
                    borderColor: semanticColors.borderSubtle,
                },
            },
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const AccordionContext = (0, react_1.createContext)(null);
const AccordionRoot = ({ type = "single", value: propValue, defaultValue = [], onValueChange, variant = "default", style, children, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [expandedItems, setExpandedItems] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const recipe = getAccordionRecipe(semanticColors);
    const styles = (0, react_1.useMemo)(() => recipe({ variant }), [recipe, variant]);
    const toggleItem = (itemValue) => {
        if (type === "single") {
            setExpandedItems(expandedItems.includes(itemValue) ? [] : [itemValue]);
        }
        else {
            setExpandedItems(expandedItems.includes(itemValue)
                ? expandedItems.filter((i) => i !== itemValue)
                : [...expandedItems, itemValue]);
        }
    };
    return ((0, jsx_runtime_1.jsx)(AccordionContext.Provider, { value: { expandedItems, toggleItem, styles }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { style: [styles.root, style], children: children }) }));
};
exports.AccordionRoot = AccordionRoot;
exports.AccordionRoot.displayName = "Accordion";
const AccordionItemContext = (0, react_1.createContext)(null);
const AccordionItem = ({ value, style, children }) => {
    const context = (0, react_1.useContext)(AccordionContext);
    const { semanticColors } = (0, theme_1.useTheme)();
    if (!context) {
        throw new Error("<Accordion.Item> must be used within <Accordion>");
    }
    const isExpanded = context.expandedItems.includes(value);
    return ((0, jsx_runtime_1.jsx)(AccordionItemContext.Provider, { value: { value, isExpanded }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                ...context.styles.item,
                isExpanded && { borderColor: semanticColors.borderBold },
                style,
            ], children: children }) }));
};
exports.AccordionItem = AccordionItem;
exports.AccordionItem.displayName = "Accordion.Item";
const AccordionTrigger = ({ title, style }) => {
    const accContext = (0, react_1.useContext)(AccordionContext);
    const itemContext = (0, react_1.useContext)(AccordionItemContext);
    const { semanticColors } = (0, theme_1.useTheme)();
    if (!accContext || !itemContext) {
        throw new Error("<Accordion.Trigger> must be used within <Accordion.Item>");
    }
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => accContext.toggleItem(itemContext.value), accessibilityRole: "button", accessibilityState: { expanded: itemContext.isExpanded }, style: [
            ...accContext.styles.trigger,
            style,
        ], children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", weight: "semibold", color: semanticColors.foreground, style: accContext.styles.title, children: title }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, style: accContext.styles.indicator, children: itemContext.isExpanded ? "▲" : "▼" })] }));
};
exports.AccordionTrigger = AccordionTrigger;
exports.AccordionTrigger.displayName = "Accordion.Trigger";
const AccordionContent = ({ children, style }) => {
    const accContext = (0, react_1.useContext)(AccordionContext);
    const itemContext = (0, react_1.useContext)(AccordionItemContext);
    const { semanticColors } = (0, theme_1.useTheme)();
    if (!accContext || !itemContext) {
        throw new Error("<Accordion.Content> must be used within <Accordion.Item>");
    }
    if (!itemContext.isExpanded) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            ...accContext.styles.content,
            style,
        ], children: typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, lineHeight: "sm", children: children })) : (children) }));
};
exports.AccordionContent = AccordionContent;
exports.AccordionContent.displayName = "Accordion.Content";
exports.Accordion = Object.assign(exports.AccordionRoot, {
    Item: exports.AccordionItem,
    Trigger: exports.AccordionTrigger,
    Content: exports.AccordionContent,
});
