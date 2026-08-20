"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusScope = void 0;
exports.FocusTrap = FocusTrap;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
function FocusTrap({ children, active = true, onRequestClose, ...props }) {
    const containerRef = (0, react_1.useRef)(null);
    const previouslyFocusedRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!active)
            return;
        if (react_native_1.Platform.OS === 'web') {
            previouslyFocusedRef.current = document.activeElement;
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onRequestClose?.();
                    return;
                }
                if (e.key === 'Tab') {
                    // @ts-ignore - access DOM element on web
                    const node = containerRef.current;
                    if (!node)
                        return;
                    const focusableElements = node.querySelectorAll?.('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])');
                    if (!focusableElements || focusableElements.length === 0) {
                        e.preventDefault();
                        return;
                    }
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    }
                    else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                previouslyFocusedRef.current?.focus?.();
            };
        }
    }, [active, onRequestClose]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { ref: containerRef, accessibilityViewIsModal: active, ...props, children: children }));
}
exports.FocusScope = FocusTrap;
