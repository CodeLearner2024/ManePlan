import React from 'react'

const Header = () => {
  return (
    <header className='headerStyle'>
      <nav className='navStyle'>
      <ul className='navListStyle'>
        <li className='navItemStyle'> <a href="#" className='linkStyle'>Home</a></li>
        <li className='navItemStyle'><a href="#" className='linkStyle'>About me</a></li>
        <li className='navItemStyle'><a href="#" className='linkStyle'>Service</a></li>
        <li className='navItemStyle'><a href="#" className='linkStyle'>Contact</a></li>
      </ul>
      </nav>  
    </header>
  )
}

export default Header
