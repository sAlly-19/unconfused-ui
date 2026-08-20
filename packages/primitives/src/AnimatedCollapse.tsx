import React, { useEffect, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, View, ViewStyle } from "react-native";
import { motion } from "@unconfused-ui/tokens";

export type AnimatedCollapseProps = {
  expanded: boolean;
  children: React.ReactNode;
  preset?: "snappy" | "bouncy" | "gentle";
  style?: ViewStyle;
};

export const AnimatedCollapse: React.FC<AnimatedCollapseProps> = ({
  expanded,
  children,
  preset = "snappy",
  style,
}) => {
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const animatedHeight = useRef(new Animated.Value(expanded ? 1 : 0)).current;

  useEffect(() => {
    const springConfig = motion.spring[preset] ?? motion.spring.snappy;

    Animated.spring(animatedHeight, {
      toValue: expanded ? 1 : 0,
      damping: springConfig.damping,
      stiffness: springConfig.stiffness,
      mass: springConfig.mass,
      useNativeDriver: false,
    }).start();
  }, [expanded, preset, animatedHeight]);

  const onLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    if (height > 0 && contentHeight === null) {
      setContentHeight(height);
    }
  };

  const heightInterpolation = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight ?? 0],
  });

  const opacityInterpolation = animatedHeight.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 0.4, 1],
  });

  return (
    <Animated.View
      style={[
        {
          overflow: "hidden",
          height: contentHeight !== null ? heightInterpolation : undefined,
          opacity: opacityInterpolation,
        },
        style,
      ]}
    >
      <View onLayout={onLayout} style={{ position: contentHeight === null ? "relative" : undefined }}>
        {children}
      </View>
    </Animated.View>
  );
};

AnimatedCollapse.displayName = "AnimatedCollapse";
