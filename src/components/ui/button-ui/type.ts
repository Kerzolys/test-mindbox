import { ButtonProps } from "@mui/material";

export interface ButtonUiProps extends ButtonProps {
  buttonText?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  extraClass?: string;
}
