export type FormSchema<T> = {
    safeParse?: (data: unknown) => {
        success: true;
        data: T;
    } | {
        success: false;
        error: {
            issues: Array<{
                path: (string | number)[];
                message: string;
            }>;
        };
    };
    validate?: (data: unknown, options?: any) => Promise<T> | T;
};
export type UseFormOptions<T extends Record<string, any>> = {
    defaultValues?: Partial<T>;
    schema?: FormSchema<T> | any;
    onSubmit?: (values: T) => void | Promise<void>;
};
export type FormState<T> = {
    values: T;
    errors: Record<keyof T | string, string>;
    isSubmitting: boolean;
    isValid: boolean;
};
/**
 * Enterprise Form hook supporting Zod, Valibot, and Yup schemas with full TypeScript inference.
 */
export declare function useForm<T extends Record<string, any>>({ defaultValues, schema, onSubmit, }: UseFormOptions<T>): {
    values: T;
    errors: Record<string, string>;
    isSubmitting: boolean;
    isValid: boolean;
    setValue: (field: keyof T | string, value: any) => void;
    handleSubmit: () => Promise<void>;
    reset: () => void;
    register: (name: keyof T | string) => {
        value: string | NonNullable<T[keyof T]>;
        onChangeText: (text: string) => void;
        error: string;
    };
};
//# sourceMappingURL=useForm.d.ts.map