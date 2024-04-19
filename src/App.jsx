import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'
import TodoDispatchContext from './context/TodoDispatchContext'
import { useReducer } from 'react';
import todoReducer from './reducers/todoReducer';

function App() {
  
  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        < AddTodo />
        < TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
