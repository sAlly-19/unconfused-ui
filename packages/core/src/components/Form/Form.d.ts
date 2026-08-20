import React from "react";
import { ViewStyle } from "react-native";
export type FormErrors = Record<string, string>;
type FormContextValue = {
    values: Record<string, any>;
    errors: FormErrors;
    setValue: (field: string, value: any) => void;
    setError: (field: string, error: string) => void;
};
export declare function useFormContext(): FormContextValue;
export type FormProps = {
    initialValues?: Record<string, any>;
    onSubmit?: (values: Record<string, any>) => void;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const FormRoot: ({ initialValues, onSubmit, style, children }: FormProps) => React.JSX.Element;
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
export declare const FormItem: ({ name, label, children }: FormItemProps) => React.JSX.Element;
export declare const FormField: ({ name, label, children }: FormItemProps) => React.JSX.Element;
export declare const FormLabel: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const FormControl: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const FormDescription: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const FormMessage: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element | null;
export declare const FormError: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element | null;
export declare const FormSection: ({ title, children }: {
    title: string;
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const FieldGroup: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const Form: (({ initialValues, onSubmit, style, children }: FormProps) => React.JSX.Element) & {
    Item: ({ name, label, children }: FormItemProps) => React.JSX.Element;
    Field: ({ name, label, children }: FormItemProps) => React.JSX.Element;
    Label: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element;
    Control: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element;
    Description: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element;
    Message: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element | null;
    Error: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element | null;
    Section: ({ title, children }: {
        title: string;
        children: React.ReactNode;
    }) => React.JSX.Element;
    Group: ({ children }: {
        children: React.ReactNode;
    }) => React.JSX.Element;
};
export {};
//# sourceMappingURL=Form.d.ts.map