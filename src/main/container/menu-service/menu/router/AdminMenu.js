import React from 'react'
import Header from '../../../../header/Header';
import { ToastContainer } from 'react-toastify';
import ListMenus from '../component/ListMenus';
const UserMenuRoleRouter = () => {
  return (
    <div>
       <div>
      <Header></Header>
        <ListMenus></ListMenus>
      </div>
      <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
       />
    </div>
  )
}

export default UserMenuRoleRouter
