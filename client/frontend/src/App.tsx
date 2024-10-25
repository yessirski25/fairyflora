import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<div>this is dashboard</div>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
