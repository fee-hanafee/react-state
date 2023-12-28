import React from "react";
import { nanoid } from "nanoid";
// src
import TodoList from "./Components/todolist";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewtodo] = React.useState("");

  const todoChangeInput = (event) => {
    setNewtodo(event.target.value);
  };
  const todoAddnew = () => {
    let newTodoObj = {
      id: nanoid(),
      task: newTodo,
      done: false,
    };
    setTodoList((cur) => [...cur, newTodoObj]);
    setNewtodo("");
  };
  const handleDelete = (id) => {
    setTodoList((cur) =>
      [...cur].filter((todoObj, index) => todoObj.id !== id)
    );
  };
  const handleEditTodo = (todoid, updateTodoObj) => {
    const foundIndex = todoList.findIndex((todoObj) => todoObj.id === todoid);
    if (foundIndex !== -1) {
      const newTodoList = [...todoList];
      newTodoList[foundIndex] = updateTodoObj;
      setTodoList(newTodoList);
    }
  };

  return (
    <div>
      <h1>My Todo</h1>
        <input onChange={todoChangeInput} value={newTodo} />
        <button onClick={todoAddnew}>add</button>
      <TodoList 
      todoList={todoList}
      onDelete={handleDelete}
      onEdit={handleEditTodo}
      
      />
    </div>
  );
}

export default App;
