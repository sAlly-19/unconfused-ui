import React from 'react';
import { ViewProps } from 'react-native';
export interface FocusTrapProps extends ViewProps {
    children: React.ReactNode;
    active?: boolean;
    onRequestClose?: () => void;
}
export declare function FocusTrap({ children, active, onRequestClose, ...props }: FocusTrapProps): React.ReactElement;
export declare const FocusScope: typeof FocusTrap;
//# sourceMappingURL=FocusTrap.d.ts.map