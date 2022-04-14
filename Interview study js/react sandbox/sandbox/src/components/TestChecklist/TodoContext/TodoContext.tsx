import React from "react";

export const TodoContext = React.createContext<{
  todoList: { id: number; label: string; checked: boolean }[],
  setTodoList: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          label: string;
          checked: boolean;
        }[]
    >
  > | undefined
}>({ todoList: [], setTodoList: undefined });

type ContextWrapperT = {
  children: React.ReactNode;
  value: { id: number; label: string; checked: boolean }[];
};

export const ContextWrapper = (props: ContextWrapperT) => {
  const { children, value } = props;
  const [todoList, setTodoList] =
    React.useState<{ id: number; label: string; checked: boolean }[]>();

  React.useEffect(() => {
    setTodoList(value);
  }, [value]);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};
