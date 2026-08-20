import React from "react";
import { Image as RNImage, ImageBackgroundProps as RNImageBackgroundProps, ImageProps as RNImageProps, ViewStyle } from "react-native";
import { Avatar } from "../Avatar";
export { Avatar };
export type ImageProps = RNImageProps & {
    radius?: number;
    aspectRatio?: number;
};
export declare const Image: React.ForwardRefExoticComponent<RNImageProps & {
    radius?: number;
    aspectRatio?: number;
} & React.RefAttributes<RNImage>>;
export type ImageBackgroundProps = RNImageBackgroundProps & {
    overlayColor?: string;
};
export declare const ImageBackground: {
    ({ overlayColor, style, children, ...rest }: ImageBackgroundProps): React.JSX.Element;
    displayName: string;
};
export type ThumbnailProps = {
    src?: string;
    fallbackIcon?: string;
    size?: number;
    radius?: number;
    showPlayBadge?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
};
export declare const Thumbnail: {
    ({ src, fallbackIcon, size, radius, showPlayBadge, onPress, style, }: ThumbnailProps): React.JSX.Element;
    displayName: string;
};
export { Icon, type IconProps } from "@unconfused-ui/icons";
export type ImageViewerProps = {
    open?: boolean;
    onClose?: () => void;
    title?: string;
    src?: string;
};
export declare const ImageViewer: {
    ({ open, onClose, title, src }: ImageViewerProps): React.JSX.Element;
    displayName: string;
};
export type ImageGalleryProps = {
    items: {
        id: string;
        src?: string;
        title?: string;
    }[];
    columns?: number;
    onSelect?: (item: {
        id: string;
        src?: string;
        title?: string;
    }) => void;
    style?: ViewStyle;
};
export declare const ImageGallery: {
    ({ items, columns, onSelect, style }: ImageGalleryProps): React.JSX.Element;
    displayName: string;
};
export type CarouselProps = {
    items: {
        id: string;
        title: string;
        subtitle?: string;
        badge?: string;
    }[];
    style?: ViewStyle;
};
export declare const Carousel: {
    ({ items, style }: CarouselProps): React.JSX.Element;
    displayName: string;
};
export type AudioPlayerProps = {
    title?: string;
    artist?: string;
    duration?: string;
    elapsed?: string;
    style?: ViewStyle;
};
export declare const AudioPlayer: {
    ({ title, artist, duration, elapsed, style, }: AudioPlayerProps): React.JSX.Element;
    displayName: string;
};
export type VideoProps = {
    title?: string;
    duration?: string;
    style?: ViewStyle;
};
export declare const Video: {
    ({ title, duration, style }: VideoProps): React.JSX.Element;
    displayName: string;
};
export declare const MediaPlayer: {
    ({ title, duration, style }: VideoProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MediaUI.d.ts.map