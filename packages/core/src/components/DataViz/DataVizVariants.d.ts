import React from "react";
import { ViewStyle } from "react-native";
export type ChartDataPoint = {
    label: string;
    value: number;
    color?: string;
};
export type BarChartProps = {
    data: ChartDataPoint[];
    height?: number;
    title?: string;
    style?: ViewStyle;
};
export declare const BarChart: {
    ({ data, height, title, style }: BarChartProps): React.JSX.Element;
    displayName: string;
};
export declare const Chart: {
    ({ data, height, title, style }: BarChartProps): React.JSX.Element;
    displayName: string;
};
export declare const LineChart: {
    ({ data, height, title, style }: BarChartProps): React.JSX.Element;
    displayName: string;
};
export declare const AreaChart: {
    ({ data, height, title, style }: BarChartProps): React.JSX.Element;
    displayName: string;
};
export declare const RadarChart: {
    ({ data, height, title, style }: BarChartProps): React.JSX.Element;
    displayName: string;
};
export type SparklineProps = {
    values?: number[];
    color?: string;
    trend?: string;
    style?: ViewStyle;
};
export declare const Sparkline: {
    ({ values, color, trend, style, }: SparklineProps): React.JSX.Element;
    displayName: string;
};
export type DonutChartProps = {
    data: {
        label: string;
        value: number;
        color: string;
    }[];
    centerLabel?: string;
    centerValue?: string;
    size?: number;
    style?: ViewStyle;
};
export declare const DonutChart: {
    ({ data, centerLabel, centerValue, size, style, }: DonutChartProps): React.JSX.Element;
    displayName: string;
};
export declare const PieChart: {
    ({ data, centerLabel, centerValue, size, style, }: DonutChartProps): React.JSX.Element;
    displayName: string;
};
export type ProgressChartProps = {
    tracks: {
        label: string;
        value: number;
        color: string;
    }[];
    style?: ViewStyle;
};
export declare const ProgressChart: {
    ({ tracks, style }: ProgressChartProps): React.JSX.Element;
    displayName: string;
};
export type GaugeProps = {
    value: number;
    label?: string;
    statusText?: string;
    style?: ViewStyle;
};
export declare const Gauge: {
    ({ value, label, statusText, style }: GaugeProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DataVizVariants.d.ts.map