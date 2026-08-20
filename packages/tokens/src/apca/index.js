"use strict";
/**
 * APCA Contrast Audit
 * Pure TypeScript implementation, zero dependencies.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sRGBtoY = sRGBtoY;
exports.calcAPCA = calcAPCA;
exports.meetsContrast = meetsContrast;
exports.auditSemanticPairs = auditSemanticPairs;
/**
 * Convert sRGB to APCA luminance Y
 * @param r Red channel (0-255)
 * @param g Green channel (0-255)
 * @param b Blue channel (0-255)
 * @returns APCA luminance Y
 */
function sRGBtoY(r, g, b) {
    const linearize = (c) => {
        c = c / 255.0;
        // APCA linear approximation for standard displays
        return Math.pow(c, 2.4);
    };
    return linearize(r) * 0.2126729 + linearize(g) * 0.7151522 + linearize(b) * 0.0721750;
}
function parseHexToRGB255(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    const int = parseInt(hex, 16);
    return [
        (int >> 16) & 255,
        (int >> 8) & 255,
        int & 255
    ];
}
/**
 * Calculates Lc contrast value
 * @param textHex Text hex color
 * @param bgHex Background hex color
 * @returns Lc value
 */
function calcAPCA(textHex, bgHex) {
    const normBG = 0.56;
    const normTXT = 0.57;
    const revTXT = 0.62;
    const revBG = 0.65;
    const blkThrs = 0.022;
    const blkClmp = 1.414;
    const deltaYmin = 0.0005;
    const scale = 1.14;
    let [tr, tg, tb] = parseHexToRGB255(textHex);
    let [br, bg, bb] = parseHexToRGB255(bgHex);
    let Ytxt = sRGBtoY(tr, tg, tb);
    let Ybg = sRGBtoY(br, bg, bb);
    if (Math.abs(Ybg - Ytxt) < deltaYmin)
        return 0.0;
    if (Ytxt < blkThrs)
        Ytxt += Math.pow(blkThrs - Ytxt, blkClmp);
    if (Ybg < blkThrs)
        Ybg += Math.pow(blkThrs - Ybg, blkClmp);
    let SAPC = 0.0;
    if (Ybg > Ytxt) {
        SAPC = (Math.pow(Ybg, normBG) - Math.pow(Ytxt, normTXT)) * scale;
    }
    else {
        SAPC = (Math.pow(Ybg, revBG) - Math.pow(Ytxt, revTXT)) * scale;
    }
    let outputContrast = 0.0;
    if (SAPC > 0.1) {
        outputContrast = SAPC;
    }
    else if (SAPC < -0.1) {
        outputContrast = SAPC;
    }
    else {
        outputContrast = 0.0;
    }
    return outputContrast * 100.0;
}
/**
 * Checks if a color pair meets APCA contrast thresholds
 * @param textHex Text color
 * @param bgHex Background color
 * @param level The contrast level needed
 * @returns true if it passes
 */
function meetsContrast(textHex, bgHex, level) {
    const lc = Math.abs(calcAPCA(textHex, bgHex));
    switch (level) {
        case 'body': return lc >= 60;
        case 'large': return lc >= 45;
        case 'ui': return lc >= 30;
        default: return false;
    }
}
/**
 * Audits semantic pairs
 * @param semanticTokens Record of semantic token values
 * @returns Array of audit results
 */
function auditSemanticPairs(semanticTokens) {
    const pairsToTest = [
        { pair: 'foreground/background', text: 'foreground', bg: 'background', level: 'body' },
        { pair: 'foreground/surface', text: 'foreground', bg: 'surface', level: 'body' },
        { pair: 'foregroundMuted/surface', text: 'foregroundMuted', bg: 'surface', level: 'body' },
        { pair: 'foregroundMuted/surfaceSubtle', text: 'foregroundMuted', bg: 'surfaceSubtle', level: 'body' },
        { pair: 'primary/background', text: 'primary', bg: 'background', level: 'ui' },
        { pair: 'primaryForeground/primary', text: 'primaryForeground', bg: 'primary', level: 'body' },
        { pair: 'dangerForeground/danger', text: 'dangerForeground', bg: 'danger', level: 'body' },
    ];
    const thresholds = {
        body: 60,
        large: 45,
        ui: 30,
    };
    const results = [];
    for (const test of pairsToTest) {
        const textHex = semanticTokens[test.text];
        const bgHex = semanticTokens[test.bg];
        if (textHex && bgHex) {
            const lc = calcAPCA(textHex, bgHex);
            const pass = meetsContrast(textHex, bgHex, test.level);
            const targetLc = thresholds[test.level];
            results.push({
                pair: test.pair,
                text: textHex,
                bg: bgHex,
                lc,
                level: test.level,
                pass,
                suggestion: pass ? undefined : `Adjust contrast to meet ${test.level} level (Lc >= ${targetLc})`
            });
        }
    }
    return results;
}
