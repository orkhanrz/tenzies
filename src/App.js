import React from "react";

export default function App() {
  return (
    <div className="tenzies">
      <h1 className="header">Tenzies</h1>
      <p className="paragraph">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice"></div>
      <button className="button">Roll</button>
    </div>
  );
}
