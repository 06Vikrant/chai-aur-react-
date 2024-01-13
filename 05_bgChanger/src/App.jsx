import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      {/* this is the position*/}
      <div className='fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2 '>
        {/* creating a bar at that position */}
        <div className='flex flex-wrap gap-3 shadow-xl bg-white rounded-xl px-3 py-1 font-mono'>

          <button className='text-white outline-none px-4 rounded-xl'
          onClick={() => setColor("#EBD9B4")}
          style={{backgroundColor: "#EBD9B4"}}
          >Beige</button>

          <button className='text-white outline-none px-4 rounded-xl'
          onClick={() => setColor("#638889")}
          style={{backgroundColor: "#638889"}}
          >Earth</button>

          <button className='text-white outline-none px-4 rounded-xl'
          onClick={() => setColor("#3468C0")}
          style={{backgroundColor: "#3468C0"}}
          >blue</button>

          <button className='text-white outline-none px-4 rounded-xl'
          onClick={() => setColor("#F8E559")}
          style={{backgroundColor: "#F8E559"}}
          >yellow</button>
          
          <button className='text-white outline-none px-4 rounded-xl'
          onClick={() => setColor("#7D0A0A")}
          style={{backgroundColor: "#7D0A0A"}}
          >red</button>

          <button className='text-white outline-none px-4 rounded-xl'
          onClick={() => setColor("#5D3587")}
          style={{backgroundColor: "#5D3587"}}
          >purple</button>
        
          <button className='text-white outline-none px-4 rounded-xl'
          onClick={() => setColor("#FB8B24")}
          style={{backgroundColor: "#FB8B24"}}
          >orange</button>
          
          </div>
      </div>
    </div>
  )
}

export default App
