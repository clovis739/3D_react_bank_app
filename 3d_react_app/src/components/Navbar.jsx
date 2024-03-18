import {useState} from 'react'
import { close, logo, menu} from '../assets'
import { navLinks } from '../constants'


function Navbar() {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="logo" /> 

    </nav>
  )
}

export default Navbar