import Chai from "./chai"
function App() {
  const username = "Billy"
  return (
    // only a single element can be sent in a component.
    // therefore create an outer div and then send it OR
    // we will render what is known as a fragment. <></> (syntax)
    // {username} === is evaluated expression means ke yhan pe final outcome likha jata hai nake evaluation ki jaey
    <>
      <Chai/>
      <h1>{username} here, starting react  </h1> 
    </>
  )
}

export default App
 