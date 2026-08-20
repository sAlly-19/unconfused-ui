"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommand = addCommand;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const COMPONENT_TEMPLATES = {
    button: {
        filename: "Button.tsx",
        code: `import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { createRecipe } from "@unconfused-ui/recipes";

export type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ComponentProps<typeof Pressable> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export const Button = React.forwardRef<View, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      disabled = false,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { semanticColors } = useTheme();

    const recipe = createRecipe({
      base: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        minHeight: 44,
      },
      variants: {
        variant: {
          primary: { backgroundColor: semanticColors.primary },
          secondary: { backgroundColor: semanticColors.secondary },
          destructive: { backgroundColor: semanticColors.danger },
          outline: { backgroundColor: "transparent", borderWidth: 1, borderColor: semanticColors.border },
          ghost: { backgroundColor: "transparent" },
        },
        size: {
          sm: { paddingHorizontal: 12, paddingVertical: 6, minHeight: 36 },
          md: { paddingHorizontal: 16, paddingVertical: 10, minHeight: 44 },
          lg: { paddingHorizontal: 24, paddingVertical: 14, minHeight: 52 },
        },
      },
    });

    const isInteractiveDisabled = disabled || loading;
    const buttonStyle = recipe({ variant, size });

    return (
      <Pressable
        ref={ref}
        disabled={isInteractiveDisabled}
        accessibilityRole="button"
        accessibilityState={{ disabled: isInteractiveDisabled, busy: loading }}
        style={(state) => [
          buttonStyle,
          isInteractiveDisabled && { opacity: 0.5 },
          typeof style === "function" ? style(state) : style,
        ]}
        {...rest}
      >
        <Inline gap={2} align="center" justify="center">
          {loading ? (
            <ActivityIndicator color={semanticColors.primaryForeground} size="small" />
          ) : (
            <>
              {leftIcon}
              {typeof children === "string" ? (
                <Text weight="semibold" color={semanticColors.primaryForeground}>
                  {children}
                </Text>
              ) : (
                children
              )}
              {rightIcon}
            </>
          )}
        </Inline>
      </Pressable>
    );
  }
);

Button.displayName = "Button";
`,
    },
};
function addCommand(components, options) {
    const isOwned = options.owned ?? true;
    console.log(`📦 Adicionando componentes [${components.join(", ")}]... Mode: ${isOwned ? "OWNED (Cópia de Código)" : "PACKAGE"}`);
    if (!isOwned) {
        console.log(`✅ Para usar o modo Package, certifique-se de ter instalado @unconfused-ui/core.`);
        return;
    }
    const targetBaseDir = path_1.default.join(process.cwd(), "components", "ui");
    for (const componentName of components) {
        const key = componentName.toLowerCase();
        const template = COMPONENT_TEMPLATES[key];
        if (!template) {
            console.log(`⚠️ Componente '${componentName}' ainda não possui template Owned. Instalando via pacote...`);
            continue;
        }
        const componentDir = path_1.default.join(targetBaseDir, key);
        if (!fs_1.default.existsSync(componentDir)) {
            fs_1.default.mkdirSync(componentDir, { recursive: true });
        }
        const filePath = path_1.default.join(componentDir, template.filename);
        fs_1.default.writeFileSync(filePath, template.code, "utf-8");
        console.log(`✨ Componente '${componentName}' copiado com sucesso para: ${filePath}`);
    }
}
