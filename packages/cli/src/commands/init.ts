import fs from "fs";
import path from "path";

export function initCommand(options: { mode?: string }) {
  console.log("🚀 Inicializando ecossistema Unconfused UI no seu projeto React Native / Expo...");

  const targetDir = process.cwd();
  const themeFilePath = path.join(targetDir, "theme.ts");

  if (!fs.existsSync(themeFilePath)) {
    const defaultThemeCode = `import { createTheme } from "@unconfused-ui/theme";

export const theme = createTheme({
  name: "app-theme",
  semanticTokens: {
    light: {},
    dark: {},
  },
});
`;
    fs.writeFileSync(themeFilePath, defaultThemeCode, "utf-8");
    console.log("✅ Arquivo theme.ts criado com sucesso em:", themeFilePath);
  } else {
    console.log("ℹ️  O arquivo theme.ts já existe.");
  }

  console.log("\n🎉 Unconfused UI foi inicializado! Adicione o <ThemeProvider> ao seu App.tsx/layout.");
}
