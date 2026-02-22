import { useCallback, useMemo, useState } from "react";
import Dialog from "@mui/material/Dialog";
import type { ComponentType } from "react";
import type { Breakpoint } from "@mui/material";

type ModalContentProps = {
  close: () => void;
};

type PropsOf<TComponent> =
  TComponent extends ComponentType<infer TProps> ? TProps : never;

export function useModal<TComponent extends ComponentType<ModalContentProps>>(
  ContentComponent: TComponent,
  size = "md",
) {
  type ContentProps = PropsOf<TComponent> & ModalContentProps;
  type ModalProps = Omit<ContentProps, "close">;
  const TypedContentComponent = ContentComponent as ComponentType<ContentProps>;

  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Modal: ComponentType<ModalProps> = useMemo(() => {
    function ModalComponent(props: ModalProps) {
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
              scrollBehavior: "smooth",
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
          <TypedContentComponent {...(props as ContentProps)} close={close} />
        </Dialog>
      );
    }

    return ModalComponent;
  }, [TypedContentComponent, close, isOpen, size]);

  return { open, close, isOpen, Modal };
}
