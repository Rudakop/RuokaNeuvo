import Actions from '../actions'

const AuthReducer = (state, action) => {
  switch (action.type) {
      case Actions.SIGN_IN:
      case Actions.SIGN_UP: 
        return {
          ...state,
          user: {
            ...state.user,
            logged: true,
            profile: action.payload.userProfile
          },
        }
      
      case Actions.SIGN_OUT: 
      return {
        ...state,
        user: {
          ...state.user,
          logged: false,
          profile: null
        },
      }
      default:
          return state
  }
}

export default AuthReducer