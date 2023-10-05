import React, { useState } from "react";
import TodoList from "./TodoList";

function Todos({ todos, onCreate, onToggle }) {
  const [input, setInput] = useState("");
  const onChange = (e) => setInput(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(input);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
