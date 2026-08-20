"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = initCommand;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function initCommand(options) {
    console.log("🚀 Inicializando ecossistema Unconfused UI no seu projeto React Native / Expo...");
    const targetDir = process.cwd();
    const themeFilePath = path_1.default.join(targetDir, "theme.ts");
    if (!fs_1.default.existsSync(themeFilePath)) {
        const defaultThemeCode = `import { createTheme } from "@unconfused-ui/theme";

export const theme = createTheme({
  name: "app-theme",
  semanticTokens: {
    light: {},
    dark: {},
  },
});
`;
        fs_1.default.writeFileSync(themeFilePath, defaultThemeCode, "utf-8");
        console.log("✅ Arquivo theme.ts criado com sucesso em:", themeFilePath);
    }
    else {
        console.log("ℹ️  O arquivo theme.ts já existe.");
    }
    console.log("\n🎉 Unconfused UI foi inicializado! Adicione o <ThemeProvider> ao seu App.tsx/layout.");
}
