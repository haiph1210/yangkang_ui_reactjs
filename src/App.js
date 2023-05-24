import './App.css';
import UserMenuRoleRouter from './main/container/menu-service/menu/router/AdminMenu';
import Header from './main/header/Header';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <div>
      <Header></Header>
      <UserMenuRoleRouter></UserMenuRoleRouter>
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
     
  );
}

export default App;
