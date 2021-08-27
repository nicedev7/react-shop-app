import Head from 'next/head'
import { useSelector } from 'react-redux'
import Constants from '@/constants'

import { RootReducerState } from '@/store/types'
import styles from './index.module.scss'
import { LocaleModel } from './locales/types'

console.log(styles)

function Home() {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  )
  const Locale = require(`./locales/${localeValue}`).default as LocaleModel

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {Locale.PAGE_TITLE} | {Constants.APP_NAME}
        </title>
      </Head>
      <div className={styles['page-content']}>
        <img className={styles.logo} src="/favicon.ico" />
        <h2 className={styles.title}>{Locale.PAGE_TITLE}</h2>
      </div>
    </div>
  )
}

export default Home
