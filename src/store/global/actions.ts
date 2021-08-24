import { createAction } from 'redux-actions'
import * as ActionTypes from './actionTypes'

export const updateLocale = createAction(
  ActionTypes.CHANGE_LOCALE,
  (locale: Locale) => ({ locale })
)
