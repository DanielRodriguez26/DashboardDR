import {
    GET_TODO_SUCCESS,
    GET_TODO_FAIL,
    GET_TODO_CREATE_SUCCESS,
    GET_TODO_CREATE_FAIL,
    GET_TODO_UPDATE_SUCCESS,
    GET_TODO_UPDATE_FAIL,
    GET_TODO_DELETE_SUCCESS,
    GET_TODO_DELETE_FAIL,
} from "./types";
import axios from "axios";

export const get_todo = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/todo/view`,
            config
        );
        if (res.status === 200) {
            dispatch({
                type: GET_TODO_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: GET_TODO_FAIL,
            });
        }
    } catch (error) {
        dispatch({
            type: GET_TODO_FAIL,
        });
    }
};
export const todo_created = (title, description) => async (dispatch) => {
    console.log(title, description);
    const config = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
    const body = JSON.stringify({
        title,
        description,
    });
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/todo/created`,
            body,
            config
        );
        if (res.status === 200) {
            dispatch({
                type: GET_TODO_CREATE_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: GET_TODO_CREATE_FAIL,
            });
        }
    } catch (error) {
        dispatch({
            type: GET_TODO_CREATE_FAIL,
        });
    }
};
