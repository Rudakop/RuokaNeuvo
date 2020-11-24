import styles from './header.module.css'
import SearchBar  from './SearchBar'
import ClientArea from './ClientArea'
import Logo from '../Logo'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Logo/>
      </div>

      <div className={styles.middle}>
        <SearchBar/>
      </div>

      <div className={styles.right}>
        <ClientArea/>
      </div>
      
    </div>
  )
}

export default Header