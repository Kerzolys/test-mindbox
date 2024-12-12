import { ButtonUiProps } from "../button-ui/type";
import { InputUiProps } from "../input-ui/type";

export type FormUiProps = {
  extraClass?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // buttonText?: string;
  // inputLabel?: string;
  // inputError: string;
  // disabled?: boolean;
  inputs: InputUiProps[];
  buttons: ButtonUiProps[];
};
