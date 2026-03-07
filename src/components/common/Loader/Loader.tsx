import { CircularProgress } from "@mui/material";

interface LoaderProps {
  size?: number;
}

export default function Loader({ size = 40 }: LoaderProps) {
  return <CircularProgress size={size} />;
}
