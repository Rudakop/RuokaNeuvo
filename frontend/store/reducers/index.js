import Actions from '../actions'
import BusinessesReducer from './businesses'
import AuthReducer from './auth'

const reducer = (state, action) => {
  switch(action.type) {
    case Actions.SET_BUSINESSES:
    case Actions.APPEND_BUSINESSES:
    case Actions.SET_LOCATION:
    case Actions.LOAD_MORE: {
      return BusinessesReducer(state, action)
    }

    case Actions.SIGN_IN:
    case Actions.SIGN_UP:
    case Actions.SIGN_OUT: {
      return AuthReducer(state, action)
    }

    default: {
      console.error(`Unknown action type ${action.type}`)
    }
  }

  throw new Error(`Action type '${action.type}' not recognized`)
}

export default reducer