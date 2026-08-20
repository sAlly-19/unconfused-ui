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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTokens = exports.breakpointOrder = exports.breakpoints = exports.materials = exports.zIndices = exports.motion = exports.shadows = exports.lineHeights = exports.fontWeights = exports.fontSizes = exports.radii = exports.spacing = exports.darkSemanticTokens = exports.lightSemanticTokens = exports.baseColors = void 0;
const colors_1 = require("./base/colors");
const motion_1 = require("./base/motion");
const radii_1 = require("./base/radii");
const shadows_1 = require("./base/shadows");
const spacing_1 = require("./base/spacing");
const typography_1 = require("./base/typography");
const zIndices_1 = require("./base/zIndices");
const materials_1 = require("./base/materials");
const breakpoints_1 = require("./base/breakpoints");
const light_1 = require("./semantic/light");
__exportStar(require("./types"), exports);
__exportStar(require("./base/materials"), exports);
__exportStar(require("./base/breakpoints"), exports);
__exportStar(require("./oklch"), exports);
__exportStar(require("./apca"), exports);
var colors_2 = require("./base/colors");
Object.defineProperty(exports, "baseColors", { enumerable: true, get: function () { return colors_2.baseColors; } });
var light_2 = require("./semantic/light");
Object.defineProperty(exports, "lightSemanticTokens", { enumerable: true, get: function () { return light_2.lightSemanticTokens; } });
var dark_1 = require("./semantic/dark");
Object.defineProperty(exports, "darkSemanticTokens", { enumerable: true, get: function () { return dark_1.darkSemanticTokens; } });
var spacing_2 = require("./base/spacing");
Object.defineProperty(exports, "spacing", { enumerable: true, get: function () { return spacing_2.spacing; } });
var radii_2 = require("./base/radii");
Object.defineProperty(exports, "radii", { enumerable: true, get: function () { return radii_2.radii; } });
var typography_2 = require("./base/typography");
Object.defineProperty(exports, "fontSizes", { enumerable: true, get: function () { return typography_2.fontSizes; } });
Object.defineProperty(exports, "fontWeights", { enumerable: true, get: function () { return typography_2.fontWeights; } });
Object.defineProperty(exports, "lineHeights", { enumerable: true, get: function () { return typography_2.lineHeights; } });
var shadows_2 = require("./base/shadows");
Object.defineProperty(exports, "shadows", { enumerable: true, get: function () { return shadows_2.shadows; } });
var motion_2 = require("./base/motion");
Object.defineProperty(exports, "motion", { enumerable: true, get: function () { return motion_2.motion; } });
var zIndices_2 = require("./base/zIndices");
Object.defineProperty(exports, "zIndices", { enumerable: true, get: function () { return zIndices_2.zIndices; } });
var materials_2 = require("./base/materials");
Object.defineProperty(exports, "materials", { enumerable: true, get: function () { return materials_2.materials; } });
var breakpoints_2 = require("./base/breakpoints");
Object.defineProperty(exports, "breakpoints", { enumerable: true, get: function () { return breakpoints_2.breakpoints; } });
Object.defineProperty(exports, "breakpointOrder", { enumerable: true, get: function () { return breakpoints_2.breakpointOrder; } });
exports.defaultTokens = {
    colors: colors_1.baseColors,
    semantic: light_1.lightSemanticTokens,
    spacing: spacing_1.spacing,
    radii: radii_1.radii,
    fontSizes: typography_1.fontSizes,
    lineHeights: typography_1.lineHeights,
    fontWeights: typography_1.fontWeights,
    shadows: shadows_1.shadows,
    motion: motion_1.motion,
    zIndices: zIndices_1.zIndices,
    materials: materials_1.materials,
    breakpoints: breakpoints_1.breakpoints,
};
