import React from 'react'
import styles from './Header.module.css'

const Header = ({ heading, subheading }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>{heading}</h1>
      <h3 className={styles.header__subheading}>{subheading}</h3>
    </header>
  )
}

export default Header