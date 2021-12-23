import React, { useState } from 'react'
import { ReactComponent as Profile } from './icons/claus.svg'
import { ReactComponent as Label } from './icons/label.svg'
import { ReactComponent as Location } from './icons/location.svg'
import { ReactComponent as Party } from './icons/mug.svg'
import { ReactComponent as Postbox } from './icons/postbox.svg'
import { CSSTransition } from 'react-transition-group'
//import Profilepage from './pages/Profilepage'

//import { useNavigate } from 'react-router-dom'


function App() {
  return (
    <Navbar>
      <NavItem icon={<Profile />}>
        <Dropdownmenu />
      </NavItem>
      <NavItem icon={<Label />} />
      <NavItem icon={<Location />} />
      <NavItem icon={<Party />} />
      <NavItem icon={<Postbox />} />
    </Navbar>
  )
}
function Dropdownmenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem(props) {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>

        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    )
  }
  return (
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>MY profile</DropdownItem>
          <DropdownItem leftIcon='😆' rightIcon='😇' goToMenu='settings'>
            settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
      >
        <div className='menu'>
          <DropdownItem goToMenu='main'>MY profile</DropdownItem>
          <DropdownItem leftIcon='😆' rightIcon='😇'></DropdownItem>
          <DropdownItem leftIcon='😆' rightIcon='😇'></DropdownItem>
          <DropdownItem leftIcon='😆' rightIcon='😇'></DropdownItem>
          <DropdownItem leftIcon='😆' rightIcon='😇'></DropdownItem>
          <DropdownItem leftIcon='😆' rightIcon='😇'></DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}
function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  )
}
function NavItem(props) {
  const [open, setOpen] = useState(false)
  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}
export default App
