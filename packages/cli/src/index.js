"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const add_1 = require("./commands/add");
const aiContext_1 = require("./commands/aiContext");
const audit_1 = require("./commands/audit");
const init_1 = require("./commands/init");
const mcp_1 = require("./commands/mcp");
const syncTokens_1 = require("./commands/syncTokens");
const program = new commander_1.Command();
program
    .name("unconfused")
    .description("CLI oficial do ecossistema Unconfused UI para React Native & Expo")
    .version("0.1.0");
program
    .command("init")
    .description("Inicializa as configurações da Unconfused UI no projeto atual")
    .option("-m, --mode <mode>", "Modo de instalação (owned | package)", "owned")
    .action(init_1.initCommand);
program
    .command("add <components...>")
    .description("Adiciona componentes ao projeto")
    .option("--owned", "Copia o código fonte do componente para seu projeto (default)", true)
    .option("--package", "Configura para importar do pacote @unconfused-ui/core", false)
    .action((components, options) => (0, add_1.addCommand)(components, options));
program
    .command("ai-context")
    .description("Gera especificação de contexto estruturado para assistentes e agentes de IA")
    .action(aiContext_1.aiContextCommand);
program
    .command("audit")
    .description("Audita a base de código buscando violações de tokens e acessibilidade APCA")
    .option("--apca", "Executa auditoria contínua de contraste perceptual APCA (WCAG 3.0)", true)
    .option("--min-lc <number>", "Pontuação mínima de contraste Lc", "60")
    .action((options) => (0, audit_1.auditCommand)(options));
program
    .command("mcp")
    .description("Inicia o servidor MCP (Model Context Protocol) para integração com IDEs e Agentes de IA")
    .action(mcp_1.mcpCommand);
program
    .command("sync-tokens")
    .description("Sincroniza tokens de design com especificações W3C / Figma")
    .option("-s, --source <source>", "Arquivo de origem dos tokens", "tokens.json")
    .action(syncTokens_1.syncTokensCommand);
program.parse(process.argv);
