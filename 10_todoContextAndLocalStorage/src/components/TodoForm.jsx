import React, { useState } from 'react'
import { UseTodo } from '../contexts';

function TodoForm() {
    // this state is for individual todos
    const [todo, setTodo] = useState("")
    const {addTodo} = UseTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return
        addTodo({todo, completed: false})
        // addTodo comes from app.jsx addTodo this time we will not give id as it is already happening in that part or we can do it here as well. Similarly if we have same key and value name we can simply write it with making it a key-value pair.
        setTodo("")
        //Resets the todo input field to an empty string after adding the todo.
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
