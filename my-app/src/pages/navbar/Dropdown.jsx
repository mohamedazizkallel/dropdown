import React from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export function Dropdownmenu() {
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
            <DropdownItem leftIcon='😆' rightIcon='😇'>
              placeholder
            </DropdownItem>
            <DropdownItem leftIcon='😆' rightIcon='😏'>
              placeholder
            </DropdownItem>
            <DropdownItem leftIcon='😏' rightIcon='😇'>
              placeholder
            </DropdownItem>
          </div>
        </CSSTransition>
      </div>
    )
  }
  
export default {Dropdownmenu}
