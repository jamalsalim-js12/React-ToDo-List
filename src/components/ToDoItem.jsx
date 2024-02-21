import React from "react";

const ToDoItem = (props) => {
  return (
    <div
      onClick={() => {
        props.handleClick(props.id);
      }}>
      <li id={props?.id}>{props?.text}</li>
    </div>
  );
};

export default ToDoItem;
