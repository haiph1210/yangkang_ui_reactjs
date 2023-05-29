import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListUser from '../container/ListUser'
import UserInfo from '../modal/user-info/UserInfo'

const PublicRouterUser = () => {
    return (
        <div>
            <Routes >
            <Route path='/user' element={<ListUser />}></Route>
            <Route path="/userInfo/:id" element={<UserInfo />}></Route>
            </Routes>
        </div>
    )
}

export default PublicRouterUser
