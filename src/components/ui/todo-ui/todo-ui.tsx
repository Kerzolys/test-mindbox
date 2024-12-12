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
    <div className={styles.todo}>
      <Checkbox checked={todo.completed}
        onChange={handleToogle}
      />
      <div className={styles.todo__todo} onClick={handleToogle}>
        {todo.todo}
      </div>
      <ButtonUI color='error' onClick={handleDelete} startIcon={<Delete />} />
    </div>
  )
}