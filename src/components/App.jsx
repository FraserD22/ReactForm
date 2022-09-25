import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [heading, setHeading] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  function clickHandle(event) {
    setHeading(name);
    event.preventDefault();
  }
  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }
  function changeHead(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Bonjour {heading} </h1>

      <form onSubmit={clickHandle}>
        <input
          onChange={changeHead}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "red" }}
          type="submit"
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
