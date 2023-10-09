import styles from "./styles.module.scss";
import Ad from './Ad';
import Top from "./Top";
function Header() {
  return (
    <header className={styles.header}>
        <Ad/>
        <Top/>
    </header>
  )
}

export default Header