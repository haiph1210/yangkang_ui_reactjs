import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserMenuRoleRouter from '../main/container/menu-service/menu/router/AdminMenu'
import Home from '../main/container/home/Home'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/menu' element={<UserMenuRoleRouter/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRouter
