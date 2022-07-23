import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "./types";

import axios from "axios";

export const signup =
    (first_name, last_name, email, password, dni) => async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            dni,
        });

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/user/created`,
                body,
                config
            );

            if (res.status === 200) {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type: SIGNUP_FAIL,
                });
            }
        } catch (err) {
            dispatch({
                type: SIGNUP_FAIL,
            });
        }
    };

export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        email,
        password,
    });

    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/user/login/verify`,
            body,
            config
        );

        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: LOGIN_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};
