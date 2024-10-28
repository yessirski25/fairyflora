import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteProtection from "./components/route-protections/ProtectedRoute"
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./components/auth-provider/AuthProvider";

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/dashboard" element={
                  <RouteProtection>
                    <Dashboard/>
                  </RouteProtection>
              }/>
            </Routes>
          </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
