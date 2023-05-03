import { Inter } from 'next/font/google'
import Layout, { siteTitle } from '@/components/Layout'
import styles from '@/styles/Home.module.css'

import utilStyle from '../styles/utils.module.css'
import Link from 'next/link'
import { getPostsData } from '@/lib/post'
import Head from 'next/head'

// SSGの場合 この関数はビルド時に実行される
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, date, thumbnail
  console.log(allPostsData);
  
  return {
    props: {
      // allPostsData: Array.isArray(allPostsData) ? allPostsData : [],
      allPostsData,
    },
  };
}



const inter = Inter({ subsets: ['latin'] })

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>私はフルスタックエンジニアです/好きな言語はJsvascriptです</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage}></img>
              </Link>
              <Link href={`/posts/${id}`}>
                <span className={utilStyle.boldText}>{title}</span>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                {date}
              </small>
            </article>
          ))}
        </div>
      </section>

      
    </Layout>
  )
}
