"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditCommand = auditCommand;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const tokens_1 = require("@unconfused-ui/tokens");
function auditCommand(options = {}) {
    const minLcThreshold = options.minLc ?? 60;
    console.log("======================================================================");
    console.log("Unconfused UI Continuous APCA & Accessibility Auditor (WCAG 3.0 Ready)");
    console.log("======================================================================\n");
    console.log(`Auditing semantic color pairs against threshold |Lc| >= ${minLcThreshold} (Body Text Benchmark)...\n`);
    // 1. Light Theme Audit
    console.log("--- 1. Light Theme Semantic Pairs ---");
    const lightResults = (0, tokens_1.auditSemanticPairs)(tokens_1.lightSemanticTokens);
    let lightPassed = 0;
    for (const r of lightResults) {
        const isPassing = Math.abs(r.lc) >= (r.level === "ui" ? 30 : r.level === "large" ? 45 : minLcThreshold);
        const status = isPassing ? "[PASS]" : "[WARN]";
        const coloredStatus = isPassing ? status : `\x1b[33m${status}\x1b[0m`;
        console.log(`  ${coloredStatus} ${r.pair.padEnd(32)} Lc: ${r.lc.toFixed(1).padStart(6)} (Target: ${r.level})`);
        if (isPassing) {
            lightPassed++;
        }
        else {
            console.log(`         -> Sugestão: Aumente o contraste da matiz para atingir Lc >= ${minLcThreshold}`);
        }
    }
    // 2. Dark Theme Audit
    console.log("\n--- 2. Dark Theme Semantic Pairs ---");
    const darkResults = (0, tokens_1.auditSemanticPairs)(tokens_1.darkSemanticTokens);
    let darkPassed = 0;
    for (const r of darkResults) {
        const isPassing = Math.abs(r.lc) >= (r.level === "ui" ? 30 : r.level === "large" ? 45 : minLcThreshold);
        const status = isPassing ? "[PASS]" : "[WARN]";
        const coloredStatus = isPassing ? status : `\x1b[33m${status}\x1b[0m`;
        console.log(`  ${coloredStatus} ${r.pair.padEnd(32)} Lc: ${r.lc.toFixed(1).padStart(6)} (Target: ${r.level})`);
        if (isPassing) {
            darkPassed++;
        }
        else {
            console.log(`         -> Sugestão: Ajuste a luminosidade de fundo para atingir Lc >= ${minLcThreshold}`);
        }
    }
    // 3. Scan workspace for custom theme.json or hardcoded hex violations
    console.log("\n--- 3. Scanning Local Workspace for Theme Overrides & Drifts ---");
    const projectRoot = process.cwd();
    const themeJsonPath = path_1.default.join(projectRoot, "theme.json");
    if (fs_1.default.existsSync(themeJsonPath)) {
        try {
            const customTheme = JSON.parse(fs_1.default.readFileSync(themeJsonPath, "utf-8"));
            if (customTheme.semanticTokens) {
                console.log(`  Found custom "theme.json" configuration. Running live APCA audit on user theme...`);
                const customResults = (0, tokens_1.auditSemanticPairs)(customTheme.semanticTokens);
                const customPass = customResults.filter((r) => r.pass).length;
                console.log(`  Custom Theme APCA: ${customPass}/${customResults.length} pairs passed.`);
            }
        }
        catch (e) {
            console.warn("  Could not parse local theme.json");
        }
    }
    else {
        console.log("  No local theme.json override found. Using default OKLCH token scales.");
    }
    console.log("\n----------------------------------------------------------------------");
    console.log(`Light Mode Compliance: ${lightPassed}/${lightResults.length} pairs passed`);
    console.log(`Dark Mode Compliance:  ${darkPassed}/${darkResults.length} pairs passed`);
    console.log(`APCA Target Threshold: |Lc| >= ${minLcThreshold}`);
    console.log("----------------------------------------------------------------------");
    if (lightPassed === lightResults.length && darkPassed === darkResults.length) {
        console.log("\x1b[32m✔ Audit Status: 100% compliant with Unconfused UI & WCAG 3.0 APCA Standards.\x1b[0m");
    }
    else {
        console.log("\x1b[33m▲ Audit Status: Some token pairs have subtle contrast. Check recommendations above.\x1b[0m");
    }
}
