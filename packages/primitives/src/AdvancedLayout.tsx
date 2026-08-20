import React from "react";
import { ViewStyle } from "react-native";
import { Box, BoxProps } from "./Box";
import { Inline, InlineProps } from "./Inline";

export type WrapProps = InlineProps;
export const Wrap = (props: WrapProps): React.JSX.Element => <Inline wrap {...props} />;
Wrap.displayName = "Wrap";

export type FlowProps = InlineProps;
export const Flow = (props: FlowProps): React.JSX.Element => <Inline wrap {...props} />;
Flow.displayName = "Flow";

export type MasonryProps = {
  columns?: number;
  gap?: number;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Masonry = ({ columns = 2, gap = 12, style, children }: MasonryProps): React.JSX.Element => (
  <Inline gap={gap} wrap style={style}>
    {React.Children.map(children, (child) => (
      <Box style={{ width: `${100 / columns - 2}%` }}>{child}</Box>
    ))}
  </Inline>
);
Masonry.displayName = "Masonry";

export type OverlayProps = BoxProps;
export const Overlay = React.forwardRef<any, OverlayProps>(({ style, children, ...rest }, ref) => {
  const overlayStyle: ViewStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  };

  return (
    <Box ref={ref} style={[overlayStyle, style]} {...rest}>
      {children}
    </Box>
  );
});
Overlay.displayName = "Overlay";

export const Layer = Overlay;
