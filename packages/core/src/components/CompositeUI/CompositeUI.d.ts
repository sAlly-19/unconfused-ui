import React from "react";
import { View, ViewStyle } from "react-native";
export type LoginFormProps = {
    onLogin?: (data: {
        email: string;
        pass: string;
    }) => void;
    style?: ViewStyle;
};
export declare const LoginForm: {
    ({ onLogin, style }: LoginFormProps): React.JSX.Element;
    displayName: string;
};
export declare const SearchBar: {
    ({ placeholder, clearable, leftIcon, ...rest }: import("../Input").SearchInputProps): React.JSX.Element;
    displayName: string;
};
export declare const FilterBar: {
    ({ placeholder, clearable, leftIcon, ...rest }: import("../Input").SearchInputProps): React.JSX.Element;
    displayName: string;
};
export declare const FilterSheet: React.ForwardRefExoticComponent<import("../Card").CardProps & React.RefAttributes<View>> & {
    Header: {
        ({ style, children }: {
            style?: ViewStyle;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: any;
        }): React.JSX.Element;
        displayName: string;
    };
    Description: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: any;
        }): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ style, children }: {
            style?: ViewStyle;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ style, children }: {
            style?: ViewStyle;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
};
export type DateRangePickerProps = {
    style?: ViewStyle;
};
export declare const DateRangePicker: {
    ({ style }: DateRangePickerProps): React.JSX.Element;
    displayName: string;
};
export type FileUploaderProps = {
    label?: string;
    description?: string;
    onUpload?: () => void;
    style?: ViewStyle;
};
export declare const FileUploader: {
    ({ label, description, onUpload, style, }: FileUploaderProps): React.JSX.Element;
    displayName: string;
};
export declare const ImageUploader: {
    ({ label, description, onUpload, style, }: FileUploaderProps): React.JSX.Element;
    displayName: string;
};
export declare const PasswordField: {
    ({ placeholder, showStrengthMeter, value, onChangeText, ...rest }: import("../Input").PasswordInputProps): React.JSX.Element;
    displayName: string;
};
export declare const OTPField: {
    ({ length, value, mask, onChangeText, style, }: import("../Input").OTPInputProps): React.JSX.Element;
    displayName: string;
};
export declare const VerificationCode: {
    ({ length, value, mask, onChangeText, style, }: import("../Input").OTPInputProps): React.JSX.Element;
    displayName: string;
};
export type UserMenuProps = {
    userName?: string;
    userRole?: string;
    onLogout?: () => void;
};
export declare const UserMenu: {
    ({ userName, userRole, onLogout, }: UserMenuProps): React.JSX.Element;
    displayName: string;
};
export declare const NotificationCenter: {
    ({ userName, userRole, onLogout, }: UserMenuProps): React.JSX.Element;
    displayName: string;
};
export declare const ProfileMenu: {
    ({ userName, userRole, onLogout, }: UserMenuProps): React.JSX.Element;
    displayName: string;
};
export declare const SettingsSection: ({ title, children }: {
    title: string;
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const SettingsList: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export type StatsCardProps = {
    title: string;
    value: string;
    change?: string;
    isPositive?: boolean;
    style?: ViewStyle;
};
export declare const StatsCard: {
    ({ title, value, change, isPositive, style, }: StatsCardProps): React.JSX.Element;
    displayName: string;
};
export declare const MetricCard: {
    ({ title, value, change, isPositive, style, }: StatsCardProps): React.JSX.Element;
    displayName: string;
};
export declare const DashboardCard: {
    ({ title, value, change, isPositive, style, }: StatsCardProps): React.JSX.Element;
    displayName: string;
};
export type PricingCardProps = {
    plan: string;
    price: string;
    period?: string;
    popular?: boolean;
    features: string[];
    onSelect?: () => void;
    style?: ViewStyle;
};
export declare const PricingCard: {
    ({ plan, price, period, popular, features, onSelect, style, }: PricingCardProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CompositeUI.d.ts.map