import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteProtection from "./components/route-protections/RouteProtection"
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={
              <RouteProtection>
                <Dashboard/>
              </RouteProtection>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
