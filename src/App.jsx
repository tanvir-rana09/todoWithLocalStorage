import { useEffect, useState } from 'react'
import { TodoProvider } from './Context'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  // const toggleComplete = (id) => {
  //   //console.log(id);
  //   setTodos((prev) => 
  //   prev.map((prevTodo) => 
  //     prevTodo.id === id ? { ...prevTodo, 
  //       completed: !prevTodo.completed } : prevTodo))
  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (

    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((item)=>(
                <div key={item.id}>
                  <TodoItem  todo={item}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App

// const [todos, setTodos] = useState([])

// const addTodo = (todo) => {
//   setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
// }
// const updateTodo = (id, todo) => {
//   setTodos((prev) => prev.map((prevTodos) => (prevTodos.id === id ? todo : prevTodos)))
// }
// const deleteTodo = (id) => {
//   setTodos((prev) => prev.filter((todos) => todos.id !== id))
// }
// const toggleComplete = (id) => {
//   setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo.completed))
// }

// useEffect(() => {
//   const todos = JSON.parse(localStorage.getItem("todos"))

//   if (todos && todos.length > 0) {
//     setTodos(todos)
//   }
// }, [])

// useEffect(() => {
//   localStorage.setItem("todos", JSON.stringify(todos))
// }, [todos])