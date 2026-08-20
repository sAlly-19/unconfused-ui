import React from "react";
import { ImageSourcePropType, ImageStyle, ViewStyle } from "react-native";
import { AvatarProps, AvatarSize, AvatarStatus } from "./Avatar";
export * from "./Avatar";
export type AvatarImageProps = {
    src: string | ImageSourcePropType;
    style?: ImageStyle;
};
export declare const AvatarImage: {
    ({ src, style }: AvatarImageProps): React.JSX.Element;
    displayName: string;
};
export type AvatarFallbackProps = {
    children: string;
    style?: ViewStyle;
};
export declare const AvatarFallback: {
    ({ children, style }: AvatarFallbackProps): React.JSX.Element;
    displayName: string;
};
export type UserAvatarProps = AvatarProps & {
    name?: string;
    email?: string;
};
export declare const UserAvatar: {
    ({ name, email, fallback, ...rest }: UserAvatarProps): React.JSX.Element;
    displayName: string;
};
export type PresenceIndicatorProps = {
    status?: "online" | "offline" | "busy" | "away";
    size?: number;
    showGlow?: boolean;
    style?: ViewStyle;
};
export declare const PresenceIndicator: {
    ({ status, size, showGlow, style, }: PresenceIndicatorProps): React.JSX.Element;
    displayName: string;
};
export type ProfileProps = {
    name: string;
    role?: string;
    email?: string;
    avatarSrc?: string;
    status?: AvatarStatus;
    avatarSize?: AvatarSize;
    badge?: React.ReactNode;
    style?: ViewStyle;
};
export declare const Profile: {
    ({ name, role, email, avatarSrc, status, avatarSize, badge, style, }: ProfileProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AvatarVariants.d.ts.map