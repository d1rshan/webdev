import { createContext, useContext } from "react";
export const TodoContext = createContext();

export function useTodo(){
    return useContext(TodoContext);
}
