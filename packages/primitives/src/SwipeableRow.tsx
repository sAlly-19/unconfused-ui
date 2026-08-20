import React, { useRef } from "react";
import {
  Animated,
  PanResponder,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "@unconfused-ui/theme";

export type SwipeableRowProps = {
  children: React.ReactNode;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
  style?: ViewStyle;
};

/**
 * Universal Swipeable Row Primitive:
 * Supports native touch and pointer gestures to reveal actions or dismiss rows.
 */
export function SwipeableRow({
  children,
  leftAction,
  rightAction,
  onSwipeLeft,
  onSwipeRight,
  threshold = 80,
  style,
}: SwipeableRowProps): React.JSX.Element {
  const { semanticColors } = useTheme();
  const pan = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 10,
      onPanResponderMove: (_, gesture) => {
        pan.setValue(gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx < -threshold && onSwipeLeft) {
          Animated.spring(pan, { toValue: -120, useNativeDriver: true, bounciness: 4 }).start();
          onSwipeLeft();
        } else if (gesture.dx > threshold && onSwipeRight) {
          Animated.spring(pan, { toValue: 120, useNativeDriver: true, bounciness: 4 }).start();
          onSwipeRight();
        } else {
          Animated.spring(pan, { toValue: 0, useNativeDriver: true, bounciness: 6 }).start();
        }
      },
    })
  ).current;

  return (
    <View style={[styles.container, style]}>
      {/* Background action slots */}
      {leftAction && <View style={[styles.action, styles.leftAction]}>{leftAction}</View>}
      {rightAction && <View style={[styles.action, styles.rightAction]}>{rightAction}</View>}

      {/* Foreground Swipeable Content */}
      <Animated.View
        style={[
          styles.content,
          { backgroundColor: semanticColors.surface, transform: [{ translateX: pan }] },
        ]}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 12,
  },
  action: {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  leftAction: {
    left: 0,
    paddingLeft: 16,
  },
  rightAction: {
    right: 0,
    paddingRight: 16,
  },
  content: {
    zIndex: 2,
  },
});

SwipeableRow.displayName = "SwipeableRow";
