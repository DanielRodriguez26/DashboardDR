import {
    GET_TODO_SUCCESS,
    GET_TODO_FAIL,
    GET_TODO_CREATE_SUCCESS,
    GET_TODO_CREATE_FAIL,
    GET_TODO_UPDATE_SUCCESS,
    GET_TODO_UPDATE_FAIL,
    GET_TODO_DELETE_SUCCESS,
    GET_TODO_DELETE_FAIL,
} from "../actions/types";

const initialState = {
    todos_item: null,
};

export default function Todos(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos_item: payload.todo,
            };
        case GET_TODO_FAIL:
            return {
                ...state,
                todos_item: null,
            };
        case GET_TODO_CREATE_SUCCESS:
            return {
                ...state,
                todos_item: payload.todo,
            };
        case GET_TODO_CREATE_FAIL:
            return {
                ...state,
                todos_item: null,
            };
        case GET_TODO_UPDATE_FAIL:
            return {
                ...state,
                todos_item: null,
            };
        case GET_TODO_UPDATE_SUCCESS:
            return {
                ...state,
                todos_item: payload.todo,
            };
        case GET_TODO_DELETE_FAIL:
            return {
                ...state,
                todos_item: null,
            };
        case GET_TODO_DELETE_SUCCESS:
            return {
                ...state,
                todos_item: payload.todo,
            };
        default:
            return state;
    }
}
