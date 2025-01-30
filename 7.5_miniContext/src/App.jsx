import './App.css'
import Login from './component/Login.jsx'
import Profile from './component/Profile.jsx'
import UserContextProvider from './context/userContextProvider.jsx'

function App() {
  return (
    <UserContextProvider>
      <h1>hammad here</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
