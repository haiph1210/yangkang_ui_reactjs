import React from 'react'
import PublicRouterUser from '../main/container/user-service/user/router/PublicRouterUser'
import PublicRouterMenu from '../main/container/menu-service/menu/router/PubicRouterMenu'
import PublicRouterAuth from '../main/container/auth-service/Router/PublicRouterAuth'
import PublicRouterCart from '../main/container/menu-service/cart/router/PublicRouterCart'

const AppRouter = () => {
  return (
    <div>
      <PublicRouterMenu></PublicRouterMenu>
      <PublicRouterCart></PublicRouterCart>
      <PublicRouterUser></PublicRouterUser>
      <PublicRouterAuth></PublicRouterAuth>
    </div>
  )
}

export default AppRouter
