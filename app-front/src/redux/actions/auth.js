<<<<<<< HEAD
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "./types";
=======
import { SIGNUP_FAIL, SIGNUP_SUCCESS } from "./type";

>>>>>>> 5cc3a1f91dfaee34ce48687a1e5486a18dca00f8
import axios from "axios";

export const signup =
    (first_name, last_name, email, password, re_password) =>
<<<<<<< HEAD
    async (dispatch) => {
        const config = {
            headers: {
                Accept: "application/json",
=======
    async (dispath) => {
        const config = {
            headers: {
>>>>>>> 5cc3a1f91dfaee34ce48687a1e5486a18dca00f8
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            re_password,
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
