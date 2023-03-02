import React from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

export default function TodoItem({ item, updateTodo }) {
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
      {/* if item is checked, add line-through */}
      <input
        className="w-5 h-5"
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          handleTodo();
        }}
      />
      {/* if item is checked, add line-through */}
      <p
        className={`flex-1 text-lg ${
          item.completed ? "text-gray-400 line-through" : ""
        }`}
      >
        {item.title}
      </p>
    </div>
  );
}
