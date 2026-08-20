import React from "react";
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
export declare const SvgIcon: React.FC<SvgIconProps>;
//# sourceMappingURL=SvgIcon.d.ts.map