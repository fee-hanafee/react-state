import React from "react";
import { nanoid } from 'nanoid'
// src
import TodoItem from "./Components/todoItem";


function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewtodo] = React.useState("");

  const todoChangeInput = (event) => {
    setNewtodo(event.target.value);
  };
  const todoAddnew = () => {
    let newTodoObj = {
      id:nanoid(),
      task: newTodo,
      done: false
    }
    setTodoList((cur) => [...cur,  newTodoObj]);
    setNewtodo("");
  };
  const handleDelete = (id) => {
    setTodoList((cur) => [...cur].filter((todoObj, index) => todoObj.id !== id));
  };
  const handleEditTodo = (todoid, updateTodoObj) => {
    const foundIndex = todoList.findIndex(todoObj => todoObj.id === todoid)
    if (foundIndex !== -1) {
      const newTodoList = [...todoList]
      newTodoList[foundIndex] = updateTodoObj;
      setTodoList(newTodoList)
    }
    // const newTodoList = [...todoList];
    // newTodoList.splice(idx, 1, updateValue);
    // setTodoList(newTodoList);
  };

  const todoRender = todoList.map((todoObj, index) => (
    <TodoItem
      key={todoObj.id}
      todo={todoObj}
      onDelete={handleDelete}
      onEdit={handleEditTodo}
      
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
