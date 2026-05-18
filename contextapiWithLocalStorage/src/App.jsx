import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodos } from "./context/TodoContext";

function App() {
  const { todos } = useTodos();

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h1>Todo App</h1>
      <TodoForm />

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;