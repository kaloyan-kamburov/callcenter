import { useState } from "react";
import { useField, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import type { TextFieldProps } from "@mui/material/TextField";
import type { OutlinedInputProps as OutlinedInputPropsMui } from "@mui/material/OutlinedInput";
import type { FilledInputProps as FilledInputPropsMui } from "@mui/material/FilledInput";
import type { InputProps as InputBasePropsMui } from "@mui/material/Input";

type FormInputProps = Omit<
  TextFieldProps,
  "name" | "onChange" | "value" | "error" | "helperText"
> & {
  name: string;
  showPasswordToggle?: boolean;
  helperText?: React.ReactNode;
};

type InputAdornableProps = Partial<
  OutlinedInputPropsMui & FilledInputPropsMui & InputBasePropsMui
>;

export default function Input(props: FormInputProps) {
  const { name, type, showPasswordToggle, helperText, ...rest } = props;
  const [field, meta] = useField(name);
  const { submitCount } = useFormikContext<unknown>();
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = (type ?? "text") === "password";
  const shouldShowToggle = showPasswordToggle || isPasswordType;
  const effectiveType = shouldShowToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  const showError = submitCount > 0 && Boolean(meta.error);

  const passwordAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword((v) => !v)}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  const inputSlotProps: InputAdornableProps = {
    ...(rest.slotProps?.input as InputAdornableProps | undefined),
    ...(shouldShowToggle ? { endAdornment: passwordAdornment } : {}),
  };

  return (
    <TextField
      {...field}
      {...rest}
      type={effectiveType}
      error={showError}
      helperText={
        showError
          ? typeof meta.error === "string"
            ? meta.error
            : undefined
          : helperText ?? undefined
      }
      size="small"
      slotProps={{ ...rest.slotProps, input: inputSlotProps }}
      fullWidth={rest.fullWidth ?? true}
    />
  );
}
