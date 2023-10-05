// 할 일 한개한개 처리 컴포넌트

import React from "react";

function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.check ? "line-through" : "none",
        cursor: "pointer"
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

export default React.memo(TodoItem);