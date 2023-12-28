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
  const handleDelete = (idx) => {
    // const newTodolist = [...todoList]
    // newTodolist.splice(index,1)
    setTodoList(cur => [...cur].filter((todo,index) =>index !== idx))
  };

  const todoRender = todoList.map((todo, index) => (
    <li key={index}>
      {todo}{" "}
      <button onClick={(e) => handleDelete(index)}>
        x
      </button>
    </li>
  ));
  return (
    <div>
      <h1>My Todo</h1>
      <ul>
        <input onChange={todoChangeInput} value={newTodo} />
        <button onClick={todoAddnew}>add</button>
        {todoRender}
      </ul>
    </div>
  );
}

export default App;
