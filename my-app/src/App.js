import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar, NavItem} from './pages/navbar/Navbar'
import {Dropdownmenu} from './pages/navbar/Dropdown'
import Profilepage from './pages/Profilepage';
import Events from './pages/events/Events'
import "./App.css"

function App() {
  return (
      <div className='container'>
        <Profilepage/>
      </div>
  )
}

export default App
