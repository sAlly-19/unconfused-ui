import React from "react";
import { ViewStyle } from "react-native";
export type StepItem = {
    title: string;
    description?: string;
    content: React.ReactNode;
    canProceed?: boolean;
};
export type StepperProps = {
    steps: StepItem[];
    currentStep?: number;
    onStepChange?: (stepIndex: number) => void;
    onComplete?: () => void;
    style?: ViewStyle;
};
/**
 * Universal Stepper / Multi-Step Wizard:
 * Interactive step indicator, step validation, and form navigation controls.
 */
export declare function Stepper({ steps, currentStep: propStep, onStepChange, onComplete, style, }: StepperProps): React.JSX.Element;
export declare namespace Stepper {
    var displayName: string;
}
//# sourceMappingURL=Stepper.d.ts.map