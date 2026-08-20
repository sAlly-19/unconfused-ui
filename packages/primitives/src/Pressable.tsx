import React from "react";
import {
  GestureResponderEvent,
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { usePressableState } from "@unconfused-ui/hooks";
import { Slot } from "./Slot";

export type PressableState = {
  pressed: boolean;
  hovered: boolean;
  focused: boolean;
};

export type PressableProps = Omit<RNPressableProps, "style" | "children"> & {
  asChild?: boolean;
  style?: StyleProp<ViewStyle> | ((state: PressableState) => StyleProp<ViewStyle>);
  children?: React.ReactNode | ((state: PressableState) => React.ReactNode);
  disabled?: boolean;
};

export const Pressable = React.forwardRef<View, PressableProps>(
  ({ asChild, style, children, disabled, onPressIn, onPressOut, onFocus, onBlur, ...rest }, ref) => {
    const { isPressed, isHovered, isFocused, pressableProps } = usePressableState({
      disabled,
      onPressIn,
      onPressOut,
      onFocus: onFocus ? () => onFocus({} as any) : null,
      onBlur: onBlur ? () => onBlur({} as any) : null,
    });

    const state: PressableState = {
      pressed: isPressed,
      hovered: isHovered,
      focused: isFocused,
    };

    const resolvedStyle = typeof style === "function" ? style(state) : style;
    const resolvedChildren = typeof children === "function" ? children(state) : children;
    
    const Component = asChild ? Slot : RNPressable;
    const styleProp = asChild 
      ? [resolvedStyle, isPressed && { opacity: 0.8 }] 
      : ({ pressed }: { pressed: boolean }) => [resolvedStyle, pressed && { opacity: 0.8 }];

    return (
      <Component
        ref={ref}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        {...pressableProps}
        {...rest}
        style={styleProp as any}
      >
        {resolvedChildren}
      </Component>
    );
  }
);

Pressable.displayName = "Pressable";
