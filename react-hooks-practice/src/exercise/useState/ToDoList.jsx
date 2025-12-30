import { useState } from "react";

export default function ToDoList() {

  const [todo, setTodo] = useState("");
  const [todos, setToDos] = useState([]);

  return(
    <div>
        <h2>Todo List</h2>
        <input 
        value={todo}
        onChange={((e)=>setTodo(e.target.value))}
        placeholder="Enter a task"
        className="w-full border border-gray-300 rounded px-3 py-2"
        type="text" />
        <button
        onClick={()=>{
            setToDos([...setToDos, todo]);
            setTodo("")
        }}
    >
        Add Todo
    </button>
    </div>
  );
}