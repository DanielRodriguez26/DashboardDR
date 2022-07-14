import { SIGNUP_FAIL, SIGNUP_SUCCESS } from "./type";

import axios from "axios";

export const signup =
    (first_name, last_name, email, password, re_password) =>
    async (dispath) => {
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
            re_password,
        });

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/user/`,
                body,
                config
            );

            if (res.status === 201) {
                dispath({
                    type: SIGNUP_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispath({
                    type: SIGNUP_FAIL,
                });
            }
        } catch (error) {
            dispath({
                type: SIGNUP_FAIL,
            });
        }
    };
