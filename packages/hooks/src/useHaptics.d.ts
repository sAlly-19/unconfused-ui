export type HapticFeedbackType = "selection" | "light" | "medium" | "heavy" | "success" | "warning" | "error";
/**
 * Universal Haptics hook supporting iOS, Android, and Web platforms gracefully.
 */
export declare function useHaptics(): {
    trigger: (type?: HapticFeedbackType) => void;
};
//# sourceMappingURL=useHaptics.d.ts.map