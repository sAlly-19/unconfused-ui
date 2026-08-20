import React from 'react';
/**
 * Merges props for the Slot component, combining styles and event handlers.
 */
export declare function mergeProps(slotProps: Record<string, any>, childProps: Record<string, any>): {
    [x: string]: any;
};
/**
 * Composes multiple refs into a single ref callback.
 */
export declare function composeRefs<T>(...refs: (React.Ref<T> | undefined | null)[]): React.RefCallback<T>;
export interface SlotProps {
    children?: React.ReactNode;
    [key: string]: any;
}
export declare const Slottable: ({ children }: {
    children: React.ReactNode;
}) => React.ReactElement;
export declare const Slot: React.ForwardRefExoticComponent<Omit<SlotProps, "ref"> & React.RefAttributes<any>>;
//# sourceMappingURL=Slot.d.ts.map