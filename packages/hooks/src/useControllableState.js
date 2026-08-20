"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useControllableState = useControllableState;
const react_1 = require("react");
function useControllableState({ value: propValue, defaultValue, onChange, }) {
    const [internalValue, setInternalValue] = (0, react_1.useState)(defaultValue);
    const isControlled = propValue !== undefined;
    const value = isControlled ? propValue : internalValue;
    const setValue = (0, react_1.useCallback)((nextValue) => {
        const resolvedNextValue = typeof nextValue === "function" ? nextValue(value) : nextValue;
        if (!isControlled) {
            setInternalValue(resolvedNextValue);
        }
        onChange?.(resolvedNextValue);
    }, [isControlled, onChange, value]);
    return [value, setValue];
}
