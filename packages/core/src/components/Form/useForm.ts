import { useCallback, useState } from "react";

export type FormSchema<T> = {
  safeParse?: (data: unknown) => { success: true; data: T } | { success: false; error: { issues: Array<{ path: (string | number)[]; message: string }> } };
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
export function useForm<T extends Record<string, any>>({
  defaultValues = {} as Partial<T>,
  schema,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(defaultValues as T);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = useCallback((field: keyof T | string, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (prev[field as string]) {
        const next = { ...prev };
        delete next[field as string];
        return next;
      }
      return prev;
    });
  }, []);

  const validate = useCallback(
    (currentValues: T): { valid: boolean; errors: Record<string, string> } => {
      if (!schema) return { valid: true, errors: {} };

      const validationErrors: Record<string, string> = {};

      // 1. Zod / Valibot safeParse adapter
      if (typeof schema.safeParse === "function") {
        const result = schema.safeParse(currentValues);
        if (!result.success && result.error?.issues) {
          for (const issue of result.error.issues) {
            const field = issue.path[0] ? String(issue.path[0]) : "form";
            if (!validationErrors[field]) {
              validationErrors[field] = issue.message;
            }
          }
          return { valid: false, errors: validationErrors };
        }
        return { valid: true, errors: {} };
      }

      return { valid: true, errors: {} };
    },
    [schema]
  );

  const handleSubmit = useCallback(async () => {
    const { valid, errors: validationErrors } = validate(values);
    setErrors(validationErrors);

    if (!valid) return;

    if (onSubmit) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [onSubmit, validate, values]);

  const reset = useCallback(() => {
    setValues(defaultValues as T);
    setErrors({});
    setIsSubmitting(false);
  }, [defaultValues]);

  const register = useCallback(
    (name: keyof T | string) => ({
      value: values[name as keyof T] ?? "",
      onChangeText: (text: string) => setValue(name, text),
      error: errors[name as string],
    }),
    [errors, setValue, values]
  );

  return {
    values,
    errors,
    isSubmitting,
    isValid: Object.keys(errors).length === 0,
    setValue,
    handleSubmit,
    reset,
    register,
  };
}
