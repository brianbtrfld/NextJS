import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        
        <p>[Your Self Introduction]</p>
        <p>[More]</p>

        <Link href="/home/about">About</Link>
        
      </section>
    </Layout>
  )
}