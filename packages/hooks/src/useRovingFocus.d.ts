export type RovingFocusOptions = {
    itemCount: number;
    initialIndex?: number;
    orientation?: "horizontal" | "vertical" | "both";
    loop?: boolean;
    onSelect?: (index: number) => void;
};
export type RovingFocusResult = {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    getItemProps: (index: number) => {
        focusable: boolean;
        tabIndex: number;
        onKeyDown?: (e: any) => void;
        onFocus: () => void;
    };
    handleKeyDown: (e: any) => void;
};
/**
 * Universal Roving TabIndex / Focus Hook for accessible keyboard navigation
 * Conforms to W3C WAI-ARIA Authoring Practices Guide for Tabs, Menus, RadioGroups.
 */
export declare function useRovingFocus({ itemCount, initialIndex, orientation, loop, onSelect, }: RovingFocusOptions): RovingFocusResult;
//# sourceMappingURL=useRovingFocus.d.ts.map