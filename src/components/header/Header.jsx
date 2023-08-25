import React from 'react'
import Logo from "../../img/logo.png"
import "./header.scss"

function Header() {
  return (
   <header className='header'>
    <div className='header_logo'>
        <img src={Logo} alt="paw" />
        <span >PetsPaw</span>
    </div>
   </header>
  )
}

export default Header
