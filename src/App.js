import React from "react";

function App() {
  const [todos, setTodos] = React.useState(["HW", "Hangout"]);
  const [newTodo, setNewtodo] = React.useState("");

  const todoChange = (event) => {
    setNewtodo(event.target.value);
  };
  const todoAddnew = () => {
    setTodos((cur) => [...cur, newTodo]);
    setNewtodo('')
  };
  const todoRender = todos.map((todo, index) => <li key={index}>{todo}</li>);
  return (
    <div>
      <h1>My Todo</h1>
      <ul>
        <input onChange={todoChange} value={newTodo}/>
        <button onClick={todoAddnew}>add</button>
        {todoRender}
      </ul>
    </div>
  );
}

export default App;
