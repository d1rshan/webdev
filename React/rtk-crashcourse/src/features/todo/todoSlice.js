import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{id: 1, title: "task 1"}]
    },
    reducers:{
        addTodo: (state,action) =>{
            const todo = {
                id: nanoid(),
                title: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        }
    }
})