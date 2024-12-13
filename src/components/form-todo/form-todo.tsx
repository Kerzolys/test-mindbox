import { useState } from "react"
import { FormUI } from "../ui/form-ui/from-ui"
import { InputUiProps } from "../ui/input-ui/type"
import { ButtonUiProps } from "../ui/button-ui/type"
import { TTodo } from "../../utils/types"


export const FormTodo = ({todos, onAddTodo}: 
  {todos: TTodo[], onAddTodo: (newTodo: TTodo) => void}) => {
  const [value, setValue] = useState('')


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(value) {
      const newTodo: TTodo = {
            id: todos.length + 1,
            todo: value,
            completed: false,
          }
          onAddTodo(newTodo)
          setValue('')
          console.log(value)
    }
  }

  

  const inputs: InputUiProps[] = [
    {
      label: 'What needs to be done?',
      error: value ? '' : 'Field is required',
      variant: 'outlined',
      value: value,
    }
  ]

  const buttons: ButtonUiProps[] = [
    {
      buttonText: 'Add todo',
      disabled: !value
    }
  ]
  return (
    <div>
      <FormUI
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputs={inputs}
        buttons={buttons}
      />
    </div>
  )
}