import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Constants from '@/constants'
import { createRootStore } from '@/store'

import '@/styles/globals.css'

const LOCALE = (process.env.LOCALE as Locale) ?? 'zh-CN'

const { store, persistor } = createRootStore({
  locale: {
    locale: LOCALE
  }
})

/**
 * App Component
 */
function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{Constants.APP_NAME}</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
