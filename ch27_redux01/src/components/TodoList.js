// 할일 목록 컴포넌트

import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);