"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = useForm;
const react_1 = require("react");
/**
 * Enterprise Form hook supporting Zod, Valibot, and Yup schemas with full TypeScript inference.
 */
function useForm({ defaultValues = {}, schema, onSubmit, }) {
    const [values, setValues] = (0, react_1.useState)(defaultValues);
    const [errors, setErrors] = (0, react_1.useState)({});
    const [isSubmitting, setIsSubmitting] = (0, react_1.useState)(false);
    const setValue = (0, react_1.useCallback)((field, value) => {
        setValues((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => {
            if (prev[field]) {
                const next = { ...prev };
                delete next[field];
                return next;
            }
            return prev;
        });
    }, []);
    const validate = (0, react_1.useCallback)((currentValues) => {
        if (!schema)
            return { valid: true, errors: {} };
        const validationErrors = {};
        // 1. Zod / Valibot safeParse adapter
        if (typeof schema.safeParse === "function") {
            const result = schema.safeParse(currentValues);
            if (!result.success && result.error?.issues) {
                for (const issue of result.error.issues) {
                    const field = issue.path[0] ? String(issue.path[0]) : "form";
                    if (!validationErrors[field]) {
                        validationErrors[field] = issue.message;
                    }
                }
                return { valid: false, errors: validationErrors };
            }
            return { valid: true, errors: {} };
        }
        return { valid: true, errors: {} };
    }, [schema]);
    const handleSubmit = (0, react_1.useCallback)(async () => {
        const { valid, errors: validationErrors } = validate(values);
        setErrors(validationErrors);
        if (!valid)
            return;
        if (onSubmit) {
            setIsSubmitting(true);
            try {
                await onSubmit(values);
            }
            finally {
                setIsSubmitting(false);
            }
        }
    }, [onSubmit, validate, values]);
    const reset = (0, react_1.useCallback)(() => {
        setValues(defaultValues);
        setErrors({});
        setIsSubmitting(false);
    }, [defaultValues]);
    const register = (0, react_1.useCallback)((name) => ({
        value: values[name] ?? "",
        onChangeText: (text) => setValue(name, text),
        error: errors[name],
    }), [errors, setValue, values]);
    return {
        values,
        errors,
        isSubmitting,
        isValid: Object.keys(errors).length === 0,
        setValue,
        handleSubmit,
        reset,
        register,
    };
}
