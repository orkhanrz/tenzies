import React from "react";

export default function Die(props) {
  const styles = {
    background: props.die.isHeld ? "#59E391" : "#FFFFFF",
  };

  return (
    <div className="die" onClick={props.holdDice} style={styles}>
      {props.die.value}
    </div>
  );
}
