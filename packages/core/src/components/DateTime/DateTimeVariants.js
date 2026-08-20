"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimePicker = exports.DatePicker = exports.TimePicker = exports.CalendarRange = exports.Calendar = exports.YearPicker = exports.MonthPicker = exports.TimeInput = exports.DateInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Button_1 = require("../Button");
const Input_1 = require("../Input");
const DateInput = (props) => ((0, jsx_runtime_1.jsx)(Input_1.Input, { placeholder: "YYYY-MM-DD", leftIcon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", children: "\uD83D\uDCC5" }), ...props }));
exports.DateInput = DateInput;
exports.DateInput.displayName = "DateInput";
const TimeInput = (props) => ((0, jsx_runtime_1.jsx)(Input_1.Input, { placeholder: "HH:MM", leftIcon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", children: "\u23F0" }), ...props }));
exports.TimeInput = TimeInput;
exports.TimeInput.displayName = "TimeInput";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MonthPicker = ({ selectedMonth = 7, onSelectMonth, style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 16,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.95),
                borderRadius: 16,
                borderWidth: 1,
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, wrap: true, style: { maxWidth: 280 }, children: MONTHS.map((month, idx) => {
                const isSelected = selectedMonth === idx;
                return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => onSelectMonth?.(idx), style: {
                        width: 60,
                        height: 38,
                        borderRadius: 10,
                        backgroundColor: isSelected ? semanticColors.primary : (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.05),
                        alignItems: "center",
                        justifyContent: "center",
                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isSelected ? "bold" : "medium", color: isSelected ? baseTokens.colors.white : semanticColors.foreground, children: month }) }, month));
            }) }) }));
};
exports.MonthPicker = MonthPicker;
exports.MonthPicker.displayName = "MonthPicker";
const YearPicker = ({ startYear = 2020, selectedYear = 2026, onSelectYear, style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const years = Array.from({ length: 12 }, (_, i) => startYear + i);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 16,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.95),
                borderRadius: 16,
                borderWidth: 1,
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, wrap: true, style: { maxWidth: 280 }, children: years.map((yr) => {
                const isSelected = selectedYear === yr;
                return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => onSelectYear?.(yr), style: {
                        width: 60,
                        height: 38,
                        borderRadius: 10,
                        backgroundColor: isSelected ? semanticColors.primary : (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.05),
                        alignItems: "center",
                        justifyContent: "center",
                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isSelected ? "bold" : "medium", color: isSelected ? baseTokens.colors.white : semanticColors.foreground, children: yr }) }, yr));
            }) }) }));
};
exports.YearPicker = YearPicker;
exports.YearPicker.displayName = "YearPicker";
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const Calendar = ({ month = "August 2026", selectedDate = 19, onSelectDate, events = [14, 19, 24], style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 18,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.95),
                borderRadius: 16,
                borderWidth: 1,
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                maxWidth: 320,
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: month }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: { padding: 4 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, weight: "bold", children: "\u2039" }) }), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: { padding: 4 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, weight: "bold", children: "\u203A" }) })] })] }), (0, jsx_runtime_1.jsx)(primitives_1.Inline, { justify: "space-between", style: { paddingHorizontal: 4 }, children: WEEKDAYS.map((wd) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { width: 34, alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundSubtle, children: wd }) }, wd))) }), (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, wrap: true, style: { width: 284 }, children: days.map((day) => {
                        const isSelected = selectedDate === day;
                        const hasEvent = events.includes(day);
                        return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => onSelectDate?.(day), style: {
                                width: 34,
                                height: 34,
                                borderRadius: 17,
                                backgroundColor: isSelected ? semanticColors.primary : "transparent",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                            }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isSelected ? "bold" : "medium", color: isSelected ? baseTokens.colors.white : semanticColors.foreground, children: day }), hasEvent && !isSelected && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                        position: "absolute",
                                        bottom: 3,
                                        width: 4,
                                        height: 4,
                                        borderRadius: 2,
                                        backgroundColor: semanticColors.primary,
                                    } }))] }, day));
                    }) })] }) }));
};
exports.Calendar = Calendar;
exports.Calendar.displayName = "Calendar";
const CalendarRange = ({ startDate = 10, endDate = 18, onRangeChange, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 18,
                backgroundColor: "rgba(16, 18, 30, 0.95)",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                maxWidth: 320,
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: "August 2026 (Range)" }), (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", color: semanticColors.primary, weight: "bold", children: ["Day ", startDate, " - Day ", endDate] })] }), (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, wrap: true, style: { width: 284 }, children: days.map((day) => {
                        const isStart = day === startDate;
                        const isEnd = day === endDate;
                        const inRange = day >= startDate && day <= endDate;
                        return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => onRangeChange?.(day, day + 4), style: {
                                width: 34,
                                height: 34,
                                borderRadius: isStart || isEnd ? 17 : 6,
                                backgroundColor: isStart || isEnd
                                    ? semanticColors.primary
                                    : inRange
                                        ? "rgba(124, 58, 237, 0.2)"
                                        : "transparent",
                                alignItems: "center",
                                justifyContent: "center",
                            }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: inRange ? "bold" : "regular", color: isStart || isEnd ? "#FFF" : inRange ? semanticColors.primary : semanticColors.foreground, children: day }) }, day));
                    }) })] }) }));
};
exports.CalendarRange = CalendarRange;
exports.CalendarRange.displayName = "CalendarRange";
const TimePicker = ({ hour = 14, minute = 30, onTimeChange, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 16,
                backgroundColor: "rgba(16, 18, 30, 0.95)",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                maxWidth: 240,
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundMuted, style: { textTransform: "uppercase" }, children: "Select Time" }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                paddingHorizontal: 14,
                                paddingVertical: 10,
                                borderRadius: 10,
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                            }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xl", weight: "bold", color: semanticColors.foreground, children: hour.toString().padStart(2, "0") }) }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xl", weight: "bold", color: semanticColors.primary, children: ":" }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                paddingHorizontal: 14,
                                paddingVertical: 10,
                                borderRadius: 10,
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                            }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xl", weight: "bold", color: semanticColors.foreground, children: minute.toString().padStart(2, "0") }) })] }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 2, children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { size: "xs", variant: "ghost", onPress: () => onTimeChange?.((hour + 1) % 24, minute), children: "+1 Hour" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { size: "xs", variant: "ghost", onPress: () => onTimeChange?.(hour, (minute + 15) % 60), children: "+15 Min" })] })] }) }));
};
exports.TimePicker = TimePicker;
exports.TimePicker.displayName = "TimePicker";
const DatePicker = ({ value = "2026-08-19", onChange, style }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [selected, setSelected] = (0, react_1.useState)(19);
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: style, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setOpen(true), children: (0, jsx_runtime_1.jsx)(exports.DateInput, { value: value, editable: false }) }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", alignItems: "center" }, onPress: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: (e) => e.stopPropagation?.(), children: (0, jsx_runtime_1.jsx)(exports.Calendar, { selectedDate: selected, onSelectDate: (day) => {
                                setSelected(day);
                                onChange?.(`2026-08-${day.toString().padStart(2, "0")}`);
                                setOpen(false);
                            } }) }) }) })] }));
};
exports.DatePicker = DatePicker;
exports.DatePicker.displayName = "DatePicker";
exports.DateTimePicker = exports.DatePicker;
