import React from "react";
import { ViewStyle } from "react-native";
export type UploadedFile = {
    name: string;
    size: number;
    type?: string;
    uri?: string;
};
export type FileDropzoneProps = {
    onFilesSelected?: (files: UploadedFile[]) => void;
    accept?: string;
    maxFiles?: number;
    maxSizeMb?: number;
    title?: string;
    subtitle?: string;
    disabled?: boolean;
    style?: ViewStyle;
};
/**
 * Universal FileDropzone component:
 * Handles drag-and-drop on Web, file picking, multi-file previews, and tokenized states.
 */
export declare function FileDropzone({ onFilesSelected, accept, maxFiles, maxSizeMb, title, subtitle, disabled, style, }: FileDropzoneProps): React.JSX.Element;
export declare namespace FileDropzone {
    var displayName: string;
}
//# sourceMappingURL=FileDropzone.d.ts.map