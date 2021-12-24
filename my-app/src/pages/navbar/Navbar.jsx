import React from 'react'
import { useState } from 'react'
import { ReactComponent as Profile } from '../../icons/claus.svg'
import { ReactComponent as Label } from '../../icons/label.svg'
import { ReactComponent as Location } from '../../icons/location.svg'
import { ReactComponent as Party } from '../../icons/mug.svg'
import { ReactComponent as Postbox } from '../../icons/postbox.svg'
import { Dropdownmenu } from '../navbar/Dropdown'

export function Navbar(props) {
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'>{props.children}</ul>
      </nav>
    )
  }

export function NavItem(props) {
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


export function NavMenu(){
    return(
        <div>
                <Navbar>
    <NavItem icon={<Profile />}>
        <Dropdownmenu />
    </NavItem>
    <NavItem icon={<Label />}>
    <Dropdownmenu />
    </NavItem>
    <NavItem icon={<Location />} />
    <NavItem icon={<Party />} />
    <NavItem icon={<Postbox />} />
</Navbar>
        </div>
    )
}
export default {Navbar, NavItem};