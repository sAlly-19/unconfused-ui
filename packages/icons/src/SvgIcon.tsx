import React from "react";
import { Platform, View } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { IconProps } from "./types";

export type SvgPathDefinition = {
  d?: string;
  cx?: number;
  cy?: number;
  r?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rx?: number;
  ry?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  points?: string;
  type?: "path" | "circle" | "rect" | "line" | "polyline" | "polygon";
};

export type SvgIconProps = IconProps & {
  paths: SvgPathDefinition[];
  viewBox?: string;
};

export const SvgIcon: React.FC<SvgIconProps> = ({
  paths,
  size = 24,
  color,
  strokeWidth = 2,
  fill = "none",
  viewBox = "0 0 24 24",
  style,
  accessibilityLabel,
}) => {
  const { semanticColors } = useTheme();
  const strokeColor = color ?? semanticColors?.foreground ?? "#FFFFFF";
  const numSize = typeof size === "number" ? size : parseInt(String(size), 10) || 24;

  if (Platform.OS === "web") {
    const children = paths.map((p, idx) => {
      const type = p.type ?? "path";
      if (type === "circle") {
        return React.createElement("circle", {
          key: idx,
          cx: p.cx,
          cy: p.cy,
          r: p.r,
        });
      }
      if (type === "rect") {
        return React.createElement("rect", {
          key: idx,
          x: p.x,
          y: p.y,
          width: p.width,
          height: p.height,
          rx: p.rx ?? 0,
          ry: p.ry ?? 0,
        });
      }
      if (type === "line") {
        return React.createElement("line", {
          key: idx,
          x1: p.x1,
          y1: p.y1,
          x2: p.x2,
          y2: p.y2,
        });
      }
      if (type === "polyline") {
        return React.createElement("polyline", {
          key: idx,
          points: p.points,
        });
      }
      if (type === "polygon") {
        return React.createElement("polygon", {
          key: idx,
          points: p.points,
        });
      }
      return React.createElement("path", {
        key: idx,
        d: p.d,
      });
    });

    return React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox,
        width: numSize,
        height: numSize,
        fill,
        stroke: strokeColor,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-label": accessibilityLabel,
        style: {
          display: "inline-block",
          verticalAlign: "middle",
          flexShrink: 0,
          width: numSize,
          height: numSize,
          ...(style as any),
        },
      },
      ...children
    );
  }

  // Native React Native fallback container
  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
      style={[{ width: numSize, height: numSize, alignItems: "center", justifyContent: "center" }, style]}
    />
  );
};

SvgIcon.displayName = "SvgIcon";
