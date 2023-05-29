import React from 'react'
import Login from '../entity/Login'
import { Route, Routes } from 'react-router-dom'

const PublicRouterAuth = () => {
    return (
        <div>
            <Routes >
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    )
}

export default PublicRouterAuth
