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
exports.Shimmer = exports.SkeletonCompound = exports.SkeletonTableRow = exports.SkeletonCard = exports.SkeletonAvatar = exports.SkeletonText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const primitives_1 = require("@unconfused-ui/primitives");
const Skeleton_1 = require("./Skeleton");
__exportStar(require("./Skeleton"), exports);
const SkeletonText = ({ lines = 3, gap = 8, height = 12, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: gap, style: style, children: Array.from({ length: lines }).map((_, index) => ((0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { height: height, width: index === 0 ? "100%" : index === lines - 1 ? "60%" : "85%", radius: 4 }, index))) }));
exports.SkeletonText = SkeletonText;
exports.SkeletonText.displayName = "SkeletonText";
const SkeletonAvatar = ({ size = 44, style }) => ((0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { width: size, height: size, radius: size / 2, style: style }));
exports.SkeletonAvatar = SkeletonAvatar;
exports.SkeletonAvatar.displayName = "SkeletonAvatar";
const SkeletonCard = ({ hasAvatar = true, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
        {
            padding: 18,
            borderRadius: 16,
            backgroundColor: "rgba(16, 18, 30, 0.8)",
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.08)",
        },
        style,
    ], children: (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, children: [hasAvatar && (0, jsx_runtime_1.jsx)(exports.SkeletonAvatar, { size: 40 }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { height: 14, width: "55%", radius: 4 }), (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { height: 10, width: "35%", radius: 4 })] })] }), (0, jsx_runtime_1.jsx)(exports.SkeletonText, { lines: 3, height: 10 }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: { marginTop: 4 }, children: [(0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { height: 18, width: 64, radius: 6 }), (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { height: 24, width: 80, radius: 6 })] })] }) }));
exports.SkeletonCard = SkeletonCard;
exports.SkeletonCard.displayName = "SkeletonCard";
const SkeletonTableRow = ({ columns = 4, height = 16, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "center", justify: "space-between", style: [{ paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: "rgba(255, 255, 255, 0.05)" }, style], children: Array.from({ length: columns }).map((_, index) => ((0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { height: height, width: `${80 / columns}%`, radius: 4 }, index))) }));
exports.SkeletonTableRow = SkeletonTableRow;
exports.SkeletonTableRow.displayName = "SkeletonTableRow";
// Compound export
exports.SkeletonCompound = Object.assign(Skeleton_1.Skeleton, {
    Text: exports.SkeletonText,
    Avatar: exports.SkeletonAvatar,
    Card: exports.SkeletonCard,
    TableRow: exports.SkeletonTableRow,
});
exports.Shimmer = exports.SkeletonCompound;
