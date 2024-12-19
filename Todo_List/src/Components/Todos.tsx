import { useTodos } from "../Store/todos"

export default function Todos() {

    const {todos} = useTodos();

    let filterData = todos;

  return (
    <ul>
        {
            filterData.map((todo) => {
                return <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} id={`todo-${todo.id}`}/>
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button type="button">Delete</button>
                            )
                        }
                        </li>
            })
        }
    </ul>
  )
}