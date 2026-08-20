import { useState, useCallback, useRef } from "react";
import { Platform } from "react-native";

export type RovingFocusOptions = {
  itemCount: number;
  initialIndex?: number;
  orientation?: "horizontal" | "vertical" | "both";
  loop?: boolean;
  onSelect?: (index: number) => void;
};

export type RovingFocusResult = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  getItemProps: (index: number) => {
    focusable: boolean;
    tabIndex: number;
    onKeyDown?: (e: any) => void;
    onFocus: () => void;
  };
  handleKeyDown: (e: any) => void;
};

/**
 * Universal Roving TabIndex / Focus Hook for accessible keyboard navigation
 * Conforms to W3C WAI-ARIA Authoring Practices Guide for Tabs, Menus, RadioGroups.
 */
export function useRovingFocus({
  itemCount,
  initialIndex = 0,
  orientation = "horizontal",
  loop = true,
  onSelect,
}: RovingFocusOptions): RovingFocusResult {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const moveFocus = useCallback(
    (nextIndex: number) => {
      let target = nextIndex;
      if (loop) {
        if (target < 0) target = itemCount - 1;
        if (target >= itemCount) target = 0;
      } else {
        target = Math.max(0, Math.min(itemCount - 1, target));
      }
      setActiveIndex(target);
      onSelect?.(target);
    },
    [itemCount, loop, onSelect]
  );

  const handleKeyDown = useCallback(
    (e: any) => {
      if (itemCount <= 0) return;
      const key = e.key || e.nativeEvent?.key;

      const isHorizontal = orientation === "horizontal" || orientation === "both";
      const isVertical = orientation === "vertical" || orientation === "both";

      if ((isHorizontal && key === "ArrowRight") || (isVertical && key === "ArrowDown")) {
        e.preventDefault?.();
        moveFocus(activeIndexRef.current + 1);
      } else if ((isHorizontal && key === "ArrowLeft") || (isVertical && key === "ArrowUp")) {
        e.preventDefault?.();
        moveFocus(activeIndexRef.current - 1);
      } else if (key === "Home") {
        e.preventDefault?.();
        moveFocus(0);
      } else if (key === "End") {
        e.preventDefault?.();
        moveFocus(itemCount - 1);
      } else if (key === "Enter" || key === " ") {
        e.preventDefault?.();
        onSelect?.(activeIndexRef.current);
      }
    },
    [orientation, itemCount, moveFocus, onSelect]
  );

  const getItemProps = useCallback(
    (index: number) => {
      const isTarget = index === activeIndex;
      return {
        focusable: true,
        tabIndex: isTarget ? 0 : -1,
        onKeyDown: Platform.OS === "web" ? handleKeyDown : undefined,
        onFocus: () => setActiveIndex(index),
      };
    },
    [activeIndex, handleKeyDown]
  );

  return {
    activeIndex,
    setActiveIndex,
    getItemProps,
    handleKeyDown,
  };
}
