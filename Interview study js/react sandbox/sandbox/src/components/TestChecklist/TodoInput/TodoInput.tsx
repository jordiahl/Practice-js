import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

const ENTER = "Enter";

const TodoInput = () => {
  const { setTodoList } = React.useContext(TodoContext);
  const [inputValue, setInputValue] = React.useState("");

  const addNewTodo = () => {
    if (setTodoList === undefined || inputValue.length < 1) {
      return;
    }
    setTodoList((prev) => {
      const newTodo = [...prev];
      newTodo.push({
        id: newTodo.length > 0 ? newTodo[newTodo.length - 1].id + 1 : 1,
        checked: false,
        label: inputValue,
      });
      setInputValue("");
      return newTodo;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTER) {
      addNewTodo();
    }
  };

  return (
    <div>
      <label htmlFor="todoInput">Input your new todo</label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        type="text"
        id="todoInput"
      ></input>
      <button type="button" onClick={addNewTodo}>Add new todo</button>
    </div>
  );
};

export default TodoInput;
