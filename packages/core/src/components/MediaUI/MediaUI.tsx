import React, { useState } from "react";
import {
  Image as RNImage,
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
  ImageProps as RNImageProps,
  ImageStyle,
  Modal,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";
import { Box, Center, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Avatar } from "../Avatar";
import { Button } from "../Button";

export { Avatar };

// 1. Image
export type ImageProps = RNImageProps & {
  radius?: number;
  aspectRatio?: number;
};

export const Image = React.forwardRef<RNImage, ImageProps>(
  ({ radius = 8, aspectRatio, style, ...rest }, ref) => {
    return (
      <RNImage
        ref={ref}
        style={[{ borderRadius: radius, aspectRatio }, style]}
        resizeMode="cover"
        {...rest}
      />
    );
  }
);
Image.displayName = "Image";

// 2. ImageBackground
export type ImageBackgroundProps = RNImageBackgroundProps & {
  overlayColor?: string;
};

export const ImageBackground = ({
  overlayColor = "rgba(0, 0, 0, 0.4)",
  style,
  children,
  ...rest
}: ImageBackgroundProps) => (
  <RNImageBackground style={[{ overflow: "hidden", position: "relative" }, style]} {...rest}>
    {overlayColor && (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor,
        }}
      />
    )}
    {children}
  </RNImageBackground>
);
ImageBackground.displayName = "ImageBackground";

// 3. Thumbnail
export type ThumbnailProps = {
  src?: string;
  fallbackIcon?: string;
  size?: number;
  radius?: number;
  showPlayBadge?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export const Thumbnail = ({
  src,
  fallbackIcon = "🖼️",
  size = 64,
  radius = 12,
  showPlayBadge = false,
  onPress,
  style,
}: ThumbnailProps) => {
  const { semanticColors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={[
        {
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        },
        style,
      ]}
    >
      {src ? (
        <RNImage source={{ uri: src }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
      ) : (
        <Text size="md">{fallbackIcon}</Text>
      )}

      {showPlayBadge && (
        <Center
          style={{
            position: "absolute",
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
          }}
        >
          <Text size="xs" color="#FFF">▶</Text>
        </Center>
      )}
    </Pressable>
  );
};
Thumbnail.displayName = "Thumbnail";

// 4. Icon (Re-exported from @unconfused-ui/icons)
export { Icon, type IconProps } from "@unconfused-ui/icons";

// 5. ImageViewer (Modal zoom preview)
export type ImageViewerProps = {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  src?: string;
};

export const ImageViewer = ({ open = false, onClose, title = "Image Preview", src }: ImageViewerProps) => {
  const { semanticColors } = useTheme();

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.9)",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Pressable
          onPress={(e) => e.stopPropagation?.()}
          style={{
            maxWidth: 600,
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "rgba(16, 18, 30, 0.95)",
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          <Inline justify="space-between" align="center" style={{ padding: 14 }}>
            <Text size="sm" weight="bold">{title}</Text>
            <Pressable onPress={onClose}>
              <Text size="sm" color={semanticColors.foregroundMuted}>✕</Text>
            </Pressable>
          </Inline>

          <Box style={{ height: 300, backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
            {src ? (
              <RNImage source={{ uri: src }} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
            ) : (
              <Text size="3xl">🌌</Text>
            )}
          </Box>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
ImageViewer.displayName = "ImageViewer";

// 6. ImageGallery
export type ImageGalleryProps = {
  items: { id: string; src?: string; title?: string }[];
  columns?: number;
  onSelect?: (item: { id: string; src?: string; title?: string }) => void;
  style?: ViewStyle;
};

export const ImageGallery = ({ items, columns = 3, onSelect, style }: ImageGalleryProps) => (
  <Inline gap={3} wrap style={style}>
    {items.map((item) => (
      <Thumbnail
        key={item.id}
        src={item.src}
        size={84}
        radius={10}
        onPress={() => onSelect?.(item)}
      />
    ))}
  </Inline>
);
ImageGallery.displayName = "ImageGallery";

// 7. Carousel (Interactive swipeable slide container)
export type CarouselProps = {
  items: { id: string; title: string; subtitle?: string; badge?: string }[];
  style?: ViewStyle;
};

export const Carousel = ({ items, style }: CarouselProps) => {
  const { semanticColors } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : items.length - 1));
  const next = () => setActiveIndex((i) => (i < items.length - 1 ? i + 1 : 0));

  const current = items[activeIndex];

  return (
    <Box
      style={[
        {
          padding: 20,
          borderRadius: 16,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          maxWidth: 480,
          position: "relative",
        },
        style,
      ]}
    >
      <VStack gap={4}>
        <Inline justify="space-between" align="center">
          <Text size="xs" weight="bold" color={semanticColors.primary} style={{ textTransform: "uppercase" }}>
            Slide {activeIndex + 1} of {items.length}
          </Text>
          {current?.badge && (
            <Box style={{ paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, backgroundColor: "rgba(124, 58, 237, 0.2)" }}>
              <Text size="xs" color="#A78BFA" weight="bold">{current.badge}</Text>
            </Box>
          )}
        </Inline>

        <Box style={{ minHeight: 70, justifyContent: "center" }}>
          <Text size="lg" weight="bold" color={semanticColors.foreground}>
            {current?.title}
          </Text>
          {current?.subtitle && (
            <Text size="xs" color={semanticColors.foregroundMuted} style={{ marginTop: 4 }}>
              {current.subtitle}
            </Text>
          )}
        </Box>

        {/* Carousel Navigation & Indicator Dots */}
        <Inline justify="space-between" align="center">
          <Inline gap={1.5}>
            {items.map((_, idx) => (
              <Pressable
                key={idx}
                onPress={() => setActiveIndex(idx)}
                style={{
                  width: activeIndex === idx ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: activeIndex === idx ? semanticColors.primary : "rgba(255, 255, 255, 0.2)",
                }}
              />
            ))}
          </Inline>

          <Inline gap={2}>
            <Button size="xs" variant="ghost" onPress={prev}>
              ‹ Prev
            </Button>
            <Button size="xs" variant="primary" onPress={next}>
              Next ›
            </Button>
          </Inline>
        </Inline>
      </VStack>
    </Box>
  );
};
Carousel.displayName = "Carousel";

// 8. AudioPlayer
export type AudioPlayerProps = {
  title?: string;
  artist?: string;
  duration?: string;
  elapsed?: string;
  style?: ViewStyle;
};

export const AudioPlayer = ({
  title = "Ambient Space Waves",
  artist = "Antigravity Synth",
  duration = "03:45",
  elapsed = "01:14",
  style,
}: AudioPlayerProps) => {
  const { semanticColors } = useTheme();
  const [playing, setPlaying] = useState(false);

  return (
    <Box
      style={[
        {
          padding: 16,
          borderRadius: 16,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          maxWidth: 400,
        },
        style,
      ]}
    >
      <VStack gap={3}>
        <Inline justify="space-between" align="center">
          <Inline align="center" gap={3}>
            <Center circle={38} bg={playing ? semanticColors.primary : "rgba(255, 255, 255, 0.08)"}>
              <Pressable onPress={() => setPlaying(!playing)}>
                <Text size="sm" color="#FFF">{playing ? "⏸" : "▶"}</Text>
              </Pressable>
            </Center>
            <VStack gap={0}>
              <Text size="sm" weight="bold" color={semanticColors.foreground}>
                {title}
              </Text>
              <Text size="xs" color={semanticColors.foregroundMuted}>
                {artist}
              </Text>
            </VStack>
          </Inline>

          <Text size="xs" color={semanticColors.primary} weight="bold">
            {playing ? "Playing" : "Paused"}
          </Text>
        </Inline>

        {/* Audio Waveform / Track Progress Bar */}
        <VStack gap={1}>
          <Box style={{ width: "100%", height: 6, borderRadius: 3, backgroundColor: "rgba(255, 255, 255, 0.1)", overflow: "hidden" }}>
            <Box style={{ width: "38%", height: "100%", backgroundColor: semanticColors.primary }} />
          </Box>
          <Inline justify="space-between">
            <Text size="xs" color={semanticColors.foregroundSubtle}>{elapsed}</Text>
            <Text size="xs" color={semanticColors.foregroundSubtle}>{duration}</Text>
          </Inline>
        </VStack>
      </VStack>
    </Box>
  );
};
AudioPlayer.displayName = "AudioPlayer";

// 9. Video & MediaPlayer
export type VideoProps = {
  title?: string;
  duration?: string;
  style?: ViewStyle;
};

export const Video = ({ title = "Architecture Overview", duration = "12:40", style }: VideoProps) => {
  const { semanticColors } = useTheme();
  const [playing, setPlaying] = useState(false);

  return (
    <Box
      style={[
        {
          borderRadius: 16,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          overflow: "hidden",
          maxWidth: 420,
        },
        style,
      ]}
    >
      <Box style={{ height: 180, backgroundColor: "#0A0B14", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <Text size="4xl">🎬</Text>
        <Center
          style={{
            position: "absolute",
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "rgba(124, 58, 237, 0.85)",
          }}
        >
          <Pressable onPress={() => setPlaying(!playing)}>
            <Text size="md" color="#FFF">{playing ? "⏸" : "▶"}</Text>
          </Pressable>
        </Center>
      </Box>

      <Inline justify="space-between" align="center" style={{ padding: 14 }}>
        <VStack gap={0}>
          <Text size="sm" weight="bold">{title}</Text>
          <Text size="xs" color={semanticColors.foregroundMuted}>1080p 60fps • H.265</Text>
        </VStack>
        <Text size="xs" color={semanticColors.primary} weight="bold">{duration}</Text>
      </Inline>
    </Box>
  );
};
Video.displayName = "Video";

export const MediaPlayer = Video;
