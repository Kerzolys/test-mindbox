import { Checkbox } from '@mui/material'
import { ButtonUI } from '../button-ui/button-ui'
import styles from './todo-ui.module.scss'
import { TodoUiProps } from './type'
import Delete from '@mui/icons-material/Delete'

export const TodoUI: React.FC<TodoUiProps> = ({ todo, onToggle, onDelete }) => {
  const handleToogle = () => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDelete(todo.id)
  }

  return (
    <li className={styles.todo} data-testid='todo'>
      <Checkbox checked={todo.completed}
        onChange={handleToogle}
        data-testid={`toggle-${todo.id}`}
      />
      <div className={styles.todo__todo} onClick={handleToogle}>
        {todo.todo}
      </div>
      <ButtonUI
        data-testid={`delete-${todo.id}`}
        buttonText='Delete'
        color='error'
        onClick={handleDelete}
        startIcon={<Delete />}
      />
    </li>
  )
}