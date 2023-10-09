import React from 'react'
import styles from "./styles.module.scss";
import Ad from './Ad';
function Header() {
  return (
    <header className={styles.header}>
        <Ad/>
    </header>
  )
}

export default Header