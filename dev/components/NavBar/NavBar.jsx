import React from 'react'
import styles from './NavBar.module.scss'

function NavBar() {
  return (
    <nav className={`${styles.navBar}`}>
      <picture className={styles.navBar__logo}>
        <source srcSet="/logo.png" type="image/png" />
        <img className={styles.navBar__logo} src="/logo.png" alt="Logo" />
      </picture>
      <ul className={`${styles.navBar__options}`}>
        <li className={`${styles.navBar__option}`}>HOME</li>
        <li className={`${styles.navBar__option}`}>PROFILE</li>
      </ul>
    </nav>
  )
}

export default NavBar;