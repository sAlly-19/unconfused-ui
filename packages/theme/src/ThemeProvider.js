"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const createTheme_1 = require("./createTheme");
const ThemeContext = (0, react_1.createContext)(null);
function ThemeProvider({ children, theme = createTheme_1.defaultTheme, colorScheme: initialMode = "system", }) {
    const systemScheme = (0, react_native_1.useColorScheme)() === "dark" ? "dark" : "light";
    const [colorSchemeMode, setColorSchemeMode] = (0, react_1.useState)(initialMode);
    (0, react_1.useEffect)(() => {
        setColorSchemeMode(initialMode);
    }, [initialMode]);
    const activeColorScheme = colorSchemeMode === "system" ? systemScheme : colorSchemeMode;
    const activeSemantic = activeColorScheme === "oled"
        ? (theme.oled ?? theme.dark)
        : activeColorScheme === "dark"
            ? theme.dark
            : theme.light;
    const mergedTheme = (0, react_1.useMemo)(() => {
        const { colors: _baseColors, ...restTokens } = theme.tokens;
        return {
            ...restTokens,
            colors: activeSemantic,
        };
    }, [theme.tokens, activeSemantic]);
    const toggleColorScheme = () => {
        setColorSchemeMode((prev) => {
            if (prev === "dark")
                return "oled";
            if (prev === "oled")
                return "light";
            return "dark";
        });
    };
    const value = (0, react_1.useMemo)(() => ({
        theme: mergedTheme,
        baseTokens: theme.tokens,
        semanticColors: activeSemantic,
        colorScheme: colorSchemeMode,
        activeColorScheme,
        setColorScheme: setColorSchemeMode,
        toggleColorScheme,
        rawTheme: theme,
    }), [mergedTheme, theme, activeSemantic, colorSchemeMode, activeColorScheme]);
    return (0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: value, children: children });
}
function useTheme() {
    const context = (0, react_1.useContext)(ThemeContext);
    if (!context) {
        const activeSemantic = createTheme_1.defaultTheme.light;
        const { colors: _baseColors, ...restTokens } = createTheme_1.defaultTheme.tokens;
        return {
            theme: { ...restTokens, colors: activeSemantic },
            baseTokens: createTheme_1.defaultTheme.tokens,
            semanticColors: activeSemantic,
            colorScheme: "light",
            activeColorScheme: "light",
            setColorScheme: () => { },
            toggleColorScheme: () => { },
            rawTheme: createTheme_1.defaultTheme,
        };
    }
    return context;
}
