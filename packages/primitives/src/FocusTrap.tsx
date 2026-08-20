import React, { useEffect, useRef } from 'react';
import { View, Platform, ViewProps } from 'react-native';

export interface FocusTrapProps extends ViewProps {
  children: React.ReactNode;
  active?: boolean;
  onRequestClose?: () => void;
}

export function FocusTrap({ children, active = true, onRequestClose, ...props }: FocusTrapProps): React.ReactElement {
  const containerRef = useRef<View>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    
    if (Platform.OS === 'web') {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onRequestClose?.();
          return;
        }
        
        if (e.key === 'Tab') {
          // @ts-ignore - access DOM element on web
          const node = containerRef.current as unknown as HTMLElement;
          if (!node) return;
          
          const focusableElements = node.querySelectorAll?.(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
          ) as NodeListOf<HTMLElement>;
          
          if (!focusableElements || focusableElements.length === 0) {
            e.preventDefault();
            return;
          }
          
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        previouslyFocusedRef.current?.focus?.();
      };
    }
  }, [active, onRequestClose]);

  return (
    <View
      ref={containerRef}
      accessibilityViewIsModal={active}
      {...props}
    >
      {children}
    </View>
  );
}

export const FocusScope = FocusTrap;
