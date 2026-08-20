export type ToastMessage = {
    id: string;
    title: string;
    description?: string;
    variant?: "default" | "success" | "danger" | "warning" | "destructive";
    duration?: number;
};
export type ToastOptions = Omit<ToastMessage, "id">;
type Listener = () => void;
declare class ToastStore {
    private toasts;
    private listeners;
    subscribe: (listener: Listener) => () => void;
    getSnapshot: () => ToastMessage[];
    show: (options: ToastOptions) => string;
    dismiss: (id: string) => void;
    clear: () => void;
    private notify;
}
export declare const toastStore: ToastStore;
/**
 * Universal imperative toast dispatcher:
 * `toast.show({ title: 'Saved successfully', variant: 'success' })`
 */
export declare const toast: {
    show: (options: ToastOptions) => string;
    success: (title: string, description?: string) => string;
    danger: (title: string, description?: string) => string;
    warning: (title: string, description?: string) => string;
    dismiss: (id: string) => void;
    clear: () => void;
};
/**
 * Hook to subscribe to active toasts via useSyncExternalStore without context re-render overhead.
 */
export declare function useToasts(): ToastMessage[];
export {};
//# sourceMappingURL=toastStore.d.ts.map