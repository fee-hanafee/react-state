import React from "react";

function App() {
  const [todos, setTodos] = React.useState(["HW", "Hangout"]);

  const todoRender = todos.map((todo, index) => <li key={index}>{todo}</li>);
  return (
    <div>
      <h1>My Todo</h1>
      <ul>
        {todoRender}
      </ul>
    </div>
  );
}

export default App;
