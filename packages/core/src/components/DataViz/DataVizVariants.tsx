import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, Center, HStack, Inline, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type ChartDataPoint = {
  label: string;
  value: number;
  color?: string;
};

// 1. BarChart
export type BarChartProps = {
  data: ChartDataPoint[];
  height?: number;
  title?: string;
  style?: ViewStyle;
};

export const BarChart = ({ data, height = 150, title, style }: BarChartProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <Box
      style={[
        {
          padding: 18,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.85),
          borderRadius: 16,
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.08),
        },
        style,
      ]}
    >
      <VStack gap={3}>
        {title && (
          <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ textTransform: "uppercase" }}>
            {title}
          </Text>
        )}

        <Inline align="flex-end" justify="space-around" style={{ height }}>
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * (height - 36);
            const barColor = item.color ?? semanticColors.primary;

            return (
              <Stack key={index} gap={1.5} style={{ alignItems: "center", flex: 1 }}>
                <Text size="xs" color={semanticColors.foregroundSubtle} weight="bold" style={{ fontSize: 10 }}>
                  {item.value}
                </Text>
                <View
                  style={{
                    width: 24,
                    height: Math.max(barHeight, 8),
                    borderRadius: 6,
                    backgroundColor: barColor,
                  }}
                />
                <Text size="xs" color={semanticColors.foregroundMuted}>
                  {item.label}
                </Text>
              </Stack>
            );
          })}
        </Inline>
      </VStack>
    </Box>
  );
};
BarChart.displayName = "BarChart";

export const Chart = BarChart;
export const LineChart = BarChart;
export const AreaChart = BarChart;
export const RadarChart = BarChart;

// 2. Sparkline (Inline mini trend indicator)
export type SparklineProps = {
  values?: number[];
  color?: string;
  trend?: string;
  style?: ViewStyle;
};

export const Sparkline = ({
  values = [12, 18, 15, 24, 28, 34, 42],
  color = "#10B981",
  trend = "+32.4%",
  style,
}: SparklineProps) => {
  const { baseTokens } = useTheme();
  const max = Math.max(...values, 1);
  const resolvedColor = color === "#10B981" ? baseTokens.colors.success[500] : color;

  return (
    <Inline align="center" gap={2} style={style}>
      <Inline align="flex-end" gap={1} style={{ height: 20 }}>
        {values.map((v, i) => (
          <View
            key={i}
            style={{
              width: 4,
              height: Math.max((v / max) * 18, 3),
              borderRadius: 2,
              backgroundColor: resolvedColor,
            }}
          />
        ))}
      </Inline>
      {trend && (
        <Text size="xs" weight="bold" color={resolvedColor}>
          {trend}
        </Text>
      )}
    </Inline>
  );
};
Sparkline.displayName = "Sparkline";

// 3. DonutChart & PieChart
export type DonutChartProps = {
  data: { label: string; value: number; color: string }[];
  centerLabel?: string;
  centerValue?: string;
  size?: number;
  style?: ViewStyle;
};

export const DonutChart = ({
  data,
  centerLabel = "Total Load",
  centerValue = "94%",
  size = 120,
  style,
}: DonutChartProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Box
      style={[
        {
          padding: 18,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.85),
          borderRadius: 16,
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.08),
          alignItems: "center",
        },
        style,
      ]}
    >
      <VStack gap={4} align="center">
        <Center
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 12,
            borderColor: withAlpha(baseTokens.colors.white, 0.08),
            borderTopColor: data[0]?.color ?? semanticColors.primary,
            borderRightColor: data[1]?.color ?? baseTokens.colors.success[500],
            borderBottomColor: data[2]?.color ?? baseTokens.colors.warning[500],
          }}
        >
          <VStack gap={0} align="center">
            <Text size="lg" weight="bold" color={semanticColors.foreground}>
              {centerValue}
            </Text>
            <Text size="xs" color={semanticColors.foregroundMuted} style={{ fontSize: 10 }}>
              {centerLabel}
            </Text>
          </VStack>
        </Center>

        {/* Legend */}
        <Inline gap={3} wrap justify="center">
          {data.map((item, idx) => (
            <Inline key={idx} align="center" gap={1.5}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: item.color }} />
              <Text size="xs" color={semanticColors.foregroundMuted}>
                {item.label} ({item.value}%)
              </Text>
            </Inline>
          ))}
        </Inline>
      </VStack>
    </Box>
  );
};
DonutChart.displayName = "DonutChart";

export const PieChart = DonutChart;

// 4. ProgressChart (Multi-Track progress bars)
export type ProgressChartProps = {
  tracks: { label: string; value: number; color: string }[];
  style?: ViewStyle;
};

export const ProgressChart = ({ tracks, style }: ProgressChartProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Box
      style={[
        {
          padding: 18,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.85),
          borderRadius: 16,
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.08),
        },
        style,
      ]}
    >
      <VStack gap={3}>
        {tracks.map((track, idx) => (
          <VStack key={idx} gap={1}>
            <Inline justify="space-between" align="center">
              <Text size="xs" weight="medium" color={semanticColors.foreground}>
                {track.label}
              </Text>
              <Text size="xs" weight="bold" color={track.color}>
                {track.value}%
              </Text>
            </Inline>
            <Box style={{ width: "100%", height: 6, borderRadius: 3, backgroundColor: withAlpha(baseTokens.colors.white, 0.08), overflow: "hidden" }}>
              <Box style={{ width: `${Math.min(100, track.value)}%`, height: "100%", backgroundColor: track.color }} />
            </Box>
          </VStack>
        ))}
      </VStack>
    </Box>
  );
};
ProgressChart.displayName = "ProgressChart";

// 5. Gauge (Radial score meter)
export type GaugeProps = {
  value: number; // 0 to 100
  label?: string;
  statusText?: string;
  style?: ViewStyle;
};

export const Gauge = ({ value, label = "Health Index", statusText = "Optimal", style }: GaugeProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const color = value > 80 ? baseTokens.colors.success[500] : value > 50 ? baseTokens.colors.warning[500] : baseTokens.colors.danger[500];

  return (
    <Box
      style={[
        {
          padding: 18,
          borderRadius: 16,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.85),
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.08),
          alignItems: "center",
        },
        style,
      ]}
    >
      <VStack gap={1} align="center">
        <Center
          style={{
            width: 90,
            height: 90,
            borderRadius: 45,
            borderWidth: 8,
            borderColor: "rgba(255, 255, 255, 0.08)",
            borderTopColor: color,
            borderRightColor: value > 50 ? color : "rgba(255, 255, 255, 0.08)",
          }}
        >
          <Text size="xl" weight="bold" color={color}>
            {value}%
          </Text>
        </Center>
        <Text size="xs" weight="bold" color={semanticColors.foreground} style={{ marginTop: 4 }}>
          {label}
        </Text>
        <Text size="xs" color={color} weight="semibold">
          {statusText}
        </Text>
      </VStack>
    </Box>
  );
};
Gauge.displayName = "Gauge";
