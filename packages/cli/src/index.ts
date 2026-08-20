import { Command } from "commander";
import { addCommand } from "./commands/add";
import { aiContextCommand } from "./commands/aiContext";
import { auditCommand } from "./commands/audit";
import { initCommand } from "./commands/init";
import { mcpCommand } from "./commands/mcp";
import { syncTokensCommand } from "./commands/syncTokens";

const program = new Command();

program
  .name("unconfused")
  .description("CLI oficial do ecossistema Unconfused UI para React Native & Expo")
  .version("0.1.0");

program
  .command("init")
  .description("Inicializa as configurações da Unconfused UI no projeto atual")
  .option("-m, --mode <mode>", "Modo de instalação (owned | package)", "owned")
  .action(initCommand);

program
  .command("add <components...>")
  .description("Adiciona componentes ao projeto")
  .option("--owned", "Copia o código fonte do componente para seu projeto (default)", true)
  .option("--package", "Configura para importar do pacote @unconfused-ui/core", false)
  .action((components, options) => addCommand(components, options));

program
  .command("ai-context")
  .description("Gera especificação de contexto estruturado para assistentes e agentes de IA")
  .action(aiContextCommand);

program
  .command("audit")
  .description("Audita a base de código buscando violações de tokens e acessibilidade APCA")
  .option("--apca", "Executa auditoria contínua de contraste perceptual APCA (WCAG 3.0)", true)
  .option("--min-lc <number>", "Pontuação mínima de contraste Lc", "60")
  .action((options) => auditCommand(options));

program
  .command("mcp")
  .description("Inicia o servidor MCP (Model Context Protocol) para integração com IDEs e Agentes de IA")
  .action(mcpCommand);

program
  .command("sync-tokens")
  .description("Sincroniza tokens de design com especificações W3C / Figma")
  .option("-s, --source <source>", "Arquivo de origem dos tokens", "tokens.json")
  .action(syncTokensCommand);

program.parse(process.argv);
