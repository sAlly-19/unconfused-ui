import React, { createContext, useContext, useEffect, useState } from "react";
import { AccessibilityInfo, ViewStyle } from "react-native";
import { Box, Stack, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type FormErrors = Record<string, string>;

type FormContextValue = {
  values: Record<string, any>;
  errors: FormErrors;
  setValue: (field: string, value: any) => void;
  setError: (field: string, error: string) => void;
};

const FormContext = createContext<FormContextValue | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("<FormItem> must be used within <Form>");
  }
  return context;
}

export type FormProps = {
  initialValues?: Record<string, any>;
  onSubmit?: (values: Record<string, any>) => void;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const FormRoot = ({ initialValues = {}, onSubmit, style, children }: FormProps) => {
  const [values, setValues] = useState<Record<string, any>>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const setValue = (field: string, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const setError = (field: string, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  return (
    <FormContext.Provider value={{ values, errors, setValue, setError }}>
      <Stack gap={4} style={style}>
        {children}
      </Stack>
    </FormContext.Provider>
  );
};

export type FormItemProps = {
  name: string;
  label?: string;
  children: (props: {
    value: any;
    onChangeText: (text: string) => void;
    error?: string;
    label?: string;
  }) => React.ReactNode;
};

export const FormItem = ({ name, label, children }: FormItemProps) => {
  const { values, errors, setValue } = useFormContext();

  const fieldValue = values[name] ?? "";
  const fieldError = errors[name];

  return <>{children({ value: fieldValue, onChangeText: (val) => setValue(name, val), error: fieldError, label })}</>;
};

export const FormField = FormItem;

export const FormLabel = ({ children }: { children: React.ReactNode }) => {
  const { semanticColors } = useTheme();
  return (
    <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }}>
      {children}
    </Text>
  );
};

export const FormControl = ({ children }: { children: React.ReactNode }) => <Box>{children}</Box>;

export const FormDescription = ({ children }: { children: React.ReactNode }) => {
  const { semanticColors } = useTheme();
  return <Text size="xs" color={semanticColors.foregroundMuted}>{children}</Text>;
};

export const FormMessage = ({ children }: { children: React.ReactNode }) => {
  const { semanticColors } = useTheme();

  useEffect(() => {
    if (typeof children === "string" && children.trim().length > 0) {
      AccessibilityInfo?.announceForAccessibility?.(`Form error: ${children}`);
    }
  }, [children]);

  if (!children) return null;

  return (
    <Text
      size="xs"
      color={semanticColors.danger}
      weight="medium"
      accessibilityRole="alert"
      accessibilityLiveRegion="assertive"
    >
      {children}
    </Text>
  );
};

export const FormError = FormMessage;

export const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Stack gap={3}>
    <FormLabel>{title}</FormLabel>
    {children}
  </Stack>
);

export const FieldGroup = ({ children }: { children: React.ReactNode }) => (
  <Stack gap={3}>{children}</Stack>
);

export const Form = Object.assign(FormRoot, {
  Item: FormItem,
  Field: FormField,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
  Error: FormError,
  Section: FormSection,
  Group: FieldGroup,
});
