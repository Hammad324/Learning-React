import { useContext, createContext } from "react";

export const TodoContext = createContext({
    // properties
    todos: [
        {
            id: 1,
            todoMessage: "Todo Msg",
            completed: false,
        }
    ],
    // functionality, we will only write there names no defination.
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const UseTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
