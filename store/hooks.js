
import { useContext } from 'react'
import Context from './Context'     // export defaule nen ko co {}

export const useStore = () => {
    const [ state, dispatch ] = useContext(Context)

    return [ state, dispatch ]
}