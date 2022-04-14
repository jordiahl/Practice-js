export type TodoType = { id: number; label: string; checked: boolean };

export type Action = {
  type: any;
  payload: any;
};

export enum ListType {
  CHECK = "CHECK",
  DELETE = "DELETE",
  COMPLETED = "COMPLETED",
  ADD = "ADD",
}

export type ListAction = Action & {
  type: ListType;
};

export type ListReducerState = { todos: TodoType[]; count: number };

const countChecked = (array: TodoType[]) => {
    return array.reduce((acc, current) => {
        return current.checked? acc+1: acc; 
    }, 0)
}


export const listReducer = (
  state: ListReducerState,
  action: Action
): ListReducerState => {
  const { payload, type } = action;
  const { todos, count } = state;

  switch (type) {
    case ListType.CHECK:
      const newTodos = todos.map((todo) => {
        const { checked, id, label } = todo;
        if (id === payload.id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });

      return { count: countChecked(newTodos), todos: newTodos };

      break;
    case ListType.DELETE:
      const filtered = todos.filter((todo) => todo.id !== payload.id);
       
      return {
        count: countChecked(filtered),
        todos: filtered,
      };
      break;
    case ListType.COMPLETED:
      break;
    case ListType.ADD:
      const { label } = payload;
      const newTodo: TodoType = {
        label,
        checked: false,
        id: todos.length ? todos[todos.length - 1].id + 1 : 0,
      };
      return { todos: [...todos, newTodo], count };
      break;
    default:
      return state;
  }
  return state;
};
