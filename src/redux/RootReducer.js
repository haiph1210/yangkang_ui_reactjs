import React from 'react'
import {combineReducers} from 'redux'
import UserReducer from '../main/container/user-service/user/redux/UserReducer'
import AuthReducer from '../main/container/auth-service/redux/AuthReducer'
import RegisterReducer from '../main/container/auth-service/redux/RegisterReducer'
const RootReducer = combineReducers({
    user: UserReducer,
    auth: AuthReducer,
    authRegister : RegisterReducer,
})


export default RootReducer
