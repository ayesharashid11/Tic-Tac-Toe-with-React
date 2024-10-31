
import React from 'react';

export default function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-900">
      <div className="text-2xl font-semibold text-white mb-6">Player</div>
      <div className="grid grid-cols-3 gap-2 p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
       
          <button
            className="h-20 w-20 bg-white bg-opacity-20 text-3xl font-bold flex items-center justify-center text-white rounded-lg"
          >
         X
          </button>
       
      </div>
    </div>
  )
}
