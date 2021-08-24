import { PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Constants from '@/constants'

/**
 *
 * @param whitelist persist reducer whilelist.
 */
export const getPersistConfig = (
  whitelist: string[] = []
): PersistConfig<any> => ({
  key: Constants.APP_NAME,
  storage,
  whitelist,
  version: 1
})
