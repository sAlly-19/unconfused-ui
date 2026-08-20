import { useCallback } from "react";
import { Platform, Vibration } from "react-native";

export type HapticFeedbackType =
  | "selection"
  | "light"
  | "medium"
  | "heavy"
  | "success"
  | "warning"
  | "error";

/**
 * Universal Haptics hook supporting iOS, Android, and Web platforms gracefully.
 */
export function useHaptics() {
  const trigger = useCallback((type: HapticFeedbackType = "light") => {
    try {
      if (Platform.OS === "web") {
        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
          switch (type) {
            case "selection":
            case "light":
              navigator.vibrate(10);
              break;
            case "medium":
              navigator.vibrate(20);
              break;
            case "heavy":
              navigator.vibrate(35);
              break;
            case "success":
              navigator.vibrate([10, 30, 20]);
              break;
            case "warning":
              navigator.vibrate([15, 40, 15]);
              break;
            case "error":
              navigator.vibrate([30, 50, 30, 50]);
              break;
          }
        }
      } else {
        // Native fallback using standard Vibration pattern if Expo Haptics is not linked
        switch (type) {
          case "selection":
          case "light":
            Vibration.vibrate(10);
            break;
          case "medium":
            Vibration.vibrate(20);
            break;
          case "heavy":
            Vibration.vibrate(40);
            break;
          case "success":
            Vibration.vibrate([0, 10, 30, 20]);
            break;
          case "warning":
            Vibration.vibrate([0, 20, 30, 20]);
            break;
          case "error":
            Vibration.vibrate([0, 40, 40, 40]);
            break;
        }
      }
    } catch {
      // Graceful silence if vibration is unsupported or disabled
    }
  }, []);

  return { trigger };
}
