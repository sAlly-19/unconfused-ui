"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRovingFocus = useRovingFocus;
const react_1 = require("react");
const react_native_1 = require("react-native");
/**
 * Universal Roving TabIndex / Focus Hook for accessible keyboard navigation
 * Conforms to W3C WAI-ARIA Authoring Practices Guide for Tabs, Menus, RadioGroups.
 */
function useRovingFocus({ itemCount, initialIndex = 0, orientation = "horizontal", loop = true, onSelect, }) {
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(initialIndex);
    const activeIndexRef = (0, react_1.useRef)(activeIndex);
    activeIndexRef.current = activeIndex;
    const moveFocus = (0, react_1.useCallback)((nextIndex) => {
        let target = nextIndex;
        if (loop) {
            if (target < 0)
                target = itemCount - 1;
            if (target >= itemCount)
                target = 0;
        }
        else {
            target = Math.max(0, Math.min(itemCount - 1, target));
        }
        setActiveIndex(target);
        onSelect?.(target);
    }, [itemCount, loop, onSelect]);
    const handleKeyDown = (0, react_1.useCallback)((e) => {
        if (itemCount <= 0)
            return;
        const key = e.key || e.nativeEvent?.key;
        const isHorizontal = orientation === "horizontal" || orientation === "both";
        const isVertical = orientation === "vertical" || orientation === "both";
        if ((isHorizontal && key === "ArrowRight") || (isVertical && key === "ArrowDown")) {
            e.preventDefault?.();
            moveFocus(activeIndexRef.current + 1);
        }
        else if ((isHorizontal && key === "ArrowLeft") || (isVertical && key === "ArrowUp")) {
            e.preventDefault?.();
            moveFocus(activeIndexRef.current - 1);
        }
        else if (key === "Home") {
            e.preventDefault?.();
            moveFocus(0);
        }
        else if (key === "End") {
            e.preventDefault?.();
            moveFocus(itemCount - 1);
        }
        else if (key === "Enter" || key === " ") {
            e.preventDefault?.();
            onSelect?.(activeIndexRef.current);
        }
    }, [orientation, itemCount, moveFocus, onSelect]);
    const getItemProps = (0, react_1.useCallback)((index) => {
        const isTarget = index === activeIndex;
        return {
            focusable: true,
            tabIndex: isTarget ? 0 : -1,
            onKeyDown: react_native_1.Platform.OS === "web" ? handleKeyDown : undefined,
            onFocus: () => setActiveIndex(index),
        };
    }, [activeIndex, handleKeyDown]);
    return {
        activeIndex,
        setActiveIndex,
        getItemProps,
        handleKeyDown,
    };
}
