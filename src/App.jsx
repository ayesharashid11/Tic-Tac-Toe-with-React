
import React, { useState } from 'react';

export default function App() {
  const[box, setBox] = useState(Array(9).fill(null));
const [player, setPlayer]= useState(false);
const handleToggle = (index)=>{
  const newBox = box.slice();
  newBox[index] = player ? 'X' : 'O';
  setBox(newBox);
  setPlayer(!player);
}
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-900">
      <div className="text-2xl font-semibold text-white mb-6">Player {player? 'X' : 'O' }</div>
      <div className="grid grid-cols-3 gap-2 p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
       {
        box.map((value, index)=>(
          <button key={index} onClick={() => handleToggle(index)} disabled={value}
          className="h-20 w-20 bg-white bg-opacity-20 text-3xl font-bold flex items-center justify-center text-white rounded-lg"
        >
   {value}
        </button>
        ))
       }
      </div>
    </div>
  )
}
