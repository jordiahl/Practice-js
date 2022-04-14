import React from "react";
import { Action, listReducer, TodoType } from "./ListReducer";

export const ReducerListContext = React.createContext<{
  dispatch: React.Dispatch<Action>;
  todos: TodoType[];
  count: number;
}>({ count: 0, todos: [], dispatch: () => {} });

type ListContextProps = {
    children: any
    todos: TodoType[]
};

export const ListContext = (props: ListContextProps) => {
  const { children, todos } = props;
  const [{ todos: updatedTodos, count }, dispatch] = React.useReducer(
    listReducer,
    { todos, count: 0 }
  );

  return (
    <ReducerListContext.Provider
      value={{ dispatch, todos: updatedTodos, count }}
    >
      {children}
    </ReducerListContext.Provider>
  );
};
