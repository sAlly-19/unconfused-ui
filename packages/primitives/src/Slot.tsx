import React from 'react';

/**
 * Merges props for the Slot component, combining styles and event handlers.
 */
export function mergeProps(slotProps: Record<string, any>, childProps: Record<string, any>) {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === 'style') {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean);
    } else if (propName === 'className') {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
    }
  }

  return { ...slotProps, ...overrideProps };
}

/**
 * Composes multiple refs into a single ref callback.
 */
export function composeRefs<T>(...refs: (React.Ref<T> | undefined | null)[]): React.RefCallback<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null && 'current' in ref) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    });
  };
}

export interface SlotProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Slottable = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <>{children}</>;
};

function isSlottable(child: React.ReactNode): child is React.ReactElement {
  return React.isValidElement(child) && child.type === Slottable;
}

export const Slot = React.forwardRef<any, SlotProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = React.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);

  if (slottable) {
    const newElement = slottable.props.children as React.ReactNode;

    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React.Children.count(newElement) > 1) return React.Children.only(null);
        return React.isValidElement(newElement) ? (newElement.props.children as React.ReactNode) : null;
      } else {
        return child;
      }
    });

    return (
      <SlotClone {...slotProps} ref={forwardedRef}>
        {React.isValidElement(newElement)
          ? React.cloneElement(newElement, undefined, newChildren)
          : null}
      </SlotClone>
    );
  }

  return (
    <SlotClone {...slotProps} ref={forwardedRef}>
      {children}
    </SlotClone>
  );
});
Slot.displayName = 'Slot';

const SlotClone = React.forwardRef<any, any>((props, forwardedRef) => {
  const { children, ...slotProps } = props;

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...mergeProps(slotProps, (children.props ?? {}) as Record<string, any>),
      ref: forwardedRef ? composeRefs(forwardedRef, (children as any).ref) : (children as any).ref,
    } as any);
  }

  return React.Children.count(children) > 1 ? React.Children.only(null) : null;
});
SlotClone.displayName = 'SlotClone';
