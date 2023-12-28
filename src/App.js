import React from "react";
function TodoItem(props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [todo, setTodo] = React.useState(props?.todo || '');

  const handleToggleEdit = () => {
    setIsEdit((p) => !p);
  };
  const handleEditTodoText = (event) => {
    setTodo(event.target.value)
  }

  return (
    <li>
      {isEdit ? <input value={todo} onChange={handleEditTodoText}/> : <span>{todo}</span>}

      <button onClick={handleToggleEdit}>{isEdit ? "save" : "edit"}</button>
      <button>x</button>
    </li>
  );
}



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

  const todoRender = todoList.map((todo, index) => <TodoItem todo={todo} />);

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
