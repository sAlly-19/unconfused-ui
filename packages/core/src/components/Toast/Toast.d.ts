import React from "react";
import { type ToastOptions } from "./toastStore";
export * from "./toastStore";
export type ToastContextValue = {
    show: (options: ToastOptions) => string;
    toast: (options: ToastOptions) => string;
};
export declare function useToast(): ToastContextValue;
export declare const ToastProvider: {
    ({ children }: {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Toast.d.ts.map