import { CircularProgress, type SxProps } from "@mui/material";

interface LoaderProps {
  size?: number;
  sx?: SxProps;
}

export default function Loader({ size = 40, sx }: LoaderProps) {
  return <CircularProgress size={size} sx={sx} />;
}
