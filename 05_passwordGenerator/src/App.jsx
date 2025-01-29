import { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionLength(0, 20) // for selecting specific length
    window.navigator.clipboard.writeText(password);
  }, [password])

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    //console.log(password)
    setPassword(password);

  }, [
      length, 
      numbersAllowed, 
      charactersAllowed,
      setPassword]); // these are the parameters that trigger a state change and the function is re run if any one of these happen to change. The method is given for optimization, na dene se koi farq nhi pare ga but sirf password dene se infinite loop lag jaeyga . Ye basically memoization ke liye use hota,i.e cache mein rakhe ga.

  useEffect(() => { // run yhan se horha 
    passwordGenerator();
  }, 
    [
      length, 
      numbersAllowed, 
      charactersAllowed, 
      passwordGenerator
    ]); // dependency array 

  return (
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg p-6 bg-gray-800 my-8 text-orange-500'>
      <h1 className='text-white text-center text-3xl'><b>Password Generator</b></h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-5'>
      <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly 
        ref={passwordRef}
      />
      <button 
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-gray-400 duration-200 hover:text-blue-700'
      onClick={copyPasswordToClipboard}><b>Copy</b></button>
      </div>
      <div className='flex text-sm gap-x-20'>
        <div className='flex items-center gap-x-2'>
          <input 
            type="range"
            min={7}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label >{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numbersAllowed}
            id='numberInput'
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charactersAllowed}
            id='numberInput'
            onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
};

export default App
