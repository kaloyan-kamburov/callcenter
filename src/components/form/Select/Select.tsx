import { useField, useFormikContext } from "formik";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

type SelectOption = {
  label: string;
  value: string | number;
};

type FormSelectProps = Omit<
  TextFieldProps,
  "name" | "onChange" | "value" | "error" | "helperText" | "select"
> & {
  name: string;
  options: SelectOption[];
  helperText?: React.ReactNode;
};

export default function Select(props: FormSelectProps) {
  const { name, options, helperText, ...rest } = props;
  const [field, meta] = useField(name);
  const { submitCount } = useFormikContext<unknown>();

  const showError = submitCount > 0 && Boolean(meta.error);

  return (
    <TextField
      {...field}
      {...rest}
      select
      value={field.value ?? ""}
      error={showError}
      helperText={
        showError
          ? typeof meta.error === "string"
            ? meta.error
            : undefined
          : helperText ?? undefined
      }
      size="small"
      fullWidth={rest.fullWidth ?? true}
    >
      {options.map((option) => (
        <MenuItem key={`${option.value}`} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
