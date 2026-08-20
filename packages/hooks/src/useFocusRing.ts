import { useState, useEffect, useCallback } from "react";
import { Platform } from "react-native";
import { useTheme } from "@unconfused-ui/theme";

let isKeyboardNavigation = false;

if (typeof window !== "undefined") {
  window.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Tab" || e.key.startsWith("Arrow")) {
        isKeyboardNavigation = true;
      }
    },
    true
  );
  window.addEventListener(
    "pointerdown",
    () => {
      isKeyboardNavigation = false;
    },
    true
  );
}

export type FocusRingOptions = {
  offset?: number;
  width?: number;
};

export type FocusRingResult = {
  isFocused: boolean;
  isFocusVisible: boolean;
  focusProps: {
    onFocus: () => void;
    onBlur: () => void;
  };
  focusRingStyle: object;
};

/**
 * Universal Focus Ring Hook providing W3C-compliant double halo focus indicators for keyboard navigation.
 */
export function useFocusRing(options: FocusRingOptions = {}): FocusRingResult {
  const { semanticColors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
    if (Platform.OS === "web") {
      setIsFocusVisible(isKeyboardNavigation);
    } else {
      setIsFocusVisible(true);
    }
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
    setIsFocusVisible(false);
  }, []);

  const focusRingStyle = isFocusVisible
    ? {
        borderWidth: 2,
        borderColor: semanticColors.primary,
        shadowColor: semanticColors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 4,
      }
    : {};

  return {
    isFocused,
    isFocusVisible,
    focusProps: {
      onFocus,
      onBlur,
    },
    focusRingStyle,
  };
}
