import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is just a tutorial I followed in order to learn more about Next.js and Javascript. </p>
        <p>
          (Follow me on{' '}
          <a href="https://github.com/aishanisingh">Github!</a>)
        </p>
      </section>
      <section classname={utilStyles.headingXl}>
        <p><a href="/posts/first-post">First Post!</a></p>
        <p><a href="/posts/about-me">About Me!</a></p>
      </section>
    </Layout>
  )
}
