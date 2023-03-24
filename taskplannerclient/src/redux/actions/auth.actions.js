import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "../actionTypes/auth.actions.type";
import axios from "axios";

//provide {email,username,password,toast,history,from}
export const authRegister = (data) => async (dispatch) => {
   
    try {
        dispatch({ type:AUTH_LOGIN_REQUEST });
        const res = await axios.post(`https://taskplanner-production.up.railway.app/user/signup`, {...data})
        data.toast({
            title: `Welcome to instagarm`,
            description: "Registration successfull",
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
        });
        data.history(data.from)
        return dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        data.toast({
            title: `somthing went wrong`,
            description: `${error.response.data.error}`,
            status: "error",
            duration: 2000,
            isClosable: true,
            position:"top"
        })
        return dispatch({
            type: AUTH_LOGOUT,
            payload: {
                message: error.response.data,
            },
        });
    }
}

//provide {email,password,toast,history,from}
export const authLogin = (data) => async (dispatch) => {
    try {
        
        dispatch({ type: AUTH_LOGIN_REQUEST });
        const res = await axios.post(`https://taskplanner-production.up.railway.app/user/login`, {...data});
        data.toast({
            title: `Welcome to PP-Chat`,
            description: "Login successfull",
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
        });
        data.history(data.from)
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });

    } catch (error) {
        data.toast({
            title: `ERROR`,
            description: error.response.data,
            status: "error",
            duration: 2000,
            isClosable: true,
            position:"top"
        })
        dispatch({ type: AUTH_LOGIN_FAILURE, payload: { message: error.response.data } });
    }
}

export const authLogout = () => (dispatch) => {
    dispatch({ type: AUTH_LOGOUT });
}