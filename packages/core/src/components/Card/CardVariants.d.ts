import React from "react";
import { ViewStyle } from "react-native";
import { SurfaceProps } from "@unconfused-ui/primitives";
export * from "./Card";
export declare const CardBody: {
    ({ style, children }: {
        style?: ViewStyle;
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export type PanelProps = {
    title?: string;
    subtitle?: string;
    headerAction?: React.ReactNode;
    variant?: "glass" | "bordered" | "default";
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const Panel: {
    ({ title, subtitle, headerAction, variant, style, children, }: PanelProps): React.JSX.Element;
    displayName: string;
};
export type PaperProps = SurfaceProps & {
    style?: ViewStyle;
};
export declare const Paper: {
    (props: PaperProps): React.JSX.Element;
    displayName: string;
};
export type TileProps = {
    title: string;
    value: string | number;
    subtitle?: string;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    trend?: string;
    style?: ViewStyle;
};
export declare const Tile: {
    ({ title, value, subtitle, icon, badge, trend, style }: TileProps): React.JSX.Element;
    displayName: string;
};
export declare const StatTile: {
    ({ title, value, subtitle, icon, badge, trend, style }: TileProps): React.JSX.Element;
    displayName: string;
};
export type StatTileProps = TileProps;
export type FeatureCardProps = {
    title: string;
    description: string;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    ctaLabel?: string;
    onCtaPress?: () => void;
    style?: ViewStyle;
};
export declare const FeatureCard: {
    ({ title, description, icon, badge, ctaLabel, onCtaPress, style, }: FeatureCardProps): React.JSX.Element;
    displayName: string;
};
export type ActionCardProps = {
    title: string;
    description: string;
    icon?: React.ReactNode;
    actionLabel?: string;
    onAction?: () => void;
    badge?: React.ReactNode;
    style?: ViewStyle;
};
export declare const ActionCard: {
    ({ title, description, icon, actionLabel, onAction, badge, style, }: ActionCardProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CardVariants.d.ts.map