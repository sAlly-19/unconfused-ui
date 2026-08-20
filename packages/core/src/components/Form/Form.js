"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.FieldGroup = exports.FormSection = exports.FormError = exports.FormMessage = exports.FormDescription = exports.FormControl = exports.FormLabel = exports.FormField = exports.FormItem = exports.FormRoot = void 0;
exports.useFormContext = useFormContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const FormContext = (0, react_1.createContext)(null);
function useFormContext() {
    const context = (0, react_1.useContext)(FormContext);
    if (!context) {
        throw new Error("<FormItem> must be used within <Form>");
    }
    return context;
}
const FormRoot = ({ initialValues = {}, onSubmit, style, children }) => {
    const [values, setValues] = (0, react_1.useState)(initialValues);
    const [errors, setErrors] = (0, react_1.useState)({});
    const setValue = (field, value) => {
        setValues((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    };
    const setError = (field, error) => {
        setErrors((prev) => ({ ...prev, [field]: error }));
    };
    return ((0, jsx_runtime_1.jsx)(FormContext.Provider, { value: { values, errors, setValue, setError }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 4, style: style, children: children }) }));
};
exports.FormRoot = FormRoot;
const FormItem = ({ name, label, children }) => {
    const { values, errors, setValue } = useFormContext();
    const fieldValue = values[name] ?? "";
    const fieldError = errors[name];
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children({ value: fieldValue, onChangeText: (val) => setValue(name, val), error: fieldError, label }) });
};
exports.FormItem = FormItem;
exports.FormField = exports.FormItem;
const FormLabel = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }, children: children }));
};
exports.FormLabel = FormLabel;
const FormControl = ({ children }) => (0, jsx_runtime_1.jsx)(primitives_1.Box, { children: children });
exports.FormControl = FormControl;
const FormDescription = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: children });
};
exports.FormDescription = FormDescription;
const FormMessage = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    (0, react_1.useEffect)(() => {
        if (typeof children === "string" && children.trim().length > 0) {
            react_native_1.AccessibilityInfo?.announceForAccessibility?.(`Form error: ${children}`);
        }
    }, [children]);
    if (!children)
        return null;
    return ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.danger, weight: "medium", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: children }));
};
exports.FormMessage = FormMessage;
exports.FormError = exports.FormMessage;
const FormSection = ({ title, children }) => ((0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 3, children: [(0, jsx_runtime_1.jsx)(exports.FormLabel, { children: title }), children] }));
exports.FormSection = FormSection;
const FieldGroup = ({ children }) => ((0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 3, children: children }));
exports.FieldGroup = FieldGroup;
exports.Form = Object.assign(exports.FormRoot, {
    Item: exports.FormItem,
    Field: exports.FormField,
    Label: exports.FormLabel,
    Control: exports.FormControl,
    Description: exports.FormDescription,
    Message: exports.FormMessage,
    Error: exports.FormError,
    Section: exports.FormSection,
    Group: exports.FieldGroup,
});
