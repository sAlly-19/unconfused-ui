import React, { useState } from "react";
import {
  PanResponder,
  RefreshControl as RNRefreshControl,
  RefreshControlProps as RNRefreshControlProps,
  View,
  ViewStyle,
} from "react-native";
import { Box, Center, HStack, Inline, Pressable, PressableProps, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

// 1. Touchable & Pressable
export const Touchable = (props: PressableProps): React.JSX.Element => <Pressable {...props} />;
Touchable.displayName = "Touchable";

// 2. Swipeable & SwipeActions (Swipe revealing actions)
export type SwipeableProps = {
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
  children: React.ReactNode;
  style?: ViewStyle;
};

export const Swipeable = ({ leftActions, rightActions, children, style }: SwipeableProps) => {
  const [offset, setOffset] = useState(0);

  return (
    <Box
      style={[
        {
          borderRadius: 14,
          overflow: "hidden",
          backgroundColor: "rgba(16, 18, 30, 0.85)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.08)",
          position: "relative",
        },
        style,
      ]}
    >
      {/* Background Actions */}
      <Inline justify="space-between" align="center" style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, paddingHorizontal: 12 }}>
        <Box>{leftActions}</Box>
        <Box>{rightActions}</Box>
      </Inline>

      {/* Foreground Content */}
      <Box
        style={{
          transform: [{ translateX: offset }],
          backgroundColor: "rgba(20, 24, 40, 0.98)",
          padding: 16,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
Swipeable.displayName = "Swipeable";

export const SwipeActions = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Inline gap={2} style={style}>
    {children}
  </Inline>
);
SwipeActions.displayName = "SwipeActions";

// 3. LongPress (Hold to activate)
export type LongPressProps = {
  onLongPress?: () => void;
  delayLongPress?: number;
  children: React.ReactNode;
  style?: ViewStyle;
};

export const LongPress = ({ onLongPress, delayLongPress = 500, children, style }: LongPressProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}
      style={[
        {
          opacity: pressed ? 0.75 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};
LongPress.displayName = "LongPress";

// 4. DoubleTap
export type DoubleTapProps = {
  onDoubleTap?: () => void;
  delay?: number;
  children: React.ReactNode;
  style?: ViewStyle;
};

export const DoubleTap = ({ onDoubleTap, delay = 300, children, style }: DoubleTapProps) => {
  const [lastTap, setLastTap] = useState(0);

  const handlePress = () => {
    const now = Date.now();
    if (now - lastTap < delay) {
      onDoubleTap?.();
      setLastTap(0);
    } else {
      setLastTap(now);
    }
  };

  return (
    <Pressable onPress={handlePress} style={style}>
      {children}
    </Pressable>
  );
};
DoubleTap.displayName = "DoubleTap";

// 5. Draggable & Droppable (Pan responder)
export type DraggableProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const Draggable = ({ children, style }: DraggableProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <Box
      style={[
        {
          transform: [{ translateX: position.x }, { translateY: position.y }],
        },
        style,
      ]}
    >
      {children}
    </Box>
  );
};
Draggable.displayName = "Draggable";

export const Droppable = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Box
    style={[
      {
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "rgba(124, 58, 237, 0.4)",
        borderRadius: 16,
        padding: 20,
        backgroundColor: "rgba(124, 58, 237, 0.05)",
        alignItems: "center",
        justifyContent: "center",
      },
      style,
    ]}
  >
    {children}
  </Box>
);
Droppable.displayName = "Droppable";

// 6. Resizable, PanGesture, PinchZoom
export const Resizable = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Box style={[{ borderWidth: 1, borderColor: "rgba(255,255,255,0.1)", borderRadius: 14, padding: 14 }, style]}>
    {children}
  </Box>
);
Resizable.displayName = "Resizable";

export const PanGesture = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Box style={style}>{children}</Box>
);
PanGesture.displayName = "PanGesture";

export const PinchZoom = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <Box style={style}>{children}</Box>
);
PinchZoom.displayName = "PinchZoom";

// 7. PullToRefresh (RN standard RefreshControl)
export type PullToRefreshProps = RNRefreshControlProps;

export const PullToRefresh = (props: PullToRefreshProps): React.JSX.Element => {
  const { semanticColors } = useTheme();
  return <RNRefreshControl tintColor={semanticColors.primary} colors={[semanticColors.primary]} {...props} />;
};
PullToRefresh.displayName = "PullToRefresh";
