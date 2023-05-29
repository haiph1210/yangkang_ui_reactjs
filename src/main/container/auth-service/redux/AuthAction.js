import { toast } from 'react-toastify';
import { APILogin } from '../service/AuthService'
export const LoginAction = (username, password) => {
    return async (dispatch) => {
        dispatch({
            type: 'auth/login',
        });
        try {
            const res = await APILogin(username, password);
            console.log(res);
            if (res && res.responseData) {
                const dataRes = res.responseData;
                dispatch({
                    type: 'auth/login-success',
                    payload: dataRes,
                })
                toast.success("Login Success,Navigate To Home <3");
            } else {
                if (res && res.status === 500) {
                    toast.error("Login false");
                    dispatch({
                        type: 'auth/login-false',
                    })
                }
            }
        } catch (error) {

        }
    }
}

export const LogOutAction = () => {
    return (dispatch) => {
        dispatch({
            type: 'auth/log-out'
        })
    }
}

export const RefreshAction = () => {
    return (dispatch) => {
        dispatch({
            type: 'auth/resfresh'
        })
    }
}