import React from "react";
import { Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native";
import { FontSizes, FontWeights, LineHeights } from "@unconfused-ui/tokens";
export type TrackingScale = "tight" | "normal" | "wide" | "widest";
export type LeadingScale = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
export type TextProps = RNTextProps & {
    size?: keyof FontSizes | number;
    weight?: keyof FontWeights;
    lineHeight?: keyof LineHeights | number;
    leading?: LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
};
export declare const Text: React.ForwardRefExoticComponent<RNTextProps & {
    size?: keyof FontSizes | number;
    weight?: keyof FontWeights;
    lineHeight?: keyof LineHeights | number;
    leading?: LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & React.RefAttributes<RNText>>;
//# sourceMappingURL=Text.d.ts.map