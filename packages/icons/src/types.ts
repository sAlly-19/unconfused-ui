import { ViewStyle } from "react-native";

export type IconProps = {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  fill?: string;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export type IconComponent = React.FC<IconProps>;
