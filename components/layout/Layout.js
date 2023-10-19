import styles from "./Layout.module.css";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="http://botostart.ir" target="_blank" rel=" noreferrer">
          botostart 
        </a> 
         <span> Next.js course | BotoFood Project &copy;</span>
      </footer>
    </>
  );
};

export default Layout;
