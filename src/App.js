import './App.css';
import { ToastContainer } from 'react-toastify';
import Slider from './main/slider/Slider';
function App() {
  return (
    <div>
      <div>
        {/* <Slider></Slider> */}

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
