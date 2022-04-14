import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import Checkbox from "./Checkbox";

const CheckboxList = () => {
  const { todoList, setTodoList } = React.useContext(TodoContext);

  const deleteTodo = () => {};

  const handleDeleteClick = (id: number) => {
    if (setTodoList == undefined) {
      return;
    }
    setTodoList((prev) => {
      let newList = [...prev];
      newList = newList.reduce(
        (acc: { id: number; label: string; checked: boolean }[], curr) => {
          if (curr.id === id) {
            return acc;
          }
          acc.push(curr);
          return acc;
        },
        []
      );

      return newList;
    });
  };

  const handleSelectedClick = (id: number) => {
    if (setTodoList == undefined) {
      return;
    }
    setTodoList((prev) => {
      const newList = [...prev];

      for (let i = 0; i < newList.length; i++) {
        const todo = newList[i];

        if (todo.id === id) {
          newList[i] = { ...todo, checked: !todo.checked };
        }
      }

      return newList;
    });
  };
  const isDisplayTodos = todoList && todoList.length > 0;

  return (
    <div>
      {isDisplayTodos &&
        todoList.map((todoItem) => {
          // debugger;
          return (
            <Checkbox
              key={todoItem.id}
              {...todoItem}
              onDeleteClick={handleDeleteClick}
              onSelectedClick={handleSelectedClick}
            />
          );
        })}
    </div>
  );
};

export default CheckboxList;
