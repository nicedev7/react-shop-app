import Head from 'next/head'
import Constants from '@/constants'

import styles from './index.module.scss'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | {Constants.APP_NAME}</title>
      </Head>
    </div>
  )
}

export default Home
