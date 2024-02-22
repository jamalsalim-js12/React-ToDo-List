import React, { useState } from "react";

const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <form className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        name="input"
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          props.onAdd(inputText);
          setInputText("");
        }}>
        <span>Add</span>
      </button>
    </form>
  );
};

export default InputArea;
