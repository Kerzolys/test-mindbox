import { Button } from "@mui/material"
import { ButtonUiProps } from "./type"

export const ButtonUI: React.FC<ButtonUiProps> = ({
  buttonText,
  onClick,
  disabled,
  type,
  extraClass,
  ...props
}) => {
  return (
    <Button
      className={`button ${extraClass}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {buttonText}
    </Button>
  )
}