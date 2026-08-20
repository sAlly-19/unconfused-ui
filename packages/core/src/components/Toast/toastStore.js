"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toast = exports.toastStore = void 0;
exports.useToasts = useToasts;
const react_1 = require("react");
const react_native_1 = require("react-native");
class ToastStore {
    toasts = [];
    listeners = new Set();
    subscribe = (listener) => {
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    };
    getSnapshot = () => {
        return this.toasts;
    };
    show = (options) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast = { ...options, id };
        this.toasts = [...this.toasts, newToast];
        this.notify();
        // Live Region Announcement for Screen Readers
        const announcement = `${options.variant ? options.variant.toUpperCase() + ": " : ""}${options.title}${options.description ? ". " + options.description : ""}`;
        react_native_1.AccessibilityInfo?.announceForAccessibility?.(announcement);
        // Enhanced Haptics for Destructive Alerts
        if ((options.variant === "danger" || options.variant === "destructive") && react_native_1.Platform.OS !== "web") {
            try {
                react_native_1.Vibration.vibrate([0, 80, 50, 80]);
            }
            catch (e) { }
        }
        const duration = options.duration ?? 4000;
        setTimeout(() => {
            this.dismiss(id);
        }, duration);
        return id;
    };
    dismiss = (id) => {
        this.toasts = this.toasts.filter((t) => t.id !== id);
        this.notify();
    };
    clear = () => {
        this.toasts = [];
        this.notify();
    };
    notify() {
        this.listeners.forEach((listener) => listener());
    }
}
exports.toastStore = new ToastStore();
/**
 * Universal imperative toast dispatcher:
 * `toast.show({ title: 'Saved successfully', variant: 'success' })`
 */
exports.toast = {
    show: (options) => exports.toastStore.show(options),
    success: (title, description) => exports.toastStore.show({ title, description, variant: "success" }),
    danger: (title, description) => exports.toastStore.show({ title, description, variant: "danger" }),
    warning: (title, description) => exports.toastStore.show({ title, description, variant: "warning" }),
    dismiss: (id) => exports.toastStore.dismiss(id),
    clear: () => exports.toastStore.clear(),
};
/**
 * Hook to subscribe to active toasts via useSyncExternalStore without context re-render overhead.
 */
function useToasts() {
    return (0, react_1.useSyncExternalStore)(exports.toastStore.subscribe, exports.toastStore.getSnapshot, exports.toastStore.getSnapshot);
}
