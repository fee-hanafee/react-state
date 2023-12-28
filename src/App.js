import React from "react";
import { nanoid } from "nanoid";
// src
import TodoList from "./Components/todolist";
import Headerlist from "./Components/headerlist";
import Additem from "./Components/Additem";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewtodo] = React.useState("");

  const todoChangeInput = (event) => {
    setNewtodo(event.target.value);
  };
  const todoAddnew = (newTask) => {
    let newTodoObj = {
      id: nanoid(),
      task: newTask,
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
      <Headerlist name="My Todo" />
      <Additem onAdd={todoAddnew}/>
      <TodoList
        todoList={todoList}
        onDelete={handleDelete}
        onEdit={handleEditTodo}
      />
    </div>
  );
}

export default App;
