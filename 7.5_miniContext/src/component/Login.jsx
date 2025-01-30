import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext.js'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext) // the value will be put in the context using this and when we will need the value we can just bring it using the user var.

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({username, setUsername});
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
            type="text" 
            placeholder='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
            <br/>
        <input 
            type="text" 
            placeholder='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login