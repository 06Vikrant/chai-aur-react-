import React from 'react'
import { useState } from 'react';
import { useTodo } from '../contexts';

export default function TodoForm() {

    // State define for individual todo
    const [todo, setTodo] = useState('') 

    // 
    const {addTodo} = useTodo()

    // create a addTodo
    const add = (e) => {
        e.preventDefault();

        // if there is nothing inside a todo
        if (!todo) return

        // if there then pass the values as it's inside an array 
        // already passed the id of the todo then we can remove 
        // if param and value are the same then we can write value
        addTodo({todo, completed: false})
        setTodo("")
    }
    
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // this is called wiring i.e, wiring of input with the state 
                value={todo}
                // anything changes
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
