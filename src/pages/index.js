import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

import utilStyle from '../styles/utils.module.css'
import Link from 'next/link'

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostData();
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私はフルスタックエンジニアです/好きな言語はJsvascriptです</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href='/'>
              <img src='/images/thumbnail01.jpg' className={styles.thumbnailImage}></img>
            </Link>
            <Link href='/'>
              <span className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23.2020
            </small>
          </article>
          <article>
            <Link href='/'>
              <img src='/images/thumbnail01.jpg' className={styles.thumbnailImage}></img>
            </Link>
            <Link href='/'>
              <span className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23.2020
            </small>
          </article>
          <article>
            <Link href='/'>
              <img src='/images/thumbnail01.jpg' className={styles.thumbnailImage}></img>
            </Link>
            <Link href='/'>
              <span className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23.2020
            </small>
          </article>
          <article>
            <Link href='/'>
              <img src='/images/thumbnail01.jpg' className={styles.thumbnailImage}></img>
            </Link>
            <Link href='/'>
              <span className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              February 23.2020
            </small>
          </article>
        </div>
      </section>

      
    </Layout>
  )
}
