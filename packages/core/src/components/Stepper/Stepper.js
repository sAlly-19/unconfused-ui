"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = Stepper;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const primitives_1 = require("@unconfused-ui/primitives");
const Button_1 = require("../Button/Button");
const icons_1 = require("@unconfused-ui/icons");
const theme_1 = require("@unconfused-ui/theme");
/**
 * Universal Stepper / Multi-Step Wizard:
 * Interactive step indicator, step validation, and form navigation controls.
 */
function Stepper({ steps, currentStep: propStep, onStepChange, onComplete, style, }) {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [internalStep, setInternalStep] = (0, react_1.useState)(0);
    const activeIndex = propStep !== undefined ? propStep : internalStep;
    const isFirst = activeIndex === 0;
    const isLast = activeIndex === steps.length - 1;
    const currentStepData = steps[activeIndex];
    const goToStep = (target) => {
        if (target >= 0 && target < steps.length) {
            setInternalStep(target);
            onStepChange?.(target);
        }
    };
    const handleNext = () => {
        if (isLast) {
            onComplete?.();
        }
        else {
            goToStep(activeIndex + 1);
        }
    };
    const handlePrev = () => {
        goToStep(activeIndex - 1);
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 5, style: style, children: [(0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "center", justify: "space-between", style: { paddingHorizontal: 4 }, children: steps.map((step, idx) => {
                    const isDone = idx < activeIndex;
                    const isActive = idx === activeIndex;
                    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => isDone && goToStep(idx), style: { flexDirection: "row", alignItems: "center", gap: 10 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: isDone
                                                ? "#10B981"
                                                : isActive
                                                    ? semanticColors.primary
                                                    : semanticColors.surfaceSubtle,
                                            borderWidth: 1,
                                            borderColor: isActive ? semanticColors.primary : semanticColors.border,
                                        }, children: isDone ? ((0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 16, color: "#FFFFFF" })) : ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: isActive ? semanticColors.primaryForeground : semanticColors.foregroundMuted, children: idx + 1 })) }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isActive ? "bold" : "medium", color: isActive ? semanticColors.foreground : semanticColors.foregroundMuted, children: step.title }), step.description && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: step.description }))] })] }), idx < steps.length - 1 && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                    flex: 1,
                                    height: 2,
                                    marginHorizontal: 12,
                                    backgroundColor: isDone ? "#10B981" : semanticColors.border,
                                } }))] }, idx));
                }) }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                    padding: 20,
                    borderRadius: 14,
                    backgroundColor: semanticColors.surface,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                    minHeight: 200,
                }, children: currentStepData?.content }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "outline", size: "md", disabled: isFirst, onPress: handlePrev, children: "\u2190 Anterior" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "primary", size: "md", disabled: currentStepData?.canProceed === false, onPress: handleNext, children: isLast ? "Concluir" : "Próximo →" })] })] }));
}
Stepper.displayName = "Stepper";
