import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  // create a state for todos
  const [todos, setTodos] = useState([]); // empy array b/c of the context defined and it will be easier to loop through it.

  // We did not define the defination in the function in context, now we will do that.

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  // This function uses and updater function insede itself which adds a new todo in the new array assigning it a new id and all the todo properties as well as appending all the previous todos in result preserving them.

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodos) => (prevTodos.id === id ? todo : prevTodos)))
  }

  // This function accesses all the previous todos and maps each todo. It compares the id of each todo with the current id and updates the value to the current value if it is true else leaves it as it is.

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((toDelTodo) => toDelTodo.id !== id))
  }

  // Access the previous state, since we have to create a new array so we can use filter method. The new array will only have those values that do not match the given id.

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((checkTodo) => checkTodo.id === id ? {...checkTodo, completed: !checkTodo.completed} : checkTodo))
  }

  // Access the previous state and get the todo we want to mark completed. We will use map for that and if the id matches the given id we will destructure the obj and change the completed value using the not operator which will invert the available value else everything remains same.

  // LocalStorage is basically the browsers storage which is not cleared until done manually on page reload or when the tab is closed. It saves and returns values as a string and we will have to convert the fetched values into JSON format.

  // we will get all the todos already in the localStorage by using useEffect hook.

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  // setting items in localStorage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) // key name should be same.
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
