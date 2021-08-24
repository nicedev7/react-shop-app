import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
  Middleware,
  ReducersMapObject,
  StoreEnhancer
} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'

import { localeReducer } from './global/reducers'
import { getPersistConfig } from './persist'
import { RootReducerState } from './types'

const isProd = process.env.NODE_ENV === 'production'

const createRootReducer = () =>
  combineReducers<ReducersMapObject<RootReducerState, any>>({
    locale: localeReducer
  })

/**
 * Persist reducer whilelist.
 */
const persistentStoreWhitelist: string[] = []

const getBaseMiddlewares = (): Middleware[] => {
  const middlewares = [thunk, logger]
  isProd && middlewares.pop()

  return middlewares
}

const applyMiddlewares = (middlewares: Middleware[]) =>
  applyMiddleware(...middlewares)

const getProdMiddlewares = () => {
  const middlewares = [
    composeWithDevTools,
    applyMiddlewares,
    getBaseMiddlewares
  ]
  isProd && middlewares.shift()
  return middlewares
}

const enhancer = compose<StoreEnhancer>(...getProdMiddlewares())

const persistConfig = getPersistConfig(persistentStoreWhitelist)

const createRootStore = (initialState?: RootReducerState) => {
  const rootReducer = createRootReducer()
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, enhancer())
  const persistor = persistStore(store)

  return { store, persistor }
}

export default createRootStore
