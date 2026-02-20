import { useCallback, useMemo, useState } from "react";
import Dialog from "@mui/material/Dialog";
import type { ComponentType } from "react";
import type { Breakpoint } from "@mui/material";

type ModalContentProps = {
  close: () => void;
  size?: "sm" | "md" | "lg";
};

export function useModal<TProps extends ModalContentProps>(
  ContentComponent: ComponentType<TProps>,
  size = "md",
) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Modal: ComponentType<Omit<TProps, "close">> = useMemo(() => {
    function ModalComponent(props: Omit<TProps, "close">) {
      return (
        <Dialog
          open={isOpen}
          onClose={close}
          fullWidth
          maxWidth={size as Breakpoint}
        >
          <ContentComponent {...(props as TProps)} close={close} />
        </Dialog>
      );
    }

    return ModalComponent;
  }, [ContentComponent, close, isOpen]);

  return { open, close, isOpen, Modal };
}
