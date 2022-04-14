import { ADD_TODO, DELETE_TODO, SET_TODO } from "./contants"

const setTodo = (payload) => {
    return {
        type: SET_TODO,
        payload
    }
}

const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload         // value need add
    }
}

const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload         // id
    }
}

export { setTodo, addTodo, deleteTodo}