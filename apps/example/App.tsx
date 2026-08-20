import { HomeScreen } from "./screens/HomeScreen";
import { DocsScreen } from "./screens/DocsScreen";
import { UsageModesScreen } from "./screens/UsageModesScreen";
import { PrivacyPoliciesScreen } from "./screens/PrivacyPoliciesScreen";
import { Logo } from "./components/Logo";
import {
  Icon,
  IconName,
  SparklesIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BookIcon,
  LayersIcon,
  ShieldIcon,
  HomeIcon,
  LockIcon,
  StarIcon,
  ZapIcon,
  ActivityIcon,
  ServerIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlusIcon,
  CloseIcon,
  CheckIcon,
  ChevronRightIcon,
  SearchIcon,
  CopyIcon,
  SettingsIcon,
  BellIcon,
  ShieldCheckIcon,
  UserIcon,
  HeartIcon,
  MoonIcon,
  SunIcon,
} from "@unconfused-ui/icons";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView as RNScrollView, View } from "react-native";
import {
  Accordion,
  AccordionItem,
  ActionCard,
  ActionSheet,
  ActivityIndicator,
  Alert,
  AlertDialog,
  AppBar,
  AreaChart,
  AudioPlayer,
  Autocomplete,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  BackButton,
  Badge,
  Banner,
  BarChart,
  BottomSheet,
  BottomTabBar,
  BottomTabs,
  Breadcrumb,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Calendar,
  CalendarRange,
  Callout,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Chart,
  Checkbox,
  CheckboxGroup,
  Chip,
  CloseButton,
  CodeInput,
  Collapsible,
  Combobox,
  CommandMenu,
  CommandPalette,
  ConfirmDialog,
  ContextMenu,
  Counter,
  CurrencyInput,
  DashboardCard,
  DataTable,
  DateInput,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  Dialog,
  Disclosure,
  DisclosureGroup,
  DonutChart,
  Dot,
  DoubleTap,
  Draggable,
  Drawer,
  Droppable,
  Dropdown,
  DropdownMenu,
  EmailInput,
  EmptyState,
  ErrorMessage,
  ErrorState,
  Expandable,
  FeatureCard,
  FieldGroup,
  FileUploader,
  FilterBar,
  FilterSheet,
  FlatList,
  FloatingActionButton,
  Form,
  FormControl,
  FormDescription,
  FormError,
  FormField,
  FormLabel,
  FormMessage,
  FormSection,
  Gauge,
  Grid,
  GridItem,
  HapticButton,
  Header,
  IconButton,
  Image,
  ImageBackground,
  ImageGallery,
  ImageUploader,
  ImageViewer,
  Indicator,
  InfoMessage,
  Input,
  KeyboardAccessory,
  LineChart,
  LinkButton,
  List,
  ListFooter,
  ListHeader,
  ListItem,
  ListSection,
  LoadingIndicator,
  LoadingState,
  LoginForm,
  LongPress,
  MaskedInput,
  MediaPlayer,
  Menu,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MetricCard,
  Modal,
  MonthPicker,
  MultiSelect,
  Navbar,
  NavigationBar,
  NavigationRail,
  NoResults,
  NotFound,
  Notice,
  NotificationCenter,
  NumberInput,
  OfflineState,
  OTPField,
  OTPInput,
  Pagination,
  Panel,
  PanGesture,
  Paper,
  PasswordField,
  PasswordInput,
  PhoneInput,
  Picker,
  PieChart,
  Pill,
  PinchZoom,
  PinInput,
  Popover,
  PresenceIndicator,
  PricingCard,
  Profile,
  ProfileMenu,
  Progress,
  ProgressBar,
  ProgressChart,
  ProgressCircle,
  PullToRefresh,
  RadarChart,
  Radio,
  RadioGroup,
  RangeSlider,
  Resizable,
  SearchBar,
  SearchInput,
  SectionList,
  SegmentedControl,
  Select,
  Separator,
  SettingsList,
  SettingsSection,
  ShareButton,
  Sheet,
  Shimmer,
  Sidebar,
  Skeleton,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonText,
  Slider,
  Snackbar,
  Sparkline,
  Spinner,
  StatsCard,
  StatusBadge,
  StatusBar,
  Stepper,
  SubmitButton,
  SuccessMessage,
  SwipeActions,
  Swipeable,
  Switch,
  Tab,
  TabBar,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Tabs,
  Tag,
  Textarea,
  Thumbnail,
  Tile,
  TimeInput,
  TimePicker,
  ToastProvider,
  Toggle,
  ToggleGroup,
  Toolbar,
  Tooltip,
  TopTabs,
  Touchable,
  Tree,
  TreeItem,
  UserAvatar,
  UserMenu,
  useToast,
  VerificationCode,
  Video,
  VirtualList,
  WarningMessage,
  YearPicker,
} from "@unconfused-ui/core";
import {
  Absolute,
  AnimatedBox,
  AnimatedCollapse,
  AspectRatio,
  Blockquote,
  Box,
  Caption,
  Center,
  Code,
  Column,
  Container,
  ContainerQuery,
  Divider,
  Flow,
  FocusTrap,
  GradientText,
  Heading,
  HorizontalScroll,
  HStack,
  Inline,
  KeyboardAvoidingView,
  Label,
  Layer,
  LazyRender,
  Link,
  Masonry,
  Overlay,
  Paragraph,
  Portal,
  Pressable,
  Row,
  SafeArea,
  ScrollView,
  Slot,
  Slottable,
  Spacer,
  SplitView,
  Stack,
  Subtitle,
  Surface,
  SwipeableRow,
  Text,
  Title,
  TruncatedText,
  View as PrimitiveView,
  VStack,
  Wrap,
} from "@unconfused-ui/primitives";
import { createTheme, ThemeProvider, useTheme } from "@unconfused-ui/theme";

const customTheme = createTheme({
  name: "unconfused-signature",
});

function CategoryHero({
  number,
  title,
  description,
  tags = [],
}: {
  number: string;
  title: string;
  description: string;
  tags?: Array<{ label: string; variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "outline" }>;
}) {
  const { semanticColors } = useTheme();

  return (
    <Box
      p={5}
      rounded="lg"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.07)",
        borderRadius: 12,
        marginBottom: 8,
      }}
    >
      <VStack gap={2.5}>
        <Inline align="center" justify="space-between">
          <Inline align="center" gap={2}>
            <Box
              style={{
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 4,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.08)",
              }}
            >
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ fontFamily: "monospace", letterSpacing: 0.8 }}>
                {number}
              </Text>
            </Box>
            <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ letterSpacing: 0.8, textTransform: "uppercase", fontSize: 11 }}>
              MASTER TAXONOMY
            </Text>
          </Inline>
          <Box
            style={{
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 4,
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              borderWidth: 1,
              borderColor: "rgba(16, 185, 129, 0.25)",
            }}
          >
            <Text size="xs" weight="bold" color="#34D399" style={{ fontFamily: "monospace", fontSize: 11 }}>
              APCA 100%
            </Text>
          </Box>
        </Inline>

        <VStack gap={1}>
          <Text size="2xl" weight="bold" color={semanticColors.foreground} style={{ letterSpacing: -0.5 }}>
            {title}
          </Text>
          <Text size="sm" color={semanticColors.foregroundMuted} lineHeight="sm" style={{ maxWidth: 840 }}>
            {description}
          </Text>
        </VStack>

        {tags && tags.length > 0 && (
          <Inline gap={2} style={{ marginTop: 2 }} wrap>
            {tags.map((tag, idx) => (
              <Badge key={idx} variant={tag.variant ?? "outline"} size="sm">
                {tag.label}
              </Badge>
            ))}
          </Inline>
        )}
      </VStack>
    </Box>
  );
}

function SectionHeader({ tag, title, description }: { tag: string; title: string; description: string }) {
  const { semanticColors } = useTheme();
  return (
    <VStack gap={1} style={{ marginBottom: 12 }}>
      <Inline align="center" gap={2}>
        <Box
          style={{
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 0.5 }}>
            {tag.toUpperCase()}
          </Text>
        </Box>
        <Text size="md" weight="bold" color={semanticColors.foreground} style={{ letterSpacing: -0.2 }}>
          {title}
        </Text>
      </Inline>
      <Text size="xs" color={semanticColors.foregroundMuted} lineHeight="xs">
        {description}
      </Text>
    </VStack>
  );
}

function ComponentPlayground({
  tag,
  title,
  description,
  code,
  propsList = [],
  telemetry,
  apcaScore,
  children,
}: {
  tag: string;
  title: string;
  description: string;
  code?: string;
  propsList?: Array<{ prop: string; type: string; default?: string; description: string }>;
  telemetry?: Record<string, any>;
  apcaScore?: string;
  children: React.ReactNode;
}) {
  const { semanticColors } = useTheme();
  const { toast } = useToast();
  const [tab, setTab] = useState<"preview" | "code" | "props">("preview");

  const copyCode = () => {
    if (code) {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(code);
      }
      toast({
        title: "Código JSX copiado!",
        description: `${title} pronto para uso no seu projeto.`,
        variant: "success",
      });
    }
  };

  return (
    <Card variant="glass" style={{ marginBottom: 16 }}>
      <Card.Header>
        <Inline justify="space-between" align="flex-start" wrap gap={2}>
          <SectionHeader tag={tag} title={title} description={description} />
          
          <Inline align="center" gap={2}>
            {apcaScore && (
              <Box style={{ paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, backgroundColor: "rgba(16, 185, 129, 0.1)", borderWidth: 1, borderColor: "rgba(16, 185, 129, 0.25)" }}>
                <Text size="xs" color="#34D399" style={{ fontFamily: "monospace", fontSize: 10 }}>{apcaScore}</Text>
              </Box>
            )}

            <Inline style={{ backgroundColor: "rgba(255, 255, 255, 0.04)", padding: 2, borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.08)" }}>
              <Pressable
                onPress={() => setTab("preview")}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  borderRadius: 4,
                  backgroundColor: tab === "preview" ? "rgba(255, 255, 255, 0.12)" : "transparent",
                }}
              >
                <Text size="xs" weight={tab === "preview" ? "bold" : "medium"} color={tab === "preview" ? semanticColors.foreground : semanticColors.foregroundMuted}>
                  Preview
                </Text>
              </Pressable>
              {code && (
                <Pressable
                  onPress={() => setTab("code")}
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 4,
                    backgroundColor: tab === "code" ? "rgba(255, 255, 255, 0.12)" : "transparent",
                  }}
                >
                  <Text size="xs" weight={tab === "code" ? "bold" : "medium"} color={tab === "code" ? semanticColors.foreground : semanticColors.foregroundMuted}>
                    Code
                  </Text>
                </Pressable>
              )}
              {propsList.length > 0 && (
                <Pressable
                  onPress={() => setTab("props")}
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 4,
                    backgroundColor: tab === "props" ? "rgba(255, 255, 255, 0.12)" : "transparent",
                  }}
                >
                  <Text size="xs" weight={tab === "props" ? "bold" : "medium"} color={tab === "props" ? semanticColors.foreground : semanticColors.foregroundMuted}>
                    Props
                  </Text>
                </Pressable>
              )}
            </Inline>
          </Inline>
        </Inline>
      </Card.Header>

      <Card.Content>
        {tab === "preview" && (
          <VStack gap={3}>
            {children}
            {telemetry && (
              <Box style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
                <Text size="xs" color={semanticColors.primary} style={{ fontFamily: "monospace", fontSize: 11 }}>
                  Live State: {JSON.stringify(telemetry)}
                </Text>
              </Box>
            )}
          </VStack>
        )}

        {tab === "code" && code && (
          <Box style={{ backgroundColor: "#06070B", borderRadius: 8, padding: 14, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.08)" }}>
            <Inline justify="space-between" align="center" style={{ marginBottom: 8 }}>
              <Text size="xs" color={semanticColors.foregroundSubtle} style={{ fontFamily: "monospace", fontSize: 10 }}>JSX TEMPLATE</Text>
              <Pressable onPress={copyCode} style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, backgroundColor: "rgba(255, 255, 255, 0.08)" }}>
                <Text size="xs" weight="bold" color={semanticColors.primary}>Copy Code</Text>
              </Pressable>
            </Inline>
            <Text size="xs" color="#E2E8F0" style={{ fontFamily: "monospace", lineHeight: 18 }}>
              {code}
            </Text>
          </Box>
        )}

        {tab === "props" && propsList.length > 0 && (
          <Box style={{ borderRadius: 8, overflow: "hidden", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.08)" }}>
            <Inline style={{ backgroundColor: "rgba(255, 255, 255, 0.04)", paddingVertical: 8, paddingHorizontal: 12, borderBottomWidth: 1, borderBottomColor: "rgba(255, 255, 255, 0.08)" }}>
              <Text size="xs" weight="bold" color={semanticColors.primary} style={{ width: 110, fontFamily: "monospace" }}>PROP</Text>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ width: 130, fontFamily: "monospace" }}>TYPE</Text>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ width: 90, fontFamily: "monospace" }}>DEFAULT</Text>
              <Text size="xs" weight="bold" color={semanticColors.foreground} style={{ flex: 1 }}>DESCRIPTION</Text>
            </Inline>
            {propsList.map((p, idx) => (
              <Inline key={idx} style={{ paddingVertical: 8, paddingHorizontal: 12, borderBottomWidth: idx === propsList.length - 1 ? 0 : 1, borderBottomColor: "rgba(255, 255, 255, 0.05)" }}>
                <Text size="xs" weight="bold" color="#A78BFA" style={{ width: 110, fontFamily: "monospace" }}>{p.prop}</Text>
                <Text size="xs" color={semanticColors.foregroundMuted} style={{ width: 130, fontFamily: "monospace" }}>{p.type}</Text>
                <Text size="xs" color={semanticColors.foregroundSubtle} style={{ width: 90, fontFamily: "monospace" }}>{p.default ?? "—"}</Text>
                <Text size="xs" color={semanticColors.foreground} style={{ flex: 1 }}>{p.description}</Text>
              </Inline>
            ))}
          </Box>
        )}
      </Card.Content>
    </Card>
  );
}

function CategoryFooter({ currentId, onNavigate }: { currentId: string; onNavigate: (id: string) => void }) {
  const { semanticColors } = useTheme();
  const allItems = taxonomySuites.flatMap((s) => s.items);
  const currentIndex = allItems.findIndex((i) => i.id === currentId);
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return (
    <Box style={{ paddingTop: 32, paddingBottom: 16, marginTop: 24, borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.08)" }}>
      <Inline justify="space-between" align="center">
        {prevItem ? (
          <Pressable
            onPress={() => onNavigate(prevItem.id)}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 8,
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <Text size="xs" color={semanticColors.foregroundMuted} style={{ fontSize: 10, letterSpacing: 0.5 }}>ANTERIOR</Text>
            <Text size="sm" weight="bold" color={semanticColors.foreground}>← {prevItem.name}</Text>
          </Pressable>
        ) : <View />}

        {nextItem && (
          <Pressable
            onPress={() => onNavigate(nextItem.id)}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 8,
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.08)",
              alignItems: "flex-end",
            }}
          >
            <Text size="xs" color={semanticColors.foregroundMuted} style={{ fontSize: 10, letterSpacing: 0.5 }}>PRÓXIMO</Text>
            <Text size="sm" weight="bold" color={semanticColors.primary}>{nextItem.name} →</Text>
          </Pressable>
        )}
      </Inline>
    </Box>
  );
}

export function FoundationsView() {
  const { theme, semanticColors } = useTheme();
  const [showPortalCard, setShowPortalCard] = useState(false);
  const [containerSize, setContainerSize] = useState<"sm" | "md" | "lg" | "xl">("md");

  return (
    <Stack gap={10}>
      <CategoryHero
        number="01"
        title="Foundations & Primitives Suite"
        description="The architectural backbone of Unconfused UI. 18 pure, cross-platform React Native primitives engineered for uncompromising precision, performance, and responsive layout composition."
        tags={[{"label":"18 Primitives","variant":"primary"},{"label":"Zero DOM Dependencies","variant":"success"},{"label":"Universal Token Scales","variant":"outline"}]}
      />

      {/* 1. Box & View Stylings */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Box & View"
            title="Polymorphic Surface & Box Presets"
            description="Complete token resolution for padding, margins, borders, shadows, and glassmorphic treatments."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={3} wrap>
              {/* Flat Box */}
              <Box p={4} rounded="md" bg="surfaceSubtle" style={{ flex: 1, minWidth: 140 }}>
                <Text size="xs" weight="bold" color={theme.colors.primary}>Box (Flat / Subtle)</Text>
                <Text size="xs" color={theme.colors.foregroundMuted}>bg="surfaceSubtle"</Text>
              </Box>

              {/* Bordered Box */}
              <Box variant="bordered" p={4} rounded="md" style={{ flex: 1, minWidth: 140 }}>
                <Text size="xs" weight="bold" color={theme.colors.foreground}>Box (Bordered)</Text>
                <Text size="xs" color={theme.colors.foregroundMuted}>variant="bordered"</Text>
              </Box>

              {/* Elevated Box */}
              <Box variant="elevated" p={4} rounded="md" style={{ flex: 1, minWidth: 140 }}>
                <Text size="xs" weight="bold" color={theme.colors.foreground}>Box (Elevated)</Text>
                <Text size="xs" color={theme.colors.foregroundMuted}>variant="elevated"</Text>
              </Box>

              {/* Glassmorphic Box */}
              <Box variant="glass" p={4} rounded="md" style={{ flex: 1, minWidth: 140 }}>
                <Text size="xs" weight="bold" color="#A78BFA">Box (Glass)</Text>
                <Text size="xs" color={theme.colors.foregroundMuted}>variant="glass"</Text>
              </Box>
            </HStack>

            {/* View token-aware wrapper */}
            <PrimitiveView
              p={4}
              rounded="lg"
              borderWidth={1}
              borderColor="rgba(124, 58, 237, 0.4)"
              bg="rgba(124, 58, 237, 0.08)"
            >
              <Inline justify="space-between" align="center">
                <VStack gap={0.5}>
                  <Text size="sm" weight="bold" color={theme.colors.foreground}>Tokenized View Component</Text>
                  <Text size="xs" color={theme.colors.foregroundMuted}>
                    Drop-in tokenized replacement for React Native View with shorthand styling.
                  </Text>
                </VStack>
                <Badge variant="primary" size="sm">Native View</Badge>
              </Inline>
            </PrimitiveView>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Container Responsive Widths */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Container"
            title="Max-Width Centered Containers"
            description="Enforces structured layout boundaries with responsive breakpoints (sm, md, lg, xl, 2xl, fluid)."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Inline gap={2} align="center">
              <Text size="xs" weight="bold" color={theme.colors.foregroundMuted}>Select Container Size:</Text>
              {(["sm", "md", "lg", "xl"] as const).map((s) => (
                <Pressable key={s} onPress={() => setContainerSize(s)}>
                  <Badge variant={containerSize === s ? "primary" : "outline"} size="sm">
                    {s.toUpperCase()}
                  </Badge>
                </Pressable>
              ))}
            </Inline>

            <Container size={containerSize} gutters={false}>
              <Box
                p={4}
                rounded="lg"
                borderWidth={1}
                borderColor={theme.colors.primary}
                bg="rgba(124, 58, 237, 0.1)"
                alignItems="center"
              >
                <Text size="xs" weight="bold" color={theme.colors.primary}>
                  Container size="{containerSize}" (Max-Width Active)
                </Text>
                <Text size="xs" color={theme.colors.foregroundMuted}>
                  Automatically centers within the viewport with fluid gutter padding.
                </Text>
              </Box>
            </Container>
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Stack, HStack, VStack, Row & Column */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Stack & Flex Grids"
            title="Stack, HStack, VStack, Row & Column"
            description="Flexbox layouts with gap scaling, directional reversal, and automatic item dividers."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            {/* Automatic Divider Injection */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={theme.colors.foregroundMuted}>
                VStack with Automatic Divider Injection (divider=&lt;Divider /&gt;)
              </Text>
              <Box p={3} rounded="lg" variant="bordered">
                <VStack divider={<Divider thickness={1} color="rgba(255,255,255,0.08)" />}>
                  <Box py={2}><Text size="xs" weight="medium">Item #1 in Divider Stack</Text></Box>
                  <Box py={2}><Text size="xs" weight="medium">Item #2 in Divider Stack</Text></Box>
                  <Box py={2}><Text size="xs" weight="medium">Item #3 in Divider Stack</Text></Box>
                </VStack>
              </Box>
            </VStack>

            {/* HStack Distribution */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={theme.colors.foregroundMuted}>
                HStack with Centered Align & Space-Between Justify
              </Text>
              <HStack justify="space-between" p={3} rounded="lg" bg="surfaceSubtle">
                <Box p={2} bg="rgba(124, 58, 237, 0.2)" rounded="sm"><Text size="xs">HStack Left</Text></Box>
                <Box p={2} bg="rgba(124, 58, 237, 0.2)" rounded="sm"><Text size="xs">HStack Center</Text></Box>
                <Box p={2} bg="rgba(124, 58, 237, 0.2)" rounded="sm"><Text size="xs">HStack Right</Text></Box>
              </HStack>
            </VStack>

            {/* Row & Column Span System */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={theme.colors.foregroundMuted}>
                Row & Column Span Proportions (1/3 vs 2/3 Grid Layout)
              </Text>
              <Row gap={3}>
                <Column span={1} p={3} rounded="md" variant="bordered">
                  <Text size="xs" weight="bold" color={theme.colors.primary}>Column span=1 (1/3)</Text>
                  <Text size="xs" color={theme.colors.foregroundMuted}>Sidebar / Meta area</Text>
                </Column>
                <Column span={2} p={3} rounded="md" variant="bordered">
                  <Text size="xs" weight="bold" color={theme.colors.foreground}>Column span=2 (2/3)</Text>
                  <Text size="xs" color={theme.colors.foregroundMuted}>Primary main content container</Text>
                </Column>
              </Row>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 4. Center & Spacer */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Center & Spacer"
            title="Precision Center & Expanding Spacers"
            description="Centering with square/circle geometry and flexible or fixed-size spacers."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={4} align="center" wrap>
              {/* Circle Center */}
              <Center circle={60} bg="rgba(124, 58, 237, 0.2)" borderWidth={1} borderColor={theme.colors.primary}>
                <Text size="xs" weight="bold" color="#A78BFA">Circle</Text>
              </Center>

              {/* Square Center */}
              <Center square={60} rounded="lg" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.1)">
                <Text size="xs" weight="bold">Square</Text>
              </Center>

              <Spacer />

              {/* Spacer Demo */}
              <Box p={3} rounded="md" variant="bordered">
                <Text size="xs" weight="bold">Pushed right by &lt;Spacer /&gt;</Text>
              </Box>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 5. Divider Variantes */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Divider"
            title="Dividers with Labels, Solid, Dashed & Dotted Styles"
            description="Horizontal and vertical dividers with customizable line styles and label chips."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            {/* Labeled Divider */}
            <Divider label="OR CONTINUE WITH OAUTH" />

            {/* Dashed Divider */}
            <VStack gap={1}>
              <Text size="xs" color={theme.colors.foregroundMuted}>Dashed Variant (dividerVariant="dashed")</Text>
              <Divider dividerVariant="dashed" thickness={1.5} color={theme.colors.primary} />
            </VStack>

            {/* Dotted Divider */}
            <VStack gap={1}>
              <Text size="xs" color={theme.colors.foregroundMuted}>Dotted Variant (dividerVariant="dotted")</Text>
              <Divider dividerVariant="dotted" thickness={2} color="rgba(255,255,255,0.2)" />
            </VStack>

            {/* Vertical Divider in action strip */}
            <HStack gap={3} align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="xs" weight="bold">Action Left</Text>
              <Divider orientation="vertical" thickness={1} style={{ height: 20 }} />
              <Text size="xs" weight="bold">Action Center</Text>
              <Divider orientation="vertical" thickness={1} style={{ height: 20 }} />
              <Text size="xs" weight="bold">Action Right</Text>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 6. AspectRatio Gallery */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="AspectRatio"
            title="Responsive Aspect Ratio Containers"
            description="Locks container dimensions to standard aspect ratios (16:9, 4:3, 1:1, 21:9)."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={3} wrap>
            {/* 16:9 Video Aspect */}
            <Box style={{ flex: 1, minWidth: 160 }}>
              <AspectRatio ratio="16/9" rounded="lg" borderWidth={1} borderColor="rgba(124, 58, 237, 0.4)">
                <Center style={{ flex: 1, backgroundColor: "rgba(124, 58, 237, 0.15)" }}>
                  <Text size="xs" weight="bold" color="#A78BFA">16:9 Cinema</Text>
                </Center>
              </AspectRatio>
            </Box>

            {/* 4:3 Card Aspect */}
            <Box style={{ flex: 1, minWidth: 140 }}>
              <AspectRatio ratio="4/3" rounded="lg" borderWidth={1} borderColor="rgba(255, 255, 255, 0.15)">
                <Center style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                  <Text size="xs" weight="bold">4:3 Photo</Text>
                </Center>
              </AspectRatio>
            </Box>

            {/* 1:1 Square Aspect */}
            <Box style={{ width: 90 }}>
              <AspectRatio ratio="1/1" rounded="lg" borderWidth={1} borderColor="rgba(16, 185, 129, 0.4)">
                <Center style={{ flex: 1, backgroundColor: "rgba(16, 185, 129, 0.15)" }}>
                  <Text size="xs" weight="bold" color="#34D399">1:1 Square</Text>
                </Center>
              </AspectRatio>
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 7. Absolute Positioning Matrix */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Absolute"
            title="Precision Placement & Layer Pinning"
            description="Absolute positioning container supporting corners, center, inset, and z-index layers."
          />
        </Card.Header>
        <Card.Content>
          <Box
            style={{
              height: 140,
              width: "100%",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(16, 18, 30, 0.8)",
              position: "relative",
            }}
          >
            {/* Top Left */}
            <Absolute top={10} left={10}>
              <Badge variant="primary" size="sm">top-left</Badge>
            </Absolute>

            {/* Top Right */}
            <Absolute top={10} right={10}>
              <Badge variant="success" size="sm">top-right</Badge>
            </Absolute>

            {/* Center */}
            <Absolute center>
              <Badge variant="outline" size="sm">centered placement</Badge>
            </Absolute>

            {/* Bottom Left */}
            <Absolute bottom={10} left={10}>
              <Badge variant="warning" size="sm">bottom-left</Badge>
            </Absolute>

            {/* Bottom Right */}
            <Absolute bottom={10} right={10}>
              <Badge variant="danger" size="sm">bottom-right</Badge>
            </Absolute>
          </Box>
        </Card.Content>
      </Card>

      {/* 8. HorizontalScroll & ScrollView */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="HorizontalScroll & ScrollView"
            title="Touch-Optimized Scroll Containers"
            description="Clean horizontal carousels with item gaps, smooth touch scroll, and hidden scrollbars."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={3}>
            <Text size="xs" weight="bold" color={theme.colors.foregroundMuted}>
              HorizontalScroll with Token Gap (gap={3})
            </Text>
            <HorizontalScroll gap={3} contentPadding={1}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Box
                  key={index}
                  p={4}
                  rounded="lg"
                  variant="bordered"
                  style={{ width: 150, backgroundColor: "rgba(20, 24, 40, 0.8)" }}
                >
                  <Text size="xs" weight="bold" color={theme.colors.primary}>Card #{index + 1}</Text>
                  <Text size="xs" color={theme.colors.foregroundMuted}>Horizontal Slide</Text>
                </Box>
              ))}
            </HorizontalScroll>
          </VStack>
        </Card.Content>
      </Card>

      {/* 9. Portal Teleportation System */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Portal"
            title="Root-Level Portal Overlays"
            description="Mounts floating overlays, alerts, and toasts directly into the root PortalHost hierarchy."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Inline gap={3} align="center">
              <Button
                variant={showPortalCard ? "destructive" : "primary"}
                size="sm"
                onPress={() => setShowPortalCard(!showPortalCard)}
              >
                {showPortalCard ? "Dismiss Root Portal Toast" : "Teleport Card via <Portal />"}
              </Button>
            </Inline>

            {showPortalCard && (
              <Portal>
                <Absolute bottom={30} right={30} zIndex={9999}>
                  <Box
                    p={4}
                    rounded="xl"
                    variant="elevated"
                    style={{
                      backgroundColor: "rgba(18, 20, 36, 0.96)",
                      borderWidth: 1.5,
                      borderColor: theme.colors.primary,
                      minWidth: 280,
                      shadowColor: theme.colors.primary,
                      shadowOffset: { width: 0, height: 8 },
                      shadowOpacity: 0.4,
                      shadowRadius: 16,
                      elevation: 12,
                    }}
                  >
                    <Inline justify="space-between" align="center">
                      <HStack gap={2} align="center">
                        <Center circle={10} bg={theme.colors.primary} />
                        <Text size="sm" weight="bold" color={theme.colors.foreground}>
                          Root Portal Active
                        </Text>
                      </HStack>
                      <Pressable onPress={() => setShowPortalCard(false)}>
                        <Text size="xs" weight="bold" color={theme.colors.foregroundMuted}></Text>
                      </Pressable>
                    </Inline>
                    <Text size="xs" color={theme.colors.foregroundMuted} style={{ marginTop: 6 }}>
                      This card was rendered inside &lt;Portal&gt; and mounted at the root level viewport.
                    </Text>
                  </Box>
                </Absolute>
              </Portal>
            )}
          </VStack>
        </Card.Content>
      </Card>

      {/* 10. SafeArea & KeyboardAvoidingView */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Mobile Primitives"
            title="SafeArea & KeyboardAvoidingView"
            description="Native device edge insets and keyboard elevation management."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={3}>
            <Box p={4} rounded="md" variant="bordered">
              <Inline justify="space-between" align="center">
                <VStack gap={0.5}>
                  <Text size="sm" weight="bold">SafeArea Primitive</Text>
                  <Text size="xs" color={theme.colors.foregroundMuted}>
                    Automatically manages top notches and home indicator insets.
                  </Text>
                </VStack>
                <Badge variant="outline" size="sm">iOS / Android</Badge>
              </Inline>
            </Box>

            <Box p={4} rounded="md" variant="bordered">
              <Inline justify="space-between" align="center">
                <VStack gap={0.5}>
                  <Text size="sm" weight="bold">KeyboardAvoidingView Primitive</Text>
                  <Text size="xs" color={theme.colors.foregroundMuted}>
                    Platform-adaptive keyboard offset elevation on input focus.
                  </Text>
                </VStack>
                <Badge variant="outline" size="sm">Auto Padding</Badge>
              </Inline>
            </Box>
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function TypographyView() {
  const { theme, semanticColors } = useTheme();

  return (
    <Stack gap={10}>
      <CategoryHero
        number="02"
        title="Typography & Text Hierarchy"
        description="Precision typographic scale engineered for optimal readability, strict hierarchy, high-contrast accessible tokens, and responsive editorial layout."
        tags={[{"label":"12 Typography Components","variant":"primary"},{"label":"Fluid Leading & Tracking","variant":"success"},{"label":"Dynamic Truncation","variant":"outline"}]}
      />

      {/* 1. Typographic Scale Matrix */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Scale"
            title="Typographic Scale & Weight Matrix"
            description="Proportional font scale from 4xl display titles to xs micro-annotations with optical line heights."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            {/* 4XL */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="4xl" weight="bold" tracking="tight">Display 4XL ExtraBold</Text>
              <Badge variant="outline" size="sm">36px / Leading None</Badge>
            </HStack>

            {/* 3XL */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="3xl" weight="bold" tracking="tight">Heading 3XL Bold</Text>
              <Badge variant="outline" size="sm">30px / Leading Tight</Badge>
            </HStack>

            {/* 2XL */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="2xl" weight="bold">Section Title 2XL</Text>
              <Badge variant="outline" size="sm">24px / Leading Snug</Badge>
            </HStack>

            {/* XL */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="xl" weight="semibold">Card Title XL</Text>
              <Badge variant="outline" size="sm">20px / Leading Normal</Badge>
            </HStack>

            {/* LG */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="lg" weight="medium">Lead Paragraph LG</Text>
              <Badge variant="outline" size="sm">18px / Leading Relaxed</Badge>
            </HStack>

            {/* MD */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="md" weight="regular">Body Text MD (Default)</Text>
              <Badge variant="outline" size="sm">16px / Base</Badge>
            </HStack>

            {/* SM */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="sm" color={semanticColors.foregroundMuted}>Secondary Copy SM</Text>
              <Badge variant="outline" size="sm">14px / Muted</Badge>
            </HStack>

            {/* XS */}
            <HStack justify="space-between" align="center" p={3} rounded="md" bg="surfaceSubtle">
              <Text size="xs" color={semanticColors.foregroundSubtle} tracking="wide">CAPTION & METADATA XS</Text>
              <Badge variant="outline" size="sm">12px / Tracking Wide</Badge>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Headings & Titles with Accent Bars */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Headings"
            title="Headings (Levels 1-6), Title & Subtitle Hierarchy"
            description="Semantic headings with optional vertical accent bars and level configurations."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            <VStack gap={3}>
              <Heading level={1} accentBar>Level 1 Heading with Accent Bar</Heading>
              <Heading level={2}>Level 2 Section Heading</Heading>
              <Heading level={3}>Level 3 Subsection Header</Heading>
              <Heading level={4} gradient>Level 4 Gradient Accent Heading</Heading>
            </VStack>

            <Divider thickness={1} />

            <VStack gap={2}>
              <Title variant="hero">Hero Title Preset</Title>
              <Title variant="section">Section Title Preset</Title>
              <Title variant="card">Card Title Preset</Title>
            </VStack>

            <Divider thickness={1} />

            <VStack gap={2}>
              <Subtitle variant="accent">Accent Subtitle Highlight</Subtitle>
              <Subtitle variant="muted">Muted Subtitle Hierarchy (Default)</Subtitle>
              <Subtitle variant="subtle">Subtle De-emphasized Subtitle</Subtitle>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Editorial & Long-Form Reading (Paragraphs & Lead) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Prose"
            title="Paragraphs, Lead Text & Editorial Reading"
            description="Engineered line lengths and line heights for reduced cognitive fatigue."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Paragraph lead>
              Unconfused UI reimagines mobile and cross-platform user experiences by uniting rigorous design tokens,
              high-performance React Native primitives, and zero-compromise developer ergonomics.
            </Paragraph>

            <Paragraph prose>
              When building modern applications, typography is the single most defining factor of brand perception and
              clarity. Our typographic scales are mathematically derived to ensure visual balance across OLED dark modes,
              crisp light themes, and diverse screen densities without clipping or layout drift.
            </Paragraph>

            <HStack gap={4} wrap>
              <Box p={3} rounded="md" variant="bordered" style={{ flex: 1, minWidth: 160 }}>
                <Text size="xs" weight="bold" color={semanticColors.primary}>Contrast Text</Text>
                <Text size="sm" contrast>High contrast emphasis token</Text>
              </Box>
              <Box p={3} rounded="md" variant="bordered" style={{ flex: 1, minWidth: 160 }}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>Muted Text</Text>
                <Text size="sm" muted>De-emphasized descriptive text</Text>
              </Box>
              <Box p={3} rounded="md" variant="bordered" style={{ flex: 1, minWidth: 160 }}>
                <Text size="xs" weight="bold" color={semanticColors.foreground}>Italic Text</Text>
                <Text size="sm" italic>Italicized emphasis styling</Text>
              </Box>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 4. Labels, Metadata & Captions */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Labels & Captions"
            title="Form Labels & Micro-Copy Captions"
            description="Field labels with required asterisks, optional badges, uppercase tracking, and footnote micro-copy."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={4} align="center" wrap>
              <Label required>Billing Email Address</Label>
              <Label optional>Company Tax ID</Label>
              <Label uppercase>API Secret Key</Label>
            </HStack>

            <Divider thickness={1} />

            <VStack gap={2}>
              <Caption>
                Last synchronized with Cloud Firestore: Today at 20:14:00 UTC. Changes propagate across cluster nodes.
              </Caption>
              <Caption>
                Encrypted with AES-256 GCM authenticated stream encryption.
              </Caption>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 5. Hyperlinks & Navigation Anchors */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Links"
            title="Interactive Hyperlinks & External Anchors"
            description="Universal link handlers with external indicators, underline variants, and accessible roles."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} align="center" wrap>
            <Link href="https://reactnative.dev" external variant="underline">
              React Native Documentation
            </Link>
            <Link href="https://expo.dev" external variant="subtle">
              Expo Ecosystem Guides
            </Link>
            <Link onPress={() => {}} variant="underline">
              Internal Modal Route
            </Link>
          </HStack>
        </Card.Content>
      </Card>

      {/* 6. Monospace Code Snippets */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Code"
            title="Inline & Block Code Components"
            description="Monospace syntax blocks with tokenized dark glass container and inline badges."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Inline gap={2} align="center" wrap>
              <Text size="sm">Install component primitive via:</Text>
              <Code>npx @unconfused-ui/cli add button</Code>
              <Code>pnpm run typecheck</Code>
            </Inline>

            {/* Block Code */}
            <Code block>
{`import { Button, Card } from "@unconfused-ui/core";
import { HStack, Text, VStack } from "@unconfused-ui/primitives";

export function UserCard({ name, role }: { name: string; role: string }) {
  return (
    <Card variant="glass" accentBar>
      <VStack gap={2}>
        <Text size="lg" weight="bold">{name}</Text>
        <Text size="xs" color="foregroundMuted">{role}</Text>
      </VStack>
    </Card>
  );
}`}
            </Code>
          </VStack>
        </Card.Content>
      </Card>

      {/* 7. Blockquotes & Citations */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Blockquotes"
            title="Quoted Statements & Attributions"
            description="Indented quote callouts with semantic accent borders and author citations."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Blockquote author="Antoine de Saint-Exupéry" cite="Airman's Odyssey">
              Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
            </Blockquote>

            <Blockquote variant="accent" author="Alan Kay" cite="Turing Award Laureate">
              Simple things should be simple, complex things should be possible.
            </Blockquote>
          </VStack>
        </Card.Content>
      </Card>

      {/* 8. Interactive TruncatedText */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="TruncatedText"
            title="Smart Multi-Line Truncation & Interactive Toggle"
            description="Enforces maximum visible lines with an interactive 'Show more / Show less' expander."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={3}>
            <Box p={4} rounded="lg" variant="bordered">
              <TruncatedText lines={2} expandable size="sm" leading="relaxed">
                Unconfused UI is designed from the ground up to solve the fragmented ecosystem in React Native
                and Expo development. By maintaining strict package boundary integrity, eliminating web DOM
                dependencies, and adopting a token-first architecture, engineering teams can build high-velocity
                applications that scale without friction across iOS, Android, and Web platforms.
              </TruncatedText>
            </Box>
          </VStack>
        </Card.Content>
      </Card>

      {/* 9. Chromatic Gradient Texts */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="GradientText"
            title="Vibrant Chromatic Accent Titles"
            description="High-contrast chromatic text styling for hero marketing and key metrics."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box p={4} rounded="lg" variant="bordered" style={{ flex: 1, minWidth: 150 }}>
              <GradientText variant="violet">Electric Violet</GradientText>
              <Text size="xs" color={semanticColors.foregroundMuted}>Primary Brand Accent</Text>
            </Box>

            <Box p={4} rounded="lg" variant="bordered" style={{ flex: 1, minWidth: 150 }}>
              <GradientText variant="cyan">Neon Cyan</GradientText>
              <Text size="xs" color={semanticColors.foregroundMuted}>Real-Time Telemetry</Text>
            </Box>

            <Box p={4} rounded="lg" variant="bordered" style={{ flex: 1, minWidth: 150 }}>
              <GradientText variant="emerald">Emerald Green</GradientText>
              <Text size="xs" color={semanticColors.foregroundMuted}>Success & Health</Text>
            </Box>

            <Box p={4} rounded="lg" variant="bordered" style={{ flex: 1, minWidth: 150 }}>
              <GradientText variant="amber">Sunset Amber</GradientText>
              <Text size="xs" color={semanticColors.foregroundMuted}>Warning & Notice</Text>
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 10. Real-World Editorial Card Composition */}
      <Card variant="glass" accentBar>
        <Card.Header>
          <SectionHeader
            tag="In-Action"
            title="Complete Typographic Composition"
            description="Real-world assembly demonstrating harmonious hierarchy between headings, labels, code, and links."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={3}>
            <Inline justify="space-between" align="center">
              <Label uppercase>Article Series #04</Label>
              <Caption>5 min read • Aug 2026</Caption>
            </Inline>

            <Heading level={2}>Architecting Universal Design Systems with React Native</Heading>
            <Subtitle variant="muted">
              Why separating layout primitives from composite components produces 10x maintainability.
            </Subtitle>

            <Paragraph prose>
              When scaling design systems across thousands of engineers, hardcoded values and fragile DOM
              assumptions cause systemic debt. A tokenized primitive layer acts as the unified contract.
            </Paragraph>

            <Inline gap={2} align="center">
              <Text size="xs" weight="bold">Implemented via:</Text>
              <Code>@unconfused-ui/primitives</Code>
            </Inline>

            <Divider thickness={1} />

            <Inline justify="space-between" align="center">
              <Inline align="center" gap={2}>
                <Avatar fallback="AG" size="sm" status="online" />
                <Text size="xs" weight="bold">Antigravity Team</Text>
              </Inline>
              <Link href="https://github.com/unconfused-ui" external>
                Read Full Paper
              </Link>
            </Inline>
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function ButtonsCategoryView() {
  const { theme, semanticColors } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSimulateSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <Stack gap={10}>
      <CategoryHero
        number="03"
        title="Button Architecture & Trigger Controls"
        description="High-performance interactive triggers with loading physics, icon slot composition, toggle states, segmented groups, and accessible touch targets."
        tags={[{"label":"8 Button Primitives","variant":"primary"},{"label":"Haptic States","variant":"success"},{"label":"Min 44x44pt Target","variant":"outline"}]}
      />

      {/* 1. All 7 Semantic Variants */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Variants"
            title="Semantic Button Variants"
            description="Primary violet glow, subtle surface, crimson destructive, outline, ghost, frosted glass, and tinted subtle."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={3} wrap>
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost Action</Button>
            <Button variant="glass">Glass Button</Button>
            <Button variant="subtle">Subtle Tinted</Button>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. Size Scale Matrix (XS to XL) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Scale"
            title="Proportional Button Size Scales"
            description="From compact 28pt table buttons (XS) to 60pt hero call-to-actions (XL)."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={3} align="center" wrap>
            <Button size="xs" variant="primary">XS (28pt)</Button>
            <Button size="sm" variant="primary">SM (36pt)</Button>
            <Button size="md" variant="primary">MD (44pt Default)</Button>
            <Button size="lg" variant="primary">LG (52pt)</Button>
            <Button size="xl" variant="primary">XL (60pt Hero)</Button>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. Icon Buttons & Geometric Shapes */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="IconButtons"
            title="IconButtons with Circle, Rounded & Square Geometries"
            description="High-precision icon buttons with notification badges and semantic colorways."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={3} align="center" wrap>
              {/* Circle primary with badge */}
              <IconButton
                icon={<Text size="sm"></Text>}
                accessibilityLabel="Energy Surge"
                variant="primary"
                shape="circle"
                badge={<Dot color="#34D399" size={8} />}
              />

              {/* Rounded secondary with counter badge */}
              <IconButton
                icon={<Text size="sm"></Text>}
                accessibilityLabel="Notifications"
                variant="secondary"
                shape="rounded"
                badge={<Badge variant="danger" size="sm" style={{ paddingHorizontal: 4, paddingVertical: 1 }}>3</Badge>}
              />

              {/* Destructive outline */}
              <IconButton
                icon={<Text size="sm">️</Text>}
                accessibilityLabel="Delete"
                variant="destructive"
                shape="circle"
              />

              {/* Outline square */}
              <IconButton
                icon={<Text size="sm">️</Text>}
                accessibilityLabel="Settings"
                variant="outline"
                shape="square"
              />

              {/* Glass rounded */}
              <IconButton
                icon={<Text size="sm"></Text>}
                accessibilityLabel="Bookmark"
                variant="glass"
                shape="rounded"
              />

              {/* Ghost minimal */}
              <IconButton
                icon={<Text size="sm"></Text>}
                accessibilityLabel="Search"
                variant="ghost"
                shape="circle"
              />
            </HStack>

            <Inline gap={2} align="center">
              <Text size="xs" color={semanticColors.foregroundMuted}>Icon Size Scale:</Text>
              {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
                <IconButton
                  key={s}
                  size={s}
                  variant="primary"
                  icon={<Text size="xs"></Text>}
                  accessibilityLabel={`Size ${s}`}
                />
              ))}
            </Inline>
          </VStack>
        </Card.Content>
      </Card>

      {/* 4. Interactive States (Loading, Disabled & LoadingText) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="States"
            title="Interactive States: Loading Spinners & Disabled Toggles"
            description="Visual indicators for ongoing network requests with busy accessibility state."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={3} align="center">
              <Button size="sm" variant="outline" onPress={() => setIsLoading(!isLoading)}>
                Toggle Loading: {isLoading ? "ON" : "OFF"}
              </Button>
              <Button size="sm" variant="outline" onPress={() => setIsDisabled(!isDisabled)}>
                Toggle Disabled: {isDisabled ? "ON" : "OFF"}
              </Button>
            </HStack>

            <HStack gap={3} wrap>
              <Button
                variant="primary"
                loading={isLoading}
                loadingText="Deploying..."
                disabled={isDisabled}
              >
                Deploy Application
              </Button>

              <Button
                variant="secondary"
                loading={isLoading}
                disabled={isDisabled}
              >
                Sync Database
              </Button>

              <Button
                variant="destructive"
                loading={isLoading}
                loadingText="Terminating..."
                disabled={isDisabled}
              >
                Delete Cluster
              </Button>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 5. Icons, Badges & Pill Shapes */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Slots"
            title="Left & Right Icon Slots, Badges & Pill Shapes"
            description="Decorate buttons with icons and status tags while preserving visual balance."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={3} wrap>
            <Button
              variant="primary"
              leftIcon={<Text size="sm"></Text>}
            >
              Launch Engine
            </Button>

            <Button
              variant="secondary"
              rightIcon={<Text size="sm">→</Text>}
            >
              Next Milestone
            </Button>

            <Button
              variant="outline"
              rounded="full"
              leftIcon={<Text size="xs"></Text>}
              badge={<Badge variant="primary" size="sm">PRO</Badge>}
            >
              Upgrade Plan
            </Button>
          </HStack>
        </Card.Content>
      </Card>

      {/* 6. ButtonGroup (Spaced vs Attached Segmented) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="ButtonGroup"
            title="Button Groups: Spaced vs Attached Segmented"
            description="Organize related actions with continuous borders or modular gaps."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            {/* Attached Segmented Group */}
            <VStack gap={1}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Attached Segmented Group (attached=true)
              </Text>
              <ButtonGroup attached>
                <Button variant="secondary">Day</Button>
                <Button variant="primary">Week</Button>
                <Button variant="secondary">Month</Button>
                <Button variant="secondary">Year</Button>
              </ButtonGroup>
            </VStack>

            {/* Standard Spaced Group */}
            <VStack gap={1}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Standard Spaced Group (gap=3)
              </Text>
              <ButtonGroup gap={3}>
                <Button variant="outline">Discard</Button>
                <Button variant="secondary">Save Draft</Button>
                <Button variant="primary">Publish Now</Button>
              </ButtonGroup>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 7. Specialized Buttons: Back, Close, Link & Submit */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Specialized"
            title="Specialized Buttons: Back, Close, Link & Submit"
            description="Pre-packaged buttons for common navigation and form submission flows."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={4} align="center" wrap>
              {/* Back Button */}
              <BackButton label="Back to Settings" />

              {/* Close Buttons (SM, MD, LG) */}
              <Inline gap={2} align="center">
                <Text size="xs" color={semanticColors.foregroundMuted}>Close sizes:</Text>
                <CloseButton size="sm" />
                <CloseButton size="md" />
                <CloseButton size="lg" />
              </Inline>

              {/* Link Button */}
              <LinkButton underline>
                Forgot Password?
              </LinkButton>
            </HStack>

            {/* Submit Button with Simulated Async Form Submission */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                SubmitButton with Loading State (Click to Test):
              </Text>
              <SubmitButton
                submitting={isSubmitting}
                onPress={handleSimulateSubmit}
              >
                Confirm Payment ($99.00)
              </SubmitButton>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 8. Floating Action Button (FAB) Gallery */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="FAB"
            title="Floating Action Buttons (Standard & Extended)"
            description="High-elevation action buttons floating above interface content."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} align="center" wrap>
            {/* Standard Circular FAB */}
            <Box
              p={4}
              rounded="lg"
              variant="bordered"
              style={{ minWidth: 200, alignItems: "center", gap: 8 }}
            >
              <Center circle={56} bg={theme.colors.primary} shadow="lg" borderWidth={1} borderColor="rgba(255,255,255,0.2)">
                <Text size="xl" color="#FFF">＋</Text>
              </Center>
              <Text size="xs" weight="bold">Circular FAB (56x56)</Text>
            </Box>

            {/* Extended FAB with label */}
            <Box
              p={4}
              rounded="lg"
              variant="bordered"
              style={{ minWidth: 240, alignItems: "center", gap: 8 }}
            >
              <Button
                variant="primary"
                rounded="full"
                size="md"
                leftIcon={<Text size="sm">️</Text>}
                style={{
                  shadowColor: semanticColors.primary,
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.45,
                  shadowRadius: 12,
                }}
              >
                Compose New Note
              </Button>
              <Text size="xs" weight="bold">Extended FAB with Label</Text>
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 9. Real-World Production Composition */}
      <Card variant="glass" accentBar>
        <Card.Header>
          <SectionHeader
            tag="In-Action"
            title="Production Modal & Action Bar Flow"
            description="Real-world assembly demonstrating primary, secondary, destructive, and dismiss buttons."
          />
        </Card.Header>
        <Card.Content>
          <Box p={5} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.08)">
            <VStack gap={4}>
              <Inline justify="space-between" align="center">
                <HStack gap={2} align="center">
                  <Center circle={32} bg="rgba(244, 63, 94, 0.15)" borderWidth={1} borderColor="rgba(244, 63, 94, 0.3)">
                    <Text size="xs">️</Text>
                  </Center>
                  <VStack gap={0}>
                    <Text size="sm" weight="bold">Revoke API Production Access</Text>
                    <Text size="xs" color={semanticColors.foregroundMuted}>
                      This action will invalidate all current webhook sessions immediately.
                    </Text>
                  </VStack>
                </HStack>
                <CloseButton size="sm" />
              </Inline>

              <Divider thickness={1} />

              <Inline justify="flex-end" gap={2}>
                <Button size="sm" variant="ghost">Cancel</Button>
                <Button size="sm" variant="outline">Backup Keys</Button>
                <Button size="sm" variant="destructive" leftIcon={<Text size="xs"></Text>}>
                  Confirm Revoke
                </Button>
              </Inline>
            </VStack>
          </Box>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function InputsCategoryView() {
  const { theme, semanticColors } = useTheme();

  // Interactive state hooks
  const [textVal, setTextVal] = useState("Antigravity Engineer");
  const [searchVal, setSearchVal] = useState("");
  const [passVal, setPassVal] = useState("Secur3P@ssw0rd");
  const [textareaVal, setTextareaVal] = useState("Building the next generation cross-platform UI framework with React Native and Expo.");
  const [numberVal, setNumberVal] = useState(4);
  const [emailVal, setEmailVal] = useState("alex@unconfused.design");
  const [phoneVal, setPhoneVal] = useState("(555) 349-2091");
  const [otpVal, setOtpVal] = useState("492081");
  const [pinVal, setPinVal] = useState("1234");
  const [currencyVal, setCurrencyVal] = useState("1,450.00");
  const [maskedVal, setMaskedVal] = useState("123.456.789-00");

  return (
    <Stack gap={10}>
      <CategoryHero
        number="04"
        title="Input Architecture & Form Entry Controls"
        description="Precision text fields, security PIN/OTP verification cells, password strength analyzers, numeric steppers, and pattern-masked inputs with accessible focus rings."
        tags={[{"label":"13 Input Primitives","variant":"primary"},{"label":"Password Strength Analyzer","variant":"success"},{"label":"Discrete OTP / PIN Matrix","variant":"outline"}]}
      />

      {/* 1. Base Input & Size Scale */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Scale"
            title="Base Input & Proportional Sizes (SM, MD, LG)"
            description="Clearable inputs with responsive heights from compact 38pt to large 54pt touch targets."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Input
              size="sm"
              label="Compact Input (Size SM - 38pt)"
              placeholder="Filter table rows..."
              clearable
            />

            <Input
              size="md"
              label="Standard Input (Size MD - 46pt Default)"
              placeholder="Enter full name"
              value={textVal}
              onChangeText={setTextVal}
              clearable
              helperText="Shown on public profile header"
            />

            <Input
              size="lg"
              label="Hero Input (Size LG - 54pt)"
              placeholder="Search workspaces and repositories"
              leftIcon={<Text size="sm"></Text>}
              clearable
            />
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Variants Matrix: Default, Glass, Filled & Bordered */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Variants"
            title="Visual Surface Variants"
            description="Default dark surface, translucent glass, filled subtle, and transparent bordered."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 220 }}>
              <Input
                variant="default"
                label="Default Variant"
                placeholder="Dark surface fill"
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 220 }}>
              <Input
                variant="glass"
                label="Glass Variant"
                placeholder="Translucent backdrop"
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 220 }}>
              <Input
                variant="filled"
                label="Filled Variant"
                placeholder="Light tint surface"
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 220 }}>
              <Input
                variant="bordered"
                label="Bordered Variant"
                placeholder="Transparent stroke"
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. Validation States (Success & Error Feedback) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Validation"
            title="Validation States & Helper Guidance"
            description="Real-time feedback with error messages, success checks, and disabled states."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 240 }}>
              <Input
                label="Username (Error State)"
                value="aliss @"
                error="Usernames cannot contain spaces or special symbols"
                required
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 240 }}>
              <Input
                label="Slug ID (Success State)"
                value="unconfused-ui"
                success
                rightIcon={<Text size="xs" color="#10B981"></Text>}
                helperText="Domain slug available for reservation"
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 240 }}>
              <Input
                label="Organization UUID (Disabled)"
                value="org_89f92a10c"
                disabled
                helperText="Locked by administrative workspace policy"
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 4. SearchInput & PasswordInput with Strength Meter */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Search & Security"
            title="SearchInput & PasswordInput with Live Security Meter"
            description="Interactive clear buttons, eye toggles, and multi-tier password strength bars."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <SearchInput
              label="Global Search"
              placeholder="Search components, tokens, recipes..."
              value={searchVal}
              onChangeText={setSearchVal}
            />

            <PasswordInput
              label="Master Password"
              placeholder="Choose a robust passphrase"
              value={passVal}
              onChangeText={setPassVal}
              showStrengthMeter
              required
            />
          </VStack>
        </Card.Content>
      </Card>

      {/* 5. Textarea with Character Counter */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Textarea"
            title="Textarea Multiline with Character Counter"
            description="Configurable rows with character limiter and scrollable multiline editing."
          />
        </Card.Header>
        <Card.Content>
          <Textarea
            label="Project Description"
            placeholder="Describe the architectural goals of this application..."
            rows={4}
            maxLength={180}
            showCount
            value={textareaVal}
            onChangeText={setTextareaVal}
          />
        </Card.Content>
      </Card>

      {/* 6. NumberInput with Interactive Steppers */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="NumberInput"
            title="NumberInput with Stepper Buttons"
            description="Bound numeric input with increment (+) and decrement (-) controls."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} align="center" wrap>
            <Box style={{ width: 180 }}>
              <NumberInput
                label="Cluster Nodes"
                value={numberVal}
                onChangeValue={setNumberVal}
                min={1}
                max={16}
                step={1}
              />
            </Box>
            <VStack gap={0.5}>
              <Text size="xs" weight="bold">Active Node Pool: {numberVal} Instances</Text>
              <Text size="xs" color={semanticColors.foregroundMuted}>
                Min: 1 node • Max: 16 nodes • Step: 1 node
              </Text>
            </VStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 7. Email, Phone & Currency Inputs */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Domain Inputs"
            title="EmailInput, PhoneInput & CurrencyInput"
            description="Specialized keyboard configurations and domain-specific prefix tokens."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 200 }}>
              <EmailInput
                label="Work Email"
                value={emailVal}
                onChangeText={setEmailVal}
                required
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 200 }}>
              <PhoneInput
                label="Direct Phone"
                countryPrefix="+1"
                value={phoneVal}
                onChangeText={setPhoneVal}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 160 }}>
              <CurrencyInput
                label="Monthly Budget"
                currencySymbol="$"
                value={currencyVal}
                onChangeText={setCurrencyVal}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 8. Discrete Security Cells: OTPInput, PinInput & CodeInput */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="OTP & PIN"
            title="OTPInput, PinInput & CodeInput Discrete Cell Matrix"
            description="Discrete input cells with active focus rings, masked PIN bullets, and verification codes."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            {/* 6-Digit OTP Verification */}
            <VStack gap={2}>
              <Label>6-Digit 2FA Verification Code (OTPInput / CodeInput)</Label>
              <OTPInput length={6} value={otpVal} onChangeText={setOtpVal} />
              <Caption>Enter the 6-digit authenticator code sent to your phone</Caption>
            </VStack>

            <Divider thickness={1} />

            {/* 4-Digit Masked Security PIN */}
            <VStack gap={2}>
              <Label>4-Digit Security PIN (PinInput - Masked)</Label>
              <PinInput length={4} value={pinVal} onChangeText={setPinVal} />
              <Caption>Discrete masked bullet points for secure banking authorization</Caption>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 9. MaskedInput Pattern */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Masked"
            title="MaskedInput Pattern Formatting"
            description="Enforces strict document, telephone, and postal code pattern masks."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 240 }}>
              <MaskedInput
                label="National ID / Tax Identification"
                mask="999.999.999-99"
                value={maskedVal}
                onChangeText={setMaskedVal}
                leftIcon={<Text size="xs">🪪</Text>}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 240 }}>
              <MaskedInput
                label="Credit Card Expiry & CVV"
                mask="MM / YY"
                placeholder="12 / 28"
                leftIcon={<Text size="xs"></Text>}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 10. Real-World Authentication Form Assembly */}
      <Card variant="glass" accentBar>
        <Card.Header>
          <SectionHeader
            tag="In-Action"
            title="Complete Production Registration Card"
            description="Real-world assembly combining inputs, password meters, telephone, and submission actions."
          />
        </Card.Header>
        <Card.Content>
          <Box p={5} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.08)">
            <VStack gap={4}>
              <VStack gap={0.5}>
                <Heading level={3}>Create Developer Account</Heading>
                <Subtitle variant="muted">Get started with free enterprise API tier.</Subtitle>
              </VStack>

              <Divider thickness={1} />

              <HStack gap={3} wrap>
                <Box style={{ flex: 1, minWidth: 180 }}>
                  <Input label="First Name" placeholder="Alex" required />
                </Box>
                <Box style={{ flex: 1, minWidth: 180 }}>
                  <Input label="Last Name" placeholder="Vance" required />
                </Box>
              </HStack>

              <EmailInput label="Company Email" placeholder="alex.vance@blackmesa.gov" required />
              <PasswordInput label="Choose Password" placeholder="••••••••••••" showStrengthMeter value="Secur3P@ssw0rd!" required />

              <SubmitButton fullWidth>
                Complete Registration & Setup Keys
              </SubmitButton>
            </VStack>
          </Box>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function SelectionCategoryView() {
  const { theme, semanticColors } = useTheme();

  // Interactive selection states
  const [chkSingle, setChkSingle] = useState(true);
  const [chkGroup, setChkGroup] = useState<string[]>(["analytics", "marketing"]);
  const [radioVal, setRadioVal] = useState("enterprise");
  const [switchPush, setSwitchPush] = useState(true);
  const [switchDark, setSwitchDark] = useState(true);
  const [toggleActive, setToggleActive] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("center");
  const [segmentedVal, setSegmentedVal] = useState("weekly");
  const [selectVal, setSelectVal] = useState("us-east");
  const [multiSelectVal, setMultiSelectVal] = useState<string[]>(["react", "expo", "native"]);
  const [comboboxVal, setComboboxVal] = useState("antigravity");
  const [sliderVal, setSliderVal] = useState(72);
  const [rangeVal, setRangeVal] = useState<[number, number]>([25, 75]);

  const regionOptions = [
    { label: "US East (N. Virginia)", value: "us-east" },
    { label: "US West (Oregon)", value: "us-west" },
    { label: "Europe (Frankfurt)", value: "eu-central" },
    { label: "South America (São Paulo)", value: "sa-east" },
    { label: "Asia Pacific (Tokyo)", value: "ap-northeast" },
  ];

  const frameworkOptions = [
    { label: "React Native", value: "react" },
    { label: "Expo Router", value: "expo" },
    { label: "TypeScript", value: "native" },
    { label: "Turborepo", value: "turbo" },
    { label: "Tailwind / Gluestack", value: "tailwind" },
  ];

  const projectOptions = [
    { label: "Antigravity UI Architecture", value: "antigravity" },
    { label: "Unconfused Design Tokens", value: "tokens" },
    { label: "Hermes Bytecode Engine", value: "hermes" },
    { label: "Cloud Firestore Mesh", value: "firestore" },
  ];

  return (
    <Stack gap={10}>
      <CategoryHero
        number="05"
        title="Selection Controls & Multi-Choice State"
        description="Accessible binary, multi-choice, and range controls with group state management, custom spring physics, and keyboard navigation support."
        tags={[{"label":"15 Selection Primitives","variant":"primary"},{"label":"Dual-Thumb Range Slider","variant":"success"},{"label":"WAI-ARIA Radiogroup Pattern","variant":"outline"}]}
      />

      {/* 1. Checkboxes & Checkbox Groups */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Checkboxes"
            title="Checkboxes & Multi-Option Checkbox Groups"
            description="Individual check controls with checked, unchecked, and disabled states."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={4} align="center" wrap>
              <Checkbox
                label="I agree to developer terms and SLA conditions"
                checked={chkSingle}
                onCheckedChange={setChkSingle}
              />
              <Checkbox
                label="Disabled Locked Checkbox"
                checked
                disabled
              />
            </HStack>

            <Divider thickness={1} />

            <VStack gap={2}>
              <Label>Notification Channels (CheckboxGroup):</Label>
              <CheckboxGroup
                value={chkGroup}
                onValueChange={setChkGroup}
                options={[
                  { label: "System Telemetry Alerts", value: "analytics" },
                  { label: "Product & Marketing Announcements", value: "marketing" },
                  { label: "Billing & Invoicing Notifications", value: "billing" },
                  { label: "Legacy Webhook Notifications (Deprecated)", value: "legacy", disabled: true },
                ]}
              />
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Radios & Radio Groups */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Radios"
            title="Radio Groups & Mutual Exclusion Choices"
            description="Context-driven radio option sets with glow rings and accessible roles."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={3}>
            <Label>Selected Subscription Tier: <Text weight="bold" color={semanticColors.primary}>{radioVal.toUpperCase()}</Text></Label>
            <RadioGroup value={radioVal} onValueChange={setRadioVal}>
              <Radio value="starter" label="Starter Tier — Free for individual developers ($0/mo)" />
              <Radio value="pro" label="Professional Tier — Enhanced build concurrency ($29/mo)" />
              <Radio value="enterprise" label="Enterprise Grid — Unlimited clusters & 24/7 dedicated support ($299/mo)" />
              <Radio value="legacy" label="Archived Tier (Unavailable)" disabled />
            </RadioGroup>
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Switches & Toggles */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Switches & Toggles"
            title="Toggle Switches & Pressable State Buttons"
            description="Smooth binary switch controls and single button toggles with active indicators."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <HStack gap={6} align="center" wrap>
              <Switch
                label="Real-time Push Notifications"
                checked={switchPush}
                onCheckedChange={setSwitchPush}
              />
              <Switch
                label="OLED Deep Black Theme"
                checked={switchDark}
                onCheckedChange={setSwitchDark}
              />
              <Switch
                label="Offline Cache (Locked)"
                checked={false}
                disabled
              />
            </HStack>

            <Divider thickness={1} />

            <HStack gap={3} align="center" wrap>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>Single Toggle Buttons:</Text>
              <Toggle pressed={toggleActive} onPressedChange={setToggleActive}>
                {toggleActive ? " Bookmarked" : " Bookmark"}
              </Toggle>
              <Toggle size="sm">Pin View</Toggle>
              <Toggle size="lg" pressed>Hero Toggle (LG)</Toggle>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 4. ToggleGroup & SegmentedControl */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Segmented Controls"
            title="SegmentedControl & ToggleGroup Toolbars"
            description="iOS-style segmented pill tabs and multi-button formatting groups."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            {/* SegmentedControl */}
            <VStack gap={2}>
              <Label>Aggregation Interval (SegmentedControl):</Label>
              <SegmentedControl
                value={segmentedVal}
                onValueChange={setSegmentedVal}
                options={[
                  { label: "Hourly", value: "hourly" },
                  { label: "Daily", value: "daily" },
                  { label: "Weekly", value: "weekly" },
                  { label: "Monthly", value: "monthly" },
                  { label: "Yearly", value: "yearly" },
                ]}
              />
            </VStack>

            <Divider thickness={1} />

            {/* ToggleGroup Toolbar */}
            <VStack gap={2}>
              <Label>Text Alignment Toolbar (ToggleGroup):</Label>
              <ToggleGroup
                type="single"
                value={toggleGroupVal}
                onValueChange={setToggleGroupVal}
                options={[
                  { label: "Left", value: "left", icon: <Text size="xs">⇤</Text> },
                  { label: "Center", value: "center", icon: <Text size="xs">≡</Text> },
                  { label: "Right", value: "right", icon: <Text size="xs">⇥</Text> },
                  { label: "Justify", value: "justify", icon: <Text size="xs"></Text> },
                ]}
              />
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 5. Select & MultiSelect Dropdowns */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Dropdowns"
            title="Select & MultiSelect Popover Panels"
            description="Single option dropdown selectors and multi-tag chip selection modals."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 240 }}>
              <Select
                label="Server Deployment Region"
                value={selectVal}
                onValueChange={setSelectVal}
                options={regionOptions}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 240 }}>
              <MultiSelect
                label="Selected Framework Stacks"
                value={multiSelectVal}
                onValueChange={setMultiSelectVal}
                options={frameworkOptions}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 6. Combobox, Autocomplete & Picker */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Combobox"
            title="Searchable Combobox & Autocomplete Query Filter"
            description="Type-ahead search input with instant option dropdown filter."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Combobox
              label="Active Project Workspace (Combobox / Autocomplete)"
              placeholder="Search or pick repository workspace..."
              value={comboboxVal}
              onValueChange={setComboboxVal}
              options={projectOptions}
            />
          </VStack>
        </Card.Content>
      </Card>

      {/* 7. Continuous Slider & RangeSlider */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Sliders"
            title="Continuous Track Slider & RangeSlider Interval"
            description="Track sliders with live percentage indicators and dual-thumb boundary ranges."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            {/* Single Slider */}
            <VStack gap={2}>
              <Slider
                label="Audio Master Volume"
                value={sliderVal}
                onValueChange={setSliderVal}
              />
              <Caption>Click on the track to cycle test values in real-time</Caption>
            </VStack>

            <Divider thickness={1} />

            {/* RangeSlider */}
            <VStack gap={2}>
              <RangeSlider
                label="Price Filter Range ($ USD)"
                value={rangeVal}
                onValueChange={setRangeVal}
                min={0}
                max={100}
              />
              <Caption>Range selected: ${rangeVal[0]}.00 to ${rangeVal[1]}.00</Caption>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 8. Real-World Filter & Configuration Surface */}
      <Card variant="glass" accentBar>
        <Card.Header>
          <SectionHeader
            tag="In-Action"
            title="Complete System Preferences Control Center"
            description="Harmonious production assembly demonstrating checkboxes, switches, selects, and sliders."
          />
        </Card.Header>
        <Card.Content>
          <Box p={5} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.08)">
            <VStack gap={4}>
              <Inline justify="space-between" align="center">
                <VStack gap={0}>
                  <Heading level={3}>Cloud Cluster Deployment Config</Heading>
                  <Subtitle variant="muted">Manage environment parameters and network endpoints.</Subtitle>
                </VStack>
                <Badge variant="success" dot size="sm">Cluster Online</Badge>
              </Inline>

              <Divider thickness={1} />

              <Select label="Compute Region" value={selectVal} onValueChange={setSelectVal} options={regionOptions} />

              <HStack justify="space-between" align="center" p={3} rounded="md" bg="rgba(255,255,255,0.03)">
                <VStack gap={0.5}>
                  <Text size="sm" weight="bold">Automatic Scale-out</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>Spawn replicas when CPU load exceeds threshold</Text>
                </VStack>
                <Switch checked={switchPush} onCheckedChange={setSwitchPush} />
              </HStack>

              <Slider label="CPU Load Threshold Trigger" value={sliderVal} onValueChange={setSliderVal} />

              <Inline justify="flex-end" gap={3} style={{ marginTop: 8 }}>
                <Button variant="ghost" size="sm">Reset Defaults</Button>
                <Button variant="primary" size="sm">Apply Cluster Rules</Button>
              </Inline>
            </VStack>
          </Box>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function FormsCategoryView() {
  const { theme, semanticColors } = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleValidateAndSubmit = (values: Record<string, any>) => {
    const errors: Record<string, string> = {};
    if (!values.companyName) errors.companyName = "Company name is required";
    if (!values.adminEmail || !values.adminEmail.includes("@")) errors.adminEmail = "Enter a valid administrative email";
    if (!values.region) errors.region = "Deployment region must be selected";

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  return (
    <Stack gap={10}>
      <CategoryHero
        number="06"
        title="Form Architecture & Validation State Machine"
        description="Composite form layout infrastructure with structured label attachment, reactive error state injection, inline descriptions, and section boundaries."
        tags={[{"label":"9 Form Primitives","variant":"primary"},{"label":"Formik / React Hook Form Ready","variant":"success"},{"label":"WCAG 3.3.1 Error Identification","variant":"outline"}]}
      />

      {/* 1. Form Section & Field Groups */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Structure"
            title="FormSection, FieldGroup & FormDescription"
            description="Organize large forms into logical subsections with descriptive metadata."
          />
        </Card.Header>
        <Card.Content>
          <Form
            initialValues={{
              companyName: "Acme Quantum Technologies",
              adminEmail: "security@acmequantum.com",
              billingCity: "San Francisco",
              billingState: "CA",
              billingZip: "94107",
              serverNodes: "8",
            }}
            onSubmit={handleValidateAndSubmit}
          >
            <VStack gap={6}>
              {/* Organization Section */}
              <FormSection title="1. Organization & Domain Profile">
                <FormDescription>
                  This metadata will appear on your public API contract and invoice headers.
                </FormDescription>

                <HStack gap={4} wrap>
                  <Box style={{ flex: 1, minWidth: 240 }}>
                    <Form.Item name="companyName">
                      {({ value, onChangeText }) => (
                        <VStack gap={1.5}>
                          <FormLabel>Company Legal Entity Name</FormLabel>
                          <FormControl>
                            <Input
                              value={value}
                              onChangeText={onChangeText}
                              placeholder="e.g. Acme Corp Inc."
                              required
                            />
                          </FormControl>
                          <FormDescription>Official legal entity as registered with IRS/tax authorities.</FormDescription>
                        </VStack>
                      )}
                    </Form.Item>
                  </Box>

                  <Box style={{ flex: 1, minWidth: 240 }}>
                    <Form.Item name="adminEmail">
                      {({ value, onChangeText }) => (
                        <VStack gap={1.5}>
                          <FormLabel>Security Lead Email</FormLabel>
                          <FormControl>
                            <Input
                              value={value}
                              onChangeText={onChangeText}
                              placeholder="admin@domain.com"
                              keyboardType="email-address"
                              required
                            />
                          </FormControl>
                          <FormDescription>Direct emergency contact for CVE security advisories.</FormDescription>
                        </VStack>
                      )}
                    </Form.Item>
                  </Box>
                </HStack>
              </FormSection>

              <Divider thickness={1} />

              {/* Multi-Column FieldGroup */}
              <FormSection title="2. Billing Address (FieldGroup Multi-Column)">
                <FieldGroup>
                  <HStack gap={3} wrap>
                    <Box style={{ flex: 2, minWidth: 160 }}>
                      <Form.Item name="billingCity">
                        {({ value, onChangeText }) => (
                          <VStack gap={1}>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input value={value} onChangeText={onChangeText} placeholder="City" />
                            </FormControl>
                          </VStack>
                        )}
                      </Form.Item>
                    </Box>

                    <Box style={{ flex: 1, minWidth: 100 }}>
                      <Form.Item name="billingState">
                        {({ value, onChangeText }) => (
                          <VStack gap={1}>
                            <FormLabel>State / Region</FormLabel>
                            <FormControl>
                              <Input value={value} onChangeText={onChangeText} placeholder="State" />
                            </FormControl>
                          </VStack>
                        )}
                      </Form.Item>
                    </Box>

                    <Box style={{ flex: 1, minWidth: 100 }}>
                      <Form.Item name="billingZip">
                        {({ value, onChangeText }) => (
                          <VStack gap={1}>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input value={value} onChangeText={onChangeText} placeholder="ZIP" />
                            </FormControl>
                          </VStack>
                        )}
                      </Form.Item>
                    </Box>
                  </HStack>
                </FieldGroup>
              </FormSection>

              <Divider thickness={1} />

              {/* Error Message Demonstration */}
              <VStack gap={2}>
                <FormLabel>System Feedback & Error Handling</FormLabel>
                <FormError>
                  Billing validation alert: Cardholder address must match bank billing statement exactly.
                </FormError>
                <FormMessage>
                  Automatic tax calculation enabled via Stripe Tax integration.
                </FormMessage>
              </VStack>

              {formSubmitted && (
                <Box p={4} rounded="lg" bg="rgba(16, 185, 129, 0.15)" borderWidth={1} borderColor="rgba(16, 185, 129, 0.35)">
                  <Text size="sm" weight="bold" color="#10B981">
                     Form validated and submitted successfully!
                  </Text>
                </Box>
              )}

              <Inline justify="flex-end" gap={3}>
                <Button variant="ghost">Cancel</Button>
                <SubmitButton fullWidth={false}>Save Form Configurations</SubmitButton>
              </Inline>
            </VStack>
          </Form>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function FeedbackCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const [progressVal, setProgressVal] = useState(68);

  const handleTriggerToast = (variant: "default" | "success" | "destructive") => {
    toast({
      title: variant === "success" ? "Deployment Successful" : variant === "destructive" ? "Cluster Terminated" : "System Update",
      description: "Operation completed clean across 4 cloud cluster nodes.",
      variant,
      duration: 3500,
    });
  };

  return (
    <Stack gap={10}>
      <CategoryHero
        number="07"
        title="Feedback Systems, Alerts & Loading Indicators"
        description="Urgent notices, non-blocking toast notifications, inline callouts, snackbars, and progress meters engineered for instant cognitive clarity."
        tags={[{"label":"18 Feedback Primitives","variant":"primary"},{"label":"Portal-Driven Toast System","variant":"success"},{"label":"Radial Progress Meters","variant":"outline"}]}
      />

      {/* 1. Alerts Matrix (All 5 Variants) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Alerts"
            title="Alert Notifications Matrix (Info, Success, Warning, Danger, Glass)"
            description="Banner callouts with semantic status colors and optional dismiss actions."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={3}>
            <Alert
              variant="info"
              title="Information Notice"
              description="A new firmware update (v2.4.0) is available for deployment. Zero downtime expected."
              dismissible
            />

            <Alert
              variant="success"
              title="Database Migration Complete"
              description="Successfully migrated 48,290 customer records to Firestore cluster."
              dismissible
            />

            <Alert
              variant="warning"
              title="High Memory Utilization Warning"
              description="Worker instance mem-04 reached 88% memory threshold. Consider scaling replicas."
              dismissible
            />

            <Alert
              variant="danger"
              title="Critical SSL Certificate Expiration"
              description="Production domain wildcard certificate will expire in 48 hours."
              dismissible
            />

            <Alert
              variant="glass"
              title="Glassmorphism Translucent Alert"
              description="Frosted backdrop styling engineered for premium hero overlay notifications."
              dismissible
            />
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Interactive Toast & Confirm Dialog Triggers */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Interactive"
            title="Interactive Toast Notifications & Confirmation Dialogs"
            description="Trigger stackable floating toasts and high-stakes modal confirmation dialogs."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Inline gap={3} wrap>
              <Button size="sm" variant="primary" onPress={() => handleTriggerToast("default")}>
                Trigger Info Toast
              </Button>
              <Button size="sm" variant="outline" onPress={() => handleTriggerToast("success")}>
                Trigger Success Toast
              </Button>
              <Button size="sm" variant="destructive" onPress={() => handleTriggerToast("destructive")}>
                Trigger Danger Toast
              </Button>
              <Button size="sm" variant="secondary" onPress={() => setConfirmOpen(true)}>
                Open ConfirmDialog Modal
              </Button>
            </Inline>

            <ConfirmDialog
              open={confirmOpen}
              onOpenChange={setConfirmOpen}
              title="Delete Production Redis Cluster?"
              description="This action cannot be undone. All in-memory caching layers and active user sessions will be terminated immediately."
              variant="destructive"
              confirmText="Delete Cluster"
              cancelText="Cancel"
              onConfirm={() => {
                setConfirmOpen(false);
                handleTriggerToast("destructive");
              }}
            />
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Banners, Callouts, Notices & Snackbars */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Surfaces"
            title="Banners, Callouts, Notices & Bottom Snackbars"
            description="Specialized status surfaces for documentation, broadcasting, and undo actions."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            {/* Callout */}
            <Callout variant="info" title="Pro-Tip for System Architects">
              Use layout primitives (@unconfused-ui/primitives) directly inside high-frequency lists for optimal memoization.
            </Callout>

            {/* Notice */}
            <HStack gap={3} align="center" wrap>
              <Notice label="LIVE DEPLOYMENT" variant="success" />
              <Notice label="MAINTENANCE SCHEDULED" variant="warning" />
              <Notice label="OUTAGE DETECTED" variant="danger" />
            </HStack>

            {/* Snackbar with Undo */}
            <VStack gap={1}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Snackbar with Action (Click Undo):
              </Text>
              <Snackbar
                visible={snackbarOpen}
                message="Project #4820 archived successfully."
                actionLabel="UNDO ACTION"
                onAction={() => {
                  setSnackbarOpen(false);
                  handleTriggerToast("success");
                }}
              />
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 4. Dedicated Message Components */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Messages"
            title="Dedicated Status Messages"
            description="Standardized inline messaging primitives (Error, Success, Warning, Info)."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={3}>
            <ErrorMessage message="Invalid OAuth 2.0 Client Secret: Request timestamp signature expired." />
            <SuccessMessage message="Webhooks synchronized successfully with GitHub App." />
            <WarningMessage message="API rate limit: 8,450 / 10,000 requests consumed today." />
            <InfoMessage message="Weekly automated backups run on Sundays at 03:00 UTC." />
          </VStack>
        </Card.Content>
      </Card>

      {/* 5. Progress Bars & Circular Indicators */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Progress"
            title="Progress, ProgressBar & ProgressCircle"
            description="Continuous progress feedback with percentage indicators and circular SVG meters."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            <VStack gap={2}>
              <Inline justify="space-between" align="center">
                <Text size="xs" weight="bold">Asset Optimization Progress</Text>
                <Text size="xs" weight="bold" color={semanticColors.primary}>{progressVal}%</Text>
              </Inline>
              <Progress value={progressVal} />
            </VStack>

            <HStack gap={6} align="center" wrap>
              <HStack gap={3} align="center">
                <ProgressCircle value={progressVal} size={72} strokeWidth={7} />
                <VStack gap={0.5}>
                  <Text size="sm" weight="bold">Build Health</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>72% tests passing</Text>
                </VStack>
              </HStack>

              <HStack gap={3} align="center">
                <ProgressCircle value={100} size={72} strokeWidth={7} color="#10B981" />
                <VStack gap={0.5}>
                  <Text size="sm" weight="bold">Sync Status</Text>
                  <Text size="xs" color="#10B981">100% Up to Date</Text>
                </VStack>
              </HStack>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 6. Spinners & Shimmering Skeletons */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Loading"
            title="Spinners, LoadingIndicators & Shimmer Skeletons"
            description="Placeholder shapes and activity spinners during network fetching."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            <HStack gap={6} align="center" wrap>
              <HStack gap={2} align="center">
                <Spinner size="small" />
                <Text size="xs" color={semanticColors.foregroundMuted}>Small Spinner</Text>
              </HStack>

              <HStack gap={2} align="center">
                <Spinner size="large" />
                <Text size="xs" color={semanticColors.foregroundMuted}>Large Spinner</Text>
              </HStack>

              <LoadingIndicator label="Fetching remote packages..." size="small" />
            </HStack>

            <Divider thickness={1} />

            {/* Skeleton Placeholders */}
            <VStack gap={3}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Skeleton Placeholder Composition:
              </Text>
              <Box p={4} rounded="xl" variant="bordered" style={{ gap: 12 }}>
                <HStack gap={3} align="center">
                  <Skeleton width={44} height={44} rounded="full" />
                  <VStack gap={2} style={{ flex: 1 }}>
                    <Skeleton width="45%" height={14} />
                    <Skeleton width="75%" height={10} />
                  </VStack>
                </HStack>
                <Skeleton width="100%" height={60} rounded="lg" />
              </Box>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function OverlayCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();

  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [openActionSheet, setOpenActionSheet] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <Stack gap={10}>
      <CategoryHero
        number="08"
        title="Overlay Layering, Dialogs & Modals"
        description="Layered surfaces, bottom sheets, context popovers, non-blocking tooltips, and confirmation dialogs with accessible backdrop traps."
        tags={[{"label":"12 Overlay Primitives","variant":"primary"},{"label":"Gesture-Driven BottomSheet","variant":"success"},{"label":"Portal-Backed Tooltip Engine","variant":"outline"}]}
      />

      {/* 1. Modal & Compound Dialog */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Dialogs"
            title="Centered Modals & Compound Dialog Structure"
            description="Dialog with Header, Title, Description, Scrollable Content, and Footer Actions."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Inline gap={3} wrap>
              <Button variant="primary" onPress={() => setOpenModal(true)}>
                Open Compound Dialog Modal
              </Button>
              <Button variant="destructive" onPress={() => setOpenConfirm(true)}>
                Open Destructive ConfirmDialog
              </Button>
            </Inline>

            {/* Standard Modal Dialog */}
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <Dialog.Header>
                <Dialog.Title>Deploy Cloud Cluster</Dialog.Title>
                <Dialog.Description>
                  Provision new server instances with automated load balancers and HTTPS endpoints.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Content style={{ marginVertical: 12 }}>
                <VStack gap={3}>
                  <Input label="Cluster Name" value="quantum-mesh-01" />
                  <Input label="Master Node API Key" value="sec_key_••••••••••••" secureTextEntry />
                </VStack>
              </Dialog.Content>
              <Dialog.Footer>
                <Button size="sm" variant="ghost" onPress={() => setOpenModal(false)}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  onPress={() => {
                    setOpenModal(false);
                    toast({
                      title: "Deployment Initiated",
                      description: "Cluster quantum-mesh-01 is booting.",
                      variant: "success",
                    });
                  }}
                >
                  Confirm & Provision
                </Button>
              </Dialog.Footer>
            </Dialog>

            {/* Confirm Dialog */}
            <ConfirmDialog
              open={openConfirm}
              onOpenChange={setOpenConfirm}
              title="Terminate Instance?"
              description="Are you sure you want to stop worker instance us-east-48? Active websocket connections will drop."
              variant="destructive"
              confirmText="Terminate Now"
              cancelText="Keep Running"
              onConfirm={() => {
                setOpenConfirm(false);
                toast({
                  title: "Instance Terminated",
                  description: "Worker instance us-east-48 halted.",
                  variant: "destructive",
                });
              }}
            />
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Side Drawer & Bottom Sheet */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Drawers"
            title="Sliding Side Drawer & Gesture BottomSheet"
            description="Side panels for contextual navigation and bottom sheets with drag handles."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Inline gap={3} wrap>
              <Button variant="secondary" onPress={() => setOpenDrawer(true)}>
                Open Side Drawer (Right)
              </Button>
              <Button variant="outline" onPress={() => setOpenSheet(true)}>
                Open Bottom Sheet (Drag Handle)
              </Button>
              <Button variant="glass" onPress={() => setOpenActionSheet(true)}>
                Open ActionSheet Menu
              </Button>
            </Inline>

            {/* Side Drawer */}
            <Drawer open={openDrawer} onOpenChange={setOpenDrawer} position="right" width={340}>
              <VStack gap={4} style={{ flex: 1 }}>
                <Inline justify="space-between" align="center">
                  <Text size="lg" weight="bold">Navigation Drawer</Text>
                  <Pressable onPress={() => setOpenDrawer(false)}>
                    <Text size="xs" color={semanticColors.foregroundSubtle}></Text>
                  </Pressable>
                </Inline>

                <Divider thickness={1} />

                <VStack gap={2} style={{ flex: 1 }}>
                  <Pressable style={{ padding: 12, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.04)" }} onPress={() => setOpenDrawer(false)}>
                    <Text size="sm" weight="medium">Overview Dashboard</Text>
                  </Pressable>
                  <Pressable style={{ padding: 12, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.04)" }} onPress={() => setOpenDrawer(false)}>
                    <Text size="sm" weight="medium">Security & API Keys</Text>
                  </Pressable>
                  <Pressable style={{ padding: 12, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.04)" }} onPress={() => setOpenDrawer(false)}>
                    <Text size="sm" weight="medium">Audit Logs & Telemetry</Text>
                  </Pressable>
                  <Pressable style={{ padding: 12, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.04)" }} onPress={() => setOpenDrawer(false)}>
                    <Text size="sm" weight="medium">Billing & Invoices</Text>
                  </Pressable>
                </VStack>

                <Button size="sm" variant="outline" onPress={() => setOpenDrawer(false)}>
                  Close Drawer
                </Button>
              </VStack>
            </Drawer>

            {/* Bottom Sheet */}
            <Sheet open={openSheet} onOpenChange={setOpenSheet}>
              <Sheet.Header>
                <Sheet.Title>Quick Export & Share Options</Sheet.Title>
                <Sheet.Description>Select destination formats for compiled bytecode bundles.</Sheet.Description>
              </Sheet.Header>
              <Sheet.Content style={{ marginVertical: 12 }}>
                <VStack gap={3}>
                  <Box p={3} rounded="md" bg="rgba(255,255,255,0.04)">
                    <Text size="sm" weight="bold">Production Tarball (.tar.gz)</Text>
                    <Text size="xs" color={semanticColors.foregroundMuted}>Includes all optimized assets and source maps</Text>
                  </Box>
                  <Box p={3} rounded="md" bg="rgba(255,255,255,0.04)">
                    <Text size="sm" weight="bold">Docker Container Image (.tar)</Text>
                    <Text size="xs" color={semanticColors.foregroundMuted}>Hermes runtime pre-baked image</Text>
                  </Box>
                </VStack>
              </Sheet.Content>
              <Sheet.Footer>
                <Button size="sm" variant="primary" onPress={() => setOpenSheet(false)}>
                  Done
                </Button>
              </Sheet.Footer>
            </Sheet>

            {/* ActionSheet */}
            <ActionSheet
              open={openActionSheet}
              onOpenChange={setOpenActionSheet}
              title="Media Options"
              description="Choose an action for this photographic asset"
              actions={[
                {
                  label: "Save to Camera Roll",
                  icon: <Text size="xs"></Text>,
                  onPress: () => toast({ title: "Saved to Camera Roll", variant: "success" }),
                },
                {
                  label: "Share with Teammates",
                  icon: <Text size="xs"></Text>,
                  onPress: () => toast({ title: "Share link copied", variant: "default" }),
                },
                {
                  label: "Delete Asset Permanently",
                  icon: <Text size="xs">️</Text>,
                  destructive: true,
                  onPress: () => toast({ title: "Asset deleted", variant: "destructive" }),
                },
              ]}
            />
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Popovers, Tooltips & Dropdown Menus */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Floating"
            title="Popovers, Micro-Tooltips & DropdownMenu with Shortcuts"
            description="Anchored floating contexts with keyboard shortcuts and hover hints."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="center" wrap>
            {/* Popover */}
            <Popover>
              <Popover.Trigger>
                <Button size="sm" variant="outline">
                  Toggle Floating Popover
                </Button>
              </Popover.Trigger>
              <Popover.Content>
                <VStack gap={2}>
                  <Text size="sm" weight="bold">Popover Details</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Anchored floating popover card for rich secondary controls.
                  </Text>
                  <Button size="xs" variant="primary" style={{ marginTop: 4 }}>
                    Action
                  </Button>
                </VStack>
              </Popover.Content>
            </Popover>

            {/* Tooltip */}
            <Tooltip content="Quick shortcut: Press ⌘+K to open palette">
              <Button size="sm" variant="ghost">
                Hover for Tooltip Hint
              </Button>
            </Tooltip>

            {/* Dropdown Menu */}
            <DropdownMenu
              trigger={
                <Button size="sm" variant="glass">
                  Options Menu ▾
                </Button>
              }
              items={[
                { label: "Edit Profile", icon: <Text size="xs">️</Text>, shortcut: "⌘E" },
                { label: "Copy Link", icon: <Text size="xs"></Text>, shortcut: "⌘C" },
                { divider: true, label: "" },
                {
                  label: "Log Out",
                  icon: <Text size="xs"></Text>,
                  destructive: true,
                  onPress: () => toast({ title: "Logged out", variant: "default" }),
                },
              ]}
            />
          </HStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function NavigationCategoryView() {
  const { theme, semanticColors } = useTheme();

  // Navigation interactive states
  const [activeTab, setActiveTab] = useState("analytics");
  const [activeBottomTab, setActiveBottomTab] = useState("deploy");
  const [activeRail, setActiveRail] = useState("metrics");
  const [currentPage, setCurrentPage] = useState(2);
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <Stack gap={10}>
      <CategoryHero
        number="09"
        title="Navigation Systems, Bars & Steppers"
        description="Hierarchical navigation structures from multi-step wizard pipelines and top/bottom tabs to enterprise breadcrumbs and collapsible sidebars."
        tags={[{"label":"16 Navigation Primitives","variant":"primary"},{"label":"Multi-Step Wizard Engine","variant":"success"},{"label":"Responsive Navigation Rail","variant":"outline"}]}
      />

      {/* 1. Page Header & Breadcrumbs */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Headers"
            title="Header Component & Breadcrumbs Trail"
            description="Hero page headers integrated with breadcrumb paths and action button groups."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Header
              breadcrumbs={[
                { label: "Dashboard", onPress: () => {} },
                { label: "Clusters", onPress: () => {} },
                { label: "us-east-quantum-01" },
              ]}
              title="Quantum Mesh Node Controller"
              description="Real-time telemetry and replica routing across distributed cloud instances."
              badge={<Badge variant="success" dot size="sm">Node Healthy</Badge>}
              actions={
                <Inline gap={2}>
                  <Button size="sm" variant="ghost">Audit Logs</Button>
                  <Button size="sm" variant="primary">Scale Cluster</Button>
                </Inline>
              }
            />

            <Divider thickness={1} />

            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Custom Arrow Breadcrumb Trail:
              </Text>
              <Breadcrumbs
                separator="›"
                items={[
                  { label: "Home", onPress: () => {} },
                  { label: "Infrastructure", onPress: () => {} },
                  { label: "Compute Nodes", onPress: () => {} },
                  { label: "Config Map" },
                ]}
              />
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Responsive Navbar & NavigationBar / AppBar */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="AppBars"
            title="Responsive Navbar & Mobile NavigationBar / AppBar"
            description="Top navigation bar for web and mobile viewports with brand, links, and actions."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            {/* Full Web Navbar */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Full-Width Web Navbar:
              </Text>
              <Navbar
                brand={
                  <Inline align="center" gap={2}>
                    <Center circle={28} bg={semanticColors.primary}>
                      <Text size="xs" weight="bold" color="#FFFFFF"></Text>
                    </Center>
                    <Text size="md" weight="bold">Unconfused UI</Text>
                  </Inline>
                }
                links={[
                  { label: "Overview", active: true },
                  { label: "Components" },
                  { label: "Tokens" },
                  { label: "Docs" },
                ]}
                actions={
                  <Inline align="center" gap={3}>
                    <Button size="xs" variant="glass">⌘K Search</Button>
                    <Avatar fallback="AS" size="sm" />
                  </Inline>
                }
              />
            </VStack>

            {/* Mobile NavigationBar / AppBar */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Mobile NavigationBar / AppBar:
              </Text>
              <NavigationBar
                title="Cluster Settings"
                subtitle="us-east-01 • 8 replicas"
                leftAction={
                  <Button size="xs" variant="ghost">
                    ← Back
                  </Button>
                }
                rightAction={
                  <Button size="xs" variant="primary">
                    Save
                  </Button>
                }
              />
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Compound Tabs, TabBar & TopTabs */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Tabs"
            title="Tabs, TabBar & TopTabs Panel Container"
            description="Compound tab architecture with synchronized content panels."
          />
        </Card.Header>
        <Card.Content>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Trigger value="analytics" label=" Analytics" />
              <Tabs.Trigger value="security" label=" Security & Keys" />
              <Tabs.Trigger value="billing" label=" Billing & Usage" />
              <Tabs.Trigger value="team" label=" Team Access" />
            </Tabs.List>

            <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)">
              <Tabs.Content value="analytics">
                <VStack gap={2}>
                  <Text size="sm" weight="bold">Analytics & Latency Telemetry</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Average p99 request latency: 14.2ms. Global ingress bandwidth: 4.8 GB/s across all regions.
                  </Text>
                </VStack>
              </Tabs.Content>

              <Tabs.Content value="security">
                <VStack gap={2}>
                  <Text size="sm" weight="bold">Security Policies & Encryption</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Zero-trust TLS 1.3 mTLS encryption enforced. Last audited by SOC2 Type II compliance engine.
                  </Text>
                </VStack>
              </Tabs.Content>

              <Tabs.Content value="billing">
                <VStack gap={2}>
                  <Text size="sm" weight="bold">Usage & Monthly Invoice</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Current billing period: $148.20 / $500 monthly spending limit. Auto-scaling alert threshold active.
                  </Text>
                </VStack>
              </Tabs.Content>

              <Tabs.Content value="team">
                <VStack gap={2}>
                  <Text size="sm" weight="bold">Role-Based Team Permissions</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    6 Active Admin developers, 12 Read-only analysts with SSO authentication enabled.
                  </Text>
                </VStack>
              </Tabs.Content>
            </Box>
          </Tabs>
        </Card.Content>
      </Card>

      {/* 4. Desktop NavigationRail & Mobile BottomTabs */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Rails & BottomTabs"
            title="NavigationRail (Vertical) & BottomTabs (Mobile)"
            description="Vertical icon navigation rail for desktop dashboards and bottom tabs for mobile."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            {/* Desktop NavigationRail */}
            <VStack gap={2} style={{ width: 100 }}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                NavigationRail:
              </Text>
              <NavigationRail
                activeKey={activeRail}
                onSelect={setActiveRail}
                header={
                  <Center circle={36} bg={semanticColors.primary}>
                    <Text size="xs" weight="bold" color="#FFFFFF">AG</Text>
                  </Center>
                }
                items={[
                  { key: "home", label: "Home", icon: <Text size="sm"></Text> },
                  { key: "metrics", label: "Metrics", icon: <Text size="sm"></Text> },
                  { key: "nodes", label: "Nodes", icon: <Text size="sm">️</Text> },
                  { key: "settings", label: "Config", icon: <Text size="sm">️</Text> },
                ]}
                footer={<Avatar fallback="DV" size="sm" />}
              />
            </VStack>

            {/* Mobile BottomTabs */}
            <VStack gap={2} style={{ flex: 1, minWidth: 280 }}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Mobile BottomTabs with Badge Notification:
              </Text>
              <Box rounded="xl" style={{ overflow: "hidden", borderWidth: 1, borderColor: "rgba(255,255,255,0.1)" }}>
                <BottomTabs
                  activeKey={activeBottomTab}
                  onSelect={setActiveBottomTab}
                  items={[
                    { key: "dash", label: "Dashboard", icon: <Text size="sm"></Text> },
                    { key: "deploy", label: "Deployments", icon: <Text size="sm"></Text>, badge: 3 },
                    { key: "logs", label: "Audit Logs", icon: <Text size="sm"></Text> },
                    { key: "profile", label: "Account", icon: <Text size="sm"></Text> },
                  ]}
                />
              </Box>
            </VStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 5. Stepper & Pagination */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Flows"
            title="Multi-Step Stepper Wizard & Numbered Pagination"
            description="Wizard progress tracker and numbered page selection controls."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={6}>
            {/* Stepper */}
            <VStack gap={3}>
              <Inline justify="space-between" align="center">
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Workflow Stepper (Step {currentStep + 1} of 4):
                </Text>
                <Inline gap={2}>
                  <Button size="xs" variant="ghost" disabled={currentStep <= 0} onPress={() => setCurrentStep((s) => Math.max(0, s - 1))}>
                    Previous
                  </Button>
                  <Button size="xs" variant="primary" disabled={currentStep >= 3} onPress={() => setCurrentStep((s) => Math.min(3, s + 1))}>
                    Next Step
                  </Button>
                </Inline>
              </Inline>

              <Stepper
                currentStep={currentStep}
                onStepPress={setCurrentStep}
                steps={[
                  { title: "1. Cluster Specs" },
                  { title: "2. Credentials" },
                  { title: "3. Routing" },
                  { title: "4. Verify & Launch" },
                ]}
              />
            </VStack>

            <Divider thickness={1} />

            {/* Pagination */}
            <VStack gap={3}>
              <Inline justify="space-between" align="center">
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Interactive Numbered Pagination:
                </Text>
                <Text size="xs" color={semanticColors.primary} weight="bold">
                  Page {currentPage} of 10
                </Text>
              </Inline>

              <Pagination
                page={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                showPageNumbers
              />
            </VStack>
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function ListsCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState("primitives");

  return (
    <Stack gap={10}>
      <CategoryHero
        number="10"
        title="List Systems, Grids & Data Tables"
        description="High-density virtualized collections, section headers, grid layouts, and full data tables with sortable columns and action strips."
        tags={[{"label":"14 List Primitives","variant":"primary"},{"label":"Structured Table Matrix","variant":"success"},{"label":"Virtualized FlatList","variant":"outline"}]}
      />

      {/* 1. Grouped List & Compound ListItems */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Lists"
            title="List, ListSection, ListItem & ListHeader"
            description="Compound list hierarchy with left icons, subtitles, right badges, and chevrons."
          />
        </Card.Header>
        <Card.Content>
          <List>
            <List.Section title="Framework Core Modules" count={3}>
              <List.Item
                title="@unconfused-ui/primitives"
                subtitle="18 Pure React Native layout primitives & typography"
                leftIcon={<Text size="md"></Text>}
                rightAction={<Badge variant="primary" size="sm">v0.1.0</Badge>}
                showChevron
                selected={selectedItem === "primitives"}
                onPress={() => setSelectedItem("primitives")}
              />
              <List.Item
                title="@unconfused-ui/theme"
                subtitle="Dynamic ThemeProvider, useTheme and semantic tokens"
                leftIcon={<Text size="md"></Text>}
                rightAction={<Badge variant="success" size="sm">Active</Badge>}
                showChevron
                selected={selectedItem === "theme"}
                onPress={() => setSelectedItem("theme")}
              />
              <List.Item
                title="@unconfused-ui/recipes"
                subtitle="Zero-runtime variant recipe engine"
                leftIcon={<Text size="md"></Text>}
                rightAction={<Badge variant="outline" size="sm">Fast</Badge>}
                showChevron
                selected={selectedItem === "recipes"}
                onPress={() => setSelectedItem("recipes")}
              />
            </List.Section>

            <List.Section title="Cloud Telemetry & Ingress" count={2}>
              <List.Item
                title="Hermes Bytecode Engine"
                subtitle="Ahead-of-time bytecode pre-compilation active"
                leftIcon={<Text size="md"></Text>}
                rightAction={<Text size="xs" color="#10B981" weight="bold">0.4ms TTFB</Text>}
                showChevron
                onPress={() => toast({ title: "Hermes status verified", variant: "success" })}
              />
              <List.Item
                title="Legacy API Sync (Deprecated)"
                subtitle="Disabled pending migration"
                leftIcon={<Text size="md">️</Text>}
                disabled
              />
            </List.Section>

            <List.Footer>
              Showing 5 system packages • All modules updated and verified.
            </List.Footer>
          </List>
        </Card.Content>
      </Card>

      {/* 2. Responsive Grid & GridItem */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Grid"
            title="Responsive Grid & GridItem Layout"
            description="Multi-column grid arrangements with proportional card spacing."
          />
        </Card.Header>
        <Card.Content>
          <Grid columns={3} gap={12}>
            <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)">
              <VStack gap={1}>
                <Text size="xs" weight="bold" color={semanticColors.primary}>GRID CELL 01</Text>
                <Text size="md" weight="bold">Ingress Gateway</Text>
                <Text size="xs" color={semanticColors.foregroundMuted}>48,200 req/s</Text>
              </VStack>
            </Box>

            <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)">
              <VStack gap={1}>
                <Text size="xs" weight="bold" color="#10B981">GRID CELL 02</Text>
                <Text size="md" weight="bold">Cache Hit Rate</Text>
                <Text size="xs" color={semanticColors.foregroundMuted}>99.4% Redis hit</Text>
              </VStack>
            </Box>

            <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)">
              <VStack gap={1}>
                <Text size="xs" weight="bold" color="#F59E0B">GRID CELL 03</Text>
                <Text size="md" weight="bold">Database IOPS</Text>
                <Text size="xs" color={semanticColors.foregroundMuted}>1,240 / 3,000 IOPS</Text>
              </VStack>
            </Box>
          </Grid>
        </Card.Content>
      </Card>

      {/* 3. Table, TableRow, TableHeader & TableCell */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Tables"
            title="Table, TableRow, TableHeader & TableCell Data Matrix"
            description="Horizontally scrollable table with zebra striping and aligned columns."
          />
        </Card.Header>
        <Card.Content>
          <Table>
            <TableRow isHeader>
              <TableHeader label="Cluster Node" flex={2} />
              <TableHeader label="Region" flex={1.5} />
              <TableHeader label="Status" flex={1.2} align="center" />
              <TableHeader label="CPU Load" flex={1.2} align="right" />
              <TableHeader label="Memory" flex={1.2} align="right" />
            </TableRow>

            <TableRow zebra>
              <TableCell flex={2}>
                <VStack gap={0}>
                  <Text size="sm" weight="bold">node-quantum-01</Text>
                  <Text size="xs" color={semanticColors.foregroundSubtle}>Master Controller</Text>
                </VStack>
              </TableCell>
              <TableCell flex={1.5}>US-East (N. Virginia)</TableCell>
              <TableCell flex={1.2} align="center">
                <Badge variant="success" size="sm" dot>Online</Badge>
              </TableCell>
              <TableCell flex={1.2} align="right">
                <Text size="sm" weight="bold" color="#10B981">14.2%</Text>
              </TableCell>
              <TableCell flex={1.2} align="right">
                <Text size="sm">2.4 / 16 GB</Text>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell flex={2}>
                <VStack gap={0}>
                  <Text size="sm" weight="bold">node-quantum-02</Text>
                  <Text size="xs" color={semanticColors.foregroundSubtle}>Replica Worker</Text>
                </VStack>
              </TableCell>
              <TableCell flex={1.5}>EU-Central (Frankfurt)</TableCell>
              <TableCell flex={1.2} align="center">
                <Badge variant="success" size="sm" dot>Online</Badge>
              </TableCell>
              <TableCell flex={1.2} align="right">
                <Text size="sm" weight="bold" color="#10B981">28.7%</Text>
              </TableCell>
              <TableCell flex={1.2} align="right">
                <Text size="sm">4.8 / 16 GB</Text>
              </TableCell>
            </TableRow>

            <TableRow zebra>
              <TableCell flex={2}>
                <VStack gap={0}>
                  <Text size="sm" weight="bold">node-quantum-03</Text>
                  <Text size="xs" color={semanticColors.foregroundSubtle}>Replica Worker</Text>
                </VStack>
              </TableCell>
              <TableCell flex={1.5}>SA-East (São Paulo)</TableCell>
              <TableCell flex={1.2} align="center">
                <Badge variant="warning" size="sm" dot>High Load</Badge>
              </TableCell>
              <TableCell flex={1.2} align="right">
                <Text size="sm" weight="bold" color="#F59E0B">86.4%</Text>
              </TableCell>
              <TableCell flex={1.2} align="right">
                <Text size="sm">14.1 / 16 GB</Text>
              </TableCell>
            </TableRow>
          </Table>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function SurfacesCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();

  return (
    <Stack gap={10}>
      <CategoryHero
        number="11"
        title="Cards, Surfaces, Panels & Action Tiles"
        description="Elevated surfaces, translucent glass materials, structured panels, interactive feature cards, and action tiles with compound slot composition."
        tags={[{"label":"10 Surface Primitives","variant":"primary"},{"label":"Compound Card Slots","variant":"success"},{"label":"Optical Material Tokens","variant":"outline"}]}
      />

      {/* 1. Metric Tiles (Tile Component) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Tiles"
            title="Modular Metric Tiles (Tile Component)"
            description="KPI stat tiles with icons, large numbers, and percentage trends."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 200 }}>
              <Tile
                title="Active Users"
                value="128,490"
                icon={<Text size="md"></Text>}
                trend="+14.2%"
                subtitle="vs last week"
                badge={<Badge variant="success" size="sm">Growing</Badge>}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 200 }}>
              <Tile
                title="Monthly Revenue"
                value="$48,290"
                icon={<Text size="md"></Text>}
                trend="+22.8%"
                subtitle="ARR on track"
                badge={<Badge variant="primary" size="sm">MRR</Badge>}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 200 }}>
              <Tile
                title="P99 Latency"
                value="12.4ms"
                icon={<Text size="md"></Text>}
                trend="-4.1ms"
                subtitle="optimized"
                badge={<Badge variant="outline" size="sm">Edge</Badge>}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. FeatureCard & ActionCard */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Showcase Cards"
            title="FeatureCard (Marketing) & ActionCard (Interactive)"
            description="Hero cards with icon containers, descriptions, and click-through CTA triggers."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 280 }}>
              <FeatureCard
                title="Universal Component Architecture"
                description="Engineered exclusively with React Native primitives for 100% interoperability across Expo, iOS, Android, and Web."
                icon={<Text size="lg">️</Text>}
                badge={<Badge variant="primary" size="sm">Expo SDK</Badge>}
                ctaLabel="Explore Documentation"
                onCtaPress={() => toast({ title: "Navigating to Architecture Docs", variant: "default" })}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 280 }}>
              <ActionCard
                title="Configure Cloud Firestore Mesh"
                description="Manage global database replication, security rules, and real-time document change listeners."
                icon={<Text size="md"></Text>}
                badge={<Badge variant="success" size="sm" dot>Connected</Badge>}
                actionLabel="Manage Mesh"
                onAction={() => toast({ title: "Opened Firestore Mesh Settings", variant: "success" })}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. Panel & Paper */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Panels & Paper"
            title="Dashboard Panel & Elevated Paper Surface"
            description="Structured dashboard panels with title bars and clean elevated paper containers."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            {/* Panel */}
            <Panel
              title="Automated Backup Schedule"
              subtitle="Daily snapshots retained for 30 days"
              headerAction={<Button size="xs" variant="outline">Edit Policy</Button>}
            >
              <VStack gap={2}>
                <Text size="sm" color={semanticColors.foreground}>
                  Last snapshot completed at 03:00 UTC (Compressed size: 1.42 GB). All checksum hashes verified.
                </Text>
                <Inline gap={2} style={{ marginTop: 4 }}>
                  <Badge variant="success" size="sm">Encrypted AES-256</Badge>
                  <Badge variant="outline" size="sm">Multi-Region Redundancy</Badge>
                </Inline>
              </VStack>
            </Panel>

            {/* Paper */}
            <Paper style={{ padding: 20, borderRadius: 16, backgroundColor: semanticColors.surfaceSubtle, borderWidth: 1, borderColor: "rgba(255,255,255,0.08)" }}>
              <Inline justify="space-between" align="center">
                <VStack gap={1}>
                  <Text size="sm" weight="bold">Elevated Paper Surface</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Pure design token surface container utilizing elevation and border scales.
                  </Text>
                </VStack>
                <Button size="xs" variant="primary">Surface Action</Button>
              </Inline>
            </Paper>
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function AvatarCategoryView() {
  const { theme, semanticColors } = useTheme();

  return (
    <Stack gap={10}>
      <CategoryHero
        number="12"
        title="Avatar Systems, Profiles & Presence"
        description="User identity avatars with fallback monogram synthesis, presence indicators (online/idle/busy), avatar groups with overflow counters, and full profile cards."
        tags={[{"label":"7 Identity Primitives","variant":"primary"},{"label":"Presence Ring Matrix","variant":"success"},{"label":"Avatar Stacking Engine","variant":"outline"}]}
      />

      {/* 1. Proportional Size Scale & Fallbacks */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Scale"
            title="Avatar Proportional Sizes (SM, MD, LG, XL) & Status Rings"
            description="Four standard geometric dimensions with integrated glowing presence dots."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="center" wrap>
            <HStack gap={2} align="center">
              <Avatar fallback="SM" size="sm" status="online" />
              <VStack gap={0}>
                <Text size="xs" weight="bold">Small (34pt)</Text>
                <Text size="xs" color={semanticColors.foregroundMuted}>Navbar / Tables</Text>
              </VStack>
            </HStack>

            <HStack gap={2} align="center">
              <Avatar fallback="MD" size="md" status="busy" />
              <VStack gap={0}>
                <Text size="xs" weight="bold">Medium (44pt)</Text>
                <Text size="xs" color={semanticColors.foregroundMuted}>Standard Touch</Text>
              </VStack>
            </HStack>

            <HStack gap={2} align="center">
              <Avatar fallback="LG" size="lg" status="away" />
              <VStack gap={0}>
                <Text size="xs" weight="bold">Large (56pt)</Text>
                <Text size="xs" color={semanticColors.foregroundMuted}>Card / Lists</Text>
              </VStack>
            </HStack>

            <HStack gap={2} align="center">
              <Avatar fallback="XL" size="xl" status="online" />
              <VStack gap={0}>
                <Text size="xs" weight="bold">Extra Large (72pt)</Text>
                <Text size="xs" color={semanticColors.foregroundMuted}>Hero Profile</Text>
              </VStack>
            </HStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. AvatarGroup & Presence Indicators */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Groups"
            title="Overlapping AvatarGroup & Glowing Presence Rings"
            description="Clustered team avatars with automatic overflow counter and status beacons."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Overlapping Team Cluster (Max 4 Visible):
              </Text>
              <AvatarGroup max={4}>
                <Avatar fallback="AL" size="md" status="online" />
                <Avatar fallback="BR" size="md" status="online" />
                <Avatar fallback="CL" size="md" status="busy" />
                <Avatar fallback="DK" size="md" status="away" />
                <Avatar fallback="EV" size="md" status="offline" />
                <Avatar fallback="FN" size="md" status="offline" />
              </AvatarGroup>
            </VStack>

            <Divider thickness={1} />

            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Presence Indicator Glow Matrix:
              </Text>
              <HStack gap={6} align="center" wrap>
                <Inline align="center" gap={2}>
                  <PresenceIndicator status="online" size={12} />
                  <Text size="xs" weight="bold" color="#10B981">Online (Available)</Text>
                </Inline>

                <Inline align="center" gap={2}>
                  <PresenceIndicator status="busy" size={12} />
                  <Text size="xs" weight="bold" color="#F43F5E">Busy (In Deployment)</Text>
                </Inline>

                <Inline align="center" gap={2}>
                  <PresenceIndicator status="away" size={12} />
                  <Text size="xs" weight="bold" color="#F59E0B">Away (Idle 15m)</Text>
                </Inline>

                <Inline align="center" gap={2}>
                  <PresenceIndicator status="offline" size={12} />
                  <Text size="xs" weight="bold" color={semanticColors.foregroundSubtle}>Offline</Text>
                </Inline>
              </HStack>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Structured Profile Cards */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Profiles"
            title="Profile Identity Cards"
            description="Harmonious composition combining Avatars, roles, verified badges, and emails."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)" style={{ flex: 1, minWidth: 260 }}>
              <Profile
                name="Alisson Silva"
                role="Principal UI/UX Architect"
                email="alisson@unconfused.ui"
                status="online"
                badge={<Badge variant="primary" size="sm">Core Team</Badge>}
              />
            </Box>

            <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)" style={{ flex: 1, minWidth: 260 }}>
              <Profile
                name="DeepMind Quantum Node"
                role="Autonomous Agent"
                email="agent-01@antigravity.ai"
                status="busy"
                badge={<Badge variant="success" size="sm" dot>Active</Badge>}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function BadgesCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();
  const [selectedChips, setSelectedChips] = useState<string[]>(["react", "typescript"]);

  const toggleChip = (chipKey: string) => {
    setSelectedChips((prev) =>
      prev.includes(chipKey) ? prev.filter((k) => k !== chipKey) : [...prev, chipKey]
    );
  };

  return (
    <Stack gap={10}>
      <CategoryHero
        number="13"
        title="Badges, Status Indicators, Tags & Chips"
        description="Compact visual annotations, live status dots, dismissible filter chips, pill counters, and colored severity indicators."
        tags={[{"label":"8 Status Primitives","variant":"primary"},{"label":"Pill & Counter Matrix","variant":"success"},{"label":"Interactive Tag Dismiss","variant":"outline"}]}
      />

      {/* 1. Semantic Badges Matrix */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Badges"
            title="Semantic Badge Variants (Primary, Success, Warning, Danger, Outline, Glass)"
            description="Status labels with optional glowing dots across multiple visual tones."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={3} align="center" wrap>
            <Badge variant="primary" dot>Primary Build</Badge>
            <Badge variant="success" dot>Passing 100%</Badge>
            <Badge variant="warning" dot>High Latency</Badge>
            <Badge variant="danger" dot>Fatal Exception</Badge>
            <Badge variant="outline">Outline Neutral</Badge>
            <Badge variant="secondary">Secondary Subtle</Badge>
            <Pill variant="primary">Pill Rounded</Pill>
            <Pill variant="success" dot>Pill Online</Pill>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. Interactive Selectable Chips & Dismissible Tags */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Chips & Tags"
            title="Interactive Chips & Dismissible Tags"
            description="Multi-select filtering chips and metadata tags with removal triggers."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Selectable Filter Chips (Click to toggle):
              </Text>
              <HStack gap={2} align="center" wrap>
                <Chip
                  label="React Native"
                  icon={<Text size="xs">️</Text>}
                  selected={selectedChips.includes("react")}
                  onPress={() => toggleChip("react")}
                />
                <Chip
                  label="TypeScript"
                  icon={<Text size="xs"></Text>}
                  selected={selectedChips.includes("typescript")}
                  onPress={() => toggleChip("typescript")}
                />
                <Chip
                  label="Turborepo"
                  icon={<Text size="xs"></Text>}
                  selected={selectedChips.includes("turbo")}
                  onPress={() => toggleChip("turbo")}
                />
                <Chip
                  label="Hermes Engine"
                  icon={<Text size="xs"></Text>}
                  selected={selectedChips.includes("hermes")}
                  onPress={() => toggleChip("hermes")}
                />
              </HStack>
            </VStack>

            <Divider thickness={1} />

            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Dismissible Metadata Tags:
              </Text>
              <HStack gap={2} align="center" wrap>
                <Tag variant="primary" onRemove={() => toast({ title: "Tag removed", variant: "default" })}>
                  v2.4.0-canary
                </Tag>
                <Tag variant="success" onRemove={() => toast({ title: "Tag removed", variant: "default" })}>
                  us-east-1a
                </Tag>
                <Tag variant="warning" onRemove={() => toast({ title: "Tag removed", variant: "default" })}>
                  staging-env
                </Tag>
              </HStack>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 3. Notification Counters & Pulse Dots */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Counters"
            title="Notification Counters & Glowing Status Dots"
            description="Numeric badges with overflow ceilings and pulsing activity beacons."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="center" wrap>
            <HStack gap={2} align="center">
              <Text size="sm" weight="bold">Critical Alerts:</Text>
              <Counter count={4} variant="danger" />
            </HStack>

            <HStack gap={2} align="center">
              <Text size="sm" weight="bold">Pending Tasks:</Text>
              <Counter count={18} variant="primary" />
            </HStack>

            <HStack gap={2} align="center">
              <Text size="sm" weight="bold">High Overflow:</Text>
              <Counter count={142} max={99} variant="danger" />
            </HStack>

            <HStack gap={3} align="center">
              <Dot size={10} pulse color="#10B981" />
              <Text size="xs" color="#10B981" weight="bold">WebSocket Live</Text>
            </HStack>
          </HStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function MenusCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();
  const [paletteOpen, setPaletteOpen] = useState(false);

  const commandItems = [
    { id: "1", label: "Create New Cluster Node", category: "Infrastructure", icon: <Text size="xs">️</Text>, shortcut: "⌘N", onSelect: () => toast({ title: "Cluster wizard opened", variant: "default" }) },
    { id: "2", label: "Flush In-Memory Redis Cache", category: "Database", icon: <Text size="xs"></Text>, shortcut: "⌘F", onSelect: () => toast({ title: "Cache flushed", variant: "success" }) },
    { id: "3", label: "Export Audit Logs (.json)", category: "Compliance", icon: <Text size="xs"></Text>, shortcut: "⌘E", onSelect: () => toast({ title: "Export started", variant: "default" }) },
    { id: "4", label: "Toggle Dark/Light Mode", category: "Appearance", icon: <Text size="xs"></Text>, shortcut: "⌘T", onSelect: () => toast({ title: "Theme toggled", variant: "default" }) },
  ];

  return (
    <Stack gap={10}>
      <CategoryHero
        number="14"
        title="Menu Systems, Dropdowns & Command Palette"
        description="Context menus, dropdown action lists, categorized menu groups, and command palettes with keyboard shortcut badges."
        tags={[{"label":"9 Menu Primitives","variant":"primary"},{"label":"Command Palette Overlay","variant":"success"},{"label":"Grouped Menu Matrix","variant":"outline"}]}
      />

      {/* 1. Grouped Menu Structure with Keyboard Shortcuts */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Menus"
            title="Menu, MenuItem, MenuGroup & MenuSeparator"
            description="Structured action list with category groupings, icons, and keyboard shortcuts."
          />
        </Card.Header>
        <Card.Content>
          <Box style={{ maxWidth: 320 }}>
            <Menu>
              <Menu.Group title="Workspace Actions">
                <Menu.Item
                  label="New Repository"
                  icon={<Text size="xs"></Text>}
                  shortcut="⌘N"
                  onPress={() => toast({ title: "New repository opened", variant: "default" })}
                />
                <Menu.Item
                  label="Quick Search"
                  icon={<Text size="xs"></Text>}
                  shortcut="⌘K"
                  onPress={() => setPaletteOpen(true)}
                />
              </Menu.Group>

              <Menu.Separator />

              <Menu.Group title="Account & Billing">
                <Menu.Item
                  label="Subscription Plan"
                  icon={<Text size="xs"></Text>}
                  onPress={() => toast({ title: "Navigating to Billing", variant: "default" })}
                />
                <Menu.Item
                  label="API Token Security"
                  icon={<Text size="xs"></Text>}
                  onPress={() => toast({ title: "Navigating to API Keys", variant: "default" })}
                />
              </Menu.Group>

              <Menu.Separator />

              <Menu.Item
                label="Sign Out Session"
                icon={<Text size="xs"></Text>}
                destructive
                onPress={() => toast({ title: "Session terminated", variant: "default" })}
              />
            </Menu>
          </Box>
        </Card.Content>
      </Card>

      {/* 2. Dropdown Floating Trigger & Spotlight Command Palette */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Spotlight"
            title="Floating Dropdown & ⌘K Spotlight Command Palette"
            description="Clickable dropdown popovers and global keyboard-driven command palettes."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Inline gap={3} wrap>
              <Button variant="primary" onPress={() => setPaletteOpen(true)}>
                Open ⌘K Command Palette
              </Button>

              <Dropdown
                trigger={
                  <Button variant="glass">
                    Cluster Options ▾
                  </Button>
                }
              >
                <Menu.Item label="Restart All Replicas" icon={<Text size="xs"></Text>} onPress={() => toast({ title: "Restarting replicas", variant: "warning" })} />
                <Menu.Item label="Download Telemetry" icon={<Text size="xs"></Text>} onPress={() => toast({ title: "Downloading telemetry", variant: "default" })} />
                <Menu.Separator />
                <Menu.Item label="Halt Cluster" icon={<Text size="xs"></Text>} destructive onPress={() => toast({ title: "Cluster halted", variant: "destructive" })} />
              </Dropdown>
            </Inline>

            {/* Spotlight Command Palette Modal */}
            <CommandPalette
              open={paletteOpen}
              onOpenChange={setPaletteOpen}
              items={commandItems}
              placeholder="Type command name (e.g. Cluster, Redis, Theme)..."
            />
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function DateTimeCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();

  // Interactive states
  const [selectedDay, setSelectedDay] = useState(19);
  const [selectedMonth, setSelectedMonth] = useState(7);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [rangeStart, setRangeStart] = useState(10);
  const [rangeEnd, setRangeEnd] = useState(18);
  const [timeHour, setTimeHour] = useState(14);
  const [timeMin, setTimeMin] = useState(30);

  return (
    <Stack gap={10}>
      <CategoryHero
        number="15"
        title="Date & Time Pickers, Calendars & Range"
        description="Interactive calendar grids, date range selectors, month/year pickers, and formatted date/time inputs with instant validation."
        tags={[{"label":"9 Date/Time Primitives","variant":"primary"},{"label":"Calendar Range Engine","variant":"success"},{"label":"Month & Year Pickers","variant":"outline"}]}
      />

      {/* 1. Full Month Calendar & CalendarRange */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Calendars"
            title="Interactive Month Calendar & CalendarRange Picker"
            description="Full month grid with event indicators and continuous date span highlight ranges."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            <VStack gap={2}>
              <Inline justify="space-between" align="center">
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Calendar (Day {selectedDay} Selected):
                </Text>
                <Badge variant="primary" size="sm">3 Events</Badge>
              </Inline>
              <Calendar
                selectedDate={selectedDay}
                onSelectDate={(d) => {
                  setSelectedDay(d);
                  toast({ title: `Selected August ${d}, 2026`, variant: "default" });
                }}
              />
            </VStack>

            <VStack gap={2}>
              <Inline justify="space-between" align="center">
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  CalendarRange (Span Selection):
                </Text>
                <Badge variant="success" size="sm">9 Days Active</Badge>
              </Inline>
              <CalendarRange
                startDate={rangeStart}
                endDate={rangeEnd}
                onRangeChange={(s, e) => {
                  setRangeStart(s);
                  setRangeEnd(e);
                  toast({ title: `Range set: Day ${s} to ${e}`, variant: "success" });
                }}
              />
            </VStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. MonthPicker, YearPicker & TimePicker */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Grids & Time"
            title="MonthPicker, YearPicker & Numeric TimePicker"
            description="Rapid selection grids for months, years, and hour/minute time steppers."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            {/* Month Picker */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                12-Month Grid:
              </Text>
              <MonthPicker
                selectedMonth={selectedMonth}
                onSelectMonth={(m) => {
                  setSelectedMonth(m);
                  toast({ title: `Selected Month: ${m + 1}`, variant: "default" });
                }}
              />
            </VStack>

            {/* Year Picker */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Decade Year Grid:
              </Text>
              <YearPicker
                selectedYear={selectedYear}
                onSelectYear={(y) => {
                  setSelectedYear(y);
                  toast({ title: `Selected Year: ${y}`, variant: "default" });
                }}
              />
            </VStack>

            {/* Time Picker */}
            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                TimePicker:
              </Text>
              <TimePicker
                hour={timeHour}
                minute={timeMin}
                onTimeChange={(h, m) => {
                  setTimeHour(h);
                  setTimeMin(m);
                }}
              />
            </VStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. Form DateInput, TimeInput & DatePicker Modal */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Inputs"
            title="DateInput, TimeInput & Popover DatePicker"
            description="Formatted form input controls with integrated modal calendar triggers."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} wrap>
            <Box style={{ flex: 1, minWidth: 240 }}>
              <VStack gap={1.5}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Formatted DateInput:
                </Text>
                <DateInput value="2026-08-19" />
              </VStack>
            </Box>

            <Box style={{ flex: 1, minWidth: 240 }}>
              <VStack gap={1.5}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Formatted TimeInput:
                </Text>
                <TimeInput value="14:30" />
              </VStack>
            </Box>

            <Box style={{ flex: 1, minWidth: 240 }}>
              <VStack gap={1.5}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  DatePicker with Modal Trigger:
                </Text>
                <DatePicker />
              </VStack>
            </Box>
          </HStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function MediaCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();
  const [viewerOpen, setViewerOpen] = useState(false);

  const galleryItems = [
    { id: "1", title: "Quantum Telemetry Node" },
    { id: "2", title: "Cluster Replicas SA-East" },
    { id: "3", title: "Zero-Trust Encryption Mesh" },
    { id: "4", title: "Hermes Bytecode Engine" },
  ];

  const carouselSlides = [
    { id: "1", title: "Autonomous Agent Orchestration", subtitle: "Self-healing distributed systems with real-time feedback loops.", badge: "v2.0 Architecture" },
    { id: "2", title: "Unified React Native Primitives", subtitle: "Zero web DOM pollution across Expo, iOS, Android, and Web.", badge: "100% Universal" },
    { id: "3", title: "Tokenized Glassmorphism", subtitle: "Adaptive theme scales with semantic border illumination.", badge: "Deep UI/UX" },
  ];

  return (
    <Stack gap={10}>
      <CategoryHero
        number="16"
        title="Media Architecture, Carousels & Galleries"
        description="Responsive images, image carousels with slide indicators, media player controls with playback state, audio scrubbers, and thumbnails."
        tags={[{"label":"11 Media Primitives","variant":"primary"},{"label":"Interactive Carousel","variant":"success"},{"label":"Audio & Video Controls","variant":"outline"}]}
      />

      {/* 1. Interactive Carousel & Image Gallery */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Carousel & Gallery"
            title="Interactive Carousel & Image Gallery"
            description="Slide presentation carousel with indicator dots and clickable thumbnail gallery."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            {/* Carousel */}
            <VStack gap={2} style={{ flex: 1, minWidth: 300 }}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Swipeable Interactive Carousel:
              </Text>
              <Carousel items={carouselSlides} />
            </VStack>

            {/* Gallery */}
            <VStack gap={2} style={{ flex: 1, minWidth: 260 }}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Image Gallery (Click to preview):
              </Text>
              <ImageGallery
                items={galleryItems}
                onSelect={(item) => {
                  setViewerOpen(true);
                  toast({ title: `Opened: ${item.title}`, variant: "default" });
                }}
              />
              <Button size="xs" variant="ghost" onPress={() => setViewerOpen(true)}>
                Open Modal ImageViewer
              </Button>
            </VStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. AudioPlayer & Video / MediaPlayer */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Players"
            title="AudioPlayer & Video / MediaPlayer Containers"
            description="Audio waveform playback controls and video media containers."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            <VStack gap={2} style={{ flex: 1, minWidth: 280 }}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                AudioPlayer with Playback Progress:
              </Text>
              <AudioPlayer
                title="Deep Space Resonance"
                artist="Antigravity Audio Engine"
                duration="04:18"
                elapsed="01:42"
              />
            </VStack>

            <VStack gap={2} style={{ flex: 1, minWidth: 280 }}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                Video / MediaPlayer:
              </Text>
              <Video title="Next-Gen Architecture Walkthrough" duration="08:24" />
            </VStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. Thumbnails with Play Badges & Icons */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Thumbnails & Icons"
            title="Thumbnails with Play Badges & Scaled Icons"
            description="Modular media thumbnails with video badges and semantic tokenized icons."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="center" wrap>
            <HStack gap={3} align="center">
              <Thumbnail size={64} showPlayBadge fallbackIcon="" onPress={() => toast({ title: "Playing video thumbnail", variant: "default" })} />
              <Thumbnail size={64} showPlayBadge fallbackIcon="" onPress={() => toast({ title: "Playing audio thumbnail", variant: "default" })} />
              <Thumbnail size={64} fallbackIcon="" />
            </HStack>

            <Divider thickness={1} style={{ height: 40 }} />

            <HStack gap={4} align="center">
              <Icon name="sparkles" size={28} color={semanticColors.primary} />
              <Icon name="zap" size={28} color="#10B981" />
              <Icon name="heart" size={28} color="#F43F5E" />
              <Icon name="star" size={28} color="#F59E0B" />
            </HStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* Modal Lightbox Viewer */}
      <ImageViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title="High-Resolution Architecture Diagram"
      />
    </Stack>
  );
}

export function LoadingCategoryView() {
  const { theme, semanticColors } = useTheme();
  const [progressVal, setProgressVal] = useState(68);

  return (
    <Stack gap={10}>
      <CategoryHero
        number="17"
        title="Loading Indicators, Skeletons & Shimmer"
        description="Smooth shimmer placeholders, skeleton cards/text/avatars, activity spinners, and animated progress bars for non-blocking asynchronous state UX."
        tags={[{"label":"10 Loading Primitives","variant":"primary"},{"label":"Shimmer Pulse Effects","variant":"success"},{"label":"Compound Skeleton Cards","variant":"outline"}]}
      />

      {/* 1. Spinners & Progress Indicators */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Spinners & Progress"
            title="Spinner, ActivityIndicator, ProgressBar & ProgressCircle"
            description="Continuous progress bars, circular metric loaders, and activity spinners."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={6}>
            {/* Linear Progress Bar */}
            <VStack gap={2}>
              <Inline justify="space-between" align="center">
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Linear Progress Track:
                </Text>
                <Text size="xs" color={semanticColors.primary} weight="bold">
                  {progressVal}% Completed
                </Text>
              </Inline>
              <ProgressBar value={progressVal} />
              <Inline gap={2} style={{ marginTop: 4 }}>
                <Button size="xs" variant="ghost" onPress={() => setProgressVal((v) => Math.max(10, v - 15))}>
                  -15%
                </Button>
                <Button size="xs" variant="primary" onPress={() => setProgressVal((v) => Math.min(100, v + 15))}>
                  +15%
                </Button>
              </Inline>
            </VStack>

            <Divider thickness={1} />

            {/* Circular Loaders & Spinners */}
            <HStack gap={6} align="center" wrap>
              <HStack gap={3} align="center">
                <ProgressCircle value={progressVal} size={54} />
                <VStack gap={0}>
                  <Text size="xs" weight="bold">Cluster Rebalance</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>Syncing replicas</Text>
                </VStack>
              </HStack>

              <Divider thickness={1} style={{ height: 40 }} />

              <HStack gap={4} align="center">
                <Spinner size="small" />
                <Spinner size="large" color="#10B981" />
                <LoadingIndicator label="Compiling AST..." />
              </HStack>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. Compound Skeletons & Content Placeholders */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Skeletons"
            title="SkeletonCard, SkeletonAvatar & Multi-Line SkeletonText"
            description="Content placeholder simulations for responsive loading states."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            {/* Skeleton Card 01 */}
            <Box style={{ flex: 1, minWidth: 280 }}>
              <VStack gap={2}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  SkeletonCard (Simulated User Profile):
                </Text>
                <SkeletonCard hasAvatar />
              </VStack>
            </Box>

            {/* Skeleton Card 02 */}
            <Box style={{ flex: 1, minWidth: 280 }}>
              <VStack gap={2}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  SkeletonText (Article / Post Placeholder):
                </Text>
                <Box
                  style={{
                    padding: 18,
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 18, 30, 0.8)",
                    borderWidth: 1,
                    borderColor: "rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <VStack gap={3}>
                    <Skeleton height={18} width="40%" radius={4} />
                    <SkeletonText lines={4} height={10} />
                    <Skeleton height={32} width="100%" radius={8} />
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function EmptyStatesCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();

  return (
    <Stack gap={10}>
      <CategoryHero
        number="18"
        title="Empty States, 404s & Offline Screens"
        description="Illustrated fallback canvases for zero data, search misses, 404 not found, network offline states, and async loading screens."
        tags={[{"label":"6 Empty State Screens","variant":"primary"},{"label":"No Results Fallbacks","variant":"success"},{"label":"Offline Detection UX","variant":"outline"}]}
      />

      {/* 1. Base EmptyState & NoResults */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="States"
            title="EmptyState (Inbox) & NoResults (Filter Search)"
            description="Default zero-data screen and zero-match query fallback with action CTA."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            <Box style={{ flex: 1, minWidth: 280 }}>
              <EmptyState
                title="No Active Deployments"
                description="Create a new application deployment to begin orchestrating cloud workloads."
                icon={<Text size="2xl"></Text>}
                actionLabel="Deploy First App"
                onAction={() => toast({ title: "Opening Deployment Wizard", variant: "default" })}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 280 }}>
              <NoResults
                onAction={() => toast({ title: "Search filters reset", variant: "success" })}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. NotFound, ErrorState & OfflineState */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Faults & Offline"
            title="NotFound (404), ErrorState & OfflineState"
            description="Resilient error handling views with recovery and reconnect triggers."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            <Box style={{ flex: 1, minWidth: 260 }}>
              <NotFound
                onAction={() => toast({ title: "Navigating to Root", variant: "default" })}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 260 }}>
              <ErrorState
                onAction={() => toast({ title: "Retrying cluster query...", variant: "warning" })}
              />
            </Box>

            <Box style={{ flex: 1, minWidth: 260 }}>
              <OfflineState
                onAction={() => toast({ title: "Network mesh reconnecting...", variant: "default" })}
              />
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. LoadingState */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Loading"
            title="LoadingState Activity Screen"
            description="Dedicated synchronizing state container with embedded spinner."
          />
        </Card.Header>
        <Card.Content>
          <LoadingState />
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function AccordionCategoryView() {
  const { theme, semanticColors } = useTheme();

  return (
    <Stack gap={10}>
      <CategoryHero
        number="19"
        title="Accordion, Collapsible & Tree Hierarchies"
        description="Expandable disclosure panels, single/multiple accordion groups, animated collapsible drawers, and hierarchical folder trees."
        tags={[{"label":"8 Disclosure Primitives","variant":"primary"},{"label":"Multi-Level Tree View","variant":"success"},{"label":"Accordion State Engine","variant":"outline"}]}
      />

      {/* 1. Compound Accordion */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Accordions"
            title="Compound Accordion & Accordion.Item"
            description="Multi-item collapsible container with smooth state transitions and chevron indicators."
          />
        </Card.Header>
        <Card.Content>
          <Accordion type="single" defaultValue={["mesh-config"]}>
            <Accordion.Item value="mesh-config">
              <Accordion.Trigger title="️ Quantum Mesh Configuration" />
              <Accordion.Content>
                Enforce distributed gossip protocols across edge worker pods. Automatic leader election
                and replication quorum active with 10ms heartbeat thresholds.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="security-keys">
              <Accordion.Trigger title=" TLS 1.3 & mTLS Encryption Keys" />
              <Accordion.Content>
                Zero-trust authentication enforced on all ingress endpoints. Keys rotated automatically
                every 24 hours via hardware security module (HSM).
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="scaling-policy">
              <Accordion.Trigger title=" Dynamic Auto-Scaling Policies" />
              <Accordion.Content>
                Target CPU utilization set to 75%. Minimum 4 nodes, maximum 64 nodes per region
                with predictive scale-out during ingress spikes.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Card.Content>
      </Card>

      {/* 2. Standalone Collapsible & Expandable Text */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Collapsibles"
            title="Standalone Collapsible Card & Text Expandable"
            description="Independent collapsible containers and truncated text wrappers."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            <Box style={{ flex: 1, minWidth: 280 }}>
              <VStack gap={2}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Collapsible Card:
                </Text>
                <Collapsible title="Database Replica Configuration" subtitle="us-east-01 cluster" defaultOpen>
                  PostgreSQL cluster running version 16.2 on NVMe storage. Read replica latency is 1.2ms.
                </Collapsible>
              </VStack>
            </Box>

            <Box style={{ flex: 1, minWidth: 280 }}>
              <VStack gap={2}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Expandable Text Wrapper:
                </Text>
                <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)">
                  <Expandable
                    text="Unconfused UI is a next-generation design system engineered exclusively with pure React Native primitives to deliver 100% interoperability across Expo SDK, iOS, Android, and Web platforms without any web DOM pollution or binary linking issues."
                    limit={110}
                  />
                </Box>
              </VStack>
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. Hierarchical Tree & TreeItem */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Tree"
            title="Tree & TreeItem Directory Hierarchy"
            description="Nested file and folder structure with depth indentation and toggleable branches."
          />
        </Card.Header>
        <Card.Content>
          <Tree>
            <TreeItem label="packages" defaultOpen>
              <TreeItem label="core" depth={1} defaultOpen>
                <TreeItem label="components" depth={2} defaultOpen>
                  <TreeItem label="Accordion.tsx" icon="️" depth={3} />
                  <TreeItem label="Button.tsx" icon="️" depth={3} />
                  <TreeItem label="Input.tsx" icon="️" depth={3} />
                </TreeItem>
                <TreeItem label="package.json" icon="" depth={2} />
              </TreeItem>

              <TreeItem label="primitives" depth={1}>
                <TreeItem label="Box.tsx" icon="️" depth={2} />
                <TreeItem label="Text.tsx" icon="️" depth={2} />
              </TreeItem>

              <TreeItem label="theme" depth={1}>
                <TreeItem label="ThemeProvider.tsx" icon="️" depth={2} />
              </TreeItem>
            </TreeItem>

            <TreeItem label="apps" defaultOpen>
              <TreeItem label="example" depth={1} defaultOpen>
                <TreeItem label="App.tsx" icon="️" depth={2} />
                <TreeItem label="app.json" icon="" depth={2} />
              </TreeItem>
            </TreeItem>
          </Tree>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function DataVizCategoryView() {
  const { theme, semanticColors } = useTheme();

  const barChartData = [
    { label: "Mon", value: 42, color: semanticColors.primary },
    { label: "Tue", value: 78, color: semanticColors.primary },
    { label: "Wed", value: 65, color: "#10B981" },
    { label: "Thu", value: 92, color: "#10B981" },
    { label: "Fri", value: 118, color: "#F59E0B" },
    { label: "Sat", value: 84, color: semanticColors.primary },
    { label: "Sun", value: 56, color: semanticColors.primary },
  ];

  const donutData = [
    { label: "API Ingress", value: 52, color: semanticColors.primary },
    { label: "Redis Cache", value: 28, color: "#10B981" },
    { label: "DB Storage", value: 20, color: "#F59E0B" },
  ];

  const trackData = [
    { label: "CPU Utilization", value: 64, color: "#10B981" },
    { label: "Memory Allocated", value: 82, color: "#F59E0B" },
    { label: "Bandwidth Ingress", value: 46, color: semanticColors.primary },
  ];

  return (
    <Stack gap={10}>
      <CategoryHero
        number="20"
        title="Data Visualization & Charting Suite"
        description="Universal SVG/View-based charting primitives: Bar charts, line charts, donut/pie proportions, radar graphs, gauges, and sparkline trends."
        tags={[{"label":"10 Chart Primitives","variant":"primary"},{"label":"Responsive Sparklines","variant":"success"},{"label":"Radial Gauges & Pies","variant":"outline"}]}
      />

      {/* 1. BarChart & Sparklines */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Charts"
            title="BarChart & Inline Trend Sparklines"
            description="Categorical weekly throughput graph with real-time trend indicators."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <BarChart data={barChartData} title="Weekly Ingress Telemetry (Thousand Req/s)" height={160} />

            <Divider thickness={1} />

            <HStack gap={6} align="center" wrap>
              <HStack gap={2} align="center">
                <Text size="xs" weight="bold">Throughput Trend:</Text>
                <Sparkline values={[10, 14, 18, 22, 28, 35, 42]} color="#10B981" trend="+24.8%" />
              </HStack>

              <HStack gap={2} align="center">
                <Text size="xs" weight="bold">Latency Stability:</Text>
                <Sparkline values={[42, 38, 30, 24, 18, 15, 12]} color="#10B981" trend="-71.4%" />
              </HStack>
            </HStack>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. DonutChart, ProgressChart & Gauge */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Analytics"
            title="DonutChart, ProgressChart & Radial Gauge"
            description="Workload distribution donut, multi-track progress bars, and radial health score."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={4} align="flex-start" wrap>
            {/* Donut Chart */}
            <Box style={{ flex: 1, minWidth: 260 }}>
              <DonutChart data={donutData} centerLabel="Resource Load" centerValue="86%" />
            </Box>

            {/* Multi-Track Progress */}
            <Box style={{ flex: 1, minWidth: 260 }}>
              <ProgressChart tracks={trackData} />
            </Box>

            {/* Gauge */}
            <Box style={{ flex: 1, minWidth: 200 }}>
              <Gauge value={94} label="System Health" statusText="Excellent" />
            </Box>
          </HStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function GesturesCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();

  return (
    <Stack gap={10}>
      <CategoryHero
        number="21"
        title="Gestures & Micro-Interaction Engine"
        description="Touchable micro-animations, swipeable action strips, long-press detectors, double-tap triggers, and draggable/droppable canvas zones."
        tags={[{"label":"12 Gesture Primitives","variant":"primary"},{"label":"Swipeable Action Strips","variant":"success"},{"label":"Drag & Drop Canvas","variant":"outline"}]}
      />

      {/* 1. Swipeable with SwipeActions */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Swipe"
            title="Swipeable Container & Background SwipeActions"
            description="Horizontal swipe gesture row with revealed action buttons on background layer."
          />
        </Card.Header>
        <Card.Content>
          <Swipeable
            leftActions={
              <SwipeActions>
                <Button size="xs" variant="primary" onPress={() => toast({ title: "Starred item", variant: "default" })}>
                   Star
                </Button>
              </SwipeActions>
            }
            rightActions={
              <SwipeActions>
                <Button size="xs" variant="destructive" onPress={() => toast({ title: "Deleted item", variant: "destructive" })}>
                   Delete
                </Button>
              </SwipeActions>
            }
          >
            <Inline justify="space-between" align="center">
              <Inline align="center" gap={3}>
                <Text size="md"></Text>
                <VStack gap={0}>
                  <Text size="sm" weight="bold">Production Ingress Cluster Pod #04</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>Swipe left to delete, right to star</Text>
                </VStack>
              </Inline>
              <Badge variant="success" size="sm" dot>Active</Badge>
            </Inline>
          </Swipeable>
        </Card.Content>
      </Card>

      {/* 2. LongPress & DoubleTap Handlers */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Touch Triggers"
            title="LongPress (Hold 500ms) & DoubleTap Handlers"
            description="Micro-gesture responders with visual scale compression and callback triggers."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="center" wrap>
            {/* Long Press */}
            <Box style={{ flex: 1, minWidth: 260 }}>
              <LongPress
                delayLongPress={500}
                onLongPress={() => toast({ title: "Hold-to-activate verified!", variant: "success" })}
              >
                <Box
                  p={4}
                  rounded="xl"
                  bg="surfaceSubtle"
                  borderWidth={1}
                  borderColor="rgba(124, 58, 237, 0.4)"
                  style={{ alignItems: "center" }}
                >
                  <VStack gap={1} align="center">
                    <Text size="md">⏱️</Text>
                    <Text size="sm" weight="bold">Press and Hold (500ms)</Text>
                    <Text size="xs" color={semanticColors.foregroundMuted}>Trigger secure action</Text>
                  </VStack>
                </Box>
              </LongPress>
            </Box>

            {/* Double Tap */}
            <Box style={{ flex: 1, minWidth: 260 }}>
              <DoubleTap
                onDoubleTap={() => toast({ title: "Double tap detected!", variant: "primary" as any })}
              >
                <Box
                  p={4}
                  rounded="xl"
                  bg="surfaceSubtle"
                  borderWidth={1}
                  borderColor="rgba(16, 185, 129, 0.4)"
                  style={{ alignItems: "center" }}
                >
                  <VStack gap={1} align="center">
                    <Text size="md"></Text>
                    <Text size="sm" weight="bold">Double Tap Area</Text>
                    <Text size="xs" color={semanticColors.foregroundMuted}>Double click to execute</Text>
                  </VStack>
                </Box>
              </DoubleTap>
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 3. Draggable & Droppable Zone */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Drag & Drop"
            title="Draggable Component & Droppable Landing Zone"
            description="Drop target containers with dashed accent borders for reorderable items."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="center" wrap>
            <Draggable>
              <Box
                p={4}
                rounded="xl"
                borderWidth={1}
                borderColor={semanticColors.primary}
                style={{ backgroundColor: "rgba(124, 58, 237, 0.2)", width: 220 }}
              >
                <Inline align="center" gap={2}>
                  <Text size="sm"></Text>
                  <Text size="xs" weight="bold">Draggable Payload</Text>
                </Inline>
              </Box>
            </Draggable>

            <Box style={{ flex: 1, minWidth: 260 }}>
              <Droppable>
                <VStack gap={1} align="center">
                  <Text size="sm" weight="bold" color={semanticColors.primary}>
                    Drop Target Zone
                  </Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Release payload here to reorder cluster
                  </Text>
                </VStack>
              </Droppable>
            </Box>
          </HStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function AdvancedLayoutCategoryView() {
  const { theme, semanticColors } = useTheme();

  return (
    <Stack gap={10}>
      <CategoryHero
        number="22"
        title="Advanced Layout: Masonry, Wrap & Grids"
        description="Masonry Pinterest-style multi-column grids, auto-wrapping tag layouts, flow strips, aspect-ratio pinning, and layered surfaces."
        tags={[{"label":"15 Layout Primitives","variant":"primary"},{"label":"Multi-Column Masonry","variant":"success"},{"label":"Auto-Wrapping Flex Layout","variant":"outline"}]}
      />

      {/* 1. Masonry & Flow Wraps */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Masonry & Wrap"
            title="Masonry Staggered Grid & Flow / Wrap Container"
            description="Multi-column staggered heights and adaptive wrapping flex containers."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
              Adaptive Flow / Wrap Badges:
            </Text>
            <Wrap gap={2}>
              <Badge variant="primary">️ React Native</Badge>
              <Badge variant="success"> TypeScript Strict</Badge>
              <Badge variant="warning"> Zero-DOM Pollution</Badge>
              <Badge variant="danger"> Turbo AOT Compiler</Badge>
              <Badge variant="outline"> Semantic Tokens</Badge>
              <Badge variant="secondary"> Expo Universal SDK</Badge>
            </Wrap>

            <Divider thickness={1} />

            <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
              2-Column Staggered Masonry Grid:
            </Text>
            <Masonry columns={2} gap={12}>
              <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)" style={{ height: 110 }}>
                <VStack gap={1}>
                  <Text size="sm" weight="bold">Telemetry Pipeline</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>Ingress throughput: 42,000 rps</Text>
                </VStack>
              </Box>

              <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)" style={{ height: 160 }}>
                <VStack gap={1}>
                  <Text size="sm" weight="bold">Database Replica Node</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>PostgreSQL 16 cluster with multi-region standby replication.</Text>
                  <Badge variant="success" size="sm" dot style={{ marginTop: 8 }}>Synced</Badge>
                </VStack>
              </Box>

              <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)" style={{ height: 140 }}>
                <VStack gap={1}>
                  <Text size="sm" weight="bold">Cache Invalidation Layer</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>Redis cluster with 99.4% hit rate.</Text>
                </VStack>
              </Box>

              <Box p={4} rounded="xl" bg="surfaceSubtle" borderWidth={1} borderColor="rgba(255,255,255,0.06)" style={{ height: 100 }}>
                <VStack gap={1}>
                  <Text size="sm" weight="bold">Security Mesh</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>TLS 1.3 mTLS Enforced</Text>
                </VStack>
              </Box>
            </Masonry>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. AspectRatio & Absolute Layer Positioning */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="AspectRatio & Layers"
            title="AspectRatio Box & Absolute Layer Overlay"
            description="Geometrically constrained ratio containers with pinned absolute badges."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            {/* 16:9 Aspect Ratio Box */}
            <Box style={{ flex: 1, minWidth: 260 }}>
              <VStack gap={2}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  16:9 AspectRatio Box with Absolute Overlay:
                </Text>
                <AspectRatio
                  ratio={16 / 9}
                  style={{
                    borderRadius: 16,
                    backgroundColor: "rgba(20, 15, 38, 0.9)",
                    borderWidth: 1,
                    borderColor: "rgba(124, 58, 237, 0.4)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Center style={{ width: "100%", height: "100%" }}>
                    <Text size="2xl">️</Text>
                    <Text size="xs" weight="bold" color={semanticColors.foreground} style={{ marginTop: 4 }}>
                      16:9 High-Def Video Stream
                    </Text>
                  </Center>

                  <Absolute top={10} right={10}>
                    <Badge variant="danger" size="sm" dot>LIVE</Badge>
                  </Absolute>

                  <Absolute bottom={10} left={10}>
                    <Text size="xs" color="#FFF" weight="bold" style={{ backgroundColor: "rgba(0,0,0,0.6)", paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>
                      1080p 60fps
                    </Text>
                  </Absolute>
                </AspectRatio>
              </VStack>
            </Box>

            {/* 1:1 Square Ratio Box */}
            <Box style={{ width: 160 }}>
              <VStack gap={2}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  1:1 Square Box:
                </Text>
                <AspectRatio
                  ratio={1}
                  style={{
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    borderWidth: 1,
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    overflow: "hidden",
                  }}
                >
                  <Center style={{ width: "100%", height: "100%" }}>
                    <Text size="2xl">️</Text>
                    <Text size="xs" weight="bold" color="#10B981" style={{ marginTop: 4 }}>
                      1:1 Preset
                    </Text>
                  </Center>
                </AspectRatio>
              </VStack>
            </Box>
          </HStack>
        </Card.Content>
      </Card>

      {/* 4. AnimatedCollapse & ContainerQuery */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Adaptive Layout"
            title="AnimatedCollapse & ContainerQuery"
            description="Transições de colapso suaves e layouts adaptativos baseados na dimensão real do contêiner."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <ContainerQuery minWidth={320}>
              {(state) => (
                <Box
                  p={4}
                  rounded="lg"
                  style={{
                    backgroundColor: semanticColors.surfaceSubtle,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                  }}
                >
                  <Text size="sm" weight="bold" color={semanticColors.primary}>
                    Breakpoint Ativo: {state.matches ? "AMPLO (>= 320px)" : "COMPACTO (< 320px)"}
                  </Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Largura monitorada: {Math.round(state.dimensions.width)}px • Altura: {Math.round(state.dimensions.height)}px
                  </Text>
                </Box>
              )}
            </ContainerQuery>
          </VStack>
        </Card.Content>
      </Card>

      {/* 5. Responsive SplitView (Master-Detail) */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Master-Detail"
            title="SplitView: Layout Mestre-Detalhe Responsivo"
            description="Exibe dois painéis simultâneos no Desktop e se converte em pilha com botão Voltar no Mobile."
          />
        </Card.Header>
        <Card.Content>
          <Box
            style={{
              height: 240,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: semanticColors.border,
              overflow: "hidden",
            }}
          >
            <SplitView
              masterWidth={220}
              master={
                <VStack gap={2} p={3}>
                  <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>LISTA DE ITENS</Text>
                  <Badge variant="primary" size="sm">Conversa #1</Badge>
                  <Badge variant="outline" size="sm">Conversa #2</Badge>
                </VStack>
              }
              detail={
                <VStack gap={2} p={4}>
                  <Text size="sm" weight="bold" color={semanticColors.foreground}>Painel de Detalhes Ativo</Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Conteúdo adaptativo com suporte à navegação em pilha no mobile.
                  </Text>
                </VStack>
              }
            />
          </Box>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function MobileCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();
  const [activeBottomNav, setActiveBottomNav] = useState("home");

  return (
    <Stack gap={10}>
      <CategoryHero
        number="23"
        title="Mobile-Specific Controls & Native Insets"
        description="Floating Action Buttons (FAB), bottom tab bars, pull-to-refresh indicators, share action triggers, and haptic-feedback buttons."
        tags={[{"label":"11 Mobile Primitives","variant":"primary"},{"label":"Floating Action Button (FAB)","variant":"success"},{"label":"Bottom Tab Bar Navigation","variant":"outline"}]}
      />

      {/* 1. Mobile Bottom Tab Bar & FAB */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Mobile Bars"
            title="Mobile BottomTabBar & FloatingActionButton (FAB)"
            description="Thumb-accessible mobile navigation bar and circular floating action trigger."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={4}>
            <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
              Mobile Bottom Navigation Bar Simulation:
            </Text>
            <Box
              style={{
                borderRadius: 16,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(16, 18, 30, 0.95)",
              }}
            >
              <BottomTabBar>
                <Pressable onPress={() => setActiveBottomNav("home")}>
                  <VStack gap={0.5} align="center">
                    <Text size="sm"></Text>
                    <Text size="xs" weight={activeBottomNav === "home" ? "bold" : "regular"} color={activeBottomNav === "home" ? semanticColors.primary : semanticColors.foregroundMuted}>
                      Home
                    </Text>
                  </VStack>
                </Pressable>

                <Pressable onPress={() => setActiveBottomNav("clusters")}>
                  <VStack gap={0.5} align="center">
                    <Text size="sm">️</Text>
                    <Text size="xs" weight={activeBottomNav === "clusters" ? "bold" : "regular"} color={activeBottomNav === "clusters" ? semanticColors.primary : semanticColors.foregroundMuted}>
                      Clusters
                    </Text>
                  </VStack>
                </Pressable>

                <FloatingActionButton
                  onPress={() => toast({ title: "Floating Action Triggered!", variant: "primary" as any })}
                  style={{
                    transform: [{ translateY: -16 }],
                    shadowColor: semanticColors.primary,
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                >
                  <Text size="lg" color="#FFF" weight="bold">+</Text>
                </FloatingActionButton>

                <Pressable onPress={() => setActiveBottomNav("metrics")}>
                  <VStack gap={0.5} align="center">
                    <Text size="sm"></Text>
                    <Text size="xs" weight={activeBottomNav === "metrics" ? "bold" : "regular"} color={activeBottomNav === "metrics" ? semanticColors.primary : semanticColors.foregroundMuted}>
                      Metrics
                    </Text>
                  </VStack>
                </Pressable>

                <Pressable onPress={() => setActiveBottomNav("account")}>
                  <VStack gap={0.5} align="center">
                    <Text size="sm"></Text>
                    <Text size="xs" weight={activeBottomNav === "account" ? "bold" : "regular"} color={activeBottomNav === "account" ? semanticColors.primary : semanticColors.foregroundMuted}>
                      Account
                    </Text>
                  </VStack>
                </Pressable>
              </BottomTabBar>
            </Box>
          </VStack>
        </Card.Content>
      </Card>

      {/* 2. ShareButton, HapticButton & KeyboardAccessory */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Actions"
            title="Native ShareButton, HapticButton & Keyboard Toolbar"
            description="Native mobile capabilities including system sharing and keyboard accessory actions."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={5}>
            <HStack gap={4} align="center" wrap>
              <ShareButton
                shareContent={{
                  title: "Unconfused UI Architecture",
                  message: "Check out Unconfused UI - the next-gen React Native design system!",
                }}
              >
                 Native Share Action
              </ShareButton>

              <HapticButton
                variant="primary"
                onPress={() => toast({ title: "Haptic feedback triggered", variant: "success" })}
              >
                 Haptic Touch Button
              </HapticButton>
            </HStack>

            <Divider thickness={1} />

            <VStack gap={2}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                KeyboardAccessory Toolbar Simulation:
              </Text>
              <KeyboardAccessory>
                <Inline justify="space-between" align="center">
                  <Inline gap={2}>
                    <Button size="xs" variant="ghost">‹ Prev</Button>
                    <Button size="xs" variant="ghost">Next ›</Button>
                  </Inline>
                  <Button size="xs" variant="primary" onPress={() => toast({ title: "Keyboard Dismissed", variant: "default" })}>
                    Done
                  </Button>
                </Inline>
              </KeyboardAccessory>
            </VStack>
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}

export function CompositeCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();

  const pricingFeaturesPro = [
    "Unlimited distributed nodes",
    "Real-time WebSocket telemetry",
    "Automated HSM key rotation",
    "Dedicated 24/7 SRE support",
  ];

  const pricingFeaturesEnt = [
    "Custom on-premise deployment",
    "Zero-trust mTLS mesh gateway",
    "SOC2 Type II compliance audits",
    "Custom SLA: 99.999% uptime",
  ];

  return (
    <Stack gap={10}>
      <CategoryHero
        number="24"
        title="Composite Suite & Production Modules"
        description="Full-fledged application modules: Authentication login forms, filter sheets, metric KPI dashboards, settings panels, and tiered pricing tables."
        tags={[{"label":"22 Composite Modules","variant":"primary"},{"label":"Full Production Modules","variant":"success"},{"label":"Tiered Pricing Matrix","variant":"outline"}]}
      />

      {/* 1. LoginForm & FileUploader */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Forms & Upload"
            title="LoginForm & Drag-and-Drop FileUploader"
            description="Complete sign-in card and dashed file dropzone."
          />
        </Card.Header>
        <Card.Content>
          <HStack gap={6} align="flex-start" wrap>
            {/* LoginForm */}
            <Box style={{ flex: 1, minWidth: 300 }}>
              <LoginForm onLogin={(d) => toast({ title: `Authenticated: ${d.email}`, variant: "success" })} />
            </Box>

            {/* FileUploader & Range */}
            <VStack gap={4} style={{ flex: 1, minWidth: 280 }}>
              <FileUploader
                label="Deploy Architecture Manifest"
                description="Drop .json, .yaml or .k8s manifest file"
                onUpload={() => toast({ title: "Manifest uploaded successfully", variant: "success" })}
              />

              <VStack gap={1.5}>
                <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
                  Composite DateRangePicker:
                </Text>
                <DateRangePicker />
              </VStack>
            </VStack>
          </HStack>
        </Card.Content>
      </Card>

      {/* 2. StatsCards & PricingCard Tiers */}
      <Card variant="glass">
        <Card.Header>
          <SectionHeader
            tag="Business"
            title="StatsCard KPIs & Tiered PricingCard Matrix"
            description="Metrics tracking cards and full subscription pricing tables."
          />
        </Card.Header>
        <Card.Content>
          <VStack gap={6}>
            {/* Stats Cards */}
            <HStack gap={4} wrap>
              <StatsCard title="Global Monthly Ingress" value="1.48 PB" change="+24.2%" isPositive />
              <StatsCard title="Active Cluster Pods" value="1,248" change="+12.0%" isPositive />
              <StatsCard title="Average Incident TTFB" value="0.4ms" change="-18.5%" isPositive />
            </HStack>

            <Divider thickness={1} />

            {/* Pricing Cards */}
            <HStack gap={4} wrap>
              <PricingCard
                plan="Developer Cloud"
                price="$29"
                period="/month"
                features={pricingFeaturesPro}
                onSelect={() => toast({ title: "Developer plan selected", variant: "default" })}
              />

              <PricingCard
                plan="Enterprise Mesh"
                price="$199"
                period="/month"
                popular
                features={pricingFeaturesEnt}
                onSelect={() => toast({ title: "Enterprise plan selected", variant: "success" })}
              />
            </HStack>
          </VStack>
        </Card.Content>
      </Card>
    </Stack>
  );
}


export function IconographyCategoryView() {
  const { theme, semanticColors } = useTheme();
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [iconSize, setIconSize] = useState<16 | 20 | 24 | 32 | 40>(24);
  const [iconStroke, setIconStroke] = useState<1.5 | 2 | 2.5>(2);

  const allIconNames: Array<{ name: IconName; category: string }> = [
    // Navigation & Actions
    { name: "chevron-right", category: "Navigation" },
    { name: "chevron-left", category: "Navigation" },
    { name: "chevron-up", category: "Navigation" },
    { name: "chevron-down", category: "Navigation" },
    { name: "arrow-right", category: "Navigation" },
    { name: "arrow-left", category: "Navigation" },
    { name: "arrow-up", category: "Navigation" },
    { name: "arrow-down", category: "Navigation" },
    { name: "menu", category: "Navigation" },
    { name: "close", category: "Navigation" },
    { name: "plus", category: "Navigation" },
    { name: "minus", category: "Navigation" },
    { name: "search", category: "Navigation" },
    { name: "filter", category: "Navigation" },
    { name: "sliders", category: "Navigation" },
    { name: "more-horizontal", category: "Navigation" },
    { name: "more-vertical", category: "Navigation" },
    { name: "refresh", category: "Navigation" },
    { name: "share", category: "Navigation" },
    { name: "external-link", category: "Navigation" },

    // Feedback & Security
    { name: "check", category: "Feedback & Security" },
    { name: "check-circle", category: "Feedback & Security" },
    { name: "check-check", category: "Feedback & Security" },
    { name: "alert-circle", category: "Feedback & Security" },
    { name: "alert-triangle", category: "Feedback & Security" },
    { name: "info", category: "Feedback & Security" },
    { name: "help-circle", category: "Feedback & Security" },
    { name: "x-circle", category: "Feedback & Security" },
    { name: "bell", category: "Feedback & Security" },
    { name: "bell-off", category: "Feedback & Security" },
    { name: "shield", category: "Feedback & Security" },
    { name: "shield-check", category: "Feedback & Security" },
    { name: "lock", category: "Feedback & Security" },
    { name: "unlock", category: "Feedback & Security" },
    { name: "key", category: "Feedback & Security" },

    // Interface, AI & Tools
    { name: "sparkles", category: "Interface & AI" },
    { name: "command", category: "Interface & AI" },
    { name: "terminal", category: "Interface & AI" },
    { name: "code", category: "Interface & AI" },
    { name: "layers", category: "Interface & AI" },
    { name: "grid", category: "Interface & AI" },
    { name: "layout", category: "Interface & AI" },
    { name: "settings", category: "Interface & AI" },
    { name: "sun", category: "Interface & AI" },
    { name: "moon", category: "Interface & AI" },
    { name: "eye", category: "Interface & AI" },
    { name: "eye-off", category: "Interface & AI" },
    { name: "copy", category: "Interface & AI" },
    { name: "trash", category: "Interface & AI" },
    { name: "edit", category: "Interface & AI" },
    { name: "download", category: "Interface & AI" },
    { name: "upload", category: "Interface & AI" },
    { name: "folder", category: "Interface & AI" },
    { name: "file", category: "Interface & AI" },
    { name: "file-text", category: "Interface & AI" },

    // Media & Hardware
    { name: "image", category: "Media" },
    { name: "video", category: "Media" },
    { name: "music", category: "Media" },
    { name: "camera", category: "Media" },
    { name: "mic", category: "Media" },
    { name: "volume", category: "Media" },
    { name: "volume-x", category: "Media" },
    { name: "play", category: "Media" },
    { name: "pause", category: "Media" },
    { name: "maximize", category: "Media" },
    { name: "minimize", category: "Media" },

    // Identity & Communication
    { name: "user", category: "Identity & Social" },
    { name: "users", category: "Identity & Social" },
    { name: "user-plus", category: "Identity & Social" },
    { name: "heart", category: "Identity & Social" },
    { name: "star", category: "Identity & Social" },
    { name: "bookmark", category: "Identity & Social" },
    { name: "thumbs-up", category: "Identity & Social" },
    { name: "message-square", category: "Identity & Social" },
    { name: "send", category: "Identity & Social" },
    { name: "mail", category: "Identity & Social" },
    { name: "phone", category: "Identity & Social" },
    { name: "map-pin", category: "Identity & Social" },

    // Data, Systems & Devices
    { name: "calendar", category: "Data & Systems" },
    { name: "clock", category: "Data & Systems" },
    { name: "credit-card", category: "Data & Systems" },
    { name: "bar-chart", category: "Data & Systems" },
    { name: "pie-chart", category: "Data & Systems" },
    { name: "trending-up", category: "Data & Systems" },
    { name: "zap", category: "Data & Systems" },
    { name: "activity", category: "Data & Systems" },
    { name: "database", category: "Data & Systems" },
    { name: "server", category: "Data & Systems" },
    { name: "cpu", category: "Data & Systems" },
    { name: "globe", category: "Data & Systems" },
    { name: "compass", category: "Data & Systems" },
    { name: "wifi", category: "Data & Systems" },
  ];

  const filteredIcons = allIconNames.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const copyIconJsx = (iconName: string) => {
    const pascalName = iconName
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") + "Icon";
    const snippet = `<${pascalName} size={${iconSize}} color={theme.colors.primary} />`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(snippet);
    }
    toast({
      title: "Ícone copiado!",
      description: snippet,
      variant: "success",
    });
  };

  return (
    <Stack gap={10}>
      <CategoryHero
        number="25"
        title="Universal Vector Iconography Suite"
        description="Comprehensive vector icon pack of 80+ meticulously crafted 24x24 icons. 100% universal across Expo, iOS, Android, and Web with semantic currentColor binding and adjustable stroke physics."
        tags={[
          { label: "80+ Vector Icons", variant: "primary" },
          { label: "Zero Native Binary Linkings", variant: "success" },
          { label: "Semantic Token Bindings", variant: "outline" },
        ]}
      />

      {/* Control Bar: Search & Size Selectors */}
      <Card variant="glass">
        <Card.Content>
          <VStack gap={4}>
            <Inline justify="space-between" align="center" wrap gap={3}>
              <Box style={{ flex: 1, minWidth: 260 }}>
                <SearchInput
                  placeholder="Filter 80+ SVG icons (e.g. check, user, sparkles)..."
                  value={search}
                  onChangeText={setSearch}
                  size="md"
                />
              </Box>

              <Inline align="center" gap={3}>
                {/* Size Selector */}
                <Inline align="center" gap={1.5}>
                  <Text size="xs" color={semanticColors.foregroundMuted} weight="bold">SIZE:</Text>
                  {([16, 20, 24, 32, 40] as const).map((s) => (
                    <Pressable
                      key={s}
                      onPress={() => setIconSize(s)}
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 6,
                        backgroundColor: iconSize === s ? semanticColors.primary : "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <Text size="xs" weight="bold" color={iconSize === s ? "#FFF" : semanticColors.foreground}>
                        {s}
                      </Text>
                    </Pressable>
                  ))}
                </Inline>

                {/* Stroke Width Selector */}
                <Inline align="center" gap={1.5}>
                  <Text size="xs" color={semanticColors.foregroundMuted} weight="bold">STROKE:</Text>
                  {([1.5, 2, 2.5] as const).map((st) => (
                    <Pressable
                      key={st}
                      onPress={() => setIconStroke(st)}
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 6,
                        backgroundColor: iconStroke === st ? semanticColors.primary : "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <Text size="xs" weight="bold" color={iconStroke === st ? "#FFF" : semanticColors.foreground}>
                        {st}x
                      </Text>
                    </Pressable>
                  ))}
                </Inline>
              </Inline>
            </Inline>

            <Text size="xs" color={semanticColors.foregroundSubtle}>
              Showing {filteredIcons.length} of {allIconNames.length} icons. Click any card to copy JSX component snippet.
            </Text>
          </VStack>
        </Card.Content>
      </Card>

      {/* Grid of Interactive SVG Icons */}
      <HStack gap={3} wrap>
        {filteredIcons.map((item) => (
          <Pressable
            key={item.name}
            onPress={() => copyIconJsx(item.name)}
            style={{
              width: "18.5%",
              minWidth: 140,
              flexGrow: 1,
              padding: 16,
              borderRadius: 12,
              backgroundColor: "rgba(16, 18, 30, 0.8)",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.08)",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Box
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name={item.name} size={iconSize} strokeWidth={iconStroke} color={semanticColors.primary} />
            </Box>

            <VStack gap={0.5} style={{ alignItems: "center" }}>
              <Text size="xs" weight="bold" color={semanticColors.foreground} style={{ fontFamily: "monospace", fontSize: 11, textAlign: "center" }}>
                {item.name}
              </Text>
              <Text size="xs" color={semanticColors.foregroundSubtle} style={{ fontSize: 9, textAlign: "center" }}>
                {item.category}
              </Text>
            </VStack>
          </Pressable>
        ))}
      </HStack>
    </Stack>
  );
}

export function ScrollViewCategoryView() {
  const { semanticColors } = useTheme();
  const { toast } = useToast();
  const [scrollDir, setScrollDir] = useState<"vertical" | "horizontal">("vertical");
  const [hideIndicators, setHideIndicators] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    toast({
      title: "Recarregando dados...",
      description: "Pull-to-refresh ativado com mola elástica.",
      variant: "default",
    });
    await new Promise((r) => setTimeout(r, 1200));
    setRefreshing(false);
    toast({
      title: "Dados atualizados!",
      description: "Conteúdo sincronizado com sucesso.",
      variant: "success",
    });
  };

  return (
    <Stack gap={8}>
      <CategoryHero
        number="26"
        title="ScrollView & Gestos Elásticos"
        description="Primitiva de rolagem universal com suporte nativo a Pull-to-Refresh por molas físicas, controle de indicadores, tokens semânticos de padding e gap, e carrosséis fluidos."
        tags={[
          { label: "Pull-to-Refresh", variant: "primary" },
          { label: "Horizontal & Vertical", variant: "success" },
          { label: "Token-bound Spacing", variant: "outline" },
        ]}
      />

      {/* Card 1: Interactive Scroll Controls */}
      <ComponentPlayground
        tag="Scroll & Inércia"
        title="Controle de Direção & Indicadores"
        description="Alterne dinamicamente entre rolagem vertical e carrossel horizontal de alta performance."
        code={`<ScrollView
  horizontal={${scrollDir === "horizontal"}}
  showsHorizontalScrollIndicator={${!hideIndicators}}
  showsVerticalScrollIndicator={${!hideIndicators}}
  padding={4}
  gap={3}
  onPullToRefresh={handleRefresh}
>
  {/* Elementos filhos */}
</ScrollView>`}
      >
        <VStack gap={3}>
          <Inline gap={2} align="center">
            <Button
              variant={scrollDir === "vertical" ? "primary" : "outline"}
              size="sm"
              onPress={() => setScrollDir("vertical")}
            >
              Vertical
            </Button>
            <Button
              variant={scrollDir === "horizontal" ? "primary" : "outline"}
              size="sm"
              onPress={() => setScrollDir("horizontal")}
            >
              Horizontal
            </Button>
            <Button
              variant={hideIndicators ? "primary" : "outline"}
              size="sm"
              onPress={() => setHideIndicators(!hideIndicators)}
            >
              {hideIndicators ? "Indicador Oculto" : "Indicador Visível"}
            </Button>
          </Inline>

          <Box
            style={{
              height: 260,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: semanticColors.border,
              overflow: "hidden",
              backgroundColor: semanticColors.surfaceSubtle,
            }}
          >
            <ScrollView
              horizontal={scrollDir === "horizontal"}
              showsHorizontalScrollIndicator={!hideIndicators}
              showsVerticalScrollIndicator={!hideIndicators}
              onPullToRefresh={handleRefresh}
              refreshing={refreshing}
              padding={4}
              gap={3}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box
                  key={item}
                  style={{
                    width: scrollDir === "horizontal" ? 180 : "100%",
                    height: scrollDir === "horizontal" ? 210 : 80,
                    padding: 16,
                    borderRadius: 10,
                    backgroundColor: semanticColors.surface,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Badge variant="primary" size="sm">Cartão #{item}</Badge>
                  <Text size="sm" weight="bold" color={semanticColors.foreground}>
                    Mola Elástica
                  </Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Arrasto com inércia física 60fps
                  </Text>
                </Box>
              ))}
            </ScrollView>
          </Box>
        </VStack>
      </ComponentPlayground>

      {/* Card 2: Micro-Interações de Gestos */}
      <ComponentPlayground
        tag="Gestos Físicos"
        title="SwipeableRow: Gesto de Deslizar para Ações"
        description="Arraste qualquer linha para a esquerda ou direita para revelar botões de ação com física de retorno amortecido."
        code={`<SwipeableRow
  leftAction={<Button variant="primary" size="sm">Editar</Button>}
  rightAction={<Button variant="danger" size="sm">Excluir</Button>}
  onSwipeRight={() => toast.success("Editado!")}
  onSwipeLeft={() => toast.danger("Excluído!")}
>
  <Text>Item com gesto de arrastar</Text>
</SwipeableRow>`}
      >
        <VStack gap={2}>
          {[
            { id: "1", title: "Fatura #8492 — Café Softwares", status: "Pago", date: "Hoje" },
            { id: "2", title: "Deploy em Produção (v2.4 Pro)", status: "Concluído", date: "Ontem" },
          ].map((row) => (
            <SwipeableRow
              key={row.id}
              leftAction={
                <Badge variant="primary" size="md">Editar</Badge>
              }
              rightAction={
                <Badge variant="danger" size="md">Excluir</Badge>
              }
              onSwipeLeft={() => toast({ title: "Excluído!", description: row.title, variant: "danger" })}
              onSwipeRight={() => toast({ title: "Editar!", description: row.title, variant: "success" })}
            >
              <Inline
                justify="space-between"
                align="center"
                style={{
                  padding: 14,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: semanticColors.border,
                }}
              >
                <VStack gap={0.5}>
                  <Text size="sm" weight="bold" color={semanticColors.foreground}>
                    {row.title}
                  </Text>
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    Status: {row.status} • {row.date}
                  </Text>
                </VStack>
                <Text size="xs" color={semanticColors.foregroundSubtle}>
                  ← Arraste →
                </Text>
              </Inline>
            </SwipeableRow>
          ))}
        </VStack>
      </ComponentPlayground>
    </Stack>
  );
}



interface LaboratoryContentProps {
  activeSeed: string;
  onSelectSeed: (seed: string) => void;
  neutralFamily: "auto" | "slate" | "zinc" | "warm" | "pure";
  onSelectNeutral: (fam: "auto" | "slate" | "zinc" | "warm" | "pure") => void;
}

const themePresets = [
  { name: "Violet Pro", seed: "#8B5CF6", color: "#8B5CF6" },
  { name: "Indigo Tech", seed: "#6366F1", color: "#6366F1" },
  { name: "Emerald Growth", seed: "#10B981", color: "#10B981" },
  { name: "Cyber Rose", seed: "#F43F5E", color: "#F43F5E" },
  { name: "Amber Gold", seed: "#F59E0B", color: "#F59E0B" },
  { name: "Titanium Slate", seed: "#71717A", color: "#71717A" },
];

const taxonomySuites = [
  {
    name: "01 Foundations",
    items: [
      { id: "foundations", num: "01", name: "1. Foundations & Base" },
      { id: "typography", num: "02", name: "2. Tipografia" },
      { id: "surfaces", num: "11", name: "11. Cards & Surfaces" },
      { id: "advancedlayout", num: "22", name: "22. Layout Avançado" },
      { id: "scrollview", num: "26", name: "26. ScrollView & Gestos" },
    ],
  },
  {
    name: "02 Forms & Inputs",
    items: [
      { id: "buttons", num: "03", name: "3. Buttons & Triggers" },
      { id: "inputs", num: "04", name: "4. Inputs & Textfields" },
      { id: "selection", num: "05", name: "5. Selection Controls" },
      { id: "forms", num: "06", name: "6. Formulários" },
      { id: "datetime", num: "15", name: "15. Date & Time" },
    ],
  },
  {
    name: "03 Navigation & Overlays",
    items: [
      { id: "overlay", num: "08", name: "8. Overlay & Dialog" },
      { id: "navigation", num: "09", name: "9. Navigation UI" },
      { id: "menus", num: "14", name: "14. Menus & Command" },
      { id: "mobile", num: "23", name: "23. Mobile Specific" },
    ],
  },
  {
    name: "04 Data & Media",
    items: [
      { id: "lists", num: "10", name: "10. Lists & Tables" },
      { id: "media", num: "16", name: "16. Media & Carousels" },
      { id: "dataviz", num: "20", name: "20. Data Visualization" },
      { id: "icons", num: "25", name: "25. Iconografia SVG" },
    ],
  },
  {
    name: "05 Feedback & States",
    items: [
      { id: "feedback", num: "07", name: "7. Feedback & Alerts" },
      { id: "avatar", num: "12", name: "12. Avatar & Identity" },
      { id: "badges", num: "13", name: "13. Badges & Tags" },
      { id: "loading", num: "17", name: "17. Loading & Skeletons" },
      { id: "emptystates", num: "18", name: "18. Empty States" },
      { id: "accordion", num: "19", name: "19. Accordion & Tree" },
      { id: "gestures", num: "21", name: "21. Gestures & Physics" },
    ],
  },
  {
    name: "06 Composite Suite",
    items: [
      { id: "composite", num: "24", name: "24. Componentes Compostos" },
    ],
  },
];

function LaboratoryContent({ activeSeed, onSelectSeed, neutralFamily, onSelectNeutral }: LaboratoryContentProps) {
  const { theme, semanticColors, activeColorScheme, toggleColorScheme } = useTheme();
  const { toast } = useToast();
  const [activeNav, setActiveNav] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [themeCustomizerOpen, setThemeCustomizerOpen] = useState(false);
  const [customRadius, setCustomRadius] = useState<"sharp" | "subtle" | "rounded" | "pill">("rounded");
  const [customDensity, setCustomDensity] = useState<"compact" | "comfortable" | "spacious">("comfortable");
  const [expandedSuites, setExpandedSuites] = useState<Record<string, boolean>>({
    "01 Foundations": true,
    "02 Forms & Inputs": true,
    "03 Navigation & Overlays": true,
    "04 Data & Media": true,
    "05 Feedback & States": true,
    "06 Composite Suite": true,
  });

  const toggleSuite = (name: string) => {
    setExpandedSuites((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // Global Web Input Focus and Autofill Reset
  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleId = "unconfused-web-input-clean-reset";
      if (!document.getElementById(styleId)) {
        const styleEl = document.createElement("style");
        styleEl.id = styleId;
        styleEl.innerHTML = `
          input, textarea, select {
            outline: none !important;
            outline-style: none !important;
            box-shadow: none !important;
          }
          input:focus, textarea:focus, select:focus {
            outline: none !important;
            outline-style: none !important;
            box-shadow: none !important;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 1000px #0e101a inset !important;
            -webkit-text-fill-color: #f1f5f9 !important;
            transition: background-color 5000s ease-in-out 0s;
          }
        `;
        document.head.appendChild(styleEl);
      }
    }
  }, []);

  // Global Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          setCommandPaletteOpen((prev) => !prev);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  const allItems = taxonomySuites.flatMap((s) => s.items);
  const currentItem = allItems.find((c) => c.id === activeNav) ?? allItems[0];
  const currentSuite = taxonomySuites.find((s) => s.items.some((i) => i.id === activeNav))?.name ?? "01 Foundations";

  const filteredSuites = taxonomySuites.map((suite) => ({
    ...suite,
    items: suite.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.num.includes(searchQuery)
    ),
  })).filter((suite) => suite.items.length > 0);

  // Command palette items list
  const commandItems = React.useMemo(() => {
    return allItems.map((item) => ({
      id: item.id,
      label: item.name,
      category: taxonomySuites.find((s) => s.items.some((i) => i.id === item.id))?.name,
      shortcut: item.num,
      onSelect: () => {
        setActiveNav(item.id);
        setCommandPaletteOpen(false);
      },
    }));
  }, [allItems]);

  const exportThemeJson = () => {
    const themeExport = {
      name: `Unconfused-${activeSeed}`,
      seed: activeSeed,
      mode: activeColorScheme,
      radius: customRadius,
      density: customDensity,
      semanticTokens: semanticColors,
    };
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(themeExport, null, 2));
    }
    toast({
      title: "Configuração de Tema Exportada!",
      description: "JSON copiado para o seu clipboard.",
      variant: "success",
    });
  };

  const renderActiveView = () => {
    let viewNode: React.ReactNode;
    switch (activeNav) {
      case "home":
        return <HomeScreen onNavigateTo={(id) => setActiveNav(id)} />;
      case "docs":
        return <DocsScreen />;
      case "usage":
        return <UsageModesScreen />;
      case "privacy":
        return <PrivacyPoliciesScreen />;

      case "typography":
        viewNode = <TypographyView />;
        break;
      case "buttons":
        viewNode = <ButtonsCategoryView />;
        break;
      case "inputs":
        viewNode = <InputsCategoryView />;
        break;
      case "selection":
        viewNode = <SelectionCategoryView />;
        break;
      case "forms":
        viewNode = <FormsCategoryView />;
        break;
      case "feedback":
        viewNode = <FeedbackCategoryView />;
        break;
      case "overlay":
        viewNode = <OverlayCategoryView />;
        break;
      case "navigation":
        viewNode = <NavigationCategoryView />;
        break;
      case "lists":
        viewNode = <ListsCategoryView />;
        break;
      case "surfaces":
        viewNode = <SurfacesCategoryView />;
        break;
      case "avatar":
        viewNode = <AvatarCategoryView />;
        break;
      case "badges":
        viewNode = <BadgesCategoryView />;
        break;
      case "menus":
        viewNode = <MenusCategoryView />;
        break;
      case "datetime":
        viewNode = <DateTimeCategoryView />;
        break;
      case "media":
        viewNode = <MediaCategoryView />;
        break;
      case "loading":
        viewNode = <LoadingCategoryView />;
        break;
      case "emptystates":
        viewNode = <EmptyStatesCategoryView />;
        break;
      case "accordion":
        viewNode = <AccordionCategoryView />;
        break;
      case "dataviz":
        viewNode = <DataVizCategoryView />;
        break;
      case "gestures":
        viewNode = <GesturesCategoryView />;
        break;
      case "advancedlayout":
        viewNode = <AdvancedLayoutCategoryView />;
        break;
      case "scrollview":
        viewNode = <ScrollViewCategoryView />;
        break;
      case "mobile":
        viewNode = <MobileCategoryView />;
        break;
      case "composite":
        viewNode = <CompositeCategoryView />;
        break;
      case "icons":
        viewNode = <IconographyCategoryView />;
        break;
      case "foundations":
      default:
        viewNode = <FoundationsView />;
        break;
    }

    return (
      <VStack gap={4}>
        {viewNode}
        <CategoryFooter currentId={activeNav} onNavigate={(nextId) => setActiveNav(nextId)} />
      </VStack>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: semanticColors.background }}>
      <StatusBar barStyle={activeColorScheme === "dark" ? "light-content" : "dark-content"} />

      {/* Global ⌘K Command Palette Modal */}
      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
        items={commandItems}
        placeholder="Search all 24 categories and 268 components (⌘K)..."
      />

      {/* Theme Customizer Sheet Drawer */}
      <Sheet open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen}>
        <Sheet.Header>
          <Sheet.Title>Theme Token Sandbox</Sheet.Title>
          <Sheet.Description>Fine-tune live design tokens, radius physics, density and export to JSON.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Content>
          <VStack gap={4} style={{ paddingVertical: 8 }}>
            {/* Seed Color Swatches */}
            <VStack gap={1.5}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ textTransform: "uppercase", letterSpacing: 0.8 }}>
                Perceptual Seed Palette
              </Text>
              <Inline gap={2} wrap>
                {themePresets.map((preset) => (
                  <Pressable
                    key={preset.seed}
                    onPress={() => onSelectSeed(preset.seed)}
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 8,
                      backgroundColor: activeSeed === preset.seed ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.04)",
                      borderWidth: 1,
                      borderColor: activeSeed === preset.seed ? preset.color : "rgba(255, 255, 255, 0.08)",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Box style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: preset.color }} />
                    <Text size="xs" weight={activeSeed === preset.seed ? "bold" : "regular"} color={semanticColors.foreground}>
                      {preset.name}
                    </Text>
                  </Pressable>
                ))}
              </Inline>
            </VStack>

            {/* Radius Preset */}
            <VStack gap={1.5}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ textTransform: "uppercase", letterSpacing: 0.8 }}>
                Border Radius Curve
              </Text>
              <Inline gap={2}>
                {(["sharp", "subtle", "rounded", "pill"] as const).map((rad) => (
                  <Pressable
                    key={rad}
                    onPress={() => setCustomRadius(rad)}
                    style={{
                      flex: 1,
                      paddingVertical: 6,
                      borderRadius: 6,
                      backgroundColor: customRadius === rad ? semanticColors.primary : "rgba(255, 255, 255, 0.05)",
                      alignItems: "center",
                    }}
                  >
                    <Text size="xs" weight="bold" color={customRadius === rad ? "#FFF" : semanticColors.foreground}>
                      {rad.toUpperCase()}
                    </Text>
                  </Pressable>
                ))}
              </Inline>
            </VStack>

            {/* Neutral Family Selector */}
            <VStack gap={1.5}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ textTransform: "uppercase", letterSpacing: 0.8 }}>
                Branded Neutral Family
              </Text>
              <Inline gap={1.5} wrap>
                {(["auto", "slate", "zinc", "warm", "pure"] as const).map((fam) => (
                  <Pressable
                    key={fam}
                    onPress={() => onSelectNeutral(fam)}
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 6,
                      backgroundColor: neutralFamily === fam ? semanticColors.primary : "rgba(255, 255, 255, 0.05)",
                      borderWidth: 1,
                      borderColor: neutralFamily === fam ? semanticColors.primary : "rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Text size="xs" weight="bold" color={neutralFamily === fam ? "#FFF" : semanticColors.foreground}>
                      {fam.toUpperCase()}
                    </Text>
                  </Pressable>
                ))}
              </Inline>
            </VStack>

            {/* Density Selector */}
            <VStack gap={1.5}>
              <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ textTransform: "uppercase", letterSpacing: 0.8 }}>
                UI Layout Density
              </Text>
              <Inline gap={2}>
                {(["compact", "comfortable", "spacious"] as const).map((den) => (
                  <Pressable
                    key={den}
                    onPress={() => setCustomDensity(den)}
                    style={{
                      flex: 1,
                      paddingVertical: 6,
                      borderRadius: 6,
                      backgroundColor: customDensity === den ? semanticColors.primary : "rgba(255, 255, 255, 0.05)",
                      alignItems: "center",
                    }}
                  >
                    <Text size="xs" weight="bold" color={customDensity === den ? "#FFF" : semanticColors.foreground}>
                      {den.toUpperCase()}
                    </Text>
                  </Pressable>
                ))}
              </Inline>
            </VStack>
          </VStack>
        </Sheet.Content>
        <Sheet.Footer>
          <Button variant="primary" fullWidth onPress={exportThemeJson}>
            Export theme.json Config
          </Button>
        </Sheet.Footer>
      </Sheet>

      {/* Top Header Bar */}
      <Box
        style={{
          borderBottomWidth: 1,
          borderBottomColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.08)",
          backgroundColor: activeColorScheme === "dark" ? "rgba(10, 10, 14, 0.98)" : "rgba(255, 255, 255, 0.98)",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Inline align="center" justify="space-between" wrap gap={3}>
          {/* Logo & Cafe Signature */}
          <Pressable onPress={() => setActiveNav("home")}>
            <Logo size="sm" showSignature={true} />
          </Pressable>

          {/* Center Search Spotlight Button */}
          <Pressable
            onPress={() => setCommandPaletteOpen(true)}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 8,
              backgroundColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)",
              borderWidth: 1,
              borderColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.09)",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              minWidth: 220,
            }}
          >
            <SearchIcon size={14} color={semanticColors.foregroundMuted} />
            <Text size="xs" color={semanticColors.foregroundMuted} style={{ flex: 1 }}>
              Quick jump (⌘K)...
            </Text>
            <Box style={{ paddingHorizontal: 4, paddingVertical: 1, borderRadius: 3, backgroundColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)" }}>
              <Text size="xs" color={semanticColors.foregroundSubtle} style={{ fontSize: 10, fontFamily: "monospace" }}>
                ⌘K
              </Text>
            </Box>
          </Pressable>

          {/* Right Toolbar Controls */}
          <Inline align="center" gap={2}>
            {/* Viewport Device Frame Switcher */}
            <Inline style={{ backgroundColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)", padding: 2, borderRadius: 6, borderWidth: 1, borderColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)" }}>
              <Pressable
                onPress={() => setViewportMode("desktop")}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: viewportMode === "desktop" ? (activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)") : "transparent",
                }}
              >
                <Text size="xs" weight={viewportMode === "desktop" ? "bold" : "medium"} color={viewportMode === "desktop" ? semanticColors.foreground : semanticColors.foregroundMuted}>
                  Desktop
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setViewportMode("tablet")}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: viewportMode === "tablet" ? (activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)") : "transparent",
                }}
              >
                <Text size="xs" weight={viewportMode === "tablet" ? "bold" : "medium"} color={viewportMode === "tablet" ? semanticColors.foreground : semanticColors.foregroundMuted}>
                  Tablet
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setViewportMode("mobile")}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: viewportMode === "mobile" ? (activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)") : "transparent",
                }}
              >
                <Text size="xs" weight={viewportMode === "mobile" ? "bold" : "medium"} color={viewportMode === "mobile" ? semanticColors.foreground : semanticColors.foregroundMuted}>
                  Mobile
                </Text>
              </Pressable>
            </Inline>

            {/* Customize Theme Button */}
            <Pressable
              onPress={() => setThemeCustomizerOpen(true)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 6,
                backgroundColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                borderWidth: 1,
                borderColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <SparklesIcon size={13} color={semanticColors.primary} />
              <Text size="xs" weight="semibold" color={semanticColors.foreground}>
                Theme
              </Text>
            </Pressable>

            {/* APCA Badge */}
            <Box
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4,
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderWidth: 1,
                borderColor: "rgba(16, 185, 129, 0.2)",
              }}
            >
              <Text size="xs" weight="bold" color="#10B981" style={{ fontSize: 11, fontFamily: "monospace" }}>
                APCA 100%
              </Text>
            </Box>

            {/* Theme Toggle Button */}
            <Pressable
              onPress={toggleColorScheme}
              accessibilityRole="button"
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 6,
                backgroundColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                borderWidth: 1,
                borderColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              {activeColorScheme === "dark" ? (
                <SparklesIcon size={14} color="#A78BFA" />
              ) : activeColorScheme === "oled" ? (
                <SunIcon size={14} color="#F59E0B" />
              ) : (
                <MoonIcon size={14} color="#6366F1" />
              )}
              <Text size="xs" weight="medium" color={semanticColors.foreground}>
                {activeColorScheme === "dark" ? "Dark (OLED)" : activeColorScheme === "oled" ? "Light" : "Dark"}
              </Text>
            </Pressable>
          </Inline>
        </Inline>
      </Box>

      {/* Main Layout Area with Sidebar & Workspace Canvas */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        {/* Navigation Sidebar */}
        <Sidebar
          collapsed={collapsed}
          onCollapseChange={setCollapsed}
          width={280}
          style={{
            borderRightWidth: 1,
            borderRightColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.08)",
            backgroundColor: activeColorScheme === "dark" ? "rgba(10, 11, 16, 0.98)" : "#FFFFFF",
          }}
        >
          <Sidebar.Header>
            {!collapsed && (
              <VStack gap={2}>
                {/* Search Input */}
                <Box
                  style={{
                    backgroundColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                    borderWidth: 1,
                    borderColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                    borderRadius: 6,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                  }}
                >
                  <SearchInput
                    placeholder="Filter 25 categories..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    size="sm"
                    style={{ borderWidth: 0, backgroundColor: "transparent", height: 26, paddingHorizontal: 0 }}
                  />
                </Box>
              </VStack>
            )}
          </Sidebar.Header>

          <Sidebar.Nav>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
              <VStack gap={3} style={{ paddingBottom: 16 }}>
                {/* 1. Main Navigation Links (Home, Docs, Usage, Privacy) */}
                <VStack gap={0.5}>
                  {[
                    { id: "home", name: "Home", icon: "sparkles" },
                    { id: "docs", name: "Documentação Geral", icon: "file-text" },
                    { id: "usage", name: "Modos de Uso", icon: "layers" },
                    { id: "privacy", name: "Políticas & Privacidade", icon: "shield" },
                  ].map((nav) => {
                    const isActive = activeNav === nav.id;
                    return (
                      <Sidebar.NavItem
                        key={nav.id}
                        label={nav.name}
                        active={isActive}
                        onPress={() => setActiveNav(nav.id)}
                        icon={<Icon name={nav.icon as any} size={15} color={isActive ? semanticColors.primary : semanticColors.foregroundMuted} />}
                      />
                    );
                  })}
                </VStack>

                <Divider thickness={1} />

                {/* 2. Component Suites (1 to 6 with collapsible dropdown accordions) */}
                {!collapsed && (
                  <Box style={{ paddingHorizontal: 12, paddingVertical: 2 }}>
                    <Text size="xs" weight="bold" color={semanticColors.foregroundSubtle} style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 0.8, textTransform: "uppercase" }}>
                      COMPONENTES (SUITES 1 - 6)
                    </Text>
                  </Box>
                )}

                {filteredSuites.map((suite) => {
                  const isSuiteActive = suite.items.some((item) => item.id === activeNav);
                  const isExpanded = expandedSuites[suite.name] ?? true;

                  return (
                    <VStack key={suite.name} gap={0.5}>
                      {!collapsed ? (
                        <Pressable
                          onPress={() => toggleSuite(suite.name)}
                          style={{
                            paddingHorizontal: 12,
                            paddingVertical: 6,
                            borderRadius: 6,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: isSuiteActive ? (activeColorScheme === "dark" ? "rgba(139, 92, 246, 0.08)" : "rgba(139, 92, 246, 0.05)") : "transparent",
                          }}
                        >
                          <Text
                            size="xs"
                            weight="bold"
                            color={isSuiteActive ? semanticColors.primary : semanticColors.foreground}
                            style={{ fontSize: 11 }}
                          >
                            {suite.name}
                          </Text>
                          {isExpanded ? (
                            <ChevronUpIcon size={13} color={semanticColors.foregroundMuted} />
                          ) : (
                            <ChevronDownIcon size={13} color={semanticColors.foregroundMuted} />
                          )}
                        </Pressable>
                      ) : null}

                      {/* Collapsible Children */}
                      {(isExpanded || collapsed) && (
                        <VStack gap={0.5} style={{ paddingLeft: collapsed ? 0 : 8 }}>
                          {suite.items.map((item) => {
                            const isActive = activeNav === item.id;
                            return (
                              <Sidebar.NavItem
                                key={item.id}
                                label={item.name}
                                active={isActive}
                                onPress={() => setActiveNav(item.id)}
                                badge={
                                  isActive ? (
                                    <Box
                                      style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: semanticColors.primary,
                                      }}
                                    />
                                  ) : undefined
                                }
                              />
                            );
                          })}
                        </VStack>
                      )}
                    </VStack>
                  );
                })}
              </VStack>
            </ScrollView>
          </Sidebar.Nav>

          <Sidebar.Footer>
            <VStack gap={2}>
              {!collapsed && (
                <VStack gap={1} style={{ paddingHorizontal: 4 }}>
                  <Inline align="center" justify="space-between">
                    <Inline align="center" gap={2}>
                      <Avatar fallback="CF" size="sm" />
                      <VStack gap={0}>
                        <Text size="xs" weight="bold" color={semanticColors.foreground}>Café Softwares</Text>
                        <Text size="xs" color={semanticColors.foregroundMuted} style={{ fontSize: 10 }}>268 Components</Text>
                      </VStack>
                    </Inline>
                    <Box
                      style={{
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderRadius: 4,
                        backgroundColor: activeColorScheme === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <Text size="xs" color={semanticColors.primary} style={{ fontSize: 10, fontFamily: "monospace", fontWeight: "bold" }}>
                        v2.4
                      </Text>
                    </Box>
                  </Inline>
                  <Text size="xs" color={semanticColors.foregroundSubtle} style={{ fontSize: 9, textAlign: "center", marginTop: 2 }}>
                    Café - Sistemas & Softwares
                  </Text>
                </VStack>
              )}
              <Sidebar.Toggle />
            </VStack>
          </Sidebar.Footer>
        </Sidebar>

        {/* Main Content Workspace Canvas with Device Frame simulation */}
        <View style={{ flex: 1, backgroundColor: semanticColors.background, alignItems: "center", justifyContent: "center" }}>
          {viewportMode === "desktop" ? (
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 32,
                paddingVertical: 24,
                maxWidth: 1280,
                width: "100%",
                alignSelf: "center",
              }}
              showsVerticalScrollIndicator={false}
            >
              {renderActiveView()}
            </ScrollView>
          ) : viewportMode === "tablet" ? (
            <Box
              style={{
                width: 768,
                maxHeight: "96%",
                backgroundColor: "rgba(10, 12, 20, 0.95)",
                borderRadius: 24,
                borderWidth: 6,
                borderColor: "#1E2235",
                overflow: "hidden",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 16 },
                shadowOpacity: 0.5,
                shadowRadius: 32,
              }}
            >
              <ScrollView contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false}>
                {renderActiveView()}
              </ScrollView>
            </Box>
          ) : (
            /* Mobile 375px Device Frame Simulation */
            <Box
              style={{
                width: 375,
                height: 760,
                maxHeight: "96%",
                backgroundColor: "rgba(10, 12, 20, 0.98)",
                borderRadius: 44,
                borderWidth: 8,
                borderColor: "#1E2235",
                overflow: "hidden",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 20 },
                shadowOpacity: 0.6,
                shadowRadius: 36,
              }}
            >
              {/* Dynamic Island / Notch Mockup */}
              <Box
                style={{
                  width: 110,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#000",
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  zIndex: 50,
                }}
              />
              <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
                {renderActiveView()}
              </ScrollView>
            </Box>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const [themeSeed, setThemeSeed] = useState("#8B5CF6");
  const [neutralFamily, setNeutralFamily] = useState<"auto" | "slate" | "zinc" | "warm" | "pure">("auto");

  const dynamicTheme = React.useMemo(() => {
    return createTheme({
      seed: themeSeed,
      neutralFamily,
      name: `Theme-${themeSeed}`,
      audit: true,
    });
  }, [themeSeed, neutralFamily]);

  return (
    <ThemeProvider theme={dynamicTheme} colorScheme="dark">
      <Portal.Provider>
        <ToastProvider>
          <LaboratoryContent
            activeSeed={themeSeed}
            onSelectSeed={setThemeSeed}
            neutralFamily={neutralFamily}
            onSelectNeutral={setNeutralFamily}
          />
        </ToastProvider>
      </Portal.Provider>
    </ThemeProvider>
  );
}
