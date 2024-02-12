import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {

  // In the state we have all the todos 
  const [todos, setTodos] = useState([])

  // defining the methods 

  // 1. add todos
  const addTodo = (todo) => {
    // take the previous todo and spread them
    // then add the new todo which is another object
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  // 2. update todos
  const updateTodo = (id, todo) => {
    // prev.map gives the individual todo which is an object so to find the ID's 
    // we match the prevTodo.id === id,  where prevTodo is the element inside the {} of the updated todo
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id
    === id ? todo : prevTodo)))
  }

  // delete todo
  const deleteTodo = (id) => {
    // those which doesn't match will come and rest will not get returned which matches 
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id 
    !== id)))
  }

  // checked/unchecked todo
  const toggleComplete = (id) => {
    console.log(id)
    // we check if prevTodo is false then set to prevTodo 
    // if true then take all the values and change/override the completed value only
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id 
    === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

  // Creating local storage 

  // 1. this is when application loads for the first time
  useEffect(() => {
    // to convert string into json we use JSON.parse()
    // getting the items from the storage
    const todos = JSON.parse(localStorage.getItem('todos'))

    // to check whether todos are there or not
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

    }, [])

  // 2. 
  useEffect(() => {
    // setting the items in the local storage
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  


  return (
    // Provider need to provide the values which are prop/value and methods
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            {/* calling the todoItem */}
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
