/*
   Game
    -> Board
        -> Square
    -> Hostory
*/

import { useState } from "react";

// Square Function ->

function Square(){

  const [value, setValue] = useState(null);
  
  function handleClick(){
    setValue('X')
    }

  return (
    <button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-xl">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}


