import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";

export type AnimationType =
  | "fade"
  | "spring"
  | "scale"
  | "slide-up"
  | "slide-down"
  | "bounce"
  | "glow";

export type AnimatedBoxProps = {
  isAnimated?: boolean;
  animationType?: AnimationType;
  delay?: number;
  duration?: number;
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
};

/**
 * Universal AnimatedBox primitive enabling seamless physical animations across UI components.
 */
export const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  isAnimated = true,
  animationType = "fade",
  delay = 0,
  duration = 300,
  style,
  children,
}) => {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isAnimated) {
      animValue.setValue(1);
      return;
    }

    animValue.setValue(0);

    const timingConfig = {
      toValue: 1,
      duration,
      useNativeDriver: true,
    };

    let animation: Animated.CompositeAnimation;

    switch (animationType) {
      case "spring":
      case "bounce":
        animation = Animated.spring(animValue, {
          toValue: 1,
          damping: animationType === "bounce" ? 8 : 15,
          stiffness: 200,
          useNativeDriver: true,
        });
        break;
      case "glow":
        animation = Animated.loop(
          Animated.sequence([
            Animated.timing(animValue, { toValue: 1, duration: 800, useNativeDriver: true }),
            Animated.timing(animValue, { toValue: 0.4, duration: 800, useNativeDriver: true }),
          ])
        );
        break;
      case "fade":
      case "scale":
      case "slide-up":
      case "slide-down":
      default:
        animation = Animated.timing(animValue, timingConfig);
        break;
    }

    if (delay > 0) {
      const timer = setTimeout(() => animation.start(), delay);
      return () => clearTimeout(timer);
    } else {
      animation.start();
    }

    return () => {
      animation.stop();
    };
  }, [isAnimated, animationType, delay, duration, animValue]);

  if (!isAnimated) {
    return <Animated.View style={style}>{children}</Animated.View>;
  }

  const getTransform = () => {
    switch (animationType) {
      case "scale":
        return [{ scale: animValue.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] }) }];
      case "spring":
      case "bounce":
        return [{ scale: animValue.interpolate({ inputRange: [0, 1], outputRange: [0.92, 1] }) }];
      case "slide-up":
        return [{ translateY: animValue.interpolate({ inputRange: [0, 1], outputRange: [16, 0] }) }];
      case "slide-down":
        return [{ translateY: animValue.interpolate({ inputRange: [0, 1], outputRange: [-16, 0] }) }];
      default:
        return undefined;
    }
  };

  const getOpacity = () => {
    switch (animationType) {
      case "glow":
        return animValue;
      case "fade":
      case "scale":
      case "spring":
      case "slide-up":
      case "slide-down":
      case "bounce":
      default:
        return animValue.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
    }
  };

  return (
    <Animated.View
      style={[
        {
          opacity: getOpacity(),
          transform: getTransform(),
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

AnimatedBox.displayName = "AnimatedBox";
