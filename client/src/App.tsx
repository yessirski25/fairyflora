import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage"
import { AdminDashboard } from './pages/AdminDashboard';
import { EmpDashboard } from "./pages/EmpDashboard";
import { Branch } from "./pages/Branch";
import { Employee } from "./pages/Employee";
import { Inventory } from "./pages/Inventory";
import { Services } from "./pages/Services";
import { Layout } from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/route-protections/ProtectedRoutes";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
            <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/home" element={
                <ProtectedRoute>
                  <Layout/>
                </ProtectedRoute>}>
                <Route path="admin-dashboard" element={<AdminDashboard/>} />
                <Route path="emp-dashboard" element={<EmpDashboard/>} />
                <Route path="branch" element={<Branch/>} />
                <Route path="employee" element={<Employee/>} />
                <Route path="inventory" element={<Inventory/>} />
                <Route path="services" element={<Services/>} />
              </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
