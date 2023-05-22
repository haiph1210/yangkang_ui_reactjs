import './App.css';
import ListMenus from './main/container/menu-service/menu/component/ListMenus';
import Header from './main/header/Header';
import { ToastContainer } from 'react-toastify';
function App() {
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
     
  );
}

export default App;
