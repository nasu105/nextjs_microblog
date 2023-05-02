import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css";

const name = "Togo Code"
export const siteTitle = "Next.js blog";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" className={utilStyles.borderCircle}></img>
        <h1 className={utilStyles.heading2Xl}>{ name }</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}