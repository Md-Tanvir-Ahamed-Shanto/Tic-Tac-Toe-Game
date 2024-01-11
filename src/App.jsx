/*
   Game
    -> Board
        -> Square
    -> Hostory
*/

// Square Function ->

function Square({value}){
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-xl">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square value="X" />
        <Square value="X" />
        <Square value="X" />
      </div>
      <div>
        <Square value="X" />
        <Square value="X" />
        <Square value="X" />
      </div>
      <div>
        <Square value="X" />
        <Square value="X" />
        <Square value="X" />
      </div>
    </>
  );
}


