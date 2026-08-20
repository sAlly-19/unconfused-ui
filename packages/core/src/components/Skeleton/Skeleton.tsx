import React, { createContext, useContext, useEffect, useRef } from "react";
import { Animated, View, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";

type SkeletonGroupContextValue = {
  loading: boolean;
};

const SkeletonGroupContext = createContext<SkeletonGroupContextValue>({ loading: false });

export function useSkeletonGroup() {
  return useContext(SkeletonGroupContext);
}

export type SkeletonGroupProps = {
  loading?: boolean;
  children: React.ReactNode;
};

export const SkeletonGroup = ({ loading = false, children }: SkeletonGroupProps) => {
  return (
    <SkeletonGroupContext.Provider value={{ loading }}>
      {children}
    </SkeletonGroupContext.Provider>
  );
};

export type SkeletonProps = {
  width?: number | `${number}%` | "100%";
  height?: number;
  radius?: number;
  rounded?: "sm" | "md" | "lg" | "full";
  animated?: boolean;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export const SkeletonBox = ({
  width = "100%",
  height = 20,
  radius,
  rounded,
  animated = true,
  style,
  children,
}: SkeletonProps) => {
  const { semanticColors } = useTheme();
  const { loading } = useSkeletonGroup();
  const shimmerAnim = useRef(new Animated.Value(0.35)).current;

  useEffect(() => {
    if (!animated) return;

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 0.85,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0.35,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [animated, shimmerAnim]);

  if (!loading && children) {
    return <>{children}</>;
  }

  const getBorderRadius = () => {
    if (radius !== undefined) return radius;
    switch (rounded) {
      case "sm":
        return 4;
      case "md":
        return 8;
      case "lg":
        return 12;
      case "full":
        return 9999;
      default:
        return 8;
    }
  };

  const skeletonStyle: ViewStyle = {
    width: width as any,
    height,
    borderRadius: getBorderRadius(),
    backgroundColor: semanticColors.surfaceSubtle,
  };

  return (
    <Animated.View
      style={[
        skeletonStyle,
        animated && { opacity: shimmerAnim },
        style,
      ]}
      accessibilityRole="none"
    />
  );
};

export const Skeleton = Object.assign(SkeletonBox, {
  Group: SkeletonGroup,
});
