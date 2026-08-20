import React from "react";
import { ViewStyle } from "react-native";
export type SplitViewProps = {
    master: React.ReactNode;
    detail: React.ReactNode;
    masterWidth?: number | string;
    showDetailOnMobile?: boolean;
    onBackToMaster?: () => void;
    style?: ViewStyle;
};
/**
 * Universal Responsive SplitView (Master-Detail layout primitive):
 * Displays side-by-side master/detail panels on desktop/tablet (md, lg, xl)
 * and an accessible stacked navigation view on mobile (base, sm).
 */
export declare function SplitView({ master, detail, masterWidth, showDetailOnMobile, onBackToMaster, style, }: SplitViewProps): React.JSX.Element;
export declare namespace SplitView {
    var displayName: string;
}
//# sourceMappingURL=SplitView.d.ts.map