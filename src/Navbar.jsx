import React from 'react'
import './Styles/Navbar.css'
import Name from './Components/Name'
import Items from './Components/Items'

function Navbar() {
  return (
    <div className='navbar'>
       <Name/>
       <Items/>
    </div>
  )
}

export default Navbar