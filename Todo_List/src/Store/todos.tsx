import { createContext, ReactNode, useState, useContext } from "react";

// children type 
export type TodosProviderProps = {
    children:ReactNode;
}

// todos type 
export type TodosType = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

// context type
export type ContextType = {
    todos:TodosType[];
    handleAddTodo : (task:string) => void;
}

// context
export const todosContext = createContext<ContextType | null>(null);

// provider
export const TodosProvider = ({children}:TodosProviderProps) => {

    const [todos,setTodos] = useState<TodosType[]>([]);

    const handleAddTodo = (task:string) => {
        setTodos((prev) => {
            const newTodos:TodosType[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            // console.log(newTodos);
            // console.log("prevTodos : ", prev);    
            return newTodos;
        })
    }

    return <todosContext.Provider value = {{todos,handleAddTodo}}>
        {children}
        </todosContext.Provider>
}

// consumer
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }
    return todosConsumer
}