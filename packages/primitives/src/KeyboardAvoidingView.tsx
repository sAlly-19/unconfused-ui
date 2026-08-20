import React from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  Platform,
  ViewStyle,
} from "react-native";

export type KeyboardAvoidingViewProps = RNKeyboardAvoidingViewProps;

export const KeyboardAvoidingView = React.forwardRef<RNKeyboardAvoidingView, KeyboardAvoidingViewProps>(
  ({ behavior, keyboardVerticalOffset = 0, style, children, ...rest }, ref) => {
    const defaultBehavior = Platform.OS === "ios" ? "padding" : undefined;

    return (
      <RNKeyboardAvoidingView
        ref={ref}
        behavior={behavior ?? defaultBehavior}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={[{ flex: 1 }, style]}
        {...rest}
      >
        {children}
      </RNKeyboardAvoidingView>
    );
  }
);

KeyboardAvoidingView.displayName = "KeyboardAvoidingView";
