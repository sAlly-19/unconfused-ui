/**
 * APCA Contrast Audit
 * Pure TypeScript implementation, zero dependencies.
 */
export type AuditResult = {
    pair: string;
    text: string;
    bg: string;
    lc: number;
    level: 'body' | 'large' | 'ui';
    pass: boolean;
    suggestion?: string;
};
/**
 * Convert sRGB to APCA luminance Y
 * @param r Red channel (0-255)
 * @param g Green channel (0-255)
 * @param b Blue channel (0-255)
 * @returns APCA luminance Y
 */
export declare function sRGBtoY(r: number, g: number, b: number): number;
/**
 * Calculates Lc contrast value
 * @param textHex Text hex color
 * @param bgHex Background hex color
 * @returns Lc value
 */
export declare function calcAPCA(textHex: string, bgHex: string): number;
/**
 * Checks if a color pair meets APCA contrast thresholds
 * @param textHex Text color
 * @param bgHex Background color
 * @param level The contrast level needed
 * @returns true if it passes
 */
export declare function meetsContrast(textHex: string, bgHex: string, level: 'body' | 'large' | 'ui'): boolean;
/**
 * Audits semantic pairs
 * @param semanticTokens Record of semantic token values
 * @returns Array of audit results
 */
export declare function auditSemanticPairs(semanticTokens: Record<string, string>): AuditResult[];
//# sourceMappingURL=index.d.ts.map