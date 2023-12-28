import React from "react";

function App() {
  const [todoList, setTodoList] = React.useState(["HW", "Hangout"]);
  const [newTodo, setNewtodo] = React.useState("");

  const todoChangeInput = (event) => {
    setNewtodo(event.target.value);
  };
  const todoAddnew = () => {
    setTodoList((cur) => [...cur, newTodo]);
    setNewtodo("");
  };

  return (
    <div>
      <h1>My Todo</h1>
      <ul>
        <input onChange={todoChangeInput} value={newTodo} />
        <button onClick={todoAddnew}>add</button>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
