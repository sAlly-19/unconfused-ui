import React from "react";
export type LazyRenderProps = {
    visible: boolean;
    unmountOnHide?: boolean;
    children: React.ReactNode;
};
/**
 * LazyRender Primitive:
 * Defers mounting expensive component subtrees (ColorPicker, DatePicker, CommandPalette)
 * until they are opened for the first time, slashing initial bundle evaluation and render tree cost.
 */
export declare function LazyRender({ visible, unmountOnHide, children }: LazyRenderProps): React.ReactElement | null;
export declare namespace LazyRender {
    var displayName: string;
}
//# sourceMappingURL=LazyRender.d.ts.map