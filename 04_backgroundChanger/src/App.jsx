import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    // main screen
    <div className='w-full h-screen duration-100'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-4'>
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl">
        <button className="px-6 py-2 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
        onClick={() => setColor("red")}>Red</button>
        <button className="px-6 py-2 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}
        onClick={() => setColor("green")}>Green</button>
        <button className="px-6 py-2 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        onClick={() => setColor("blue")}>Blue</button>
        <button className="px-6 py-2 rounded-full text-white shadow-lg"
        style={{backgroundColor: "olive"}}
        onClick={() => setColor("olive")}>Olive</button>
        <button className="px-6 py-2 rounded-full text-white shadow-lg"
        style={{backgroundColor: "gray"}}
        onClick={() => setColor("gray")}>Gray</button>
        <button className="px-6 py-2 rounded-full text-black shadow-lg"
        style={{backgroundColor: "yellow"}}
        onClick={() => setColor("yellow")}>Yellow</button>
        <button className="px-6 py-2 rounded-full text-black shadow-lg"
        style={{backgroundColor: "pink"}}
        onClick={() => setColor("pink")}>Pink</button>
        <button className="px-6 py-2 rounded-full text-white shadow-lg"
        style={{backgroundColor: "purple"}}
        onClick={() => setColor("purple")}>Purple</button>
        <button className="px-6 py-2 rounded-full text-black shadow-lg"
        style={{backgroundColor: "lavender"}}
        onClick={() => setColor("lavender")}>Lavender</button>
        <button className="px-6 py-2 rounded-full text-black shadow-lg"
        style={{backgroundColor: "white"}}
        onClick={() => setColor("white")}>White</button>
        <button className="px-6 py-2 rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}
        onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
