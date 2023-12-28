import React from "react";
import { nanoid } from "nanoid";
// src
import TodoList from "./todolist";
import Headerlist from "./headerlist";
import Additem from "./Additem";

function TodoContent() {
  const [todoList, setTodoList] = React.useState([]);

  const todoAddnew = (newTask) => {
    let newTodoObj = {
      id: nanoid(),
      task: newTask,
      done: false,
    };
    setTodoList((cur) => [...cur, newTodoObj]);
  };
  const handleDelete = (id) => {
    setTodoList((cur) =>
      [...cur].filter((todoObj) => todoObj.id !== id)
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
      <Additem onAdd={todoAddnew} />
      <TodoList
        todoList={todoList}
        onDelete={handleDelete}
        onEdit={handleEditTodo}
      />
    </div>
  );
}

export default TodoContent;



