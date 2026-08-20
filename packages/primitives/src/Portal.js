"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = exports.PortalHost = exports.PortalProvider = void 0;
exports.usePortal = usePortal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const PortalContext = (0, react_1.createContext)(null);
function usePortal() {
    const context = (0, react_1.useContext)(PortalContext);
    if (!context) {
        throw new Error("<Portal> must be used within <Portal.Provider>");
    }
    return context;
}
const PortalProvider = ({ children }) => {
    const [portals, setPortals] = (0, react_1.useState)({});
    const mount = (id, node) => {
        setPortals((prev) => ({ ...prev, [id]: node }));
    };
    const unmount = (id) => {
        setPortals((prev) => {
            const next = { ...prev };
            delete next[id];
            return next;
        });
    };
    return ((0, jsx_runtime_1.jsx)(PortalContext.Provider, { value: { mount, unmount }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, position: "relative" }, children: [children, (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }, pointerEvents: "box-none", children: Object.entries(portals).map(([key, node]) => ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: node }, key))) })] }) }));
};
exports.PortalProvider = PortalProvider;
const PortalHost = ({ children }) => {
    const portal = usePortal();
    const idRef = react_1.default.useRef(Math.random().toString(36).substring(2, 9));
    react_1.default.useEffect(() => {
        portal.mount(idRef.current, children);
        return () => portal.unmount(idRef.current);
    }, [children]);
    return null;
};
exports.PortalHost = PortalHost;
exports.Portal = Object.assign(exports.PortalHost, {
    Provider: exports.PortalProvider,
    Host: exports.PortalHost,
});
