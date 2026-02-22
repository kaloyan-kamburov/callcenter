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
          sx={{
            "& .MuiDialog-paper": {
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              maxHeight: "calc(100dvh - 64px)",
            },
            "& .MuiDialog-paper > form": {
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              maxHeight: "100%",
            },
            "& .MuiDialogTitle-root": {
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: "background.paper",
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            },
            "& .MuiDialogContent-root": {
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              scrollbarGutter: "stable",
              overscrollBehavior: "contain",
              pt: 2,
            },
            "& .MuiDialogActions-root": {
              position: "sticky",
              bottom: 0,
              zIndex: 1,
              backgroundColor: "background.paper",
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            },
          }}
        >
          <ContentComponent {...(props as TProps)} close={close} />
        </Dialog>
      );
    }

    return ModalComponent;
  }, [ContentComponent, close, isOpen]);

  return { open, close, isOpen, Modal };
}
