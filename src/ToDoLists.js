import React from 'react'
const ToDoLists = (props) => {

  return (
    <>
      <div className='todo_style'>
        <button className='btn' onClick={() => {
          props.onSelect(props.id);
        }}>
          <span>*</span></button>

        <li>{props.text}</li>;
      </div>
    </>
  );

};

export default ToDoLists;
