import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000} // Automatically close the toast after 3000 milliseconds (3 seconds)
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default Toast;
