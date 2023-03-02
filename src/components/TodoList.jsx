import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, updateList }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          updateTodo={updateList}
        />
      ))}
    </div>
  );
}
