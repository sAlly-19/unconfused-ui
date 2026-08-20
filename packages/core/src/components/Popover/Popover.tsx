import React, { createContext, useContext, useState } from "react";
import { Modal, View, ViewStyle } from "react-native";
import { Box, Pressable, FocusTrap } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

type PopoverContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

export function usePopoverContext() {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("<Popover> subcomponents must be used within <Popover>");
  }
  return context;
}

export type PopoverProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export const PopoverRoot = ({ open: propOpen, defaultOpen = false, onOpenChange, children }: PopoverProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const isControlled = propOpen !== undefined;
  const currentOpen = isControlled ? propOpen : open;

  const handleOpenChange = (nextOpen: boolean) => {
    if (!isControlled) {
      setOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  return (
    <PopoverContext.Provider value={{ open: currentOpen, setOpen: handleOpenChange }}>
      <View style={{ position: "relative" }}>{children}</View>
    </PopoverContext.Provider>
  );
};
PopoverRoot.displayName = "Popover";

export const PopoverTrigger = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = usePopoverContext();
  return <Pressable onPress={() => setOpen(!open)}>{children}</Pressable>;
};
PopoverTrigger.displayName = "Popover.Trigger";

export const PopoverContent = ({ style, children }: { style?: ViewStyle; children: React.ReactNode }) => {
  const { open, setOpen } = usePopoverContext();
  const { semanticColors } = useTheme();

  if (!open) return null;

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
      <Pressable style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center" }} onPress={() => setOpen(false)}>
        <FocusTrap active={open} onRequestClose={() => setOpen(false)}>
          <Pressable
            onPress={(e) => e.stopPropagation?.()}
            style={[
              {
                width: 280,
                backgroundColor: semanticColors.surface,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: semanticColors.borderBold,
                padding: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.25,
                shadowRadius: 12,
                elevation: 8,
              },
              style,
            ]}
          >
            {children}
          </Pressable>
        </FocusTrap>
      </Pressable>
    </Modal>
  );
};
PopoverContent.displayName = "Popover.Content";

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
});
