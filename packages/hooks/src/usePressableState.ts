import { useCallback, useState } from "react";
import { GestureResponderEvent } from "react-native";

export type UsePressableStateOptions = {
  onPressIn?: ((event: GestureResponderEvent) => void) | null;
  onPressOut?: ((event: GestureResponderEvent) => void) | null;
  onHoverIn?: (() => void) | null;
  onHoverOut?: (() => void) | null;
  onFocus?: (() => void) | null;
  onBlur?: (() => void) | null;
  disabled?: boolean;
};

export function usePressableState(options: UsePressableStateOptions = {}) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handlePressIn = useCallback(
    (e: GestureResponderEvent) => {
      if (options.disabled) return;
      setIsPressed(true);
      options.onPressIn?.(e);
    },
    [options]
  );

  const handlePressOut = useCallback(
    (e: GestureResponderEvent) => {
      if (options.disabled) return;
      setIsPressed(false);
      options.onPressOut?.(e);
    },
    [options]
  );

  const handleHoverIn = useCallback(() => {
    if (options.disabled) return;
    setIsHovered(true);
    options.onHoverIn?.();
  }, [options]);

  const handleHoverOut = useCallback(() => {
    if (options.disabled) return;
    setIsHovered(false);
    options.onHoverOut?.();
  }, [options]);

  const handleFocus = useCallback(() => {
    if (options.disabled) return;
    setIsFocused(true);
    options.onFocus?.();
  }, [options]);

  const handleBlur = useCallback(() => {
    if (options.disabled) return;
    setIsFocused(false);
    options.onBlur?.();
  }, [options]);

  return {
    isPressed,
    isHovered,
    isFocused,
    pressableProps: {
      onPressIn: handlePressIn,
      onPressOut: handlePressOut,
      onHoverIn: handleHoverIn,
      onHoverOut: handleHoverOut,
      onFocus: handleFocus,
      onBlur: handleBlur,
    },
  };
}
