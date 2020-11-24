import React, {createContext, useReducer} from "react"
import reducer from './reducers'
import * as __actions from './actions'

const initialState = {
    businesses: [],
    location: null,
    limit: 20,
    offset: 0,
    total: 0,
    user: {
      profile: null,
      logged: false,
    },
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export const Actions = __actions.default

export default Store