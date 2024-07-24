import { useState } from "react";
import Card from "../Card/card.jsx";
import "./grid.css";
import CheckWinner from "../helper/helper.js";

function grid({ numberOfBoard }) {
  const [board, setBoard] = useState(Array(numberOfBoard).fill(""));
  const [turn, setTurn] = useState(true); // true => o:false =>x
  const [winner, setWinner] = useState(null);
  function play(index) {
    console.log(index);
    if (turn == true) {
      board[index] = "o";
    } else {
      board[index] = "x";
    }
    const win = CheckWinner(board, (turn) ? "o" : "x");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function reset(){
    setTurn(true)
    setWinner(null)
    setBoard(Array(numberOfBoard).fill(""))
  }
  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>  
          <button className="reset" onClick={reset}>reset Game</button>
        </>
      )}
      <h1 className="turn-highlight">Current Turn :{turn ? "o" : "x"}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} gameEnd={winner ? true : false} players={el} onPlay={play} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default grid;
