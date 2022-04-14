import React from 'react'
import { ReducerListContext } from './ReducerCheckListContext';

export const Counter = () => {
    const {count} = React.useContext(ReducerListContext);
  return (
    <div>Checked count {count}</div>
  )
}
