import React, { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(getDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allSame = dice.every((die) => die.value === dice[0].value);
    const allHeld = dice.every((die) => die.isHeld);

    if (allHeld && allSame) {
      console.log("You Won!");
      setTenzies(true);
    }
  }, [dice]);

  function newDie() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      id: nanoid(),
      isHeld: false,
    };
  }

  function getDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(newDie());
    }

    return array;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevState) =>
        prevState.map((item) => {
          if (item.isHeld) {
            return item;
          } else {
            return newDie();
          }
        })
      );
    } else {
      setTenzies(false);
      setDice(getDice());
    }
  }

  function holdDice(id) {
    setDice((prevState) =>
      prevState.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        } else {
          return die;
        }
      })
    );
  }

  return (
    <div className="tenzies">
      {tenzies && <Confetti />}
      <h1 className="header">Tenzies</h1>
      <p className="paragraph">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice">
        {dice.map((die, index) => (
          <Die key={die.id} die={die} holdDice={() => holdDice(die.id)} />
        ))}
      </div>
      <button className="button" onClick={rollDice}>
        {tenzies ? "Restart" : "Roll"}
      </button>
    </div>
  );
}
