import React from "react";
import { ViewStyle } from "react-native";
export type EmptyStateProps = {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    actionLabel?: string;
    onAction?: () => void;
    secondaryActionLabel?: string;
    onSecondaryAction?: () => void;
    style?: ViewStyle;
};
export declare const EmptyState: {
    ({ title, description, icon, actionLabel, onAction, secondaryActionLabel, onSecondaryAction, style, }: EmptyStateProps): React.JSX.Element;
    displayName: string;
};
export declare const NoResults: {
    (props: EmptyStateProps): React.JSX.Element;
    displayName: string;
};
export declare const NotFound: {
    (props: EmptyStateProps): React.JSX.Element;
    displayName: string;
};
export declare const ErrorState: {
    (props: EmptyStateProps): React.JSX.Element;
    displayName: string;
};
export declare const OfflineState: {
    (props: EmptyStateProps): React.JSX.Element;
    displayName: string;
};
export declare const LoadingState: {
    ({ title, description, style, }: EmptyStateProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=EmptyState.d.ts.map