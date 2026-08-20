"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyRender = LazyRender;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
/**
 * LazyRender Primitive:
 * Defers mounting expensive component subtrees (ColorPicker, DatePicker, CommandPalette)
 * until they are opened for the first time, slashing initial bundle evaluation and render tree cost.
 */
function LazyRender({ visible, unmountOnHide = false, children }) {
    const [hasMounted, setHasMounted] = (0, react_1.useState)(visible);
    (0, react_1.useEffect)(() => {
        if (visible && !hasMounted) {
            setHasMounted(true);
        }
    }, [visible, hasMounted]);
    if (!hasMounted) {
        return null;
    }
    if (!visible && unmountOnHide) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
}
LazyRender.displayName = "LazyRender";
