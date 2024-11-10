
import React, { useState } from 'react';

export default function App() {
  const [box, setBox] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState('');
  const [showModal, setshowModal] = useState(true);
  const [username, setusername] = useState('');
  const [userSymbol, setUserSymbol] = useState(''); 
  const computerSymbol = userSymbol == 'X'? 'O' :'X'
  const handleShow = () => {
    setshowModal(false);
  }

  const handleToggle = (index) => {
    const newBox = box.slice();
    newBox[index] = player ? 'X' : 'O';
    setBox(newBox);
    setPlayer(!player);

    const calculatedWinner = Winner(newBox);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
    }
    else if (!newBox.includes(null)) {
      setDraw('Its a Draw!')
    }
  }

  const Winner = (box) => {
    const boxes = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < boxes.length; i++) {
      const [a, b, c] = boxes[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        return box[a];
      }
    }
  }
  return (
    <>
      {
        showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70">
            <div className='w-1/ bg-pink-900 p-5 rounded-3xl'>
              <h2 className="text-lg flex items-center p-2 justify-center font-bold text-orange-100">WelCome to Tic-Tac-Toe</h2>
              <input type='text' className='p-3 rounded-lg w-full' placeholder='Enter username'
              onChange={(e)=> setusername(e.target.value)} />

              <div className="mt-4 flex gap-2">
                <p className='p-2 text-xl font-bold text-amber-100'>Select Value:</p>
                <button type="button" onClick={()=>setUserSymbol('X')}
                className={`rounded bg-green-50 px-4 py-2 text-sm font-medium 
                ${userSymbol === 'X' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600'}`}>
                  X
                </button>
                <button type="button" onClick={()=>setUserSymbol('O')}
                className={`rounded bg-green-50 px-4 py-2 text-sm font-medium 
                  ${userSymbol === 'O' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600'}`}>
                  O
                </button>
              </div>
              <button
              onClick={handleShow}
              className="mt-4 bg-sky-900 text-white px-4 py-2 rounded-lg"  >
              Start Game
            </button>
            </div>
          </div>
        )
      }
      <div className="h-screen  flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-900">
        <div className="text-3xl font-semibold text-white mb-6">
          {winner && `Winner is ${winner} `}
          {draw}
        </div>
        <div className="text-2xl font-semibold text-white mb-6">
          Player  {username } - {player ? userSymbol : computerSymbol}</div>
        <div className="grid grid-cols-3 gap-2 p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
          {
            box.map((value, index) => (
              <button key={index} onClick={() => handleToggle(index)} disabled={winner ? winner : value}
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
