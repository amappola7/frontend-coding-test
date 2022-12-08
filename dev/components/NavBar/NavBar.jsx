import React from 'react'
import './NavBar.scss'

function NavBar() {
  return (
    <nav>
      <picture>
        <source srcSet="/logo.png" type="image/png" />
        <img src="/logo.png" alt="Logo" />
      </picture>
      <ul>
        <li>HOME</li>
        <li>PROFILE</li>
      </ul>
    </nav>
  )
}

export default NavBar;