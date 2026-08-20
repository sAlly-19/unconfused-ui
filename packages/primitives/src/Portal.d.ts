import React from "react";
type PortalContextValue = {
    mount: (id: string, children: React.ReactNode) => void;
    unmount: (id: string) => void;
};
export declare function usePortal(): PortalContextValue;
export type PortalProviderProps = {
    children: React.ReactNode;
};
export declare const PortalProvider: ({ children }: PortalProviderProps) => React.JSX.Element;
export type PortalProps = {
    children: React.ReactNode;
};
export declare const PortalHost: ({ children }: PortalProps) => null;
export declare const Portal: (({ children }: PortalProps) => null) & {
    Provider: ({ children }: PortalProviderProps) => React.JSX.Element;
    Host: ({ children }: PortalProps) => null;
};
export {};
//# sourceMappingURL=Portal.d.ts.map