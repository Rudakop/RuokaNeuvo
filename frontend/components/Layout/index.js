import styles from './index.module.css'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header/>
      </header>
      
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout