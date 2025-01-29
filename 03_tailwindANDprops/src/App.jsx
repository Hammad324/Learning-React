import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "asta",
    age: 14
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl cursor-pointer'>Learning props in react</h1>
      <Card username = "Khizr Karawita"/>
      <Card username = "Khalid Kashmiri"/>
      <Card username = "Usman Abdul Jalil Shisha"/>
      <Card username = "Ismail Ahmed Kanabawi"/>
      {/* <Card newObj = {myObj}/> */}
    </>
  )
}

export default App
                        