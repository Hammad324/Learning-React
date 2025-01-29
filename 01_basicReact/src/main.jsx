import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const CreateElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  "Click me to visit google."
  // evaluated expression, username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
