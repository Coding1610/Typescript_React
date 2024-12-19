import { FormEvent, useState } from "react"
import { useTodos } from "../Store/todos";

export default function AddTodo() {

    const [todo,setTodo] = useState("");
    const {handleAddTodo} = useTodos();

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }

   return (
    <form onSubmit={handleFormSubmit}>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="add new todo"/>
        <button type="submit"> Add </button>
    </form>
  )
}