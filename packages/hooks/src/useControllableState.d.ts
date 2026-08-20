export type UseControllableStateOptions<T> = {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
};
export declare function useControllableState<T>({ value: propValue, defaultValue, onChange, }: UseControllableStateOptions<T>): [T, (nextValue: T | ((prev: T) => T)) => void];
//# sourceMappingURL=useControllableState.d.ts.map