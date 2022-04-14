import { ADD_TODO, DELETE_TODO, SET_TODO } from "./contants"

const initState = {
    todoInput: '',
    todos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state, 
                todoInput: action.payload
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case DELETE_TODO:
            const todos = [...state.todos]
            todos.splice(action.payload, 1)
            return {
                ...state,
                todos: [...todos]
                
            }

        default: 
            throw new Error('Invalid Action')
    }
}


export { initState }
export default reducer