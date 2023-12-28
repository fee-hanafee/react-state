import React from "react";

export default TodoItem;

function TodoItem(props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [todo, setTodo] = React.useState(props?.todo.task || "");

  const handleToggleEdit = () => {
    setIsEdit((p) => !p);
  };
  const handleEditTodoText = (event) => {
    setTodo(event.target.value);
  };
  const handleSaveTodo = () => {
    const updatedTodoObj = { ...props.todo, task: todo };
    props.onEdit(props.todo.id, updatedTodoObj);
    setIsEdit(false);
  };

  return (
    <li>
      {isEdit ? (
        <input value={todo} onChange={handleEditTodoText} />
      ) : (
        <span >{todo}</span>
      )}
      {isEdit ? (
        <button onClick={handleSaveTodo}>save</button>
      ) : (
        <button onClick={handleToggleEdit}>edit</button>
      )}
      <button  onClick={(e) => props.onDelete(props.todo.id)}>x</button>
    </li>
  );
}
