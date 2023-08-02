import React from 'react'
import './Header.css'
import Menu from '../menu/Menu'
import Promocion from '../Promocion/Promocion'

const Header = () => {
  return (
    <div className='Header'>
        <Promocion />
        <Menu />
    </div>
  )
}

export default Header