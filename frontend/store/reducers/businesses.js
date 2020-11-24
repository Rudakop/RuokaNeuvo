import Actions from '../actions'

const BusinessesReducer = (state, action) => {
  switch (action.type) {
      case Actions.SET_BUSINESSES: 
        return {
          ...state,
          businesses: action.payload.businesses,
          total: action.payload.total,
        }
      
      case Actions.SET_LOCATION:
        return {
            ...state,
            location: action.payload.location
        };
      case Actions.LOAD_MORE: 
        return {
          ...state,
          offset: state.offset + state.limit
        }
      case Actions.APPEND_BUSINESSES: 
      return {
        ...state,
        businesses: [].concat(state.businesses, action.payload.businesses),
        total: action.payload.total,
      }
      default:
          return state
  }
}

export default BusinessesReducer