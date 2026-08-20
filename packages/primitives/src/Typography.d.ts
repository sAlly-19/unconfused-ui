import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { TextProps } from "./Text";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingProps = TextProps & {
    level?: HeadingLevel;
    accentBar?: boolean;
    gradient?: boolean;
};
export declare const Heading: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    level?: HeadingLevel;
    accentBar?: boolean;
    gradient?: boolean;
} & React.RefAttributes<any>>;
export type TitleProps = TextProps & {
    variant?: "hero" | "section" | "card";
};
export declare const Title: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    variant?: "hero" | "section" | "card";
} & React.RefAttributes<any>>;
export type SubtitleProps = TextProps & {
    variant?: "subtle" | "muted" | "accent";
};
export declare const Subtitle: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    variant?: "subtle" | "muted" | "accent";
} & React.RefAttributes<any>>;
export type LabelProps = TextProps & {
    required?: boolean;
    optional?: boolean;
    uppercase?: boolean;
};
export declare const Label: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    required?: boolean;
    optional?: boolean;
    uppercase?: boolean;
} & React.RefAttributes<any>>;
export type CaptionProps = TextProps;
export declare const Caption: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & React.RefAttributes<any>>;
export type ParagraphProps = TextProps & {
    lead?: boolean;
    prose?: boolean;
};
export declare const Paragraph: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    lead?: boolean;
    prose?: boolean;
} & React.RefAttributes<any>>;
export type LinkProps = TextProps & {
    href?: string;
    external?: boolean;
    variant?: "underline" | "hover" | "subtle";
    onPress?: () => void;
    asChild?: boolean;
};
export declare const Link: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    href?: string;
    external?: boolean;
    variant?: "underline" | "hover" | "subtle";
    onPress?: () => void;
    asChild?: boolean;
} & React.RefAttributes<any>>;
export type CodeProps = TextProps & {
    block?: boolean;
};
export declare const Code: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    block?: boolean;
} & React.RefAttributes<any>>;
export type BlockquoteProps = {
    author?: string;
    cite?: string;
    variant?: "primary" | "subtle" | "accent";
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const Blockquote: {
    ({ author, cite, variant, style, children, }: BlockquoteProps): React.JSX.Element;
    displayName: string;
};
export type TruncatedTextProps = TextProps & {
    lines?: number;
    expandable?: boolean;
};
export declare const TruncatedText: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    lines?: number;
    expandable?: boolean;
} & React.RefAttributes<any>>;
export type GradientTextVariant = "violet" | "cyan" | "emerald" | "amber";
export type GradientTextProps = TextProps & {
    variant?: GradientTextVariant;
};
export declare const GradientText: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    size?: keyof import("@unconfused-ui/tokens").FontSizes | number;
    weight?: keyof import("@unconfused-ui/tokens").FontWeights;
    lineHeight?: keyof import("@unconfused-ui/tokens").LineHeights | number;
    leading?: import("./Text").LeadingScale;
    color?: string;
    align?: TextStyle["textAlign"];
    transform?: TextStyle["textTransform"];
    decoration?: TextStyle["textDecorationLine"];
    italic?: boolean;
    tracking?: import("./Text").TrackingScale | number;
    muted?: boolean;
    contrast?: boolean;
    fluid?: boolean | [number, number];
    children?: React.ReactNode;
} & {
    variant?: GradientTextVariant;
} & React.RefAttributes<any>>;
//# sourceMappingURL=Typography.d.ts.map