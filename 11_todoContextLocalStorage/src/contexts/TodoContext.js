import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
    // It's a property or VALUES
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            checked: false,
        }
    ],
    // It's a functionality which is a METHOD
    addTodo: (todo) => {},
    // to: which todo we want to update 
    // todo: field of the todo we want to update
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    // the field gets updated and the rest is done by CSS
    toggleCompete: (id) => {}
})

// exporting TodoContext
export const useTodo = () => {
    return useContext(TodoContext)
}

// export TodoProvider
export const TodoProvider = TodoContext.Provider


