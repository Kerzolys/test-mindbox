import { useState } from 'react'
import { FormTodo } from '../form-todo/form-todo'
import { TodoList } from '../todo-list/todo-list'

import styles from './App.module.css'
import { testTodos } from '../../utils/testTodos'
import { TTodo } from '../../utils/types'
import { ButtonUI } from '../ui/button-ui/button-ui'


function App() {
  const [todos, setTodos] = useState<TTodo[]>(testTodos)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const handleAdd = (newTodo: TTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const uncompletedTodos = todos.filter(todo => todo.completed === false)
  const completedTodos = todos.filter(todo => todo.completed === true)

  const filteredTodos = () => {
    if (filter === 'active') return uncompletedTodos
    if (filter === 'completed') return completedTodos
    return todos
  }

  const clearTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.completed === false))
  }

  return (
    <main className={styles.container}>
      <FormTodo todos={todos} onAddTodo={handleAdd} />
      <TodoList
        todos={filteredTodos()}
        setTodos={setTodos}
      />
      <div className={styles.infoContainer}>
        <span>{uncompletedTodos.length} items left</span>
        <div className={styles.filterContainer}>
          <ButtonUI buttonText='All' onClick={() => setFilter('all')} />
          <ButtonUI data-testid='filter-active' buttonText='Active' onClick={() => setFilter('active')} />
          <ButtonUI buttonText='Completed' onClick={() => setFilter('completed')} />
        </div>
        <ButtonUI buttonText='Clear Completed' onClick={clearTodos} size='small' color='warning' />
      </div>
    </main>
  )
}

export default App
