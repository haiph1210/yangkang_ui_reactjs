import './App.css';
import ListMenus from './main/container/menu-service/menu/component/ListMenus';
import FilterMenu from './main/container/menu-service/menu/filter/SearchMenu';
import UserMenuRoleRouter from './main/container/menu-service/menu/router/AdminMenu';
import Header from './main/header/Header';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <div>
      <UserMenuRoleRouter></UserMenuRoleRouter>
      </div>
      {/* <div>
      <Header></Header>
        <FilterMenu
        listMenus={ListMenus}
        ></FilterMenu>
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
       /> */}
    </div>
     
  );
}

export default App;
