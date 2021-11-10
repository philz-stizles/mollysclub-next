import { HIDE_ALERT, SHOW_ALERT } from '../action-types'

const initialState = {
  isShowing: false,
  type: null,
  icon: null,
  message: null,
}

type Action = {
  type: string
  payload: any
}

const alertReducer = (state = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case SHOW_ALERT: {
      return {
        isShowing: true,
        message: payload,
      }
    }
    case HIDE_ALERT: {
      return {}
    }
    default:
      return state
  }
}

export default alertReducer
