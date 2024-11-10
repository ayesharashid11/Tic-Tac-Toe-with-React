
import React, { useState } from 'react';

export default function App() {
  const[box, setBox] = useState(Array(9).fill(null));
const [player, setPlayer]= useState(false);
const [winner, setWinner] = useState(null);
const [draw , setDraw] =useState('');

const handleToggle = (index)=>{
  const newBox = box.slice();
  newBox[index] = player ? 'X' : 'O';
  setBox(newBox);
  setPlayer(!player);

  const calculatedWinner = Winner(newBox);
  if(calculatedWinner){
    setWinner(calculatedWinner);
  }
 else if(!newBox.includes(null) ){
  setDraw('Its a Draw!')
 }
}

const Winner= (box) =>{
  const boxes =[ [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] ];
  for (let i = 0; i<boxes.length; i++){
  const  [a , b ,c] = boxes[i];
    if (box[a] && box[a] === box[b] && box[a] === box[c]) {
      return box[a]; 
  }
}}
  return (
    <>

    <div className="h-screen  flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-900">
      <div className="text-3xl font-semibold text-white mb-6">
        {winner && `Winner is ${winner} ` }
        {draw  }
        </div>
      <div className="text-2xl font-semibold text-white mb-6">
        Player {player? 'X' : 'O' }</div>
      <div className="grid grid-cols-3 gap-2 p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
       {
        box.map((value, index)=>(
          <button key={index} onClick={() => handleToggle(index)} disabled={winner ? winner : value }
          className="h-20 w-20 bg-white bg-opacity-20 text-3xl font-bold flex items-center justify-center text-white rounded-lg"
        >
   {value}
        </button>
        ))
       }
      </div>
    </div>
    </>
  )
}
