import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card } from "../Card";
import { DateInput } from "../DateTime";
import { Input } from "../Input";
import { OTPInput, PasswordInput, SearchInput } from "../Input/InputVariants";
import { Popover } from "../Popover";

// 1. LoginForm
export type LoginFormProps = {
  onLogin?: (data: { email: string; pass: string }) => void;
  style?: ViewStyle;
};

export const LoginForm = ({ onLogin, style }: LoginFormProps) => {
  const { semanticColors } = useTheme();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Card variant="glass" style={{ width: "100%", maxWidth: 420, ...(style as object) }}>
      <Card.Header>
        <Card.Title>Developer Sign In</Card.Title>
        <Card.Description>Access distributed cluster telemetry and keys.</Card.Description>
      </Card.Header>
      <Card.Content>
        <VStack gap={4}>
          <Input label="Email Address" placeholder="alex@antigravity.ai" value={email} onChangeText={setEmail} />
          <PasswordInput label="Secret Key / Password" value={pass} onChangeText={setPass} />
        </VStack>
      </Card.Content>
      <Card.Footer>
        <Button variant="primary" style={{ width: "100%" }} onPress={() => onLogin?.({ email, pass })}>
          Authenticate Session →
        </Button>
      </Card.Footer>
    </Card>
  );
};
LoginForm.displayName = "LoginForm";

// 2. SearchBar, FilterBar & FilterSheet
export const SearchBar = SearchInput;
export const FilterBar = SearchInput;
export const FilterSheet = Card;

// 3. DateRangePicker
export type DateRangePickerProps = {
  style?: ViewStyle;
};

export const DateRangePicker = ({ style }: DateRangePickerProps) => (
  <Inline gap={3} align="center" style={style}>
    <DateInput placeholder="Start Date" style={{ flex: 1 }} />
    <Text size="xs" color="gray">→</Text>
    <DateInput placeholder="End Date" style={{ flex: 1 }} />
  </Inline>
);
DateRangePicker.displayName = "DateRangePicker";

// 4. FileUploader & ImageUploader
export type FileUploaderProps = {
  label?: string;
  description?: string;
  onUpload?: () => void;
  style?: ViewStyle;
};

export const FileUploader = ({
  label = "Upload Architecture Manifest",
  description = "Drag & drop .yaml or tap to browse",
  onUpload,
  style,
}: FileUploaderProps) => {
  const { semanticColors } = useTheme();

  return (
    <Pressable onPress={onUpload}>
      <Box
        style={[
          {
            padding: 24,
            borderRadius: 16,
            borderWidth: 1.5,
            borderColor: "rgba(124, 58, 237, 0.4)",
            borderStyle: "dashed",
            alignItems: "center",
            backgroundColor: "rgba(16, 18, 30, 0.6)",
          },
          style,
        ]}
      >
        <VStack gap={2} align="center">
          <Text size="2xl">📦</Text>
          <Text size="sm" weight="bold" color={semanticColors.primary}>
            {label}
          </Text>
          <Text size="xs" color={semanticColors.foregroundMuted}>
            {description}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
};
FileUploader.displayName = "FileUploader";

export const ImageUploader = FileUploader;
export const PasswordField = PasswordInput;
export const OTPField = OTPInput;
export const VerificationCode = OTPInput;

// 5. UserMenu, NotificationCenter & ProfileMenu
export type UserMenuProps = {
  userName?: string;
  userRole?: string;
  onLogout?: () => void;
};

export const UserMenu = ({
  userName = "Alisson Silva",
  userRole = "Lead Architect",
  onLogout,
}: UserMenuProps) => {
  const { semanticColors } = useTheme();

  return (
    <Popover>
      <Popover.Trigger>
        <Inline align="center" gap={2}>
          <Avatar fallback={userName.substring(0, 2).toUpperCase()} size="sm" status="online" />
        </Inline>
      </Popover.Trigger>
      <Popover.Content>
        <VStack gap={3}>
          <VStack gap={0}>
            <Text size="sm" weight="bold" color={semanticColors.foreground}>
              {userName}
            </Text>
            <Text size="xs" color={semanticColors.foregroundMuted}>
              {userRole}
            </Text>
          </VStack>
          <Button size="xs" variant="ghost">Account Settings</Button>
          <Button size="xs" variant="destructive" onPress={onLogout}>Sign Out</Button>
        </VStack>
      </Popover.Content>
    </Popover>
  );
};
UserMenu.displayName = "UserMenu";

export const NotificationCenter = UserMenu;
export const ProfileMenu = UserMenu;

// 6. SettingsSection & SettingsList
export const SettingsSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <VStack gap={2}>
    <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.2 }}>
      {title}
    </Text>
    {children}
  </VStack>
);

export const SettingsList = ({ children }: { children: React.ReactNode }) => (
  <VStack gap={4}>{children}</VStack>
);

// 7. StatsCard, MetricCard & DashboardCard
export type StatsCardProps = {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  style?: ViewStyle;
};

export const StatsCard = ({
  title,
  value,
  change = "+18.4%",
  isPositive = true,
  style,
}: StatsCardProps) => {
  const { semanticColors } = useTheme();

  return (
    <Card variant="glass" style={{ flex: 1, minWidth: 200, ...(style as object) }}>
      <Card.Header>
        <Card.Description>{title}</Card.Description>
      </Card.Header>
      <Card.Content>
        <VStack gap={1}>
          <Text size="2xl" weight="bold" color={semanticColors.foreground}>
            {value}
          </Text>
          <Inline align="center" gap={1.5}>
            <Badge variant={isPositive ? "success" : "danger"} size="sm">
              {change}
            </Badge>
            <Text size="xs" color={semanticColors.foregroundSubtle}>
              vs last month
            </Text>
          </Inline>
        </VStack>
      </Card.Content>
    </Card>
  );
};
StatsCard.displayName = "StatsCard";

export const MetricCard = StatsCard;
export const DashboardCard = StatsCard;

// 8. PricingCard
export type PricingCardProps = {
  plan: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: string[];
  onSelect?: () => void;
  style?: ViewStyle;
};

export const PricingCard = ({
  plan,
  price,
  period = "/month",
  popular = false,
  features,
  onSelect,
  style,
}: PricingCardProps) => {
  const { semanticColors } = useTheme();

  return (
    <Card
      variant="glass"
      accentBar={popular}
      style={{
        flex: 1,
        minWidth: 260,
        borderColor: popular ? "rgba(124, 58, 237, 0.6)" : "rgba(255, 255, 255, 0.1)",
        ...(style as object),
      }}
    >
      <Card.Header>
        <Inline justify="space-between" align="center">
          <Card.Title>{plan}</Card.Title>
          {popular && <Badge variant="primary" size="sm">POPULAR</Badge>}
        </Inline>
        <Inline align="baseline" gap={1}>
          <Text size="3xl" weight="bold" color={semanticColors.foreground}>
            {price}
          </Text>
          <Text size="xs" color={semanticColors.foregroundMuted}>
            {period}
          </Text>
        </Inline>
      </Card.Header>
      <Card.Content>
        <VStack gap={2.5}>
          {features.map((f, i) => (
            <Inline key={i} gap={2} align="center">
              <Text size="xs" color={semanticColors.primary} weight="bold">✓</Text>
              <Text size="xs" color={semanticColors.foreground}>{f}</Text>
            </Inline>
          ))}
        </VStack>
      </Card.Content>
      <Card.Footer>
        <Button variant={popular ? "primary" : "outline"} style={{ width: "100%" }} onPress={onSelect}>
          Deploy {plan} →
        </Button>
      </Card.Footer>
    </Card>
  );
};
PricingCard.displayName = "PricingCard";
