"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = exports.Slottable = void 0;
exports.mergeProps = mergeProps;
exports.composeRefs = composeRefs;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
/**
 * Merges props for the Slot component, combining styles and event handlers.
 */
function mergeProps(slotProps, childProps) {
    const overrideProps = { ...childProps };
    for (const propName in childProps) {
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args) => {
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            }
            else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        }
        else if (propName === 'style') {
            overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean);
        }
        else if (propName === 'className') {
            overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
        }
    }
    return { ...slotProps, ...overrideProps };
}
/**
 * Composes multiple refs into a single ref callback.
 */
function composeRefs(...refs) {
    return (node) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref != null && 'current' in ref) {
                ref.current = node;
            }
        });
    };
}
const Slottable = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.Slottable = Slottable;
function isSlottable(child) {
    return react_1.default.isValidElement(child) && child.type === exports.Slottable;
}
exports.Slot = react_1.default.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = react_1.default.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
            if (child === slottable) {
                if (react_1.default.Children.count(newElement) > 1)
                    return react_1.default.Children.only(null);
                return react_1.default.isValidElement(newElement) ? newElement.props.children : null;
            }
            else {
                return child;
            }
        });
        return ((0, jsx_runtime_1.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react_1.default.isValidElement(newElement)
                ? react_1.default.cloneElement(newElement, undefined, newChildren)
                : null }));
    }
    return ((0, jsx_runtime_1.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: children }));
});
exports.Slot.displayName = 'Slot';
const SlotClone = react_1.default.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (react_1.default.isValidElement(children)) {
        return react_1.default.cloneElement(children, {
            ...mergeProps(slotProps, (children.props ?? {})),
            ref: forwardedRef ? composeRefs(forwardedRef, children.ref) : children.ref,
        });
    }
    return react_1.default.Children.count(children) > 1 ? react_1.default.Children.only(null) : null;
});
SlotClone.displayName = 'SlotClone';
