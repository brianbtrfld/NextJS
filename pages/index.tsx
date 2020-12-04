import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import { GetStaticProps } from 'next'

// Reference
// https://github.com/vercel/next-learn-starter
//
// ========================================================================================================================
// History
//
// 20201204 Converted to TypeScript via https://nextjs.org/learn/excel/typescript/nextjs-types and deployed
// 20201125 Finish tutorial via https://nextjs.org/learn/basics/deploying-nextjs-app/finally and deployed
// 20201124 Finished dynamic routers via https://nextjs.org/learn/basics/dynamic-routes
// 20201103 Enabled Heroku auto-deployment from 'develop' via https://briangbutterfield-develop.herokuapp.com/
// 20201103 Finished pre-rendering and data fetching via https://nextjs.org/learn/basics/data-fetching
//


export default function Home({ allPostsData }) {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>

      </section>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}