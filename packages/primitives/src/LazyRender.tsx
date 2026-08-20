import React, { useState, useEffect } from "react";

export type LazyRenderProps = {
  visible: boolean;
  unmountOnHide?: boolean;
  children: React.ReactNode;
};

/**
 * LazyRender Primitive:
 * Defers mounting expensive component subtrees (ColorPicker, DatePicker, CommandPalette)
 * until they are opened for the first time, slashing initial bundle evaluation and render tree cost.
 */
export function LazyRender({ visible, unmountOnHide = false, children }: LazyRenderProps): React.ReactElement | null {
  const [hasMounted, setHasMounted] = useState(visible);

  useEffect(() => {
    if (visible && !hasMounted) {
      setHasMounted(true);
    }
  }, [visible, hasMounted]);

  if (!hasMounted) {
    return null;
  }

  if (!visible && unmountOnHide) {
    return null;
  }

  return <>{children}</>;
}

LazyRender.displayName = "LazyRender";
