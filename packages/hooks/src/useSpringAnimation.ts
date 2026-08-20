import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { motion } from "@unconfused-ui/tokens";

export type SpringPreset = "snappy" | "bouncy" | "gentle";

export type UseSpringAnimationOptions = {
  toValue: number;
  initialValue?: number;
  preset?: SpringPreset;
  useNativeDriver?: boolean;
  onFinished?: () => void;
};

/**
 * Hook to animate values using Unconfused UI physical spring tokens.
 */
export function useSpringAnimation({
  toValue,
  initialValue = 0,
  preset = "snappy",
  useNativeDriver = true,
  onFinished,
}: UseSpringAnimationOptions): Animated.Value {
  const animatedValue = useRef(new Animated.Value(initialValue)).current;

  useEffect(() => {
    const springConfig = motion.spring[preset] ?? motion.spring.snappy;

    const anim = Animated.spring(animatedValue, {
      toValue,
      damping: springConfig.damping,
      stiffness: springConfig.stiffness,
      mass: springConfig.mass,
      useNativeDriver,
    });

    anim.start(() => {
      onFinished?.();
    });

    return () => {
      anim.stop();
    };
  }, [toValue, preset, useNativeDriver, animatedValue, onFinished]);

  return animatedValue;
}
