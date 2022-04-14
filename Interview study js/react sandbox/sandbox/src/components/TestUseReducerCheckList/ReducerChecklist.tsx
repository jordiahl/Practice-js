import React, { useReducer } from "react";
import Checkbox from "../TestChecklist/CheckboxList/Checkbox";
import { ListType } from "./ListReducer";
import { ReducerListContext } from "./ReducerCheckListContext";

export type ReducerChecklistType = { className: string};


const ReducerChecklist = (props: ReducerChecklistType) => {
  
  const {dispatch, todos} = React.useContext(ReducerListContext);

  const handleDeleteClick = (id: number) =>{
    dispatch({payload: {id}, type: ListType.DELETE})
  }
  const handleSelectedClick = (id: number) =>{
    dispatch({payload: {id}, type: ListType.CHECK})
  }


  return (
    <div>
      {todos.length ? (
        todos.map((todo) => {
          const { checked, id, label } = todo;
          return (
            <Checkbox
              key={id}
              checked={checked}
              id={id}
              label={label}
              onDeleteClick={handleDeleteClick}
              onSelectedClick={handleSelectedClick}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReducerChecklist;
