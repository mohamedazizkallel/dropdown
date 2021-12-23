import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Profilepage from './pages/Profilepage'
import Card from './pages/cards'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Profilepage />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
)
