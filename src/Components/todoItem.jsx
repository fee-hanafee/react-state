import React from "react";

export default TodoItem;


function TodoItem(props) {
    const [isEdit, setIsEdit] = React.useState(false);
    const [todo, setTodo] = React.useState(props?.todo || "");
  
    const handleToggleEdit = () => {
      setIsEdit((p) => !p);
    };
    const handleEditTodoText = (event) => {
      setTodo(event.target.value);
    };
    const handleSaveTodo = () => {
      props.onEdit(props.index, todo);
      setIsEdit(false);
    };
  
    return (
      <li>
        {isEdit ? (
          <input value={todo} onChange={handleEditTodoText} />
        ) : (
          <span>{todo}</span>
        )}
        {isEdit ? (
          <button onClick={handleSaveTodo}>save</button>
        ) : (
          <button onClick={handleToggleEdit}>edit</button>
        )}
        <button onClick={(e) => props.onDelete(props.index)}>x</button>
      </li>
    );
  }

 