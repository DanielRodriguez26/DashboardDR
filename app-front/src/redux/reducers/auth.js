import { SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions/type";

const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
    loading: false,
};

export default function Auth(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGNUP_SUCCESS:
        case SIGNUP_FAIL:
            localStorage.getItem("access");
            localStorage.getItem("refresh");
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: null,
                user: null,
                loading: false,
            };

        default:
            return state;
    }
}
