import { useReducer  } from "react";
import Context  from "./Context.js";
import reducer, { initState } from './reducer.js'
import logger from './logger'

function Provider({ children }) {
    const [ state, dispatch ] = useReducer(logger(reducer), initState)

    return (
        <Context.Provider value={[ state, dispatch ]}>
            { children }
        </Context.Provider>
    )
}

export default Provider