"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = exports.TabsContent = exports.TabsTrigger = exports.TabsList = exports.TabsRoot = void 0;
exports.useTabsContext = useTabsContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const recipes_1 = require("@unconfused-ui/recipes");
const theme_1 = require("@unconfused-ui/theme");
const getTabsRecipe = (semanticColors) => (0, recipes_1.createSlotRecipe)({
    slots: ["root", "list", "trigger", "content"],
    base: {
        root: {
            gap: 12,
        },
        list: {
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            padding: 4,
            borderRadius: 10,
            backgroundColor: semanticColors.surfaceSubtle,
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.06)",
        },
        trigger: {
            flex: 1,
            paddingVertical: 8,
            paddingHorizontal: 14,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
        },
        content: {
            paddingTop: 4,
        },
    },
    variants: {
        variant: {
            default: {
                list: {
                    backgroundColor: semanticColors.surfaceSubtle,
                },
            },
            pills: {
                list: {
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    padding: 0,
                },
            },
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const TabsContext = (0, react_1.createContext)(null);
function useTabsContext() {
    const context = (0, react_1.useContext)(TabsContext);
    if (!context) {
        throw new Error("<Tabs> subcomponents must be used within <Tabs>");
    }
    return context;
}
const TabsRoot = ({ value: propValue, defaultValue = "", onValueChange, variant = "default", style, children, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [value, setValue] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const recipe = getTabsRecipe(semanticColors);
    const styles = (0, react_1.useMemo)(() => recipe({ variant }), [recipe, variant]);
    return ((0, jsx_runtime_1.jsx)(TabsContext.Provider, { value: { value, setValue, styles }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { style: [styles.root, style], children: children }) }));
};
exports.TabsRoot = TabsRoot;
exports.TabsRoot.displayName = "Tabs";
const TabsList = ({ children, style }) => {
    const { styles } = useTabsContext();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { style: [styles.list, style], children: children }));
};
exports.TabsList = TabsList;
exports.TabsList.displayName = "Tabs.List";
const TabsTrigger = ({ value: triggerValue, label, style, children }) => {
    const { value, setValue, styles } = useTabsContext();
    const { semanticColors } = (0, theme_1.useTheme)();
    const isSelected = value === triggerValue;
    const activeTriggerStyle = {
        backgroundColor: isSelected ? semanticColors.surface : "transparent",
        borderWidth: isSelected ? 1 : 0,
        borderColor: isSelected ? "rgba(255, 255, 255, 0.1)" : "transparent",
        shadowColor: isSelected ? "#000" : "transparent",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: isSelected ? 0.15 : 0,
        shadowRadius: 3,
        elevation: isSelected ? 1 : 0,
    };
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setValue(triggerValue), accessibilityRole: "tab", accessibilityState: { selected: isSelected }, accessibilityLabel: typeof label === "string" ? label : undefined, style: [...styles.trigger, activeTriggerStyle, style], children: label ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: isSelected ? "bold" : "medium", color: isSelected ? semanticColors.foreground : semanticColors.foregroundMuted, children: label })) : (children) }));
};
exports.TabsTrigger = TabsTrigger;
exports.TabsTrigger.displayName = "Tabs.Trigger";
const TabsContent = ({ value: contentValue, style, children }) => {
    const { value, styles } = useTabsContext();
    if (value !== contentValue) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [styles.content, style], children: children });
};
exports.TabsContent = TabsContent;
exports.TabsContent.displayName = "Tabs.Content";
exports.Tabs = Object.assign(exports.TabsRoot, {
    List: exports.TabsList,
    Trigger: exports.TabsTrigger,
    Content: exports.TabsContent,
});
