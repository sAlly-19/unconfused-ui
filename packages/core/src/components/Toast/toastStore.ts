import { useSyncExternalStore } from "react";
import { AccessibilityInfo, Platform, Vibration } from "react-native";

export type ToastMessage = {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "success" | "danger" | "warning" | "destructive";
  duration?: number;
};

export type ToastOptions = Omit<ToastMessage, "id">;

type Listener = () => void;

class ToastStore {
  private toasts: ToastMessage[] = [];
  private listeners = new Set<Listener>();

  subscribe = (listener: Listener) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  getSnapshot = (): ToastMessage[] => {
    return this.toasts;
  };

  show = (options: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { ...options, id };
    this.toasts = [...this.toasts, newToast];
    this.notify();

    // Live Region Announcement for Screen Readers
    const announcement = `${options.variant ? options.variant.toUpperCase() + ": " : ""}${options.title}${
      options.description ? ". " + options.description : ""
    }`;
    AccessibilityInfo?.announceForAccessibility?.(announcement);

    // Enhanced Haptics for Destructive Alerts
    if ((options.variant === "danger" || options.variant === "destructive") && Platform.OS !== "web") {
      try {
        Vibration.vibrate([0, 80, 50, 80]);
      } catch (e) {}
    }

    const duration = options.duration ?? 4000;
    setTimeout(() => {
      this.dismiss(id);
    }, duration);

    return id;
  };

  dismiss = (id: string) => {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.notify();
  };

  clear = () => {
    this.toasts = [];
    this.notify();
  };

  private notify() {
    this.listeners.forEach((listener) => listener());
  }
}

export const toastStore = new ToastStore();

/**
 * Universal imperative toast dispatcher:
 * `toast.show({ title: 'Saved successfully', variant: 'success' })`
 */
export const toast = {
  show: (options: ToastOptions) => toastStore.show(options),
  success: (title: string, description?: string) => toastStore.show({ title, description, variant: "success" }),
  danger: (title: string, description?: string) => toastStore.show({ title, description, variant: "danger" }),
  warning: (title: string, description?: string) => toastStore.show({ title, description, variant: "warning" }),
  dismiss: (id: string) => toastStore.dismiss(id),
  clear: () => toastStore.clear(),
};

/**
 * Hook to subscribe to active toasts via useSyncExternalStore without context re-render overhead.
 */
export function useToasts(): ToastMessage[] {
  return useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot, toastStore.getSnapshot);
}
