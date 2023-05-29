const initState = {
    tokenResponse: {
        token: '',
        user: {
            id: '',
            username: '',
            userCode: '',
            fullName: '',
            email: '',
            address: '',
            gender: '',
            status: '',
            role: '',
            imgUrl: '',
        }
    },
    auth: null,
    isLoading: false,
    isErrorr: false

}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'auth/login':
            return {
                ...state,
                isLoading: true,
                isErrorr: false
            }

        case 'auth/login-success':
            return {
                ...state,
                auth: true,
                tokenResponse: action.payload,
                isLoading: false,
                isErrorr: false
            }
        case 'auth/login-false':
            return {
                ...state,
                auth: false,
                tokenResponse: action.payload,
                isLoading: false,
                isErrorr: true
            }
        case 'auth/log-out':
            return {
                ...state,
                auth: false,
                tokenResponse: {
                    token: '',
                    user: {
                        id: '',
                        username: '',
                        userCode: '',
                        fullName: '',
                        email: '',
                        address: '',
                        gender: '',
                        status: '',
                        role: '',
                        imgUrl: '',
                    }
                },
                isLoading: false,
                isErrorr: false
            }
        // case 'auth/refresh':
        //     return
        default:
            return state;
    }
}

export default AuthReducer;