import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserMenuRoleRouter from '../main/container/menu-service/menu/router/AdminMenu'
import Home from '../main/container/home/Home'
import UserInfo from '../main/container/user-service/user/modal/user-info/UserInfo'
import ListUser from '../main/container/user-service/user/container/ListUser'
import PublicRouterUser from '../main/container/user-service/user/router/PublicRouterUser'
import PublicRouterMenu from '../main/container/menu-service/menu/router/PubicRouterMenu'
import PublicRouterAuth from '../main/container/auth-service/Router/PublicRouterAuth'

const AppRouter = () => {
  return (
    <div>
        <PublicRouterMenu></PublicRouterMenu>
        <PublicRouterUser></PublicRouterUser>
        <PublicRouterAuth></PublicRouterAuth>
    </div>
  )
}

export default AppRouter
