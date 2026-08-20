import React, { useState, useCallback } from "react";
import {
  RefreshControl,
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useTheme } from "@unconfused-ui/theme";

export type ScrollViewProps = RNScrollViewProps & {
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  gap?: number;
  hideIndicator?: boolean;
  onPullToRefresh?: () => Promise<void> | void;
  refreshing?: boolean;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
  children?: React.ReactNode;
};

/**
 * Universal ScrollView primitive with theme token support, elastic pull-to-refresh
 * and simplified scroll indicator controls.
 */
export const ScrollView = React.forwardRef<RNScrollView, ScrollViewProps>(
  (
    {
      padding,
      paddingHorizontal,
      paddingVertical,
      gap,
      hideIndicator = false,
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator,
      onPullToRefresh,
      refreshing: propRefreshing,
      contentContainerStyle,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { baseTokens, semanticColors } = useTheme();
    const [localRefreshing, setLocalRefreshing] = useState(false);

    const handleRefresh = useCallback(async () => {
      if (!onPullToRefresh) return;
      setLocalRefreshing(true);
      try {
        await onPullToRefresh();
      } finally {
        setLocalRefreshing(false);
      }
    }, [onPullToRefresh]);

    const isRefreshing = propRefreshing !== undefined ? propRefreshing : localRefreshing;

    const resolvedContentStyle: ViewStyle = {
      padding: padding !== undefined ? baseTokens.spacing[padding as keyof typeof baseTokens.spacing] ?? padding : undefined,
      paddingHorizontal:
        paddingHorizontal !== undefined
          ? baseTokens.spacing[paddingHorizontal as keyof typeof baseTokens.spacing] ?? paddingHorizontal
          : undefined,
      paddingVertical:
        paddingVertical !== undefined
          ? baseTokens.spacing[paddingVertical as keyof typeof baseTokens.spacing] ?? paddingVertical
          : undefined,
      gap: gap !== undefined ? baseTokens.spacing[gap as keyof typeof baseTokens.spacing] ?? gap : undefined,
    };

    const refreshControl = onPullToRefresh ? (
      <RefreshControl
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        tintColor={semanticColors.primary}
        colors={[semanticColors.primary]}
      />
    ) : undefined;

    return (
      <RNScrollView
        ref={ref}
        showsHorizontalScrollIndicator={hideIndicator ? false : showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={hideIndicator ? false : showsVerticalScrollIndicator}
        refreshControl={refreshControl}
        contentContainerStyle={[resolvedContentStyle, contentContainerStyle]}
        style={style}
        {...rest}
      >
        {children}
      </RNScrollView>
    );
  }
);

ScrollView.displayName = "ScrollView";
