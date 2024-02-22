import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(e) {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          name="input"
        />
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </form>
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
