import { useCallback, useState } from "react";

export type UseControllableStateOptions<T> = {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
};

export function useControllableState<T>({
  value: propValue,
  defaultValue,
  onChange,
}: UseControllableStateOptions<T>): [T, (nextValue: T | ((prev: T) => T)) => void] {
  const [internalValue, setInternalValue] = useState<T>(defaultValue as T);

  const isControlled = propValue !== undefined;
  const value = isControlled ? propValue : internalValue;

  const setValue = useCallback(
    (nextValue: T | ((prev: T) => T)) => {
      const resolvedNextValue =
        typeof nextValue === "function" ? (nextValue as (prev: T) => T)(value) : nextValue;

      if (!isControlled) {
        setInternalValue(resolvedNextValue);
      }

      onChange?.(resolvedNextValue);
    },
    [isControlled, onChange, value]
  );

  return [value, setValue];
}
