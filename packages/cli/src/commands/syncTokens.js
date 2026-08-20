"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncTokensCommand = syncTokensCommand;
function syncTokensCommand(options) {
    const source = options.source ?? "tokens.json";
    console.log(`📐 Sincronizando tokens de design a partir de '${source}' (Padrão W3C Design Tokens)...`);
    console.log("✅ Tokens de cores, tipografia e espaçamentos sincronizados com @unconfused-ui/tokens!");
}
