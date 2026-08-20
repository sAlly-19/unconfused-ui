"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHaptics = useHaptics;
const react_1 = require("react");
const react_native_1 = require("react-native");
/**
 * Universal Haptics hook supporting iOS, Android, and Web platforms gracefully.
 */
function useHaptics() {
    const trigger = (0, react_1.useCallback)((type = "light") => {
        try {
            if (react_native_1.Platform.OS === "web") {
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
            }
            else {
                // Native fallback using standard Vibration pattern if Expo Haptics is not linked
                switch (type) {
                    case "selection":
                    case "light":
                        react_native_1.Vibration.vibrate(10);
                        break;
                    case "medium":
                        react_native_1.Vibration.vibrate(20);
                        break;
                    case "heavy":
                        react_native_1.Vibration.vibrate(40);
                        break;
                    case "success":
                        react_native_1.Vibration.vibrate([0, 10, 30, 20]);
                        break;
                    case "warning":
                        react_native_1.Vibration.vibrate([0, 20, 30, 20]);
                        break;
                    case "error":
                        react_native_1.Vibration.vibrate([0, 40, 40, 40]);
                        break;
                }
            }
        }
        catch {
            // Graceful silence if vibration is unsupported or disabled
        }
    }, []);
    return { trigger };
}
