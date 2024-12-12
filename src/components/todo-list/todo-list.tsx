import { TodoUI } from '../ui/todo-ui/todo-ui'
import { TTodo } from '../../utils/types'

import styles from './todo-list.module.scss'

export const TodoList = ({ todos, setTodos }: { todos: TTodo[], setTodos: React.Dispatch<React.SetStateAction<TTodo[]>> }) => {

  const handleToogle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className={styles.todoList}>
      {todos.map(todo => {
        return <TodoUI onToggle={handleToogle} onDelete={handleDelete} todo={todo} key={todo.id} />
      })}
    </div>
  )
}