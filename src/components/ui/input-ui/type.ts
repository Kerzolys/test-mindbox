import { TextFieldProps } from "@mui/material";

export type InputUiProps = Omit<TextFieldProps, 'error'> & {
  // label?: string;
  extraClass?: string;
  error: string;
}
