import { ViewStyle } from "react-native";
export type MagneticOptions = {
    strength?: number;
    maxDistance?: number;
};
export type MagneticResult = {
    magneticStyle: ViewStyle;
    onPointerMove?: (e: any) => void;
    onPointerLeave?: () => void;
};
/**
 * useMagneticHover Hook:
 * Applies a smooth physical magnetic attraction towards the pointer on Web / Desktop.
 */
export declare function useMagneticHover(options?: MagneticOptions): MagneticResult;
//# sourceMappingURL=useMagneticHover.d.ts.map