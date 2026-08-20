import React, { useCallback, useRef, useState } from "react";
import { LayoutChangeEvent, View, ViewProps, ViewStyle } from "react-native";

export type ContainerDimensions = {
  width: number;
  height: number;
};

export type ContainerQueryProps = Omit<ViewProps, "children"> & {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  children:
    | React.ReactNode
    | ((state: { matches: boolean; dimensions: ContainerDimensions }) => React.ReactNode);
  style?: ViewStyle;
};

/**
 * High-performance ContainerQuery primitive that responds to its own bounding box dimensions
 * rather than the full viewport/window width. Uses microtask debouncing to eliminate layout thrashing.
 */
export const ContainerQuery = React.forwardRef<View, ContainerQueryProps>(
  (
    {
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      children,
      style,
      onLayout: propOnLayout,
      ...rest
    },
    ref
  ) => {
    const [dimensions, setDimensions] = useState<ContainerDimensions>({ width: 0, height: 0 });
    const timerRef = useRef<any>(null);

    const handleLayout = useCallback(
      (e: LayoutChangeEvent) => {
        propOnLayout?.(e);
        const { width, height } = e.nativeEvent.layout;

        // Skip redundant updates if dimensions haven't changed by at least 1px
        if (Math.abs(dimensions.width - width) < 1 && Math.abs(dimensions.height - height) < 1) {
          return;
        }

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
          setDimensions({ width, height });
        }, 16); // 1 frame debounce (60fps)
      },
      [dimensions.width, dimensions.height, propOnLayout]
    );

    const matches =
      (minWidth === undefined || dimensions.width >= minWidth) &&
      (maxWidth === undefined || dimensions.width <= maxWidth) &&
      (minHeight === undefined || dimensions.height >= minHeight) &&
      (maxHeight === undefined || dimensions.height <= maxHeight);

    return (
      <View ref={ref} onLayout={handleLayout} style={style} {...rest}>
        {typeof children === "function"
          ? children({ matches, dimensions })
          : matches
          ? children
          : null}
      </View>
    );
  }
);

ContainerQuery.displayName = "ContainerQuery";

/**
 * Hook for component-level container queries.
 */
export function useContainerQuery(options: {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}) {
  const [dimensions, setDimensions] = useState<ContainerDimensions>({ width: 0, height: 0 });
  const timerRef = useRef<any>(null);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setDimensions({ width, height });
    }, 16);
  }, []);

  const matches =
    (options.minWidth === undefined || dimensions.width >= options.minWidth) &&
    (options.maxWidth === undefined || dimensions.width <= options.maxWidth) &&
    (options.minHeight === undefined || dimensions.height >= options.minHeight) &&
    (options.maxHeight === undefined || dimensions.height <= options.maxHeight);

  return {
    matches,
    dimensions,
    onLayout,
  };
}
