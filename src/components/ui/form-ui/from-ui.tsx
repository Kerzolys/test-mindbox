import { ButtonUI } from '../button-ui/button-ui'
import { InputUI } from '../input-ui/input-ui'
import { FormUiProps } from './type'

import styles from './form-ui.module.scss'

export const FormUI: React.FC<FormUiProps> = ({ extraClass,
  onSubmit,
  onChange,
  inputs,
  buttons
}) => {
  return (
    <form className={`${styles.form} ${extraClass}`} onSubmit={onSubmit}>
      {inputs.map((input, index) => {
        return <InputUI
          key={index}
          label={input.label}
          // error={input.error}
          onChange={onChange}
          {...input}
         />
      })}
      {buttons.map((button, index) => {
        return <ButtonUI
          key={index}
          buttonText={button.buttonText}
          type='submit'
          {...button}
         />
      })}
    </form>
  )
}