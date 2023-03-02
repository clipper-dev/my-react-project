import { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoRef = useRef(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  
  function addTodo(e) {
    e.preventDefault();
    if (addTodoRef.current.value === "") return;
    const todo = {
      id: Date.now(),
      completed: false,
      title: addTodoRef.current.value,
    };
    updateList([...todos, todo]);
    addTodoRef.current.value = "";
    addTodoRef.current.focus();
    console.log("🚀 ~ file: App.jsx:17 ~ App ~ todos:", todos);
  }
  function updateTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    updateList(newTodos);
  }
  function clearCompleted() {
    const newTodos = todos.filter((todo) => !todo.completed);
    updateList(newTodos);
  }
  function updateList(newTodos){
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  return (
    <main className="flex flex-col gap-4 w-full items-center p-4">
      <h1 className="font-bold text-4xl">Things to do</h1>
      <form className="flex gap-4">
        <input
          className="border-2 border-gray-300 p-2 rounded-md"
          type="text"
          placeholder="What to do?"
          ref={addTodoRef}
          autoFocus
        />
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-md"
          type="submit"
          onClick={addTodo}
        >
          Add
        </button>
        <button
          className="bg-red-500 text-white px-5 py-2 rounded-md"
          onClick={() => clearCompleted()}
          type="button"
        >
          Clear
        </button>
      </form>
      <TodoList todos={todos} updateList={updateTodo} />
    </main>
  );
}

export default App;
