import React from "react";
import { ImageSourcePropType, ViewStyle } from "react-native";
export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "busy" | "offline" | "away";
export type AvatarProps = {
    src?: string | ImageSourcePropType;
    fallback?: string;
    size?: AvatarSize;
    status?: AvatarStatus;
    style?: ViewStyle;
};
export declare const Avatar: {
    ({ src, fallback, size, status, style }: AvatarProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Avatar.d.ts.map