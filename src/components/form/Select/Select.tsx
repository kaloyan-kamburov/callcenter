import { useField, useFormikContext } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

type SelectOption = {
  label: string;
  value: string | number;
};

type BaseFormSelectProps = Omit<
  TextFieldProps,
  "name" | "onChange" | "value" | "error" | "helperText" | "select"
> & {
  name: string;
  helperText?: React.ReactNode;
};

type StaticFormSelectProps = BaseFormSelectProps & {
  options: SelectOption[];
};

type QueryHookResult<T> = {
  data?: T[] | { data?: T[] | null };
  isLoading: boolean;
};

type DynamicFormSelectProps<T> = BaseFormSelectProps & {
  optionsSource: QueryHookResult<T>;
  mapOption: (item: T) => SelectOption;
};

export default function Select<T = unknown>(
  props: StaticFormSelectProps | DynamicFormSelectProps<T>,
) {
  const { name, helperText } = props;
  const [field, meta] = useField(name);
  const { submitCount } = useFormikContext<unknown>();

  const showError = submitCount > 0 && Boolean(meta.error);
  const { options, isLoadingOptions, textFieldProps } = (() => {
    if ("options" in props) {
      const { options: staticOptions, name: _name, helperText: _helperText, ...rest } = props;
      return {
        options: staticOptions,
        isLoadingOptions: false,
        textFieldProps: rest,
      };
    }

    const {
      optionsSource,
      mapOption,
      name: _name,
      helperText: _helperText,
      ...rest
    } = props;
    const sourceData = Array.isArray(optionsSource.data)
      ? optionsSource.data
      : (optionsSource.data?.data ?? []);
    return {
      options: sourceData.map((item) => mapOption(item)),
      isLoadingOptions: optionsSource.isLoading,
      textFieldProps: rest,
    };
  })();
  const loadingAdornment = isLoadingOptions ? (
    <InputAdornment position="end">
      <CircularProgress size={18} />
    </InputAdornment>
  ) : undefined;

  return (
    <TextField
      {...field}
      {...textFieldProps}
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
      InputProps={{
        ...textFieldProps.InputProps,
        endAdornment: loadingAdornment ?? textFieldProps.InputProps?.endAdornment,
      }}
      size="small"
      disabled={Boolean(textFieldProps.disabled) || isLoadingOptions}
      fullWidth={textFieldProps.fullWidth ?? true}
    >
      {isLoadingOptions
        ? [
            <MenuItem key="loading-placeholder" value="" disabled>
              Loading...
            </MenuItem>,
          ]
        : options.map((option) => (
            <MenuItem key={`${option.value}`} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
  );
}
