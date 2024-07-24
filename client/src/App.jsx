import "./App.css";
import { Outlet, useLocation} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavMenu from "./components/navbar/Navbar";
import { AuthentificationProvider } from "./use_context/authentification";

function App() {
  const location = useLocation();
  const noNavBar = ["/"];

  return (
    <> 
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AuthentificationProvider>
      {noNavBar.includes(location.pathname) === false && <NavMenu /> }
        <Outlet />
      </AuthentificationProvider>
    </>
  );
}

export default App;
