/*
   Game
    -> Board
        -> Square
    -> Hostory
*/

import { useState } from "react";

// Square Function ->

function Square({value, onSquareClick}) {


  return (
    <button
      onClick={onSquareClick} 
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-xl"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i){
    const newSquare = square.slice()
    if(xIsNext){
      newSquare[i] = 'X';
    }else{
      newSquare[i] = 'O';
    }
    setSquare(newSquare)
    setXIsNext(!xIsNext)
  }
  return (
    <>
      <div className="flex">
        <Square value = {square[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value = {square[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value = {square[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="flex">
        <Square value = {square[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value = {square[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value = {square[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="flex">
        <Square value = {square[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value = {square[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value = {square[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}
