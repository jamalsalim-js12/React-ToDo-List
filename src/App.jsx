import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              key={index}
              id={index}
              handleClick={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
