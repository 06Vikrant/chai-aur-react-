import { createSlice, nanoid } from "@reduxjs/toolkit";

//1. Set the Initial state of the store i.e, 
// empty, value, fetch value from database 
const initialState = {
    // a state which is an array of objects
    todos: [{
        id: 1,
        text: 'Hello World'
    }]
}

// 2. Create a slice: bigger version of reducer
// This is reducer and we can make mutiple reducers like authReducer, loginReducer
export const todoSlice = createSlice({
    //1. name  
    name: 'todo',
    //2.slice initial state
    initialState,
    //3.create reducers
    // inside reducers we take properties and functions 
    reducers: {
        // addTodo is a property inside which we declare and define the function
        // differnce btw      Context API      and         redux-toolkit    
        //               declare the function       declare and define the function
        // syntax for reducers properties we have access to these parameters
        // addtodo(state, action) => {}
        // state: gives the state of intialState 
        // action: gives values for the properties of action/data pass i.e, id when removing a todo or creating a todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // generate unique id
                text: action.payload // so we take text from action.payload, payload is a object 
            }
            // need to update the initialState
            state.todos.push(todo);
         },
        removeTodo: (state, action) => {
            // to get id we apply filter method to todos and action.id == nanoid() to usko ni lege r baki sabko lelege
            // overriding the todos
            // id h usko match mat kro r baki sabko le ao 
            state.todos = state.todos.filter((todo) => {todo.id !== action.payload})
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.find((todo) => todo.id === action.payload ? action.payload : todo)
        // },
        // deleteTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        // }
    }
})

// syntax to export the slice in two parts: 
// Export 1
// export functionalities the state and use these in components
// addTodo, updateTodo, deleteTodo are individual reducers
export const { addTodo, removeTodo } = todoSlice.actions

// Export 2
// export the whole reducer function
export default todoSlice.reducer
