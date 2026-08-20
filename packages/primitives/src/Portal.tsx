import React, { createContext, useContext, useState } from "react";
import { View } from "react-native";

type PortalContextValue = {
  mount: (id: string, children: React.ReactNode) => void;
  unmount: (id: string) => void;
};

const PortalContext = createContext<PortalContextValue | null>(null);

export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error("<Portal> must be used within <Portal.Provider>");
  }
  return context;
}

export type PortalProviderProps = {
  children: React.ReactNode;
};

export const PortalProvider = ({ children }: PortalProviderProps): React.JSX.Element => {
  const [portals, setPortals] = useState<Record<string, React.ReactNode>>({});

  const mount = (id: string, node: React.ReactNode) => {
    setPortals((prev) => ({ ...prev, [id]: node }));
  };

  const unmount = (id: string) => {
    setPortals((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  return (
    <PortalContext.Provider value={{ mount, unmount }}>
      <View style={{ flex: 1, position: "relative" }}>
        {children}
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }} pointerEvents="box-none">
          {Object.entries(portals).map(([key, node]) => (
            <React.Fragment key={key}>{node}</React.Fragment>
          ))}
        </View>
      </View>
    </PortalContext.Provider>
  );
};

export type PortalProps = {
  children: React.ReactNode;
};

export const PortalHost = ({ children }: PortalProps): null => {
  const portal = usePortal();
  const idRef = React.useRef(Math.random().toString(36).substring(2, 9));

  React.useEffect(() => {
    portal.mount(idRef.current, children);
    return () => portal.unmount(idRef.current);
  }, [children]);

  return null;
};

export const Portal = Object.assign(PortalHost, {
  Provider: PortalProvider,
  Host: PortalHost,
});
