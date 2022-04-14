import React from "react";
import { ListType } from "./ListReducer";
import { ReducerListContext } from "./ReducerCheckListContext";

const ENTER = "Enter";


const ReducerChecklistInput = () => {
  const { count, dispatch, todos } = React.useContext(ReducerListContext);
  const [inputValue, setInputValue] = React.useState("");

  const addNewTodo = () => {
    dispatch({payload: {label: inputValue}, type: ListType.ADD});
    setInputValue('');
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
      <button type="button" onClick={addNewTodo}>
        Add new todo
      </button>
    </div>
  );
};

export default ReducerChecklistInput;
