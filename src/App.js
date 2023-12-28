import React from "react";
import TodoItem from "./Components/todoItem";

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
    setTodoList((cur) => [...cur].filter((todo, index) => index !== idx));
  };
  const handleEditTodo = (idx, updateValue) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1, updateValue);
    setTodoList(newTodoList);
  };

  const todoRender = todoList.map((todo, index) => (
    <TodoItem
      key={index}
      todo={todo}
      onDelete={handleDelete}
      onEdit={handleEditTodo}
      index={index}
    />
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
