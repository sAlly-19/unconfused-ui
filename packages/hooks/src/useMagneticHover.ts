import { useState, useCallback, useRef } from "react";
import { Platform, ViewStyle } from "react-native";

export type MagneticOptions = {
  strength?: number; // 0 to 1, default 0.35
  maxDistance?: number; // max px shift, default 15
};

export type MagneticResult = {
  magneticStyle: ViewStyle;
  onPointerMove?: (e: any) => void;
  onPointerLeave?: () => void;
};

/**
 * useMagneticHover Hook:
 * Applies a smooth physical magnetic attraction towards the pointer on Web / Desktop.
 */
export function useMagneticHover(options: MagneticOptions = {}): MagneticResult {
  const { strength = 0.35, maxDistance = 12 } = options;
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<{ x: number; y: number; width: number; height: number } | null>(null);

  const onPointerMove = useCallback(
    (e: any) => {
      if (Platform.OS !== "web") return;
      const target = e.currentTarget || e.target;
      if (!target || !target.getBoundingClientRect) return;

      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
      const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

      setOffset({ x: clampedX, y: clampedY });
    },
    [strength, maxDistance]
  );

  const onPointerLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  const magneticStyle: ViewStyle = {
    transform: [{ translateX: offset.x }, { translateY: offset.y }],
  };

  return {
    magneticStyle,
    onPointerMove: Platform.OS === "web" ? onPointerMove : undefined,
    onPointerLeave: Platform.OS === "web" ? onPointerLeave : undefined,
  };
}
