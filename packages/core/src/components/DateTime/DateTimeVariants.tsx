import React, { useState } from "react";
import { Modal, View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";
import { Button } from "../Button";
import { Input, InputProps } from "../Input";

// 1. DateInput & TimeInput
export type DateInputProps = InputProps;
export const DateInput = (props: DateInputProps) => (
  <Input placeholder="YYYY-MM-DD" leftIcon={<Text size="xs">📅</Text>} {...props} />
);
DateInput.displayName = "DateInput";

export type TimeInputProps = InputProps;
export const TimeInput = (props: TimeInputProps) => (
  <Input placeholder="HH:MM" leftIcon={<Text size="xs">⏰</Text>} {...props} />
);
TimeInput.displayName = "TimeInput";

// 2. MonthPicker
export type MonthPickerProps = {
  selectedMonth?: number; // 0-11
  onSelectMonth?: (month: number) => void;
  style?: ViewStyle;
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const MonthPicker = ({ selectedMonth = 7, onSelectMonth, style }: MonthPickerProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Box
      style={[
        {
          padding: 16,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.95),
          borderRadius: 16,
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.1),
        },
        style,
      ]}
    >
      <Inline gap={2} wrap style={{ maxWidth: 280 }}>
        {MONTHS.map((month, idx) => {
          const isSelected = selectedMonth === idx;
          return (
            <Pressable
              key={month}
              onPress={() => onSelectMonth?.(idx)}
              style={{
                width: 60,
                height: 38,
                borderRadius: 10,
                backgroundColor: isSelected ? semanticColors.primary : withAlpha(baseTokens.colors.white, 0.05),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                size="xs"
                weight={isSelected ? "bold" : "medium"}
                color={isSelected ? baseTokens.colors.white : semanticColors.foreground}
              >
                {month}
              </Text>
            </Pressable>
          );
        })}
      </Inline>
    </Box>
  );
};
MonthPicker.displayName = "MonthPicker";

// 3. YearPicker
export type YearPickerProps = {
  startYear?: number;
  selectedYear?: number;
  onSelectYear?: (year: number) => void;
  style?: ViewStyle;
};

export const YearPicker = ({ startYear = 2020, selectedYear = 2026, onSelectYear, style }: YearPickerProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const years = Array.from({ length: 12 }, (_, i) => startYear + i);

  return (
    <Box
      style={[
        {
          padding: 16,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.95),
          borderRadius: 16,
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.1),
        },
        style,
      ]}
    >
      <Inline gap={2} wrap style={{ maxWidth: 280 }}>
        {years.map((yr) => {
          const isSelected = selectedYear === yr;
          return (
            <Pressable
              key={yr}
              onPress={() => onSelectYear?.(yr)}
              style={{
                width: 60,
                height: 38,
                borderRadius: 10,
                backgroundColor: isSelected ? semanticColors.primary : withAlpha(baseTokens.colors.white, 0.05),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                size="xs"
                weight={isSelected ? "bold" : "medium"}
                color={isSelected ? baseTokens.colors.white : semanticColors.foreground}
              >
                {yr}
              </Text>
            </Pressable>
          );
        })}
      </Inline>
    </Box>
  );
};
YearPicker.displayName = "YearPicker";

// 4. Calendar
export type CalendarProps = {
  month?: string;
  selectedDate?: number;
  onSelectDate?: (day: number) => void;
  events?: number[];
  style?: ViewStyle;
};

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const Calendar = ({
  month = "August 2026",
  selectedDate = 19,
  onSelectDate,
  events = [14, 19, 24],
  style,
}: CalendarProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Box
      style={[
        {
          padding: 18,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.95),
          borderRadius: 16,
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.1),
          maxWidth: 320,
        },
        style,
      ]}
    >
      <VStack gap={3}>
        {/* Month Header */}
        <Inline justify="space-between" align="center">
          <Text size="sm" weight="bold" color={semanticColors.foreground}>
            {month}
          </Text>
          <Inline gap={2}>
            <Pressable style={{ padding: 4 }}>
              <Text size="xs" color={semanticColors.primary} weight="bold">‹</Text>
            </Pressable>
            <Pressable style={{ padding: 4 }}>
              <Text size="xs" color={semanticColors.primary} weight="bold">›</Text>
            </Pressable>
          </Inline>
        </Inline>

        {/* Weekday Labels */}
        <Inline justify="space-between" style={{ paddingHorizontal: 4 }}>
          {WEEKDAYS.map((wd) => (
            <Box key={wd} style={{ width: 34, alignItems: "center" }}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundSubtle}>
                {wd}
              </Text>
            </Box>
          ))}
        </Inline>

        {/* Days Grid */}
        <Inline gap={2} wrap style={{ width: 284 }}>
          {days.map((day) => {
            const isSelected = selectedDate === day;
            const hasEvent = events.includes(day);

            return (
              <Pressable
                key={day}
                onPress={() => onSelectDate?.(day)}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  backgroundColor: isSelected ? semanticColors.primary : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Text
                  size="xs"
                  weight={isSelected ? "bold" : "medium"}
                  color={isSelected ? baseTokens.colors.white : semanticColors.foreground}
                >
                  {day}
                </Text>
                {hasEvent && !isSelected && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 3,
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: semanticColors.primary,
                    }}
                  />
                )}
              </Pressable>
            );
          })}
        </Inline>
      </VStack>
    </Box>
  );
};
Calendar.displayName = "Calendar";

// 5. CalendarRange (Date range selector)
export type CalendarRangeProps = {
  startDate?: number;
  endDate?: number;
  onRangeChange?: (start: number, end: number) => void;
  style?: ViewStyle;
};

export const CalendarRange = ({ startDate = 10, endDate = 18, onRangeChange, style }: CalendarRangeProps) => {
  const { semanticColors } = useTheme();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Box
      style={[
        {
          padding: 18,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          maxWidth: 320,
        },
        style,
      ]}
    >
      <VStack gap={3}>
        <Inline justify="space-between" align="center">
          <Text size="sm" weight="bold" color={semanticColors.foreground}>
            August 2026 (Range)
          </Text>
          <Text size="xs" color={semanticColors.primary} weight="bold">
            Day {startDate} - Day {endDate}
          </Text>
        </Inline>

        <Inline gap={2} wrap style={{ width: 284 }}>
          {days.map((day) => {
            const isStart = day === startDate;
            const isEnd = day === endDate;
            const inRange = day >= startDate && day <= endDate;

            return (
              <Pressable
                key={day}
                onPress={() => onRangeChange?.(day, day + 4)}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: isStart || isEnd ? 17 : 6,
                  backgroundColor:
                    isStart || isEnd
                      ? semanticColors.primary
                      : inRange
                      ? "rgba(124, 58, 237, 0.2)"
                      : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  size="xs"
                  weight={inRange ? "bold" : "regular"}
                  color={isStart || isEnd ? "#FFF" : inRange ? semanticColors.primary : semanticColors.foreground}
                >
                  {day}
                </Text>
              </Pressable>
            );
          })}
        </Inline>
      </VStack>
    </Box>
  );
};
CalendarRange.displayName = "CalendarRange";

// 6. TimePicker
export type TimePickerProps = {
  hour?: number;
  minute?: number;
  is24Hour?: boolean;
  onTimeChange?: (hour: number, minute: number) => void;
  style?: ViewStyle;
};

export const TimePicker = ({ hour = 14, minute = 30, onTimeChange, style }: TimePickerProps) => {
  const { semanticColors } = useTheme();

  return (
    <Box
      style={[
        {
          padding: 16,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          maxWidth: 240,
        },
        style,
      ]}
    >
      <VStack gap={3} align="center">
        <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ textTransform: "uppercase" }}>
          Select Time
        </Text>

        <Inline align="center" gap={3}>
          <Box
            style={{
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <Text size="xl" weight="bold" color={semanticColors.foreground}>
              {hour.toString().padStart(2, "0")}
            </Text>
          </Box>

          <Text size="xl" weight="bold" color={semanticColors.primary}>
            :
          </Text>

          <Box
            style={{
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <Text size="xl" weight="bold" color={semanticColors.foreground}>
              {minute.toString().padStart(2, "0")}
            </Text>
          </Box>
        </Inline>

        <Inline gap={2}>
          <Button size="xs" variant="ghost" onPress={() => onTimeChange?.((hour + 1) % 24, minute)}>
            +1 Hour
          </Button>
          <Button size="xs" variant="ghost" onPress={() => onTimeChange?.(hour, (minute + 15) % 60)}>
            +15 Min
          </Button>
        </Inline>
      </VStack>
    </Box>
  );
};
TimePicker.displayName = "TimePicker";

// 7. DatePicker & DateTimePicker
export type DatePickerProps = {
  value?: string;
  onChange?: (date: string) => void;
  style?: ViewStyle;
};

export const DatePicker = ({ value = "2026-08-19", onChange, style }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(19);

  return (
    <Box style={style}>
      <Pressable onPress={() => setOpen(true)}>
        <DateInput value={value} editable={false} />
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", alignItems: "center" }}
          onPress={() => setOpen(false)}
        >
          <Pressable onPress={(e) => e.stopPropagation?.()}>
            <Calendar
              selectedDate={selected}
              onSelectDate={(day) => {
                setSelected(day);
                onChange?.(`2026-08-${day.toString().padStart(2, "0")}`);
                setOpen(false);
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </Box>
  );
};
DatePicker.displayName = "DatePicker";

export const DateTimePicker = DatePicker;
