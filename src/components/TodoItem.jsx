import React from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

function TodoItem({ item, updateTodo }) {
  function handleTodo() {
    updateTodo(item.id);
    if (item.completed) {
      confetti({
        particleCount: 200,
        spread: 360,
      });
    }
  }
  return (
    <div className="flex gap-4 items-center p-2 shadow-sm border-2 rounded-md cursor-pointer hover:shadow-md hover:bg-gray-100">
      <input
        className="w-5 h-5"
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          handleTodo();
        }}
      />
      <p>{item.title}</p>
    </div>
  );
}

export default TodoItem;
