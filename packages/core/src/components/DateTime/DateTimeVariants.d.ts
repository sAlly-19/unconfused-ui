import React from "react";
import { ViewStyle } from "react-native";
import { InputProps } from "../Input";
export type DateInputProps = InputProps;
export declare const DateInput: {
    (props: DateInputProps): React.JSX.Element;
    displayName: string;
};
export type TimeInputProps = InputProps;
export declare const TimeInput: {
    (props: TimeInputProps): React.JSX.Element;
    displayName: string;
};
export type MonthPickerProps = {
    selectedMonth?: number;
    onSelectMonth?: (month: number) => void;
    style?: ViewStyle;
};
export declare const MonthPicker: {
    ({ selectedMonth, onSelectMonth, style }: MonthPickerProps): React.JSX.Element;
    displayName: string;
};
export type YearPickerProps = {
    startYear?: number;
    selectedYear?: number;
    onSelectYear?: (year: number) => void;
    style?: ViewStyle;
};
export declare const YearPicker: {
    ({ startYear, selectedYear, onSelectYear, style }: YearPickerProps): React.JSX.Element;
    displayName: string;
};
export type CalendarProps = {
    month?: string;
    selectedDate?: number;
    onSelectDate?: (day: number) => void;
    events?: number[];
    style?: ViewStyle;
};
export declare const Calendar: {
    ({ month, selectedDate, onSelectDate, events, style, }: CalendarProps): React.JSX.Element;
    displayName: string;
};
export type CalendarRangeProps = {
    startDate?: number;
    endDate?: number;
    onRangeChange?: (start: number, end: number) => void;
    style?: ViewStyle;
};
export declare const CalendarRange: {
    ({ startDate, endDate, onRangeChange, style }: CalendarRangeProps): React.JSX.Element;
    displayName: string;
};
export type TimePickerProps = {
    hour?: number;
    minute?: number;
    is24Hour?: boolean;
    onTimeChange?: (hour: number, minute: number) => void;
    style?: ViewStyle;
};
export declare const TimePicker: {
    ({ hour, minute, onTimeChange, style }: TimePickerProps): React.JSX.Element;
    displayName: string;
};
export type DatePickerProps = {
    value?: string;
    onChange?: (date: string) => void;
    style?: ViewStyle;
};
export declare const DatePicker: {
    ({ value, onChange, style }: DatePickerProps): React.JSX.Element;
    displayName: string;
};
export declare const DateTimePicker: {
    ({ value, onChange, style }: DatePickerProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DateTimeVariants.d.ts.map