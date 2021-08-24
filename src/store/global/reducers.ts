import { handleActions } from 'redux-actions'
import * as ActionTypes from './actionTypes'
import { LocaleReducerState } from './types'

export const initialState: LocaleReducerState = {
  locale: 'zh-CN'
}

export const localeReducer = handleActions(
  {
    [ActionTypes.CHANGE_LOCALE]: (state, { payload }) => {
      return {
        ...state,
        locale: payload.locale
      }
    }
  },
  initialState
)
